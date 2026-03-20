const Restaurant=require('../models/restaurant.js');
const Review = require("../models/review.js");

module.exports.postReview = async(req,res,next)=>{
    let {id} = req.params;
    let restaurant = await Restaurant.findById(id);
    const newReview = new Review(req.body.review);
    newReview.author = req.user._id;

    restaurant.reviews.push(newReview);

    await newReview.save();
    await restaurant.save();
    req.flash("success","Review added successfuly..");
    res.redirect(`/restaurants/${id}`);
};

module.exports.DeleteReview = async(req,res)=>{
    let {id,reviewId} = req.params;
    await Restaurant.findByIdAndUpdate(id,{$pull : {reviews : reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash('success',' Review Deleted!');
    res.redirect(`/restaurants/${id}`);
}
