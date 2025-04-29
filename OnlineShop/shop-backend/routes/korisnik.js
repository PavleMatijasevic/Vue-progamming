const express = require('express');
const router = express.Router();
const { Korisnik } = require('../models');

// Registracija korisnika
router.post('/registracija', async (req, res) => {
  try {
    const noviKorisnik = await Korisnik.create(req.body);
    res.status(201).json(noviKorisnik);
  } catch (error) {
    res.status(400).json({ error: 'Greška prilikom registracije korisnika' });
  }
});

// Login korisnika
router.post('/login', async (req, res) => {
  const { email, lozinka } = req.body;
  const korisnik = await Korisnik.findOne({ where: { email, lozinka } });
  if (!korisnik) {
    return res.status(401).json({ error: 'Pogrešan email ili lozinka' });
  }
  res.json({
    id: korisnik.id,
    ime: korisnik.ime,
    email: korisnik.email,
    uloga: korisnik.uloga
  });
});

module.exports = router;
