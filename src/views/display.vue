<template>
  <div class="main" ref="mainRef">
    <div class="background" :style="{ zoom: zoomlevel, background: '#' + config.background.color }" ref="displayDiv">
      <div class="iconBox" :style="{ background: '#' + config.card.color }">
        <img :src="config.icon.icon1.src" alt="" />
      </div>
      <div class="mainBox" :style="{ background: '#' + config.card.color }">
        <div class="textBox" :style="{ color: '#' + config.text.color }">
          <p class="title1 cn" :style="{ fontSize: config.text.fontSize1 + 'px' }">
            {{config.text.title1.replace(/\\n/g, '\n')}}
          </p>
          <p class="context1 en" :style="{ fontSize: config.text.fontSize2 + 'px',lineHeight: config.text.fontSize2 + 'px' }">
            {{config.text.context1.replace(/\\n/g, '\n')}}
          </p>
          <p class="title2 cn" :style="{ fontSize: config.text.fontSize3 + 'px' }">
            {{config.text.title2.replace(/\\n/g, '\n')}}
          </p>
          <p class="context2 en" :style="{ fontSize: config.text.fontSize4 + 'px',lineHeight: config.text.fontSize4 + 'px' }">
            {{config.text.context2.replace(/\\n/g, '\n')}}
          </p>
        </div>
        <img class="logo" src="/icon/logo.svg" alt="" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref, watchEffect } from 'vue'
import{useCounterStore} from '@/stores/counter'

const mainRef = ref<HTMLDivElement>()
const displayDiv = ref<HTMLDivElement>();
let oldZoomLevel = 1;

defineExpose({
  displayDiv,
});

let resizeObserver
const zoomlevel = ref(1)

export interface Config {
  background: {
    color: string
  }
  card: {
    color: string
  }
  text: {
    color: string,
    title1: string,
    title2: string,
    context1: string,
    context2: string,
    fontSize1:number,
    fontSize2:number,
    fontSize3:number,
    fontSize4:number,
  },
  icon:{
    icon1: {
      src: string,
    },
    icon2: {
      src: string,
    }
  }
}

const props = defineProps<{ config: Config }>()
const config = reactive({ ...props.config })

onMounted(() => {
  const updateScale = () => {
    if (!useCounterStore().isOutput && mainRef.value) {
      let zoomlevelWidth = 1
      let zoomlevelHeight = 1
      if (mainRef.value?.clientWidth < 940) {
        zoomlevelWidth = (mainRef.value?.clientWidth - 40) / 900
      }
      if (mainRef.value?.clientHeight < 1300) {
        zoomlevelHeight = (mainRef.value?.clientHeight - 40) / 1260
      }
      zoomlevel.value = Math.min(1, zoomlevelWidth, zoomlevelHeight)
    }
  }

  resizeObserver = new ResizeObserver(updateScale)
  resizeObserver.observe(mainRef.value!)
  updateScale()
})

watchEffect(()=>{
  if (useCounterStore().isOutput){
    oldZoomLevel=zoomlevel.value;
    zoomlevel.value = 1;
  }else{
    zoomlevel.value = oldZoomLevel;
  }
})
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
}

.background {
  transform-origin: left center;
  width: 900px;
  height: 1260px;
  opacity: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 32px 32px 32px;
}
.iconBox {
  margin-top: 94px;
  width: 180px;
  height: 180px;
  opacity: 1;

  /* 自动布局 */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
.iconBox img {
  width: 120px;
  height: 120px;
  opacity: 1;
  object-fit: contain;
  user-select: none;
}
.mainBox {
  margin-top: auto;
  padding-bottom: 54px;
  width: 100%;
  height: 880px;
  border-radius: 10px;
  opacity: 1;

  /* 自动布局 */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.textBox {
  margin-top: 32px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.textBox p {
  padding-top: 10px;
  font-variation-settings: 'opsz' auto;
  font-feature-settings: 'kern' on;
  white-space: pre-wrap;
}

.textBox p.cn {
  font-family: Source Han Sans;
}

.textBox p.en {
  font-family: Patika;
}

.textBox p.title1 {
  opacity: 1;

  font-weight: 500;
  line-height: normal;
  text-align: center;
  letter-spacing: 0em;
}

.textBox p.title2 {
  opacity: 1;

  font-weight: 350;
  text-align: center;
  letter-spacing: 0em;
}

.textBox p.context1 {
  opacity: 1;

  font-weight: normal;
  text-align: center;
  letter-spacing: 0em;
}

.textBox p.context2 {
  opacity: 1;

  font-weight: normal;
  text-align: center;
  letter-spacing: 0em;
}

.mainBox .logo {
  margin-top: auto;
  width: 145px;
  height: 145px;
  object-fit: contain;
  user-select: none;
}
</style>
