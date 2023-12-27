const { Router } = require('express')
const {getTypes} = require('../controllers/type') 

const router = Router()

router.route('/')
      .get(getTypes)

module.exports = router
