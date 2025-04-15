<template>
    <div class="container mt-5">
      <h2>Prijava korisnika</h2>
      <form @submit.prevent="login">
        <div class="mb-3">
          <label>Email:</label>
          <input v-model="email" type="email" class="form-control" required />
        </div>
        <div class="mb-3">
          <label>Lozinka:</label>
          <input v-model="lozinka" type="password" class="form-control" required />
        </div>
        <button class="btn btn-primary">Prijavi se</button>
      </form>
      <div v-if="poruka" class="alert alert-info mt-3">{{ poruka }}</div>
  
      <p class="mt-3">Nemaš nalog? <router-link to="/registracija">Registruj se</router-link></p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        lozinka: '',
        poruka: ''
      };
    },
    methods: {
      async login() {
        try {
          const res = await fetch('http://localhost:5000/api/korisnici/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: this.email, lozinka: this.lozinka })
          });
          const data = await res.json();
  
          if (res.ok) {
            this.poruka = 'Uspešno prijavljivanje!';
            localStorage.setItem('korisnik', JSON.stringify(data.korisnik));
            this.$router.push('/'); // vrati ga na početnu
          } else {
            this.poruka = data.error || 'Greška prilikom prijave';
          }
        } catch (error) {
          this.poruka = 'Došlo je do greške.';
        }
      }
    }
  };
  </script>
  