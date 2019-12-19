const passport = require("passport");
const randomstring = require("randomstring");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");
const db = require("../model/account.model");

module.exports = {
  adminLogin: async (req, res) => {
    passport.authenticate("local", { session: false }, (err, user, info) => {
      if (err || !user) {
        return res.status(400).json({
          message: "Something is not right"
        });
      }
      req.login(user, { session: false }, err => {
        if (err) {
          res.send(err);
        }
        // generate a signed son web token with the contents of user object and return it in the response
        const token = jwt.sign(user, "lchung_jwt_secret");
        return res.json({ token });
      });
    })(req, res);
  },

  // lấy thông tin người bằng xác thực token
  getProfileAdmin: (req, res) => {
    res.json(req.user);
  },

  adminRegister: (req, res) => {
    const gmail = req.body.gmail;
    let keyPass = randomstring.generate(100);
    return db.getAccByEmail(gmail).then(gmails => {
      if (gmails.length === 0) {
        var salt = bcrypt.genSaltSync(10);
        var hashPassw = bcrypt.hashSync(req.body.password, salt);

        const entity = {
          gmail: req.body.gmail,
          name: req.body.name,
          password: hashPassw,
          categoryUser: 2,
          state: 1,
          keyPass: keyPass
        };

        db.createAcc(entity)
          .then(result => {
            res.status(200).json({ message: "Tạo thành công" });
          })
          .catch(err => {
            res.status(400).json({ error: err });
          });
      } else {
        res.status(400).json({ message: "Tạo không thành công" });
      }
    });
  },

  // quên mật khẩu
  forgetPassw: (req, res) => {
    const gmail = req.body.gmail;
    db.getAccByEmail(gmail).then(row => {
      if (row.length > 0) {
        var url =
          "http://localhost:3000/update-new-password?email=" +
          req.body.gmail +
          "&key=" +
          row[0].keyPass;
        var transporter = nodemailer.createTransport({
          service: "Gmail",
          auth: {
            user: "lchung9739@gmail.com",
            pass: "0309hung"
          }
        });
        var mainOptions = {
          // thiết lập đối tượng, nội dung gửi mail
          from: "ADMIN gia sư online",
          to: gmail, //đến đâu
          subject: "Email lấy lại mật khẩu từ website gia sư online",
          html:
            '<p>Đây là thông tin bảo mật, đừng để nó public ra ngoài</p></br><a href="' +
            url +
            '"><b>Click here to reset password</b></a>'
        };
        transporter.sendMail(mainOptions, function(err, info) {
          if (err) {
            console.log(err);
          } else {
            console.log("Message sent: " + info);
            res.status(200).send({ message: "Gửi thông tin xác thực đến email thành công" });
          }
        });
      } else {
        res.status(200).send("email không chính xác");
      }
    });
  },

  // cập nhật password mới
  updateNewPassw: (req, res) => {
    var mail = req.query.email;
    var keyPass = req.query.key;
    if (mail && keyPass) {
      var pass = req.body.newPass;
      var salt = bcrypt.genSaltSync(10);
      var hashPassw = bcrypt.hashSync(pass,salt);
      db.getAccByEmail(mail).then(row => {
        if(keyPass === row[0].keyPass)
        {
          var entity = {
            userId: row[0].userId,
            password: hashPassw,
            keyPass : randomstring.generate(100),
          };
          db.updateAcc(entity)
            .then(id => {
              res.status(200).json({ message: "cập nhật mật khẩu thành công" });
            })
            .catch(err => {
              console.log(err);
              res.status(400).json({ message: "Cập nhật mật khẩu thất bại, đường dẫn không chính xác" });
            });
        }
        else {
          res.status(400).json({ message: "Cập nhật mật khẩu thất bại" });
        }
      });
    }
    else {
      res.status(400).json({ message: "Đường truyền không chính xác" });
    }

  },

  updatePassword: (req, res) => {
    const id = req.body.id;
    const oldPassw = req.body.oldPassw
    const newPassw = req.body.newPassw
    const salt = bcrypt.genSaltSync(10);
    const hashPassw = bcrypt.hashSync(newPassw,salt);
    console.log(newPassw);

    db.getAccAdmin(id).then(result => {
      if(bcrypt.compareSync(oldPassw, result[0].password))
      {
       const newAcc = {
          userId : id,
          password : hashPassw,
        }
        db.updateAcc(newAcc)
            .then(id => {
              res.status(200).json({ message: "cập nhật mật khẩu thành công" });
            })
            .catch(err => {
              console.log(err);
              res.status(400).json({ message: "Cập nhật mật khẩu thất bại" });
            });
      } else {
        res.status(400).json({message: 'Mật khẩu cũ không chính xác'})
      }
    })
    .catch(e => { 
      console.log(e);
    });
  },

  getMailByKeyPass: (req,res) => {
    // console.log(req.query.keyPass)
    db.getAccAdminByKeyPass(req.query.keyPass).then(result => {
      res.status(200).json(result);
    })
  }
};
