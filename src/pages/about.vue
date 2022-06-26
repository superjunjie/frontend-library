
<template>
  <h1>这是关于页面</h1>
  <h1 @click="add">{{ count }}</h1>
  <Rate value="4"></Rate>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Rate from '../components/Rate.vue'
let count = ref(0)
let color = ref('red')
function add() {
  count.value++
  color.value = Math.random() > 0.5 ? 'blue' : 'red'
}
</script>
<style scoped>
h1 {
  color: v-bind(color);
}
</style>