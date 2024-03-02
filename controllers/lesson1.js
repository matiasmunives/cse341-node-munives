

const matiasRoute = (req, res) => {
    res.send("Matias Fernando Munives");
  };
  
const loreRoute = ('/Lore', (req, res) => {
    res.send("Lorena Fernanda Artaza");
  });

module.exports = {
    matiasRoute,
    loreRoute
};