<script setup lang="ts">
import { withDefaults, defineProps, onMounted } from 'vue'
interface MenuProps {
  menuPosition?: 'top' | 'left' | 'right'
}
// 上下にスライドするHeaderを作る

const props = withDefaults(defineProps<MenuProps>(), {
  menuPosition: 'top'
})

onMounted(() => {
  console.log(typeof ['a', 'i', 'u'].toString())
})

</script>

<template>
  <div class="menu-wrapper">
    {{ ['a', 'i', 'u'].toString() }}
  </div>
</template>

<style scoped>
.menu-wrapper{
	width: 100%;
  background: rgb(154, 128, 128);
}
</style>