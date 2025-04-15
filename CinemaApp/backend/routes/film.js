const express = require('express');
const router = express.Router();
const { Film, Korisnik } = require('../models'); // ✅ dodaj Korisnik

// 📌 GET /api/filmovi – lista svih filmova
router.get('/', async (req, res) => {
  try {
    const filmovi = await Film.findAll();
    res.json(filmovi);
  } catch (error) {
    res.status(500).json({ error: 'Greška prilikom dohvatanja filmova' });
  }
});

// 📌 POST /api/filmovi – dodavanje novog filma (samo admin)
router.post('/', async (req, res) => {
  try {
    const podaci = req.body;

    // 🔐 Provera da li je admin
    const korisnik = await Korisnik.findByPk(podaci.korisnikId);
    if (!korisnik || korisnik.uloga !== 'admin')      {
      return res.status(403).json({ error: 'Pristup odbijen – samo admin može dodavati filmove' });
    }

    if (Array.isArray(podaci)) {
      const filmovi = await Film.bulkCreate(podaci);
      return res.status(201).json(filmovi);
    } else {
      const { naziv, opis, trajanje, zanr, godina } = podaci;
      const noviFilm = await Film.create({ naziv, opis, trajanje, zanr, godina });
      return res.status(201).json(noviFilm);
    }
  } catch (error) {
    res.status(400).json({ error: 'Greška prilikom unosa filmova' });
  }
});

module.exports = router;
