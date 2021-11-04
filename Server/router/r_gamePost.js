const express = require("express");
const gamePostController = require("./../controller/gamePost");
const gamePostRouter = express.Router();
const auth = require("../middleware/authJWT");
// POST
// localhost:8000/v1/member

gamePostRouter
  .route("/gamepost")
  .post(gamePostController.addGamePost)
  .get(gamePostController.getAllGame);

// POST
// localhost:8000/v1/member/12345
gamePostRouter
  .route("/gamepost/:id")
  .patch(gamePostController.updateGamePost)
  .get(gamePostController.getGamePostByID);

module.exports = gamePostRouter;
