const express = require('express');
const router = express.Router();
const { Proizvod, Kategorija } = require('../models');

// 📌 GET svi proizvodi
router.get('/', async (req, res) => {
  try {
    const proizvodi = await Proizvod.findAll({ include: [Kategorija] });
    res.json(proizvodi);
  } catch (err) {
    res.status(500).json({ error: 'Greška prilikom dohvatanja proizvoda' });
  }
});

// 📌 POST novi proizvod (admin)
router.post('/', async (req, res) => {
  try {
    const { naziv, opis, cena, popust, kategorijaId } = req.body;
    const novi = await Proizvod.create({ naziv, opis, cena, popust, kategorijaId });
    res.status(201).json(novi);
  } catch (err) {
    res.status(400).json({ error: 'Greška prilikom kreiranja proizvoda' });
  }
});

module.exports = router;
