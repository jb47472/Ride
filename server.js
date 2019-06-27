require("dotenv").config();
var express = require("express");
var axios = require("axios");
var cheerio = require("cheerio");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));



var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `te
if (process.env.NODE_ENV === "test") {
    syncOptions.force = true;
}

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

            var orm = {
                update: function (tableInput, condition, cb) {
                    connection.query('UPDATE ' + tableInput + ' SET devoured=true WHERE id =' + condition +
                        ';', function (err, result) {
                            if (err) throw err;
                            cb(result);///calling back my result
                        })
                },
            }
        });

});

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
    app.listen(PORT, function () {
        console.log(
            "==> :earth_americas:  Listening on port %s. Visit http://localhost:%s/ in your browser.",
            PORT,
            PORT
        );
    });
});

module.exports = app;





