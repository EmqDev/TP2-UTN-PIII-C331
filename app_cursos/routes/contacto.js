const express = require('express');
const router = express.Router();
const contactoControllers = require("../controllers/contactoControllers")

router.get('/',contactoControllers.getContacto);

module.exports = router;