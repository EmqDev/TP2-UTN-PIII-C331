const express = require('express');
const router = express.Router();
const blogControllers = require("../controllers/blogControllers")

router.get('/',blogControllers.getBlog);

module.exports = router;