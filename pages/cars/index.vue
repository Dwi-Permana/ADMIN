<template>
  <div class="dark-theme">
    <h1>Mobil Tersedia</h1>
    <div v-for="car in cars" :key="car.id" class="car">
      <h2>{{ car.make }} {{ car.model }}</h2>
      <p>Tahun: {{ car.year }}</p>
      <p>Harga per hari: ${{ car.rentalPricePerDay }}</p>
      <img :src="car.imageURL" alt="Gambar Mobil">
    </div>
  </div>
</template>

<script>
import { firestore } from '~/plugins/firebase.js';

export default {
  data() {
    return {
      cars: []
    };
  },
  async mounted() {
    try {
      const carsSnapshot = await firestore.collection('cars').get();
      this.cars = carsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error('Error getting cars: ', error);
    }
  }
};
</script>

<style scoped>
.dark-theme {
  background-color: #121212;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 20px;
  font-family: 'Arial', sans-serif;
}
h1 {
  text-align: center;
  margin-bottom: 20px;
}
.car {
  border: 1px solid #333;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #1f1f1f;
}
.car h2 {
  margin-top: 0;
}
.car img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}
</style>
