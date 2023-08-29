const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const models = require("./models");
const passportJWT = require("passport-jwt");
const { model } = require("mongoose");

let Users = models.User;
let JWTSrategy = passportJWT.Strategy;
let extractJWT = passportJWT.ExtractJWT;

passport.use(
  new localStrategy(
    { usernameField: "username", passwordField: "password" },
    async (username, password, callback) => {
      console.log(`${username} ${password}`);
      await Users.findOne({ username: username })
        .then((user) => {
          if (!user) {
            console.log(`incorrect username`);
            return callback(null, false, {
              message: "incorrect username or password",
            });
          }
          console.log("finished");
          return callback(null, user);
        })
        .catch((error) => {
          if (error) {
            console.log(error);
            return callback(error);
          }
        });
    }
  )
);

passport.use(
  new JWTSrategy(
    {
      jwtFromRequest: extractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: "your_jwt_secret",
    },
    async (jwtPayload, callback) => {
      return await Users.findById(jwtPayload._id)
        .then((user) => {
          return callback(null, user);
        })
        .catch((error) => {
          return callback(error);
        });
    }
  )
);
