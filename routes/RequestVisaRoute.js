const express = require('express');
const router = express.Router();
const { createVisa } = require('../controllers/RequestVisa');

router.post('/visa', createVisa);

module.exports = router;