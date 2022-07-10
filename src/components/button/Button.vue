<script lang="ts" setup>
import { computed, defineComponent } from 'vue'
const props = withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button',
})
defineComponent({
  name: 'SButton',
})
type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'
type ButtonSize = 'default' | 'sm' | 'mini' | 'lg'
type ButtonNativeType = 'button' | 'submit' | 'reset'

interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  nativeType?: ButtonNativeType
  disabled?: Boolean
}

const useClasses = ({ props }) => {
  return computed(() => {
    return [
      props.type ? `s-btn-${props.type}` : '',
      props.size ? `s-btn-${props.size}` : '',
      props.disabled ? 's-btn-disabled' : '',
    ]
  })
}

const classes = useClasses({
  props,
})
</script>

<template>
  <button class="s-btn" :class="classes" :type="nativeType">
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>

<style lang="scss">
@import '../../style/button.scss';
</style>
