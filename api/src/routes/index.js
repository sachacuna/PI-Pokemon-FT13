const { Router } = require('express');
const router = Router();

router.use('/pokemons', require('./pokemon'))
router.use('/types', require('./type'))

module.exports = router;
 
