<!-- Admin.vue -->

<template>
  <div id="admin-app">
    <h1 class="header">Admin Panel</h1>
    <button @click="updateHotelData">Update Hotel Data</button>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>City</th>
          <th>Link</th>
          <th>Created Time</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="hotel in hotels" :key="hotel.id">
          <td>{{ hotel.name }}</td>
          <td>{{ hotel.city }}</td>
          <td><a :href="hotel.bookingLink" target="_blank">Link</a></td>
          <td>{{ hotel.created_time }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotels: [],
    };
  },

  methods: {
    updateHotelData() {
      // Make a GET request to fetch hotel data from the server
      fetch('http://localhost:3000/hotels')
        .then((response) => {
          // console.log(">>> response.json() = " + response.json())
          response.json();
        })
        .then((data) => {
          console.log("data = " + data);
          this.hotels = data;
        })
        .catch((error) => {
          console.log("error = " + error);
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
#admin-app {
  font-family: "Roboto", sans-serif;
  color: #484848;
  max-width: 800px;
  margin: 0 auto;
}

.header {
  font-size: 32px;
  font-weight: bold;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  border: 1px solid #ddd;
  padding: 20px;
  text-align: left;
  font-size: 18px;
}

th {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #f5f5f5;
}

td a {
  text-decoration: none;
  color: #3343ff;
  font-weight: bold;
}
</style>
