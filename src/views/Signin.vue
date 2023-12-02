<template>
    <div id="app">
      <h1>Sign In</h1>
      <form @submit.prevent="signIn">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
  
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
  
        <button type="submit">Sign In</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: "",
        password: "",
      };
    },
    methods: {
      signIn() {
        console.log("Sign-in attempt with:");
        console.log("Username:", this.username);
        console.log("Password:", this.password);
        // Add your authentication logic here (e.g., send data to server, check credentials)
        // For demonstration purposes, the data is logged to the console.
      },
    },
  };
  </script>
  
  <style scoped>
  #app {
    font-family: "Arial", sans-serif;
    color: #333;
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    text-align: center;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin-bottom: 5px;
  }
  
  input {
    padding: 10px;
    margin-bottom: 10px;
  }
  
  button {
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  </style>
  