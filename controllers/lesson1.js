

const matiasRoute = (req, res) => {
    res.send("Matias Fernando Munives");
  };
  
const loreRoute = ('/Lore', (req, res) => {
    res.send("Lorena Fernanda Artaza");
  });

const evaRoute = ('/Eva', (req, res) => {
    res.send("Evangelina Victoria Munives");
  });


module.exports = {
    matiasRoute,
    loreRoute,
    evaRoute
};