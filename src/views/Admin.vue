<template>
    <div id="app">
      <h1 class="header">Hotel List</h1>
      <a href="#" @click.prevent="saveHotelData">Save Hotel data</a>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Link</th>
            <th>Created Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="hotel in hotels" :key="hotel.id" class="hotel-item">
            <td contenteditable @input="updateHotelName(hotel, $event)">{{ (hotel.name) }}</td>
            <td contenteditable @input="updateHotelCity(hotel, $event)">{{ hotel.city }}</td>
            <td><a :href="hotel.bookingLink" target="_blank">Link</a></td>
            <td>{{ hotel.created_time }}</td>
            <td>
              <button @click="updateHotelData(hotel)">Update</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import hotelData from "./Hotel/hotel_data.json";

  export default {
    data() {
    return {
      hotels: hotelData,
    };
  },
  
    methods: {
      updateHotelName(hotel, event) {
        hotel.name = event.target.textContent;
      },
      updateHotelCity(hotel, event) {
        hotel.city = event.target.textContent;
      },
      saveHotelData() {
        // Save the data to localStorage
        console.log("--> saveHotelData")
        localStorage.setItem('hotelData', JSON.stringify(this.hotels));
        console.log(">>> updated hotelData = " + JSON.stringify(hotelData))
      },
      updateHotelData(hotel) {
        // Update the local data and save it to localStorage
        hotel.name = prompt('Enter updated name:', hotel.name);
        hotel.city = prompt('Enter updated city:', hotel.city);
  
        this.saveHotelData();
      },
      loadHotelData() {
        // Load the data from localStorage
        const storedData = localStorage.getItem('hotelData');
  
        if (storedData) {
          this.hotels = JSON.parse(storedData);
        }
      },
    },
  
    mounted() {
      // Load the data when the component is mounted
      this.loadHotelData();
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
  
  .invalid {
    color: red;
    font-weight: bold;
  }
  </style>
  