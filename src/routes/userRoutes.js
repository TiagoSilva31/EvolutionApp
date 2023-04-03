const { verify } = require("jsonwebtoken")
const { create, get, getId, update, remove } = require("../controllers/userController")
const { verifyToken } = require("../middlewares/authMiddlewares")

exports.userRoutes = app => {
    app.post("/user", create)
    app.get("/user", verifyToken, get)
    app.get("/user/:id", verifyToken, getId)
    app.put("/user/:id", verifyToken, update)
    app.delete("/user/:id", verifyToken, remove)
}