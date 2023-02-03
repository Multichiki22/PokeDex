const server = require("./src/app.js");
const { sequelize } = require("./src/db.js");
require("dotenv").config()
const {PORT} = process.env;
const { type } = require("./src/db");
const fetch = require("node-fetch");

const preLoadTypes = async () => {
  const url = "https://pokeapi.co/api/v2/type";

  const types = await fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      throw Error(error.message);
    });

  types.results.forEach((tipo) => {
    type.findOrCreate({
      where: { Nombre: tipo.name},
    });
  });
};

// Syncing all the models at once.
sequelize
  .sync({ force: true })
  .then(() => {
    server.listen(PORT, async() => {
      await preLoadTypes();
      console.log(`Server listening on port ${PORT}`);
      sequelize.sync({ force: true });
    });
  })
  .catch((error) => console.log(error.message));
