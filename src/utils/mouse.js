import { onMounted, onUnmounted, ref } from 'vue'

export function useMouse() {
  const x = ref(0)
  const y = ref(0)
  function updated(e) {
    x.value = e.pageX
    y.value = e.pageY
  }
  onMounted(() => {
    window.addEventListener('mousemove', updated)
  })
  onUnmounted(() => {
    window.removeEventListener('mousemove', updated)
  })
  return { x, y }
}
