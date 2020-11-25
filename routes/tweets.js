const express = require("express");
const router = express.Router();

router.get("/tweets", (req, res) => {
  res.json({ message: "test tweets index" });
});

module.exports = router;