import {ref} from 'vue';

export function useWindow() {
  const width = ref(window.innerWidth);

  const updateWindowWidth = () => {
    width.value = window.innerWidth;
  };

  window.addEventListener('resize', updateWindowWidth); // 监听窗口大小变化

  return {width};
}