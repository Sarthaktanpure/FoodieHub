const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  cuisine: {
    type: String,
    required: true,
  },

  priceRange: {
    type: String,
    enum: ["₹", "₹₹", "₹₹₹", "₹₹₹₹"],
    default: "₹₹",
  },

  location: {
    type: String,
    required: true,
  },
  geometry: {
    type: {
      type: String,
      default: "Point",
    },
    coordinates: [Number], // [lng, lat]
  },

  image: {
    filename: String,
    url: {
      type: String,
      default: "https://images.unsplash.com/photo-1585937421612-70a008356fbe",
    },
  },

  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 1,
  },

  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],

  geometry: {
    type: {
      type: String,
      enum: ["Point"],
    },
    coordinates: {
      type: [Number],
    },
  },

  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
