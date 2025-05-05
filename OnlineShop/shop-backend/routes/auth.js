const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { Korisnik } = require('../models');

// 📌 Registracija korisnika
router.post('/register', async (req, res) => {
  try {
    const { ime, email, lozinka } = req.body;
    const hashed = await bcrypt.hash(lozinka, 10);
    const korisnik = await Korisnik.create({ ime, email, lozinka: hashed });
    res.status(201).json({ poruka: 'Uspešna registracija', korisnik });
  } catch (err) {
    res.status(400).json({ error: 'Greška pri registraciji' });
  }
});

// 📌 Login korisnika
router.post('/login', async (req, res) => {
  try {
    const { email, lozinka } = req.body;
    const korisnik = await Korisnik.findOne({ where: { email } });
    if (!korisnik) return res.status(401).json({ error: 'Neispravan email' });

    const valid = await bcrypt.compare(lozinka, korisnik.lozinka);
    if (!valid) return res.status(401).json({ error: 'Neispravna lozinka' });

    res.json({ poruka: 'Uspešan login', korisnik });
  } catch (err) {
    res.status(500).json({ error: 'Greška pri loginu' });
  }
});

module.exports = router;
