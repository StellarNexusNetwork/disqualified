function blobToDataURL(blob) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result); // 返回 base64
    reader.readAsDataURL(blob);
  });
}

async function getSrc() {
  try {
    const [handle] = await showOpenFilePicker({
      types: [
        {
          description: '图片文件',
          accept: {
            'image/*': ['.png', '.jpg', '.jpeg', '.webp', '.svg']
          }
        }
      ]
    });
    const file = await handle.getFile(); // 关键步骤
    const base64 = await blobToDataURL(file);
    // return URL.createObjectURL(file);
    return base64;
  } catch (error) {
    console.warn('未获得授权或发生错误！', error);
    return 'error';
  }
}

export default getSrc;
