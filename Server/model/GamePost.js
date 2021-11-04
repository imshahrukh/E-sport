const mongoose = require("mongoose");

const GamePost = new mongoose.Schema({
  game_name: {
    type: String,
    required: true,
  },
  post_title: {
    type: String,
    required: true,
  },
  game_level: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Member",
  },

  //   sold closed active
  status: {
    type: String,
    required: true,
  },

  game_point: {
    type: String,
    required: true,
  },
  discription: {
    type: String,
    required: true,
  },
  secrete_code: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: [String],
  user_name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("GamePost", GamePost);
