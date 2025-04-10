const projectRouter = require("express").Router();
const {
  createProject,
  getUserProject,
} = require("../Controllers/projectController");
const { auth } = require("../Middleware/AuthMiddleware");

projectRouter.post("/create", auth, createProject);
projectRouter.get("/project", auth, getUserProject);

module.exports = userRoutes;
