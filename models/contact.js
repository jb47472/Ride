module.exports = function (sequelize, DataTypes) {

    var Contact = sequelize.define("Contact", {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        password: DataTypes.STRING
    });
    return Contact;
};