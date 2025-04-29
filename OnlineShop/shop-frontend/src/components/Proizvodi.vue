<template>
  <div class="container mt-4">
    <h2>Proizvodi u kategoriji</h2>
    <div v-if="loading">Učitavanje...</div>
    <div v-else-if="proizvodi.length === 0">Nema proizvoda u ovoj kategoriji.</div>
    <div class="row" v-else>
      <div v-for="proizvod in proizvodi" :key="proizvod.id" class="col-md-4 mb-4">
        <div class="card h-100">
          <img :src="proizvod.slika || 'https://via.placeholder.com/150'" class="card-img-top" alt="Proizvod">
          <div class="card-body">
            <h5 class="card-title">{{ proizvod.naziv }}</h5>
            <p class="card-text">{{ proizvod.opis }}</p>
            <p class="card-text"><strong>{{ formatCena(proizvod.cena) }} din</strong></p>
            <span v-if="proizvod.popust > 0" class="badge bg-success">Popust: {{ proizvod.popust }}%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      proizvodi: [],
      loading: true,
    };
  },
  methods: {
    async fetchProizvodi() {
      try {
        const { id } = this.$route.params;
        const res = await axios.get(`http://localhost:5000/api/proizvodi`);
        this.proizvodi = res.data.filter(p => p.kategorijaId == id);
      } catch (err) {
        console.error('Greška pri dohvatanju proizvoda:', err);
      } finally {
        this.loading = false;
      }
    },
    formatCena(cena) {
      return cena.toFixed(2);
    }
  },
  mounted() {
    this.fetchProizvodi();
  }
};
</script>
