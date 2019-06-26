const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

const db = require("./models");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(logger("dev"));

const routes = require("./controllers/index");
app.use(routes);

const cheerio = require("cheerio");
const axios = require("axios");

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

app.get("/scrape", function (req, res) {
    axios.get("https://www.autotrader.com/cars-for-sale/Used+Cars/Charlotte+NC-28202?listingTypes=USED&searchRadius=50&zip=28202&startYear=1981&endYear=2020&marketExtension=true&sortBy=relevance&numRecords=100&firstRecord=1")
        .then(function (response) {

            var $ = cheerio.load(response.data);

            var results = [];

            $(".item-card-content").each(function (i, element) {

                let carInfo = {}

                carInfo.type = $(element).find("h2").first().text();
                carInfo.price = $(element).find(".margin-left-auto").find(".text-gray-base").text();
                carInfo.specs = $(element).find(".item-card-specifications").text();
                carInfo.dealership = $(element).find(".item-card-footer").find(".text-bold").text();
                carInfo.phoneNumber = $(element).find(".item-card-footer").find("span.display-block").first().text();

                results.push(
                    carInfo
                );
            });
            res.send("scraped!")
            console.log(results);
        });
});


app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});