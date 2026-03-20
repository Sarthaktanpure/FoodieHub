require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
const ExpressError = require("./utils/ExpressError.js");
const methodOverride = require("method-override");
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user.js');
const userRouter = require('./routes/user.js');
const restaurantRouter  = require("./routes/Restaurant.js");
const reviewRouter = require("./routes/review.js");



main()
  .then(() => {
    console.log("Database connected successfuly");
  })
  .catch((err) => {
    console.log("failed to conect the database");
  });

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "public")));


// sessions
app.use(session({
  secret : "MySuperSecreat",
  resave : false,
  saveUninitialized : true,
  cookie : {
    expires : Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge : 7 * 24 * 60 * 60 * 1000,
    httpOnly : true,
  }
}));

// flash
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// flash middleware
app.use((req,res,next)=>{
  res.locals.successMessage = req.flash("success");
  res.locals.errorMessage = req.flash("error");
  res.locals.currUser = req.user;  // save user info
  next();
});


// Routes
// Restaurant route
app.use("/restaurants",restaurantRouter);
//Review route
app.use("/restaurants/:id/reviews",reviewRouter);
// User route
app.use("/user",userRouter);


// for the invalid route
app.use((req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});

// Error Handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  let { status = 500, message = "Unexprected Error Occured!" } = err;
  res.status(status).render("./Restourants/error.ejs", {
    message,
    stack: err && err.stack ? err.stack : null,
  });
});

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
