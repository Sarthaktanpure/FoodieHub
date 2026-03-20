const express = require("express");
const router = express.Router();
const Restaurant = require("../models/restaurant.js");
const wrapAsync = require("../utils/wrapAsync.js");

// Discover page (GET)
router.get(
  "/",
  wrapAsync(async (req, res) => {
    const results = await Restaurant.find().limit(6);
    res.render("Restourants/discover.ejs", {
      results,
      query: "",
    });
  }),
);

// Discover search (POST)
router.post(
  "/",
  wrapAsync(async (req, res) => {
    const query = (req.body.interest || "").trim();
    const safeQuery = query.length ? query : "";
    let results = [];

    if (safeQuery) {
      const regex = new RegExp(safeQuery, "i");
      results = await Restaurant.find({
        $or: [
          { title: regex },
          { cuisine: regex },
          { location: regex },
          { description: regex },
        ],
      }).limit(12);
    }

    res.render("Restourants/discover.ejs", {
      results,
      query: safeQuery,
    });
  }),
);

module.exports = router;
