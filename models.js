const mongoose = require("mongoose");
//movies
let movieSchema = mongoose.Schema({
  title: { type: String, required: true },
  genre: {
    name: String,
    description: String,
  },
  director: {
    name: String,
    bio: String,
  },
  actors: [String],
  imagePath: String,
  featured: Boolean,
});

//users
let userSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  birthday: Date,
  favoriteMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: "movies" }],
});

let Movie = mongoose.model("movie", movieSchema);
let User = mongoose.model("user", userSchema);

//is it all caps ??
module.exports.Movie = Movie;
module.exports.User = User;
