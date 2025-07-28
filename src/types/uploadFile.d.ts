declare module '@/composables/uploadFile' {
  // 假设 uploadFile.js 默认导出的是一个函数
  const getSrc: () => Promise<string>; // 举例：返回上传后的 URL
  export default getSrc;
}
