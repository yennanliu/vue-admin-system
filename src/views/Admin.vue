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
          <td contenteditable @input="updateHotelName(hotel, $event)">
            {{ hotel.name }}
          </td>
          <td contenteditable @input="updateHotelCity(hotel, $event)">
            {{ hotel.city }}
          </td>
          <td contenteditable @input="updateHotelUrl(hotel, $event)">
            <a :href="hotel.url" target="_blank">Link</a>
          </td>
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
    updateHotelName(hotel, event) {
      hotel.name = event.target.textContent;
    },
    updateHotelCity(hotel, event) {
      hotel.city = event.target.textContent;
    },
    updateHotelUrl(hotel, event) {
      hotel.url = event.target.textContent;
    },
    updateHotelData() {
      // Make a POST request to update hotel data on the server
      fetch("http://localhost:3000/hotels", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.hotels),
      })
        .then((response) => response.text())
        .then((message) => {
          console.log(message);
        })
        .catch((error) => {
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

th,
td {
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
