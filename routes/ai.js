const express = require("express");
const router = express.Router();
const aiController = require("../controller/aiController");

router.get("/restaurants/discover/ai", aiController.getDiscover);

router.post("/restaurants/discover/ai", aiController.postDiscover);

module.exports = router;
