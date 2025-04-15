const sequelize = require('../config/database');
const Film = require('./film');
const Karta = require('./karta');
const Korisnik = require('./korisnik');
const Projekcija = require('./projekcija');

const db = {
  sequelize,
  Film,
  Projekcija,
  Karta,
  Korisnik
};

module.exports = db;
