const app = require('./app');
const db = require('./models');

const PORT = process.env.PORT || 5000;

// Povezivanje sa bazom i pokretanje servera
db.sequelize.sync({ alter: true }) // automatski ažurira modele u bazi
  .then(() => {
    console.log('Baza podataka je sinhronizovana.');
    app.listen(PORT, () => {
      console.log(`Server pokrenut na portu ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Greška pri sinhronizaciji baze:', err);
  });
