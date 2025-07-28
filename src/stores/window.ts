import {defineStore} from 'pinia';
import {ref, watchEffect} from 'vue';
import {useWindow} from '@/composables/useWindow';

const sysWindow = useWindow()

export const useWindowStore = defineStore('window',
  () => {
    const enableMobileSupport = ref(false);

    watchEffect(() => {
      enableMobileSupport.value = sysWindow.width.value < 670;
    })

    return {
      enableMobileSupport,
    };
  }
);
