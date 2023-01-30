const server = require("./src/app.js");
const { sequelize } = require("./src/DB/db.js");
const PORT = 3000;
const { type } = require("./src/DB/DB");

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
    server.listen(PORT, () => {
      preLoadTypes();
      console.log(`Server listening on port ${PORT}`);
      sequelize.sync({ force: true });
    });
  })
  .catch((error) => console.log(error.message));
