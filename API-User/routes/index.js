const registerController = require("../controllers").registerController;
const loginController = require("../controllers").loginController;
const passports = require("passport");

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
  app.post("/api/login", loginController.login);
  
  // chưa có trong file word
  app.get("/api/profile",
    passports.authenticate('jwt', { session: false }),
    loginController.getProfile
  );
  
  app.post("/api/forget-password", loginController.forgetPassw);
  app.post("/api/update-new-password" , loginController.updateNewPassw)
  

  // app.post('/api/todos', todosController.create);
  // // app.get('/api/todos/:todoId', todosController.retrieve);
  // app.get('/api/todos/:todoId', todosController.show);
  // app.put('/api/todos/:todoId', todosController.update);
  // app.delete('/api/todos/:todoId', todosController.destroy);

  // app.post('/api/todos/:todoId/items', todoItemsController.create);
  // app.put('/api/todos/:todoId/items/:todoItemId', todoItemsController.update);
  // app.delete(
  //     '/api/todos/:todoId/items/:todoItemId', todoItemsController.destroy
  // );

  // // For any other request method on todo items, we're going to return "Method Not Allowed"
  // app.all('/api/todos/:todoId/items', (req, res) =>
  // res.status(405).send({
  //     message: 'Method Not Allowed',
  // }));
};
