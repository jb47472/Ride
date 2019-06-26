module.exports = function (sequelize, DataTypes) {

    var ContactInfo = sequelize.define("ContactInfo", {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    });
    return ContactInfo;
};