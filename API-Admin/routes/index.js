const adminLogin = require("../controllers").adminLogin;
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
      message: "Welcome to the Admin API!"
    })
  );

  app.post('/api-admin/login', adminLogin.adminLogin);
  app.post('/api-admin/admin-register', adminLogin.adminRegister)
  app.get('/api-admin/profile', 
  passport.authenticate("jwt", { session: false }),
  adminLogin.getProfileAdmin)
  
};
