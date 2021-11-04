const express = require("express");
const ownerGamePostController = require("./../controller/gamePost");
const ownerGamePostRouter = express.Router();
const auth = require("../middleware/authJWT");
// POST
// localhost:8000/v1/member
ownerGamePostRouter
  .route("/ownergamepost/:id")
  .get(ownerGamePostController.getOwnerAllGamePost);

module.exports = ownerGamePostRouter;
