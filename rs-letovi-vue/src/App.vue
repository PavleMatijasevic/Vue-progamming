<script setup lang="ts">
import NavbarLink from '@/components/NavbarLink.vue';

const year = new Date().getFullYear()

</script>

<template>
<nav class="navbar navbar-expand-lg navbar-light">
  <div class="container">
    <a class="navbar-brand" href="#"><i class="fa-solid fa-plane">Ticket Track</i></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        
        <NavbarLink to="/" name="Home" />
        <NavbarLink to="/about" name="About" />

      </ul>
    </div>
    <div class="navbar-text">Moj tekst</div>
  </div>
</nav>   
  <div class="container">
  <!---<RouterLink to="/" class="btn btn-primary">Home</RouterLink>
  <RouterLink to="/about" class="btn btn-danger m-1">About</RouterLink>
  -->
  <RouterView />
  <footer class="mx-auto text-center">
    &copy; {{ year }} Univerzitet Singidunum - Razvoj softvera
  </footer>
  </div>



</template>
