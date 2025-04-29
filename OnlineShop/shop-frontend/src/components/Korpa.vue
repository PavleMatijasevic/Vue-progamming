<template>
    <div class="container mt-4">
      <h2 class="text-center mb-4">Vaša korpa</h2>
  
      <div v-if="proizvodi.length === 0" class="text-center">
        <p>Vaša korpa je prazna.</p>
        <router-link to="/" class="btn btn-primary mt-3">Nazad na početnu</router-link>
      </div>
  
      <div v-else>
        <div class="row mb-4" v-for="(proizvod, index) in proizvodi" :key="index">
          <div class="col-md-8">
            <div class="card mb-2 shadow-sm">
              <div class="card-body d-flex justify-content-between align-items-center">
                <div>
                  <h5 class="card-title">{{ proizvod.naziv }}</h5>
                  <p class="card-text">Cena: {{ proizvod.cena }} RSD</p>
                </div>
                <button @click="ukloniIzKorpe(index)" class="btn btn-danger">Ukloni</button>
              </div>
            </div>
          </div>
        </div>
  
        <div class="mt-4 text-center">
          <h4>Ukupno za plaćanje: {{ ukupno }} RSD</h4>
          <button class="btn btn-success mt-3" @click="potvrdiPorudzbinu">Potvrdi porudžbinu</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  
  const proizvodi = ref([]);
  
  const ucitajKorpu = () => {
    const data = localStorage.getItem('korpa');
    proizvodi.value = data ? JSON.parse(data) : [];
  };
  
  const ukloniIzKorpe = (index) => {
    proizvodi.value.splice(index, 1);
    localStorage.setItem('korpa', JSON.stringify(proizvodi.value));
  };
  
  const potvrdiPorudzbinu = () => {
    if (proizvodi.value.length === 0) {
      alert('Vaša korpa je prazna.');
      return;
    }
    alert('Porudžbina uspešno kreirana!');
    proizvodi.value = [];
    localStorage.removeItem('korpa');
  };
  
  const ukupno = computed(() => {
    return proizvodi.value.reduce((sum, p) => sum + parseFloat(p.cena), 0).toFixed(2);
  });
  
  onMounted(() => {
    ucitajKorpu();
  });
  </script>
  
  <style scoped>
  .card {
    transition: transform 0.2s;
  }
  .card:hover {
    transform: scale(1.02);
  }
  </style>
  