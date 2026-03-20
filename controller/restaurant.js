const Restaurant = require("../models/restaurant.js");

module.exports.index = async (req, res) => {
  const allData = await Restaurant.find();
  // console.log(data);
  res.render("Restourants/index.ejs", { allData: allData });
};

module.exports.search = async (req, res) => {
  let { cuisine, location, title } = req.body.restaurant;

  let query = {};

  if (cuisine) {
    query.cuisine = new RegExp(cuisine, "i");
  }

  if (location) {
    query.location = new RegExp(location, "i");
  }

  if (title) {
    query.title = new RegExp(title, "i");
  }

  let results = await Restaurant.find(query);

  res.render("Restourants/index.ejs", { allData: results });
};
module.exports.getCreate = (req, res) => {
  res.render("Restourants/new.ejs");
};

module.exports.postCreate = async (req, res) => {
  let restaurant = req.body.restaurant;
  // 🌍 Nominatim API
  const geoResponse = await axios.get(
    "https://nominatim.openstreetmap.org/search",
    {
      params: {
        q: restaurant.location,
        format: "json",
        limit: 1,
      },
    },
  );

  let geometry = {
    type: "Point",
    coordinates: [geoResponse.data[0].lon, geoResponse.data[0].lat],
  };

  const image = req.file
    ? { filename: req.file.filename, url: req.file.path }
    : {
        filename: "default",
        url: "https://images.unsplash.com/photo-1585937421612-70a008356fbe",
      };
  let newRestaurant = new Restaurant({
    title: restaurant.title,
    description: restaurant.description,
    cuisine: restaurant.cuisine,
    priceRange: restaurant.priceRange,
    location: restaurant.location,
    rating: restaurant.rating,
    geometry,
    image,
    owner: req.user._id,
  });
  let result = await newRestaurant.save();
  console.log("Data added Successfuly");
  console.log(result);
  req.flash("success", "New Restaurant created..");
  res.redirect("/restaurants");
};

module.exports.getShow = async (req, res) => {
  let { id } = req.params;
  let restaurant = await Restaurant.findById(id).populate({
    path: "reviews",
    populate: { path: "author" },
  });
  console.log(restaurant);
  if (!restaurant) {
    req.flash("error", "The Restaurant you requested is not exits..");
    return res.redirect("/restaurants");
  }
  res.render("Restourants/show.ejs", { restaurant });
};

module.exports.putEdit = async (req, res) => {
  let { id } = req.params;
  let result = await Restaurant.findByIdAndUpdate(id, {
    ...req.body.restaurant,
  }); // ...req.body.restaurant will create the copy of of restaurant means they are pointing to different memory location.
  console.log(result);
  req.flash("success", "Restaurant information edited successfuly.");
  res.redirect(`/restaurants/${id}`);
};

module.exports.getEdit = async (req, res) => {
  let { id } = req.params;
  let restaurant = await Restaurant.findById(id);
  res.render("Restourants/edit.ejs", { restaurant });
};

module.exports.deleteRestaurant = async (req, res) => {
  let { id } = req.params;
  let result = await Restaurant.findByIdAndDelete(id);
  console.log(result);
  req.flash("success", "Restaurant was deleted successfuly.. ");
  res.redirect("/restaurants");
};
