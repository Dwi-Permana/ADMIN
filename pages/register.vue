<template>
  <div class="dark-theme register">
    <h1>Daftar</h1>
    <form @submit.prevent="register">
      <div>
        <label for="name">Nama</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <div>
        <label for="phoneNumber">Nomor Telepon</label>
        <input type="tel" id="phoneNumber" v-model="phoneNumber" required />
      </div>
      <button type="submit">Daftar</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import { auth, firestore } from '~/plugins/firebase.js';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      phoneNumber: '',
      error: ''
    };
  },
  methods: {
    async register() {
      try {
        const userCredential = await auth.createUserWithEmailAndPassword(this.email, this.password);
        const user = userCredential.user;

        await firestore.collection('users').doc(user.uid).set({
          uid: user.uid,
          name: this.name,
          email: this.email,
          phoneNumber: this.phoneNumber,
          role: 'customer'
        });

        this.$router.push('/');
      } catch (error) {
        this.error = error.message;
      }
    }
  }
};
</script>

<style scoped>
.dark-theme.register {
  background-color: #121212;
  color: #e0e0e0;
  max-width: 400px;
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
p {
  color: red;
  text-align: center;
}
</style>
