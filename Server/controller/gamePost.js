const _GamePOST = require("../model/GamePost");

exports.addGamePost = async function (req, res) {
  try {
    console.log(req.body);
    const adGamePost = await _GamePOST.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        gamePost: adGamePost,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};
exports.getOwnerAllGamePost = async function (req, res) {
  try {
    console.log(req.body);
    const adGamePost = await _GamePOST.find({ owner: req.params.id });

    res.status(201).json({
      status: "success",
      data: {
        ownerGamePost: adGamePost,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};
// get All memebers
exports.getAllGame = async function (req, res) {
  try {
    var query = require("url").parse(req.url, true).query;
    var type = query.type;
    var game = query.game;
    var search = query.search;
    var gamePost;

    //checking type of search
    if (type === "all") {
      gamePost = await _GamePOST.find().populate("owner");
      gamePost = gamePost.filter((el) => el.status === "Active");
    } else {
      gamePost = await _GamePOST
        .find({
          $or: [{ game_name: game }, { post_title: search }],
        })
        .populate("owner");
    }
    // find the total post
    const tot_mem = Object.keys(gamePost).length;

    res.status(201).json({
      status: "success",
      total: tot_mem,
      data: {
        gamePost: gamePost,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};

exports.getGamePostByID = async function (req, res) {
  try {
    var gamePost = await _GamePOST.findById(req.params.id).populate("owner");

    res.status(201).json({
      status: "success",
      data: {
        gamePost: gamePost,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};

exports.updateGamePost = async function (req, res) {
  try {
    var gamePost = await _GamePOST.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(201).json({
      status: "success",
      data: {
        gamePost: gamePost,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};
