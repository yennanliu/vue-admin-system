<template>
  <div id="app">
    <h1 class="header">Hotel List</h1>
    <!-- <h4 class="sub-header">h4 tab</h4> -->
    <a href="http://booking.com">Update Hotel data</a>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>City</th>
          <th>Link</th>
          <th>Created Time</th>
          <th>Valid</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="hotel in hotels" :key="hotel.id" class="hotel-item">
          <td>{{ capitalizeString(hotel.name) }}</td>
          <td>{{ hotel.city }}</td>
          <td><a href="http://booking.com">Link</a></td>
          <td>{{ hotel.created_time }}</td>
          <td :class="{ valid: checkIfValid(hotel.created_time) }">
            {{ checkIfValid(hotel.created_time) ? 'Yes' : 'No' }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import hotelData from "./hotel_data.json";

export default {
  data() {
    return {
      hotels: hotelData,
    };
  },

  methods: {
    capitalizeString(value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    checkIfValid(inputDate) {
      const givenDate = new Date("10/21/2023").getTime();
      const diff = new Date(inputDate).getTime() - givenDate;
      return diff > 0;
    },
  },
};
</script>

<style scoped>
#app {
  font-family: "Roboto", sans-serif;
  color: #484848;
  max-width: 800px;
  margin: 0 auto;
}

.header {
  font-size: 32px;
  font-weight: bold;
}

.sub-header {
  font-size: 24px;
  font-weight: bold;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  border: 1px solid #ddd;
  padding: 15px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

.hotel-item {
  background-color: #f9f9f9;
}

td a {
  text-decoration: none;
  color: #3343ff;
  font-weight: bold;
}

.valid {
  color: green;
  font-weight: bold;
}
</style>
