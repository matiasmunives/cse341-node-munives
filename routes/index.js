
const routes = require ('express').Router();
const lesson1Controller = require('../controllers/lesson1');
 
router.get('/', (req, res) => {res.send('Hello World');});

module.exports = routes;
