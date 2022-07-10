<script setup lang="ts">
import { computed } from 'vue'
const props: any = defineProps({
  value: Number,
  theme: { type: String, default: 'green' },
})
const rate = computed(() => '★★★★★☆☆☆☆☆'.slice(5 - props.value, 10 - props.value))
const themeObj: any = {
  black: '#00',
  white: '#fff',
  red: '#f5222d',
  orange: '#fa541c',
  yellow: '#fadb14',
  green: '#73d13d',
  blue: '#40a9ff',
}
const fontstyle = computed(() => { return `color:${themeObj[props.theme]};` })
</script>

<template>
  <div :style="fontstyle">
    {{ rate }}
  </div>
</template>
