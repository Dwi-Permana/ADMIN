<template>
  <div class="add-car">
    <h2>Add a New Car</h2>
    <form @submit.prevent="addCar">
      <label>Make:</label>
      <input type="text" v-model="make" required>
      <label>Model:</label>
      <input type="text" v-model="model" required>
      <label>Year:</label>
      <input type="number" v-model="year" required>
      <label>Rental Price per Day:</label>
      <input type="number" v-model="rentalPricePerDay" required>
      <label>Image URL:</label>
      <input type="text" v-model="imageURL" required>
      <button type="submit">Add Car</button>
      <NuxtLink to="/cars">Back to Cars</NuxtLink>
    </form>
  </div>
</template>

<script>
import { collection, addDoc } from 'firebase/firestore';

export default {
  data() {
    return {
      make: '',
      model: '',
      year: '',
      rentalPricePerDay: '',
      imageURL: ''
    };
  },
  methods: {
    async addCar() {
      try {
        const docRef = await addDoc(collection(this.$firestore, "cars"), {
          make: this.make,
          model: this.model,
          year: this.year,
          rentalPricePerDay: this.rentalPricePerDay,
          imageURL: this.imageURL
        });
        console.log('Car added with ID: ', docRef.id);
        this.$router.push('/cars');
      } catch (error) {
        console.error('Error adding car:', error);
      }
    }
  }
};
</script>

<style scoped>
/* Gaya CSS lokal */
.add-car {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #222;
  color: #fff;
}
.add-car h2 {
  text-align: center;
  color: #fff;
}
form {
  display: flex;
  flex-direction: column;
}
label {
  margin-bottom: 0.5em;
  color: #fff;
}
input[type="text"],
input[type="number"],
button {
  padding: 0.5em;
  margin-bottom: 1em;
  border-radius: 5px;
}
button {
  background-color: #007BFF;
  color: #fff;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>
