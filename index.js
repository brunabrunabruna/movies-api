const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const app = express();

const moviesList = [
  {
    title: "star wars",
    director: "director 1",
  },
  {
    title: "film 2",
    director: "director 2",
  },
  {
    title: "film 3",
    director: "director 3",
  },
  {
    title: "film 4",
    director: "director 4",
  },
  {
    title: "film 5",
    director: "director 5",
  },
  {
    title: "film 6",
    director: "director 6",
  },
  {
    title: "film 7",
    director: "director 7",
  },
  {
    title: "film 8",
    director: "director 8",
  },
  {
    title: "film 9",
    director: "director 9",
  },
  {
    title: "film 10",
    director: "director 10",
  },
];

// create a write stream (in append mode)
// a ‘log.txt’ file is created in root directory
const accessLogStream = fs.createWriteStream(path.join(__dirname, "log.txt"), {
  flags: "a",
});

//setup the logger
// app.use(morgan("common"));
app.use(morgan("combined", { stream: accessLogStream }));

//shortcut so i dont have to res.send() all files in the public folder
app.use(express.static("public"));

app.get("/", (req, res) => {
  let responseText = "Welcome to my app!";
  res.send(responseText);
});

app.get("/movies", (req, res) => {
  res.json(moviesList);
});

// app.get("/secreturl", (req, res) => {
//   let responseText = "This is a secret url with super top-secret content.";
//   responseText += "<small>Requested at: " + req.requestTime + "</small>";
//   res.send(responseText);
// });

//error handling middleware function
//should be last, but before app.listen()
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("something broke");
});

app.listen(8080, () => {
  console.log("Your app is listening on port 8080.");
});
