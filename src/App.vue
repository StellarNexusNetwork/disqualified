<template>
  <div class="app">
    <Splitter style="height: 100vh" :layout="layout">
      <SplitterPanel class="flex items-center justify-center" :minSize="10">
        <DisplayBox :config="config" ref="displayBoxRef" />
      </SplitterPanel>
      <SplitterPanel class="flex items-center justify-center" :minSize="minSize">
        <OptionsBox v-model:config="config" :displayDiv="displayDiv" />
      </SplitterPanel>
    </Splitter>
  </div>
</template>

<script setup lang="ts">
import DisplayBox from '@/views/display.vue'
import OptionsBox from '@/views/options.vue'
import { ref, onMounted, watchEffect } from 'vue'
import { useWindowStore } from '@/stores/window';

const layout= ref('horizontal')
const minSize=ref(35);

watchEffect(()=>{
  if(useWindowStore().enableMobileSupport){
    layout.value = 'vertical'
    minSize.value=21;
  }else{
    layout.value = 'horizontal'
    minSize.value=31;
  }
})

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
      zoomLevel:1,
    },
    icon2: {
      src: '/icon/logo.svg',
      zoomLevel:1,
      display: true
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
