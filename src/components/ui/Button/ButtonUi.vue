<script setup lang="ts">
import { defineProps, withDefaults, defineEmits } from 'vue'

interface ButtonProp {
	animation?: 'slideIn' | 'fillIn'
	label?: string
}

withDefaults(defineProps<ButtonProp>(), {
  animation: 'fillIn',
  label: ''
})
const emits = defineEmits(['click'])

const onClick = () => {
  emits('click')
}
</script>

<template>
  <div v-if="animation === 'fillIn'">
    <button
      class="button bg-fill"
      type="button"
      @click="onClick"
    >
      <span>
        {{ label ? label : 'fill' }}
      </span>
    </button>
  </div>

  <div v-if="animation === 'slideIn'">
    <button
      type="button"
      class="button bg-slide"
    >
      <span>Slide</span>
    </button>
  </div>
</template>

<style scoped lang="scss">
.button {
  position: relative;
	overflow: hidden;
	text-decoration: none;
	display: inline-block;
	border: 1px solid rgb(39, 39, 39);
	padding: 10px 30px;
	text-align: center;
	outline: none;
	transition: ease .2s;
	background: #fff;
	cursor: pointer;

	span {
		position: relative;
		z-index: 3;
		color: #333;
	}
}

.button:hover span {
	color: #fff
}

.bg-fill:before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	z-index: 2;
	background: #333;
	width: 100%;
	height: 100%;
	transition: transform .3s cubic-bezier(0.8, 0, 0.2, 1) 0s;
	transform: scale(0, 0);
	transform-origin: center;
}

.bg-fill:hover::before {
  transform: scale(1, 1);
}

.bg-slide:before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	z-index: 2;
	background: #333;
	width: 100%;
	height: 100%;
	transition: transform .6s cubic-bezier(0.8, 0, 0.2, 1) 0s;
  transform: scale(0, 1);
	transform-origin: right top;
}

.bg-slide:hover:before {
	transform-origin: left top;
	transform: scale(1, 1)
}
</style>