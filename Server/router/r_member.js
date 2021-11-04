const express = require("express");
const memberController = require("./../controller/member");
const memberRouter = express.Router();
const auth = require("../middleware/authJWT");
// POST
// localhost:8000/v1/member

memberRouter
  .route("/member")
  .post(memberController.addMember)
  .get(memberController.getAllMembers);

// POST
// localhost:8000/v1/member/12345
memberRouter
  .route("/member/:id")
  .patch(memberController.updateMemberByID)
  .get(memberController.getMemeberByID);

module.exports = memberRouter;
