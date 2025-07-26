<template>
  <div class="main">
    <h1>选项</h1>
    <div class="group">
      <h2>背景</h2>
      <div class="option">
        <div class="name">颜色</div>
        <div class="component">
          <InputText type="text" v-model="config.background.color" style="margin-right: 10px;width: 80px"/>
          <ColorPicker v-model="config.background.color" inputId="cp-hex" format="hex" class="mb-4" />
        </div>
      </div>
    </div>
    <Divider />
    <div class="group">
      <h2>卡片</h2>
      <div class="option">
        <div class="name">颜色</div>
        <div class="component">
          <InputText type="text" v-model="config.card.color" style="margin-right: 10px;width: 80px"/>
          <ColorPicker v-model="config.card.color" inputId="cp-hex" format="hex" class="mb-4" />
        </div>
      </div>
    </div>
    <Divider />
    <div class="group">
      <h2>文本</h2>
      <div class="option">
        <div class="name">颜色</div>
        <div class="component">
          <InputText type="text" v-model="config.text.color" style="margin-right: 10px;width: 80px"/>
          <ColorPicker v-model="config.text.color" inputId="cp-hex" format="hex" class="mb-4" />
        </div>
      </div>
      <div class="option">
        <div class="name">中文1</div>
        <div class="component">
          <InputText type="text" v-model="config.text.title1"/>
        </div>
      </div>
      <div class="option">
        <div class="name">字体大小</div>
        <div class="component">
          <InputNumber v-model.number="config.text.fontSize1" inputId="withoutgrouping" :min="10" :max="200" :useGrouping="false" fluid />
          <Slider v-model="config.text.fontSize1" :min="10" :max="200" style="margin-top: 10px" />
        </div>
      </div>
      <div class="option">
        <div class="name">英文1</div>
        <div class="component">
          <InputText type="text" v-model="config.text.context1"/>
        </div>
      </div>
      <div class="option">
        <div class="name">字体大小</div>
        <div class="component">
          <InputNumber v-model.number="config.text.fontSize2" inputId="withoutgrouping" :min="10" :max="200" :useGrouping="false" fluid />
          <Slider v-model="config.text.fontSize2" :min="10" :max="200" style="margin-top: 10px" />
        </div>
      </div>
      <div class="option">
        <div class="name">中文2</div>
        <div class="component">
          <InputText type="text" v-model="config.text.title2"/>
        </div>
      </div>
      <div class="option">
        <div class="name">字体大小</div>
        <div class="component">
          <InputNumber v-model.number="config.text.fontSize3" inputId="withoutgrouping" :min="10" :max="200" :useGrouping="false" fluid />
          <Slider v-model="config.text.fontSize3" :min="10" :max="200" style="margin-top: 10px" />
        </div>
      </div>
      <div class="option">
        <div class="name">英文2</div>
        <div class="component">
          <InputText type="text" v-model="config.text.context2"/>
        </div>
      </div>
      <div class="option">
        <div class="name">字体大小</div>
        <div class="component">
          <InputNumber v-model.number="config.text.fontSize4" inputId="withoutgrouping" :min="10" :max="200" :useGrouping="false" fluid />
          <Slider v-model="config.text.fontSize4" :min="10" :max="200" style="margin-top: 10px" />
        </div>
      </div>
    </div>
    <Divider />
    <div class="group">
      <h2>图标</h2>
      <div class="option">
        <div class="name">图标1</div>
        <div class="component">
          <SelectButton v-model="icon1Value" :options="options2" optionDisabled="constant" optionLabel="value" dataKey="value" aria-labelledby="custom" :invalid="icon1Value === null">
            <template #option="slotProps">
              <img :src="slotProps.option.icon" style="width: 14px;height: 14px; object-fit: contain;">
            </template>
          </SelectButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, reactive, ref, watchEffect, onMounted, toRaw } from 'vue'

const icon1Value = ref({ icon: '/icon/icon3.svg', value: '1', constant: false });
const icon1List=['/icon/warning.svg', '/icon/icon2.svg']

const options2 = ref([
  { icon: '/icon/icon3.svg', value: '1', constant: false },
  { icon: '/icon/icon4.svg', value: '2', constant: false },
  { icon: '/icon/icon5.svg', value: '3', constant: true },
]);
onMounted(()=>{
  watchEffect(()=>{
    if(!icon1Value.value){
      config.icon.icon1.src = icon1List[0]
    }
    const icon1 = Number(toRaw(icon1Value.value).value);
    if(icon1< 3 ){
      console.log(1)
      config.icon.icon1.src = icon1List[icon1-1]
    }
  })
})


export interface Config {
  background: {
    color: string
  },
  card: {
    color: string
  },
  text: {
    color:string,
    title1:string,
    title2:string,
    context1:string,
    context2:string,
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
const emit = defineEmits<{
  (e: 'update:config', value: Config): void
}>()

const config = reactive({ ...props.config })

watch(
  config,
  (newVal) => {
    emit('update:config', JSON.parse(JSON.stringify(newVal))) // 触发父组件更新
  },
  { deep: true }
)

</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 25px;
}

.group {
  margin-top: 10px;
}
.option {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.option .component {
  margin-left: auto;
}
</style>
