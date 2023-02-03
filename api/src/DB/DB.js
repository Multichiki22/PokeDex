//importando los modelos de la carpeta models
const modelPokemon = require("./models/Pokemon");
const modelType = require("./models/Type");
const { Sequelize } = require("sequelize");
require("dotenv").config();

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;


const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pokemon`,
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

