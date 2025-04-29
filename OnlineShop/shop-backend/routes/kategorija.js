const express = require('express');
const router = express.Router();
const { Kategorija } = require('../models');

// 📌 GET sve kategorije
router.get('/', async (req, res) => {
  try {
    const kategorije = await Kategorija.findAll();
    res.json(kategorije);
  } catch (err) {
    res.status(500).json({ error: 'Greška prilikom dohvatanja kategorija' });
  }
});

// 📌 POST nova kategorija (admin)
router.post('/', async (req, res) => {
  try {
    const { naziv } = req.body;
    const nova = await Kategorija.create({ naziv });
    res.status(201).json(nova);
  } catch (err) {
    res.status(400).json({ error: 'Greška prilikom kreiranja kategorije' });
  }
});
// 📌 DELETE kategorija po ID (admin)
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const obrisana = await Kategorija.destroy({ where: { id } });
    if (obrisana) {
      res.json({ poruka: 'Kategorija obrisana' });
    } else {
      res.status(404).json({ error: 'Kategorija nije pronađena' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Greška prilikom brisanja kategorije' });
  }
});


module.exports = router;
