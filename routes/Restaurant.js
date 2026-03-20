const express = require('express');
const router = express.Router();
const { validateRestaurant } = require("../middleware.js");
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn,isOwner} = require("../middleware.js");
const restaurantController = require('../controller/restaurant.js');
const Restaurant = require('../models/restaurant.js');

const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });



// router.get("/add-owner", async (req, res) => {
//   const ownerId = req.user._id;
//    console.log(ownerId);
//   await Restaurant.updateMany(
//     { owner: { $exists: false } },
//     { $set: { owner: ownerId } }
//   );

//   res.send("Owner added!");
// });

//  router.get("/sarthak",async(req,res)=>{
//   let restaurant = await Restaurant.deleteMany({});
//   console.log(restaurant);
//   res.send("Deleted");
//  });
// index route
router.get(
  "/",
  wrapAsync(restaurantController.index),
);

router.post("/search",restaurantController.search);


module.exports = router;
// create route
router.get("/new", isLoggedIn, restaurantController.getCreate);

router.post(
  "/",
  isLoggedIn,
  upload.single("restaurant[image]"),
  validateRestaurant,
  wrapAsync(restaurantController.postCreate),
);

//Show Route
router.get(
  "/:id",
  wrapAsync(restaurantController.getShow),
);

//Edit route
router.put(
  "/:id",
  isLoggedIn,
  isOwner,
  validateRestaurant,
  wrapAsync(restaurantController.putEdit),
);

router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(restaurantController.getEdit),
);

// Delete route.
router.delete(
  "/:id",
  isLoggedIn,
  isOwner,
  wrapAsync(restaurantController.deleteRestaurant),
);

module.exports = router;
