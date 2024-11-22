const express = require('express');
const router = express.Router();
const singUpControllers = require("../controllers/signUpControllers")

router.get('/',singUpControllers.getPageSignUp);

module.exports = router;