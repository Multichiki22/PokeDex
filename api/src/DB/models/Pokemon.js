const { DataTypes } = require("sequelize");

module.exports = (DB) => {
  DB.define(
    "pokemon",
    {
      ID: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true,
        allowNull: false,
      },
      Nombre: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      Vida: {
        type: DataTypes.FLOAT,
      },
      Ataque: {
        type: DataTypes.FLOAT,
      },
      Defensa: {
        type: DataTypes.FLOAT,
      },
      Velocidad: {
        type: DataTypes.FLOAT,
      },
      Altura: {
        type: DataTypes.FLOAT,
      },
      Peso: {
        type: DataTypes.FLOAT,
      },
    },
    {
      timestamps: false,
    }
  );
};
