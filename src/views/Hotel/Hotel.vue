<template>
  <div class="about">
    <h1>This is HOTEL page !!!</h1>
    <button @click="increment">count is: {{ count }}</button>
  </div>
</template>
  

<script setup>
import { ref } from "vue";

const count = ref(0);

function increment() {
  count.value++;
}
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