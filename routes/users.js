const express = require('express');

const { User } = require('../models');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  User.all().then(users => res.send(JSON.stringify(users)));
});

module.exports = router;
