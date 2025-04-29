const express = require('express');
const router = express.Router();
const { Korpa, Proizvod } = require('../models');

// Dodaj proizvod u korpu
router.post('/:korpaId/dodaj', async (req, res) => {
  const { proizvodId } = req.body;
  try {
    const korpa = await Korpa.findByPk(req.params.korpaId);
    if (!korpa) {
      return res.status(404).json({ error: 'Korpa nije pronađena' });
    }
    await korpa.addProizvod(proizvodId);
    res.json({ message: 'Proizvod dodat u korpu' });
  } catch (error) {
    res.status(400).json({ error: 'Greška prilikom dodavanja u korpu' });
  }
});

module.exports = router;
