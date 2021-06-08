const { Router } = require('express')
//const axios = require('axios')
//const { Pokemon, Type } = require('../db')
//const {Sequelize} = require('sequelize')
const {getTypes} = require('../controllers/type') //recordá pegar todas las funciones en index

const router = Router()

router.route('/')
      .get(getTypes)

module.exports = router
