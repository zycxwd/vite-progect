<template>
  <teleport to="body">
    <!-- 蒙层 -->
    <Transition>
      <div class="w-screen h-screen fixed left-0 top-0 bg-zinc-900/70 z-40"></div>
    </Transition>

    <!-- 内容层 -->
    <Transition name="bounce">
      <div class="w-screen h-2/3 bg-white fixed z-50 left-0 bottom-0 ">
        <slot></slot>
      </div>

    </Transition>


  </teleport>
</template>

<script setup>
import { ref } from 'vue';
const show = ref(true)
</script>

<style lang="scss" scoped>
.red {
  color: red;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
}
</style>