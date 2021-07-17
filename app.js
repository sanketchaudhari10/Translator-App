const translate = require("@vitalets/google-translate-api");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

app = express();

const hostname = "127.0.0.1";
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "static")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render(path.join(__dirname, "views/index.pug"), {
    text_to_translate: "",
    translated_text: "",
  });
});

app.get("*", function (req, res) {
  res.redirect("/");
});

app.post("/", (req, res) => {
  // console.log(req.body.text);
  // console.log(req.body.language);

  translate(req.body.text, { to: req.body.language })
    .then((response) => {
      // console.log(response.text);
      res.render("index.pug", {
        text_to_translate: req.body.text,
        translated_text: response.text,
      });
    })
    .catch((err) => {
      console.error(err);
    });
});

app.listen(port, () => {
  console.log(`App running at http://${hostname}:${port}`);
});
