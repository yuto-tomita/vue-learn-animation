<script setup lang="ts">
import { defineEmits } from 'vue'
const emits = defineEmits(['close'])

const closeModal = () => emits('close')
</script>

<template>
  <div
    class="modal-wrapper"
    @click="closeModal"
  >
    <div class="modal-content">
      <h1 class="modal-title">
        Modal Window
      </h1>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal-wrapper {
	background-color: rgba(221, 221, 221, 0.5);
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100;

	.modal-content {
		width: 50%;
		height: 50%;
		background: #fff;
		border-radius: 1.5rem;
	
		.modal-title {
			text-align: center;
		}
	}
}
</style>