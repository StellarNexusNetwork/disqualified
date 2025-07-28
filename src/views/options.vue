<template>
  <div class="main">
    <div class="mainTitle">
      <h1>选项</h1>
      <Button class="download" label="Submit" @click="outputImg">
        <img src="/icon/download.svg" />
        导出
      </Button>
    </div>
    <div class="group">
      <h2>背景</h2>
      <div class="option">
        <div class="name">颜色</div>
        <div class="component">
          <InputText
            type="text"
            v-model="config.background.color"
            style="margin-right: 10px; width: 80px"
          />
          <ColorPicker
            v-model="config.background.color"
            inputId="cp-hex"
            format="hex"
            class="mb-4"
          />
        </div>
      </div>
    </div>
    <Divider />
    <div class="group">
      <h2>卡片</h2>
      <div class="option">
        <div class="name">颜色</div>
        <div class="component">
          <InputText
            type="text"
            v-model="config.card.color"
            style="margin-right: 10px; width: 80px"
          />
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
          <InputText
            type="text"
            v-model="config.text.color"
            style="margin-right: 10px; width: 80px"
          />
          <ColorPicker v-model="config.text.color" inputId="cp-hex" format="hex" class="mb-4" />
        </div>
      </div>
      <div class="option">
        <div class="name">中文1</div>
        <div class="component">
          <InputText type="text" v-model="config.text.title1" />
        </div>
      </div>
      <div class="option">
        <div class="name">字体大小</div>
        <div class="component">
          <InputNumber
            v-model.number="config.text.fontSize1"
            inputId="withoutgrouping"
            :min="10"
            :max="200"
            :useGrouping="false"
            fluid
          />
          <Slider v-model="config.text.fontSize1" :min="10" :max="200" style="margin-top: 10px" />
        </div>
      </div>
      <div class="option">
        <div class="name">英文1</div>
        <div class="component">
          <InputText type="text" v-model="config.text.context1" />
        </div>
      </div>
      <div class="option">
        <div class="name">字体大小</div>
        <div class="component">
          <InputNumber
            v-model.number="config.text.fontSize2"
            inputId="withoutgrouping"
            :min="10"
            :max="200"
            :useGrouping="false"
            fluid
          />
          <Slider v-model="config.text.fontSize2" :min="10" :max="200" style="margin-top: 10px" />
        </div>
      </div>
      <div class="option">
        <div class="name">中文2</div>
        <div class="component">
          <InputText type="text" v-model="config.text.title2" />
        </div>
      </div>
      <div class="option">
        <div class="name">字体大小</div>
        <div class="component">
          <InputNumber
            v-model.number="config.text.fontSize3"
            inputId="withoutgrouping"
            :min="10"
            :max="200"
            :useGrouping="false"
            fluid
          />
          <Slider v-model="config.text.fontSize3" :min="10" :max="200" style="margin-top: 10px" />
        </div>
      </div>
      <div class="option">
        <div class="name">英文2</div>
        <div class="component">
          <InputText type="text" v-model="config.text.context2" />
        </div>
      </div>
      <div class="option">
        <div class="name">字体大小</div>
        <div class="component">
          <InputNumber
            v-model.number="config.text.fontSize4"
            inputId="withoutgrouping"
            :min="10"
            :max="200"
            :useGrouping="false"
            fluid
          />
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
          <SelectButton
            v-model="icon1Value"
            :options="options1"
            optionDisabled="constant"
            optionLabel="value"
            dataKey="value"
            aria-labelledby="custom"
            :invalid="icon1Value === null"
          >
            <template #option="slotProps">
              <img
                :src="slotProps.option.icon"
                style="width: 14px; height: 14px; object-fit: contain"
              />
            </template>
          </SelectButton>
        </div>
      </div>
      <div class="option">
        <div class="name">图标1-自定义</div>
        <div class="component">
          <Button class="download2" label="Submit" @click="uploadFile('1')"> <img src="/icon/upload.svg" />选择文件 </Button>
        </div>
      </div>
      <div class="option">
        <div class="name">图标2</div>
        <div class="component">
          <SelectButton
            v-model="icon2Value"
            :options="options2"
            optionDisabled="constant"
            optionLabel="value"
            dataKey="value"
            aria-labelledby="custom"
            :invalid="icon2Value === null"
          >
            <template #option="slotProps">
              <img
                :src="slotProps.option.icon"
                style="width: 14px; height: 14px; object-fit: contain"
              />
            </template>
          </SelectButton>
        </div>
      </div>
      <div class="option">
        <div class="name">图标2-自定义</div>
        <div class="component">
          <Button class="download2" label="Submit" @click="uploadFile('2')"> <img src="/icon/upload.svg" />选择文件 </Button>
        </div>
      </div>
    </div>
    <div class="licenses">
      <a href="/static/licenses.txt" target="_blank">
        <div class="lisensestext">
          <img src="/icon/icon6.svg" />
          <div>licenses</div>
        </div>
      </a>
      <a
        href="https://github.com/StellarNexusNetwork/disqualified"
        target="_blank"
        style="margin-left: 10px"
      >
        <div class="lisensestext">
          <img src="/icon/github.svg" />
          <div>Github</div>
        </div>
      </a>
      <a href="https://x.com/NekoNoct" target="_blank" style="margin-left: 10px">
        <div class="lisensestext">
          <img src="/icon/twitter.svg" />
          <div>给个关注吧 求你了</div>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, reactive, ref, watchEffect, onMounted, toRaw } from 'vue'
import { toPng } from 'html-to-image'
import { useCounterStore } from '@/stores/counter'
import getSrc from '@/composables/uploadFile'

const icon1Value = ref({ icon: '/icon/icon3.svg', value: '1', constant: false })
const icon1List = ['/icon/warning.svg', '/icon/icon2.svg', '/icon/icon7.svg']

const options1 = ref([
  { icon: '/icon/icon3.svg', value: '1', constant: false },
  { icon: '/icon/icon4.svg', value: '2', constant: false },
  { icon: '/icon/icon8.svg', value: '3', constant: false },
  { icon: '/icon/icon5.svg', value: '4', constant: true },
])

const icon2Value = ref({ icon: '/icon/icon3.svg', value: '1', constant: false })
const icon2List = ['/icon/logo.svg']

const options2 = ref([
  { icon: '/icon/logo2.svg', value: '1', constant: false },
  { icon: '/icon/icon5.svg', value: '2', constant: true },
])
onMounted(() => {
  watchEffect(() => {
    if (!icon1Value.value) {
      config.icon.icon1.src = icon1List[0]
    } else {
      const icon1 = Number(toRaw(icon1Value.value).value)
      if (icon1 < 4) {
        config.icon.icon1.src = icon1List[icon1 - 1]
      }
    }
  })
  watchEffect(() => {
    if (!icon2Value.value) {
      config.icon.icon2.src = icon2List[0]
    } else {
      const icon2 = Number(toRaw(icon2Value.value).value)
      if (icon2 < 2) {
        config.icon.icon2.src = icon2List[icon2 - 1]
      }
    }
  })
})

export interface Config {
  background: {
    color: string
  }
  card: {
    color: string
  }
  text: {
    color: string
    title1: string
    title2: string
    context1: string
    context2: string
    fontSize1: number
    fontSize2: number
    fontSize3: number
    fontSize4: number
  }
  icon: {
    icon1: {
      src: string
    }
    icon2: {
      src: string
    }
  }
}

const props = defineProps<{ config: Config; displayDiv: Object }>()

const emit = defineEmits<{
  (e: 'update:config', value: Config): void
}>()

const config = reactive({ ...props.config })

watch(
  config,
  (newVal) => {
    emit('update:config', JSON.parse(JSON.stringify(newVal))) // 触发父组件更新
  },
  { deep: true },
)

async function outputImg() {
  useCounterStore().isOutput = true
  const targetDiv = props.displayDiv as HTMLElement

  if (!targetDiv) {
    console.warn('截图目标为空！')
    return
  }

  try {
    // 生成图片
    const dataUrl = await toPng(targetDiv, {
      cacheBust: true, // 避免缓存问题
      backgroundColor: undefined, // 保留透明背景（可选）
      pixelRatio: 2, // 提高清晰度
    })

    // 下载图片
    const link = document.createElement('a')
    link.download = `screenshot-${Date.now()}.png`
    link.href = dataUrl
    link.click()

    console.log('保存成功！')
  } catch (error) {
    console.error('生成失败：', error)
  }
  useCounterStore().isOutput = false
}

async function uploadFile(id:string) {
  const imgSrc = await getSrc()
  if (imgSrc === 'error') {
    console.log('错误')
  } else {
    if(id ==='1') {
      icon1Value.value = { icon: '/icon/icon5.svg', value: '4', constant: true };
      config.icon.icon1.src = imgSrc;
    }
    if(id=='2'){
      icon2Value.value={ icon: '/icon/icon5.svg', value: '2', constant: true };
      config.icon.icon2.src=imgSrc;
    }
    console.log(imgSrc)
  }
}
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 25px;
  padding-bottom: 10px;
}
.mainTitle {
  display: flex;
  align-items: center;
}

.download {
  margin-left: auto;
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #ffffff;
}

.download img {
  width: 25px;
  height: 25px;
  object-fit: contain;
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

.download2 {
  margin-left: auto;
  display: flex;
  align-items: center;
  font-size: 15px;
  color: #ffffff;
}

.download2 img {
  width: 20px;
  height: 20px;
  object-fit: contain;
}

.licenses {
  margin-top: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.licenses a {
  overflow: hidden;
  border-radius: 15px;
  padding-left: 10px;
  padding-right: 10px;
}

.lisensestext {
  display: flex;
  align-items: center;
}

.lisensestext img {
  width: 15px;
  height: 15px;
  margin-right: 10px;
}
</style>
