<template>
  <div class="cars">
    <h2>List of Available Cars</h2>
    <div class="car" v-for="(car, index) in cars" :key="index">
      <img :src="car.imageURL" alt="Car Image">
      <div class="car-details">
        <h3>{{ car.make }} {{ car.model }}</h3>
        <p>Year: {{ car.year }}</p>
        <p>Rental Price per Day: ${{ car.rentalPricePerDay }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { onSnapshot, collection } from 'firebase/firestore';
import { db } from '@/plugins/firebase'; // Adjust the path as per your project structure

export default {
  data() {
    return {
      cars: []
    };
  },
  async fetch() {
    await this.fetchCars();
  },
  methods: {
    async fetchCars() {
      try {
        const carsRef = collection(db, 'cars');
        const snapshot = await onSnapshot(carsRef, (querySnapshot) => {
          const carsData = [];
          querySnapshot.forEach((doc) => {
            const carData = {
              id: doc.id,
              imageURL: doc.data().imageURL,
              make: doc.data().make,
              model: doc.data().model,
              rentalPricePerDay: doc.data().rentalPricePerDay,
              year: doc.data().year
            };
            carsData.push(carData);
          });
          console.log('Cars Data:', carsData); // Log fetched data for debugging
          this.cars = carsData;
        });
        console.log('Snapshot:', snapshot); // Log snapshot for debugging
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    }
  }
};
</script>

<style scoped>
.cars {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #222;
  color: #fff;
}
.cars h2 {
  text-align: center;
  color: #fff;
}
.car {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #333;
  display: flex;
  align-items: center;
}
.car img {
  max-width: 150px;
  height: auto;
  border-radius: 5px;
  margin-right: 10px;
}
.car-details {
  flex-grow: 1;
}
.car h3 {
  margin-top: 0;
  color: #fff;
}
.car p {
  color: #fff;
}
</style>
