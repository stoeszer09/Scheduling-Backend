const router = require("express").Router();
// const db = require("../db/index");

router.get("/", async (req, res) => {
  res.json({message: 'Get User route'})
})

module.exports = router