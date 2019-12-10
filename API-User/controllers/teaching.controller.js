const db = require("../model/account.model");
const dbSkill_teacher = require("../model/skill_teacher.model");

module.exports = {
  getListTeaching: async (req, res) => {
    return await db
      .getListTeaching()
      .then(teachers => {
        res.status(200).json(teachers);
      })
      .catch(err =>
        res.status(400).json({ message: "Không có giáo viên nào", error: err })
      );
  },

  // cập nhật thông tin user
  updateInforTeacher: (req, res) => {
    var gmail = req.body.gmail;
    let skills = req.body.skill;
    var listSkill = skills.toString().split(",");
    // console.log(listSkill);

    return db.getAccByEmail(gmail).then(user => {
      let entity = {
        userId: user[0].userId,
        introduce: req.body.introduce,
        avatar: req.body.avatar,
        price: req.body.price,
        name: req.body.name,
        gender: req.body.gender,
        districtId: req.body.districtId
      };
      dbSkill_teacher.deleteSkillTeacher(user[0].userId).then(rs => {
        listSkill.forEach(element => {
          let skill_teacher = {
            userId: user[0].userId,
            skillId: element
          };
          dbSkill_teacher.updateSkillTeacher(skill_teacher);
          // if (element) {
          //   dbSkill_teacher
          //     .getSkillTeacher(element, user[0].userId)
          //     .then(row => {
          //       if (row.length === 0) {
          //         let skill_teacher = {
          //           userId: user[0].userId,
          //           skillId: element
          //         };
          //         dbSkill_teacher.updateSkillTeacher(skill_teacher);
          //       }
          //     });
          // }
        });
      });

      db.updateAcc(entity)
        .then(id => res.status(200).json({ message: "Cập nhật thành công" }))
        .catch(err =>
          res.status(400).json({ message: "Cập nhật thất bại", err: err })
        );
    });
  },

  // lấy danh sách kĩ năng
  getListSkillByUser: (req, res) => {
    const id = req.params.id;
    return dbSkill_teacher
      .getListSkillTeacher(id)
      .then(skills => {
        res.status(200).json(skills);
      })
      .catch(err =>
        res.status(400).json({ message: "Không có skill nào", error: err })
      );
  },

  // lấy chi tiết giáo viên
  getTeacherByid: (req, res) => {
    const id = req.params.id;
    return db
      .getDetailTeacher(id)
      .then(teacher => {
        res.status(200).json(teacher[0]);
      })
      .catch(err => {
        res
          .status(400)
          .json({ message: "Không có chi tiết giáo  viên", error: err });
      });
  },

  // lấy danh sách skill
  getListSkills: (req, res) => {
    return db
      .getListSkill()
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  },

  //lấy 6 giáo viên có tỉ lệ thành công cao nhất
  getTopTeacher: (req, res) => {
    return db
      .getTopTeacher()
      .then(listTop => {
        res.status(200).json(listTop);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  },

  getTeaherbyPrice: (req, res) => {
    const minPrice = req.body.minPrice;
    const maxPrice = req.body.maxPrice;
    return db
      .getTeacherByPrice(minPrice, maxPrice)
      .then(teachers => {
        res.status(200).json(teachers);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  },

  getTeacherPriceIncrease: (req, res) => {
    db.getTeacherIncreaseByPrice()
      .then(teachers => {
        res.status(200).json(teachers);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  },

  getTeacherPriceDecrease: (req, res) => {
    db.getTeacherDecreaseByPrice()
      .then(teachers => {
        res.status(200).json(teachers);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  },

  getTeacherRateSuccessIncrease: (req, res) => {
    db.getTeacherDecreaseByPrice()
      .then(teachers => {
        res.status(200).json(teachers);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  },
  
  getTeacherRateSuccessDecrease: (req, res) => {
    db.getTeacherDecreaseByPrice()
      .then(teachers => {
        res.status(200).json(teachers);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  }
};
