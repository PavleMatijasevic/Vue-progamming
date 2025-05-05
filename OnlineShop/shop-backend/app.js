const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const routes = require('./routes/index'); // OVDE je vazno da se ucita kao Router

const app = express();
const db = require('./models');
const kategorijaRoutes = require('./routes/kategorija');
const porudzbinaRoutes = require('./routes/porudzbina')
const authRoutes = require('./routes/auth')

app.use(cors());
app.use(express.json());
app.use('/api', routes); // ovde koristimo Router
app.use('/api/kategorije', kategorijaRoutes);
app.use('/api/porudzbine', porudzbinaRoutes);
app.use('/api/auth', authRoutes);

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


