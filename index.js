const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const { request } = require("http");
const bodyParser = require("body-parser");
const uuid = require("uuid");
const mongoose = require("mongoose");
const Models = require("./models");
const { error } = require("console");

const Movies = Models.Movie;
const Users = Models.User;

mongoose.connect("mongodb://localhost:27017/cfDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let users = [
  { id: 1, name: "kim", favoriteMovies: [] },
  { id: 2, name: "joe", favoriteMovies: [] },
];

let movies = [
  {
    title: "starwars",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    genre: { name: "drama", description: "genre description here" },
    director: {
      name: "director1",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      born: 1940,
      death: "",
    },
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Foriginalvintagemovieposters.com%2Fwp-content%2Fuploads%2F2018%2F06%2FStar-Wars-5672-768x1162.jpg&f=1&nofb=1&ipt=d191eb7a7592ede00a4efb69d08105b59832ac04e24f4d6e8eab7df59bc5537b&ipo=images",
    feature: true,
  },
  {
    title: "film 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    genre: { name: "thriller", description: "genre description here" },
    director: {
      name: "director 1",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      born: 1940,
      death: "",
    },
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Foriginalvintagemovieposters.com%2Fwp-content%2Fuploads%2F2018%2F06%2FStar-Wars-5672-768x1162.jpg&f=1&nofb=1&ipt=d191eb7a7592ede00a4efb69d08105b59832ac04e24f4d6e8eab7df59bc5537b&ipo=images",
    feature: true,
  },
  {
    title: "film 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    genre: { name: "thriller", description: "genre description here" },
    director: {
      name: "director 1",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      born: 1940,
      death: "",
    },
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Foriginalvintagemovieposters.com%2Fwp-content%2Fuploads%2F2018%2F06%2FStar-Wars-5672-768x1162.jpg&f=1&nofb=1&ipt=d191eb7a7592ede00a4efb69d08105b59832ac04e24f4d6e8eab7df59bc5537b&ipo=images",
    feature: true,
  },
  {
    title: "film 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    genre: { name: "thriller", description: "genre description here" },
    director: {
      name: "director 1",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      born: 1940,
      death: "",
    },
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Foriginalvintagemovieposters.com%2Fwp-content%2Fuploads%2F2018%2F06%2FStar-Wars-5672-768x1162.jpg&f=1&nofb=1&ipt=d191eb7a7592ede00a4efb69d08105b59832ac04e24f4d6e8eab7df59bc5537b&ipo=images",
    feature: true,
  },
  {
    title: "film 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    genre: { name: "thriller", description: "genre description here" },
    director: {
      name: "director 1",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      born: 1940,
      death: "",
    },
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Foriginalvintagemovieposters.com%2Fwp-content%2Fuploads%2F2018%2F06%2FStar-Wars-5672-768x1162.jpg&f=1&nofb=1&ipt=d191eb7a7592ede00a4efb69d08105b59832ac04e24f4d6e8eab7df59bc5537b&ipo=images",
    feature: true,
  },
  {
    title: "film 6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    genre: { name: "thriller", description: "genre description here" },
    director: {
      name: "director 1",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      born: 1940,
      death: "",
    },
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Foriginalvintagemovieposters.com%2Fwp-content%2Fuploads%2F2018%2F06%2FStar-Wars-5672-768x1162.jpg&f=1&nofb=1&ipt=d191eb7a7592ede00a4efb69d08105b59832ac04e24f4d6e8eab7df59bc5537b&ipo=images",
    feature: true,
  },
  {
    title: "film 7",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    genre: { name: "thriller", description: "genre description here" },
    director: {
      name: "director 1",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      born: 1940,
      death: "",
    },
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Foriginalvintagemovieposters.com%2Fwp-content%2Fuploads%2F2018%2F06%2FStar-Wars-5672-768x1162.jpg&f=1&nofb=1&ipt=d191eb7a7592ede00a4efb69d08105b59832ac04e24f4d6e8eab7df59bc5537b&ipo=images",
    feature: true,
  },
  {
    title: "film 8",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    genre: { name: "thriller", description: "genre description here" },
    director: {
      name: "director 1",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      born: 1940,
      death: "",
    },
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Foriginalvintagemovieposters.com%2Fwp-content%2Fuploads%2F2018%2F06%2FStar-Wars-5672-768x1162.jpg&f=1&nofb=1&ipt=d191eb7a7592ede00a4efb69d08105b59832ac04e24f4d6e8eab7df59bc5537b&ipo=images",
    feature: true,
  },
  {
    title: "film 9",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    genre: { name: "thriller", description: "genre description here" },
    director: {
      name: "director 1",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      born: 1940,
      death: "",
    },
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Foriginalvintagemovieposters.com%2Fwp-content%2Fuploads%2F2018%2F06%2FStar-Wars-5672-768x1162.jpg&f=1&nofb=1&ipt=d191eb7a7592ede00a4efb69d08105b59832ac04e24f4d6e8eab7df59bc5537b&ipo=images",
    feature: true,
  },
  {
    title: "film 10",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    genre: { name: "thriller", description: "genre description here" },
    director: {
      name: "director 1",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      born: 1940,
      death: "",
    },
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Foriginalvintagemovieposters.com%2Fwp-content%2Fuploads%2F2018%2F06%2FStar-Wars-5672-768x1162.jpg&f=1&nofb=1&ipt=d191eb7a7592ede00a4efb69d08105b59832ac04e24f4d6e8eab7df59bc5537b&ipo=images",
    feature: true,
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

//shortcut so i dont have to res.send() all files in the public folder (right now just documentation.html)
app.use(express.static("public"));

//MOVIES
app.get("/", (request, response) => {
  let responseText = "It's Movie Night !";
  response.send(responseText);
});

//Return a list of ALL movies to the user;
app.get("/movies", async (request, response) => {
  await Movies.find({})
    .then((movies) => {
      return response.status(201).json(movies);
    })
    .catch((err) => {
      console.log(err);
      response.status(500).send(`error: ${err}`);
    });
});

// Return data (description, genre, director, image URL, whether it’s featured or not) about a single movie by title to the user;

app.get("/movies/:title", async (request, response) => {
  await Movies.findOne({ title: request.params.title })
    .then((movie) => {
      response.status(200).json(movie);
    })
    .catch((err) => {
      console.log(err);
      response.status(500).send(`error: ${err}`);
    });
});
//Return data about a genre (description) by name/title (e.g., “Thriller”);
app.get("/movies/genres/:genreName", async (request, response) => {
  await Movies.findOne({ "genre.name": request.params.genreName })
    .then((genre) => {
      response.status(200).json(genre);
    })
    .catch((err) => {
      console.log(err);
      response.status(500).send(`error: ${err}`);
    });
});

// Return data about a director (bio, birth year, death year) by name;
app.get("/movies/directors/:directorName", async (request, response) => {
  await Movies.findOne({ "director.name": request.params.directorName })
    .then((director) => {
      response.status(200).json(director);
    })
    .catch((err) => {
      console.log(err);
      response.status(500).send(`error: ${err}`);
    });
});

//USERS
//get all users
app.get("/users", async (request, response) => {
  await Users.find({})
    .then((users) => {
      response.status(201).json(users);
    })
    .catch((error) => {
      console.log(err);
      response.status(400).send(err);
    });
});

// Allow new users to register;
app.post("/users", async (request, response) => {
  await Users.findOne({ username: request.body.username })
    .then((user) => {
      if (user) {
        return response
          .status(400)
          .send(`${request.body.username} already exists`);
      } else {
        Users.create({
          username: request.body.username,
          password: request.body.password,
          email: request.body.email,
          birthday: request.body.birthday,
        })
          .then((user) => {
            response.status(201).json(user);
          })
          .catch((err) => {
            console.log(err);
            response.status(500).send(`error: ${err}`);
          });
      }
    })
    .catch((err) => {
      console.log(err);
      response.status(500).send(`error: ${err}`);
    });
});
//update user by username
app.put("/users/:username", async (request, response) => {
  await Users.findOneAndUpdate(
    { username: request.params.username },
    {
      $set: {
        username: request.body.username,
        password: request.body.password,
        email: request.body.email,
        birthday: request.body.birthday,
      },
    },
    { new: true }
  ).then((user) => {
    if (!user) {
      response.status(500).send(`${request.params.username} not found`);
    } else {
      response.status(201).json(user);
    }
  });
});

//add favorite movie to users list

app.post("/users/:username/movies/:movieID", async (req, res) => {
  await Users.findOneAndUpdate(
    { username: req.params.username },
    {
      $addToSet: { favoriteMovies: req.params.movieID },
    },
    { new: true }
  ) // This line makes sure that the updated document is returned
    .then((updatedUser) => {
      res.json(updatedUser);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error:" + err);
    });
});

//deletes favorite movie to users list
app.delete("/users/:username/movies/:movieID", async (req, res) => {
  await Users.findOneAndUpdate(
    { username: req.params.username },
    {
      $pull: { favoriteMovies: req.params.movieID },
    },
    { new: true }
  ) // This line makes sure that the updated document is returned
    .then((updatedUser) => {
      res.json(updatedUser);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error:" + err);
    });
});

//deletes user
app.delete("/users/:username/", async (request, response) => {
  await Users.findOneAndRemove({ username: request.params.username })
    .then((removedUser) => {
      response.status(200).send(`user ${removedUser} was deleted`);
    })
    .catch((err) => {
      response.status(500).send(`error: ${err}`);
    });
});
//error handling middleware function
//should be last, but before app.listen()
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("something broke");
});

app.listen(8080, () => {
  console.log("Your app is listening on port 8080.");
});
