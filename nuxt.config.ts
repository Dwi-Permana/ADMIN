export default {
  // Configuration options such as devtools, router, plugins, etc.
  devtools: {
    enabled: true,
    components: true,
  },
  router: {
    routeRules: {
      '/': { prerender: true }
    },
    routes: [
      { path: '/', component: 'pages/index.vue' },
      { path: '/login', component: 'pages/login.vue' },
      { path: '/register', component: 'pages/register.vue' },
      { path: '/cars', component: 'pages/cars/index.vue' },
      { path: '/add-car', component: 'pages/cars/add-car.vue' },
      { path: '/cars/:id', component: 'pages/cars/edit-car.vue' }
    ]
  },
  plugins: [
    { src: '~/plugins/firebase', mode: 'client' },
  ],
  css: [
    '~/assets/styles/global.css'
  ],
  // Optionally, compatibilityDate for specific compatibility needs
  compatibilityDate: '2024-07-09'
};
