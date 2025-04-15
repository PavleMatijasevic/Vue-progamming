<template>
    <div class="container mt-4">
      <h2>Admin panel</h2>
  
      <div v-if="!korisnik || korisnik.uloga !== 'admin'" class="alert alert-danger">
  Pristup odbijen – samo admin korisnici mogu koristiti ovaj panel.
</div>

  
      <div v-else>
        <!-- DODAVANJE FILMA -->
        <div class="card mb-4">
          <div class="card-header">Dodaj novi film</div>
          <div class="card-body">
            <form @submit.prevent="dodajFilm">
              <div class="mb-2">
                <input v-model="film.naziv" type="text" class="form-control" placeholder="Naziv" required />
              </div>
              <div class="mb-2">
                <textarea v-model="film.opis" class="form-control" placeholder="Opis" required></textarea>
              </div>
              <div class="mb-2">
                <input v-model.number="film.trajanje" type="number" class="form-control" placeholder="Trajanje (min)" required />
              </div>
              <div class="mb-2">
                <input v-model="film.zanr" type="text" class="form-control" placeholder="Žanr" required />
              </div>
              <div class="mb-2">
                <input v-model.number="film.godina" type="number" class="form-control" placeholder="Godina" required />
              </div>
              <button class="btn btn-primary">Dodaj film</button>
            </form>
          </div>
        </div>
  
        <!-- DODAVANJE PROJEKCIJE -->
        <div class="card">
          <div class="card-header">Dodaj novu projekciju</div>
          <div class="card-body">
            <form @submit.prevent="dodajProjekciju">
              <div class="mb-2">
                <input v-model="projekcija.datumVreme" type="datetime-local" class="form-control" required />
              </div>
              <div class="mb-2">
                <input v-model="projekcija.tip" type="text" class="form-control" placeholder="Tip (2D, 3D...)" required />
              </div>
              <div class="mb-2">
                <input v-model.number="projekcija.slobodnaMesta" type="number" class="form-control" placeholder="Broj mesta" required />
              </div>
              <div class="mb-2">
                <input v-model.number="projekcija.filmId" type="number" class="form-control" placeholder="ID filma" required />
              </div>
              <button class="btn btn-success">Dodaj projekciju</button>
            </form>
          </div>
        </div>
  
        <!-- PORUKA -->
        <div v-if="poruka" class="alert alert-info mt-3">{{ poruka }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        korisnik: null,
        film: {
          naziv: '',
          opis: '',
          trajanje: '',
          zanr: '',
          godina: ''
        },
        projekcija: {
          datumVreme: '',
          tip: '',
          slobodnaMesta: '',
          filmId: ''
        },
        poruka: ''
      };
    },
    mounted() {
      const sacuvan = localStorage.getItem('korisnik');
      if (sacuvan) {
        this.korisnik = JSON.parse(sacuvan);
      }
    },
    methods: {
      async dodajFilm() {
        this.poruka = '';
        try {
          const res = await fetch('http://localhost:5000/api/filmovi', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...this.film, korisnikId: this.korisnik.id })
          });
          const data = await res.json();
          this.poruka = res.ok ? 'Film dodat!' : data.error || 'Greška prilikom dodavanja filma';
        } catch (err) {
          this.poruka = 'Greška prilikom povezivanja sa serverom';
        }
      },
      async dodajProjekciju() {
        this.poruka = '';
        try {
          const res = await fetch('http://localhost:5000/api/projekcije', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...this.projekcija, korisnikId: this.korisnik.id })
          });
          const data = await res.json();
          this.poruka = res.ok ? 'Projekcija dodata!' : data.error || 'Greška prilikom dodavanja projekcije';
        } catch (err) {
          this.poruka = 'Greška prilikom povezivanja sa serverom';
        }
      }
    }
  };
  </script>
  