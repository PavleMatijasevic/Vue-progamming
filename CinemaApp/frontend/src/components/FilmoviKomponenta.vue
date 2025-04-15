<template>
  <div class="container mt-4">
    <h2 class="mb-3">Repertoar filmova</h2>
    <div class="mb-3">
      <label for="sortiranje" class="form-label">Sortiraj po trajanju filma:</label>
      <select v-model="sortiranje" class="form-select" id="sortiranje">
        <option value="default">Bez sortiranja</option>
        <option value="rastuce">Rastuće</option>
        <option value="opadajuce">Opadajuće</option>
      </select>
    </div>


    <div v-if="paginiraniFilmovi.length === 0">Učitavanje filmova...</div>

    <div class="row">
      <div class="mb-3">
  <label for="zanr" class="form-label">Filtriraj po žanru:</label>
  <select v-model="odabraniZanr" class="form-select" id="zanr">
    <option value="svi">Svi žanrovi</option>
    <option v-for="zanr in zanrovi" :key="zanr" :value="zanr">
      {{ zanr }}
    </option>
  </select>
  <div class="mb-3">
  <label for="pretraga" class="form-label">Pretraži po nazivu:</label>
  <input v-model="pretraga" type="text" class="form-control" id="pretraga" placeholder="Unesi naziv filma..." />
</div>

</div>

      <div v-for="film in paginiraniFilmovi" :key="film.id" class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">{{ film.naziv }}</h5>
            <p class="card-text">{{ film.opis }}</p>
            <p class="card-text"><strong>Trajanje:</strong> {{ film.trajanje }} min</p>
            <p class="card-text"><strong>Žanr:</strong> {{ film.zanr }}</p>
            <p class="card-text"><strong>Godina:</strong> {{ film.godina }}</p>
            <router-link :to="`/kupovina/${film.id}`" class="btn btn-primary">Prikaži projekcije</router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- PAGINACIJA -->
    <nav v-if="ukupnoStrana > 1" class="mt-4">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: trenutnaStrana === 1 }">
          <button class="page-link" @click="promeniStranu(trenutnaStrana - 1)">Prethodna</button>
        </li>
        <li class="page-item" v-for="n in ukupnoStrana" :key="n" :class="{ active: trenutnaStrana === n }">
          <button class="page-link" @click="promeniStranu(n)">{{ n }}</button>
        </li>
        <li class="page-item" :class="{ disabled: trenutnaStrana === ukupnoStrana }">
          <button class="page-link" @click="promeniStranu(trenutnaStrana + 1)">Sledeća</button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sviFilmovi: [],
      trenutnaStrana: 1,
      filmoviPoStrani: 6,
      sortiranje: 'default',
      zanrovi: [],
      odabraniZanr: 'svi',
      pretraga: ''
    };
  },
  computed: {
    sortiraniFilmovi() {
  let sortirani = [...this.sviFilmovi];

  // 🔍 Pretraga po nazivu
  if (this.pretraga.trim() !== '') {
    sortirani = sortirani.filter(film =>
      film.naziv.toLowerCase().includes(this.pretraga.trim().toLowerCase())
    );
  }

  // 🎭 Filter po žanru
  if (this.odabraniZanr !== 'svi') {
    sortirani = sortirani.filter(f => f.zanr === this.odabraniZanr);
  }

  // ⏳ Sortiranje po trajanju
  if (this.sortiranje === 'rastuce') {
    sortirani.sort((a, b) => a.trajanje - b.trajanje);
  } else if (this.sortiranje === 'opadajuce') {
    sortirani.sort((a, b) => b.trajanje - a.trajanje);
  }

  return sortirani;
}
,
    paginiraniFilmovi() {
      const start = (this.trenutnaStrana - 1) * this.filmoviPoStrani;
      const end = start + this.filmoviPoStrani;
      return this.sortiraniFilmovi.slice(start, end);
    },
    ukupnoStrana() {
      return Math.ceil(this.sortiraniFilmovi.length / this.filmoviPoStrani);
    }
  },

  methods: {
    promeniStranu(strana) {
      this.trenutnaStrana = strana;
    }
  },
  mounted() {
    fetch('http://localhost:5000/api/filmovi')
      .then(res => res.json())
      .then(data => {
        this.sviFilmovi = data
        
        const sviZanrovi = [...new Set(data.map(f => f.zanr))];
        this.zanrovi = sviZanrovi.sort();
      })

      .catch(err => console.error('Greška:', err));
  }
};
</script>
