const express = require("express");
const app = express();

const path = require("path");

// const port = process.env.PORT || 5000;
const port = 5000;

if (process.env.NODE_ENV === "production") {
  console.log("sssssssssss");
  app.use(express.static("build/"));
  app.get("*", (r, q) => {
    r.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

// console.log("sssssssssss");
// app.use(express.static("build/"));
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "build", "index.html"));
// });
app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log("server is run");
});
