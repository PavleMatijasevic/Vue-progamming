const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const routes = require('./routes/index'); // OVDE je važno da se učita kao Router

const app = express();
const db = require('./models');

app.use(cors());
app.use(express.json());
app.use('/api', routes); // ovde koristimo Router

sequelize.authenticate()
  .then(() => {
    console.log('Povezan sa bazom!');
    return db.sequelize.sync(); // TEMPORARY FORCE
  })
  .then(() => {
    console.log('Modeli sinhronizovani.');
  })
  .catch(err => console.error('Greška prilikom povezivanja:', err));


module.exports = app;


