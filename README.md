## Available Scripts

In the project directory, you can run:

### `npm install`

### `npm start`

## nennWeb 接入文档

### 1. 概述

nennWeb 是一个用于图像分割的 JavaScript 库，支持 Chrome，提供了高性能的实时图像分割能力。

#### 2.1 资源引入
##### 资源依赖
worker-model-worker.mjs  
ort.all.mjs  
ort-wasm-simd-threaded.jsep.wasm  
ort-wasm-simd-threaded.jsep.mjs  
opencv_js.wasm  
nennweb.min.mjs  
models.esm.js  

##### 使用
在 `public/index.html` 中引入 nennWeb 库：

```html
<script type="module" src="./nennweb.min.mjs"></script>
```

### 3. 基本使用

#### 3.1 初始化和模型加载

```javascript
const loadModel = async () => {
  try {
    // 获取模型 URL
    const modelurl = await window.NennWeb.getModel("seg_fast");
    if (modelurl == null) {
      console.error('模型URL获取失败');
      return;
    }
    
    // 配置文件 URL
    const configUrl = `${window.location.origin}/models/configs.json`;
    
    try {
      const model = new window.NennWeb.Seg(modelurl, configUrl);
      console.log('模型加载完成');
      return model;
    } catch (webgpuError) {
      
    }
  } catch (error) {
    console.error('模型加载错误:', error);
    throw error;
  }
};
```

#### 3.2 使用模型进行分割

```javascript
// 假设已经加载了模型
const model = await loadModel();

// 获取图像元素
const imageElement = document.getElementById('input-image');

// 执行分割
const segmentationResult = await model.infer(imgRGBA,bgcolor, bgimg);

// 展示分割图
cv.imshow(canvas, result.blendedImg)

```

### 4. 模型类型

nennWeb 提供了多种预训练模型，适用于不同场景：

| 模型名称 | 类型 | 描述 |
|---------|------|------|
| seg_normal | RSeg | 标准分割模型，平衡性能和精度 需要有WebGPU|
| seg_fast | Seg | 快速分割模型，适合实时场景 |
| seg_fast_v1 | Seg | 快速分割模型 v1 版本 |
| seg_fast_v2 | Seg | 快速分割模型 v2 版本 |

### 5. 高级配置

#### 5.1 启用多线程 WASM

在支持 `Cross-Origin-Isolated` 的环境中，可以启用多线程 WASM 以提高性能：

```javascript
const numThreads = navigator.hardwareConcurrency ? Math.min(4, Math.ceil(navigator.hardwareConcurrency / 2)) : 1;
const sessionOption = {
  executionProviders: ["wasm"],
  extra: {
    session: {}
  }
};

// 检查是否支持多线程
const isCrossOriginIsolatedEnv = typeof window !== 'undefined' && window.crossOriginIsolated;
if (isCrossOriginIsolatedEnv && numThreads > 1) {
  sessionOption.extra.session.numThreads = numThreads;
  console.log(`使用多线程WASM，线程数: ${numThreads}`);
}

const model = new window.NennWeb.Seg(modelurl, configUrl, sessionOption);
```

#### 5.2 错误处理

```javascript
try {
  // 模型加载和分割操作
  const model = await loadModel();
  const result = await model.segment(imageElement);
} catch (error) {
  console.error('nennWeb 错误:', error);
  // 处理错误，如显示错误信息给用户
  alert(`图像处理失败: ${error.message}`);
}
```

### 6. 浏览器兼容性

nennWeb 支持现代浏览器，具体兼容性取决于所使用的执行方式：

| 执行方式 | 最低浏览器版本 |
|---------|----------------|
| WASM | Chrome 61+, Edge 79+, Firefox 54+, Safari 11+ |

### 7. 性能优化建议

1. **合理选择模型**：根据实际需求选择合适的模型，平衡性能和精度
2. **优化输入图像**：适当调整输入图像大小，避免过大的图像导致性能问题
3. **预加载模型**：在应用初始化时预加载模型，减少用户等待时间

### 8. 调试和测试

#### 8.1 兼容性检测

使用项目中提供的兼容性检测脚本，在浏览器控制台执行：

```javascript
// 复制并执行 test/信创系统兼容性检测.js 中的代码
```

该脚本会检测浏览器对 WebGPU、WASM、摄像头、OpenCV 和 nennWeb 的支持情况。

### 9. 常见问题

#### 9.1 模型加载失败
- 确认模型名称是否正确
- 检查配置文件路径是否正确

### 10. 示例代码

完整的使用示例可以参考 `src/App.js` 文件中的相关代码。

