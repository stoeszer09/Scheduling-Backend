const router = require("express").Router();
// const db = require("../db/index");

router.get("/", async (req, res) => {
  res.json({message: 'Get Schedule route'})
})

module.exports = router