<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <label>Email:</label>
      <input type="email" v-model="email" required>
      <label>Password:</label>
      <input type="password" v-model="password" required>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, this.email, this.password);

        console.log('Login successful');
        this.$router.push('/');
      } catch (error) {
        console.error('Error logging in:', error);
      }
    }
  }
};
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #222;
  color: #fff;
}
.login h2 {
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
input[type="email"],
input[type="password"],
button {
  padding: 0.5em;
  margin-bottom: 1em;
  border-radius: 5px;
}
input[type="email"],
input[type="password"] {
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
