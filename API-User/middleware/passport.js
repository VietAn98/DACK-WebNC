const passport = require("passport");
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
var UserModel = require("../model/account.model");

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: "lchung_jwt_secret"
    },
    function(jwtPayload, cb) {
      //find the user in db if needed
      UserModel.getAccByEmailRegister(jwtPayload.gmail)
        .then(user => {
          return cb(null, user[0]);
        })
        .catch(err => {
          return cb(err);
        });
    }
  )
);

passport.use(
  new LocalStrategy(
    {
      usernameField: "gmail",
      passwordField: "password"
    },
    function(gmail, password, cb) {
      
      //this one is typically a DB call. Assume that the returned user object is pre-formatted and ready for storing in JWT
      UserModel.getAccByEmailRegister(gmail)
        .then(rows => {
          var user = null;
          var userId = rows[0].userId;
          var name = rows[0].name;
          var gender = rows[0].gender;
          var districtId = rows[0].districtId;
          var caterogyUser = rows[0].caterogyUser;
          if (rows[0] != null && bcrypt.compareSync(password, rows[0].password)) {
            user = { gmail, userId, name, gender, districtId, caterogyUser};
          }

          // console.log(user)
          if (!user) {
            return cb(null, false, { message: "Incorrect email or password." });
          }
          return cb(null, user, { message: "Logged In Successfully" });
        })
        .catch(err => cb(err));
    }
  )
);
