<template>
  <div class="container mt-5">
    <h2 class="text-center text-primary mb-4">O nama</h2>
    <p class="text-center">Naša aplikacija je napravljena kako bismo naučili Vue.js i TypeScript sa Bootstrap-om.</p>

    <div class="row mt-4">
      <div class="col-md-4" v-for="(member, index) in teamMembers" :key="index">
        <div class="card shadow-sm">
          <div class="card-body text-center">
            <h5 class="card-title text-primary">{{ member.name }}</h5>
            <p class="card-text text-muted">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const teamMembers = [
  { name: "Marko Markovic", role: "Frontend Developer" },
  { name: "Jovan Jovanovic", role: "Backend Developer" },
  { name: "Nikola Nikolic", role: "UI/UX Dizajner" },
];
</script>

<style scoped>
.card {
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
}
</style>
