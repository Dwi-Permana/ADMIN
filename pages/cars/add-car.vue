<template>
  <div class="dark-theme add-car">
    <h1>Tambah Mobil Baru</h1>
    <form @submit.prevent="addCar">
      <div>
        <label for="make">Merk</label>
        <input type="text" id="make" v-model="make" required />
      </div>
      <div>
        <label for="model">Model</label>
        <input type="text" id="model" v-model="model" required />
      </div>
      <div>
        <label for="year">Tahun</label>
        <input type="number" id="year" v-model="year" required />
      </div>
      <div>
        <label for="rentalPricePerDay">Harga Sewa per Hari</label>
        <input type="number" id="rentalPricePerDay" v-model="rentalPricePerDay" required />
      </div>
      <div>
        <label for="imageURL">URL Gambar</label>
        <input type="text" id="imageURL" v-model="imageURL" required />
      </div>
      <button type="submit">Tambah Mobil</button>
    </form>
  </div>
</template>

<script>
import { firestore } from '~/plugins/firebase.js';

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
      const newCar = {
        make: this.make,
        model: this.model,
        year: this.year,
        rentalPricePerDay: this.rentalPricePerDay,
        availability: true,
        imageURL: this.imageURL
      };

      try {
        await firestore.collection('cars').add(newCar);
        this.$router.push('/cars');
      } catch (error) {
        console.error('Error adding car: ', error);
      }
    }
  }
};
</script>

<style scoped>
.dark-theme.add-car {
  background-color: #121212;
  color: #e0e0e0;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #333;
  border-radius: 8px;
}
h1 {
  text-align: center;
  margin-bottom: 20px;
}
form {
  display: flex;
  flex-direction: column;
}
form div {
  margin-bottom: 10px;
}
form label {
  margin-bottom: 5px;
}
form input {
  padding: 10px;
  border: 1px solid #333;
  border-radius: 5px;
  background-color: #1f1f1f;
  color: #e0e0e0;
}
button {
  padding: 10px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>
