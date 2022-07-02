<script lang="ts" setup>
import { Header, Button, Modal } from '../components/ui'
import { ref, watchEffect } from 'vue'
import anime from 'animejs'

const countDownThree = ref(true)
const count = ref(3)
const isModalOpen = ref(false)

const countDown = () => {
  countDownThree.value = false
  if (count.value > 0) {
    count.value = count.value - 1
  }
}

watchEffect(() => {
  if (count.value === 0) {
    anime({
      targets: '.car',
      right: ['0px', '1500px'],
      easing: 'easeInOutQuad',
      duration: 3000
    })
  }
})

const openModal = () => {
  isModalOpen.value = true
}
const closeModal = () => {
  isModalOpen.value = false
}
</script>

<template>
  <Header />

  <transition name="fade">
    <div v-if="isModalOpen">
      <Modal @close="closeModal" />
    </div>
  </transition>

  <div class="count">
    <transition name="fade">
      <h1
        v-if="count !== 0"
        class="count-three"
        @click="countDown"
      >
        {{ count }}
      </h1>
    </transition>
  </div>

  <div class="road">
    <img
      src="../assets/car.png"
      class="car"
    >
  </div>

  <div class="button-position">
    <Button />

    <Button
      label="Modal Open"
      @click="openModal"
    />

    <Button animation="slideIn" />
  </div>
</template>

<style lang="scss" scoped>

.road{
  width: 100%;
  .car{
    width: 80px;
    height: 80px;
    position: absolute;
    top: 100px;
    right: 0;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .8s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.button-position{
  display: flex;
  justify-content: space-around;
  margin-top: 150px;
  margin-left: 20px;
}
</style>