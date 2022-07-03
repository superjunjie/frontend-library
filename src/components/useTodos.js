import { computed, ref, watchEffect } from 'vue'

export function useTodos() {
  const title = ref('')
  const todos = ref([{ title: '学习Vue', done: false }])
  const showModal = ref(false)
  watchEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos.value))
  })
  function addTodo() {
    if (!title.value) {
      showModal.value = true
      setTimeout(() => {
        showModal.value = false
      }, 1500)
      return
    }
    todos.value.push({
      title: title.value,
      done: false,
    })
    title.value = ''
  }
  function removeTodo(e, i) {
    todos.value.splice(i, 1)
  }
  function clear() {
    todos.value = todos.value.filter(v => !v.done)
  }
  const active = computed(() => {
    return todos.value.filter(v => !v.done).length
  })
  const all = computed(() => todos.value.length)
  const allDone = computed({
    get() {
      return active.value === 0
    },
    set(value) {
      todos.value.forEach((todo) => {
        todo.done = value
      })
    },
  })
  return { title, todos, addTodo, clear, active, all, allDone, showModal, removeTodo }
}
