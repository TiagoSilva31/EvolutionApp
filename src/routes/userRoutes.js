const { create, get, getId, update, remove } = require("../controllers/userController")

exports.userRoutes = app => {
    app.post("/user", create)
    app.get("/user", get)
    app.get("/user/:id", getId)
    app.put("/user/:id", update)
    app.delete("/user/:id", remove)
}
// aula 05 8 min
