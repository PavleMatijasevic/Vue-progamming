<template>
  <div class="container mt-4">
    <h2 class="mb-4 text-center">Proizvodi u kategoriji</h2>

    <div v-if="loading" class="text-center">
      <p>Učitavanje proizvoda...</p>
    </div>

    <div v-else-if="proizvodi.length === 0" class="text-center">
      <p>Nema dostupnih proizvoda.</p>
    </div>

    <div v-else class="row">
      <div v-for="proizvod in proizvodi" :key="proizvod.id" class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm">
          <img :src="proizvod.slika || 'https://via.placeholder.com/150'" class="card-img-top" alt="Proizvod" />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ proizvod.naziv }}</h5>
            <p class="card-text">{{ proizvod.opis }}</p>
            <p class="card-text"><strong>{{ proizvod.cena }} RSD</strong></p>
            <button @click="dodajUKorpu(proizvod)" class="btn btn-primary mt-auto">Dodaj u korpu</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

const proizvodi = ref([]);
const loading = ref(true);
const route = useRoute();

const fetchProizvodi = async () => {
  try {
    const res = await axios.get('http://localhost:5000/api/proizvodi');
    proizvodi.value = res.data.filter(p => p.kategorijaId == route.params.id);
  } catch (err) {
    console.error('Greška pri dohvatanju proizvoda:', err);
  } finally {
    loading.value = false;
  }
};

const dodajUKorpu = (proizvod) => {
  let korpa = JSON.parse(localStorage.getItem('korpa')) || [];
  korpa.push({
    id: proizvod.id,
    naziv: proizvod.naziv,
    cena: proizvod.cena
  });
  localStorage.setItem('korpa', JSON.stringify(korpa));
  alert('Proizvod dodat u korpu!');
};

onMounted(() => {
  fetchProizvodi();
});
</script>
