const express = require('express');
const router = express.Router();
const { Korisnik } = require('../models');
const bcrypt = require('bcrypt');

// 📌 POST /api/korisnici/registracija
router.post('/registracija', async (req, res) => {
  try {
    const { ime, email, lozinka } = req.body;

    // Provera da li email već postoji
    const postoji = await Korisnik.findOne({ where: { email } });
    if (postoji) {
      return res.status(400).json({ error: 'Korisnik sa tim emailom već postoji' });
    }

    const hesovanaLozinka = await bcrypt.hash(lozinka, 10);

    const noviKorisnik = await Korisnik.create({
      ime,
      email,
      lozinka: hesovanaLozinka
    });

    res.status(201).json({ poruka: 'Uspešna registracija', korisnik: noviKorisnik });
  } catch (error) {
    res.status(400).json({ error: 'Greška prilikom registracije' });
  }
});

// 📌 POST /api/korisnici/login
router.post('/login', async (req, res) => {
  try {
    const { email, lozinka } = req.body;

    const korisnik = await Korisnik.findOne({ where: { email } });
    if (!korisnik) {
      return res.status(404).json({ error: 'Korisnik nije pronađen' });
    }

    const lozinkaOk = await bcrypt.compare(lozinka, korisnik.lozinka);
    if (!lozinkaOk) {
      return res.status(401).json({ error: 'Pogrešna lozinka' });
    }

    res.json({  poruka: 'Uspešan login',
      korisnik: {
        id: korisnik.id,
        ime: korisnik.ime,
        email: korisnik.email,
        lozinka: korisnik.lozinka,
        uloga: korisnik.uloga,
        isAdmin: korisnik.isadmin} });
  } catch (error) {
    res.status(400).json({ error: 'Greška prilikom prijave' });
  }
});

module.exports = router;
