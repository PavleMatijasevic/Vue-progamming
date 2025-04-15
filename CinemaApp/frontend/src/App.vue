<template>
  <div>
    <!-- Navigacija -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">🎬 Online Bioskop</router-link>

        <div class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/repertoar">Repertoar</router-link>
            </li>
            <li v-if="korisnik" class="nav-item">
              <router-link class="nav-link" to="/moje-karte">Moje karte</router-link>
            </li>
            <li v-if="korisnik?.isAdmin" class="nav-item">
  <router-link class="nav-link" to="/admin">Admin panel</router-link>
            </li>


          </ul>

          <div class="d-flex">
            <span v-if="korisnik" class="navbar-text text-white me-3">
              Dobrodošao, {{ korisnik.ime }}!
            </span>
            <router-link v-if="!korisnik" class="btn btn-outline-light me-2" to="/login">Prijava</router-link>
            <router-link v-if="!korisnik" class="btn btn-outline-light" to="/registracija">Registracija</router-link>
            <button v-if="korisnik" class="btn btn-danger" @click="logout">Odjava</button>
          </div>
        </div>
        
      </div>
    </nav>

    <!-- Glavni sadržaj -->
    <router-view />

    <!-- Footer -->
    <footer class="bg-dark text-white text-center py-3 mt-4">
      © 2025 Online Bioskop. Sva prava zadržana.
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      korisnik: null
    };
  },
  mounted() {
    const sacuvan = localStorage.getItem('korisnik');
    if (sacuvan) {
      this.korisnik = JSON.parse(sacuvan);
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('korisnik');
      this.korisnik = null;
      this.$router.push('/'); // vrati na početnu
    }
  }
};
</script>

<style>
body {
  background-color: #f8f9fa;
}
</style>
