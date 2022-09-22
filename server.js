require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

// ROUTES
const usersController = require('./controllers/usersController')
app.use('/users', usersController)

const scheduleController = require('./controllers/scheduleController')
app.use('/schedules', scheduleController)

app.get("/", (req, res) => {
  console.log("root url");
  res.send("Hello Word!");
})

app.get("*", (req, res) => {
  console.log("root url");
  res.status(404).send('You don messed up.');
})

// LISTEN
const port = process.env.PORT ?? 5000;
app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});