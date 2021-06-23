/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');

const agent = session(app);
const pokemon = {
  id: 'b79089fe-3134-44b7-a066-4f0b24eb2a29',
  name: 'Pikachu',
};

describe('Pokemon routes', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create(pokemon)));
  describe('GET /pokemons', () => {
    it('should get 200', () =>
      agent.get('/pokemons').expect(200)
    );
  });
});
describe('GET /pokemon/:id', function () {
  it('responds with 404 when the pokemon does not exist', function () {
    return agent.get('/pokemon/999').expect(404)
  })
});

describe('POST /pokemons', function () {
  it('responds with 200 if it creates a pokemon successfully', function () {
    return agent.post('/pokemons')
      .send({
        "id": "c79e12cf-2af0-402b-a89b-7d1a42af481c",
        "name": "tevez",
        "hp": 12,
        "speed": 2,
        "attack": 99

      })
      .expect(200);
  });})