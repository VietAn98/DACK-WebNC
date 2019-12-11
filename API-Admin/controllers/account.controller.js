const db = require("../model/account.model");
const nodemailer = require("nodemailer");

module.exports = {
  getListAccountTeacher: (req, res) => {
    return db
      .getListAcc()
      .then(list => {
        res.status(200).json(list);
      })
      .catch(err => res.status(400).json({ message: "thất bại", err: err }));
  },

  getDetailAccount: (req, res) => {
    const id = req.params.id;
    return db
      .getAccById(id)
      .then(resp => {
        res.status(200).json(resp[0]);
      })
      .catch(err => res.status(400).json({ message: "thất bại", err: err }));
  },
  getListAccountStudent: (req, res) => {
    return db
      .getListAccstudent()
      .then(list => {
        res.status(200).json(list);
      })
      .catch(err => res.status(400).json({ message: "thất bại", err: err }));
  },

  getAddressByUser: (req, res) => {
    const id = req.params.idDistrict;
    return db
      .getAddressByUser(id)
      .then(result => {
        res.status(200).json(result[0]);
      })
      .catch(err => res.status(400).json({ message: "thất bại", err: err }));
  },

  getDistrictByUser: (req, res) => {
    const id = req.params.idDistrict;
    return db
      .getDistrictByUser(id)
      .then(result => {
        res.status(200).json(result[0]);
      })
      .catch(err => res.status(400).json({ message: "thất bại", err: err }));
  },

  updateStateAccount: async (req, res) => {
    //console.log(req.body.adLock);
    const newState = {
      userId: req.body.userId,
      adLock: req.body.adLock
    };
    await db.updateState(newState);
    db.getAccById(req.body.userId).then(result => {
      var transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: "lchung9739@gmail.com",
          pass: "0309hung"
        }
      });
      var url = "https://uber-for-tuitor-ui-user.herokuapp.com/";

      var mainOptionsLock = {
        // thiết lập đối tượng, nội dung gửi mail
        from: "ADMIN FROM WEBSITE UBER FOR TUITOR",
        to: result[0].gmail, //đến đâu
        subject: "Khóa tài khoản",
        html:
          "<p>Tài khoản của quý khách đã bị khóa, vui lòng liên hệ với chung tôi để biết thêm chi tiết.</p></br><b>SĐT: 0339083303<b>"
      };

      var mainOptionsUnlock = {
        // thiết lập đối tượng, nội dung gửi mail
        from: "ADMIN FROM WEBSITE UBER FOR TUITOR",
        to: result[0].gmail, //đến đâu
        subject: "Mở tài khoản",
        html:
          '<p>Tài khoản của quý khách đã được mở lại, vui lòng vào website để kiểm tra lại.</p></br><a href="' +
          url +
          '"><b>Click here...!!!</b></a>'
      };

      if (result[0].adLock) {
        transporter.sendMail(mainOptionsUnlock, function(err, info) {
          if (err) {
            console.log("err", err);
          }
        });
      } else {
        transporter.sendMail(mainOptionsLock, function(err, info) {
          if (err) {
            console.log("err", err);
          }
        });
      }
      res.status(200).json({ mesage: "cập nhật thành công" });
    });
  }
};
