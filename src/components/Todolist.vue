
<template>
  <div class="container">
    <input type="text" v-model="title" @keydown.enter="addTodo" placeholder="请输入你的计划" />
    <button v-if="active < all" @click="clear">清理</button>
    <ul v-if="todos.length">
      <transition-group name="flip-list" tag="ul">
        <li v-for="(todo, index) in todos" :key="index">
          <input type="checkbox" v-model="todo.done" />
          <span :class="{ done: todo.done }"> {{ todo.title }}</span>
          <span class="remove-btn" @click="removeTodo($event, index)"> ❌ </span>
        </li>
      </transition-group>
    </ul>
    <div v-else>暂无数据</div>
    <div>
      <span>全选</span><input type="checkbox" v-model="allDone" />
      <span>{{ active }} / {{ all }}</span>
    </div>
  </div>
  <transition name="modal">
    <div class="info-wrapper" v-if="showModal">
      <div class="info">
        你输入了个寂寞！
      </div>
    </div>
  </transition>
</template>

<script setup>
import { useTodos } from './useTodos'
import { useMouse } from '../utils/mouse'
const { x, y } = useMouse()

const { title, todos, addTodo, clear, active, all, allDone, showModal, removeTodo } = useTodos()
</script>
<style scoped>
.container {
  margin: 0 aoto;
}

li {
  list-style: none;
}

.info-wrapper {
  position: fixed;
  top: 20px;
  width: 200px;
}

.info {
  padding: 20px;
  color: white;
  background: #d99086;
}

.modal-enter-from {
  opacity: 0;
  transform: translateY(-60px);
}

.modal-enter-active {
  transition: all 0.3s ease;
}

.modal-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}

.modal-leave-active {
  transition: all 0.3s ease;
}

.flip-list-move {
  transition: transform 0.8s ease;
}

.flip-list-enter-active,
.flip-list-leave-active {
  transition: all 1s ease;
}

.flip-list-enter-from,
.flip-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>