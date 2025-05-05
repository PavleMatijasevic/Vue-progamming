<template>
    <div class="container mt-5">
      <h2>Registracija korisnika</h2>
      <form @submit.prevent="registruj">
        <div class="mb-3">
          <label class="form-label">Ime</label>
          <input type="text" class="form-control" v-model="ime" required />
        </div>
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input type="email" class="form-control" v-model="email" required />
        </div>
        <div class="mb-3">
          <label class="form-label">Lozinka</label>
          <input type="password" class="form-control" v-model="lozinka" required />
        </div>
        <button type="submit" class="btn btn-primary">Registruj se</button>
      </form>
      <div v-if="poruka" class="alert alert-info mt-3">{{ poruka }}</div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import axios from 'axios'
  
  const ime = ref('')
  const email = ref('')
  const lozinka = ref('')
  const poruka = ref('')
  
  const registruj = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        ime: ime.value,
        email: email.value,
        lozinka: lozinka.value
      })
      poruka.value = 'Registracija uspešna! Možete se prijaviti.'
      ime.value = ''
      email.value = ''
      lozinka.value = ''
    } catch (err) {
      poruka.value = err.response?.data?.error || 'Greška pri registraciji'
    }
  }
  </script>
  