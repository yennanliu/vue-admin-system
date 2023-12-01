<template>
  <div class="about">
    <h1>This is HOTEL page !!!</h1>
    <button @click="increment">count is: {{ count }}</button>

    <ul>
      <li v-for="item in items" :key="item.id">{{ item.text }}</li>
    </ul>

  </div>
</template>
  

<script>
import { ref } from "vue";

export default {
  data() {
    // TODO : read from csv
    return {
      items: [
        { id: 1, text: "item 1" },
        { id: 2, text: "item 2" },
        { id: 3, text: "item 3" },
      ],
    };
  },
};

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