const { Router } = require('express');
const pokemon = require('./pokemon')
const type = require('./type')
const { Pokemon, Type } = require('../db')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
//const {getPokemons, createPokemon, getPokemonsCreated, getPokemon}

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//router.use('/pokemon', pokemon)
//router.use('/types', types)

module.exports = router;
