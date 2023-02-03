//importando los modelos de la carpeta models
const modelPokemon = require("./models/Pokemon");
const modelType = require("./models/Type");
const { Sequelize } = require("sequelize");
require("dotenv").config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME,DB_PORT } = process.env;


const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    force: false,
    logging: false,
    native: false,
  }
);


modelPokemon(sequelize);
modelType(sequelize);


const { pokemon, type } = sequelize.models;


pokemon.belongsToMany(type, { through: "PokemonType" });
type.belongsToMany(pokemon, { through: "PokemonType" });

module.exports = {...sequelize.models, sequelize};

