import express from "express";
import bodyParser from "body-parser";
import fs from "fs";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/create", (req, res) => {
  const { author, title, content, slug } = req.body;
  if (!author || !title || !content || !slug) {
    return res.status(400).send("All fields are required.");
  }
  // const autherName = req.body["author"];
  // const postTitle = req.body["title"];
  // const postContent = req.body["content"];
  const date = new Date();
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const completeDate =
    day[date.getDay()] +
    ", " +
    month[date.getMonth()] +
    " " +
    date.getDate() +
    " " +
    date.getFullYear() +
    " at " +
    date.getHours() +
    ":" +
    date.getMinutes();
  // console.log(autherName, postTitle, postContent, postDate);
  const postData = { title, completeDate, author, content, slug };
  console.log(postData);
  // console.log(postData);
  // res.render("index.ejs", postData);

  // fs.writeFile(slug + ".ejs", content, (err) => {
  //   if (err) throw err;
  //   console.log("The file has been saved!");
  // });
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
