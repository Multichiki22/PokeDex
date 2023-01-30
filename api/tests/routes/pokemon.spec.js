/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
let chai = require("chai");
let chaiHttp = require("chai-http");

chai.use(chaiHttp);
const url = "http://localhost:3000";

describe("Create pokemon", (done) => {
  chai
    .request(url)
    .post("./pokemons")
    .send({
      Nombre: "Pitochu",
      Vida: 15,
      Ataque: 4,
      Defensa: 67,
      Velocidad: 14,
      Altura: 1.8,
      Peso: 40,
      Tipo: ["water", "fire"],
    })
    .end(function (err, res) {
      expect(res).to.have.status(200);
    });
});

// const agent = session(app);
// const pokemon = {
//   name: 'Pikachu',
// };

// describe('Pokemon routes', () => {
//   before(() => conn.authenticate()
//   .catch((err) => {
//     console.error('Unable to connect to the database:', err);
//   }));
//   beforeEach(() => Pokemon.sync({ force: true })
//     .then(() => Pokemon.create(pokemon)));
//   describe('GET /pokemons', () => {
//     it('should get 200', () =>
//       agent.get('/pokemons').expect(200)
//     );
//   });
// });
