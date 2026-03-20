const express = require('express');
const router = express.Router({ mergeParams: true });
const Restaurant = require('../models/restaurant');
const Review = require('../models/review');
const {isLoggedIn,isAuthor} = require('../middleware.js');
const wrapAsync = require('../utils/wrapAsync.js');
const reviewController = require('../controller/review.js');

router.post("/",isLoggedIn,wrapAsync(reviewController.postReview));

router.delete("/:reviewId",isLoggedIn,isAuthor,wrapAsync(reviewController.DeleteReview));


module.exports = router;
