module.exports = function (sequelize, DataTypes) {

    var Car = sequelize.define("Car", {
        type: DataTypes.STRING,
        price: DataTypes.INTEGER,
        specs: DataTypes.STRING,
        dealership: DataTypes.STRING,
        phoneNumber: DataTypes.INTEGER
    });
    return Car;
};