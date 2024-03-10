/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */

const router = require ('express').Router();

router.get('/', (req, res) => {res.send('Hello World');});

router.use('/users', require('./users'));

module.exports = router;
