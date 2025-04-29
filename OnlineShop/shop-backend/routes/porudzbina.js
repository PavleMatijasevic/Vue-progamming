const express = require('express');
const router = express.Router();
const { Porudzbina, StavkaPorudzbine } = require('../models');

// Kreiraj porudžbinu
router.post('/', async (req, res) => {
  try {
    const novaPorudzbina = await Porudzbina.create(req.body, {
      include: [StavkaPorudzbine]
    });
    res.status(201).json(novaPorudzbina);
  } catch (error) {
    res.status(400).json({ error: 'Greška prilikom kreiranja porudžbine' });
  }
});

// Dohvati sve porudžbine korisnika
router.get('/korisnik/:korisnikId', async (req, res) => {
  try {
    const porudzbine = await Porudzbina.findAll({
      where: { korisnikId: req.params.korisnikId },
      include: [StavkaPorudzbine]
    });
    res.json(porudzbine);
  } catch (error) {
    res.status(500).json({ error: 'Greška prilikom dohvatanja porudžbina' });
  }
});

module.exports = router;
