<template>
  <div class="dark-theme">
    <nav>
      <NuxtLink to="/">Beranda</NuxtLink>
      <NuxtLink to="/cars">Mobil</NuxtLink>
      <NuxtLink to="/cars/add-car">Tambah Mobil</NuxtLink>
      <NuxtLink to="/login">Masuk</NuxtLink>
      <NuxtLink to="/register">Daftar</NuxtLink>
    </nav>
    <h1>Selamat datang di Aplikasi Rental Mobil</h1>
    <!-- Isi konten beranda di sini -->
  </div>
</template>

<style scoped>
.dark-theme {
  background-color: #333;
  color: #fff;
  padding: 20px;
}
nav {
  display: flex;
  justify-content: space-around;
  padding: 1em;
}
nav a {
  color: #fff;
  text-decoration: none;
  padding: 0.5em;
}
nav a:hover {
  background-color: #555;
}
</style>
