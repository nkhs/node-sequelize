"use strict";

module.exports = (sequelize, Sequelize) => {
    const Profile = sequelize.define("Profile", {
        name: { type: Sequelize.TEXT, allowNull: false, unique: true },
    }, {

    })
    return Profile;
};
