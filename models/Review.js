"use strict";

module.exports = (sequelize, Sequelize) => {
    const Review = sequelize.define("Review", {
        user_id: { type: Sequelize.INTEGER },
        detail: { type: Sequelize.STRING },
    }, {

    })
    Review.associate = function (model) {
        Review.belongsTo(model.User, {
            as: 'user',
            foreignKey: 'user_id'
        });
    }
    return Review;
};
