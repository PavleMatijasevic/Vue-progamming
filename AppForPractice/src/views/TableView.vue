<script setup lang="ts">
import { ref, computed } from "vue";

const rows = ref([
    { id: 1, first: "Mark", last: "Otto", handle: "@mdo" },
    { id: 2, first: "Jacob", last: "Thornton", handle: "@fat" },
    { id: 3, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 4, first: "Paul", last: "Milson", handle: "@pmson" },
    { id: 5, first: "Jacob", last: "Thornton", handle: "@fat" },
    { id: 6, first: "Paul", last: "Milson", handle: "@pmson" },
    { id: 7, first: "Jacob", last: "Thornton", handle: "@fat" },
    { id: 8, first: "Paul", last: "Milson", handle: "@pmson" },
    { id: 9, first: "Jacob", last: "Thornton", handle: "@fat" },
    { id: 10, first: "Paul", last: "Milson", handle: "@pmson" },
    { id: 11, first: "Jacob", last: "Thornton", handle: "@fat" },
    { id: 12, first: "Paul", last: "Milson", handle: "@pmson" },
    { id: 13, first: "Jacob", last: "Thornton", handle: "@fat" },
    { id: 14, first: "Paul", last: "Milson", handle: "@pmson" },
    { id: 15, first: "Jacob", last: "Thornton", handle: "@fat" },
    { id: 16, first: "Paul", last: "Milson", handle: "@pmson" },
    { id: 17, first: "Jacob", last: "Thornton", handle: "@fat" },
    { id: 18, first: "Paul", last: "Milson", handle: "@pmson" },
    { id: 19, first: "Jacob", last: "Thornton", handle: "@fat" },
    { id: 20, first: "Paul", last: "Milson", handle: "@pmson" },
    { id: 21, first: "Jacob", last: "Thornton", handle: "@fat" },
    { id: 22, first: "Paul", last: "Milson", handle: "@pmson" },
    { id: 23, first: "Jacob", last: "Thornton", handle: "@fat" },
]);

const currentPage = ref(1);
const rowsPerPage = 5;

// Prikaz samo redova za trenutnu stranicu
const paginatedRows = computed(() => {
    const start = (currentPage.value - 1) * rowsPerPage;
    return rows.value.slice(start, start + rowsPerPage);
});

// Ukupan broj stranica
const totalPages = computed(() => Math.ceil(rows.value.length / rowsPerPage));

// Funkcije za navigaciju
const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
};

const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
};

const goToPage = (page: number) => {
    currentPage.value = page;
};
</script>

<template>
    <div class="container mt-4">
        <!-- Paginacija -->
        <nav>
            <ul class="pagination justify-content-center">
                <li class="page-item" :class="{ disabled: currentPage === 1 }">
                    <button class="page-link" @click="prevPage">Prethodna</button>
                </li>

                <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }">
                    <button class="page-link" @click="goToPage(page)">{{ page }}</button>
                </li>

                <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                    <button class="page-link" @click="nextPage">Sledeća</button>
                </li>
            </ul>
        </nav>
        <table class="table table-hover table-info">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="row in paginatedRows" :key="row.id">
                    <th scope="row">{{ row.id }}</th>
                    <td>{{ row.first }}</td>
                    <td>{{ row.last }}</td>
                    <td>{{ row.handle }}</td>
                </tr>
            </tbody>
        </table>


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
