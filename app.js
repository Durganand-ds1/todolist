const express = require("express");
const bodyParser = require("body-parser");
const { urlencoded, text } = require("body-parser");
const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
let as = [];
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.render("list", { nlists: as });
});
app.post("/", (req, res) => {
  a = req.body.na;
  as.push(a);
  console.log(as);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("its working");
});
