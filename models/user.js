module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define("User", {
        name: Sequelize.STRING,
        ProfileId: { type: Sequelize.BIGINT, allowNull: false, defaultValue: 1 }
    }, {
        hooks: {
            beforeCreate: function (user, options) {
                user.getStreamUserId = user.email ? user.email.replace(/[^a-zA-Z-_]/g, "") + configVars.GETSTREAM_SUFFIX : null;
            }
        }
    });

    user.associate = function (model) {
        user.belongsTo(model.Profile, {
            as: 'profile',
            foreignKey: {
                name: 'ProfileId'
            }
        });
    }

    return user;
};