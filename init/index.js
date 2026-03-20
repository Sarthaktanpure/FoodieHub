const path = require("path");
if (process.env.NODE_ENV != "production") {
  require("dotenv").config({ path: path.join(__dirname, "../.env") });
}
const mongoose = require("mongoose");
const Data = require("./data.js");
const Restaurant = require("../models/restaurant.js");

main()
  .then(() => {
    console.log("DataBase Connected");
    let res = addData();
    if (res) {
      console.log("Data added successfuly");
    } else {
      console.log("Failed to add the Data");
    }
  })
  .catch((err) => {
    console.log("Failed to connect db", err.message);
  });

async function main() {
  const localUrl = "mongodb://127.0.0.1:27017/foodiehub";
  const envUrl = process.env.MONGO_URL;
  const dbUrl = envUrl || localUrl;
  try {
    await mongoose.connect(dbUrl, { serverSelectionTimeoutMS: 5000 });
  } catch (err) {
    console.warn("Primary DB connection failed:", err.message);
    if (!envUrl || dbUrl === localUrl) throw err;
    try {
      await mongoose.disconnect();
    } catch (_) {}
    await mongoose.connect(localUrl, { serverSelectionTimeoutMS: 5000 });
  }
}

async function addData() {
  await Restaurant.insertMany(Data.data)
    .then(() => {
      console.log("Data Was Saved");
    })
    .catch((err) => {
      console.log("Error occured", err);
    });
  await mongoose.connection.close();
}

// addData();
