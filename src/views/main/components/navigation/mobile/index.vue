<!-- main 首页文件夹 对应首页所有组件 -->
<template>
  <!-- <m-popup>
  </m-popup>
  <m-svg-icon></m-svg-icon> -->
  <div class="bg-white dark:bg-zinc-900 duration-500 sticky top-0 left-0 z-10">
    <ul class=" relative text-xs flex overflow-x-auto overflow-hidden p-1 mr-4">
      <li></li>
      <li class=" shrink-0 p-1  " v-for="item in data">{{ item }}</li>
    </ul>

  </div>

</template>

<script setup>
import { watch } from "vue";
const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})
console.log('加载:', props.data);
watch(
  () => props.data,
  (count, prevCount) => {
    console.log('监听旧数据:', prevCount);
    console.log('监听新数据:', count);

  }
)


</script>

<style lang="scss" scoped>

</style>
