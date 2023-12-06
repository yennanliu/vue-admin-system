<!-- Admin.vue -->

<template>
  <div id="admin-app">
    <h1 class="header">Admin Panel</h1>
    <button @click="loadHotelData">Load Hotel Data</button>
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
          <td><a :href="hotel.url" target="_blank">Link</a></td>
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
    loadHotelData() {
      fetch("http://localhost:3000/hotels", {
        method: "GET",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          this.hotels = data;
        })
        .catch((error) => {
          console.error("Error fetching hotel data:", error);
        });
    },

    // TODO : add/fix hotel data update function
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
  mounted() {
    this.loadHotelData();
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
