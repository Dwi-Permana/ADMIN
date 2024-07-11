<template>
  <div>
    <nav class="navbar">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/cars">Cars</NuxtLink>
      <NuxtLink to="/cars/add-car">Add Car</NuxtLink>
      <NuxtLink to="/login">Login</NuxtLink>
      <NuxtLink to="/register">Register</NuxtLink>
    </nav>
    <NuxtPage />
  </div>
</template>

<script setup>
// Tidak ada impor yang diperlukan di sini jika menggunakan Nuxt 3
</script>

<style scoped>
/* Scoped styles specific to this layout */
.navbar {
  background-color: #333;
  padding: 1em;
}

.navbar a {
  color: #fff;
  text-decoration: none;
  padding: 0.5em;
}

.navbar a:hover {
  background-color: #555;
}
</style>
