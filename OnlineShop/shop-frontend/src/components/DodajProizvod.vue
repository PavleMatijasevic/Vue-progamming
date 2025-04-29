<template>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card shadow-sm">
            <div class="card-header bg-primary text-white">
              <h4 class="mb-0 text-center">Dodaj Novi Proizvod</h4>
            </div>
            <div class="card-body">
              <form @submit.prevent="dodajProizvod">
                <div class="mb-3">
                  <label class="form-label">Naziv proizvoda</label>
                  <input v-model="proizvod.naziv" type="text" class="form-control" placeholder="Unesite naziv" required />
                </div>
  
                <div class="mb-3">
                  <label class="form-label">Opis proizvoda</label>
                  <textarea v-model="proizvod.opis" class="form-control" placeholder="Unesite opis" required></textarea>
                </div>
  
                <div class="mb-3">
                  <label class="form-label">Cena (RSD)</label>
                  <input v-model.number="proizvod.cena" type="number" class="form-control" placeholder="Unesite cenu" required />
                </div>
  
                <div class="mb-3">
                  <label class="form-label">Popust (%)</label>
                  <input v-model.number="proizvod.popust" type="number" class="form-control" placeholder="Unesite popust ako postoji" />
                </div>
  
                <div class="mb-3">
                  <label class="form-label">Kategorija</label>
                  <select v-model="proizvod.kategorijaId" class="form-select" required>
                    <option disabled value="">-- Izaberi kategoriju --</option>
                    <option v-for="kategorija in kategorije" :key="kategorija.id" :value="kategorija.id">
                      {{ kategorija.naziv }}
                    </option>
                  </select>
                </div>
  
                <div class="mb-3">
                  <label class="form-label">URL Slike</label>
                  <input v-model="proizvod.slika" type="text" class="form-control" placeholder="Unesite URL slike proizvoda" />
                </div>
  
                <div class="d-grid gap-2">
                  <button type="submit" class="btn btn-success">Dodaj proizvod</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  const proizvod = ref({
    naziv: '',
    opis: '',
    cena: 0,
    popust: 0,
    kategorijaId: '',
    slika: ''
  });
  
  const kategorije = ref([]);
  
  const ucitajKategorije = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/kategorije');
      kategorije.value = res.data;
    } catch (err) {
      console.error('Greška pri učitavanju kategorija:', err);
    }
  };
  
  const dodajProizvod = async () => {
    try {
      await axios.post('http://localhost:5000/api/proizvodi', proizvod.value);
      alert('Proizvod uspešno dodat!');
      proizvod.value = { naziv: '', opis: '', cena: 0, popust: 0, kategorijaId: '', slika: '' };
    } catch (err) {
      console.error('Greška prilikom dodavanja proizvoda:', err);
      alert('Došlo je do greške!');
    }
  };
  
  onMounted(() => {
    ucitajKategorije();
  });
  </script>
  
  