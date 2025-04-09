const userRoutes = require("express").Router();
const { signUp, login } = require("../Controllers/userController");

userRoutes.post("/signup", signUp);
userRoutes.post("/login", login);

module.exports = userRoutes;
