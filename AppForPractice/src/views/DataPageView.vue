<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import axios from "axios";

const posts = ref<{ id: number; title: string; body: string }[]>([]);
const currentPage = ref(1);
const perPage = 5;
const isLoading = ref(true); // Pratimo da li su podaci učitani

// Dohvatanje podataka sa API-ja
const fetchPosts = async () => {
    try {
        isLoading.value = true; // Prikaz loader-a
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        posts.value = response.data;
    } catch (error) {
        console.error("Greška pri učitavanju podataka:", error);
    } finally {
        isLoading.value = false; // Uklanjanje loader-a nakon učitavanja
    }
};

// Filtrirani podaci za prikaz na trenutnoj stranici
const paginatedPosts = computed(() => {
    const start = (currentPage.value - 1) * perPage;
    return posts.value.slice(start, start + perPage);
});

// Ukupan broj stranica
const totalPages = computed(() => Math.ceil(posts.value.length / perPage));

// Funkcije za paginaciju
const nextPage = () => {
    if (currentPage.value < totalPages.value) currentPage.value++;
};

const prevPage = () => {
    if (currentPage.value > 1) currentPage.value--;
};

onMounted(fetchPosts);
</script>

<template>
    <div class="container">
        <h2>Podaci sa API-ja</h2>
        <p>Ovde prikazujemo podatke preuzete sa API-ja uz paginaciju.</p>

        <div v-if="isLoading" class="d-flex justify-content-center mt-5">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Učitavanje...</span>
            </div>
        </div>

        <div v-else>
            <nav class="mt-3">
                <ul class="pagination justify-content-center">
                    <li class="page-item" :class="{ disabled: currentPage === 1 }">
                        <button class="page-link" @click="prevPage">Prethodna</button>
                    </li>
                    <li class="page-item" v-for="page in totalPages" :key="page"
                        :class="{ active: page === currentPage }">
                        <button class="page-link" @click="currentPage = page">{{ page }}</button>
                    </li>
                    <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                        <button class="page-link" @click="nextPage">Sledeća</button>
                    </li>
                </ul>
            </nav>
            <div class="row">
                <div class="col-md-6" v-for="post in paginatedPosts" :key="post.id">
                    <router-link :to="'/post/' + post.id" class="text-decoration-none">
                        <div class="card mb-3 shadow">
                            <div class="card-body">
                                <h5 class="card-title text-primary">{{ post.title }}</h5>
                                <p class="card-text text-muted">{{ post.body.substring(0, 100) }}...</p>
                                <span class="text-primary">Pročitaj više →</span>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>


        </div>
    </div>
</template>

<style scoped>
.pagination .page-link {
    color: #007bff;
    font-weight: bold;
    transition: 0.2s;
}

.pagination .page-item.active .page-link {
    background-color: #007bff;
    color: white;
}

.pagination .page-link:hover {
    background-color: #0056b3;
    color: white;
}
</style>
