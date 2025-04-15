<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const route = useRoute();
const post = ref<{ id: number; title: string; body: string } | null>(null);
const isLoading = ref(true);

// Funkcija za učitavanje detalja posta
const fetchPost = async () => {
    try {
        isLoading.value = true;
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`);
        post.value = response.data;
    } catch (error) {
        console.error("Greška pri učitavanju posta:", error);
    } finally {
        isLoading.value = false;
    }
};

onMounted(fetchPost);
</script>

<template>
    <div class="container">
        <div v-if="isLoading" class="d-flex justify-content-center mt-5">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Učitavanje...</span>
            </div>
        </div>

        <div v-else-if="post">
            <div class="card mt-4 shadow">
                <div class="card-body">
                    <h2 class="card-title text-primary">{{ post.title }}</h2>
                    <p class="card-text text-muted">{{ post.body }}</p>
                    <router-link to="/data" class="btn btn-secondary mt-3">Nazad na listu</router-link>
                </div>
            </div>
        </div>

        <div v-else>
            <p class="text-danger">Post nije pronađen.</p>
            <router-link to="/data" class="btn btn-secondary">Nazad</router-link>
        </div>
    </div>
</template>

<style scoped>
.card {
    transition: transform 0.2s ease-in-out;
}

.card:hover {
    transform: scale(1.02);
}
</style>
