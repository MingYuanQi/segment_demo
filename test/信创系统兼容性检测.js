/**
 * 信创系统兼容性检测脚本
 * 使用方法：在浏览器控制台（F12）中粘贴并执行此脚本
 */

(async function() {
  console.log('开始信创系统兼容性检测...\n');
  
  const results = {
    timestamp: new Date().toISOString(),
    browser: navigator.userAgent,
    platform: navigator.platform,
    tests: {}
  };

  // 1. WebGPU检测
  console.log('1. 检测WebGPU支持...');
  results.tests.webgpu = {
    supported: typeof navigator !== 'undefined' && !!navigator.gpu,
    adapter: null,
    error: null
  };
  
  if (results.tests.webgpu.supported) {
    try {
      const adapter = await navigator.gpu.requestAdapter();
      if (adapter) {
        results.tests.webgpu.adapter = {
          features: Array.from(adapter.features),
          limits: adapter.limits
        };
        // 尝试获取适配器信息（如果支持）
        if (adapter.requestAdapterInfo) {
          try {
            const info = await adapter.requestAdapterInfo();
            results.tests.webgpu.adapter.info = {
              vendor: info.vendor,
              architecture: info.architecture,
              device: info.device,
              description: info.description
            };
          } catch (e) {
            // requestAdapterInfo可能不支持
          }
        }
        console.log('  ✓ WebGPU支持，适配器信息已获取');
      } else {
        results.tests.webgpu.error = '无法获取WebGPU适配器';
        console.log('  ✗ 无法获取WebGPU适配器');
      }
    } catch (e) {
      results.tests.webgpu.error = e.message;
      console.log('  ✗ WebGPU初始化失败:', e.message);
    }
  } else {
    console.log('  ✗ WebGPU不支持');
  }

  // 2. WASM检测
  console.log('\n2. 检测WebAssembly支持...');
  results.tests.wasm = {
    supported: typeof WebAssembly !== 'undefined',
    sharedArrayBuffer: typeof SharedArrayBuffer !== 'undefined',
    hardwareConcurrency: navigator.hardwareConcurrency || 0,
    crossOriginIsolated: window.crossOriginIsolated || false
  };
  
  console.log('  ✓ WASM支持:', results.tests.wasm.supported ? '是' : '否');
  console.log('  ✓ SharedArrayBuffer:', results.tests.wasm.sharedArrayBuffer ? '是' : '否');
  console.log('  ✓ 硬件并发数:', results.tests.wasm.hardwareConcurrency);
  console.log('  ✓ CrossOriginIsolated:', results.tests.wasm.crossOriginIsolated ? '是' : '否');

  // 3. 摄像头检测
  console.log('\n3. 检测摄像头访问...');
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    const track = stream.getVideoTracks()[0];
    const settings = track.getSettings();
    const capabilities = track.getCapabilities();
    
    results.tests.camera = {
      available: true,
      settings: {
        width: settings.width,
        height: settings.height,
        frameRate: settings.frameRate,
        facingMode: settings.facingMode
      },
      capabilities: {
        width: capabilities.width,
        height: capabilities.height,
        frameRate: capabilities.frameRate,
        facingMode: capabilities.facingMode
      }
    };
    
    console.log('  ✓ 摄像头可用');
    console.log('    当前分辨率:', settings.width + '×' + settings.height);
    console.log('    当前帧率:', settings.frameRate);
    console.log('    支持的分辨率范围:', 
      capabilities.width?.min + '-' + capabilities.width?.max + ' × ' +
      capabilities.height?.min + '-' + capabilities.height?.max);
    console.log('    支持的帧率范围:', 
      capabilities.frameRate?.min + '-' + capabilities.frameRate?.max);
    
    stream.getTracks().forEach(track => track.stop());
  } catch (e) {
    results.tests.camera = {
      available: false,
      error: e.name + ': ' + e.message
    };
    console.log('  ✗ 摄像头访问失败:', e.message);
  }

  // 4. OpenCV检测
  console.log('\n4. 检测OpenCV.js...');
  results.tests.opencv = {
    loaded: typeof window.cv !== 'undefined',
    version: null,
    methods: []
  };
  
  if (results.tests.opencv.loaded) {
    results.tests.opencv.version = window.cv.version;
    results.tests.opencv.methods = Object.keys(window.cv).slice(0, 10); // 只取前10个方法名
    console.log('  ✓ OpenCV.js已加载');
    console.log('    版本:', window.cv.version);
  } else {
    console.log('  ✗ OpenCV.js未加载');
  }

  // 5. NennWeb检测
  console.log('\n5. 检测NennWeb库...');
  results.tests.nennweb = {
    loaded: typeof window.NennWeb !== 'undefined',
    methods: [],
    models: []
  };
  
  if (results.tests.nennweb.loaded) {
    results.tests.nennweb.methods = Object.keys(window.NennWeb);
    
    // 尝试检测可用的模型
    if (window.NennWeb.getModel) {
      try {
        const model1 = await window.NennWeb.getModel("seg_normal");
        if (model1) results.tests.nennweb.models.push('seg_normal');
      } catch (e) {}
      
      try {
        const model2 = await window.NennWeb.getModel("seg_fast");
        if (model2) results.tests.nennweb.models.push('seg_fast');
      } catch (e) {}
    }
    
    console.log('  ✓ NennWeb已加载');
    console.log('    可用方法:', results.tests.nennweb.methods.join(', '));
    console.log('    可用模型:', results.tests.nennweb.models.join(', ') || '无');
  } else {
    console.log('  ✗ NennWeb未加载');
  }

  // 6. 内存信息（如果可用）
  console.log('\n6. 检测内存信息...');
  if (performance.memory) {
    results.tests.memory = {
      used: performance.memory.usedJSHeapSize,
      total: performance.memory.totalJSHeapSize,
      limit: performance.memory.jsHeapSizeLimit
    };
    console.log('  ✓ 内存信息可用');
    console.log('    已使用:', (results.tests.memory.used / 1024 / 1024).toFixed(2), 'MB');
    console.log('    总计:', (results.tests.memory.total / 1024 / 1024).toFixed(2), 'MB');
    console.log('    限制:', (results.tests.memory.limit / 1024 / 1024).toFixed(2), 'MB');
  } else {
    console.log('  ✗ 内存信息不可用（浏览器不支持）');
  }

  // 输出完整结果
  console.log('\n=== 完整检测结果 ===');
  console.log(JSON.stringify(results, null, 2));
  
  // 尝试复制到剪贴板
  try {
    await navigator.clipboard.writeText(JSON.stringify(results, null, 2));
    console.log('\n✓ 检测结果已复制到剪贴板');
  } catch (e) {
    console.log('\n⚠ 无法自动复制到剪贴板，请手动复制上面的JSON结果');
  }

  // 生成兼容性摘要
  console.log('\n=== 兼容性摘要 ===');
  const summary = {
    'WebGPU支持': results.tests.webgpu.supported ? '✓' : '✗',
    'WASM支持': results.tests.wasm.supported ? '✓' : '✗',
    'SharedArrayBuffer': results.tests.wasm.sharedArrayBuffer ? '✓' : '✗',
    '摄像头访问': results.tests.camera?.available ? '✓' : '✗',
    'OpenCV.js': results.tests.opencv.loaded ? '✓' : '✗',
    'NennWeb': results.tests.nennweb.loaded ? '✓' : '✗'
  };
  console.table(summary);

  // 保存到全局变量，方便后续使用
  window.xinchuangTestResults = results;
  console.log('\n检测结果已保存到 window.xinchuangTestResults');
  
  return results;
})();

