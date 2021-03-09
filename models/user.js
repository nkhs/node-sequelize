module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define("User", {
        name: Sequelize.STRING,
    }, {
    });

    user.associate = function (model) {
    }

    return user;
};