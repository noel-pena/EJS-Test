import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let letters = ""

app.use(bodyParser.urlencoded({ extended: true }));

function logger(req, res, next){
  letters = (req.body["fName"] + req.body["lName"]).length;
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.render("index.ejs", {letterLength: letters});
});


app.post("/submit", (req, res) => {
  res.render("index.ejs", {letterLength: letters});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
