const _MEMBER = require("../model/Member");
const config = require("../config/auth.config");
var jwt = require("jsonwebtoken");

// get All memebers
exports.createLogin = async function (req, res) {
  try {
    const { password, email } = req.body;
    // console.log(req.body);
    var members = await _MEMBER.find({
      $and: [{ password: password }, { email: email }],
    });

    const tot_mem = Object.keys(members).length;
    var token;
    // Success so create a token
    if (tot_mem !== 0) {
      // Create a tokeen
      token = jwt.sign({ id: members[0]._id }, config.secret, {
        expiresIn: 86400, // 24 hours
      });
    }
    res.status(201).json({
      status: "success",
      total: tot_mem,
      access_token: token,
      member: members,
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};
