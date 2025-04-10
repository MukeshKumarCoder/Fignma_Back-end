const designFIleRoute = require("express").Router();
const { auth } = require("../Middleware/AuthMiddleware");
const {
  createDesignFile,
  getDesignFile,
  saveCanvasData,
} = require("../Controllers/designFileController");

designFIleRoute.post("/create-design", auth, createDesignFile);
designFIleRoute.put("/:id", auth, saveCanvasData);
designFIleRoute.get("/:id", auth, getDesignFile);

module.exports = designFIleRoute
