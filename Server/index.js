const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path: "./config.env" });
const cors = require("cors");
const morgan = require("morgan");
// const { use } = require("./router/member_router");

// Middlwares
const app = express();
app.use(express.json());

app.use(cors());
app.use(morgan("tiny"));

// .env
const port = process.env.PORT || 8000;

// connection
mongoose
  .connect(process.env.DATABASE_CONNECTION, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(console.log("Database connected..."))
  .catch((er) => console.log(er));

// call routers
// Smart School
// app.use("/v1", require("./router/SAttendanceRouter"));
// app.use("/v1", require("./router/SStudentRouter"));
// app.use(function (req, res, next) {
//   res.header(
//     "Access-Control-Allow-Headers",
//     "x-access-token, Origin, Content-Type, Accept"
//   );
//   next();
// });

app.use("/v1", require("./router/r_member"));
app.use("/v1", require("./router/r_login"));
app.use("/v1", require("./router/r_gamePost"));
app.use("/v1", require("./router/r_ownerGamePost"));
app.use("/v1", require("./router/r_soldGame"));
// information
app.get("/", (req, res) => {
  console.log("data");
  res.status(200).json({
    message: "Api Working",
  });
});
app.listen(port, () => {
  console.log("server Activited");
});
