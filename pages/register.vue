<template>
  <div class="register">
    <h2>Register</h2>
    <form @submit.prevent="register">
      <label>Name:</label>
      <input type="text" v-model="name" required>
      <label>Email:</label>
      <input type="email" v-model="email" required>
      <label>Password:</label>
      <input type="password" v-model="password" required>
      <label>Phone Number:</label>
      <input type="tel" v-model="phoneNumber" required>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      phoneNumber: ''
    };
  },
  methods: {
    async register() {
      try {
        const auth = getAuth();
        const { user } = await createUserWithEmailAndPassword(auth, this.email, this.password);

        // Akses firestore melalui $firestore yang telah diberikan oleh plugin Firebase.js
        await this.$firestore.collection('users').doc(user.uid).set({
          name: this.name,
          email: this.email,
          phoneNumber: this.phoneNumber
        });

        console.log('Registered successfully:', user);

        this.$router.push('/');
      } catch (error) {
        console.error('Error registering:', error);
      }
    }
  }
};
</script>

<style scoped>
.register {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #222;
  color: #fff;
}
.register h2 {
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
input[type="email"],
input[type="password"],
input[type="tel"],
button {
  padding: 0.5em;
  margin-bottom: 1em;
  border-radius: 5px;
}
input[type="text"],
input[type="email"],
input[type="password"],
input[type="tel"] {
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
