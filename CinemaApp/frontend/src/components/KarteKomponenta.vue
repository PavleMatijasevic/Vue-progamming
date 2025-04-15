<template>
    <div class="container mt-4">
      <h2>Moje kupljene karte</h2>
      <div v-if="karte.length === 0">Nema kupljenih karata.</div>
  
      <ul class="list-group" v-else>
        <li class="list-group-item" v-for="karta in karte" :key="karta.id">
          Film ID: {{ karta.projekcija?.filmId }} – Projekcija: {{ formatirajDatum(karta.projekcija?.datumVreme) }} – Sedište: {{ karta.brojSedista }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        karte: []
      };
    },
    mounted() {
      const korisnik = JSON.parse(localStorage.getItem('korisnik'));
      if (korisnik) {
        fetch(`http://localhost:5000/api/karte/korisnik/${korisnik.id}`)
          .then(res => res.json())
          .then(data => this.karte = data)
          .catch(err => console.error(err));
      }
    },
    methods: {
      formatirajDatum(d) {
        return new Date(d).toLocaleString();
      }
    }
  };
  </script>
  