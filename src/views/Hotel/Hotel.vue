<template>
  <div id="app">
    <h1>This is Hotel page</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>

// https://reactgo.com/vue-read-json-file/

// currently users.jon is in src/views/Hotel/users.json -> TODO : check if can move to asset
import usersData from "./users.json";

export default {
  data() {
    return {
      users: usersData,
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

#add-category {
  float: right;
  font-weight: 500;
}
</style>