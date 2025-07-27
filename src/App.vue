<template>
  <div class="app">
    <Splitter style="height: 100%">
      <SplitterPanel class="flex items-center justify-center">
        <DisplayBox :config="config" ref="displayBoxRef" />
      </SplitterPanel>
      <SplitterPanel class="flex items-center justify-center">
        <OptionsBox v-model:config="config" :displayDiv="displayDiv" />
      </SplitterPanel>
    </Splitter>
  </div>
</template>

<script setup lang="ts">
import DisplayBox from '@/views/display.vue'
import OptionsBox from '@/views/options.vue'
import { ref,onMounted } from 'vue'

const displayBoxRef = ref();

const displayDiv = ref();

onMounted(() => {
  // 访问 BrotherA 暴露的 div
  displayDiv.value = displayBoxRef.value?.displayDiv;
});

const config = ref({
  background: {
    color:'000000'
  },
  card: {
    color:'9C7C38'
  },
  text: {
    color:'FFFFFF',
    title1:"此处禁止拉屎",
    title2:"违者将被列入黑名单",
    context1:"SHIT IS NOT\\nALLOWED HERE",
    context2:"VIOLATORS WILL BE\\nDISQUALIFIED",
    fontSize1:120,
    fontSize2:68,
    fontSize3:67,
    fontSize4:65,
  },
  icon:{
    icon1: {
      src: '/icon/warning.svg',
    },
    icon2: {
      src: '/icon/logo.svg',
    }
  }
})
</script>
<style scoped>
.app {
  width: 100vw;
  max-height: 100vh;
}
</style>
