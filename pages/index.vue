<template>
  <div class="app">
    <nav>
      <img src="/assets/styles/ADMIN.png" alt="Rental Car App Logo" class="logo">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/cars">Cars</NuxtLink>
      <NuxtLink to="/cars/add-car">Add Car</NuxtLink>
      <NuxtLink to="/login">Login</NuxtLink>
      <NuxtLink to="/register">Register</NuxtLink>
    </nav>
    <header>
      <h1>Welcome to Rental Car App</h1>
      <p>Explore our services and start renting cars today!</p>
    </header>
  </div>
</template>

<style scoped>
/* Dark theme styles */
.app {
  text-align: center;
  background-color: #121212;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

nav {
  background-color: #333;
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav a {
  color: white;
  text-decoration: none;
  padding: 0.5em 1em;
  margin: 0 0.5em;
  border-radius: 5px;
  transition: background-color 0.3s;
}

nav a:hover {
  background-color: #555;
}

nav .logo {
  height: 40px;
  margin-right: auto;
}

header h1, header p {
  color: #fff;
  margin: 0.5em 0;
}
</style>
