<script setup lang="ts">
import { withDefaults, defineProps, ref } from 'vue'
import anime from 'animejs'

interface MenuProps {
  menuPosition?: 'top' | 'left' | 'right'
}
// 上下にスライドするHeaderを作る
withDefaults(defineProps<MenuProps>(), {
  menuPosition: 'top'
})

const isMenuOpen = ref(false)

const switchMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    anime({
      targets: '.menu-content',
      height: ['0', '150px'],
      easing: 'easeInOutQuad',
      duration: 300
    })

  } else {
    anime({
      targets: '.menu-content',
      height: ['150px', '0'],
      easing: 'easeInOutQuad',
      duration: 300
    })
  }
}

</script>

<template>
  <div class="menu-wrapper">
    <div class="menu-top">
      <!-- v-if="menuPosition === 'top'" -->
      <div
        class="menu-icon"
        @click="switchMenu"
      >
        <span class="menu-line" />
        <span class="menu-line" />
        <span class="menu-line" />
      </div>

      <div class="menu-content">
        <ul
          v-show="isMenuOpen"
          class="menu-list"
        >
          <li>test</li>
          <li>test</li>
          <li>test</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu-wrapper{
	width: 100%;

  .menu-top{
    height: 50px;
    background: rgb(0, 247, 247);

    .menu-icon{
      display: flex;
      flex-direction: column;
      height: 30px;
      width: 25px;
      margin-left: auto;
      margin-right: 10px;
      cursor: pointer;
    }
    .menu-line{
      height: 10px;
      width: 25px;
      border-top: solid;
      margin-top: 10px;
    }

    .menu-content{
      background-color: rgb(134, 134, 134);
      height: 0;
      z-index: 1;
    }
  }
}
</style>