var express = require('express');
var router = express.Router();
const curseControllers = require('../controllers/curseControllers')

/* GET home page. */
router.get('/',curseControllers.getCurse);

module.exports = router;
