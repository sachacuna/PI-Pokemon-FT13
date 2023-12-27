const { Router } = require('express')
const router = Router()

const {
    getPokemons,
    createPokemon, 
    getPokemonById
} = require('../controllers/pokemon')


router.route('/')
    .get(getPokemons)
    .post(createPokemon)

router.route('/:id')
    .get(getPokemonById)

module.exports = router
