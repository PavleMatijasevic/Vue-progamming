const express = require('express');
const router = express.Router();
const { Karta, Projekcija, Korisnik } = require('../models');

// 📌 GET /api/karte – sve karte
router.get('/', async (req, res) => {
  try {
    const karte = await Karta.findAll({
      include: Projekcija
    });
    res.json(karte);
  } catch (error) {
    res.status(500).json({ error: 'Greška prilikom dohvatanja karata' });
  }
});

// 📌 POST /api/karte – kupovina karte
router.post('/', async (req, res) => {
    try {
      const { brojSedista, projekcijaId, korisnikId } = req.body;
  
      const projekcija = await Projekcija.findByPk(projekcijaId);
      if (!projekcija) {
        return res.status(404).json({ error: 'Projekcija nije pronađena' });
      }
  
      const korisnik = await Korisnik.findByPk(korisnikId);
      if (!korisnik) {
        return res.status(404).json({ error: 'Korisnik nije pronađen' });
      }
  
      if (projekcija.slobodnaMesta <= 0) {
        return res.status(400).json({ error: 'Nema više slobodnih mesta' });
      }
  
      const novaKarta = await Karta.create({
        brojSedista,
        projekcijaId,
        korisnikId
      });
  
      projekcija.slobodnaMesta -= 1;
      await projekcija.save();
  
      res.status(201).json(novaKarta);
    } catch (error) {
      res.status(400).json({ error: 'Greška prilikom kupovine karte' });
    }
  });
  
// 📌 GET /api/karte/korisnik/:id – sve karte za jednog korisnika
router.get('/korisnik/:id', async (req, res) => {
    try {
      const korisnikId = req.params.id;
  
      const karte = await Karta.findAll({
        where: { korisnikId },
        include: [Projekcija]
      });
  
      res.json(karte);
    } catch (error) {
      res.status(500).json({ error: 'Greška prilikom dohvatanja karata korisnika' });
    }
  });
  

module.exports = router;
