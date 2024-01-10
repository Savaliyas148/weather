require("dotenv").config()
const express = require("express");
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express()
const PORT = process.env.PORT    ||   4000

const connectWithDb = require("./config/db")
connectWithDb()

app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.status(200).json("this is home page")
})

const weather = require("./routes/weather")
app.use("/", weather)

app.listen(PORT, ()=> {
    console.log(`server is running on port: ${PORT}`);
})