const express = require('express');
const router = express.Router();

const filmRouter = require('./film');
const projekcijaRouter = require('./projekcija');
const kartaRouter = require('./karta');
const korisnikRouter = require('./korisnik');


router.use('/filmovi', filmRouter);
router.use('/projekcije', projekcijaRouter);
router.use('/karte', kartaRouter);
router.use('/korisnici', korisnikRouter);

module.exports = router;
