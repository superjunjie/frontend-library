<script setup lang="ts">
name: 'SIcon'
import icon from './icons'
import { onMounted, ref } from 'vue'
defineProps({
  iconName: {
    type: String,
    default: 'icon'
  },
  width: {
    type: [Number, String],
    default: 18
  },
  height: {
    type: [Number, String],
    default: 18
  },
  iconColor: {
    type: String,
    default: 'currentColor'
  },
  iconPath: {
    type: String,
    default: ''
  },
  rotate: {
    type: Boolean,
    default: false
  },
  ariaLabel: {
    type: String,
    default: ''
  }
})
const iconVm = ref(null)
</script>