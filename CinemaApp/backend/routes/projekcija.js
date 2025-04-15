const express = require('express');
const router = express.Router();
const { Projekcija, Film, Korisnik } = require('../models'); // ✅ dodaj Korisnik

// 📌 GET /api/projekcije – lista svih projekcija sa filmovima
router.get('/', async (req, res) => {
  try {
    const projekcije = await Projekcija.findAll({
      include: Film
    });
    res.json(projekcije);
  } catch (error) {
    res.status(500).json({ error: 'Greška prilikom dohvatanja projekcija' });
  }
});

// 📌 POST /api/projekcije – dodavanje nove projekcije (samo admin)
router.post('/', async (req, res) => {
  try {
    const podaci = req.body;

    // 🔐 Provera admina
    const korisnik = await Korisnik.findByPk(podaci.korisnikId);
    if (!korisnik || !korisnik.isAdmin) {
      return res.status(403).json({ error: 'Pristup odbijen – samo admin može dodavati projekcije' });
    }

    if (Array.isArray(podaci)) {
      const noveProjekcije = await Projekcija.bulkCreate(podaci);
      return res.status(201).json(noveProjekcije);
    } else {
      const { datumVreme, tip, slobodnaMesta, filmId } = podaci;

      const novaProjekcija = await Projekcija.create({
        datumVreme,
        tip,
        slobodnaMesta,
        filmId
      });

      return res.status(201).json(novaProjekcija);
    }
  } catch (error) {
    console.error('Greška:', error);
    res.status(400).json({ error: 'Greška prilikom dodavanja projekcija' });
  }
});

module.exports = router;
