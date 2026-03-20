const {restaurantSchema, userSchema} = require("./schema.js");
const ExpressError = require("./utils/ExpressError");
const Restaurant = require('./models/restaurant.js');
const Review = require("./models/review.js");

module.exports.isLoggedIn = (req,res,next)=>{
  if(!req.isAuthenticated()){
    req.session.redirectUrl = req.originalUrl;
    req.flash("error","You must be loggedIn..");
    return res.redirect("/user/login");
  }else{
    next();
  }
}

module.exports.isOwner = async(req,res,next)=>{
  let {id} = req.params;
  let restaurant = await Restaurant.findById(id);
      if(!restaurant.owner.equals(res.locals.currUser._id)){
         req.flash("error","You are not owner of this restaurant");
        return res.redirect(`/restaurants/${id}`);
      }
      next();
}

module.exports.isAuthor = async (req,res,next)=>{
  let {id,reviewId} = req.params;
  let review = await Review.findById(reviewId);
  if(!review || !review.author || !review.author.equals(res.locals.currUser._id)){
    req.flash("error","You cannot delete this comment..");
    return res.redirect(`/restaurants/${id}`);
  }
  next();
}

module.exports.saveRedirectUrl = (req,res,next)=>{
  if(req.session.redirectUrl){
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next()
}

// Validate Restaurants.
module.exports.validateRestaurant = (req, res, next) => {
  let { error } = restaurantSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400,msg);
  }else{
    next();
  };
};

module.exports.validateUser =(req,res,next)=>{
  const payload = req.body.user ? req.body : { user: req.body };
  let {error} = userSchema.validate(payload);
  if(error){
    const msg = error.details.map((el)=>el.message).join(",");
    throw new ExpressError(400,msg);
  }else{
    req.body = payload;
    next();
  }
}
