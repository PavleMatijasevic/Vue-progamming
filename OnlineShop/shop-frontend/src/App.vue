<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">🛒 Online Shop</router-link>

        <div class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Početna</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/korpa">Korpa</router-link> <!-- Ovde dodajemo -->
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
