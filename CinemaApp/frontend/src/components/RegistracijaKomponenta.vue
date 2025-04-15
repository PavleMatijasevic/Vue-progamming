<template>
    <div class="container mt-5">
      <h2>Registracija korisnika</h2>
      <form @submit.prevent="registruj">
        <div class="mb-3">
          <label>Ime:</label>
          <input v-model="ime" type="text" class="form-control" required />
        </div>
        <div class="mb-3">
          <label>Email:</label>
          <input v-model="email" type="email" class="form-control" required />
        </div>
        <div class="mb-3">
          <label>Lozinka:</label>
          <input v-model="lozinka" type="password" class="form-control" required />
        </div>
        <button class="btn btn-success">Registruj se</button>
      </form>
      <div v-if="poruka" class="alert alert-info mt-3">{{ poruka }}</div>
  
      <p class="mt-3">Već imaš nalog? <router-link to="/login">Prijavi se</router-link></p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        ime: '',
        email: '',
        lozinka: '',
        poruka: ''
      };
    },
    methods: {
      async registruj() {
        try {
          const res = await fetch('http://localhost:5000/api/korisnici/registracija', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ime: this.ime, email: this.email, lozinka: this.lozinka })
          });
          const data = await res.json();
  
          if (res.ok) {
            this.poruka = 'Registracija uspešna!';
          } else {
            this.poruka = data.error || 'Greška prilikom registracije';
          }
        } catch (error) {
          this.poruka = 'Došlo je do greške.';
        }
      }
    }
  };
  </script>
  