const User = require('../models/user');

module.exports.getLogin = async (req, res) => {
    res.render("Users/Login.ejs");
  }

module.exports.postLogin = async (req, res, next) => {
    req.flash("success", "Welcome back to FoodieHub");
    res.redirect("/restaurants");

  }

module.exports.getSignup = async (req, res) => {
    res.render("Users/Signup.ejs");
  }

module.exports.postSignup = async (req, res, next) => {
  try {
    let { username, email, password } = req.body.user;
    const newUser = new User({
      username: username,
      email: email,
    });
    const registeredUser = await User.register(newUser, password);
    console.log(registeredUser);
    req.logIn(registeredUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "Welcome Back To FoodieHub...");
      res.redirect("/restaurants");
    });
  } catch (err) {
    req.flash("error", err.message);
    res.redirect("/user/signup");
  }
}

module.exports.logOutUser =  (req, res) => {
  req.logOut((err) => {
    if (err) {
      return next(err);
    } else {
      req.flash("success", "LoggedOut Successfuly...");
      res.redirect("/restaurants");
    }
  });
}