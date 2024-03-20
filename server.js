var exphbs = require("express-handlebars");
const express = require("express");
const path = require("path");
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views/"));

app.engine("hbs", exphbs.engine({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index", {
    name: "Sumit",
    des: "loremladmalksmd",
    isCompleted: true,
    isDisplayList: false,
    people: ["AB", "CS", "Ef"],
    myObj: {
      name: "akbar",
      age: 20,
      year: 2022,
    },
  });
});

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(8080, () => {
  console.log("Server is Listing on PORT 8080");
});
