
const routes = require ('express').Router();
const lesson1Controller = require('../controllers/lesson1');
 
routes.get('/', lesson1Controller.matiasRoute);
routes.get('/Lore', lesson1Controller.loreRoute);
routes.get('/Eva', lesson1Controller.evaRoute);

module.exports = routes;
