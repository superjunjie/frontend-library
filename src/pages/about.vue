<script setup lang="ts">
import { ref } from 'vue'
import Rate from '../components/Rate.vue'
const count = ref(0)
const color = ref('red')
function add() {
  count.value++
  color.value = Math.random() > 0.5 ? 'blue' : 'red'
}
</script>

<template>
  <h1>这是关于页面</h1>
  <h1 @click="add">
    {{ count }}
  </h1>
  <Rate value="4" />
</template>

<style scoped>
h1 {
  color: v-bind(color);
}
</style>
