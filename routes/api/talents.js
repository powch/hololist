  
const router = require('express').Router();
const talentController = require('../../controller/talentController');

router
  .route('/')
  .get(talentController.findAll);

module.exports = router;