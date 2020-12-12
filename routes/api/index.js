  
const router = require('express').Router();
const talentRoutes = require('./talents');

router.use('/talents', talentRoutes);

module.exports = router;