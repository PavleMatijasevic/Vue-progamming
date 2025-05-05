const express = require('express');
const router = express.Router();
const { Porudzbina, StavkaPorudzbine } = require('../models');

// 📌 Kreiranje porudžbine
router.post('/', async (req, res) => {
  try {
    const { korisnikId, proizvodi } = req.body;

    if (!korisnikId || !proizvodi || !Array.isArray(proizvodi)) {
      return res.status(400).json({ error: 'Nedostaju podaci' });
    }

    // Ukupna cena
    const ukupnaCena = proizvodi.reduce((sum, p) => sum + p.cena, 0);

    // Kreiranje porudžbine
    const porudzbina = await Porudzbina.create({ korisnikId, ukupnaCena });

    // Dodavanje stavki
    for (const proizvod of proizvodi) {
      await StavkaPorudzbine.create({
        porudzbinaId: porudzbina.id,
        proizvodId: proizvod.id,
        kolicina: 1,
        cena: proizvod.cena,
      });
    }

    res.status(201).json({ poruka: 'Porudžbina uspešno kreirana' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Greška pri kreiranju porudžbine' });
  }
});

module.exports = router;
