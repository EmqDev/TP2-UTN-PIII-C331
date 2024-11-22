const express = require('express');
const router = express.Router();
const singInControllers = require("../controllers/signInControllers")

router.get('/',singInControllers.getUser);

module.exports = router;