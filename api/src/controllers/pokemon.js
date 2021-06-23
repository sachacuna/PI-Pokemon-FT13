const axios = require('axios')
const { Sequelize, Op } = require('sequelize')
const { v4: uuidv4 } = require('uuid')
const { Pokemon, Type } = require('../db')
const { POKE_URL, TYPE_URL } = require('../utils/constants')

const pokeCtrl = {}

pokeCtrl.getPokemonById = async (req, res, next) => {
    const { id } = req.params
    //console.log(id)
    try {
        if (id.length > 5) {
            const myPokemonDbId = await Pokemon.findAll({ where: { id: id }, include: [Type] })
            res.status(200).json(myPokemonDbId)
        }
        else {
            const { data } = await axios(`${POKE_URL}/${id}`)
            const myPokeApiId = {
                id: data.id,
                name: data.name.toUpperCase(),
                //sprite: data.sprites.other.dream_world.front_default,
                weight: data.weight,
                height: data.height,
                sprite: data.sprites.other["official-artwork"].front_default,
                types: data.types.map((e) => {
                    return e.type.name
                }),
                hp: data.stats[0].base_stat,
                attack: data.stats[1].base_stat,
                defense: data.stats[2].base_stat,
                speed: data.stats[5].base_stat,
            }
            return res.status(200).json(myPokeApiId)
        }
    }
    catch (error) {
        next(res.json({ message: 'Pokemon id not found!' }))
    }
}

pokeCtrl.getPokemons = async (req, res, next) => {
    const { name } = req.query //ó let name = req.query.name
    const pokeDb = await Pokemon.findAll({include: [Type] })
    const pokeApi = await axios(`${POKE_URL}/?limit=40&offset=0`) 

    if (name) {
        try {
            const pokeDbName = await Pokemon.findAll({ where: { name: name },include: [Type] })
            if (pokeDbName.length !== 0) {
                return res.json(pokeDbName)
            } else {
                const { data } = await axios(`${POKE_URL}/${name}`)
                const myPokeApiName = {
                    id: data.id,
                    name: data.name,
                    sprite: data.sprites.other.dream_world.front_default,
                    /* weight: data.weight,
                    height: data.height, */
                    types: data.types.map((e) => {
                        return e.type.name
                    })
                }
                return res.json([myPokeApiName])
            }
        }
        catch (error) {
            next(res.status(404).json({ message: 'Pokemon not found!' }))
        }
    }
    else {
        const resultsUrl = pokeApi.data.results.map(el => el.url)
        const pokeList = resultsUrl.map(async url => {
            try {
                const { data } = await axios.get(url)
                //console.log(data.name)
                const myPokeURL = {
                    id: data.id,
                    name: data.name,
                    sprite: data.sprites.other.dream_world.front_default,
                    //sprite: data.sprites.other["official-artwork"].front_default,
                    hp: data.stats[1].base_stat,
                    types: data.types.map((e) => {
                        return e.type.name
                    })
                }
                return myPokeURL
            }
            catch (error) {
                //console.log('Error con busqueda URL:', url)
                next(error)
            }
        })
        const promisesArr = await Promise.all(pokeList)
        const results = pokeDb.concat(promisesArr)
        return res.json(results)
    }
}

// pokeCtrl.getPokemons = async (req, res, next) => {
//     const { name } = req.query
//     if (!name) {
//         const dataBase = await Pokemon.findAll({ include: [Type] })
//         const api = await axios(`${POKE_URL}/?limit=40&offset=0`)
//         const modelApi = {
//             id: api.data.id,
//             name: api.data.name,
//             sprite: api.data.sprites.other.dream_world.front_default,
//             types: api.data.types.map((e) => {
//                 return e.type.name
//             })
//         }
//         Promise.all([dataBase, modelApi])
//             .then(results => {
//                 const [dataDB, dataApi] = results
//                 const response = dataDB.concat(dataApi)
//                 res.send(response)
//             })
//             .catch(error => next(error))
//     } else {
//         const dataBase = await Pokemon.findAll({ where: { name: name }, include: [Type] })
//         const api = await axios(`${POKE_URL}/${name}`)
//         Promise.all([dataBase, modelApi])
//             .then(results => {
//                 const [dataDB, dataApi] = results
//                 const response = dataDB.concat(dataApi)
//                 res.send(response)
//             })
//             .catch(error => next(error))
//     }
// }


pokeCtrl.createPokemon = async (req, res, next) => {
    try {
        //ver como hacer para que no deje crear 5 pokes con el mismo name
        const body = req.body
        const newPoke = { ...body, id: uuidv4(), sprite: "https://i.pinimg.com/originals/43/e5/87/43e5879e3357ee51e080eda20d99bbde.png" }

        const pokeCreated = await Pokemon.create(newPoke)
        //console.log("aca esta el create", newPoke)
        //console.log("aca esta el create", pokeCreated)
        //faltaria agregar prop por propiedad
        const typesDB = await Type.findAll({
            where: {
                name: {
                    [Sequelize.Op.in]: body.types,
                },
            },
        })
        //console.log("DB TYPES QUE OnDA",typesDB)
        await pokeCreated.setTypes(typesDB)
        // console.log("1AAA",newPoke)
        // console.log("2BBBB",newPoke.types)
        // console.log("3CCCC", newPoke.types[0])
        res.status(200).json(pokeCreated)
    }
    catch (error) {
        next(res.status(404).json({ message: 'Pokemon not created!' }))
    }
}

module.exports = pokeCtrl