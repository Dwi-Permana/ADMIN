<template>
  <div class="edit-car">
    <h2>Edit Car</h2>
    <form @submit.prevent="updateCar">
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
      <button type="submit">Update Car</button>
    </form>
  </
</form>
  </div>
</template>

<script>
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
    async updateCar() {
      try {
        // Implement logic to update car in database
        await this.$fire.firestore.collection('cars').doc(this.$route.params.id).update({
          make: this.make,
          model: this.model,
          year: this.year,
          rentalPricePerDay: parseFloat(this.rentalPricePerDay),
          imageURL: this.imageURL
        });
        console.log('Car updated successfully');
        // Redirect after updating car
        this.$router.push('/cars');
      } catch (error) {
        console.error('Error updating car:', error);
      }
    }
  },
  async created() {
    try {
      const doc = await this.$fire.firestore.collection('cars').doc(this.$route.params.id).get();
      if (doc.exists) {
        const car = doc.data();
        this.make = car.make;
        this.model = car.model;
        this.year = car.year;
        this.rentalPricePerDay = car.rentalPricePerDay;
        this.imageURL = car.imageURL;
      }
    } catch (error) {
      console.error('Error fetching car:', error);
    }
  }
};
</script>

<style scoped>
.edit-car {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #222;
  color: #fff;
}
.edit-car h2 {
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
input[type="text"],
input[type="number"] {
  background-color: #333;
  border: 1px solid #555;
  color: #fff;
}
button {
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
