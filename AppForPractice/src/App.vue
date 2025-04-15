<script setup lang="ts">
import { ref, onMounted } from "vue";
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Footer from "./components/Footer.vue";


const isDarkMode = ref(false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  document.body.classList.toggle("dark-mode", isDarkMode.value);
  localStorage.setItem("darkMode", JSON.stringify(isDarkMode.value));
};

onMounted(() => {
  const savedMode = localStorage.getItem("darkMode");
  if (savedMode) {
    isDarkMode.value = JSON.parse(savedMode);
    document.body.classList.toggle("dark-mode", isDarkMode.value);
  }
});
</script>

<template>
  <Header :toggleDarkMode="toggleDarkMode" :isDarkMode="isDarkMode" />
  <div class="container mt-5">
    <router-view></router-view>
  </div>
  <Footer />
</template>


<style>
body {
  padding-top: 56px;
  /* 56px odgovara visini Bootstrap navbar-a */
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 0rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 0 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

/* Globalni stilove za Dark Mode */
body.dark-mode {
  background-color: #121212;
  color: #ffffff;
}

body.dark-mode .card {
  background-color: #1e1e1e;
  color: white;
}

body.dark-mode .navbar {
  background-color: #222 !important;
}

body.dark-mode .page-link {
  color: #ddd;
}

body.dark-mode .page-item.active .page-link {
  background-color: #444;
  border-color: #444;
}

body {
  margin: 0;
  padding: 0;
}
</style>
