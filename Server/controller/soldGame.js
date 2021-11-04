const _SOLDGAME = require("../model/soldGames");

// get All memebers
exports.getSoldGameById = async function (req, res) {
  try {
    var soldGame = await _SOLDGAME
      .find({ owner: req.params.id })
      .populate("owner")
      .populate("postId");

    // const tot_mem = Object.keys(members).length;

    res.status(201).json({
      status: "success",
      total: soldGame,
      data: {
        soldGame: soldGame,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};

exports.addSoldPost = async function (req, res) {
  try {
    console.log(req.body);
    const soldGame = await _SOLDGAME.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        soldGame: soldGame,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};
