const axios = require('axios')
const { v4: uuidv4 } = require('uuid')
const { Pokemon, Type } = require('../db')
//const {Sequelize, Op} = require('sequelize')
const { POKE_URL, TYPE_URL } = require('../utils/constants')

const pokeCtrl = {}

pokeCtrl.getPokemons = async (req, res, next) => {
    let { name } = req.query //ó let name = req.query.name
    const pokeDb = await Pokemon.findAll()
    const pokeApi = await axios(POKE_URL)

    if (name) {
        try {
            const pokeDbName = await Pokemon.findAll({where: {name:name}})
            if(pokeDbName.length !== 0) {
                return res.json(pokeDbName)
            } else {
                await axios(`${POKE_URL}/${name}`)
                .then(results => {
                    const data = (results.data)
                    return res.json(data)
                })
            }
        }
        catch (error) {
            next(res.status(404).json({ message: 'Pokemon not found!' }))
        }
    }
    else {
        const results = pokeDb.concat(pokeApi.data)
        return res.json(results)
    }

}


pokeCtrl.createPokemon = async (req, res, next) => {
    try {
        //ver como hacer para que no deje crear 5 pokes con el mismo name
        const body = req.body
        const newPoke = { ...body, id: uuidv4() }
        await Pokemon.create(newPoke)
        res.status(201).json(newPoke)
    }
    catch (error) {
        next(res.status(404).json({ message: 'Pokemon not created!' }))
    }
}


pokeCtrl.getPokemonById = async (req, res, next) => {
    const id = req.params.id
    try {
        if (id.length) {
            const myPokemon = await Pokemon.findByPk(id)
            res.json(myPokemon)
        }
        else {
            await axios(POKE_URL)
            res.send('traer los de la API')
        }
    }
    catch (error) {
        next(res.status(404).json({ message: 'Pokemon not found!' }))
    }
}
module.exports = pokeCtrl