<template>
  <div id="app">
    <h1 class="header">Hotel List</h1>
    <h4 class="sub-header">h4 tab</h4>
    <ul>
      <li v-for="hotel in hotels" :key="hotel.id" class="hotel-item">
        <div class="hotel-details">
          <span class="hotel-name">{{ capitalizeString(hotel.name) }}</span>
          <span class="hotel-city"> | City: {{ hotel.city }}</span>
          <span class="hotel-link"> | <a href="http://booking.com">Book now</a></span>
          <span class="hotel-created-time"> | Created Time: {{ hotel.created_time }}</span>
          <span class="hotel-valid-status"> | Valid: {{ checkIfValid(hotel.created_time) ? 'Yes' : 'No' }}</span>
        </div>
      </li>
    </ul>
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
      const givenDate = new Date("10/21/2001").getTime();
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
  font-size: 24px;
  font-weight: bold;
}

.sub-header {
  font-size: 18px;
  font-weight: bold;
}

ul {
  list-style-type: none;
  padding: 0;
}

.hotel-item {
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
}

.hotel-details {
  display: flex;
  flex-wrap: wrap;
}

.hotel-name {
  color: #3343ff;
  font-weight: 700;
}

.hotel-city {
  margin-left: 10px;
}

.hotel-link {
  margin-left: 10px;
}

.hotel-created-time {
  margin-left: 10px;
}

.hotel-valid-status {
  margin-left: 10px;
  color: green;
  font-weight: 700;
}
</style>
