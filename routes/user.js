const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { validateUser, saveRedirectUrl } = require("../middleware.js");
const Restaurant = require("../models/restaurant.js");
const User = require("../models/user.js");
const passport = require("passport");
const userController = require("../controller/user.js");

//Login
router.get(
  "/login",
  wrapAsync(userController.getLogin),
);
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  wrapAsync(userController.postLogin),
);

// Signup
router.get(
  "/signup",
  wrapAsync(userController.getSignup),
);

router.post("/signup", validateUser, userController.postSignup);

// Logout
router.get("/logout",userController.logOutUser);

module.exports = router;
