const mongoose = require("mongoose");

const SoldGames = new mongoose.Schema({
  owner: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Member",
  },
  postId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "GamePost",
  },
});
module.exports = mongoose.model("SoldGames", SoldGames);
