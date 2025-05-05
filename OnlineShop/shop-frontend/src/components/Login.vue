<template>
    <div class="container mt-5">
      <h2>Prijava korisnika</h2>
      <form @submit.prevent="prijavi">
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input type="email" class="form-control" v-model="email" required />
        </div>
        <div class="mb-3">
          <label class="form-label">Lozinka</label>
          <input type="password" class="form-control" v-model="lozinka" required />
        </div>
        <button type="submit" class="btn btn-success">Prijavi se</button>
      </form>
      <div v-if="poruka" class="alert alert-danger mt-3">{{ poruka }}</div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import axios from 'axios'
  import { useRouter } from 'vue-router'
  
  const email = ref('')
  const lozinka = ref('')
  const poruka = ref('')
  const router = useRouter()
  
  const prijavi = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email: email.value,
        lozinka: lozinka.value
      })
  
      localStorage.setItem('korisnik', JSON.stringify(res.data.korisnik))
      poruka.value = ''
      router.push('/')
    } catch (err) {
      poruka.value = err.response?.data?.error || 'Greška pri prijavi'
    }
  }
  </script>
  