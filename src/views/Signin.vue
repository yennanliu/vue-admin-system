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

    <!-- Display success or error message -->
    <div
      v-if="showMessage"
      class="message"
      :class="{ success: isSuccessful, error: !isSuccessful }"
    >
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      showMessage: false,
      isSuccessful: false,
      message: "",
    };
  },
  methods: {
    signIn() {
      // Replace the following hardcoded values with your actual authentication logic
      /** Current username and pwd */
      const validUsername = "admin";
      const validPassword = "123";

      if (this.username === validUsername && this.password === validPassword) {
        // Authentication successful
        this.isSuccessful = true;
        this.message = "Sign-in successful!";
      } else {
        // Authentication failed
        this.isSuccessful = false;
        this.message = "Invalid username or password. Please try again.";
      }

      // Show the message
      this.showMessage = true;

      // Hide the message after 3 seconds (adjust as needed)
      setTimeout(() => {
        this.showMessage = false;
      }, 3000);

      // Clear the form fields
      this.username = "";
      this.password = "";
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

.message {
  margin-top: 20px;
  padding: 10px;
  text-align: center;
  font-weight: bold;
}

.success {
  background-color: #4caf50; /* Green */
  color: white;
}

.error {
  background-color: #f44336; /* Red */
  color: white;
}
</style>
