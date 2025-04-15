<template>
  <div>
    <!-- Hero sekcija -->
    <section class="hero bg-primary text-white text-center py-5">
      <div class="container">
        <h1 class="display-4">Dobrodošli u Moju Aplikaciju!</h1>
        <p class="lead">Učite i vežbajte Vue.js, TypeScript i Bootstrap na jednom mestu.</p>
        <router-link to="/data" class="btn btn-light btn-lg mt-3">
          Pogledaj podatke
        </router-link>
      </div>
    </section>

    <!-- Dodatni sadržaj -->
    <section class="py-5">
      <div class="container">
        <h2>Šta nudimo</h2>
        <p>Ova aplikacija je primer implementacije modernih web tehnologija. Naš cilj je da kroz praktične primere
          naučite:</p>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Vue.js sa TypeScript-om</li>
          <li class="list-group-item">Bootstrap za responzivni dizajn</li>
          <li class="list-group-item">Interakciju sa API-jem i paginaciju</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  background: url('https://via.placeholder.com/1920x500') no-repeat center center;
  background-size: cover;
}
</style>
