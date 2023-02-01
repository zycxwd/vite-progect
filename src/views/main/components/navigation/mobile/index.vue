<!-- main 首页文件夹 对应首页所有组件 -->
<template>

  <ul>
    <li v-for="item in data">{{ item }}</li>
  </ul>

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
