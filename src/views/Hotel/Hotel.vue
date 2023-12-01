<template>
  <div id="app">
    <h1>Hotel List</h1>
    <h4>h4 tab</h4>
    <ul>
      <li v-for="hotel in hotels" :key="hotel.id">
        <!-- <a href="https://www.youtube.com/">這個連結</a>會連到 YouTube<br> -->
        <!-- TODO : fix read url from json -->
        Name : {{ hotel.name }} | City : {{ hotel.city }} | <a href="http://booking.com">Link</a> | Created Time : {{ hotel.created_time }}
      </li>
    </ul>
  </div>
</template>

<script>

// https://reactgo.com/vue-read-json-file/

// currently users.jon is in src/views/Hotel/users.json -> TODO : check if can move to asset
import hotelData from "./hotel_data.json";

export default {
  data() {
    return {
      hotels: hotelData,
    };
  },
};
</script>

<style scoped>
h4 {
  font-family: "Roboto", sans-serif;
  color: #484848;
  font-weight: 700;
}

li {
  font-family: "Roboto", sans-serif;
  color: #3343FF;
  font-weight: 700;
}

#add-category {
  float: right;
  font-weight: 500;
}
</style>