const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const models = require("./models");
const passportJWT = require("passport-jwt");
const { model } = require("mongoose");

let Users = models.User;
let JWTSrategy = passportJWT.Strategy;
let ExtractJWT = passportJWT.ExtractJwt;

//loggin in for the first time
passport.use(
  new LocalStrategy(
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

          if (!user.validatePassword(password)) {
            console.log("incorrect password!");
            return callback(null, false, { message: "incorrect password!!" });
          }
          console.log("finished");
          return callback(null, user);
        })
        .catch((error) => {
          if (error) {
            console.log(`local strategy error:${error}`);
            return callback(error);
          }
        });
    }
  )
);

//upon first login generates jwt token for future auth
passport.use(
  new JWTSrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
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
