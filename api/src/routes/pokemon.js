const { Router } = require('express')
const axios = require('axios')
//const { Pokemon, Type } = require('../db')
//const {Sequelize} = require('sequelize')

const router = Router()

const {
    getPokemons,
    createPokemon, 
    getPokemonById
} = require('../controllers/pokemon')


router.route('/')
    .get(getPokemons)
    .post(createPokemon)
//aca adentro va el req query name, con un if name, else traer todos


router.route('/:id')
    .get(getPokemonById)


module.exports = router


/*
router('/', async (req,res)=>{
    const {name} = req.query
    if (name) {
        try {
            console.log(name)
            let poke = await Pokemon.findAll({
                where: {
                    name: {
                        [Op.ilike]: `%${name}%`,
                    }
                }
            })
            return res.json(poke)
        } catch (error) {console.log(error)}
    } else {
        try{
            let poke = await Pokemon.findAll({
              limit: 12, //son doce segun consigna
              // offset: req.query.page  // setea desde que pagina muestra, sirve para paginar
              // hace falta un include de algo?
            })
            return res.json(poke)
        } catch (error) {console.log(error)}
    }
}) */