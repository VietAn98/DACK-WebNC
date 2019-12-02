const registerController = require("../controllers").registerController;
const loginController = require("../controllers").loginController;
const passport = require("passport");

module.exports = app => {
  // Add headers
  app.use(function(req, res, next) {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

    // Request methods you wish to allow
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );

    // Request headers you wish to allow
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);

    // Pass to next layer of middleware
    next();
  });
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the Todos API!"
    })
  );
  app.get("/api/getList", registerController.list);
  app.post("/api/register-user", registerController.createAccount);
  app.get("/api/verify-account", registerController.verifyAccount); // chưa có trong file word
  app.post("/api/login-user", loginController.login);

  // chưa có trong file word
  app.get("/api/profile",
    passport.authenticate("jwt", { session: false }),
    loginController.getProfile
  );

  app.post("/api/forget-password", loginController.forgetPassw);
  app.post("/api/update-new-password", loginController.updateNewPassw);
  app.post("/api/add-profile-teacher", loginController.addProfileTeacher)
};
