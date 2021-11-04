const express = require("express");
const memberController = require("./../controller/soldGame");
const memberRouter = express.Router();
const auth = require("../middleware/authJWT");
// POST
// localhost:8000/v1/member

memberRouter.route("/soldgame").post(memberController.addSoldPost);

// POST
// localhost:8000/v1/member/12345
memberRouter.route("/soldgame/:id").get(memberController.getSoldGameById);

module.exports = memberRouter;
