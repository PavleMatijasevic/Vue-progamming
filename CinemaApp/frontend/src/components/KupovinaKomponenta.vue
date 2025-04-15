<template>
  <div class="container mt-4">
    <h2>Projekcije za film #{{ filmId }}</h2>

    <div v-if="projekcije.length === 0">Nema dostupnih projekcija.</div>

    <div class="row" v-if="Object.keys(unosi).length > 0">
      <div v-for="p in projekcije" :key="p.id" class="col-md-6 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">{{ p.tip }} projekcija</h5>
            <p class="card-text">
              Datum i vreme: {{ formatirajDatum(p.datumVreme) }}<br />
              Slobodna mesta: {{ p.slobodnaMesta }}
            </p>

            <!-- Forma za kupovinu -->
            <div v-show="unosi[p.id]">
              <div class="mb-2">
                <input
                  v-model="unosi[p.id].brojSedista"
                  type="number"
                  class="form-control"
                  placeholder="Broj sedišta"
                  required
                />
              </div>
              <div class="mb-2">
                <input
                  v-model="unosi[p.id].korisnikId"
                  type="number"
                  class="form-control"
                  placeholder="Tvoj korisnik ID"
                  required
                />
              </div>
              <button class="btn btn-success w-100" @click.prevent="kupiKartu(p.id)">
                Kupi kartu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="poruka" class="alert alert-info mt-4">{{ poruka }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projekcije: [],
      unosi: {},
      poruka: ''
    };
  },
  computed: {
    filmId() {
      return this.$route.params.id;
    }
  },
  mounted() {
  fetch('http://localhost:5000/api/projekcije')
    .then(res => res.json())
    .then(data => {
      console.log('Dohvaćene projekcije:', data); // 👈 loguj projekcije
      this.projekcije = data.filter(p => p.filmId == this.filmId);
      console.log('Filtrirane projekcije:', this.projekcije); // 👈 loguj filtrirane

      const sacuvan = localStorage.getItem('korisnik');
      let korisnikId = null;
      if (sacuvan) {
        const korisnik = JSON.parse(sacuvan);
        korisnikId = korisnik.id;
      }

      this.projekcije.forEach(p => {
        console.log('Inicijalizujem unos za projekciju ID:', p.id);
        this.unosi[p.id] = { brojSedista: '', korisnikId };
      });
    })
    .catch(err => {
      console.error('Fetch greška:', err);
      this.poruka = 'Greška prilikom učitavanja projekcija';
    });
}
,
  methods: {
    formatirajDatum(d) {
      return new Date(d).toLocaleString();
    },
    async kupiKartu(projekcijaId) {
      this.poruka = '';
      const unos = this.unosi[projekcijaId];

      try {
        const res = await fetch('http://localhost:5000/api/karte', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            brojSedista: unos.brojSedista,
            projekcijaId,
            korisnikId: unos.korisnikId
          })
        });

        const data = await res.json();

        if (res.ok) {
          this.poruka = 'Karta uspešno kupljena!';
          this.unosi[projekcijaId] = { brojSedista: '', korisnikId: unos.korisnikId };
        } else {
          this.poruka = data.error || 'Greška prilikom kupovine karte';
        }
      } catch (err) {
        this.poruka = 'Greška prilikom slanja zahteva';
      }
    }
  }
};
</script>
