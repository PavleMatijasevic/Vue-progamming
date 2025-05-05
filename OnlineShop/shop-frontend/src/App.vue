<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">🛒 Online Shop</router-link>

        <div class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="btn btn-primary me-3" to="/" >Početna</router-link>
            </li>
            <li class="nav-item">
              <router-link class="btn btn-primary me-3" to="/korpa">Korpa</router-link> 
            </li>
            <li>
              <router-link to="/login" class="btn btn-primary me-3">Prijavi se</router-link>
            </li>
            <li>
              <router-link to="/registracija" class="btn btn-outline-primary">Registruj se</router-link> 
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view />

    <footer class="bg-dark text-white text-center py-3 mt-4">
      © 2025 Online Shop. Sva prava zadržana.
    </footer>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const korisnik = ref(null)
const router = useRouter()

onMounted(() => {
  const podaci = localStorage.getItem('korisnik')
  if (podaci) {
    korisnik.value = JSON.parse(podaci)
  }
})

const logout = () => {
  localStorage.removeItem('korisnik')
  korisnik.value = null
  router.push('/')
}
</script>

