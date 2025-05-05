const express = require('express');
const router = express.Router();

const kategorijaRoutes = require('./kategorija');
const proizvodRoutes = require('./proizvod');
// (dodaćemo kasnije korpa, porudzbina...)

router.use('/kategorije', kategorijaRoutes);
router.use('/proizvodi', proizvodRoutes);


module.exports = router;
