const axios = require('axios')
const { v4: uuidv4 } = require('uuid')
const { Type } = require('../db')
const { TYPE_URL } = require('../utils/constants')
const { Sequelize } = require('sequelize')

const typeCtrl = {}

const data = async () => {
    const typeApi = await axios.get(TYPE_URL)
    .catch(error=> next(error))
    return typeApi.data.results   
}
const apiToDb = async () => {
    const apiTypes = await data()
    try {
        for (let i = 0; i < apiTypes.length; i++) {
            await Type.findOrCreate({
                where: {
                    name: apiTypes[i].name
                }
            })
        }
    } catch (error) {
        console.log(error)
    }
}

typeCtrl.getTypes = async (req, res, next) => {
    await apiToDb()
    try {
        const result = await Type.findAll()
        const typeMap = result.map((e)=>{
            return {name: e.name}
        })
        return res.json(typeMap)
    }
    catch (error) {
        next(res.status(404).json({message: 'Type not found!'}))
    }
}

module.exports = typeCtrl
