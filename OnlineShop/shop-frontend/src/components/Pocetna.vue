<template>
    <div class="container mt-4">
        <h1 class="mb-4 text-center">Dobrodošli u Online Shop!</h1>

        <div v-if="kategorije.length === 0" class="text-center">
            <p>Učitavanje kategorija...</p>
        </div>

        <div v-else class="row">
            <div class="col-md-4 mb-4" v-for="kategorija in kategorije" :key="kategorija.id">
                <div class="card h-100">
                    <div class="card-body d-flex flex-column justify-content-between">
                        <h5 class="card-title text-center">{{ kategorija.naziv }}</h5>
                        <router-link :to="`/kategorija/${kategorija.id}`" class="btn btn-outline-primary mt-2">
                            Prikaži proizvode
                        </router-link>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Pocetna",
    data() {
        return {
            kategorije: []
        };
    },
    mounted() {
        this.dohvatiKategorije();
    },
    methods: {
        async dohvatiKategorije() {
            try {
                const response = await fetch('http://localhost:5000/api/kategorije');
                const data = await response.json();
                this.kategorije = data;
            } catch (error) {
                console.error('Greška pri dohvatanju kategorija:', error);
            }
        }
    }
};
</script>

<style scoped>
/* Ovde možeš dodati dodatne stilove ako želiš */
</style>