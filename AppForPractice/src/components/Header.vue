<script setup lang="ts">
defineProps<{
    toggleDarkMode: () => void;
    isDarkMode: boolean;
}>();
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top w-100 top-0">
        <div class="container">
            <router-link class="navbar-brand" to="/">Moja Aplikacija</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Početna</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">O nama</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/data">Podaci</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/example">Primer</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/table">Tabela</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/boxes">Boxes</router-link>
                    </li>
                    <!-- Dugme za prebacivanje tamnog režima -->
                    <li class="nav-item">
                        <button class="btn btn-outline-light ms-3" @click="toggleDarkMode">
                            {{ isDarkMode ? "🌞 Light Mode" : "🌙 Dark Mode" }}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
