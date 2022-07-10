<script setup lang="ts">
import TodoList from '../components/Todolist.vue'
</script>

<template>
  <h1>这是首页</h1>
  <s-button type="info" size="sm" :disabled="true">
    Button
  </s-button>
  <TodoList />
</template>
