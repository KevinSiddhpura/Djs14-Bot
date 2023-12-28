const { DataTypes } = require("sequelize");

module.exports = {
    name: "leveling",
    options: {
        user: { type: DataTypes.STRING, allowNull: false },
        xp: { type: DataTypes.INTEGER, allowNull: false },
        level: { type: DataTypes.INTEGER, allowNull: false },
        messages: { type: DataTypes.INTEGER, allowNull: false },
    },
    defaults: {
        timestamps: true,
        freezeTableName: true
    }
};