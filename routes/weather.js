const  express = require("express")
const router = express.Router()
const {getWeather} = require("../controller/weatherController")

router.route("/weather").get(getWeather)


module.exports =  router