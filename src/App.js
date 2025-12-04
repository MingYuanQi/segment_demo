import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const App = () => {
  // 状态定义（保持不变）
  const [isActive, setIsActive] = useState(false);
  const [selectedModel, setSelectedModel] = useState('model1');
  const [selectedColor, setSelectedColor] = useState('rgba(255, 255, 255, 1)');
  const [disableBtn, setDisableBtn] = useState(true);
  const [selectedBackground, setSelectedBackground] = useState('bg1');
  const [selectedFps, setSelectedFps] = useState(30);
  const [selectedResolution, setSelectedResolution] = useState({ width: 1280, height: 720 });
  const [latency, setLatency] = useState(0);
  const [runTime, setRunTime] = useState(0);
  const [postprocessTime, setPostprocessTime] = useState(0);
  const [resolution, setResolution] = useState({ width: 0, height: 0 });
  const [localBackgroundPreview, setLocalBackgroundPreview] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const model = useRef(null);
  const imgRGBA = useRef(null);
  const result = useRef(null);
  const bgcolor = useRef([255,255,255, 1])
  const bgimg = useRef(null)
  const fileInputRef = useRef(null);
  const streamRef = useRef(null);
  const latencySum = useRef(0);
  const latencyCount = useRef(0);
  const runTimeSum = useRef(0);
  const runTimeCount = useRef(0);
  const postprocessTimeSum = useRef(0);
  const postprocessTimeCount = useRef(0);
  const timingLastUpdateTime = useRef(0);
  
  // 预设选项
  const colorOptions = [
    { id: 'color1', value: 'rgba(255, 255, 255, 1)', label: '白色' },
    { id: 'color2', value: 'rgba(0, 255, 255, 1)', label: '青色' },
    { id: 'color3', value: 'rgba(255, 105, 180, 1)', label: '粉色' }
  ];
  
  const backgroundOptions = [
    { id: 'bg1', url: '', label: '无' },
    { id: 'bg2', url: 'https://picsum.photos/id/1015/800/600', label: '自然风景' },
    { id: 'bg3', url: 'https://picsum.photos/id/1035/800/600', label: '城市建筑' }
  ];
  
  const fpsOptions = [15, 30];
  
  const resolutionOptions = [
    { width: 1280, height: 720, label: '1280×720' },
    { width: 640, height: 360, label: '640×360' },
    { width: 1920, height: 1080, label: '1920×1080' }
  ];
  
  // 新增：组件挂载时自动启动相机
  useEffect(() => {
    // 确保video元素已挂载
    const timer = setTimeout(() => {
      if (videoRef.current) {
        startCamera();
      }
    }, 500); // 微小延迟确保DOM已准备好
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const loadModel = async () => {
      model.current = null
      if (selectedModel === "model1") {
        try {
          // 使用绝对路径
          const configUrl = `${window.location.origin}/models/configs.json`;
          
          const modelurl = await window.NennWeb.getModel("seg_normal");
          if(modelurl == null) {
            console.error('模型URL获取失败');
            return;
          }
          // 先尝试WebGPU，如果失败则fallback到WASM
          try {
            model.current = new window.NennWeb.RSeg(modelurl, configUrl);
            console.log('模型1加载完成（WebGPU）');
          } catch (webgpuError) {
            console.warn('WebGPU加载失败，尝试使用WASM:', webgpuError);
            // 使用WASM作为fallback
            const sessionOption = { executionProviders: ["wasm"] };
            model.current = new window.NennWeb.RSeg(modelurl, configUrl, sessionOption);
            console.log('模型1加载完成（WASM fallback）');
          }
        } catch (error) {
          console.error('模型加载错误:', error);
          alert(`模型加载失败: ${error.message}`);
        }
      }else if(selectedModel === "model2") {
        try {    
          // 使用绝对路径
          const configUrl = `${window.location.origin}/models2/configs.json`;
          
          const modelurl = await window.NennWeb.getModel("seg_fast");
          if(modelurl == null) {
            console.error('模型URL获取失败');
            return;
          }
          // 尝试使用多线程WASM优化性能
          // 注意：需要服务器设置 Cross-Origin-Isolated 头才能启用多线程
          const numThreads = navigator.hardwareConcurrency ? Math.min(4, Math.ceil(navigator.hardwareConcurrency / 2)) : 1;
          const sessionOption = {
            executionProviders: ["wasm"],
            extra: {
              session: {}
            }
          };
          // 如果支持多线程，尝试启用
          const isCrossOriginIsolatedEnv = typeof window !== 'undefined' && window.crossOriginIsolated;
          if (isCrossOriginIsolatedEnv && numThreads > 1) {
            sessionOption.extra.session.numThreads = numThreads;
            console.log(`使用多线程WASM，线程数: ${numThreads}`);
          }
          model.current = new window.NennWeb.Seg(modelurl, configUrl, sessionOption);
          console.log('模型2加载完成');
        } catch (error) {
          console.error('模型加载错误:', error);
          alert(`模型加载失败: ${error.message}`);
        }
      }
      else if(selectedModel === "model3") {
        try {    
          // 使用绝对路径
          const configUrl = `${window.location.origin}/models3/configs.json`;
          
          const modelurl = await window.NennWeb.getModel("seg_fast_v2");
          if(modelurl == null) {
            console.error('模型URL获取失败');
            return;
          }
          // 尝试使用多线程WASM优化性能
          // 注意：需要服务器设置 Cross-Origin-Isolated 头才能启用多线程
          const numThreads = navigator.hardwareConcurrency ? Math.min(4, Math.ceil(navigator.hardwareConcurrency / 2)) : 1;
          const sessionOption = {
            executionProviders: ["wasm"],
            extra: {
              session: {}
            }
          };
          // 如果支持多线程，尝试启用
          const isCrossOriginIsolatedEnv = typeof window !== 'undefined' && window.crossOriginIsolated;
          if (isCrossOriginIsolatedEnv && numThreads > 1) {
            sessionOption.extra.session.numThreads = numThreads;
            console.log(`使用多线程WASM，线程数: ${numThreads}`);
          }
          model.current = new window.NennWeb.Seg(modelurl, configUrl, sessionOption);
          console.log('模型2加载完成');
        } catch (error) {
          console.error('模型加载错误:', error);
          alert(`模型加载失败: ${error.message}`);
        }
      }
      else if(selectedModel === "model4") {
        try {    
          // 使用绝对路径
          const configUrl = `${window.location.origin}/models4/configs.json`;
          
          const modelurl = await window.NennWeb.getModel("seg_fast_v1");
          if(modelurl == null) {
            console.error('模型URL获取失败');
            return;
          }
          // 尝试使用多线程WASM优化性能
          // 注意：需要服务器设置 Cross-Origin-Isolated 头才能启用多线程
          const numThreads = navigator.hardwareConcurrency ? Math.min(4, Math.ceil(navigator.hardwareConcurrency / 2)) : 1;
          const sessionOption = {
            executionProviders: ["wasm"],
            extra: {
              session: {}
            }
          };
          // 如果支持多线程，尝试启用
          const isCrossOriginIsolatedEnv = typeof window !== 'undefined' && window.crossOriginIsolated;
          if (isCrossOriginIsolatedEnv && numThreads > 1) {
            sessionOption.extra.session.numThreads = numThreads;
            console.log(`使用多线程WASM，线程数: ${numThreads}`);
          }
          model.current = new window.NennWeb.Seg(modelurl, configUrl, sessionOption);
          console.log('模型2加载完成');
        } catch (error) {
          console.error('模型加载错误:', error);
          alert(`模型加载失败: ${error.message}`);
        }
      }
    };
    
    loadModel();
  }, [selectedModel]);
  
  // 获取摄像头权限
  const startCamera = async () => {
    try {
      // 停止之前的流
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      
      // 使用选择的分辨率和帧率请求摄像头
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          width: selectedResolution.width, 
          height: selectedResolution.height,
          frameRate: selectedFps
        } 
      });
      
      if (videoRef.current) {
        const video = videoRef.current;
        video.srcObject = stream;
        streamRef.current = stream; // 保存 stream 引用
        
        // 设置 video 元素的尺寸
        const trackSettings = stream.getVideoTracks()[0].getSettings();
        video.width = trackSettings.width || selectedResolution.width;
        video.height = trackSettings.height || selectedResolution.height;
        
        // 从 getUserMedia 的 stream 设置获取实际分辨率
        const width = trackSettings.width || selectedResolution.width;
        const height = trackSettings.height || selectedResolution.height;
        setResolution({ width, height });
      }
      setDisableBtn(false)
    } catch (err) {
      console.error('无法访问摄像头:', err);
      alert('无法访问摄像头，请确保已授予权限\n' + err.message);
    }
  };
  
  // 当分辨率或帧率改变时，重新启动摄像头（仅在非激活状态）
  useEffect(() => {
    if (videoRef.current && videoRef.current.srcObject && !isActive) {
      startCamera();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedResolution.width, selectedResolution.height, selectedFps]);

  const stopSegmentation = async () => {
    setIsActive(false);
  }

  const urlToMat = async (url) => {
    return new Promise((resolve, reject) => {
      // 1. 创建Image对象加载图片
      const img = new Image();
      img.crossOrigin = 'anonymous'; // 允许跨域
      img.onload = () => {
        try {
          // 2. 创建Canvas，绘制图片获取像素数据
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0); // 绘制完整图片
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height); // RGBA格式

          // 3. 转换为OpenCV Mat（RGBA→BGR，符合OpenCV默认格式）
          const cv = window.cv; // 从全局获取OpenCV实例
          const rgbaMat = cv.matFromImageData(imageData); // 先转RGBA格式Mat
          const bgrMat = new cv.Mat(); // 最终输出BGR格式Mat（OpenCV常用）
          cv.cvtColor(rgbaMat, bgrMat, cv.COLOR_RGBA2BGR); // 格式转换

          rgbaMat.delete(); // 释放临时Mat，避免内存泄漏
          resolve(bgrMat);
        } catch (err) {
          reject(new Error(`Mat转换失败: ${err.message}`));
        }
      };
      img.onerror = (err) => reject(new Error(`图片加载失败: ${err}`));
      img.src = url;
    });
  };

  const handleConvert = async (imageUrl) => {
      const mat = await urlToMat(imageUrl);
      bgimg.current = mat
  };

  const handleLocalBackgroundChange = async (event) => {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    if (localBackgroundPreview) {
      URL.revokeObjectURL(localBackgroundPreview);
    }
    setLocalBackgroundPreview(objectUrl);
    setSelectedBackground('local');
    await handleConvert(objectUrl);
  };

  const handleLocalBackgroundClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  useEffect(()=> {
    if (selectedBackground === 'local') {
      if (localBackgroundPreview) {
        handleConvert(localBackgroundPreview);
      } else {
        bgimg.current = null;
      }
      return;
    }
    for(let i = 0; i < backgroundOptions.length; i++){
      if(backgroundOptions[i].id == selectedBackground){
        if(backgroundOptions[i].url != ""){
          handleConvert(backgroundOptions[i].url)
        }else{
          bgimg.current = null
        }
      }
    }
  }, [selectedBackground, localBackgroundPreview])

  useEffect(() => {
    return () => {
      if (localBackgroundPreview) {
        URL.revokeObjectURL(localBackgroundPreview);
      }
    };
  }, [localBackgroundPreview]);

  const inferVideo = () => {
    if (!videoRef.current || !canvasRef.current || !isActive) return;
      const video = videoRef.current;
      const canvas = canvasRef.current;
      
      try {
        if (!model.current) {
          console.warn('模型未加载，等待模型加载...');
          setTimeout(() => {if(isActive) inferVideo()}, 100);
          return;
        }
        
        // 检查视频尺寸是否有效
        const videoWidth = video.videoWidth || video.width;
        const videoHeight = video.videoHeight || video.height;
        
        if (!videoWidth || !videoHeight || videoWidth === 0 || videoHeight === 0) {
          // 视频尚未准备好，等待一下再重试
          setTimeout(() => {if(isActive) inferVideo()}, 100);
          return;
        }
        
        if (imgRGBA.current) {
            imgRGBA.current.delete()
        }
        imgRGBA.current = new window.cv.Mat(
          videoHeight,
          videoWidth,
          window.cv.CV_8UC4         // 类型：8位无符号整数，4通道（RGBA）
        );
        let cap = new window.cv.VideoCapture(video);
        cap.read(imgRGBA.current)
        inferImage().then(()=>{
            if (result.current && result.current.blendedImg && !result.current.blendedImg.isDeleted()) {
              window.cv.imshow(canvas, result.current.blendedImg)
              setTimeout(() => {if(isActive) inferVideo()}, 0);
            } else {
              console.error('推理结果无效');
              setTimeout(() => {if(isActive) inferVideo()}, 100);
            }
        }).catch((error) => {
          console.error('推理错误:', error);
          setTimeout(() => {if(isActive) inferVideo()}, 100);
        })
      } catch (error) {
        console.error('视频处理错误:', error);
        setTimeout(() => {if(isActive) inferVideo()}, 100);
      }
  }

  const inferImage = async () => {
      if (!model.current) {
        throw new Error('模型未加载');
      }
      if (!imgRGBA.current || imgRGBA.current.isDeleted()) {
        throw new Error('输入图像无效');
      }
      
      if(result.current){
          result.current.delete()
      }
      const startTime = performance.now();
      result.current = await model.current.infer(imgRGBA.current, bgcolor.current, bgimg.current);
      const endTime = performance.now();
      const currentLatency = endTime - startTime;
      
      // 累加延迟数据
      latencySum.current += currentLatency;
      latencyCount.current += 1;
      
      // 从结果中获取推理和后处理时长
      if (result.current && result.current._timing) {
        runTimeSum.current += result.current._timing.run;
        runTimeCount.current += 1;
        postprocessTimeSum.current += result.current._timing.postprocess;
        postprocessTimeCount.current += 1;
      }
      
      // 每2秒更新一次显示
      const now = Date.now();
      if (timingLastUpdateTime.current === 0) {
        timingLastUpdateTime.current = now;
      }
      
      const elapsed = (now - timingLastUpdateTime.current) / 1000; // 转换为秒
      if (elapsed >= 2.0) {
        // 计算平均延迟
        if (latencyCount.current > 0) {
          const avgLatency = latencySum.current / latencyCount.current;
          setLatency(Math.round(avgLatency * 10) / 10); // 保留一位小数
        }
        
        // 计算平均推理时长
        if (runTimeCount.current > 0) {
          const avgRunTime = runTimeSum.current / runTimeCount.current;
          setRunTime(Math.round(avgRunTime * 10) / 10); // 保留一位小数
        }
        
        // 计算平均后处理时长
        if (postprocessTimeCount.current > 0) {
          const avgPostprocessTime = postprocessTimeSum.current / postprocessTimeCount.current;
          setPostprocessTime(Math.round(avgPostprocessTime * 10) / 10); // 保留一位小数
        }
        
        // 重置统计
        latencySum.current = 0;
        latencyCount.current = 0;
        runTimeSum.current = 0;
        runTimeCount.current = 0;
        postprocessTimeSum.current = 0;
        postprocessTimeCount.current = 0;
        timingLastUpdateTime.current = now;
      }
  }

  useEffect(()=>{
    if(videoRef.current){
      const video = videoRef.current;
      // 更新分辨率显示（使用 videoWidth 和 videoHeight 获取实际视频分辨率）
      const width = video.videoWidth || video.width || 0;
      const height = video.videoHeight || video.height || 0;
      setResolution({ width, height });
      
      if(canvasRef.current){
        const canvas = canvasRef.current;
        canvas.width = width;
        canvas.height = height;
      }
    }
  },[isActive])

  useEffect(() => {
  // 正则匹配 rgba 括号内的所有数字（支持整数、小数）
  const regex = /rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/;
  const match = selectedColor.match(regex);

  if (match) {
    // 提取匹配结果，转为数字数组（跳过第0项匹配的完整字符串）
    const arr = match.slice(1).map(item => Number(item));
    bgcolor.current = arr
  }
}, [selectedColor]);
  
  // 开始分割处理
  const startSegmentation = async () => {
      setIsActive(true);
      // 重置统计
      latencySum.current = 0;
      latencyCount.current = 0;
      runTimeSum.current = 0;
      runTimeCount.current = 0;
      postprocessTimeSum.current = 0;
      postprocessTimeCount.current = 0;
      timingLastUpdateTime.current = 0;
      // 更新分辨率（从 stream 获取）
      if (streamRef.current) {
        const trackSettings = streamRef.current.getVideoTracks()[0].getSettings();
        const width = trackSettings.width || 720;
        const height = trackSettings.height || 480;
        setResolution({ width, height });
      }
      inferVideo(true)
  };
  
  // 切换模型时重新启动分割（保持不变）
  useEffect(() => {
    if (isActive) {
      startSegmentation();
    }
  }, [isActive]);
  
  // 组件卸载时清理（保持不变）
  useEffect(() => {
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
    };
  }, []);
  // 渲染部分（保持不变）
  return (
    <Container>  
      <ControlPanel>
        <TopRow>
          <Button disabled={disableBtn} onClick={isActive ? stopSegmentation : startSegmentation}>
            {isActive ? '停止' : '开始'}
          </Button>
          
          <ModelSelector>
            <span>选择分割模型:</span>
            <RadioGroup>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  name="model"
                  value="model1"
                  checked={selectedModel === 'model1'}
                  onChange={() => setSelectedModel('model1')}
                  disabled={isActive}
                />
                <RadioText>模型1</RadioText>
              </RadioLabel>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  name="model"
                  value="model2"
                  checked={selectedModel === 'model2'}
                  onChange={() => setSelectedModel('model2')}
                  disabled={isActive}
                />
                <RadioText>轻量模型</RadioText>
              </RadioLabel>
               <RadioLabel>
                <RadioInput
                  type="radio"
                  name="model"
                  value="model3"
                  checked={selectedModel === 'model3'}
                  onChange={() => setSelectedModel('model3')}
                  disabled={isActive}
                />
                <RadioText>轻量模型(优化1)</RadioText>
              </RadioLabel>
               <RadioLabel>
                <RadioInput
                  type="radio"
                  name="model"
                  value="model4"
                  checked={selectedModel === 'model4'}
                  onChange={() => setSelectedModel('model4')}
                  disabled={isActive}
                />
               <RadioText>轻量模型(优化2)</RadioText>
              </RadioLabel>
            </RadioGroup>
          </ModelSelector>

          <ResolutionSelector>
            <span>分辨率:</span>
            <RadioGroup>
              {resolutionOptions.map(res => (
                <RadioLabel key={`${res.width}x${res.height}`}>
                  <RadioInput
                    type="radio"
                    name="resolution"
                    value={`${res.width}x${res.height}`}
                    checked={selectedResolution.width === res.width && selectedResolution.height === res.height}
                    onChange={() => setSelectedResolution({ width: res.width, height: res.height })}
                    disabled={isActive}
                  />
                  <RadioText>{res.label}</RadioText>
                </RadioLabel>
              ))}
            </RadioGroup>
          </ResolutionSelector>
        </TopRow>
        
        <BottomRow>
          <ColorSelector>
            <span>选择颜色:</span>
            {colorOptions.map(color => (
              <ColorButton
                key={color.id}
                style={{ backgroundColor: color.value }}
                className={selectedColor === color.value ? 'selected' : ''}
                onClick={() => setSelectedColor(color.value)}
                disabled={!isActive}
                title={color.label}
              />
            ))}
          </ColorSelector>
          
          <BackgroundSelector>
            <span>背景图片:</span>
            {backgroundOptions.map(bg => (
              bg.url ? (
                <BackgroundThumbnail
                  key={bg.id}
                  src={bg.url}
                  className={selectedBackground === bg.id ? 'selected' : ''}
                  onClick={() => setSelectedBackground(bg.id)}
                  alt={bg.label}
                />
              ) : (
                <BackgroundPlaceholder
                  key={bg.id}
                  className={selectedBackground === bg.id ? 'selected' : ''}
                  onClick={() => setSelectedBackground(bg.id)}
                  title={bg.label}
                >
                  无
                </BackgroundPlaceholder>
              )
            ))}

            <LocalUploadButton
              type="button"
              className={selectedBackground === 'local' ? 'selected' : ''}
              onClick={handleLocalBackgroundClick}
              $preview={localBackgroundPreview}
              title="上传本地背景"
            >
              {!localBackgroundPreview && '本地图片'}
            </LocalUploadButton>
            <LocalUploadHint>上传本地图片</LocalUploadHint>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleLocalBackgroundChange}
            />
          </BackgroundSelector>
        </BottomRow>
      </ControlPanel>
      
      <VideoWrapper>
        <VideoContainer>
          <video 
            ref={videoRef} 
            autoPlay 
            playsInline 
            className={`${isActive ? 'hidden-video' : ''}`}  
          />
          {isActive ? <canvas ref={canvasRef} className="result-canvas" />: undefined}
        </VideoContainer>
        
        {isActive && (
          <StatsDisplay>
            <StatItem>延迟: {latency}ms</StatItem>
            <StatItem>推理: {runTime}ms</StatItem>
            <StatItem>后处理: {postprocessTime}ms</StatItem>
            <StatItem>分辨率: {resolution.width}×{resolution.height}</StatItem>
          </StatsDisplay>
        )}
      </VideoWrapper>
    </Container>
  );
};

// 样式组件（保持不变）
const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  text-align: center;
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 30px;
`;

const ControlPanel = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'variant',
})`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
  
  background-color: ${props => 
    props.variant === 'selected' ? '#4CAF50' : 
    props.disabled ? '#cccccc' : '#2196F3'};
  color: white;
  
  &:hover:not(:disabled) {
    background-color: ${props => 
      props.variant === 'selected' ? '#45a049' : '#0b7dda'};
  }
  
  &:disabled {
    cursor: not-allowed;
  }
`;

const ModelSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
  span {
    color: #666;
    font-weight: 500;
  }
`;

const ColorSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  
  span {
    color: #666;
    font-weight: 500;
  }
`;

const ColorButton = styled.button`
  width: 30px;
  height: 30px;
  border: 2px solid transparent;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &.selected {
    border-color: #333;
    transform: scale(1.2);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const BackgroundSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  
  span {
    color: #666;
    font-weight: 500;
  }
`;

const BackgroundThumbnail = styled.img`
  width: 60px;
  height: 40px;
  object-fit: cover;
  border: 2px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &.selected {
    border-color: #2196F3;
    box-shadow: 0 0 0 2px white, 0 0 0 4px #2196F3;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const BackgroundPlaceholder = styled.div`
  width: 60px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: #e0e0e0;
  color: #666;
  font-size: 12px;
  
  &.selected {
    border-color: #2196F3;
    box-shadow: 0 0 0 2px white, 0 0 0 4px #2196F3;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const LocalUploadButton = styled.button`
  width: 60px;
  height: 40px;
  border: 2px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: #e0e0e0;
  color: #666;
  font-size: 12px;
  background-image: ${props => props.$preview ? `url(${props.$preview})` : 'none'};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &.selected {
    border-color: #2196F3;
    box-shadow: 0 0 0 2px white, 0 0 0 4px #2196F3;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const LocalUploadHint = styled.span`
  font-size: 12px;
  color: #888;
  margin-left: 6px;
`;

const TopRow = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  align-items: center;
  justify-content: flex-start;
`;

const BottomRow = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  align-items: center;
  justify-content: flex-start;
`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
`;

const OptionRow = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
`;

const OptionCard = styled.div`
  flex: 1;
  min-width: 280px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.06);
`;

const OptionTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  text-align: left;
`;

const VideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
`;

const VideoContainer = styled.div`
  position: relative;
  width: 960px;
  height: 640px;
  margin: 0 auto;
  border: 2px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background-color: #000;
  .hidden-video {
    display: none;
  }
  .result-canvas {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
  video {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const StatsDisplay = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 12px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 180px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
`;

const StatItem = styled.div`
  line-height: 1.5;
  white-space: nowrap;
`;

const ResolutionSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  
  span {
    color: #666;
    font-weight: 500;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  
  &:has(input:disabled) {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const RadioInput = styled.input`
  cursor: pointer;
  
  &:disabled {
    cursor: not-allowed;
  }
`;

const RadioText = styled.span`
  color: #333;
  font-size: 14px;
  user-select: none;
`;

export default App;