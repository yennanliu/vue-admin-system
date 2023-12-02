<template>
    <div id="app">
      <h1 class="header">Hotel Admin Page</h1>
      <a href="#" @click.prevent="updateHotelData">Update Hotel data</a>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Link</th>
            <th>Created Time</th>
            <th>Valid</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="hotel in hotels" :key="hotel.id" class="hotel-item">
            <td contenteditable @input="updateHotelName(hotel, $event)">{{ capitalizeString(hotel.name) }}</td>
            <td contenteditable @input="updateHotelCity(hotel, $event)">{{ hotel.city }}</td>
            <td><a :href="hotel.bookingLink" target="_blank">Link</a></td>
            <td>{{ hotel.created_time }}</td>
            <td :class="{ valid: checkIfValid(hotel.created_time), invalid: !checkIfValid(hotel.created_time) }">
              {{ checkIfValid(hotel.created_time) ? 'Yes' : 'No' }}
            </td>
            <td>
              <button @click="saveHotelData(hotel)">Save</button>
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
      capitalizeString(value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
      },
      checkIfValid(inputDate) {
        const givenDate = new Date("10/21/2023").getTime();
        const diff = new Date(inputDate).getTime() - givenDate;
        return diff > 0;
      },
      updateHotelName(hotel, event) {
        hotel.name = event.target.textContent;
      },
      updateHotelCity(hotel, event) {
        hotel.city = event.target.textContent;
      },
      saveHotelData(hotel) {
        // You can add logic here to save the modified data to a local JSON file
        console.log("Saving data:", hotel);
      },
      updateHotelData() {
        // You can add logic here to update hotel data from an external source
        console.log("Updating hotel data...");
      },
    },
  };
  </script>
  
  <style scoped>
  /* Styles remain the same */
  </style>
  