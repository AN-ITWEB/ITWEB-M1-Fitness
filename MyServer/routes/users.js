var express = require('express');
var router = express.Router();

const ctrlUsers = require('../controllers/usersController');
router.get('/', ctrlUsers.users);

module.exports = router;
