const Sequelize = require('sequelize');
const sequelize = new Sequelize('shop', 'postgres', 'paja123', {
  host: 'localhost',
  dialect: 'postgres'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Korisnik = require('./korisnik')(sequelize, Sequelize.DataTypes);
db.Kategorija = require('./kategorija')(sequelize, Sequelize.DataTypes);
db.Proizvod = require('./proizvod')(sequelize, Sequelize.DataTypes);
db.Porudzbina = require('./porudzbina')(sequelize, Sequelize.DataTypes);
db.StavkaPorudzbine = require('./stavkaPorudzbine')(sequelize, Sequelize.DataTypes);
db.Korpa = require('./korpa')(sequelize, Sequelize.DataTypes);

// povezivanje modela
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
