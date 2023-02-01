
<template>
  <MobieNavigation-vue v-if="isMobileTerminal" :data="testData" />
  <pcNavigation-vue v-else />
</template>

<script setup>
import { reactive, ref } from 'vue'
import MobieNavigationVue from './mobile/index.vue'
import { isMobileTerminal } from "../../../../utils/flexible";
import pcNavigationVue from './pc/index.vue'

import { test1 } from '../../../../api/index'

const testData = ref([])

const getTestData = async () => {
  testData.value = await test1()
  console.log(testData.value);
}
getTestData()
</script>
<style lang="scss" scoped>

</style>
