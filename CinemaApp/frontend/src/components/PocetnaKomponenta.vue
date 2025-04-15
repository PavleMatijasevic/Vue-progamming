<template>
    <div class="container mt-4">
      <!-- Naziv bioskopa -->
      <header class="text-center my-4">
        <h1 class="display-4">ALKASER CINEMA</h1>
      </header>
  
      <!-- Sekcija: Lokacije -->
      <section class="mb-5">
        <h2 class="mb-3">Naše lokacije</h2>
        <div class="row">
          <div class="col-md-4 mb-3">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">Lokacija 1</h5>
                <p class="card-text">Bulevar Kralja Aleksandra 43, Beograd</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">Lokacija 2</h5>
                <p class="card-text">Bulevar Mihajla Pupina 12, Beograd</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">Lokacija 3</h5>
                <p class="card-text">Hajduk Veljkova 84, Novi Sad</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Sekcija: Radno vreme i Promotivne akcije -->
      <section class="mb-5">
        <div class="row">
          <div class="col-md-6 mb-4">
            <h2>Radno vreme</h2>
            <p>Ponedeljak - Petak: 10:00 - 22:00</p>
            <p>Subota - Nedelja: 12:00 - 00:00</p>
          </div>
          <div class="col-md-6 mb-4">
            <h2>Promotivne akcije</h2>
            <ul class="list-unstyled">
              <li>Utorkom sve karte snižene 30%</li>
              <li>Svim drugim danima karta 500 RSD</li>
            </ul>
          </div>
        </div>
      </section>
  
      <!-- Sekcija: Dodatne informacije -->
      <section class="mb-5">
        <h2 class="mb-3">Dodatne informacije</h2>
        <div class="row">
          <div class="col-md-4 mb-3">
            <div class="card h-100 text-center">
              <div class="card-body">
                <h5 class="card-title">Dostupni filmovi</h5>
                <p class="card-text">Trenutno dostupno filmova: 20</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">Komentar korisnika</h5>
                <p class="card-text">"Odličan doživljaj!"</p>
                <p class="card-text"><small class="text-muted">- Petar Petrovic</small></p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="card h-100 bg-light">
              <div class="card-body text-center">
                <h5 class="card-title">Prijavite se za obaveštenja</h5>
                <p class="card-text">Ne propustite nove filmove i popuste!</p>
                <a href="#" class="btn btn-primary">Prijava na obaveštenja</a>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Sekcija: Navigacioni linkovi (dno stranice) -->
      <footer class="text-center py-4">
        <a href="/register" class="btn btn-outline-primary mx-2">Registracija</a>
        <a href="/login" class="btn btn-outline-secondary mx-2">Prijava</a>
        <a href="/repertoar" class="btn btn-outline-info mx-2">Repertoar</a>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: "PocetnaKomponenta"
  }
  </script>
  
  <style scoped>
  /* Dodatni stilovi (po potrebi) */
  </style>
  