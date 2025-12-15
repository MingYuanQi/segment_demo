var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
(function(_0x58adeb, _0x34e9e5) {
  const _0x3a98a7 = _0x318a, _0x2013ee = _0x58adeb();
  while (!![]) {
    try {
      const _0x5456a7 = -parseInt(_0x3a98a7(308)) / 1 * (-parseInt(_0x3a98a7(307)) / 2) + parseInt(_0x3a98a7(315)) / 3 * (-parseInt(_0x3a98a7(317)) / 4) + -parseInt(_0x3a98a7(309)) / 5 * (-parseInt(_0x3a98a7(306)) / 6) + -parseInt(_0x3a98a7(314)) / 7 * (parseInt(_0x3a98a7(303)) / 8) + -parseInt(_0x3a98a7(313)) / 9 + parseInt(_0x3a98a7(310)) / 10 * (-parseInt(_0x3a98a7(305)) / 11) + parseInt(_0x3a98a7(312)) / 12 * (parseInt(_0x3a98a7(304)) / 13);
      if (_0x5456a7 === _0x34e9e5) break;
      else _0x2013ee["push"](_0x2013ee["shift"]());
    } catch (_0x3ec37e) {
      _0x2013ee["push"](_0x2013ee["shift"]());
    }
  }
})(_0xa079, 427408);
let isDebugMode = !![];
function error(..._0xd87345) {
  const _0x318923 = _0x318a;
  isDebugMode && console[_0x318923(311)](..._0xd87345);
}
function _0x318a(_0x31f4b1, _0x577068) {
  const _0xa07972 = _0xa079();
  return _0x318a = function(_0x318ad1, _0x59dbbb) {
    _0x318ad1 = _0x318ad1 - 301;
    let _0x4760d2 = _0xa07972[_0x318ad1];
    return _0x4760d2;
  }, _0x318a(_0x31f4b1, _0x577068);
}
function info(..._0x9bd17c) {
  const _0x4fca11 = _0x318a;
  isDebugMode && console[_0x4fca11(316)](..._0x9bd17c);
}
function _0xa079() {
  const _0x173a24 = ["2744552GyXOBN", "187005CVGsOv", "18601dNzRhm", "6dCBoxA", "323486yBlDyR", "1hawAZX", "3204210BBOwGR", "820lONpXE", "error", "396gcvtFn", "2081934WFCwxA", "7MufxQP", "31575qOLzXe", "info", "52AWpPFe", "warn", "log"];
  _0xa079 = function() {
    return _0x173a24;
  };
  return _0xa079();
}
var cv = (() => {
  var _a;
  var _scriptName = typeof document != "undefined" ? (_a = document.currentScript) == null ? void 0 : _a.src : void 0;
  if (typeof __filename != "undefined")
    _scriptName = _scriptName || __filename;
  return function(cv2) {
    cv2 = cv2 || {};
    var Module = typeof cv2 !== "undefined" ? cv2 : {};
    var ENVIRONMENT_IS_WEB = typeof window == "object";
    var ENVIRONMENT_IS_WORKER = typeof WorkerGlobalScope != "undefined";
    var ENVIRONMENT_IS_NODE = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string" && process.type != "renderer";
    var moduleOverrides = Object.assign({}, Module);
    var thisProgram = "./this.program";
    var quit_ = (status, toThrow) => {
      throw toThrow;
    };
    var scriptDirectory = "";
    function locateFile(path) {
      if (Module["locateFile"]) {
        return Module["locateFile"](path, scriptDirectory);
      }
      return scriptDirectory + path;
    }
    var readAsync, readBinary;
    if (ENVIRONMENT_IS_NODE) {
      var fs = require("fs");
      require("path");
      scriptDirectory = __dirname + "/";
      readBinary = (filename) => {
        filename = isFileURI(filename) ? new URL(filename) : filename;
        var ret = fs.readFileSync(filename);
        return ret;
      };
      readAsync = async (filename, binary = true) => {
        filename = isFileURI(filename) ? new URL(filename) : filename;
        var ret = fs.readFileSync(filename, binary ? void 0 : "utf8");
        return ret;
      };
      if (!Module["thisProgram"] && process.argv.length > 1) {
        thisProgram = process.argv[1].replace(/\\/g, "/");
      }
      process.argv.slice(2);
      quit_ = (status, toThrow) => {
        process.exitCode = status;
        throw toThrow;
      };
    } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
      if (ENVIRONMENT_IS_WORKER) {
        scriptDirectory = self.location.href;
      } else if (typeof document != "undefined" && document.currentScript) {
        scriptDirectory = document.currentScript.src;
      } else {
        scriptDirectory = import.meta.url;
      }
      if (_scriptName) {
        scriptDirectory = _scriptName;
      }
      if (scriptDirectory.startsWith("blob:")) {
        scriptDirectory = "";
      } else {
        scriptDirectory = scriptDirectory.substr(
          0,
          scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1
        );
      }
      {
        if (ENVIRONMENT_IS_WORKER) {
          readBinary = (url) => {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, false);
            xhr.responseType = "arraybuffer";
            xhr.send(null);
            return new Uint8Array(xhr.response);
          };
        }
        readAsync = async (url) => {
          if (isFileURI(url)) {
            return new Promise((resolve, reject) => {
              var xhr = new XMLHttpRequest();
              xhr.open("GET", url, true);
              xhr.responseType = "arraybuffer";
              xhr.onload = () => {
                if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
                  resolve(xhr.response);
                  return;
                }
                reject(xhr.status);
              };
              xhr.onerror = reject;
              xhr.send(null);
            });
          }
          var response = await fetch(url, { credentials: "same-origin" });
          if (response.ok) {
            return response.arrayBuffer();
          }
          throw new Error(response.status + " : " + response.url);
        };
      }
    } else ;
    var out = Module["print"] || console.log.bind(console);
    var err = Module["printErr"] || console.error.bind(console);
    Object.assign(Module, moduleOverrides);
    moduleOverrides = null;
    if (Module["arguments"]) Module["arguments"];
    if (Module["thisProgram"]) thisProgram = Module["thisProgram"];
    var wasmBinary = Module["wasmBinary"];
    var wasmMemory;
    var ABORT = false;
    var EXITSTATUS;
    var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
    function updateMemoryViews() {
      var b = wasmMemory.buffer;
      Module["HEAP8"] = HEAP8 = new Int8Array(b);
      Module["HEAP16"] = HEAP16 = new Int16Array(b);
      Module["HEAPU8"] = HEAPU8 = new Uint8Array(b);
      Module["HEAPU16"] = HEAPU16 = new Uint16Array(b);
      Module["HEAP32"] = HEAP32 = new Int32Array(b);
      Module["HEAPU32"] = HEAPU32 = new Uint32Array(b);
      Module["HEAPF32"] = HEAPF32 = new Float32Array(b);
      Module["HEAPF64"] = HEAPF64 = new Float64Array(b);
    }
    var __ATPRERUN__ = [];
    var __ATINIT__ = [];
    var __ATPOSTRUN__ = [];
    function preRun() {
      if (Module["preRun"]) {
        if (typeof Module["preRun"] == "function")
          Module["preRun"] = [Module["preRun"]];
        while (Module["preRun"].length) {
          addOnPreRun(Module["preRun"].shift());
        }
      }
      callRuntimeCallbacks(__ATPRERUN__);
    }
    function initRuntime() {
      if (!Module["noFSInit"] && !FS.initialized) FS.init();
      FS.ignorePermissions = false;
      callRuntimeCallbacks(__ATINIT__);
    }
    function postRun() {
      if (Module["postRun"]) {
        if (typeof Module["postRun"] == "function")
          Module["postRun"] = [Module["postRun"]];
        while (Module["postRun"].length) {
          addOnPostRun(Module["postRun"].shift());
        }
      }
      callRuntimeCallbacks(__ATPOSTRUN__);
    }
    function addOnPreRun(cb) {
      __ATPRERUN__.unshift(cb);
    }
    function addOnInit(cb) {
      __ATINIT__.unshift(cb);
    }
    function addOnPostRun(cb) {
      __ATPOSTRUN__.unshift(cb);
    }
    var runDependencies = 0;
    var dependenciesFulfilled = null;
    function addRunDependency(id) {
      var _a2;
      runDependencies++;
      (_a2 = Module["monitorRunDependencies"]) == null ? void 0 : _a2.call(Module, runDependencies);
    }
    function removeRunDependency(id) {
      var _a2;
      runDependencies--;
      (_a2 = Module["monitorRunDependencies"]) == null ? void 0 : _a2.call(Module, runDependencies);
      if (runDependencies == 0) {
        if (dependenciesFulfilled) {
          var callback = dependenciesFulfilled;
          dependenciesFulfilled = null;
          callback();
        }
      }
    }
    function abort(what) {
      var _a2;
      (_a2 = Module["onAbort"]) == null ? void 0 : _a2.call(Module, what);
      what = "Aborted(" + what + ")";
      err(what);
      ABORT = true;
      what += ". Build with -sASSERTIONS for more info.";
      var e = new WebAssembly.RuntimeError(what);
      throw e;
    }
    var dataURIPrefix = "data:application/octet-stream;base64,";
    var isDataURI = (filename) => filename.startsWith(dataURIPrefix);
    var isFileURI = (filename) => filename.startsWith("file://");
    function findWasmBinary() {
      var f = "opencv_js.wasm";
      if (!isDataURI(f)) {
        return locateFile(f);
      }
      return f;
    }
    var wasmBinaryFile;
    function getBinarySync(file) {
      if (file == wasmBinaryFile && wasmBinary) {
        return new Uint8Array(wasmBinary);
      }
      if (readBinary) {
        return readBinary(file);
      }
      throw "both async and sync fetching of the wasm failed";
    }
    async function getWasmBinary(binaryFile) {
      if (!wasmBinary) {
        try {
          var response = await readAsync(binaryFile);
          return new Uint8Array(response);
        } catch {
        }
      }
      return getBinarySync(binaryFile);
    }
    async function instantiateArrayBuffer(binaryFile, imports) {
      try {
        var binary = await getWasmBinary(binaryFile);
        var instance = await WebAssembly.instantiate(binary, imports);
        return instance;
      } catch (reason) {
        err(`failed to asynchronously prepare wasm: ${reason}`);
        abort(reason);
      }
    }
    async function instantiateAsync(binary, binaryFile, imports) {
      if (!binary && typeof WebAssembly.instantiateStreaming == "function" && !isDataURI(binaryFile) && !isFileURI(binaryFile) && !ENVIRONMENT_IS_NODE && typeof fetch == "function") {
        try {
          var response = fetch(binaryFile, { credentials: "same-origin" });
          var instantiationResult = await WebAssembly.instantiateStreaming(
            response,
            imports
          );
          return instantiationResult;
        } catch (reason) {
          err(`wasm streaming compile failed: ${reason}`);
          err("falling back to ArrayBuffer instantiation");
        }
      }
      return instantiateArrayBuffer(binaryFile, imports);
    }
    function getWasmImports() {
      return { a: wasmImports };
    }
    async function createWasm() {
      function receiveInstance(instance, module) {
        wasmExports = instance.exports;
        wasmMemory = wasmExports["_"];
        updateMemoryViews();
        wasmTable = wasmExports["ba"];
        addOnInit(wasmExports["$"]);
        removeRunDependency();
        return wasmExports;
      }
      addRunDependency();
      function receiveInstantiationResult(result2) {
        receiveInstance(result2["instance"]);
      }
      var info2 = getWasmImports();
      if (Module["instantiateWasm"]) {
        try {
          return Module["instantiateWasm"](info2, receiveInstance);
        } catch (e) {
          err(`Module.instantiateWasm callback failed with error: ${e}`);
        }
      }
      wasmBinaryFile ?? (wasmBinaryFile = findWasmBinary());
      try {
        var result = await instantiateAsync(wasmBinary, wasmBinaryFile, info2);
        receiveInstantiationResult(result);
        return result;
      } catch (e) {
        return;
      }
    }
    var tempDouble;
    var tempI64;
    var handleException = (e) => {
      if (e instanceof ExitStatus || e == "unwind") {
        return EXITSTATUS;
      }
      quit_(1, e);
    };
    class ExitStatus {
      constructor(status) {
        __publicField(this, "name", "ExitStatus");
        this.message = `Program terminated with exit(${status})`;
        this.status = status;
      }
    }
    var maybeExit = () => {
    };
    var callUserCallback = (func) => {
      if (ABORT) {
        return;
      }
      try {
        func();
        maybeExit();
      } catch (e) {
        handleException(e);
      }
    };
    var safeSetTimeout = (func, timeout) => setTimeout(() => {
      callUserCallback(func);
    }, timeout);
    var preloadPlugins = Module["preloadPlugins"] || [];
    var Browser = {
      useWebGL: false,
      isFullscreen: false,
      pointerLock: false,
      moduleContextCreatedCallbacks: [],
      workers: [],
      preloadedImages: {},
      preloadedAudios: {},
      init() {
        if (Browser.initted) return;
        Browser.initted = true;
        var imagePlugin = {};
        imagePlugin["canHandle"] = function imagePlugin_canHandle(name) {
          return !Module["noImageDecoding"] && /\.(jpg|jpeg|png|bmp|webp)$/i.test(name);
        };
        imagePlugin["handle"] = function imagePlugin_handle(byteArray, name, onload, onerror) {
          var b = new Blob([byteArray], { type: Browser.getMimetype(name) });
          if (b.size !== byteArray.length) {
            b = new Blob([new Uint8Array(byteArray).buffer], {
              type: Browser.getMimetype(name)
            });
          }
          var url = URL.createObjectURL(b);
          var img = new Image();
          img.onload = () => {
            var canvas2 = document.createElement("canvas");
            canvas2.width = img.width;
            canvas2.height = img.height;
            var ctx = canvas2.getContext("2d");
            ctx.drawImage(img, 0, 0);
            Browser.preloadedImages[name] = canvas2;
            URL.revokeObjectURL(url);
            onload == null ? void 0 : onload(byteArray);
          };
          img.onerror = (event) => {
            err(`Image ${url} could not be decoded`);
            onerror == null ? void 0 : onerror();
          };
          img.src = url;
        };
        preloadPlugins.push(imagePlugin);
        var audioPlugin = {};
        audioPlugin["canHandle"] = function audioPlugin_canHandle(name) {
          return !Module["noAudioDecoding"] && name.substr(-4) in { ".ogg": 1, ".wav": 1, ".mp3": 1 };
        };
        audioPlugin["handle"] = function audioPlugin_handle(byteArray, name, onload, onerror) {
          var done = false;
          function finish(audio2) {
            if (done) return;
            done = true;
            Browser.preloadedAudios[name] = audio2;
            onload == null ? void 0 : onload(byteArray);
          }
          var b = new Blob([byteArray], { type: Browser.getMimetype(name) });
          var url = URL.createObjectURL(b);
          var audio = new Audio();
          audio.addEventListener(
            "canplaythrough",
            () => finish(audio),
            false
          );
          audio.onerror = function audio_onerror(event) {
            if (done) return;
            err(
              `warning: browser could not fully decode audio ${name}, trying slower base64 approach`
            );
            function encode64(data) {
              var BASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
              var PAD = "=";
              var ret = "";
              var leftchar = 0;
              var leftbits = 0;
              for (var i = 0; i < data.length; i++) {
                leftchar = leftchar << 8 | data[i];
                leftbits += 8;
                while (leftbits >= 6) {
                  var curr = leftchar >> leftbits - 6 & 63;
                  leftbits -= 6;
                  ret += BASE[curr];
                }
              }
              if (leftbits == 2) {
                ret += BASE[(leftchar & 3) << 4];
                ret += PAD + PAD;
              } else if (leftbits == 4) {
                ret += BASE[(leftchar & 15) << 2];
                ret += PAD;
              }
              return ret;
            }
            audio.src = "data:audio/x-" + name.substr(-3) + ";base64," + encode64(byteArray);
            finish(audio);
          };
          audio.src = url;
          safeSetTimeout(() => {
            finish(audio);
          }, 1e4);
        };
        preloadPlugins.push(audioPlugin);
        function pointerLockChange() {
          Browser.pointerLock = document["pointerLockElement"] === Module["canvas"] || document["mozPointerLockElement"] === Module["canvas"] || document["webkitPointerLockElement"] === Module["canvas"] || document["msPointerLockElement"] === Module["canvas"];
        }
        var canvas = Module["canvas"];
        if (canvas) {
          canvas.requestPointerLock = canvas["requestPointerLock"] || canvas["mozRequestPointerLock"] || canvas["webkitRequestPointerLock"] || canvas["msRequestPointerLock"] || (() => {
          });
          canvas.exitPointerLock = document["exitPointerLock"] || document["mozExitPointerLock"] || document["webkitExitPointerLock"] || document["msExitPointerLock"] || (() => {
          });
          canvas.exitPointerLock = canvas.exitPointerLock.bind(document);
          document.addEventListener(
            "pointerlockchange",
            pointerLockChange,
            false
          );
          document.addEventListener(
            "mozpointerlockchange",
            pointerLockChange,
            false
          );
          document.addEventListener(
            "webkitpointerlockchange",
            pointerLockChange,
            false
          );
          document.addEventListener(
            "mspointerlockchange",
            pointerLockChange,
            false
          );
          if (Module["elementPointerLock"]) {
            canvas.addEventListener(
              "click",
              (ev) => {
                if (!Browser.pointerLock && Module["canvas"].requestPointerLock) {
                  Module["canvas"].requestPointerLock();
                  ev.preventDefault();
                }
              },
              false
            );
          }
        }
      },
      createContext(canvas, useWebGL, setInModule, webGLContextAttributes) {
        if (useWebGL && Module["ctx"] && canvas == Module["canvas"])
          return Module["ctx"];
        var ctx;
        var contextHandle;
        if (useWebGL) {
          var contextAttributes = {
            antialias: false,
            alpha: false,
            majorVersion: 1
          };
          if (webGLContextAttributes) {
            for (var attribute in webGLContextAttributes) {
              contextAttributes[attribute] = webGLContextAttributes[attribute];
            }
          }
          if (typeof GL != "undefined") {
            contextHandle = GL.createContext(canvas, contextAttributes);
            if (contextHandle) {
              ctx = GL.getContext(contextHandle).GLctx;
            }
          }
        } else {
          ctx = canvas.getContext("2d");
        }
        if (!ctx) return null;
        if (setInModule) {
          Module["ctx"] = ctx;
          if (useWebGL) GL.makeContextCurrent(contextHandle);
          Browser.useWebGL = useWebGL;
          Browser.moduleContextCreatedCallbacks.forEach(
            (callback) => callback()
          );
          Browser.init();
        }
        return ctx;
      },
      fullscreenHandlersInstalled: false,
      lockPointer: void 0,
      resizeCanvas: void 0,
      requestFullscreen(lockPointer, resizeCanvas) {
        Browser.lockPointer = lockPointer;
        Browser.resizeCanvas = resizeCanvas;
        if (typeof Browser.lockPointer == "undefined")
          Browser.lockPointer = true;
        if (typeof Browser.resizeCanvas == "undefined")
          Browser.resizeCanvas = false;
        var canvas = Module["canvas"];
        function fullscreenChange() {
          var _a2, _b;
          Browser.isFullscreen = false;
          var canvasContainer2 = canvas.parentNode;
          if ((document["fullscreenElement"] || document["mozFullScreenElement"] || document["msFullscreenElement"] || document["webkitFullscreenElement"] || document["webkitCurrentFullScreenElement"]) === canvasContainer2) {
            canvas.exitFullscreen = Browser.exitFullscreen;
            if (Browser.lockPointer) canvas.requestPointerLock();
            Browser.isFullscreen = true;
            if (Browser.resizeCanvas) {
              Browser.setFullscreenCanvasSize();
            } else {
              Browser.updateCanvasDimensions(canvas);
            }
          } else {
            canvasContainer2.parentNode.insertBefore(canvas, canvasContainer2);
            canvasContainer2.parentNode.removeChild(canvasContainer2);
            if (Browser.resizeCanvas) {
              Browser.setWindowedCanvasSize();
            } else {
              Browser.updateCanvasDimensions(canvas);
            }
          }
          (_a2 = Module["onFullScreen"]) == null ? void 0 : _a2.call(Module, Browser.isFullscreen);
          (_b = Module["onFullscreen"]) == null ? void 0 : _b.call(Module, Browser.isFullscreen);
        }
        if (!Browser.fullscreenHandlersInstalled) {
          Browser.fullscreenHandlersInstalled = true;
          document.addEventListener(
            "fullscreenchange",
            fullscreenChange,
            false
          );
          document.addEventListener(
            "mozfullscreenchange",
            fullscreenChange,
            false
          );
          document.addEventListener(
            "webkitfullscreenchange",
            fullscreenChange,
            false
          );
          document.addEventListener(
            "MSFullscreenChange",
            fullscreenChange,
            false
          );
        }
        var canvasContainer = document.createElement("div");
        canvas.parentNode.insertBefore(canvasContainer, canvas);
        canvasContainer.appendChild(canvas);
        canvasContainer.requestFullscreen = canvasContainer["requestFullscreen"] || canvasContainer["mozRequestFullScreen"] || canvasContainer["msRequestFullscreen"] || (canvasContainer["webkitRequestFullscreen"] ? () => canvasContainer["webkitRequestFullscreen"](
          Element["ALLOW_KEYBOARD_INPUT"]
        ) : null) || (canvasContainer["webkitRequestFullScreen"] ? () => canvasContainer["webkitRequestFullScreen"](
          Element["ALLOW_KEYBOARD_INPUT"]
        ) : null);
        canvasContainer.requestFullscreen();
      },
      exitFullscreen() {
        if (!Browser.isFullscreen) {
          return false;
        }
        var CFS = document["exitFullscreen"] || document["cancelFullScreen"] || document["mozCancelFullScreen"] || document["msExitFullscreen"] || document["webkitCancelFullScreen"] || (() => {
        });
        CFS.apply(document, []);
        return true;
      },
      safeSetTimeout(func, timeout) {
        return safeSetTimeout(func, timeout);
      },
      getMimetype(name) {
        return {
          jpg: "image/jpeg",
          jpeg: "image/jpeg",
          png: "image/png",
          bmp: "image/bmp",
          ogg: "audio/ogg",
          wav: "audio/wav",
          mp3: "audio/mpeg"
        }[name.substr(name.lastIndexOf(".") + 1)];
      },
      getUserMedia(func) {
        window.getUserMedia || (window.getUserMedia = navigator["getUserMedia"] || navigator["mozGetUserMedia"]);
        window.getUserMedia(func);
      },
      getMovementX(event) {
        return event["movementX"] || event["mozMovementX"] || event["webkitMovementX"] || 0;
      },
      getMovementY(event) {
        return event["movementY"] || event["mozMovementY"] || event["webkitMovementY"] || 0;
      },
      getMouseWheelDelta(event) {
        var delta = 0;
        switch (event.type) {
          case "DOMMouseScroll":
            delta = event.detail / 3;
            break;
          case "mousewheel":
            delta = event.wheelDelta / 120;
            break;
          case "wheel":
            delta = event.deltaY;
            switch (event.deltaMode) {
              case 0:
                delta /= 100;
                break;
              case 1:
                delta /= 3;
                break;
              case 2:
                delta *= 80;
                break;
              default:
                throw "unrecognized mouse wheel delta mode: " + event.deltaMode;
            }
            break;
          default:
            throw "unrecognized mouse wheel event: " + event.type;
        }
        return delta;
      },
      mouseX: 0,
      mouseY: 0,
      mouseMovementX: 0,
      mouseMovementY: 0,
      touches: {},
      lastTouches: {},
      calculateMouseCoords(pageX, pageY) {
        var rect = Module["canvas"].getBoundingClientRect();
        var cw = Module["canvas"].width;
        var ch = Module["canvas"].height;
        var scrollX = typeof window.scrollX != "undefined" ? window.scrollX : window.pageXOffset;
        var scrollY = typeof window.scrollY != "undefined" ? window.scrollY : window.pageYOffset;
        var adjustedX = pageX - (scrollX + rect.left);
        var adjustedY = pageY - (scrollY + rect.top);
        adjustedX = adjustedX * (cw / rect.width);
        adjustedY = adjustedY * (ch / rect.height);
        return { x: adjustedX, y: adjustedY };
      },
      setMouseCoords(pageX, pageY) {
        const { x, y } = Browser.calculateMouseCoords(pageX, pageY);
        Browser.mouseMovementX = x - Browser.mouseX;
        Browser.mouseMovementY = y - Browser.mouseY;
        Browser.mouseX = x;
        Browser.mouseY = y;
      },
      calculateMouseEvent(event) {
        if (Browser.pointerLock) {
          if (event.type != "mousemove" && "mozMovementX" in event) {
            Browser.mouseMovementX = Browser.mouseMovementY = 0;
          } else {
            Browser.mouseMovementX = Browser.getMovementX(event);
            Browser.mouseMovementY = Browser.getMovementY(event);
          }
          Browser.mouseX += Browser.mouseMovementX;
          Browser.mouseY += Browser.mouseMovementY;
        } else {
          if (event.type === "touchstart" || event.type === "touchend" || event.type === "touchmove") {
            var touch = event.touch;
            if (touch === void 0) {
              return;
            }
            var coords = Browser.calculateMouseCoords(
              touch.pageX,
              touch.pageY
            );
            if (event.type === "touchstart") {
              Browser.lastTouches[touch.identifier] = coords;
              Browser.touches[touch.identifier] = coords;
            } else if (event.type === "touchend" || event.type === "touchmove") {
              var last = Browser.touches[touch.identifier];
              last || (last = coords);
              Browser.lastTouches[touch.identifier] = last;
              Browser.touches[touch.identifier] = coords;
            }
            return;
          }
          Browser.setMouseCoords(event.pageX, event.pageY);
        }
      },
      resizeListeners: [],
      updateResizeListeners() {
        var canvas = Module["canvas"];
        Browser.resizeListeners.forEach(
          (listener) => listener(canvas.width, canvas.height)
        );
      },
      setCanvasSize(width, height, noUpdates) {
        var canvas = Module["canvas"];
        Browser.updateCanvasDimensions(canvas, width, height);
        if (!noUpdates) Browser.updateResizeListeners();
      },
      windowedWidth: 0,
      windowedHeight: 0,
      setFullscreenCanvasSize() {
        if (typeof SDL != "undefined") {
          var flags = HEAPU32[SDL.screen >> 2];
          flags = flags | 8388608;
          HEAP32[SDL.screen >> 2] = flags;
        }
        Browser.updateCanvasDimensions(Module["canvas"]);
        Browser.updateResizeListeners();
      },
      setWindowedCanvasSize() {
        if (typeof SDL != "undefined") {
          var flags = HEAPU32[SDL.screen >> 2];
          flags = flags & -8388609;
          HEAP32[SDL.screen >> 2] = flags;
        }
        Browser.updateCanvasDimensions(Module["canvas"]);
        Browser.updateResizeListeners();
      },
      updateCanvasDimensions(canvas, wNative, hNative) {
        if (wNative && hNative) {
          canvas.widthNative = wNative;
          canvas.heightNative = hNative;
        } else {
          wNative = canvas.widthNative;
          hNative = canvas.heightNative;
        }
        var w = wNative;
        var h = hNative;
        if (Module["forcedAspectRatio"] && Module["forcedAspectRatio"] > 0) {
          if (w / h < Module["forcedAspectRatio"]) {
            w = Math.round(h * Module["forcedAspectRatio"]);
          } else {
            h = Math.round(w / Module["forcedAspectRatio"]);
          }
        }
        if ((document["fullscreenElement"] || document["mozFullScreenElement"] || document["msFullscreenElement"] || document["webkitFullscreenElement"] || document["webkitCurrentFullScreenElement"]) === canvas.parentNode && typeof screen != "undefined") {
          var factor = Math.min(screen.width / w, screen.height / h);
          w = Math.round(w * factor);
          h = Math.round(h * factor);
        }
        if (Browser.resizeCanvas) {
          if (canvas.width != w) canvas.width = w;
          if (canvas.height != h) canvas.height = h;
          if (typeof canvas.style != "undefined") {
            canvas.style.removeProperty("width");
            canvas.style.removeProperty("height");
          }
        } else {
          if (canvas.width != wNative) canvas.width = wNative;
          if (canvas.height != hNative) canvas.height = hNative;
          if (typeof canvas.style != "undefined") {
            if (w != wNative || h != hNative) {
              canvas.style.setProperty("width", w + "px", "important");
              canvas.style.setProperty("height", h + "px", "important");
            } else {
              canvas.style.removeProperty("width");
              canvas.style.removeProperty("height");
            }
          }
        }
      }
    };
    var callRuntimeCallbacks = (callbacks) => {
      while (callbacks.length > 0) {
        callbacks.shift()(Module);
      }
    };
    Module["noExitRuntime"] || true;
    class ExceptionInfo {
      constructor(excPtr) {
        this.excPtr = excPtr;
        this.ptr = excPtr - 24;
      }
      set_type(type) {
        HEAPU32[this.ptr + 4 >> 2] = type;
      }
      get_type() {
        return HEAPU32[this.ptr + 4 >> 2];
      }
      set_destructor(destructor) {
        HEAPU32[this.ptr + 8 >> 2] = destructor;
      }
      get_destructor() {
        return HEAPU32[this.ptr + 8 >> 2];
      }
      set_caught(caught) {
        caught = caught ? 1 : 0;
        HEAP8[this.ptr + 12] = caught;
      }
      get_caught() {
        return HEAP8[this.ptr + 12] != 0;
      }
      set_rethrown(rethrown) {
        rethrown = rethrown ? 1 : 0;
        HEAP8[this.ptr + 13] = rethrown;
      }
      get_rethrown() {
        return HEAP8[this.ptr + 13] != 0;
      }
      init(type, destructor) {
        this.set_adjusted_ptr(0);
        this.set_type(type);
        this.set_destructor(destructor);
      }
      set_adjusted_ptr(adjustedPtr) {
        HEAPU32[this.ptr + 16 >> 2] = adjustedPtr;
      }
      get_adjusted_ptr() {
        return HEAPU32[this.ptr + 16 >> 2];
      }
    }
    var exceptionLast = 0;
    var ___cxa_throw = (ptr, type, destructor) => {
      var info2 = new ExceptionInfo(ptr);
      info2.init(type, destructor);
      exceptionLast = ptr;
      throw exceptionLast;
    };
    var syscallGetVarargI = () => {
      var ret = HEAP32[+SYSCALLS.varargs >> 2];
      SYSCALLS.varargs += 4;
      return ret;
    };
    var syscallGetVarargP = syscallGetVarargI;
    var PATH = {
      isAbs: (path) => path.charAt(0) === "/",
      splitPath: (filename) => {
        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return splitPathRe.exec(filename).slice(1);
      },
      normalizeArray: (parts, allowAboveRoot) => {
        var up = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
          var last = parts[i];
          if (last === ".") {
            parts.splice(i, 1);
          } else if (last === "..") {
            parts.splice(i, 1);
            up++;
          } else if (up) {
            parts.splice(i, 1);
            up--;
          }
        }
        if (allowAboveRoot) {
          for (; up; up--) {
            parts.unshift("..");
          }
        }
        return parts;
      },
      normalize: (path) => {
        var isAbsolute = PATH.isAbs(path), trailingSlash = path.substr(-1) === "/";
        path = PATH.normalizeArray(
          path.split("/").filter((p) => !!p),
          !isAbsolute
        ).join("/");
        if (!path && !isAbsolute) {
          path = ".";
        }
        if (path && trailingSlash) {
          path += "/";
        }
        return (isAbsolute ? "/" : "") + path;
      },
      dirname: (path) => {
        var result = PATH.splitPath(path), root = result[0], dir = result[1];
        if (!root && !dir) {
          return ".";
        }
        if (dir) {
          dir = dir.substr(0, dir.length - 1);
        }
        return root + dir;
      },
      basename: (path) => {
        if (path === "/") return "/";
        path = PATH.normalize(path);
        path = path.replace(/\/$/, "");
        var lastSlash = path.lastIndexOf("/");
        if (lastSlash === -1) return path;
        return path.substr(lastSlash + 1);
      },
      join: (...paths) => PATH.normalize(paths.join("/")),
      join2: (l, r) => PATH.normalize(l + "/" + r)
    };
    var initRandomFill = () => {
      if (typeof crypto == "object" && typeof crypto["getRandomValues"] == "function") {
        return (view) => crypto.getRandomValues(view);
      } else if (ENVIRONMENT_IS_NODE) {
        try {
          var crypto_module = require("crypto");
          var randomFillSync = crypto_module["randomFillSync"];
          if (randomFillSync) {
            return (view) => crypto_module["randomFillSync"](view);
          }
          var randomBytes = crypto_module["randomBytes"];
          return (view) => (view.set(randomBytes(view.byteLength)), view);
        } catch (e) {
        }
      }
      abort("initRandomDevice");
    };
    var randomFill = (view) => (randomFill = initRandomFill())(view);
    var PATH_FS = {
      resolve: (...args) => {
        var resolvedPath = "", resolvedAbsolute = false;
        for (var i = args.length - 1; i >= -1 && !resolvedAbsolute; i--) {
          var path = i >= 0 ? args[i] : FS.cwd();
          if (typeof path != "string") {
            throw new TypeError("Arguments to path.resolve must be strings");
          } else if (!path) {
            return "";
          }
          resolvedPath = path + "/" + resolvedPath;
          resolvedAbsolute = PATH.isAbs(path);
        }
        resolvedPath = PATH.normalizeArray(
          resolvedPath.split("/").filter((p) => !!p),
          !resolvedAbsolute
        ).join("/");
        return (resolvedAbsolute ? "/" : "") + resolvedPath || ".";
      },
      relative: (from, to) => {
        from = PATH_FS.resolve(from).substr(1);
        to = PATH_FS.resolve(to).substr(1);
        function trim(arr) {
          var start = 0;
          for (; start < arr.length; start++) {
            if (arr[start] !== "") break;
          }
          var end = arr.length - 1;
          for (; end >= 0; end--) {
            if (arr[end] !== "") break;
          }
          if (start > end) return [];
          return arr.slice(start, end - start + 1);
        }
        var fromParts = trim(from.split("/"));
        var toParts = trim(to.split("/"));
        var length = Math.min(fromParts.length, toParts.length);
        var samePartsLength = length;
        for (var i = 0; i < length; i++) {
          if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
          }
        }
        var outputParts = [];
        for (var i = samePartsLength; i < fromParts.length; i++) {
          outputParts.push("..");
        }
        outputParts = outputParts.concat(toParts.slice(samePartsLength));
        return outputParts.join("/");
      }
    };
    var UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder() : void 0;
    var UTF8ArrayToString = (heapOrArray, idx = 0, maxBytesToRead = NaN) => {
      var endIdx = idx + maxBytesToRead;
      var endPtr = idx;
      while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
      if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
        return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
      }
      var str = "";
      while (idx < endPtr) {
        var u0 = heapOrArray[idx++];
        if (!(u0 & 128)) {
          str += String.fromCharCode(u0);
          continue;
        }
        var u1 = heapOrArray[idx++] & 63;
        if ((u0 & 224) == 192) {
          str += String.fromCharCode((u0 & 31) << 6 | u1);
          continue;
        }
        var u2 = heapOrArray[idx++] & 63;
        if ((u0 & 240) == 224) {
          u0 = (u0 & 15) << 12 | u1 << 6 | u2;
        } else {
          u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63;
        }
        if (u0 < 65536) {
          str += String.fromCharCode(u0);
        } else {
          var ch = u0 - 65536;
          str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
        }
      }
      return str;
    };
    var FS_stdin_getChar_buffer = [];
    var lengthBytesUTF8 = (str) => {
      var len = 0;
      for (var i = 0; i < str.length; ++i) {
        var c = str.charCodeAt(i);
        if (c <= 127) {
          len++;
        } else if (c <= 2047) {
          len += 2;
        } else if (c >= 55296 && c <= 57343) {
          len += 4;
          ++i;
        } else {
          len += 3;
        }
      }
      return len;
    };
    var stringToUTF8Array = (str, heap, outIdx, maxBytesToWrite) => {
      if (!(maxBytesToWrite > 0)) return 0;
      var startIdx = outIdx;
      var endIdx = outIdx + maxBytesToWrite - 1;
      for (var i = 0; i < str.length; ++i) {
        var u = str.charCodeAt(i);
        if (u >= 55296 && u <= 57343) {
          var u1 = str.charCodeAt(++i);
          u = 65536 + ((u & 1023) << 10) | u1 & 1023;
        }
        if (u <= 127) {
          if (outIdx >= endIdx) break;
          heap[outIdx++] = u;
        } else if (u <= 2047) {
          if (outIdx + 1 >= endIdx) break;
          heap[outIdx++] = 192 | u >> 6;
          heap[outIdx++] = 128 | u & 63;
        } else if (u <= 65535) {
          if (outIdx + 2 >= endIdx) break;
          heap[outIdx++] = 224 | u >> 12;
          heap[outIdx++] = 128 | u >> 6 & 63;
          heap[outIdx++] = 128 | u & 63;
        } else {
          if (outIdx + 3 >= endIdx) break;
          heap[outIdx++] = 240 | u >> 18;
          heap[outIdx++] = 128 | u >> 12 & 63;
          heap[outIdx++] = 128 | u >> 6 & 63;
          heap[outIdx++] = 128 | u & 63;
        }
      }
      heap[outIdx] = 0;
      return outIdx - startIdx;
    };
    function intArrayFromString(stringy, dontAddNull, length) {
      var len = lengthBytesUTF8(stringy) + 1;
      var u8array = new Array(len);
      var numBytesWritten = stringToUTF8Array(
        stringy,
        u8array,
        0,
        u8array.length
      );
      u8array.length = numBytesWritten;
      return u8array;
    }
    var FS_stdin_getChar = () => {
      if (!FS_stdin_getChar_buffer.length) {
        var result = null;
        if (ENVIRONMENT_IS_NODE) {
          var BUFSIZE = 256;
          var buf = Buffer.alloc(BUFSIZE);
          var bytesRead = 0;
          var fd = process.stdin.fd;
          try {
            bytesRead = fs.readSync(fd, buf, 0, BUFSIZE);
          } catch (e) {
            if (e.toString().includes("EOF")) bytesRead = 0;
            else throw e;
          }
          if (bytesRead > 0) {
            result = buf.slice(0, bytesRead).toString("utf-8");
          }
        } else if (typeof window != "undefined" && typeof window.prompt == "function") {
          result = window.prompt("Input: ");
          if (result !== null) {
            result += "\n";
          }
        } else ;
        if (!result) {
          return null;
        }
        FS_stdin_getChar_buffer = intArrayFromString(result);
      }
      return FS_stdin_getChar_buffer.shift();
    };
    var TTY = {
      ttys: [],
      init() {
      },
      shutdown() {
      },
      register(dev, ops) {
        TTY.ttys[dev] = { input: [], output: [], ops };
        FS.registerDevice(dev, TTY.stream_ops);
      },
      stream_ops: {
        open(stream) {
          var tty = TTY.ttys[stream.node.rdev];
          if (!tty) {
            throw new FS.ErrnoError(43);
          }
          stream.tty = tty;
          stream.seekable = false;
        },
        close(stream) {
          stream.tty.ops.fsync(stream.tty);
        },
        fsync(stream) {
          stream.tty.ops.fsync(stream.tty);
        },
        read(stream, buffer, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.get_char) {
            throw new FS.ErrnoError(60);
          }
          var bytesRead = 0;
          for (var i = 0; i < length; i++) {
            var result;
            try {
              result = stream.tty.ops.get_char(stream.tty);
            } catch (e) {
              throw new FS.ErrnoError(29);
            }
            if (result === void 0 && bytesRead === 0) {
              throw new FS.ErrnoError(6);
            }
            if (result === null || result === void 0) break;
            bytesRead++;
            buffer[offset + i] = result;
          }
          if (bytesRead) {
            stream.node.atime = Date.now();
          }
          return bytesRead;
        },
        write(stream, buffer, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.put_char) {
            throw new FS.ErrnoError(60);
          }
          try {
            for (var i = 0; i < length; i++) {
              stream.tty.ops.put_char(stream.tty, buffer[offset + i]);
            }
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
          if (length) {
            stream.node.mtime = stream.node.ctime = Date.now();
          }
          return i;
        }
      },
      default_tty_ops: {
        get_char(tty) {
          return FS_stdin_getChar();
        },
        put_char(tty, val) {
          if (val === null || val === 10) {
            out(UTF8ArrayToString(tty.output));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val);
          }
        },
        fsync(tty) {
          if (tty.output && tty.output.length > 0) {
            out(UTF8ArrayToString(tty.output));
            tty.output = [];
          }
        },
        ioctl_tcgets(tty) {
          return {
            c_iflag: 25856,
            c_oflag: 5,
            c_cflag: 191,
            c_lflag: 35387,
            c_cc: [
              3,
              28,
              127,
              21,
              4,
              0,
              1,
              0,
              17,
              19,
              26,
              0,
              18,
              15,
              23,
              22,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0
            ]
          };
        },
        ioctl_tcsets(tty, optional_actions, data) {
          return 0;
        },
        ioctl_tiocgwinsz(tty) {
          return [24, 80];
        }
      },
      default_tty1_ops: {
        put_char(tty, val) {
          if (val === null || val === 10) {
            err(UTF8ArrayToString(tty.output));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val);
          }
        },
        fsync(tty) {
          if (tty.output && tty.output.length > 0) {
            err(UTF8ArrayToString(tty.output));
            tty.output = [];
          }
        }
      }
    };
    var alignMemory = (size, alignment) => Math.ceil(size / alignment) * alignment;
    var mmapAlloc = (size) => {
      abort();
    };
    var MEMFS = {
      ops_table: null,
      mount(mount) {
        return MEMFS.createNode(null, "/", 16895, 0);
      },
      createNode(parent, name, mode, dev) {
        if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
          throw new FS.ErrnoError(63);
        }
        MEMFS.ops_table || (MEMFS.ops_table = {
          dir: {
            node: {
              getattr: MEMFS.node_ops.getattr,
              setattr: MEMFS.node_ops.setattr,
              lookup: MEMFS.node_ops.lookup,
              mknod: MEMFS.node_ops.mknod,
              rename: MEMFS.node_ops.rename,
              unlink: MEMFS.node_ops.unlink,
              rmdir: MEMFS.node_ops.rmdir,
              readdir: MEMFS.node_ops.readdir,
              symlink: MEMFS.node_ops.symlink
            },
            stream: { llseek: MEMFS.stream_ops.llseek }
          },
          file: {
            node: {
              getattr: MEMFS.node_ops.getattr,
              setattr: MEMFS.node_ops.setattr
            },
            stream: {
              llseek: MEMFS.stream_ops.llseek,
              read: MEMFS.stream_ops.read,
              write: MEMFS.stream_ops.write,
              allocate: MEMFS.stream_ops.allocate,
              mmap: MEMFS.stream_ops.mmap,
              msync: MEMFS.stream_ops.msync
            }
          },
          link: {
            node: {
              getattr: MEMFS.node_ops.getattr,
              setattr: MEMFS.node_ops.setattr,
              readlink: MEMFS.node_ops.readlink
            },
            stream: {}
          },
          chrdev: {
            node: {
              getattr: MEMFS.node_ops.getattr,
              setattr: MEMFS.node_ops.setattr
            },
            stream: FS.chrdev_stream_ops
          }
        });
        var node = FS.createNode(parent, name, mode, dev);
        if (FS.isDir(node.mode)) {
          node.node_ops = MEMFS.ops_table.dir.node;
          node.stream_ops = MEMFS.ops_table.dir.stream;
          node.contents = {};
        } else if (FS.isFile(node.mode)) {
          node.node_ops = MEMFS.ops_table.file.node;
          node.stream_ops = MEMFS.ops_table.file.stream;
          node.usedBytes = 0;
          node.contents = null;
        } else if (FS.isLink(node.mode)) {
          node.node_ops = MEMFS.ops_table.link.node;
          node.stream_ops = MEMFS.ops_table.link.stream;
        } else if (FS.isChrdev(node.mode)) {
          node.node_ops = MEMFS.ops_table.chrdev.node;
          node.stream_ops = MEMFS.ops_table.chrdev.stream;
        }
        node.atime = node.mtime = node.ctime = Date.now();
        if (parent) {
          parent.contents[name] = node;
          parent.atime = parent.mtime = parent.ctime = node.atime;
        }
        return node;
      },
      getFileDataAsTypedArray(node) {
        if (!node.contents) return new Uint8Array(0);
        if (node.contents.subarray)
          return node.contents.subarray(0, node.usedBytes);
        return new Uint8Array(node.contents);
      },
      expandFileStorage(node, newCapacity) {
        var prevCapacity = node.contents ? node.contents.length : 0;
        if (prevCapacity >= newCapacity) return;
        var CAPACITY_DOUBLING_MAX = 1024 * 1024;
        newCapacity = Math.max(
          newCapacity,
          prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2 : 1.125) >>> 0
        );
        if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256);
        var oldContents = node.contents;
        node.contents = new Uint8Array(newCapacity);
        if (node.usedBytes > 0)
          node.contents.set(oldContents.subarray(0, node.usedBytes), 0);
      },
      resizeFileStorage(node, newSize) {
        if (node.usedBytes == newSize) return;
        if (newSize == 0) {
          node.contents = null;
          node.usedBytes = 0;
        } else {
          var oldContents = node.contents;
          node.contents = new Uint8Array(newSize);
          if (oldContents) {
            node.contents.set(
              oldContents.subarray(0, Math.min(newSize, node.usedBytes))
            );
          }
          node.usedBytes = newSize;
        }
      },
      node_ops: {
        getattr(node) {
          var attr = {};
          attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
          attr.ino = node.id;
          attr.mode = node.mode;
          attr.nlink = 1;
          attr.uid = 0;
          attr.gid = 0;
          attr.rdev = node.rdev;
          if (FS.isDir(node.mode)) {
            attr.size = 4096;
          } else if (FS.isFile(node.mode)) {
            attr.size = node.usedBytes;
          } else if (FS.isLink(node.mode)) {
            attr.size = node.link.length;
          } else {
            attr.size = 0;
          }
          attr.atime = new Date(node.atime);
          attr.mtime = new Date(node.mtime);
          attr.ctime = new Date(node.ctime);
          attr.blksize = 4096;
          attr.blocks = Math.ceil(attr.size / attr.blksize);
          return attr;
        },
        setattr(node, attr) {
          for (const key of ["mode", "atime", "mtime", "ctime"]) {
            if (attr[key]) {
              node[key] = attr[key];
            }
          }
          if (attr.size !== void 0) {
            MEMFS.resizeFileStorage(node, attr.size);
          }
        },
        lookup(parent, name) {
          throw MEMFS.doesNotExistError;
        },
        mknod(parent, name, mode, dev) {
          return MEMFS.createNode(parent, name, mode, dev);
        },
        rename(old_node, new_dir, new_name) {
          var new_node;
          try {
            new_node = FS.lookupNode(new_dir, new_name);
          } catch (e) {
          }
          if (new_node) {
            if (FS.isDir(old_node.mode)) {
              for (var i in new_node.contents) {
                throw new FS.ErrnoError(55);
              }
            }
            FS.hashRemoveNode(new_node);
          }
          delete old_node.parent.contents[old_node.name];
          new_dir.contents[new_name] = old_node;
          old_node.name = new_name;
          new_dir.ctime = new_dir.mtime = old_node.parent.ctime = old_node.parent.mtime = Date.now();
        },
        unlink(parent, name) {
          delete parent.contents[name];
          parent.ctime = parent.mtime = Date.now();
        },
        rmdir(parent, name) {
          var node = FS.lookupNode(parent, name);
          for (var i in node.contents) {
            throw new FS.ErrnoError(55);
          }
          delete parent.contents[name];
          parent.ctime = parent.mtime = Date.now();
        },
        readdir(node) {
          return [".", "..", ...Object.keys(node.contents)];
        },
        symlink(parent, newname, oldpath) {
          var node = MEMFS.createNode(parent, newname, 511 | 40960, 0);
          node.link = oldpath;
          return node;
        },
        readlink(node) {
          if (!FS.isLink(node.mode)) {
            throw new FS.ErrnoError(28);
          }
          return node.link;
        }
      },
      stream_ops: {
        read(stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= stream.node.usedBytes) return 0;
          var size = Math.min(stream.node.usedBytes - position, length);
          if (size > 8 && contents.subarray) {
            buffer.set(contents.subarray(position, position + size), offset);
          } else {
            for (var i = 0; i < size; i++)
              buffer[offset + i] = contents[position + i];
          }
          return size;
        },
        write(stream, buffer, offset, length, position, canOwn) {
          if (buffer.buffer === HEAP8.buffer) {
            canOwn = false;
          }
          if (!length) return 0;
          var node = stream.node;
          node.mtime = node.ctime = Date.now();
          if (buffer.subarray && (!node.contents || node.contents.subarray)) {
            if (canOwn) {
              node.contents = buffer.subarray(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (node.usedBytes === 0 && position === 0) {
              node.contents = buffer.slice(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (position + length <= node.usedBytes) {
              node.contents.set(
                buffer.subarray(offset, offset + length),
                position
              );
              return length;
            }
          }
          MEMFS.expandFileStorage(node, position + length);
          if (node.contents.subarray && buffer.subarray) {
            node.contents.set(
              buffer.subarray(offset, offset + length),
              position
            );
          } else {
            for (var i = 0; i < length; i++) {
              node.contents[position + i] = buffer[offset + i];
            }
          }
          node.usedBytes = Math.max(node.usedBytes, position + length);
          return length;
        },
        llseek(stream, offset, whence) {
          var position = offset;
          if (whence === 1) {
            position += stream.position;
          } else if (whence === 2) {
            if (FS.isFile(stream.node.mode)) {
              position += stream.node.usedBytes;
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(28);
          }
          return position;
        },
        allocate(stream, offset, length) {
          MEMFS.expandFileStorage(stream.node, offset + length);
          stream.node.usedBytes = Math.max(
            stream.node.usedBytes,
            offset + length
          );
        },
        mmap(stream, length, position, prot, flags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          var ptr;
          var allocated;
          var contents = stream.node.contents;
          if (!(flags & 2) && contents && contents.buffer === HEAP8.buffer) {
            allocated = false;
            ptr = contents.byteOffset;
          } else {
            allocated = true;
            ptr = mmapAlloc();
            if (!ptr) {
              throw new FS.ErrnoError(48);
            }
            if (contents) {
              if (position > 0 || position + length < contents.length) {
                if (contents.subarray) {
                  contents = contents.subarray(position, position + length);
                } else {
                  contents = Array.prototype.slice.call(
                    contents,
                    position,
                    position + length
                  );
                }
              }
              HEAP8.set(contents, ptr);
            }
          }
          return { ptr, allocated };
        },
        msync(stream, buffer, offset, length, mmapFlags) {
          MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
          return 0;
        }
      }
    };
    var asyncLoad = async (url) => {
      var arrayBuffer = await readAsync(url);
      return new Uint8Array(arrayBuffer);
    };
    var FS_createDataFile = (parent, name, fileData, canRead, canWrite, canOwn) => {
      FS.createDataFile(parent, name, fileData, canRead, canWrite, canOwn);
    };
    var FS_handledByPreloadPlugin = (byteArray, fullname, finish, onerror) => {
      if (typeof Browser != "undefined") Browser.init();
      var handled = false;
      preloadPlugins.forEach((plugin) => {
        if (handled) return;
        if (plugin["canHandle"](fullname)) {
          plugin["handle"](byteArray, fullname, finish, onerror);
          handled = true;
        }
      });
      return handled;
    };
    var FS_createPreloadedFile = (parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) => {
      var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
      function processData(byteArray) {
        function finish(byteArray2) {
          preFinish == null ? void 0 : preFinish();
          if (!dontCreateFile) {
            FS_createDataFile(
              parent,
              name,
              byteArray2,
              canRead,
              canWrite,
              canOwn
            );
          }
          onload == null ? void 0 : onload();
          removeRunDependency();
        }
        if (FS_handledByPreloadPlugin(byteArray, fullname, finish, () => {
          onerror == null ? void 0 : onerror();
          removeRunDependency();
        })) {
          return;
        }
        finish(byteArray);
      }
      addRunDependency();
      if (typeof url == "string") {
        asyncLoad(url).then(processData, onerror);
      } else {
        processData(url);
      }
    };
    var FS_modeStringToFlags = (str) => {
      var flagModes = {
        r: 0,
        "r+": 2,
        w: 512 | 64 | 1,
        "w+": 512 | 64 | 2,
        a: 1024 | 64 | 1,
        "a+": 1024 | 64 | 2
      };
      var flags = flagModes[str];
      if (typeof flags == "undefined") {
        throw new Error(`Unknown file open mode: ${str}`);
      }
      return flags;
    };
    var FS_getMode = (canRead, canWrite) => {
      var mode = 0;
      if (canRead) mode |= 292 | 73;
      if (canWrite) mode |= 146;
      return mode;
    };
    var FS = {
      root: null,
      mounts: [],
      devices: {},
      streams: [],
      nextInode: 1,
      nameTable: null,
      currentPath: "/",
      initialized: false,
      ignorePermissions: true,
      ErrnoError: class {
        constructor(errno) {
          __publicField(this, "name", "ErrnoError");
          this.errno = errno;
        }
      },
      filesystems: null,
      syncFSRequests: 0,
      readFiles: {},
      FSStream: class {
        constructor() {
          __publicField(this, "shared", {});
        }
        get object() {
          return this.node;
        }
        set object(val) {
          this.node = val;
        }
        get isRead() {
          return (this.flags & 2097155) !== 1;
        }
        get isWrite() {
          return (this.flags & 2097155) !== 0;
        }
        get isAppend() {
          return this.flags & 1024;
        }
        get flags() {
          return this.shared.flags;
        }
        set flags(val) {
          this.shared.flags = val;
        }
        get position() {
          return this.shared.position;
        }
        set position(val) {
          this.shared.position = val;
        }
      },
      FSNode: class {
        constructor(parent, name, mode, rdev) {
          __publicField(this, "node_ops", {});
          __publicField(this, "stream_ops", {});
          __publicField(this, "readMode", 292 | 73);
          __publicField(this, "writeMode", 146);
          __publicField(this, "mounted", null);
          if (!parent) {
            parent = this;
          }
          this.parent = parent;
          this.mount = parent.mount;
          this.id = FS.nextInode++;
          this.name = name;
          this.mode = mode;
          this.rdev = rdev;
          this.atime = this.mtime = this.ctime = Date.now();
        }
        get read() {
          return (this.mode & this.readMode) === this.readMode;
        }
        set read(val) {
          val ? this.mode |= this.readMode : this.mode &= ~this.readMode;
        }
        get write() {
          return (this.mode & this.writeMode) === this.writeMode;
        }
        set write(val) {
          val ? this.mode |= this.writeMode : this.mode &= ~this.writeMode;
        }
        get isFolder() {
          return FS.isDir(this.mode);
        }
        get isDevice() {
          return FS.isChrdev(this.mode);
        }
      },
      lookupPath(path, opts = {}) {
        if (!path) return { path: "", node: null };
        opts.follow_mount ?? (opts.follow_mount = true);
        if (!PATH.isAbs(path)) {
          path = FS.cwd() + "/" + path;
        }
        linkloop: for (var nlinks = 0; nlinks < 40; nlinks++) {
          var parts = path.split("/").filter((p) => !!p && p !== ".");
          var current = FS.root;
          var current_path = "/";
          for (var i = 0; i < parts.length; i++) {
            var islast = i === parts.length - 1;
            if (islast && opts.parent) {
              break;
            }
            if (parts[i] === "..") {
              current_path = PATH.dirname(current_path);
              current = current.parent;
              continue;
            }
            current_path = PATH.join2(current_path, parts[i]);
            try {
              current = FS.lookupNode(current, parts[i]);
            } catch (e) {
              if ((e == null ? void 0 : e.errno) === 44 && islast && opts.noent_okay) {
                return { path: current_path };
              }
              throw e;
            }
            if (FS.isMountpoint(current) && (!islast || opts.follow_mount)) {
              current = current.mounted.root;
            }
            if (FS.isLink(current.mode) && (!islast || opts.follow)) {
              if (!current.node_ops.readlink) {
                throw new FS.ErrnoError(52);
              }
              var link = current.node_ops.readlink(current);
              if (!PATH.isAbs(link)) {
                link = PATH.dirname(current_path) + "/" + link;
              }
              path = link + "/" + parts.slice(i + 1).join("/");
              continue linkloop;
            }
          }
          return { path: current_path, node: current };
        }
        throw new FS.ErrnoError(32);
      },
      getPath(node) {
        var path;
        while (true) {
          if (FS.isRoot(node)) {
            var mount = node.mount.mountpoint;
            if (!path) return mount;
            return mount[mount.length - 1] !== "/" ? `${mount}/${path}` : mount + path;
          }
          path = path ? `${node.name}/${path}` : node.name;
          node = node.parent;
        }
      },
      hashName(parentid, name) {
        var hash = 0;
        for (var i = 0; i < name.length; i++) {
          hash = (hash << 5) - hash + name.charCodeAt(i) | 0;
        }
        return (parentid + hash >>> 0) % FS.nameTable.length;
      },
      hashAddNode(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        node.name_next = FS.nameTable[hash];
        FS.nameTable[hash] = node;
      },
      hashRemoveNode(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        if (FS.nameTable[hash] === node) {
          FS.nameTable[hash] = node.name_next;
        } else {
          var current = FS.nameTable[hash];
          while (current) {
            if (current.name_next === node) {
              current.name_next = node.name_next;
              break;
            }
            current = current.name_next;
          }
        }
      },
      lookupNode(parent, name) {
        var errCode = FS.mayLookup(parent);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        var hash = FS.hashName(parent.id, name);
        for (var node = FS.nameTable[hash]; node; node = node.name_next) {
          var nodeName = node.name;
          if (node.parent.id === parent.id && nodeName === name) {
            return node;
          }
        }
        return FS.lookup(parent, name);
      },
      createNode(parent, name, mode, rdev) {
        var node = new FS.FSNode(parent, name, mode, rdev);
        FS.hashAddNode(node);
        return node;
      },
      destroyNode(node) {
        FS.hashRemoveNode(node);
      },
      isRoot(node) {
        return node === node.parent;
      },
      isMountpoint(node) {
        return !!node.mounted;
      },
      isFile(mode) {
        return (mode & 61440) === 32768;
      },
      isDir(mode) {
        return (mode & 61440) === 16384;
      },
      isLink(mode) {
        return (mode & 61440) === 40960;
      },
      isChrdev(mode) {
        return (mode & 61440) === 8192;
      },
      isBlkdev(mode) {
        return (mode & 61440) === 24576;
      },
      isFIFO(mode) {
        return (mode & 61440) === 4096;
      },
      isSocket(mode) {
        return (mode & 49152) === 49152;
      },
      flagsToPermissionString(flag) {
        var perms = ["r", "w", "rw"][flag & 3];
        if (flag & 512) {
          perms += "w";
        }
        return perms;
      },
      nodePermissions(node, perms) {
        if (FS.ignorePermissions) {
          return 0;
        }
        if (perms.includes("r") && !(node.mode & 292)) {
          return 2;
        } else if (perms.includes("w") && !(node.mode & 146)) {
          return 2;
        } else if (perms.includes("x") && !(node.mode & 73)) {
          return 2;
        }
        return 0;
      },
      mayLookup(dir) {
        if (!FS.isDir(dir.mode)) return 54;
        var errCode = FS.nodePermissions(dir, "x");
        if (errCode) return errCode;
        if (!dir.node_ops.lookup) return 2;
        return 0;
      },
      mayCreate(dir, name) {
        if (!FS.isDir(dir.mode)) {
          return 54;
        }
        try {
          var node = FS.lookupNode(dir, name);
          return 20;
        } catch (e) {
        }
        return FS.nodePermissions(dir, "wx");
      },
      mayDelete(dir, name, isdir) {
        var node;
        try {
          node = FS.lookupNode(dir, name);
        } catch (e) {
          return e.errno;
        }
        var errCode = FS.nodePermissions(dir, "wx");
        if (errCode) {
          return errCode;
        }
        if (isdir) {
          if (!FS.isDir(node.mode)) {
            return 54;
          }
          if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
            return 10;
          }
        } else {
          if (FS.isDir(node.mode)) {
            return 31;
          }
        }
        return 0;
      },
      mayOpen(node, flags) {
        if (!node) {
          return 44;
        }
        if (FS.isLink(node.mode)) {
          return 32;
        } else if (FS.isDir(node.mode)) {
          if (FS.flagsToPermissionString(flags) !== "r" || flags & 512) {
            return 31;
          }
        }
        return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
      },
      MAX_OPEN_FDS: 4096,
      nextfd() {
        for (var fd = 0; fd <= FS.MAX_OPEN_FDS; fd++) {
          if (!FS.streams[fd]) {
            return fd;
          }
        }
        throw new FS.ErrnoError(33);
      },
      getStreamChecked(fd) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        return stream;
      },
      getStream: (fd) => FS.streams[fd],
      createStream(stream, fd = -1) {
        stream = Object.assign(new FS.FSStream(), stream);
        if (fd == -1) {
          fd = FS.nextfd();
        }
        stream.fd = fd;
        FS.streams[fd] = stream;
        return stream;
      },
      closeStream(fd) {
        FS.streams[fd] = null;
      },
      dupStream(origStream, fd = -1) {
        var _a2, _b;
        var stream = FS.createStream(origStream, fd);
        (_b = (_a2 = stream.stream_ops) == null ? void 0 : _a2.dup) == null ? void 0 : _b.call(_a2, stream);
        return stream;
      },
      chrdev_stream_ops: {
        open(stream) {
          var _a2, _b;
          var device = FS.getDevice(stream.node.rdev);
          stream.stream_ops = device.stream_ops;
          (_b = (_a2 = stream.stream_ops).open) == null ? void 0 : _b.call(_a2, stream);
        },
        llseek() {
          throw new FS.ErrnoError(70);
        }
      },
      major: (dev) => dev >> 8,
      minor: (dev) => dev & 255,
      makedev: (ma, mi) => ma << 8 | mi,
      registerDevice(dev, ops) {
        FS.devices[dev] = { stream_ops: ops };
      },
      getDevice: (dev) => FS.devices[dev],
      getMounts(mount) {
        var mounts = [];
        var check = [mount];
        while (check.length) {
          var m = check.pop();
          mounts.push(m);
          check.push(...m.mounts);
        }
        return mounts;
      },
      syncfs(populate, callback) {
        if (typeof populate == "function") {
          callback = populate;
          populate = false;
        }
        FS.syncFSRequests++;
        if (FS.syncFSRequests > 1) {
          err(
            `warning: ${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`
          );
        }
        var mounts = FS.getMounts(FS.root.mount);
        var completed = 0;
        function doCallback(errCode) {
          FS.syncFSRequests--;
          return callback(errCode);
        }
        function done(errCode) {
          if (errCode) {
            if (!done.errored) {
              done.errored = true;
              return doCallback(errCode);
            }
            return;
          }
          if (++completed >= mounts.length) {
            doCallback(null);
          }
        }
        mounts.forEach((mount) => {
          if (!mount.type.syncfs) {
            return done(null);
          }
          mount.type.syncfs(mount, populate, done);
        });
      },
      mount(type, opts, mountpoint) {
        var root = mountpoint === "/";
        var pseudo = !mountpoint;
        var node;
        if (root && FS.root) {
          throw new FS.ErrnoError(10);
        } else if (!root && !pseudo) {
          var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
          mountpoint = lookup.path;
          node = lookup.node;
          if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(10);
          }
          if (!FS.isDir(node.mode)) {
            throw new FS.ErrnoError(54);
          }
        }
        var mount = { type, opts, mountpoint, mounts: [] };
        var mountRoot = type.mount(mount);
        mountRoot.mount = mount;
        mount.root = mountRoot;
        if (root) {
          FS.root = mountRoot;
        } else if (node) {
          node.mounted = mount;
          if (node.mount) {
            node.mount.mounts.push(mount);
          }
        }
        return mountRoot;
      },
      unmount(mountpoint) {
        var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
        if (!FS.isMountpoint(lookup.node)) {
          throw new FS.ErrnoError(28);
        }
        var node = lookup.node;
        var mount = node.mounted;
        var mounts = FS.getMounts(mount);
        Object.keys(FS.nameTable).forEach((hash) => {
          var current = FS.nameTable[hash];
          while (current) {
            var next = current.name_next;
            if (mounts.includes(current.mount)) {
              FS.destroyNode(current);
            }
            current = next;
          }
        });
        node.mounted = null;
        var idx = node.mount.mounts.indexOf(mount);
        node.mount.mounts.splice(idx, 1);
      },
      lookup(parent, name) {
        return parent.node_ops.lookup(parent, name);
      },
      mknod(path, mode, dev) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        if (!name || name === "." || name === "..") {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.mayCreate(parent, name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.mknod) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.mknod(parent, name, mode, dev);
      },
      statfs(path) {
        var rtn = {
          bsize: 4096,
          frsize: 4096,
          blocks: 1e6,
          bfree: 5e5,
          bavail: 5e5,
          files: FS.nextInode,
          ffree: FS.nextInode - 1,
          fsid: 42,
          flags: 2,
          namelen: 255
        };
        var parent = FS.lookupPath(path, { follow: true }).node;
        if (parent == null ? void 0 : parent.node_ops.statfs) {
          Object.assign(rtn, parent.node_ops.statfs(parent.mount.opts.root));
        }
        return rtn;
      },
      create(path, mode = 438) {
        mode &= 4095;
        mode |= 32768;
        return FS.mknod(path, mode, 0);
      },
      mkdir(path, mode = 511) {
        mode &= 511 | 512;
        mode |= 16384;
        return FS.mknod(path, mode, 0);
      },
      mkdirTree(path, mode) {
        var dirs = path.split("/");
        var d = "";
        for (var i = 0; i < dirs.length; ++i) {
          if (!dirs[i]) continue;
          d += "/" + dirs[i];
          try {
            FS.mkdir(d, mode);
          } catch (e) {
            if (e.errno != 20) throw e;
          }
        }
      },
      mkdev(path, mode, dev) {
        if (typeof dev == "undefined") {
          dev = mode;
          mode = 438;
        }
        mode |= 8192;
        return FS.mknod(path, mode, dev);
      },
      symlink(oldpath, newpath) {
        if (!PATH_FS.resolve(oldpath)) {
          throw new FS.ErrnoError(44);
        }
        var lookup = FS.lookupPath(newpath, { parent: true });
        var parent = lookup.node;
        if (!parent) {
          throw new FS.ErrnoError(44);
        }
        var newname = PATH.basename(newpath);
        var errCode = FS.mayCreate(parent, newname);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.symlink) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.symlink(parent, newname, oldpath);
      },
      rename(old_path, new_path) {
        var old_dirname = PATH.dirname(old_path);
        var new_dirname = PATH.dirname(new_path);
        var old_name = PATH.basename(old_path);
        var new_name = PATH.basename(new_path);
        var lookup, old_dir, new_dir;
        lookup = FS.lookupPath(old_path, { parent: true });
        old_dir = lookup.node;
        lookup = FS.lookupPath(new_path, { parent: true });
        new_dir = lookup.node;
        if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
        if (old_dir.mount !== new_dir.mount) {
          throw new FS.ErrnoError(75);
        }
        var old_node = FS.lookupNode(old_dir, old_name);
        var relative = PATH_FS.relative(old_path, new_dirname);
        if (relative.charAt(0) !== ".") {
          throw new FS.ErrnoError(28);
        }
        relative = PATH_FS.relative(new_path, old_dirname);
        if (relative.charAt(0) !== ".") {
          throw new FS.ErrnoError(55);
        }
        var new_node;
        try {
          new_node = FS.lookupNode(new_dir, new_name);
        } catch (e) {
        }
        if (old_node === new_node) {
          return;
        }
        var isdir = FS.isDir(old_node.mode);
        var errCode = FS.mayDelete(old_dir, old_name, isdir);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        errCode = new_node ? FS.mayDelete(new_dir, new_name, isdir) : FS.mayCreate(new_dir, new_name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!old_dir.node_ops.rename) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(old_node) || new_node && FS.isMountpoint(new_node)) {
          throw new FS.ErrnoError(10);
        }
        if (new_dir !== old_dir) {
          errCode = FS.nodePermissions(old_dir, "w");
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        FS.hashRemoveNode(old_node);
        try {
          old_dir.node_ops.rename(old_node, new_dir, new_name);
          old_node.parent = new_dir;
        } catch (e) {
          throw e;
        } finally {
          FS.hashAddNode(old_node);
        }
      },
      rmdir(path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, true);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.rmdir) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        parent.node_ops.rmdir(parent, name);
        FS.destroyNode(node);
      },
      readdir(path) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        if (!node.node_ops.readdir) {
          throw new FS.ErrnoError(54);
        }
        return node.node_ops.readdir(node);
      },
      unlink(path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        if (!parent) {
          throw new FS.ErrnoError(44);
        }
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, false);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.unlink) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        parent.node_ops.unlink(parent, name);
        FS.destroyNode(node);
      },
      readlink(path) {
        var lookup = FS.lookupPath(path);
        var link = lookup.node;
        if (!link) {
          throw new FS.ErrnoError(44);
        }
        if (!link.node_ops.readlink) {
          throw new FS.ErrnoError(28);
        }
        return link.node_ops.readlink(link);
      },
      stat(path, dontFollow) {
        var lookup = FS.lookupPath(path, { follow: !dontFollow });
        var node = lookup.node;
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        if (!node.node_ops.getattr) {
          throw new FS.ErrnoError(63);
        }
        return node.node_ops.getattr(node);
      },
      lstat(path) {
        return FS.stat(path, true);
      },
      chmod(path, mode, dontFollow) {
        var node;
        if (typeof path == "string") {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, {
          mode: mode & 4095 | node.mode & -4096,
          ctime: Date.now()
        });
      },
      lchmod(path, mode) {
        FS.chmod(path, mode, true);
      },
      fchmod(fd, mode) {
        var stream = FS.getStreamChecked(fd);
        FS.chmod(stream.node, mode);
      },
      chown(path, uid, gid, dontFollow) {
        var node;
        if (typeof path == "string") {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, { timestamp: Date.now() });
      },
      lchown(path, uid, gid) {
        FS.chown(path, uid, gid, true);
      },
      fchown(fd, uid, gid) {
        var stream = FS.getStreamChecked(fd);
        FS.chown(stream.node, uid, gid);
      },
      truncate(path, len) {
        if (len < 0) {
          throw new FS.ErrnoError(28);
        }
        var node;
        if (typeof path == "string") {
          var lookup = FS.lookupPath(path, { follow: true });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isDir(node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!FS.isFile(node.mode)) {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.nodePermissions(node, "w");
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        node.node_ops.setattr(node, { size: len, timestamp: Date.now() });
      },
      ftruncate(fd, len) {
        var stream = FS.getStreamChecked(fd);
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(28);
        }
        FS.truncate(stream.node, len);
      },
      utime(path, atime, mtime) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        node.node_ops.setattr(node, { atime, mtime });
      },
      open(path, flags, mode = 438) {
        if (path === "") {
          throw new FS.ErrnoError(44);
        }
        flags = typeof flags == "string" ? FS_modeStringToFlags(flags) : flags;
        if (flags & 64) {
          mode = mode & 4095 | 32768;
        } else {
          mode = 0;
        }
        var node;
        if (typeof path == "object") {
          node = path;
        } else {
          var lookup = FS.lookupPath(path, {
            follow: !(flags & 131072),
            noent_okay: true
          });
          node = lookup.node;
          path = lookup.path;
        }
        var created = false;
        if (flags & 64) {
          if (node) {
            if (flags & 128) {
              throw new FS.ErrnoError(20);
            }
          } else {
            node = FS.mknod(path, mode, 0);
            created = true;
          }
        }
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        if (FS.isChrdev(node.mode)) {
          flags &= -513;
        }
        if (flags & 65536 && !FS.isDir(node.mode)) {
          throw new FS.ErrnoError(54);
        }
        if (!created) {
          var errCode = FS.mayOpen(node, flags);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        if (flags & 512 && !created) {
          FS.truncate(node, 0);
        }
        flags &= -131713;
        var stream = FS.createStream({
          node,
          path: FS.getPath(node),
          flags,
          seekable: true,
          position: 0,
          stream_ops: node.stream_ops,
          ungotten: [],
          error: false
        });
        if (stream.stream_ops.open) {
          stream.stream_ops.open(stream);
        }
        if (Module["logReadFiles"] && !(flags & 1)) {
          if (!(path in FS.readFiles)) {
            FS.readFiles[path] = 1;
          }
        }
        return stream;
      },
      close(stream) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (stream.getdents) stream.getdents = null;
        try {
          if (stream.stream_ops.close) {
            stream.stream_ops.close(stream);
          }
        } catch (e) {
          throw e;
        } finally {
          FS.closeStream(stream.fd);
        }
        stream.fd = null;
      },
      isClosed(stream) {
        return stream.fd === null;
      },
      llseek(stream, offset, whence) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (!stream.seekable || !stream.stream_ops.llseek) {
          throw new FS.ErrnoError(70);
        }
        if (whence != 0 && whence != 1 && whence != 2) {
          throw new FS.ErrnoError(28);
        }
        stream.position = stream.stream_ops.llseek(stream, offset, whence);
        stream.ungotten = [];
        return stream.position;
      },
      read(stream, buffer, offset, length, position) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.read) {
          throw new FS.ErrnoError(28);
        }
        var seeking = typeof position != "undefined";
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesRead = stream.stream_ops.read(
          stream,
          buffer,
          offset,
          length,
          position
        );
        if (!seeking) stream.position += bytesRead;
        return bytesRead;
      },
      write(stream, buffer, offset, length, position, canOwn) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.write) {
          throw new FS.ErrnoError(28);
        }
        if (stream.seekable && stream.flags & 1024) {
          FS.llseek(stream, 0, 2);
        }
        var seeking = typeof position != "undefined";
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesWritten = stream.stream_ops.write(
          stream,
          buffer,
          offset,
          length,
          position,
          canOwn
        );
        if (!seeking) stream.position += bytesWritten;
        return bytesWritten;
      },
      allocate(stream, offset, length) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (offset < 0 || length <= 0) {
          throw new FS.ErrnoError(28);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(43);
        }
        if (!stream.stream_ops.allocate) {
          throw new FS.ErrnoError(138);
        }
        stream.stream_ops.allocate(stream, offset, length);
      },
      mmap(stream, length, position, prot, flags) {
        if ((prot & 2) !== 0 && (flags & 2) === 0 && (stream.flags & 2097155) !== 2) {
          throw new FS.ErrnoError(2);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(2);
        }
        if (!stream.stream_ops.mmap) {
          throw new FS.ErrnoError(43);
        }
        if (!length) {
          throw new FS.ErrnoError(28);
        }
        return stream.stream_ops.mmap(stream, length, position, prot, flags);
      },
      msync(stream, buffer, offset, length, mmapFlags) {
        if (!stream.stream_ops.msync) {
          return 0;
        }
        return stream.stream_ops.msync(
          stream,
          buffer,
          offset,
          length,
          mmapFlags
        );
      },
      ioctl(stream, cmd, arg) {
        if (!stream.stream_ops.ioctl) {
          throw new FS.ErrnoError(59);
        }
        return stream.stream_ops.ioctl(stream, cmd, arg);
      },
      readFile(path, opts = {}) {
        opts.flags = opts.flags || 0;
        opts.encoding = opts.encoding || "binary";
        if (opts.encoding !== "utf8" && opts.encoding !== "binary") {
          throw new Error(`Invalid encoding type "${opts.encoding}"`);
        }
        var ret;
        var stream = FS.open(path, opts.flags);
        var stat = FS.stat(path);
        var length = stat.size;
        var buf = new Uint8Array(length);
        FS.read(stream, buf, 0, length, 0);
        if (opts.encoding === "utf8") {
          ret = UTF8ArrayToString(buf);
        } else if (opts.encoding === "binary") {
          ret = buf;
        }
        FS.close(stream);
        return ret;
      },
      writeFile(path, data, opts = {}) {
        opts.flags = opts.flags || 577;
        var stream = FS.open(path, opts.flags, opts.mode);
        if (typeof data == "string") {
          var buf = new Uint8Array(lengthBytesUTF8(data) + 1);
          var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
          FS.write(stream, buf, 0, actualNumBytes, void 0, opts.canOwn);
        } else if (ArrayBuffer.isView(data)) {
          FS.write(stream, data, 0, data.byteLength, void 0, opts.canOwn);
        } else {
          throw new Error("Unsupported data type");
        }
        FS.close(stream);
      },
      cwd: () => FS.currentPath,
      chdir(path) {
        var lookup = FS.lookupPath(path, { follow: true });
        if (lookup.node === null) {
          throw new FS.ErrnoError(44);
        }
        if (!FS.isDir(lookup.node.mode)) {
          throw new FS.ErrnoError(54);
        }
        var errCode = FS.nodePermissions(lookup.node, "x");
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        FS.currentPath = lookup.path;
      },
      createDefaultDirectories() {
        FS.mkdir("/tmp");
        FS.mkdir("/home");
        FS.mkdir("/home/web_user");
      },
      createDefaultDevices() {
        FS.mkdir("/dev");
        FS.registerDevice(FS.makedev(1, 3), {
          read: () => 0,
          write: (stream, buffer, offset, length, pos) => length,
          llseek: () => 0
        });
        FS.mkdev("/dev/null", FS.makedev(1, 3));
        TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
        TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
        FS.mkdev("/dev/tty", FS.makedev(5, 0));
        FS.mkdev("/dev/tty1", FS.makedev(6, 0));
        var randomBuffer = new Uint8Array(1024), randomLeft = 0;
        var randomByte = () => {
          if (randomLeft === 0) {
            randomLeft = randomFill(randomBuffer).byteLength;
          }
          return randomBuffer[--randomLeft];
        };
        FS.createDevice("/dev", "random", randomByte);
        FS.createDevice("/dev", "urandom", randomByte);
        FS.mkdir("/dev/shm");
        FS.mkdir("/dev/shm/tmp");
      },
      createSpecialDirectories() {
        FS.mkdir("/proc");
        var proc_self = FS.mkdir("/proc/self");
        FS.mkdir("/proc/self/fd");
        FS.mount(
          {
            mount() {
              var node = FS.createNode(proc_self, "fd", 16895, 73);
              node.stream_ops = { llseek: MEMFS.stream_ops.llseek };
              node.node_ops = {
                lookup(parent, name) {
                  var fd = +name;
                  var stream = FS.getStreamChecked(fd);
                  var ret = {
                    parent: null,
                    mount: { mountpoint: "fake" },
                    node_ops: { readlink: () => stream.path },
                    id: fd + 1
                  };
                  ret.parent = ret;
                  return ret;
                },
                readdir() {
                  return Array.from(FS.streams.entries()).filter(([k, v]) => v).map(([k, v]) => k.toString());
                }
              };
              return node;
            }
          },
          {},
          "/proc/self/fd"
        );
      },
      createStandardStreams(input, output, error2) {
        if (input) {
          FS.createDevice("/dev", "stdin", input);
        } else {
          FS.symlink("/dev/tty", "/dev/stdin");
        }
        if (output) {
          FS.createDevice("/dev", "stdout", null, output);
        } else {
          FS.symlink("/dev/tty", "/dev/stdout");
        }
        if (error2) {
          FS.createDevice("/dev", "stderr", null, error2);
        } else {
          FS.symlink("/dev/tty1", "/dev/stderr");
        }
        FS.open("/dev/stdin", 0);
        FS.open("/dev/stdout", 1);
        FS.open("/dev/stderr", 1);
      },
      staticInit() {
        FS.nameTable = new Array(4096);
        FS.mount(MEMFS, {}, "/");
        FS.createDefaultDirectories();
        FS.createDefaultDevices();
        FS.createSpecialDirectories();
        FS.filesystems = { MEMFS };
      },
      init(input, output, error2) {
        FS.initialized = true;
        input ?? (input = Module["stdin"]);
        output ?? (output = Module["stdout"]);
        error2 ?? (error2 = Module["stderr"]);
        FS.createStandardStreams(input, output, error2);
      },
      quit() {
        FS.initialized = false;
        for (var i = 0; i < FS.streams.length; i++) {
          var stream = FS.streams[i];
          if (!stream) {
            continue;
          }
          FS.close(stream);
        }
      },
      findObject(path, dontResolveLastLink) {
        var ret = FS.analyzePath(path, dontResolveLastLink);
        if (!ret.exists) {
          return null;
        }
        return ret.object;
      },
      analyzePath(path, dontResolveLastLink) {
        try {
          var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          path = lookup.path;
        } catch (e) {
        }
        var ret = {
          isRoot: false,
          exists: false,
          error: 0,
          name: null,
          path: null,
          object: null,
          parentExists: false,
          parentPath: null,
          parentObject: null
        };
        try {
          var lookup = FS.lookupPath(path, { parent: true });
          ret.parentExists = true;
          ret.parentPath = lookup.path;
          ret.parentObject = lookup.node;
          ret.name = PATH.basename(path);
          lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          ret.exists = true;
          ret.path = lookup.path;
          ret.object = lookup.node;
          ret.name = lookup.node.name;
          ret.isRoot = lookup.path === "/";
        } catch (e) {
          ret.error = e.errno;
        }
        return ret;
      },
      createPath(parent, path, canRead, canWrite) {
        parent = typeof parent == "string" ? parent : FS.getPath(parent);
        var parts = path.split("/").reverse();
        while (parts.length) {
          var part = parts.pop();
          if (!part) continue;
          var current = PATH.join2(parent, part);
          try {
            FS.mkdir(current);
          } catch (e) {
          }
          parent = current;
        }
        return current;
      },
      createFile(parent, name, properties, canRead, canWrite) {
        var path = PATH.join2(
          typeof parent == "string" ? parent : FS.getPath(parent),
          name
        );
        var mode = FS_getMode(canRead, canWrite);
        return FS.create(path, mode);
      },
      createDataFile(parent, name, data, canRead, canWrite, canOwn) {
        var path = name;
        if (parent) {
          parent = typeof parent == "string" ? parent : FS.getPath(parent);
          path = name ? PATH.join2(parent, name) : parent;
        }
        var mode = FS_getMode(canRead, canWrite);
        var node = FS.create(path, mode);
        if (data) {
          if (typeof data == "string") {
            var arr = new Array(data.length);
            for (var i = 0, len = data.length; i < len; ++i)
              arr[i] = data.charCodeAt(i);
            data = arr;
          }
          FS.chmod(node, mode | 146);
          var stream = FS.open(node, 577);
          FS.write(stream, data, 0, data.length, 0, canOwn);
          FS.close(stream);
          FS.chmod(node, mode);
        }
      },
      createDevice(parent, name, input, output) {
        var _a2;
        var path = PATH.join2(
          typeof parent == "string" ? parent : FS.getPath(parent),
          name
        );
        var mode = FS_getMode(!!input, !!output);
        (_a2 = FS.createDevice).major ?? (_a2.major = 64);
        var dev = FS.makedev(FS.createDevice.major++, 0);
        FS.registerDevice(dev, {
          open(stream) {
            stream.seekable = false;
          },
          close(stream) {
            var _a3;
            if ((_a3 = output == null ? void 0 : output.buffer) == null ? void 0 : _a3.length) {
              output(10);
            }
          },
          read(stream, buffer, offset, length, pos) {
            var bytesRead = 0;
            for (var i = 0; i < length; i++) {
              var result;
              try {
                result = input();
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
              if (result === void 0 && bytesRead === 0) {
                throw new FS.ErrnoError(6);
              }
              if (result === null || result === void 0) break;
              bytesRead++;
              buffer[offset + i] = result;
            }
            if (bytesRead) {
              stream.node.atime = Date.now();
            }
            return bytesRead;
          },
          write(stream, buffer, offset, length, pos) {
            for (var i = 0; i < length; i++) {
              try {
                output(buffer[offset + i]);
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
            }
            if (length) {
              stream.node.mtime = stream.node.ctime = Date.now();
            }
            return i;
          }
        });
        return FS.mkdev(path, mode, dev);
      },
      forceLoadFile(obj) {
        if (obj.isDevice || obj.isFolder || obj.link || obj.contents)
          return true;
        if (typeof XMLHttpRequest != "undefined") {
          throw new Error(
            "Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread."
          );
        } else {
          try {
            obj.contents = readBinary(obj.url);
            obj.usedBytes = obj.contents.length;
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
        }
      },
      createLazyFile(parent, name, url, canRead, canWrite) {
        class LazyUint8Array {
          constructor() {
            __publicField(this, "lengthKnown", false);
            __publicField(this, "chunks", []);
          }
          get(idx) {
            if (idx > this.length - 1 || idx < 0) {
              return void 0;
            }
            var chunkOffset = idx % this.chunkSize;
            var chunkNum = idx / this.chunkSize | 0;
            return this.getter(chunkNum)[chunkOffset];
          }
          setDataGetter(getter) {
            this.getter = getter;
          }
          cacheLength() {
            var xhr = new XMLHttpRequest();
            xhr.open("HEAD", url, false);
            xhr.send(null);
            if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304))
              throw new Error(
                "Couldn't load " + url + ". Status: " + xhr.status
              );
            var datalength = Number(xhr.getResponseHeader("Content-length"));
            var header;
            var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
            var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
            var chunkSize = 1024 * 1024;
            if (!hasByteServing) chunkSize = datalength;
            var doXHR = (from, to) => {
              if (from > to)
                throw new Error(
                  "invalid range (" + from + ", " + to + ") or no bytes requested!"
                );
              if (to > datalength - 1)
                throw new Error(
                  "only " + datalength + " bytes available! programmer error!"
                );
              var xhr2 = new XMLHttpRequest();
              xhr2.open("GET", url, false);
              if (datalength !== chunkSize)
                xhr2.setRequestHeader("Range", "bytes=" + from + "-" + to);
              xhr2.responseType = "arraybuffer";
              if (xhr2.overrideMimeType) {
                xhr2.overrideMimeType("text/plain; charset=x-user-defined");
              }
              xhr2.send(null);
              if (!(xhr2.status >= 200 && xhr2.status < 300 || xhr2.status === 304))
                throw new Error(
                  "Couldn't load " + url + ". Status: " + xhr2.status
                );
              if (xhr2.response !== void 0) {
                return new Uint8Array(xhr2.response || []);
              }
              return intArrayFromString(xhr2.responseText || "");
            };
            var lazyArray2 = this;
            lazyArray2.setDataGetter((chunkNum) => {
              var start = chunkNum * chunkSize;
              var end = (chunkNum + 1) * chunkSize - 1;
              end = Math.min(end, datalength - 1);
              if (typeof lazyArray2.chunks[chunkNum] == "undefined") {
                lazyArray2.chunks[chunkNum] = doXHR(start, end);
              }
              if (typeof lazyArray2.chunks[chunkNum] == "undefined")
                throw new Error("doXHR failed!");
              return lazyArray2.chunks[chunkNum];
            });
            if (usesGzip || !datalength) {
              chunkSize = datalength = 1;
              datalength = this.getter(0).length;
              chunkSize = datalength;
              out(
                "LazyFiles on gzip forces download of the whole file when length is accessed"
              );
            }
            this._length = datalength;
            this._chunkSize = chunkSize;
            this.lengthKnown = true;
          }
          get length() {
            if (!this.lengthKnown) {
              this.cacheLength();
            }
            return this._length;
          }
          get chunkSize() {
            if (!this.lengthKnown) {
              this.cacheLength();
            }
            return this._chunkSize;
          }
        }
        if (typeof XMLHttpRequest != "undefined") {
          if (!ENVIRONMENT_IS_WORKER)
            throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
          var lazyArray = new LazyUint8Array();
          var properties = { isDevice: false, contents: lazyArray };
        } else {
          var properties = { isDevice: false, url };
        }
        var node = FS.createFile(parent, name, properties, canRead, canWrite);
        if (properties.contents) {
          node.contents = properties.contents;
        } else if (properties.url) {
          node.contents = null;
          node.url = properties.url;
        }
        Object.defineProperties(node, {
          usedBytes: {
            get: function() {
              return this.contents.length;
            }
          }
        });
        var stream_ops = {};
        var keys = Object.keys(node.stream_ops);
        keys.forEach((key) => {
          var fn = node.stream_ops[key];
          stream_ops[key] = (...args) => {
            FS.forceLoadFile(node);
            return fn(...args);
          };
        });
        function writeChunks(stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= contents.length) return 0;
          var size = Math.min(contents.length - position, length);
          if (contents.slice) {
            for (var i = 0; i < size; i++) {
              buffer[offset + i] = contents[position + i];
            }
          } else {
            for (var i = 0; i < size; i++) {
              buffer[offset + i] = contents.get(position + i);
            }
          }
          return size;
        }
        stream_ops.read = (stream, buffer, offset, length, position) => {
          FS.forceLoadFile(node);
          return writeChunks(stream, buffer, offset, length, position);
        };
        stream_ops.mmap = (stream, length, position, prot, flags) => {
          FS.forceLoadFile(node);
          var ptr = mmapAlloc();
          if (!ptr) {
            throw new FS.ErrnoError(48);
          }
          writeChunks(stream, HEAP8, ptr, length, position);
          return { ptr, allocated: true };
        };
        node.stream_ops = stream_ops;
        return node;
      }
    };
    var UTF8ToString = (ptr, maxBytesToRead) => ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
    var SYSCALLS = {
      DEFAULT_POLLMASK: 5,
      calculateAt(dirfd, path, allowEmpty) {
        if (PATH.isAbs(path)) {
          return path;
        }
        var dir;
        if (dirfd === -100) {
          dir = FS.cwd();
        } else {
          var dirstream = SYSCALLS.getStreamFromFD(dirfd);
          dir = dirstream.path;
        }
        if (path.length == 0) {
          if (!allowEmpty) {
            throw new FS.ErrnoError(44);
          }
          return dir;
        }
        return dir + "/" + path;
      },
      doStat(func, path, buf) {
        var stat = func(path);
        HEAP32[buf >> 2] = stat.dev;
        HEAP32[buf + 4 >> 2] = stat.mode;
        HEAPU32[buf + 8 >> 2] = stat.nlink;
        HEAP32[buf + 12 >> 2] = stat.uid;
        HEAP32[buf + 16 >> 2] = stat.gid;
        HEAP32[buf + 20 >> 2] = stat.rdev;
        tempI64 = [
          stat.size >>> 0,
          (tempDouble = stat.size, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil(
            (tempDouble - +(~~tempDouble >>> 0)) / 4294967296
          ) >>> 0 : 0)
        ], HEAP32[buf + 24 >> 2] = tempI64[0], HEAP32[buf + 28 >> 2] = tempI64[1];
        HEAP32[buf + 32 >> 2] = 4096;
        HEAP32[buf + 36 >> 2] = stat.blocks;
        var atime = stat.atime.getTime();
        var mtime = stat.mtime.getTime();
        var ctime = stat.ctime.getTime();
        tempI64 = [
          Math.floor(atime / 1e3) >>> 0,
          (tempDouble = Math.floor(atime / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil(
            (tempDouble - +(~~tempDouble >>> 0)) / 4294967296
          ) >>> 0 : 0)
        ], HEAP32[buf + 40 >> 2] = tempI64[0], HEAP32[buf + 44 >> 2] = tempI64[1];
        HEAPU32[buf + 48 >> 2] = atime % 1e3 * 1e3 * 1e3;
        tempI64 = [
          Math.floor(mtime / 1e3) >>> 0,
          (tempDouble = Math.floor(mtime / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil(
            (tempDouble - +(~~tempDouble >>> 0)) / 4294967296
          ) >>> 0 : 0)
        ], HEAP32[buf + 56 >> 2] = tempI64[0], HEAP32[buf + 60 >> 2] = tempI64[1];
        HEAPU32[buf + 64 >> 2] = mtime % 1e3 * 1e3 * 1e3;
        tempI64 = [
          Math.floor(ctime / 1e3) >>> 0,
          (tempDouble = Math.floor(ctime / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil(
            (tempDouble - +(~~tempDouble >>> 0)) / 4294967296
          ) >>> 0 : 0)
        ], HEAP32[buf + 72 >> 2] = tempI64[0], HEAP32[buf + 76 >> 2] = tempI64[1];
        HEAPU32[buf + 80 >> 2] = ctime % 1e3 * 1e3 * 1e3;
        tempI64 = [
          stat.ino >>> 0,
          (tempDouble = stat.ino, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil(
            (tempDouble - +(~~tempDouble >>> 0)) / 4294967296
          ) >>> 0 : 0)
        ], HEAP32[buf + 88 >> 2] = tempI64[0], HEAP32[buf + 92 >> 2] = tempI64[1];
        return 0;
      },
      doMsync(addr, stream, len, flags, offset) {
        if (!FS.isFile(stream.node.mode)) {
          throw new FS.ErrnoError(43);
        }
        if (flags & 2) {
          return 0;
        }
        var buffer = HEAPU8.slice(addr, addr + len);
        FS.msync(stream, buffer, offset, len, flags);
      },
      getStreamFromFD(fd) {
        var stream = FS.getStreamChecked(fd);
        return stream;
      },
      varargs: void 0,
      getStr(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      }
    };
    function ___syscall_fcntl64(fd, cmd, varargs) {
      SYSCALLS.varargs = varargs;
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        switch (cmd) {
          case 0: {
            var arg = syscallGetVarargI();
            if (arg < 0) {
              return -28;
            }
            while (FS.streams[arg]) {
              arg++;
            }
            var newStream;
            newStream = FS.dupStream(stream, arg);
            return newStream.fd;
          }
          case 1:
          case 2:
            return 0;
          case 3:
            return stream.flags;
          case 4: {
            var arg = syscallGetVarargI();
            stream.flags |= arg;
            return 0;
          }
          case 12: {
            var arg = syscallGetVarargP();
            var offset = 0;
            HEAP16[arg + offset >> 1] = 2;
            return 0;
          }
          case 13:
          case 14:
            return 0;
        }
        return -28;
      } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return -e.errno;
      }
    }
    function ___syscall_ioctl(fd, op, varargs) {
      SYSCALLS.varargs = varargs;
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        switch (op) {
          case 21509: {
            if (!stream.tty) return -59;
            return 0;
          }
          case 21505: {
            if (!stream.tty) return -59;
            if (stream.tty.ops.ioctl_tcgets) {
              var termios = stream.tty.ops.ioctl_tcgets(stream);
              var argp = syscallGetVarargP();
              HEAP32[argp >> 2] = termios.c_iflag || 0;
              HEAP32[argp + 4 >> 2] = termios.c_oflag || 0;
              HEAP32[argp + 8 >> 2] = termios.c_cflag || 0;
              HEAP32[argp + 12 >> 2] = termios.c_lflag || 0;
              for (var i = 0; i < 32; i++) {
                HEAP8[argp + i + 17] = termios.c_cc[i] || 0;
              }
              return 0;
            }
            return 0;
          }
          case 21510:
          case 21511:
          case 21512: {
            if (!stream.tty) return -59;
            return 0;
          }
          case 21506:
          case 21507:
          case 21508: {
            if (!stream.tty) return -59;
            if (stream.tty.ops.ioctl_tcsets) {
              var argp = syscallGetVarargP();
              var c_iflag = HEAP32[argp >> 2];
              var c_oflag = HEAP32[argp + 4 >> 2];
              var c_cflag = HEAP32[argp + 8 >> 2];
              var c_lflag = HEAP32[argp + 12 >> 2];
              var c_cc = [];
              for (var i = 0; i < 32; i++) {
                c_cc.push(HEAP8[argp + i + 17]);
              }
              return stream.tty.ops.ioctl_tcsets(stream.tty, op, {
                c_iflag,
                c_oflag,
                c_cflag,
                c_lflag,
                c_cc
              });
            }
            return 0;
          }
          case 21519: {
            if (!stream.tty) return -59;
            var argp = syscallGetVarargP();
            HEAP32[argp >> 2] = 0;
            return 0;
          }
          case 21520: {
            if (!stream.tty) return -59;
            return -28;
          }
          case 21531: {
            var argp = syscallGetVarargP();
            return FS.ioctl(stream, op, argp);
          }
          case 21523: {
            if (!stream.tty) return -59;
            if (stream.tty.ops.ioctl_tiocgwinsz) {
              var winsize = stream.tty.ops.ioctl_tiocgwinsz(stream.tty);
              var argp = syscallGetVarargP();
              HEAP16[argp >> 1] = winsize[0];
              HEAP16[argp + 2 >> 1] = winsize[1];
            }
            return 0;
          }
          case 21524: {
            if (!stream.tty) return -59;
            return 0;
          }
          case 21515: {
            if (!stream.tty) return -59;
            return 0;
          }
          default:
            return -28;
        }
      } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return -e.errno;
      }
    }
    function ___syscall_openat(dirfd, path, flags, varargs) {
      SYSCALLS.varargs = varargs;
      try {
        path = SYSCALLS.getStr(path);
        path = SYSCALLS.calculateAt(dirfd, path);
        var mode = varargs ? syscallGetVarargI() : 0;
        return FS.open(path, flags, mode).fd;
      } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return -e.errno;
      }
    }
    var __abort_js = () => abort("");
    var tupleRegistrations = {};
    var runDestructors = (destructors) => {
      while (destructors.length) {
        var ptr = destructors.pop();
        var del = destructors.pop();
        del(ptr);
      }
    };
    function readPointer(pointer) {
      return this["fromWireType"](HEAPU32[pointer >> 2]);
    }
    var awaitingDependencies = {};
    var registeredTypes = {};
    var typeDependencies = {};
    var InternalError;
    var throwInternalError = (message) => {
      throw new InternalError(message);
    };
    var whenDependentTypesAreResolved = (myTypes, dependentTypes, getTypeConverters) => {
      myTypes.forEach((type) => typeDependencies[type] = dependentTypes);
      function onComplete(typeConverters2) {
        var myTypeConverters = getTypeConverters(typeConverters2);
        if (myTypeConverters.length !== myTypes.length) {
          throwInternalError("Mismatched type converter count");
        }
        for (var i = 0; i < myTypes.length; ++i) {
          registerType(myTypes[i], myTypeConverters[i]);
        }
      }
      var typeConverters = new Array(dependentTypes.length);
      var unregisteredTypes = [];
      var registered = 0;
      dependentTypes.forEach((dt, i) => {
        if (registeredTypes.hasOwnProperty(dt)) {
          typeConverters[i] = registeredTypes[dt];
        } else {
          unregisteredTypes.push(dt);
          if (!awaitingDependencies.hasOwnProperty(dt)) {
            awaitingDependencies[dt] = [];
          }
          awaitingDependencies[dt].push(() => {
            typeConverters[i] = registeredTypes[dt];
            ++registered;
            if (registered === unregisteredTypes.length) {
              onComplete(typeConverters);
            }
          });
        }
      });
      if (0 === unregisteredTypes.length) {
        onComplete(typeConverters);
      }
    };
    var __embind_finalize_value_array = (rawTupleType) => {
      var reg = tupleRegistrations[rawTupleType];
      delete tupleRegistrations[rawTupleType];
      var elements = reg.elements;
      var elementsLength = elements.length;
      var elementTypes = elements.map((elt) => elt.getterReturnType).concat(elements.map((elt) => elt.setterArgumentType));
      var rawConstructor = reg.rawConstructor;
      var rawDestructor = reg.rawDestructor;
      whenDependentTypesAreResolved(
        [rawTupleType],
        elementTypes,
        (elementTypes2) => {
          elements.forEach((elt, i) => {
            var getterReturnType = elementTypes2[i];
            var getter = elt.getter;
            var getterContext = elt.getterContext;
            var setterArgumentType = elementTypes2[i + elementsLength];
            var setter = elt.setter;
            var setterContext = elt.setterContext;
            elt.read = (ptr) => getterReturnType["fromWireType"](getter(getterContext, ptr));
            elt.write = (ptr, o) => {
              var destructors = [];
              setter(
                setterContext,
                ptr,
                setterArgumentType["toWireType"](destructors, o)
              );
              runDestructors(destructors);
            };
          });
          return [
            {
              name: reg.name,
              fromWireType: (ptr) => {
                var rv = new Array(elementsLength);
                for (var i = 0; i < elementsLength; ++i) {
                  rv[i] = elements[i].read(ptr);
                }
                rawDestructor(ptr);
                return rv;
              },
              toWireType: (destructors, o) => {
                if (elementsLength !== o.length) {
                  throw new TypeError(
                    `Incorrect number of tuple elements for ${reg.name}: expected=${elementsLength}, actual=${o.length}`
                  );
                }
                var ptr = rawConstructor();
                for (var i = 0; i < elementsLength; ++i) {
                  elements[i].write(ptr, o[i]);
                }
                if (destructors !== null) {
                  destructors.push(rawDestructor, ptr);
                }
                return ptr;
              },
              argPackAdvance: GenericWireTypeSize,
              readValueFromPointer: readPointer,
              destructorFunction: rawDestructor
            }
          ];
        }
      );
    };
    var structRegistrations = {};
    var __embind_finalize_value_object = (structType) => {
      var reg = structRegistrations[structType];
      delete structRegistrations[structType];
      var rawConstructor = reg.rawConstructor;
      var rawDestructor = reg.rawDestructor;
      var fieldRecords = reg.fields;
      var fieldTypes = fieldRecords.map((field) => field.getterReturnType).concat(fieldRecords.map((field) => field.setterArgumentType));
      whenDependentTypesAreResolved(
        [structType],
        fieldTypes,
        (fieldTypes2) => {
          var fields = {};
          fieldRecords.forEach((field, i) => {
            var fieldName = field.fieldName;
            var getterReturnType = fieldTypes2[i];
            var getter = field.getter;
            var getterContext = field.getterContext;
            var setterArgumentType = fieldTypes2[i + fieldRecords.length];
            var setter = field.setter;
            var setterContext = field.setterContext;
            fields[fieldName] = {
              read: (ptr) => getterReturnType["fromWireType"](getter(getterContext, ptr)),
              write: (ptr, o) => {
                var destructors = [];
                setter(
                  setterContext,
                  ptr,
                  setterArgumentType["toWireType"](destructors, o)
                );
                runDestructors(destructors);
              }
            };
          });
          return [
            {
              name: reg.name,
              fromWireType: (ptr) => {
                var rv = {};
                for (var i in fields) {
                  rv[i] = fields[i].read(ptr);
                }
                rawDestructor(ptr);
                return rv;
              },
              toWireType: (destructors, o) => {
                for (var fieldName in fields) {
                  if (!(fieldName in o)) {
                    throw new TypeError(`Missing field: "${fieldName}"`);
                  }
                }
                var ptr = rawConstructor();
                for (fieldName in fields) {
                  fields[fieldName].write(ptr, o[fieldName]);
                }
                if (destructors !== null) {
                  destructors.push(rawDestructor, ptr);
                }
                return ptr;
              },
              argPackAdvance: GenericWireTypeSize,
              readValueFromPointer: readPointer,
              destructorFunction: rawDestructor
            }
          ];
        }
      );
    };
    var __embind_register_bigint = (primitiveType, name, size, minRange, maxRange) => {
    };
    var embind_init_charCodes = () => {
      var codes = new Array(256);
      for (var i = 0; i < 256; ++i) {
        codes[i] = String.fromCharCode(i);
      }
      embind_charCodes = codes;
    };
    var embind_charCodes;
    var readLatin1String = (ptr) => {
      var ret = "";
      var c = ptr;
      while (HEAPU8[c]) {
        ret += embind_charCodes[HEAPU8[c++]];
      }
      return ret;
    };
    var BindingError;
    var throwBindingError = (message) => {
      throw new BindingError(message);
    };
    function sharedRegisterType(rawType, registeredInstance, options = {}) {
      var name = registeredInstance.name;
      if (!rawType) {
        throwBindingError(
          `type "${name}" must have a positive integer typeid pointer`
        );
      }
      if (registeredTypes.hasOwnProperty(rawType)) {
        if (options.ignoreDuplicateRegistrations) {
          return;
        } else {
          throwBindingError(`Cannot register type '${name}' twice`);
        }
      }
      registeredTypes[rawType] = registeredInstance;
      delete typeDependencies[rawType];
      if (awaitingDependencies.hasOwnProperty(rawType)) {
        var callbacks = awaitingDependencies[rawType];
        delete awaitingDependencies[rawType];
        callbacks.forEach((cb) => cb());
      }
    }
    function registerType(rawType, registeredInstance, options = {}) {
      return sharedRegisterType(rawType, registeredInstance, options);
    }
    var GenericWireTypeSize = 8;
    var __embind_register_bool = (rawType, name, trueValue, falseValue) => {
      name = readLatin1String(name);
      registerType(rawType, {
        name,
        fromWireType: function(wt) {
          return !!wt;
        },
        toWireType: function(destructors, o) {
          return o ? trueValue : falseValue;
        },
        argPackAdvance: GenericWireTypeSize,
        readValueFromPointer: function(pointer) {
          return this["fromWireType"](HEAPU8[pointer]);
        },
        destructorFunction: null
      });
    };
    var shallowCopyInternalPointer = (o) => ({
      count: o.count,
      deleteScheduled: o.deleteScheduled,
      preservePointerOnDelete: o.preservePointerOnDelete,
      ptr: o.ptr,
      ptrType: o.ptrType,
      smartPtr: o.smartPtr,
      smartPtrType: o.smartPtrType
    });
    var throwInstanceAlreadyDeleted = (obj) => {
      function getInstanceTypeName(handle) {
        return handle.$$.ptrType.registeredClass.name;
      }
      throwBindingError(
        getInstanceTypeName(obj) + " instance already deleted"
      );
    };
    var finalizationRegistry = false;
    var detachFinalizer = (handle) => {
    };
    var runDestructor = ($$) => {
      if ($$.smartPtr) {
        $$.smartPtrType.rawDestructor($$.smartPtr);
      } else {
        $$.ptrType.registeredClass.rawDestructor($$.ptr);
      }
    };
    var releaseClassHandle = ($$) => {
      $$.count.value -= 1;
      var toDelete = 0 === $$.count.value;
      if (toDelete) {
        runDestructor($$);
      }
    };
    var downcastPointer = (ptr, ptrClass, desiredClass) => {
      if (ptrClass === desiredClass) {
        return ptr;
      }
      if (void 0 === desiredClass.baseClass) {
        return null;
      }
      var rv = downcastPointer(ptr, ptrClass, desiredClass.baseClass);
      if (rv === null) {
        return null;
      }
      return desiredClass.downcast(rv);
    };
    var registeredPointers = {};
    var registeredInstances = {};
    var getBasestPointer = (class_, ptr) => {
      if (ptr === void 0) {
        throwBindingError("ptr should not be undefined");
      }
      while (class_.baseClass) {
        ptr = class_.upcast(ptr);
        class_ = class_.baseClass;
      }
      return ptr;
    };
    var getInheritedInstance = (class_, ptr) => {
      ptr = getBasestPointer(class_, ptr);
      return registeredInstances[ptr];
    };
    var makeClassHandle = (prototype, record) => {
      if (!record.ptrType || !record.ptr) {
        throwInternalError("makeClassHandle requires ptr and ptrType");
      }
      var hasSmartPtrType = !!record.smartPtrType;
      var hasSmartPtr = !!record.smartPtr;
      if (hasSmartPtrType !== hasSmartPtr) {
        throwInternalError(
          "Both smartPtrType and smartPtr must be specified"
        );
      }
      record.count = { value: 1 };
      return attachFinalizer(
        Object.create(prototype, { $$: { value: record, writable: true } })
      );
    };
    function RegisteredPointer_fromWireType(ptr) {
      var rawPointer = this.getPointee(ptr);
      if (!rawPointer) {
        this.destructor(ptr);
        return null;
      }
      var registeredInstance = getInheritedInstance(
        this.registeredClass,
        rawPointer
      );
      if (void 0 !== registeredInstance) {
        if (0 === registeredInstance.$$.count.value) {
          registeredInstance.$$.ptr = rawPointer;
          registeredInstance.$$.smartPtr = ptr;
          return registeredInstance["clone"]();
        } else {
          var rv = registeredInstance["clone"]();
          this.destructor(ptr);
          return rv;
        }
      }
      function makeDefaultHandle() {
        if (this.isSmartPointer) {
          return makeClassHandle(this.registeredClass.instancePrototype, {
            ptrType: this.pointeeType,
            ptr: rawPointer,
            smartPtrType: this,
            smartPtr: ptr
          });
        } else {
          return makeClassHandle(this.registeredClass.instancePrototype, {
            ptrType: this,
            ptr
          });
        }
      }
      var actualType = this.registeredClass.getActualType(rawPointer);
      var registeredPointerRecord = registeredPointers[actualType];
      if (!registeredPointerRecord) {
        return makeDefaultHandle.call(this);
      }
      var toType;
      if (this.isConst) {
        toType = registeredPointerRecord.constPointerType;
      } else {
        toType = registeredPointerRecord.pointerType;
      }
      var dp = downcastPointer(
        rawPointer,
        this.registeredClass,
        toType.registeredClass
      );
      if (dp === null) {
        return makeDefaultHandle.call(this);
      }
      if (this.isSmartPointer) {
        return makeClassHandle(toType.registeredClass.instancePrototype, {
          ptrType: toType,
          ptr: dp,
          smartPtrType: this,
          smartPtr: ptr
        });
      } else {
        return makeClassHandle(toType.registeredClass.instancePrototype, {
          ptrType: toType,
          ptr: dp
        });
      }
    }
    var attachFinalizer = (handle) => {
      if ("undefined" === typeof FinalizationRegistry) {
        attachFinalizer = (handle2) => handle2;
        return handle;
      }
      finalizationRegistry = new FinalizationRegistry((info2) => {
        releaseClassHandle(info2.$$);
      });
      attachFinalizer = (handle2) => {
        var $$ = handle2.$$;
        var hasSmartPtr = !!$$.smartPtr;
        if (hasSmartPtr) {
          var info2 = { $$ };
          finalizationRegistry.register(handle2, info2, handle2);
        }
        return handle2;
      };
      detachFinalizer = (handle2) => finalizationRegistry.unregister(handle2);
      return attachFinalizer(handle);
    };
    var init_ClassHandle = () => {
      Object.assign(ClassHandle.prototype, {
        isAliasOf(other) {
          if (!(this instanceof ClassHandle)) {
            return false;
          }
          if (!(other instanceof ClassHandle)) {
            return false;
          }
          var leftClass = this.$$.ptrType.registeredClass;
          var left = this.$$.ptr;
          other.$$ = other.$$;
          var rightClass = other.$$.ptrType.registeredClass;
          var right = other.$$.ptr;
          while (leftClass.baseClass) {
            left = leftClass.upcast(left);
            leftClass = leftClass.baseClass;
          }
          while (rightClass.baseClass) {
            right = rightClass.upcast(right);
            rightClass = rightClass.baseClass;
          }
          return leftClass === rightClass && left === right;
        },
        clone() {
          if (!this.$$.ptr) {
            throwInstanceAlreadyDeleted(this);
          }
          if (this.$$.preservePointerOnDelete) {
            this.$$.count.value += 1;
            return this;
          } else {
            var clone = attachFinalizer(
              Object.create(Object.getPrototypeOf(this), {
                $$: { value: shallowCopyInternalPointer(this.$$) }
              })
            );
            clone.$$.count.value += 1;
            clone.$$.deleteScheduled = false;
            return clone;
          }
        },
        delete() {
          if (!this.$$.ptr) {
            throwInstanceAlreadyDeleted(this);
          }
          if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
            throwBindingError("Object already scheduled for deletion");
          }
          detachFinalizer(this);
          releaseClassHandle(this.$$);
          if (!this.$$.preservePointerOnDelete) {
            this.$$.smartPtr = void 0;
            this.$$.ptr = void 0;
          }
        },
        isDeleted() {
          return !this.$$.ptr;
        },
        deleteLater() {
          if (!this.$$.ptr) {
            throwInstanceAlreadyDeleted(this);
          }
          if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
            throwBindingError("Object already scheduled for deletion");
          }
          this.$$.deleteScheduled = true;
          return this;
        }
      });
    };
    function ClassHandle() {
    }
    var createNamedFunction = (name, body) => Object.defineProperty(body, "name", { value: name });
    var ensureOverloadTable = (proto, methodName, humanName) => {
      if (void 0 === proto[methodName].overloadTable) {
        var prevFunc = proto[methodName];
        proto[methodName] = function(...args) {
          if (!proto[methodName].overloadTable.hasOwnProperty(args.length)) {
            throwBindingError(
              `Function '${humanName}' called with an invalid number of arguments (${args.length}) - expects one of (${proto[methodName].overloadTable})!`
            );
          }
          return proto[methodName].overloadTable[args.length].apply(
            this,
            args
          );
        };
        proto[methodName].overloadTable = [];
        proto[methodName].overloadTable[prevFunc.argCount] = prevFunc;
      }
    };
    var exposePublicSymbol = (name, value, numArguments) => {
      if (Module.hasOwnProperty(name)) {
        if (void 0 === numArguments || void 0 !== Module[name].overloadTable && void 0 !== Module[name].overloadTable[numArguments]) {
          throwBindingError(`Cannot register public name '${name}' twice`);
        }
        ensureOverloadTable(Module, name, name);
        if (Module[name].overloadTable.hasOwnProperty(numArguments)) {
          throwBindingError(
            `Cannot register multiple overloads of a function with the same number of arguments (${numArguments})!`
          );
        }
        Module[name].overloadTable[numArguments] = value;
      } else {
        Module[name] = value;
        Module[name].argCount = numArguments;
      }
    };
    var char_0 = 48;
    var char_9 = 57;
    var makeLegalFunctionName = (name) => {
      name = name.replace(/[^a-zA-Z0-9_]/g, "$");
      var f = name.charCodeAt(0);
      if (f >= char_0 && f <= char_9) {
        return `_${name}`;
      }
      return name;
    };
    function RegisteredClass(name, constructor, instancePrototype, rawDestructor, baseClass, getActualType, upcast, downcast) {
      this.name = name;
      this.constructor = constructor;
      this.instancePrototype = instancePrototype;
      this.rawDestructor = rawDestructor;
      this.baseClass = baseClass;
      this.getActualType = getActualType;
      this.upcast = upcast;
      this.downcast = downcast;
      this.pureVirtualFunctions = [];
    }
    var upcastPointer = (ptr, ptrClass, desiredClass) => {
      while (ptrClass !== desiredClass) {
        if (!ptrClass.upcast) {
          throwBindingError(
            `Expected null or instance of ${desiredClass.name}, got an instance of ${ptrClass.name}`
          );
        }
        ptr = ptrClass.upcast(ptr);
        ptrClass = ptrClass.baseClass;
      }
      return ptr;
    };
    function constNoSmartPtrRawPointerToWireType(destructors, handle) {
      if (handle === null) {
        if (this.isReference) {
          throwBindingError(`null is not a valid ${this.name}`);
        }
        return 0;
      }
      if (!handle.$$) {
        throwBindingError(
          `Cannot pass "${embindRepr(handle)}" as a ${this.name}`
        );
      }
      if (!handle.$$.ptr) {
        throwBindingError(
          `Cannot pass deleted object as a pointer of type ${this.name}`
        );
      }
      var handleClass = handle.$$.ptrType.registeredClass;
      var ptr = upcastPointer(
        handle.$$.ptr,
        handleClass,
        this.registeredClass
      );
      return ptr;
    }
    function genericPointerToWireType(destructors, handle) {
      var ptr;
      if (handle === null) {
        if (this.isReference) {
          throwBindingError(`null is not a valid ${this.name}`);
        }
        if (this.isSmartPointer) {
          ptr = this.rawConstructor();
          if (destructors !== null) {
            destructors.push(this.rawDestructor, ptr);
          }
          return ptr;
        } else {
          return 0;
        }
      }
      if (!handle || !handle.$$) {
        throwBindingError(
          `Cannot pass "${embindRepr(handle)}" as a ${this.name}`
        );
      }
      if (!handle.$$.ptr) {
        throwBindingError(
          `Cannot pass deleted object as a pointer of type ${this.name}`
        );
      }
      if (!this.isConst && handle.$$.ptrType.isConst) {
        throwBindingError(
          `Cannot convert argument of type ${handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name} to parameter type ${this.name}`
        );
      }
      var handleClass = handle.$$.ptrType.registeredClass;
      ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
      if (this.isSmartPointer) {
        if (void 0 === handle.$$.smartPtr) {
          throwBindingError(
            "Passing raw pointer to smart pointer is illegal"
          );
        }
        switch (this.sharingPolicy) {
          case 0:
            if (handle.$$.smartPtrType === this) {
              ptr = handle.$$.smartPtr;
            } else {
              throwBindingError(
                `Cannot convert argument of type ${handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name} to parameter type ${this.name}`
              );
            }
            break;
          case 1:
            ptr = handle.$$.smartPtr;
            break;
          case 2:
            if (handle.$$.smartPtrType === this) {
              ptr = handle.$$.smartPtr;
            } else {
              var clonedHandle = handle["clone"]();
              ptr = this.rawShare(
                ptr,
                Emval.toHandle(() => clonedHandle["delete"]())
              );
              if (destructors !== null) {
                destructors.push(this.rawDestructor, ptr);
              }
            }
            break;
          default:
            throwBindingError("Unsupporting sharing policy");
        }
      }
      return ptr;
    }
    function nonConstNoSmartPtrRawPointerToWireType(destructors, handle) {
      if (handle === null) {
        if (this.isReference) {
          throwBindingError(`null is not a valid ${this.name}`);
        }
        return 0;
      }
      if (!handle.$$) {
        throwBindingError(
          `Cannot pass "${embindRepr(handle)}" as a ${this.name}`
        );
      }
      if (!handle.$$.ptr) {
        throwBindingError(
          `Cannot pass deleted object as a pointer of type ${this.name}`
        );
      }
      if (handle.$$.ptrType.isConst) {
        throwBindingError(
          `Cannot convert argument of type ${handle.$$.ptrType.name} to parameter type ${this.name}`
        );
      }
      var handleClass = handle.$$.ptrType.registeredClass;
      var ptr = upcastPointer(
        handle.$$.ptr,
        handleClass,
        this.registeredClass
      );
      return ptr;
    }
    var init_RegisteredPointer = () => {
      Object.assign(RegisteredPointer.prototype, {
        getPointee(ptr) {
          if (this.rawGetPointee) {
            ptr = this.rawGetPointee(ptr);
          }
          return ptr;
        },
        destructor(ptr) {
          var _a2;
          (_a2 = this.rawDestructor) == null ? void 0 : _a2.call(this, ptr);
        },
        argPackAdvance: GenericWireTypeSize,
        readValueFromPointer: readPointer,
        fromWireType: RegisteredPointer_fromWireType
      });
    };
    function RegisteredPointer(name, registeredClass, isReference, isConst, isSmartPointer, pointeeType, sharingPolicy, rawGetPointee, rawConstructor, rawShare, rawDestructor) {
      this.name = name;
      this.registeredClass = registeredClass;
      this.isReference = isReference;
      this.isConst = isConst;
      this.isSmartPointer = isSmartPointer;
      this.pointeeType = pointeeType;
      this.sharingPolicy = sharingPolicy;
      this.rawGetPointee = rawGetPointee;
      this.rawConstructor = rawConstructor;
      this.rawShare = rawShare;
      this.rawDestructor = rawDestructor;
      if (!isSmartPointer && registeredClass.baseClass === void 0) {
        if (isConst) {
          this["toWireType"] = constNoSmartPtrRawPointerToWireType;
          this.destructorFunction = null;
        } else {
          this["toWireType"] = nonConstNoSmartPtrRawPointerToWireType;
          this.destructorFunction = null;
        }
      } else {
        this["toWireType"] = genericPointerToWireType;
      }
    }
    var replacePublicSymbol = (name, value, numArguments) => {
      if (!Module.hasOwnProperty(name)) {
        throwInternalError("Replacing nonexistent public symbol");
      }
      if (void 0 !== Module[name].overloadTable && void 0 !== numArguments) {
        Module[name].overloadTable[numArguments] = value;
      } else {
        Module[name] = value;
        Module[name].argCount = numArguments;
      }
    };
    var dynCallLegacy = (sig, ptr, args) => {
      sig = sig.replace(/p/g, "i");
      var f = Module["dynCall_" + sig];
      return f(ptr, ...args);
    };
    var wasmTableMirror = [];
    var wasmTable;
    var getWasmTableEntry = (funcPtr) => {
      var func = wasmTableMirror[funcPtr];
      if (!func) {
        if (funcPtr >= wasmTableMirror.length)
          wasmTableMirror.length = funcPtr + 1;
        wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
      }
      return func;
    };
    var dynCall = (sig, ptr, args = []) => {
      if (sig.includes("j")) {
        return dynCallLegacy(sig, ptr, args);
      }
      var rtn = getWasmTableEntry(ptr)(...args);
      return rtn;
    };
    var getDynCaller = (sig, ptr) => (...args) => dynCall(sig, ptr, args);
    var embind__requireFunction = (signature, rawFunction) => {
      signature = readLatin1String(signature);
      function makeDynCaller() {
        if (signature.includes("j")) {
          return getDynCaller(signature, rawFunction);
        }
        return getWasmTableEntry(rawFunction);
      }
      var fp = makeDynCaller();
      if (typeof fp != "function") {
        throwBindingError(
          `unknown function pointer with signature ${signature}: ${rawFunction}`
        );
      }
      return fp;
    };
    var extendError = (baseErrorType, errorName) => {
      var errorClass = createNamedFunction(errorName, function(message) {
        this.name = errorName;
        this.message = message;
        var stack = new Error(message).stack;
        if (stack !== void 0) {
          this.stack = this.toString() + "\n" + stack.replace(/^Error(:[^\n]*)?\n/, "");
        }
      });
      errorClass.prototype = Object.create(baseErrorType.prototype);
      errorClass.prototype.constructor = errorClass;
      errorClass.prototype.toString = function() {
        if (this.message === void 0) {
          return this.name;
        } else {
          return `${this.name}: ${this.message}`;
        }
      };
      return errorClass;
    };
    var UnboundTypeError;
    var getTypeName = (type) => {
      var ptr = ___getTypeName(type);
      var rv = readLatin1String(ptr);
      _free(ptr);
      return rv;
    };
    var throwUnboundTypeError = (message, types) => {
      var unboundTypes = [];
      var seen = {};
      function visit(type) {
        if (seen[type]) {
          return;
        }
        if (registeredTypes[type]) {
          return;
        }
        if (typeDependencies[type]) {
          typeDependencies[type].forEach(visit);
          return;
        }
        unboundTypes.push(type);
        seen[type] = true;
      }
      types.forEach(visit);
      throw new UnboundTypeError(
        `${message}: ` + unboundTypes.map(getTypeName).join([", "])
      );
    };
    var __embind_register_class = (rawType, rawPointerType, rawConstPointerType, baseClassRawType, getActualTypeSignature, getActualType, upcastSignature, upcast, downcastSignature, downcast, name, destructorSignature, rawDestructor) => {
      name = readLatin1String(name);
      getActualType = embind__requireFunction(
        getActualTypeSignature,
        getActualType
      );
      upcast && (upcast = embind__requireFunction(upcastSignature, upcast));
      downcast && (downcast = embind__requireFunction(downcastSignature, downcast));
      rawDestructor = embind__requireFunction(
        destructorSignature,
        rawDestructor
      );
      var legalFunctionName = makeLegalFunctionName(name);
      exposePublicSymbol(legalFunctionName, function() {
        throwUnboundTypeError(
          `Cannot construct ${name} due to unbound types`,
          [baseClassRawType]
        );
      });
      whenDependentTypesAreResolved(
        [rawType, rawPointerType, rawConstPointerType],
        baseClassRawType ? [baseClassRawType] : [],
        (base) => {
          var _a2;
          base = base[0];
          var baseClass;
          var basePrototype;
          if (baseClassRawType) {
            baseClass = base.registeredClass;
            basePrototype = baseClass.instancePrototype;
          } else {
            basePrototype = ClassHandle.prototype;
          }
          var constructor = createNamedFunction(name, function(...args) {
            if (Object.getPrototypeOf(this) !== instancePrototype) {
              throw new BindingError("Use 'new' to construct " + name);
            }
            if (void 0 === registeredClass.constructor_body) {
              throw new BindingError(name + " has no accessible constructor");
            }
            var body = registeredClass.constructor_body[args.length];
            if (void 0 === body) {
              throw new BindingError(
                `Tried to invoke ctor of ${name} with invalid number of parameters (${args.length}) - expected (${Object.keys(registeredClass.constructor_body).toString()}) parameters instead!`
              );
            }
            return body.apply(this, args);
          });
          var instancePrototype = Object.create(basePrototype, {
            constructor: { value: constructor }
          });
          constructor.prototype = instancePrototype;
          var registeredClass = new RegisteredClass(
            name,
            constructor,
            instancePrototype,
            rawDestructor,
            baseClass,
            getActualType,
            upcast,
            downcast
          );
          if (registeredClass.baseClass) {
            (_a2 = registeredClass.baseClass).__derivedClasses ?? (_a2.__derivedClasses = []);
            registeredClass.baseClass.__derivedClasses.push(registeredClass);
          }
          var referenceConverter = new RegisteredPointer(
            name,
            registeredClass,
            true,
            false,
            false
          );
          var pointerConverter = new RegisteredPointer(
            name + "*",
            registeredClass,
            false,
            false,
            false
          );
          var constPointerConverter = new RegisteredPointer(
            name + " const*",
            registeredClass,
            false,
            true,
            false
          );
          registeredPointers[rawType] = {
            pointerType: pointerConverter,
            constPointerType: constPointerConverter
          };
          replacePublicSymbol(legalFunctionName, constructor);
          return [
            referenceConverter,
            pointerConverter,
            constPointerConverter
          ];
        }
      );
    };
    function usesDestructorStack(argTypes) {
      for (var i = 1; i < argTypes.length; ++i) {
        if (argTypes[i] !== null && argTypes[i].destructorFunction === void 0) {
          return true;
        }
      }
      return false;
    }
    function newFunc(constructor, argumentList) {
      if (!(constructor instanceof Function)) {
        throw new TypeError(
          `new_ called with constructor type ${typeof constructor} which is not a function`
        );
      }
      var dummy = createNamedFunction(
        constructor.name || "unknownFunctionName",
        function() {
        }
      );
      dummy.prototype = constructor.prototype;
      var obj = new dummy();
      var r = constructor.apply(obj, argumentList);
      return r instanceof Object ? r : obj;
    }
    function createJsInvoker(argTypes, isClassMethodFunc, returns, isAsync) {
      var needsDestructorStack = usesDestructorStack(argTypes);
      var argCount = argTypes.length - 2;
      var argsList = [];
      var argsListWired = ["fn"];
      if (isClassMethodFunc) {
        argsListWired.push("thisWired");
      }
      for (var i = 0; i < argCount; ++i) {
        argsList.push(`arg${i}`);
        argsListWired.push(`arg${i}Wired`);
      }
      argsList = argsList.join(",");
      argsListWired = argsListWired.join(",");
      var invokerFnBody = `return function (${argsList}) {
`;
      if (needsDestructorStack) {
        invokerFnBody += "var destructors = [];\n";
      }
      var dtorStack = needsDestructorStack ? "destructors" : "null";
      var args1 = [
        "humanName",
        "throwBindingError",
        "invoker",
        "fn",
        "runDestructors",
        "retType",
        "classParam"
      ];
      if (isClassMethodFunc) {
        invokerFnBody += `var thisWired = classParam['toWireType'](${dtorStack}, this);
`;
      }
      for (var i = 0; i < argCount; ++i) {
        invokerFnBody += `var arg${i}Wired = argType${i}['toWireType'](${dtorStack}, arg${i});
`;
        args1.push(`argType${i}`);
      }
      invokerFnBody += (returns || isAsync ? "var rv = " : "") + `invoker(${argsListWired});
`;
      if (needsDestructorStack) {
        invokerFnBody += "runDestructors(destructors);\n";
      } else {
        for (var i = isClassMethodFunc ? 1 : 2; i < argTypes.length; ++i) {
          var paramName = i === 1 ? "thisWired" : "arg" + (i - 2) + "Wired";
          if (argTypes[i].destructorFunction !== null) {
            invokerFnBody += `${paramName}_dtor(${paramName});
`;
            args1.push(`${paramName}_dtor`);
          }
        }
      }
      if (returns) {
        invokerFnBody += "var ret = retType['fromWireType'](rv);\nreturn ret;\n";
      }
      invokerFnBody += "}\n";
      return [args1, invokerFnBody];
    }
    function craftInvokerFunction(humanName, argTypes, classType, cppInvokerFunc, cppTargetFunc, isAsync) {
      var argCount = argTypes.length;
      if (argCount < 2) {
        throwBindingError(
          "argTypes array size mismatch! Must at least get return value and 'this' types!"
        );
      }
      var isClassMethodFunc = argTypes[1] !== null && classType !== null;
      var needsDestructorStack = usesDestructorStack(argTypes);
      var returns = argTypes[0].name !== "void";
      var closureArgs = [
        humanName,
        throwBindingError,
        cppInvokerFunc,
        cppTargetFunc,
        runDestructors,
        argTypes[0],
        argTypes[1]
      ];
      for (var i = 0; i < argCount - 2; ++i) {
        closureArgs.push(argTypes[i + 2]);
      }
      if (!needsDestructorStack) {
        for (var i = isClassMethodFunc ? 1 : 2; i < argTypes.length; ++i) {
          if (argTypes[i].destructorFunction !== null) {
            closureArgs.push(argTypes[i].destructorFunction);
          }
        }
      }
      let [args, invokerFnBody] = createJsInvoker(
        argTypes,
        isClassMethodFunc,
        returns,
        isAsync
      );
      args.push(invokerFnBody);
      var invokerFn = newFunc(Function, args)(...closureArgs);
      return createNamedFunction(humanName, invokerFn);
    }
    var heap32VectorToArray = (count, firstElement) => {
      var array = [];
      for (var i = 0; i < count; i++) {
        array.push(HEAPU32[firstElement + i * 4 >> 2]);
      }
      return array;
    };
    var getFunctionName = (signature) => {
      signature = signature.trim();
      const argsIndex = signature.indexOf("(");
      if (argsIndex !== -1) {
        return signature.substr(0, argsIndex);
      } else {
        return signature;
      }
    };
    var __embind_register_class_class_function = (rawClassType, methodName, argCount, rawArgTypesAddr, invokerSignature, rawInvoker, fn, isAsync, isNonnullReturn) => {
      var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
      methodName = readLatin1String(methodName);
      methodName = getFunctionName(methodName);
      rawInvoker = embind__requireFunction(invokerSignature, rawInvoker);
      whenDependentTypesAreResolved([], [rawClassType], (classType) => {
        classType = classType[0];
        var humanName = `${classType.name}.${methodName}`;
        function unboundTypesHandler() {
          throwUnboundTypeError(
            `Cannot call ${humanName} due to unbound types`,
            rawArgTypes
          );
        }
        if (methodName.startsWith("@@")) {
          methodName = Symbol[methodName.substring(2)];
        }
        var proto = classType.registeredClass.constructor;
        if (void 0 === proto[methodName]) {
          unboundTypesHandler.argCount = argCount - 1;
          proto[methodName] = unboundTypesHandler;
        } else {
          ensureOverloadTable(proto, methodName, humanName);
          proto[methodName].overloadTable[argCount - 1] = unboundTypesHandler;
        }
        whenDependentTypesAreResolved([], rawArgTypes, (argTypes) => {
          var invokerArgsArray = [argTypes[0], null].concat(
            argTypes.slice(1)
          );
          var func = craftInvokerFunction(
            humanName,
            invokerArgsArray,
            null,
            rawInvoker,
            fn,
            isAsync
          );
          if (void 0 === proto[methodName].overloadTable) {
            func.argCount = argCount - 1;
            proto[methodName] = func;
          } else {
            proto[methodName].overloadTable[argCount - 1] = func;
          }
          if (classType.registeredClass.__derivedClasses) {
            for (const derivedClass of classType.registeredClass.__derivedClasses) {
              if (!derivedClass.constructor.hasOwnProperty(methodName)) {
                derivedClass.constructor[methodName] = func;
              }
            }
          }
          return [];
        });
        return [];
      });
    };
    var __embind_register_class_constructor = (rawClassType, argCount, rawArgTypesAddr, invokerSignature, invoker, rawConstructor) => {
      var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
      invoker = embind__requireFunction(invokerSignature, invoker);
      whenDependentTypesAreResolved([], [rawClassType], (classType) => {
        classType = classType[0];
        var humanName = `constructor ${classType.name}`;
        if (void 0 === classType.registeredClass.constructor_body) {
          classType.registeredClass.constructor_body = [];
        }
        if (void 0 !== classType.registeredClass.constructor_body[argCount - 1]) {
          throw new BindingError(
            `Cannot register multiple constructors with identical number of parameters (${argCount - 1}) for class '${classType.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`
          );
        }
        classType.registeredClass.constructor_body[argCount - 1] = () => {
          throwUnboundTypeError(
            `Cannot construct ${classType.name} due to unbound types`,
            rawArgTypes
          );
        };
        whenDependentTypesAreResolved([], rawArgTypes, (argTypes) => {
          argTypes.splice(1, 0, null);
          classType.registeredClass.constructor_body[argCount - 1] = craftInvokerFunction(
            humanName,
            argTypes,
            null,
            invoker,
            rawConstructor
          );
          return [];
        });
        return [];
      });
    };
    var __embind_register_class_function = (rawClassType, methodName, argCount, rawArgTypesAddr, invokerSignature, rawInvoker, context, isPureVirtual, isAsync, isNonnullReturn) => {
      var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
      methodName = readLatin1String(methodName);
      methodName = getFunctionName(methodName);
      rawInvoker = embind__requireFunction(invokerSignature, rawInvoker);
      whenDependentTypesAreResolved([], [rawClassType], (classType) => {
        classType = classType[0];
        var humanName = `${classType.name}.${methodName}`;
        if (methodName.startsWith("@@")) {
          methodName = Symbol[methodName.substring(2)];
        }
        if (isPureVirtual) {
          classType.registeredClass.pureVirtualFunctions.push(methodName);
        }
        function unboundTypesHandler() {
          throwUnboundTypeError(
            `Cannot call ${humanName} due to unbound types`,
            rawArgTypes
          );
        }
        var proto = classType.registeredClass.instancePrototype;
        var method = proto[methodName];
        if (void 0 === method || void 0 === method.overloadTable && method.className !== classType.name && method.argCount === argCount - 2) {
          unboundTypesHandler.argCount = argCount - 2;
          unboundTypesHandler.className = classType.name;
          proto[methodName] = unboundTypesHandler;
        } else {
          ensureOverloadTable(proto, methodName, humanName);
          proto[methodName].overloadTable[argCount - 2] = unboundTypesHandler;
        }
        whenDependentTypesAreResolved([], rawArgTypes, (argTypes) => {
          var memberFunction = craftInvokerFunction(
            humanName,
            argTypes,
            classType,
            rawInvoker,
            context,
            isAsync
          );
          if (void 0 === proto[methodName].overloadTable) {
            memberFunction.argCount = argCount - 2;
            proto[methodName] = memberFunction;
          } else {
            proto[methodName].overloadTable[argCount - 2] = memberFunction;
          }
          return [];
        });
        return [];
      });
    };
    var validateThis = (this_, classType, humanName) => {
      if (!(this_ instanceof Object)) {
        throwBindingError(`${humanName} with invalid "this": ${this_}`);
      }
      if (!(this_ instanceof classType.registeredClass.constructor)) {
        throwBindingError(
          `${humanName} incompatible with "this" of type ${this_.constructor.name}`
        );
      }
      if (!this_.$$.ptr) {
        throwBindingError(
          `cannot call emscripten binding method ${humanName} on deleted object`
        );
      }
      return upcastPointer(
        this_.$$.ptr,
        this_.$$.ptrType.registeredClass,
        classType.registeredClass
      );
    };
    var __embind_register_class_property = (classType, fieldName, getterReturnType, getterSignature, getter, getterContext, setterArgumentType, setterSignature, setter, setterContext) => {
      fieldName = readLatin1String(fieldName);
      getter = embind__requireFunction(getterSignature, getter);
      whenDependentTypesAreResolved([], [classType], (classType2) => {
        classType2 = classType2[0];
        var humanName = `${classType2.name}.${fieldName}`;
        var desc = {
          get() {
            throwUnboundTypeError(
              `Cannot access ${humanName} due to unbound types`,
              [getterReturnType, setterArgumentType]
            );
          },
          enumerable: true,
          configurable: true
        };
        if (setter) {
          desc.set = () => throwUnboundTypeError(
            `Cannot access ${humanName} due to unbound types`,
            [getterReturnType, setterArgumentType]
          );
        } else {
          desc.set = (v) => throwBindingError(humanName + " is a read-only property");
        }
        Object.defineProperty(
          classType2.registeredClass.instancePrototype,
          fieldName,
          desc
        );
        whenDependentTypesAreResolved(
          [],
          setter ? [getterReturnType, setterArgumentType] : [getterReturnType],
          (types) => {
            var getterReturnType2 = types[0];
            var desc2 = {
              get() {
                var ptr = validateThis(
                  this,
                  classType2,
                  humanName + " getter"
                );
                return getterReturnType2["fromWireType"](
                  getter(getterContext, ptr)
                );
              },
              enumerable: true
            };
            if (setter) {
              setter = embind__requireFunction(setterSignature, setter);
              var setterArgumentType2 = types[1];
              desc2.set = function(v) {
                var ptr = validateThis(
                  this,
                  classType2,
                  humanName + " setter"
                );
                var destructors = [];
                setter(
                  setterContext,
                  ptr,
                  setterArgumentType2["toWireType"](destructors, v)
                );
                runDestructors(destructors);
              };
            }
            Object.defineProperty(
              classType2.registeredClass.instancePrototype,
              fieldName,
              desc2
            );
            return [];
          }
        );
        return [];
      });
    };
    var __embind_register_constant = (name, type, value) => {
      name = readLatin1String(name);
      whenDependentTypesAreResolved([], [type], (type2) => {
        type2 = type2[0];
        Module[name] = type2["fromWireType"](value);
        return [];
      });
    };
    var emval_freelist = [];
    var emval_handles = [];
    var __emval_decref = (handle) => {
      if (handle > 9 && 0 === --emval_handles[handle + 1]) {
        emval_handles[handle] = void 0;
        emval_freelist.push(handle);
      }
    };
    var count_emval_handles = () => emval_handles.length / 2 - 5 - emval_freelist.length;
    var init_emval = () => {
      emval_handles.push(0, 1, void 0, 1, null, 1, true, 1, false, 1);
      Module["count_emval_handles"] = count_emval_handles;
    };
    var Emval = {
      toValue: (handle) => {
        if (!handle) {
          throwBindingError("Cannot use deleted val. handle = " + handle);
        }
        return emval_handles[handle];
      },
      toHandle: (value) => {
        switch (value) {
          case void 0:
            return 2;
          case null:
            return 4;
          case true:
            return 6;
          case false:
            return 8;
          default: {
            const handle = emval_freelist.pop() || emval_handles.length;
            emval_handles[handle] = value;
            emval_handles[handle + 1] = 1;
            return handle;
          }
        }
      }
    };
    var EmValType = {
      name: "emscripten::val",
      fromWireType: (handle) => {
        var rv = Emval.toValue(handle);
        __emval_decref(handle);
        return rv;
      },
      toWireType: (destructors, value) => Emval.toHandle(value),
      argPackAdvance: GenericWireTypeSize,
      readValueFromPointer: readPointer,
      destructorFunction: null
    };
    var __embind_register_emval = (rawType) => registerType(rawType, EmValType);
    var enumReadValueFromPointer = (name, width, signed) => {
      switch (width) {
        case 1:
          return signed ? function(pointer) {
            return this["fromWireType"](HEAP8[pointer]);
          } : function(pointer) {
            return this["fromWireType"](HEAPU8[pointer]);
          };
        case 2:
          return signed ? function(pointer) {
            return this["fromWireType"](HEAP16[pointer >> 1]);
          } : function(pointer) {
            return this["fromWireType"](HEAPU16[pointer >> 1]);
          };
        case 4:
          return signed ? function(pointer) {
            return this["fromWireType"](HEAP32[pointer >> 2]);
          } : function(pointer) {
            return this["fromWireType"](HEAPU32[pointer >> 2]);
          };
        default:
          throw new TypeError(`invalid integer width (${width}): ${name}`);
      }
    };
    var __embind_register_enum = (rawType, name, size, isSigned) => {
      name = readLatin1String(name);
      function ctor() {
      }
      ctor.values = {};
      registerType(rawType, {
        name,
        constructor: ctor,
        fromWireType: function(c) {
          return this.constructor.values[c];
        },
        toWireType: (destructors, c) => c.value,
        argPackAdvance: GenericWireTypeSize,
        readValueFromPointer: enumReadValueFromPointer(name, size, isSigned),
        destructorFunction: null
      });
      exposePublicSymbol(name, ctor);
    };
    var requireRegisteredType = (rawType, humanName) => {
      var impl = registeredTypes[rawType];
      if (void 0 === impl) {
        throwBindingError(
          `${humanName} has unknown type ${getTypeName(rawType)}`
        );
      }
      return impl;
    };
    var __embind_register_enum_value = (rawEnumType, name, enumValue) => {
      var enumType = requireRegisteredType(rawEnumType, "enum");
      name = readLatin1String(name);
      var Enum = enumType.constructor;
      var Value = Object.create(enumType.constructor.prototype, {
        value: { value: enumValue },
        constructor: {
          value: createNamedFunction(
            `${enumType.name}_${name}`,
            function() {
            }
          )
        }
      });
      Enum.values[enumValue] = Value;
      Enum[name] = Value;
    };
    var embindRepr = (v) => {
      if (v === null) {
        return "null";
      }
      var t = typeof v;
      if (t === "object" || t === "array" || t === "function") {
        return v.toString();
      } else {
        return "" + v;
      }
    };
    var floatReadValueFromPointer = (name, width) => {
      switch (width) {
        case 4:
          return function(pointer) {
            return this["fromWireType"](HEAPF32[pointer >> 2]);
          };
        case 8:
          return function(pointer) {
            return this["fromWireType"](HEAPF64[pointer >> 3]);
          };
        default:
          throw new TypeError(`invalid float width (${width}): ${name}`);
      }
    };
    var __embind_register_float = (rawType, name, size) => {
      name = readLatin1String(name);
      registerType(rawType, {
        name,
        fromWireType: (value) => value,
        toWireType: (destructors, value) => value,
        argPackAdvance: GenericWireTypeSize,
        readValueFromPointer: floatReadValueFromPointer(name, size),
        destructorFunction: null
      });
    };
    var __embind_register_function = (name, argCount, rawArgTypesAddr, signature, rawInvoker, fn, isAsync, isNonnullReturn) => {
      var argTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
      name = readLatin1String(name);
      name = getFunctionName(name);
      rawInvoker = embind__requireFunction(signature, rawInvoker);
      exposePublicSymbol(
        name,
        function() {
          throwUnboundTypeError(
            `Cannot call ${name} due to unbound types`,
            argTypes
          );
        },
        argCount - 1
      );
      whenDependentTypesAreResolved([], argTypes, (argTypes2) => {
        var invokerArgsArray = [argTypes2[0], null].concat(argTypes2.slice(1));
        replacePublicSymbol(
          name,
          craftInvokerFunction(
            name,
            invokerArgsArray,
            null,
            rawInvoker,
            fn,
            isAsync
          ),
          argCount - 1
        );
        return [];
      });
    };
    var integerReadValueFromPointer = (name, width, signed) => {
      switch (width) {
        case 1:
          return signed ? (pointer) => HEAP8[pointer] : (pointer) => HEAPU8[pointer];
        case 2:
          return signed ? (pointer) => HEAP16[pointer >> 1] : (pointer) => HEAPU16[pointer >> 1];
        case 4:
          return signed ? (pointer) => HEAP32[pointer >> 2] : (pointer) => HEAPU32[pointer >> 2];
        default:
          throw new TypeError(`invalid integer width (${width}): ${name}`);
      }
    };
    var __embind_register_integer = (primitiveType, name, size, minRange, maxRange) => {
      name = readLatin1String(name);
      var fromWireType = (value) => value;
      if (minRange === 0) {
        var bitshift = 32 - 8 * size;
        fromWireType = (value) => value << bitshift >>> bitshift;
      }
      var isUnsignedType = name.includes("unsigned");
      var checkAssertions = (value, toTypeName) => {
      };
      var toWireType;
      if (isUnsignedType) {
        toWireType = function(destructors, value) {
          checkAssertions(value, this.name);
          return value >>> 0;
        };
      } else {
        toWireType = function(destructors, value) {
          checkAssertions(value, this.name);
          return value;
        };
      }
      registerType(primitiveType, {
        name,
        fromWireType,
        toWireType,
        argPackAdvance: GenericWireTypeSize,
        readValueFromPointer: integerReadValueFromPointer(
          name,
          size,
          minRange !== 0
        ),
        destructorFunction: null
      });
    };
    var __embind_register_memory_view = (rawType, dataTypeIndex, name) => {
      var typeMapping = [
        Int8Array,
        Uint8Array,
        Int16Array,
        Uint16Array,
        Int32Array,
        Uint32Array,
        Float32Array,
        Float64Array
      ];
      var TA = typeMapping[dataTypeIndex];
      function decodeMemoryView(handle) {
        var size = HEAPU32[handle >> 2];
        var data = HEAPU32[handle + 4 >> 2];
        return new TA(HEAP8.buffer, data, size);
      }
      name = readLatin1String(name);
      registerType(
        rawType,
        {
          name,
          fromWireType: decodeMemoryView,
          argPackAdvance: GenericWireTypeSize,
          readValueFromPointer: decodeMemoryView
        },
        { ignoreDuplicateRegistrations: true }
      );
    };
    var __embind_register_smart_ptr = (rawType, rawPointeeType, name, sharingPolicy, getPointeeSignature, rawGetPointee, constructorSignature, rawConstructor, shareSignature, rawShare, destructorSignature, rawDestructor) => {
      name = readLatin1String(name);
      rawGetPointee = embind__requireFunction(
        getPointeeSignature,
        rawGetPointee
      );
      rawConstructor = embind__requireFunction(
        constructorSignature,
        rawConstructor
      );
      rawShare = embind__requireFunction(shareSignature, rawShare);
      rawDestructor = embind__requireFunction(
        destructorSignature,
        rawDestructor
      );
      whenDependentTypesAreResolved(
        [rawType],
        [rawPointeeType],
        (pointeeType) => {
          pointeeType = pointeeType[0];
          var registeredPointer = new RegisteredPointer(
            name,
            pointeeType.registeredClass,
            false,
            false,
            true,
            pointeeType,
            sharingPolicy,
            rawGetPointee,
            rawConstructor,
            rawShare,
            rawDestructor
          );
          return [registeredPointer];
        }
      );
    };
    var stringToUTF8 = (str, outPtr, maxBytesToWrite) => stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
    var __embind_register_std_string = (rawType, name) => {
      name = readLatin1String(name);
      registerType(rawType, {
        name,
        fromWireType(value) {
          var length = HEAPU32[value >> 2];
          var payload = value + 4;
          var str;
          var i;
          {
            var decodeStartPtr = payload;
            for (var i = 0; i <= length; ++i) {
              var currentBytePtr = payload + i;
              if (i == length || HEAPU8[currentBytePtr] == 0) {
                var maxRead = currentBytePtr - decodeStartPtr;
                var stringSegment = UTF8ToString(decodeStartPtr, maxRead);
                if (str === void 0) {
                  str = stringSegment;
                } else {
                  str += String.fromCharCode(0);
                  str += stringSegment;
                }
                decodeStartPtr = currentBytePtr + 1;
              }
            }
          }
          _free(value);
          return str;
        },
        toWireType(destructors, value) {
          if (value instanceof ArrayBuffer) {
            value = new Uint8Array(value);
          }
          var length;
          var valueIsOfTypeString = typeof value == "string";
          if (!(valueIsOfTypeString || value instanceof Uint8Array || value instanceof Uint8ClampedArray || value instanceof Int8Array)) {
            throwBindingError("Cannot pass non-string to std::string");
          }
          if (valueIsOfTypeString) {
            length = lengthBytesUTF8(value);
          } else {
            length = value.length;
          }
          var base = _malloc(4 + length + 1);
          var ptr = base + 4;
          HEAPU32[base >> 2] = length;
          if (valueIsOfTypeString) {
            stringToUTF8(value, ptr, length + 1);
          } else {
            if (valueIsOfTypeString) {
              for (var i = 0; i < length; ++i) {
                var charCode = value.charCodeAt(i);
                if (charCode > 255) {
                  _free(ptr);
                  throwBindingError(
                    "String has UTF-16 code units that do not fit in 8 bits"
                  );
                }
                HEAPU8[ptr + i] = charCode;
              }
            } else {
              for (var i = 0; i < length; ++i) {
                HEAPU8[ptr + i] = value[i];
              }
            }
          }
          if (destructors !== null) {
            destructors.push(_free, base);
          }
          return base;
        },
        argPackAdvance: GenericWireTypeSize,
        readValueFromPointer: readPointer,
        destructorFunction(ptr) {
          _free(ptr);
        }
      });
    };
    var UTF16Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf-16le") : void 0;
    var UTF16ToString = (ptr, maxBytesToRead) => {
      var endPtr = ptr;
      var idx = endPtr >> 1;
      var maxIdx = idx + maxBytesToRead / 2;
      while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
      endPtr = idx << 1;
      if (endPtr - ptr > 32 && UTF16Decoder)
        return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
      var str = "";
      for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
        var codeUnit = HEAP16[ptr + i * 2 >> 1];
        if (codeUnit == 0) break;
        str += String.fromCharCode(codeUnit);
      }
      return str;
    };
    var stringToUTF16 = (str, outPtr, maxBytesToWrite) => {
      maxBytesToWrite ?? (maxBytesToWrite = 2147483647);
      if (maxBytesToWrite < 2) return 0;
      maxBytesToWrite -= 2;
      var startPtr = outPtr;
      var numCharsToWrite = maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length;
      for (var i = 0; i < numCharsToWrite; ++i) {
        var codeUnit = str.charCodeAt(i);
        HEAP16[outPtr >> 1] = codeUnit;
        outPtr += 2;
      }
      HEAP16[outPtr >> 1] = 0;
      return outPtr - startPtr;
    };
    var lengthBytesUTF16 = (str) => str.length * 2;
    var UTF32ToString = (ptr, maxBytesToRead) => {
      var i = 0;
      var str = "";
      while (!(i >= maxBytesToRead / 4)) {
        var utf32 = HEAP32[ptr + i * 4 >> 2];
        if (utf32 == 0) break;
        ++i;
        if (utf32 >= 65536) {
          var ch = utf32 - 65536;
          str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
        } else {
          str += String.fromCharCode(utf32);
        }
      }
      return str;
    };
    var stringToUTF32 = (str, outPtr, maxBytesToWrite) => {
      maxBytesToWrite ?? (maxBytesToWrite = 2147483647);
      if (maxBytesToWrite < 4) return 0;
      var startPtr = outPtr;
      var endPtr = startPtr + maxBytesToWrite - 4;
      for (var i = 0; i < str.length; ++i) {
        var codeUnit = str.charCodeAt(i);
        if (codeUnit >= 55296 && codeUnit <= 57343) {
          var trailSurrogate = str.charCodeAt(++i);
          codeUnit = 65536 + ((codeUnit & 1023) << 10) | trailSurrogate & 1023;
        }
        HEAP32[outPtr >> 2] = codeUnit;
        outPtr += 4;
        if (outPtr + 4 > endPtr) break;
      }
      HEAP32[outPtr >> 2] = 0;
      return outPtr - startPtr;
    };
    var lengthBytesUTF32 = (str) => {
      var len = 0;
      for (var i = 0; i < str.length; ++i) {
        var codeUnit = str.charCodeAt(i);
        if (codeUnit >= 55296 && codeUnit <= 57343) ++i;
        len += 4;
      }
      return len;
    };
    var __embind_register_std_wstring = (rawType, charSize, name) => {
      name = readLatin1String(name);
      var decodeString, encodeString, readCharAt, lengthBytesUTF;
      if (charSize === 2) {
        decodeString = UTF16ToString;
        encodeString = stringToUTF16;
        lengthBytesUTF = lengthBytesUTF16;
        readCharAt = (pointer) => HEAPU16[pointer >> 1];
      } else if (charSize === 4) {
        decodeString = UTF32ToString;
        encodeString = stringToUTF32;
        lengthBytesUTF = lengthBytesUTF32;
        readCharAt = (pointer) => HEAPU32[pointer >> 2];
      }
      registerType(rawType, {
        name,
        fromWireType: (value) => {
          var length = HEAPU32[value >> 2];
          var str;
          var decodeStartPtr = value + 4;
          for (var i = 0; i <= length; ++i) {
            var currentBytePtr = value + 4 + i * charSize;
            if (i == length || readCharAt(currentBytePtr) == 0) {
              var maxReadBytes = currentBytePtr - decodeStartPtr;
              var stringSegment = decodeString(decodeStartPtr, maxReadBytes);
              if (str === void 0) {
                str = stringSegment;
              } else {
                str += String.fromCharCode(0);
                str += stringSegment;
              }
              decodeStartPtr = currentBytePtr + charSize;
            }
          }
          _free(value);
          return str;
        },
        toWireType: (destructors, value) => {
          if (!(typeof value == "string")) {
            throwBindingError(
              `Cannot pass non-string to C++ string type ${name}`
            );
          }
          var length = lengthBytesUTF(value);
          var ptr = _malloc(4 + length + charSize);
          HEAPU32[ptr >> 2] = length / charSize;
          encodeString(value, ptr + 4, length + charSize);
          if (destructors !== null) {
            destructors.push(_free, ptr);
          }
          return ptr;
        },
        argPackAdvance: GenericWireTypeSize,
        readValueFromPointer: readPointer,
        destructorFunction(ptr) {
          _free(ptr);
        }
      });
    };
    var __embind_register_value_array = (rawType, name, constructorSignature, rawConstructor, destructorSignature, rawDestructor) => {
      tupleRegistrations[rawType] = {
        name: readLatin1String(name),
        rawConstructor: embind__requireFunction(
          constructorSignature,
          rawConstructor
        ),
        rawDestructor: embind__requireFunction(
          destructorSignature,
          rawDestructor
        ),
        elements: []
      };
    };
    var __embind_register_value_array_element = (rawTupleType, getterReturnType, getterSignature, getter, getterContext, setterArgumentType, setterSignature, setter, setterContext) => {
      tupleRegistrations[rawTupleType].elements.push({
        getterReturnType,
        getter: embind__requireFunction(getterSignature, getter),
        getterContext,
        setterArgumentType,
        setter: embind__requireFunction(setterSignature, setter),
        setterContext
      });
    };
    var __embind_register_value_object = (rawType, name, constructorSignature, rawConstructor, destructorSignature, rawDestructor) => {
      structRegistrations[rawType] = {
        name: readLatin1String(name),
        rawConstructor: embind__requireFunction(
          constructorSignature,
          rawConstructor
        ),
        rawDestructor: embind__requireFunction(
          destructorSignature,
          rawDestructor
        ),
        fields: []
      };
    };
    var __embind_register_value_object_field = (structType, fieldName, getterReturnType, getterSignature, getter, getterContext, setterArgumentType, setterSignature, setter, setterContext) => {
      structRegistrations[structType].fields.push({
        fieldName: readLatin1String(fieldName),
        getterReturnType,
        getter: embind__requireFunction(getterSignature, getter),
        getterContext,
        setterArgumentType,
        setter: embind__requireFunction(setterSignature, setter),
        setterContext
      });
    };
    var __embind_register_void = (rawType, name) => {
      name = readLatin1String(name);
      registerType(rawType, {
        isVoid: true,
        name,
        argPackAdvance: 0,
        fromWireType: () => void 0,
        toWireType: (destructors, o) => void 0
      });
    };
    var __emscripten_memcpy_js = (dest, src, num) => HEAPU8.copyWithin(dest, src, src + num);
    var emval_returnValue = (returnType, destructorsRef, handle) => {
      var destructors = [];
      var result = returnType["toWireType"](destructors, handle);
      if (destructors.length) {
        HEAPU32[destructorsRef >> 2] = Emval.toHandle(destructors);
      }
      return result;
    };
    var __emval_as = (handle, returnType, destructorsRef) => {
      handle = Emval.toValue(handle);
      returnType = requireRegisteredType(returnType, "emval::as");
      return emval_returnValue(returnType, destructorsRef, handle);
    };
    var emval_symbols = {};
    var getStringOrSymbol = (address) => {
      var symbol = emval_symbols[address];
      if (symbol === void 0) {
        return readLatin1String(address);
      }
      return symbol;
    };
    var emval_methodCallers = [];
    var __emval_call_method = (caller, objHandle, methodName, destructorsRef, args) => {
      caller = emval_methodCallers[caller];
      objHandle = Emval.toValue(objHandle);
      methodName = getStringOrSymbol(methodName);
      return caller(objHandle, objHandle[methodName], destructorsRef, args);
    };
    var emval_addMethodCaller = (caller) => {
      var id = emval_methodCallers.length;
      emval_methodCallers.push(caller);
      return id;
    };
    var emval_lookupTypes = (argCount, argTypes) => {
      var a = new Array(argCount);
      for (var i = 0; i < argCount; ++i) {
        a[i] = requireRegisteredType(
          HEAPU32[argTypes + i * 4 >> 2],
          "parameter " + i
        );
      }
      return a;
    };
    var __emval_get_method_caller = (argCount, argTypes, kind) => {
      var types = emval_lookupTypes(argCount, argTypes);
      var retType = types.shift();
      argCount--;
      var functionBody = `return function (obj, func, destructorsRef, args) {
`;
      var offset = 0;
      var argsList = [];
      if (kind === 0) {
        argsList.push("obj");
      }
      var params = ["retType"];
      var args = [retType];
      for (var i = 0; i < argCount; ++i) {
        argsList.push("arg" + i);
        params.push("argType" + i);
        args.push(types[i]);
        functionBody += `  var arg${i} = argType${i}.readValueFromPointer(args${offset ? "+" + offset : ""});
`;
        offset += types[i].argPackAdvance;
      }
      var invoker = kind === 1 ? "new func" : "func.call";
      functionBody += `  var rv = ${invoker}(${argsList.join(", ")});
`;
      if (!retType.isVoid) {
        params.push("emval_returnValue");
        args.push(emval_returnValue);
        functionBody += "  return emval_returnValue(retType, destructorsRef, rv);\n";
      }
      functionBody += "};\n";
      params.push(functionBody);
      var invokerFunction = newFunc(Function, params)(...args);
      var functionName = `methodCaller<(${types.map((t) => t.name).join(", ")}) => ${retType.name}>`;
      return emval_addMethodCaller(
        createNamedFunction(functionName, invokerFunction)
      );
    };
    var __emval_get_property = (handle, key) => {
      handle = Emval.toValue(handle);
      key = Emval.toValue(key);
      return Emval.toHandle(handle[key]);
    };
    var __emval_incref = (handle) => {
      if (handle > 9) {
        emval_handles[handle + 1] += 1;
      }
    };
    var __emval_new_array = () => Emval.toHandle([]);
    var __emval_new_cstring = (v) => Emval.toHandle(getStringOrSymbol(v));
    var __emval_run_destructors = (handle) => {
      var destructors = Emval.toValue(handle);
      runDestructors(destructors);
      __emval_decref(handle);
    };
    var __emval_set_property = (handle, key, value) => {
      handle = Emval.toValue(handle);
      key = Emval.toValue(key);
      value = Emval.toValue(value);
      handle[key] = value;
    };
    var __emval_take_value = (type, arg) => {
      type = requireRegisteredType(type, "_emval_take_value");
      var v = type["readValueFromPointer"](arg);
      return Emval.toHandle(v);
    };
    var __tzset_js = (timezone, daylight, std_name, dst_name) => {
      var currentYear = (/* @__PURE__ */ new Date()).getFullYear();
      var winter = new Date(currentYear, 0, 1);
      var summer = new Date(currentYear, 6, 1);
      var winterOffset = winter.getTimezoneOffset();
      var summerOffset = summer.getTimezoneOffset();
      var stdTimezoneOffset = Math.max(winterOffset, summerOffset);
      HEAPU32[timezone >> 2] = stdTimezoneOffset * 60;
      HEAP32[daylight >> 2] = Number(winterOffset != summerOffset);
      var extractZone = (timezoneOffset) => {
        var sign = timezoneOffset >= 0 ? "-" : "+";
        var absOffset = Math.abs(timezoneOffset);
        var hours = String(Math.floor(absOffset / 60)).padStart(2, "0");
        var minutes = String(absOffset % 60).padStart(2, "0");
        return `UTC${sign}${hours}${minutes}`;
      };
      var winterName = extractZone(winterOffset);
      var summerName = extractZone(summerOffset);
      if (summerOffset < winterOffset) {
        stringToUTF8(winterName, std_name, 17);
        stringToUTF8(summerName, dst_name, 17);
      } else {
        stringToUTF8(winterName, dst_name, 17);
        stringToUTF8(summerName, std_name, 17);
      }
    };
    var _emscripten_get_now = () => performance.now();
    var _emscripten_date_now = () => Date.now();
    var checkWasiClock = (clock_id) => clock_id >= 0 && clock_id <= 3;
    var convertI32PairToI53Checked = (lo, hi) => hi + 2097152 >>> 0 < 4194305 - !!lo ? (lo >>> 0) + hi * 4294967296 : NaN;
    function _clock_time_get(clk_id, ignored_precision_low, ignored_precision_high, ptime) {
      if (!checkWasiClock(clk_id)) {
        return 28;
      }
      var now;
      if (clk_id === 0) {
        now = _emscripten_date_now();
      } else {
        now = _emscripten_get_now();
      }
      var nsec = Math.round(now * 1e3 * 1e3);
      tempI64 = [
        nsec >>> 0,
        (tempDouble = nsec, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil(
          (tempDouble - +(~~tempDouble >>> 0)) / 4294967296
        ) >>> 0 : 0)
      ], HEAP32[ptime >> 2] = tempI64[0], HEAP32[ptime + 4 >> 2] = tempI64[1];
      return 0;
    }
    var getHeapMax = () => 1073741824;
    var _emscripten_get_heap_max = () => getHeapMax();
    var growMemory = (size) => {
      var b = wasmMemory.buffer;
      var pages = (size - b.byteLength + 65535) / 65536 | 0;
      try {
        wasmMemory.grow(pages);
        updateMemoryViews();
        return 1;
      } catch (e) {
      }
    };
    var _emscripten_resize_heap = (requestedSize) => {
      var oldSize = HEAPU8.length;
      requestedSize >>>= 0;
      var maxHeapSize = getHeapMax();
      if (requestedSize > maxHeapSize) {
        return false;
      }
      for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
        var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
        overGrownHeapSize = Math.min(
          overGrownHeapSize,
          requestedSize + 100663296
        );
        var newSize = Math.min(
          maxHeapSize,
          alignMemory(Math.max(requestedSize, overGrownHeapSize), 65536)
        );
        var replacement = growMemory(newSize);
        if (replacement) {
          return true;
        }
      }
      return false;
    };
    var ENV = {};
    var getExecutableName = () => thisProgram || "./this.program";
    var getEnvStrings = () => {
      if (!getEnvStrings.strings) {
        var lang = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
        var env = {
          USER: "web_user",
          LOGNAME: "web_user",
          PATH: "/",
          PWD: "/",
          HOME: "/home/web_user",
          LANG: lang,
          _: getExecutableName()
        };
        for (var x in ENV) {
          if (ENV[x] === void 0) delete env[x];
          else env[x] = ENV[x];
        }
        var strings = [];
        for (var x in env) {
          strings.push(`${x}=${env[x]}`);
        }
        getEnvStrings.strings = strings;
      }
      return getEnvStrings.strings;
    };
    var stringToAscii = (str, buffer) => {
      for (var i = 0; i < str.length; ++i) {
        HEAP8[buffer++] = str.charCodeAt(i);
      }
      HEAP8[buffer] = 0;
    };
    var _environ_get = (__environ, environ_buf) => {
      var bufSize = 0;
      getEnvStrings().forEach((string, i) => {
        var ptr = environ_buf + bufSize;
        HEAPU32[__environ + i * 4 >> 2] = ptr;
        stringToAscii(string, ptr);
        bufSize += string.length + 1;
      });
      return 0;
    };
    var _environ_sizes_get = (penviron_count, penviron_buf_size) => {
      var strings = getEnvStrings();
      HEAPU32[penviron_count >> 2] = strings.length;
      var bufSize = 0;
      strings.forEach((string) => bufSize += string.length + 1);
      HEAPU32[penviron_buf_size >> 2] = bufSize;
      return 0;
    };
    function _fd_close(fd) {
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        FS.close(stream);
        return 0;
      } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return e.errno;
      }
    }
    var doReadv = (stream, iov, iovcnt, offset) => {
      var ret = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAPU32[iov >> 2];
        var len = HEAPU32[iov + 4 >> 2];
        iov += 8;
        var curr = FS.read(stream, HEAP8, ptr, len, offset);
        if (curr < 0) return -1;
        ret += curr;
        if (curr < len) break;
      }
      return ret;
    };
    function _fd_read(fd, iov, iovcnt, pnum) {
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        var num = doReadv(stream, iov, iovcnt);
        HEAPU32[pnum >> 2] = num;
        return 0;
      } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return e.errno;
      }
    }
    function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
      var offset = convertI32PairToI53Checked(offset_low, offset_high);
      try {
        if (isNaN(offset)) return 61;
        var stream = SYSCALLS.getStreamFromFD(fd);
        FS.llseek(stream, offset, whence);
        tempI64 = [
          stream.position >>> 0,
          (tempDouble = stream.position, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil(
            (tempDouble - +(~~tempDouble >>> 0)) / 4294967296
          ) >>> 0 : 0)
        ], HEAP32[newOffset >> 2] = tempI64[0], HEAP32[newOffset + 4 >> 2] = tempI64[1];
        if (stream.getdents && offset === 0 && whence === 0)
          stream.getdents = null;
        return 0;
      } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return e.errno;
      }
    }
    var doWritev = (stream, iov, iovcnt, offset) => {
      var ret = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAPU32[iov >> 2];
        var len = HEAPU32[iov + 4 >> 2];
        iov += 8;
        var curr = FS.write(stream, HEAP8, ptr, len, offset);
        if (curr < 0) return -1;
        ret += curr;
        if (curr < len) {
          break;
        }
      }
      return ret;
    };
    function _fd_write(fd, iov, iovcnt, pnum) {
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        var num = doWritev(stream, iov, iovcnt);
        HEAPU32[pnum >> 2] = num;
        return 0;
      } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return e.errno;
      }
    }
    var FS_createPath = FS.createPath;
    var FS_unlink = (path) => FS.unlink(path);
    var FS_createLazyFile = FS.createLazyFile;
    var FS_createDevice = FS.createDevice;
    Module["requestFullscreen"] = Browser.requestFullscreen;
    Module["setCanvasSize"] = Browser.setCanvasSize;
    Module["getUserMedia"] = Browser.getUserMedia;
    Module["createContext"] = Browser.createContext;
    FS.createPreloadedFile = FS_createPreloadedFile;
    FS.staticInit();
    Module["FS_createPath"] = FS.createPath;
    Module["FS_createDataFile"] = FS.createDataFile;
    Module["FS_createPreloadedFile"] = FS.createPreloadedFile;
    Module["FS_unlink"] = FS.unlink;
    Module["FS_createLazyFile"] = FS.createLazyFile;
    Module["FS_createDevice"] = FS.createDevice;
    MEMFS.doesNotExistError = new FS.ErrnoError(44);
    MEMFS.doesNotExistError.stack = "<generic error, no stack>";
    InternalError = Module["InternalError"] = class InternalError extends Error {
      constructor(message) {
        super(message);
        this.name = "InternalError";
      }
    };
    embind_init_charCodes();
    BindingError = Module["BindingError"] = class BindingError extends Error {
      constructor(message) {
        super(message);
        this.name = "BindingError";
      }
    };
    init_ClassHandle();
    init_RegisteredPointer();
    UnboundTypeError = Module["UnboundTypeError"] = extendError(
      Error,
      "UnboundTypeError"
    );
    init_emval();
    var wasmImports = {
      g: ___cxa_throw,
      H: ___syscall_fcntl64,
      S: ___syscall_ioctl,
      G: ___syscall_openat,
      N: __abort_js,
      Y: __embind_finalize_value_array,
      p: __embind_finalize_value_object,
      L: __embind_register_bigint,
      W: __embind_register_bool,
      j: __embind_register_class,
      u: __embind_register_class_class_function,
      e: __embind_register_class_constructor,
      d: __embind_register_class_function,
      f: __embind_register_class_property,
      a: __embind_register_constant,
      U: __embind_register_emval,
      h: __embind_register_enum,
      b: __embind_register_enum_value,
      I: __embind_register_float,
      c: __embind_register_function,
      x: __embind_register_integer,
      o: __embind_register_memory_view,
      m: __embind_register_smart_ptr,
      V: __embind_register_std_string,
      E: __embind_register_std_wstring,
      Z: __embind_register_value_array,
      B: __embind_register_value_array_element,
      q: __embind_register_value_object,
      i: __embind_register_value_object_field,
      X: __embind_register_void,
      T: __emscripten_memcpy_js,
      v: __emval_as,
      r: __emval_call_method,
      k: __emval_decref,
      s: __emval_get_method_caller,
      t: __emval_get_property,
      z: __emval_incref,
      y: __emval_new_array,
      w: __emval_new_cstring,
      n: __emval_run_destructors,
      A: __emval_set_property,
      l: __emval_take_value,
      M: __tzset_js,
      J: _clock_time_get,
      P: _emscripten_get_heap_max,
      O: _emscripten_resize_heap,
      Q: _environ_get,
      R: _environ_sizes_get,
      D: _fd_close,
      F: _fd_read,
      K: _fd_seek,
      C: _fd_write
    };
    var wasmExports;
    createWasm();
    var ___getTypeName = (a0) => (___getTypeName = wasmExports["aa"])(a0);
    var _malloc = Module["_malloc"] = (a0) => (_malloc = Module["_malloc"] = wasmExports["ca"])(a0);
    var _free = Module["_free"] = (a0) => (_free = Module["_free"] = wasmExports["da"])(a0);
    Module["dynCall_ji"] = (a0, a1) => (Module["dynCall_ji"] = wasmExports["ea"])(a0, a1);
    Module["dynCall_viij"] = (a0, a1, a2, a3, a4) => (Module["dynCall_viij"] = wasmExports["fa"])(
      a0,
      a1,
      a2,
      a3,
      a4
    );
    Module["dynCall_viijii"] = (a0, a1, a2, a3, a4, a5, a6) => (Module["dynCall_viijii"] = wasmExports["ga"])(
      a0,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6
    );
    Module["dynCall_jiii"] = (a0, a1, a2, a3) => (Module["dynCall_jiii"] = wasmExports["ha"])(
      a0,
      a1,
      a2,
      a3
    );
    Module["dynCall_vij"] = (a0, a1, a2, a3) => (Module["dynCall_vij"] = wasmExports["ia"])(
      a0,
      a1,
      a2,
      a3
    );
    Module["dynCall_jii"] = (a0, a1, a2) => (Module["dynCall_jii"] = wasmExports["ja"])(a0, a1, a2);
    Module["dynCall_viji"] = (a0, a1, a2, a3, a4) => (Module["dynCall_viji"] = wasmExports["ka"])(
      a0,
      a1,
      a2,
      a3,
      a4
    );
    Module["dynCall_jiji"] = (a0, a1, a2, a3, a4) => (Module["dynCall_jiji"] = wasmExports["la"])(
      a0,
      a1,
      a2,
      a3,
      a4
    );
    Module["dynCall_iiiiij"] = (a0, a1, a2, a3, a4, a5, a6) => (Module["dynCall_iiiiij"] = wasmExports["ma"])(
      a0,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6
    );
    Module["dynCall_iiiiijj"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8) => (Module["dynCall_iiiiijj"] = wasmExports["na"])(
      a0,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8
    );
    Module["dynCall_iiiiiijj"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) => (Module["dynCall_iiiiiijj"] = wasmExports["oa"])(
      a0,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9
    );
    Module["addRunDependency"] = addRunDependency;
    Module["removeRunDependency"] = removeRunDependency;
    Module["FS_createPreloadedFile"] = FS_createPreloadedFile;
    Module["FS_unlink"] = FS_unlink;
    Module["FS_createPath"] = FS_createPath;
    Module["FS_createDevice"] = FS_createDevice;
    Module["FS_createDataFile"] = FS_createDataFile;
    Module["FS_createLazyFile"] = FS_createLazyFile;
    var calledRun;
    dependenciesFulfilled = function runCaller() {
      if (!calledRun) run();
      if (!calledRun) dependenciesFulfilled = runCaller;
    };
    function run() {
      if (runDependencies > 0) {
        return;
      }
      preRun();
      if (runDependencies > 0) {
        return;
      }
      function doRun() {
        var _a2;
        if (calledRun) return;
        calledRun = true;
        Module["calledRun"] = true;
        if (ABORT) return;
        initRuntime();
        (_a2 = Module["onRuntimeInitialized"]) == null ? void 0 : _a2.call(Module);
        postRun();
      }
      if (Module["setStatus"]) {
        Module["setStatus"]("Running...");
        setTimeout(() => {
          setTimeout(() => Module["setStatus"](""), 1);
          doRun();
        }, 1);
      } else {
        doRun();
      }
    }
    if (Module["preInit"]) {
      if (typeof Module["preInit"] == "function")
        Module["preInit"] = [Module["preInit"]];
      while (Module["preInit"].length > 0) {
        Module["preInit"].pop()();
      }
    }
    run();
    if (typeof Module.FS === "undefined" && typeof FS !== "undefined") {
      Module.FS = FS;
    }
    if (typeof cv2 === "undefined") {
      var cv2 = Module;
    }
    Module["imread"] = function(imageSource) {
      var img = null;
      if (typeof imageSource === "string") {
        img = document.getElementById(imageSource);
      } else {
        img = imageSource;
      }
      var canvas = null;
      var ctx = null;
      if (img instanceof HTMLImageElement) {
        canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx = canvas.getContext("2d", { willReadFrequently: true });
        ctx.drawImage(img, 0, 0, img.width, img.height);
      } else if (img instanceof HTMLCanvasElement || img instanceof OffscreenCanvas) {
        canvas = img;
        ctx = canvas.getContext("2d");
      } else {
        throw new Error("Please input the valid canvas or img id.");
      }
      var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      return cv2.matFromImageData(imgData);
    };
    Module["imshow"] = function(canvasSource, mat) {
      var canvas = null;
      if (typeof canvasSource === "string") {
        canvas = document.getElementById(canvasSource);
      } else {
        canvas = canvasSource;
      }
      if (!(canvas instanceof HTMLCanvasElement)) {
        throw new Error("Please input the valid canvas element or id.");
      }
      if (!(mat instanceof cv2.Mat)) {
        throw new Error("Please input the valid cv.Mat instance.");
      }
      var img = new cv2.Mat();
      var depth = mat.type() % 8;
      var scale = depth <= cv2.CV_8S ? 1 : depth <= cv2.CV_32S ? 1 / 256 : 255;
      var shift = depth === cv2.CV_8S || depth === cv2.CV_16S ? 128 : 0;
      mat.convertTo(img, cv2.CV_8U, scale, shift);
      switch (img.type()) {
        case cv2.CV_8UC1:
          cv2.cvtColor(img, img, cv2.COLOR_GRAY2RGBA);
          break;
        case cv2.CV_8UC3:
          cv2.cvtColor(img, img, cv2.COLOR_RGB2RGBA);
          break;
        case cv2.CV_8UC4:
          break;
        default:
          throw new Error(
            "Bad number of channels (Source image must have 1, 3 or 4 channels)"
          );
      }
      var imgData = new ImageData(
        new Uint8ClampedArray(img.data),
        img.cols,
        img.rows
      );
      var ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.width = imgData.width;
      canvas.height = imgData.height;
      ctx.putImageData(imgData, 0, 0);
      img.delete();
    };
    Module["VideoCapture"] = function(videoSource) {
      var video = null;
      if (typeof videoSource === "string") {
        video = document.getElementById(videoSource);
      } else {
        video = videoSource;
      }
      if (!(video instanceof HTMLVideoElement)) {
        throw new Error("Please input the valid video element or id.");
      }
      var canvas = document.createElement("canvas");
      canvas.width = video.width;
      canvas.height = video.height;
      var ctx = canvas.getContext("2d");
      this.video = video;
      this.read = function(frame) {
        if (!(frame instanceof cv2.Mat)) {
          throw new Error("Please input the valid cv.Mat instance.");
        }
        if (frame.type() !== cv2.CV_8UC4) {
          throw new Error(
            "Bad type of input mat: the type should be cv.CV_8UC4."
          );
        }
        if (frame.cols !== video.width || frame.rows !== video.height) {
          throw new Error(
            "Bad size of input mat: the size should be same as the video."
          );
        }
        ctx.drawImage(video, 0, 0, video.width, video.height);
        frame.data.set(
          ctx.getImageData(0, 0, video.width, video.height).data
        );
      };
    };
    function Range(start, end) {
      this.start = typeof start === "undefined" ? 0 : start;
      this.end = typeof end === "undefined" ? 0 : end;
    }
    Module["Range"] = Range;
    function Point(x, y) {
      this.x = typeof x === "undefined" ? 0 : x;
      this.y = typeof y === "undefined" ? 0 : y;
    }
    Module["Point"] = Point;
    function Size(width, height) {
      this.width = typeof width === "undefined" ? 0 : width;
      this.height = typeof height === "undefined" ? 0 : height;
    }
    Module["Size"] = Size;
    function Rect() {
      switch (arguments.length) {
        case 0: {
          this.x = 0;
          this.y = 0;
          this.width = 0;
          this.height = 0;
          break;
        }
        case 1: {
          var rect = arguments[0];
          this.x = rect.x;
          this.y = rect.y;
          this.width = rect.width;
          this.height = rect.height;
          break;
        }
        case 2: {
          var point = arguments[0];
          var size = arguments[1];
          this.x = point.x;
          this.y = point.y;
          this.width = size.width;
          this.height = size.height;
          break;
        }
        case 4: {
          this.x = arguments[0];
          this.y = arguments[1];
          this.width = arguments[2];
          this.height = arguments[3];
          break;
        }
        default: {
          throw new Error("Invalid arguments");
        }
      }
    }
    Module["Rect"] = Rect;
    function RotatedRect() {
      switch (arguments.length) {
        case 0: {
          this.center = { x: 0, y: 0 };
          this.size = { width: 0, height: 0 };
          this.angle = 0;
          break;
        }
        case 3: {
          this.center = arguments[0];
          this.size = arguments[1];
          this.angle = arguments[2];
          break;
        }
        default: {
          throw new Error("Invalid arguments");
        }
      }
    }
    RotatedRect.points = function(obj) {
      return Module.rotatedRectPoints(obj);
    };
    RotatedRect.boundingRect = function(obj) {
      return Module.rotatedRectBoundingRect(obj);
    };
    RotatedRect.boundingRect2f = function(obj) {
      return Module.rotatedRectBoundingRect2f(obj);
    };
    Module["RotatedRect"] = RotatedRect;
    function Scalar(v0, v1, v2, v3) {
      this.push(typeof v0 === "undefined" ? 0 : v0);
      this.push(typeof v1 === "undefined" ? 0 : v1);
      this.push(typeof v2 === "undefined" ? 0 : v2);
      this.push(typeof v3 === "undefined" ? 0 : v3);
    }
    Scalar.prototype = new Array();
    Scalar.all = function(v) {
      return Scalar(v, v, v, v);
    };
    Module["Scalar"] = Scalar;
    function MinMaxLoc() {
      switch (arguments.length) {
        case 0: {
          this.minVal = 0;
          this.maxVal = 0;
          this.minLoc = Point(0, 0);
          this.maxLoc = Point(0, 0);
          break;
        }
        case 4: {
          this.minVal = arguments[0];
          this.maxVal = arguments[1];
          this.minLoc = arguments[2];
          this.maxLoc = arguments[3];
          break;
        }
        default: {
          throw new Error("Invalid arguments");
        }
      }
    }
    Module["MinMaxLoc"] = MinMaxLoc;
    function Circle() {
      switch (arguments.length) {
        case 0: {
          this.center = Point(0, 0);
          this.radius = 0;
          break;
        }
        case 2: {
          this.center = arguments[0];
          this.radius = arguments[1];
          break;
        }
        default: {
          throw new Error("Invalid arguments");
        }
      }
    }
    Module["Circle"] = Circle;
    function TermCriteria() {
      switch (arguments.length) {
        case 0: {
          this.type = 0;
          this.maxCount = 0;
          this.epsilon = 0;
          break;
        }
        case 3: {
          this.type = arguments[0];
          this.maxCount = arguments[1];
          this.epsilon = arguments[2];
          break;
        }
        default: {
          throw new Error("Invalid arguments");
        }
      }
    }
    Module["TermCriteria"] = TermCriteria;
    Module["matFromArray"] = function(rows, cols, type, array) {
      var mat = new cv2.Mat(rows, cols, type);
      switch (type) {
        case cv2.CV_8U:
        case cv2.CV_8UC1:
        case cv2.CV_8UC2:
        case cv2.CV_8UC3:
        case cv2.CV_8UC4: {
          mat.data.set(array);
          break;
        }
        case cv2.CV_8S:
        case cv2.CV_8SC1:
        case cv2.CV_8SC2:
        case cv2.CV_8SC3:
        case cv2.CV_8SC4: {
          mat.data8S.set(array);
          break;
        }
        case cv2.CV_16U:
        case cv2.CV_16UC1:
        case cv2.CV_16UC2:
        case cv2.CV_16UC3:
        case cv2.CV_16UC4: {
          mat.data16U.set(array);
          break;
        }
        case cv2.CV_16S:
        case cv2.CV_16SC1:
        case cv2.CV_16SC2:
        case cv2.CV_16SC3:
        case cv2.CV_16SC4: {
          mat.data16S.set(array);
          break;
        }
        case cv2.CV_32S:
        case cv2.CV_32SC1:
        case cv2.CV_32SC2:
        case cv2.CV_32SC3:
        case cv2.CV_32SC4: {
          mat.data32S.set(array);
          break;
        }
        case cv2.CV_32F:
        case cv2.CV_32FC1:
        case cv2.CV_32FC2:
        case cv2.CV_32FC3:
        case cv2.CV_32FC4: {
          mat.data32F.set(array);
          break;
        }
        case cv2.CV_64F:
        case cv2.CV_64FC1:
        case cv2.CV_64FC2:
        case cv2.CV_64FC3:
        case cv2.CV_64FC4: {
          mat.data64F.set(array);
          break;
        }
        default: {
          throw new Error("Type is unsupported");
        }
      }
      return mat;
    };
    Module["matFromImageData"] = function(imageData) {
      var mat = new cv2.Mat(imageData.height, imageData.width, cv2.CV_8UC4);
      mat.data.set(imageData.data);
      return mat;
    };
    if (typeof Symbol !== "undefined" && Symbol.dispose && typeof cv2 !== "undefined" && cv2.Mat && typeof cv2.Mat.prototype.delete === "function") {
      cv2.Mat.prototype[Symbol.dispose] = cv2.Mat.prototype.delete;
      if (cv2.UMat)
        cv2.UMat.prototype[Symbol.dispose] = cv2.UMat.prototype.delete;
    }
    return cv2;
  };
})()();
function _0x4f9c(_0x25af9f, _0x17248d) {
  const _0x5bd880 = _0x5bd8();
  return _0x4f9c = function(_0x4f9c12, _0x18fb32) {
    _0x4f9c12 = _0x4f9c12 - 109;
    let _0x31a9ad = _0x5bd880[_0x4f9c12];
    return _0x31a9ad;
  }, _0x4f9c(_0x25af9f, _0x17248d);
}
function _0x5bd8() {
  const _0x15be9c = ["13592484NkswLk", "84CvyKDz", "89307VUUjTw", "2NlKXWz", "14nXjLIi", "2065392jOaTeh", "CV_64F", "753912UqxapI", "10rNdgCq", "CV_32S", "CV_32F", "55cDRXyH", "4657356nSNrxu", "30395trRYlA", "165180QQBhoB", "CV_16U", "CV_8S", "CV_16S"];
  _0x5bd8 = function() {
    return _0x15be9c;
  };
  return _0x5bd8();
}
(function(_0x80e32, _0x116506) {
  const _0x2fb7c5 = _0x4f9c, _0x560eb0 = _0x80e32();
  while (!![]) {
    try {
      const _0x23a4e0 = parseInt(_0x2fb7c5(109)) / 1 * (parseInt(_0x2fb7c5(110)) / 2) + parseInt(_0x2fb7c5(119)) / 3 + parseInt(_0x2fb7c5(126)) / 4 * (parseInt(_0x2fb7c5(120)) / 5) + parseInt(_0x2fb7c5(112)) / 6 + -parseInt(_0x2fb7c5(111)) / 7 * (-parseInt(_0x2fb7c5(114)) / 8) + -parseInt(_0x2fb7c5(125)) / 9 * (parseInt(_0x2fb7c5(115)) / 10) + -parseInt(_0x2fb7c5(118)) / 11 * (-parseInt(_0x2fb7c5(121)) / 12);
      if (_0x23a4e0 === _0x116506) break;
      else _0x560eb0["push"](_0x560eb0["shift"]());
    } catch (_0xd0381a) {
      _0x560eb0["push"](_0x560eb0["shift"]());
    }
  }
})(_0x5bd8, 860677);
function _0x3698(_0x2e5c3f, _0x349a32) {
  const _0x410c8f = _0x410c();
  return _0x3698 = function(_0x369886, _0x3caa86) {
    _0x369886 = _0x369886 - 152;
    let _0x3c0e69 = _0x410c8f[_0x369886];
    return _0x3c0e69;
  }, _0x3698(_0x2e5c3f, _0x349a32);
}
const _0x3533d9 = _0x3698;
(function(_0x4d4883, _0x1124ac) {
  const _0x4db902 = _0x3698, _0x2ce0f8 = _0x4d4883();
  while (!![]) {
    try {
      const _0x5613f5 = -parseInt(_0x4db902(175)) / 1 + -parseInt(_0x4db902(181)) / 2 * (parseInt(_0x4db902(155)) / 3) + -parseInt(_0x4db902(166)) / 4 * (-parseInt(_0x4db902(173)) / 5) + parseInt(_0x4db902(176)) / 6 * (parseInt(_0x4db902(168)) / 7) + parseInt(_0x4db902(152)) / 8 + -parseInt(_0x4db902(174)) / 9 + parseInt(_0x4db902(160)) / 10;
      if (_0x5613f5 === _0x1124ac) break;
      else _0x2ce0f8["push"](_0x2ce0f8["shift"]());
    } catch (_0x32f998) {
      _0x2ce0f8["push"](_0x2ce0f8["shift"]());
    }
  }
})(_0x410c, 147455);
function humanSegTracking(_0xc2d950, _0x207343, _0x325e20, _0x1326e1, _0x5bcc60, _0x1bae23, _0x2fcb18) {
  const _0xf29dad = _0x3698, _0x18bd7e = _0x207343[_0xf29dad(163)], _0x2a26f8 = _0x207343["cols"], _0x41bebd = new cv[_0xf29dad(169)]();
  _0x2fcb18[_0xf29dad(158)](_0xc2d950, _0x207343, _0x41bebd);
  const _0x43cdbd = new cv["Mat"]();
  _0x2fcb18["calc"](_0x207343, _0xc2d950, _0x43cdbd);
  const _0xdb24d2 = 8, _0x158159 = _0x41bebd[_0xf29dad(153)], _0x196754 = _0x43cdbd["data32F"], _0x103023 = _0x325e20[_0xf29dad(153)], _0x4375c8 = _0x1326e1[_0xf29dad(153)], _0x4d3acb = _0x1bae23[_0xf29dad(153)], _0x29bea0 = _0x5bcc60["data"], _0x5178ec = 2, _0x247624 = _0x2a26f8 * _0x5178ec;
  for (let _0x196657 = 0; _0x196657 < _0x18bd7e; ++_0x196657) {
    const _0x2b3979 = _0x196657 * _0x247624, _0x18d09e = _0x196657 * _0x2a26f8;
    for (let _0x416229 = 0; _0x416229 < _0x2a26f8; ++_0x416229) {
      const _0x54431a = _0x2b3979 + _0x416229 * _0x5178ec, _0x26cb58 = _0x158159[_0x54431a], _0x5ae1ad = _0x158159[_0x54431a + 1], _0x2ef94d = Math[_0xf29dad(157)](_0x26cb58), _0x53cb9f = Math[_0xf29dad(157)](_0x5ae1ad), _0x4dc60f = _0x416229 + _0x2ef94d, _0x3c9895 = _0x196657 + _0x53cb9f;
      if (_0x4dc60f < 0 || _0x4dc60f >= _0x2a26f8 || _0x3c9895 < 0 || _0x3c9895 >= _0x18bd7e) continue;
      const _0x23ddb8 = _0x3c9895 * _0x247624 + _0x4dc60f * _0x5178ec, _0x22fa4e = _0x196754[_0x23ddb8], _0x1d34e4 = _0x196754[_0x23ddb8 + 1], _0x1c05b0 = Math["round"](_0x22fa4e), _0x1e8b53 = Math[_0xf29dad(157)](_0x1d34e4), _0x54705e = _0x2ef94d + _0x1c05b0, _0xb3329b = _0x53cb9f + _0x1e8b53, _0x633837 = _0x54705e * _0x54705e + _0xb3329b * _0xb3329b;
      if (_0x633837 >= _0xdb24d2) continue;
      const _0x62a0da = _0x103023[_0x18d09e + _0x416229], _0x50cac6 = _0x3c9895 * _0x2a26f8 + _0x4dc60f;
      _0x2ef94d === 0 && _0x53cb9f === 0 && _0x1c05b0 === 0 && _0x1e8b53 === 0 && (_0x4d3acb[_0x50cac6] = 0.05), _0x29bea0[_0x50cac6] = 1, _0x4375c8[_0x50cac6] = _0x62a0da;
    }
  }
  return _0x41bebd[_0xf29dad(172)](), _0x43cdbd[_0xf29dad(172)](), 0;
}
function humanSegTrackFuse(_0x3f72ec, _0x2aa834, _0x2b62f8, _0x1c2216) {
  const _0x5bae49 = _0x3698, _0x487205 = _0x3f72ec[_0x5bae49(163)], _0x162c87 = _0x3f72ec["cols"], _0x1ae21a = _0x3f72ec[_0x5bae49(153)], _0x1350e7 = _0x2aa834["data32F"], _0xa2e71a = _0x2b62f8[_0x5bae49(153)], _0x2caa8e = _0x1c2216[_0x5bae49(161)], _0x627a54 = 0.1, _0x1a47e3 = 0.9, _0x28f5b3 = 0.1;
  for (let _0x4a802c = 0; _0x4a802c < _0x487205; ++_0x4a802c) {
    const _0x53fefb = _0x4a802c * _0x162c87;
    for (let _0x22fa9a = 0; _0x22fa9a < _0x162c87; ++_0x22fa9a) {
      const _0x2622ec = _0x53fefb + _0x22fa9a;
      if (_0x2caa8e[_0x2622ec] === 0) continue;
      const _0x29958a = _0x1350e7[_0x2622ec], _0x33e70a = _0x1ae21a[_0x2622ec], _0x18f4f8 = _0xa2e71a[_0x2622ec];
      _0x29958a > _0x1a47e3 || _0x29958a < _0x28f5b3 ? _0x18f4f8 <= _0x627a54 ? _0x1350e7[_0x2622ec] = _0x29958a * 0.3 + _0x33e70a * 0.7 : _0x1350e7[_0x2622ec] = _0x29958a * 0.8 + _0x33e70a * 0.2 : _0x1350e7[_0x2622ec] = _0x29958a * _0x18f4f8 + _0x33e70a * (1 - _0x18f4f8);
    }
  }
  return 0;
}
function thresholdMask(_0x3cc1f2, _0x479ba4, _0xe257df) {
  const _0x1f829b = _0x3698, _0xf3b318 = new cv["Mat"](_0x3cc1f2[_0x1f829b(163)], _0x3cc1f2[_0x1f829b(165)], cv[_0x1f829b(177)], new cv[_0x1f829b(171)](_0x479ba4)), _0xfa5b13 = new cv[_0x1f829b(169)](_0x3cc1f2[_0x1f829b(163)], _0x3cc1f2[_0x1f829b(165)], cv[_0x1f829b(177)], new cv["Scalar"](_0xe257df - _0x479ba4));
  return cv[_0x1f829b(167)](_0x3cc1f2, _0xf3b318, _0x3cc1f2), cv[_0x1f829b(164)](_0x3cc1f2, _0xfa5b13, _0x3cc1f2), cv[_0x1f829b(156)](_0x3cc1f2, _0x3cc1f2, 1, 1, cv[_0x1f829b(154)]), cv[_0x1f829b(156)](_0x3cc1f2, _0x3cc1f2, 0, 0, cv[_0x1f829b(179)]), _0xf3b318[_0x1f829b(172)](), _0xfa5b13[_0x1f829b(172)](), 0;
}
function opticFlowProcess(_0x5cd9f4, _0x2439c8, _0x3dbba1, _0x56014d, _0x4779ea, _0xe5dc4a) {
  const _0x46eb43 = _0x3698, _0x2ecb2c = _0x3dbba1[_0x46eb43(163)], _0x3d85eb = _0x3dbba1["cols"];
  if (_0x4779ea) {
    _0xe5dc4a[_0x46eb43(162)](3);
    const _0x53d24e = new cv[_0x46eb43(169)](_0x2ecb2c, _0x3d85eb, cv[_0x46eb43(177)]);
    return _0x3dbba1[_0x46eb43(159)](_0x53d24e), _0x53d24e;
  } else {
    const _0x16cbbd = new cv[_0x46eb43(169)](_0x2ecb2c, _0x3d85eb, cv[_0x46eb43(177)], new cv[_0x46eb43(171)](0.3)), _0x2a4c12 = new cv["Mat"](_0x2ecb2c, _0x3d85eb, cv[_0x46eb43(177)], new cv[_0x46eb43(171)](0)), _0x1cecd9 = new cv[_0x46eb43(169)](_0x2ecb2c, _0x3d85eb, cv[_0x46eb43(180)], new cv[_0x46eb43(171)](0));
    return humanSegTracking(_0x5cd9f4, _0x2439c8, _0x56014d, _0x2a4c12, _0x1cecd9, _0x16cbbd, _0xe5dc4a), humanSegTrackFuse(_0x2a4c12, _0x3dbba1, _0x16cbbd, _0x1cecd9), cv["GaussianBlur"](_0x3dbba1, _0x3dbba1, new cv["Size"](3, 3), 0, 0, cv["BORDER_DEFAULT"]), _0x3dbba1[_0x46eb43(159)](_0x2a4c12), [_0x1cecd9, _0x16cbbd]["forEach"]((_0x3d79a4) => _0x3d79a4["delete"]()), _0x2a4c12;
  }
}
function createDISOpticalFlow(_0x48f92f = cv[_0x3533d9(170)]) {
  const _0x3a3af4 = _0x3533d9, _0x537c64 = new cv[_0x3a3af4(178)](_0x48f92f);
  return _0x537c64;
}
function _0x410c() {
  const _0x276ccf = ["THRESH_TRUNC", "422031YkalTT", "threshold", "round", "calc", "copyTo", "2443760VARUWc", "data", "setFinestScale", "rows", "divide", "cols", "459596eBTGIP", "subtract", "7ARVbcf", "Mat", "DISOpticalFlow_PRESET_ULTRAFAST", "Scalar", "delete", "5camvvN", "429183FEozXt", "187731JykiyK", "1469088YJCJlN", "CV_32FC1", "DISOpticalFlow", "THRESH_TOZERO", "CV_8UC1", "4mAelPF", "480832Ulsrqa", "data32F"];
  _0x410c = function() {
    return _0x276ccf;
  };
  return _0x410c();
}
const _0x1bee4c = _0xe99c;
(function(_0x2fd721, _0x564e48) {
  const _0x4c5815 = _0xe99c, _0x222ceb = _0x2fd721();
  while (!![]) {
    try {
      const _0x2ee6b6 = -parseInt(_0x4c5815(556)) / 1 + parseInt(_0x4c5815(487)) / 2 * (-parseInt(_0x4c5815(514)) / 3) + parseInt(_0x4c5815(538)) / 4 + parseInt(_0x4c5815(553)) / 5 * (parseInt(_0x4c5815(535)) / 6) + -parseInt(_0x4c5815(529)) / 7 * (parseInt(_0x4c5815(530)) / 8) + -parseInt(_0x4c5815(540)) / 9 * (-parseInt(_0x4c5815(520)) / 10) + parseInt(_0x4c5815(500)) / 11 * (parseInt(_0x4c5815(507)) / 12);
      if (_0x2ee6b6 === _0x564e48) break;
      else _0x222ceb["push"](_0x222ceb["shift"]());
    } catch (_0xf0203c) {
      _0x222ceb["push"](_0x222ceb["shift"]());
    }
  }
})(_0x5b67, 925143);
function _0x5b67() {
  const _0x5589db = ["seg_fast_v2", "timeEnd", "7702930escmfH", "seg_fast_v1", "POST_PROCESS_INIT_DONE", "Size", "POSTPROCESS_WORKER_READY", "data", "fgr", "data32F", "seg_fast", "7JRXEMw", "9155864taNYop", "输入图像未初始化或已释放", "resize", "CV_8U", "copyTo", "6LPnZQM", "length", "delete", "1143484DLRIVR", "charCodeAt", "9FaJvRR", "后处理Worker初始化失败:", "光流处理错误:", "buffer", "det", "后处理Worker中执行后处理失败:", "CV_8UC4", "isDeleted", "subtract", "convertTo", "INIT_POST_PROCESS", "onmessage", "Worker中加载模型失败:", "5168345xnpxTl", "matFromArray", "modelName", "26548dIfCMO", "时间检查通过: ", "constructor", "COLOR_RGBA2GRAY", "784242NFGbAh", "pha", "post_process_time", "Mat", "后处理Worker错误:", "cpuData", "seg_normal", "values", "Worker: 模型加载完成", "dims", "cvtColor", "time", "COLOR_GRAY2RGBA", "3674FqErZd", "INTER_LINEAR", "data8S", "RUN_POST_PROCESS", "postMessage", "set", "ERROR", "14316IRrTZk", "message", "Seg", "RSeg", "multiply", "channels", "COLOR_BGR2RGBA", "3wkaoxi", "LOAD_MODELS", "clone", "CV_32F"];
  _0x5b67 = function() {
    return _0x5589db;
  };
  return _0x5b67();
}
let disOpticalFlow = !![], prevGray = null, preCfd = null, disflow = null, isInit = !![], loadPromise = null;
function checkTimeLimit() {
  const _0x3b4e8f = _0xe99c, _0x2f9668 = /* @__PURE__ */ new Date(), _0x1e797f = new Date(2026, 3, 31);
  if (_0x2f9668 > _0x1e797f) throw new Error("模型加载已过期，当前日期 " + _0x2f9668["toDateString"]() + " 超过了使用期限");
  info(_0x3b4e8f(484) + _0x2f9668["toDateString"]());
}
const base64ToArrayBuffer = (_0x32b8d9) => {
  const _0x28715c = _0xe99c, _0x86c1e = atob(_0x32b8d9), _0x4156f8 = _0x86c1e["length"], _0x24e6b4 = new Uint8Array(_0x4156f8);
  for (let _0x55a070 = 0; _0x55a070 < _0x4156f8; _0x55a070++) {
    _0x24e6b4[_0x55a070] = _0x86c1e[_0x28715c(539)](_0x55a070);
  }
  return _0x24e6b4[_0x28715c(543)];
};
async function loadModelsAsync(_0x35860c) {
  if (loadPromise) return loadPromise;
  return loadPromise = (async () => {
    const _0x39236d = _0xe99c;
    try {
      checkTimeLimit(), info("Worker: 开始加载模型...");
      const _0x73d217 = await import("./models.esm-CFeo_zkN.js");
      let _0x40307f;
      if (_0x35860c === "seg_fast") _0x40307f = base64ToArrayBuffer(_0x73d217[_0x39236d(528)]);
      else {
        if (_0x35860c === _0x39236d(493)) _0x40307f = base64ToArrayBuffer(_0x73d217[_0x39236d(493)]);
        else {
          if (_0x35860c === _0x39236d(521)) _0x40307f = base64ToArrayBuffer(_0x73d217[_0x39236d(521)]);
          else _0x35860c === _0x39236d(518) && (_0x40307f = base64ToArrayBuffer(_0x73d217["seg_fast_v2"]));
        }
      }
      return info(_0x39236d(495)), loadPromise = null, _0x40307f;
    } catch (_0x2939bb) {
      _0x2939bb(_0x39236d(552), _0x2939bb), loadPromise = null;
      throw _0x2939bb;
    }
  })(), loadPromise;
}
function segPostProcess(_0x229124, _0x5a9ae5, ..._0x46470d) {
  const _0x53231d = _0xe99c;
  let _0x506a6e = Object[_0x53231d(494)](_0x229124)[0], _0x2e02d7 = _0x506a6e[_0x53231d(492)], [_0x51a451, _0x1c0c00, _0x17a82c, _0x405214] = _0x506a6e[_0x53231d(496)], _0x3ba7ac = _0x17a82c * _0x405214, _0x46eec5 = _0x5a9ae5, _0x4fa8cf = _0x46470d[0], _0x31b529 = _0x46470d[1], _0x2d7995 = _0x46470d[2], _0x2997a0 = _0x46470d[3];
  const _0x3391b9 = _0x2e02d7["subarray"](_0x3ba7ac, _0x3ba7ac * 2), _0x1e47e3 = new cv[_0x53231d(490)](_0x17a82c, _0x405214, cv[_0x53231d(517)]);
  _0x1e47e3[_0x53231d(527)][_0x53231d(505)](_0x3391b9);
  if (disOpticalFlow) try {
    const _0x441aed = new cv[_0x53231d(490)]();
    _0x46eec5 && !_0x46eec5[_0x53231d(547)]() && (cv[_0x53231d(497)](_0x46eec5, _0x441aed, cv[_0x53231d(486)]), cv[_0x53231d(532)](_0x441aed, _0x441aed, new cv[_0x53231d(523)](_0x405214, _0x17a82c), 0, 0, cv["INTER_LINEAR"]));
    const _0x159f11 = opticFlowProcess(prevGray, _0x441aed, _0x1e47e3, preCfd, isInit, disflow);
    thresholdMask(_0x159f11, 0.2, 0.8), prevGray && !prevGray[_0x53231d(547)]() && prevGray["delete"](), preCfd && !preCfd[_0x53231d(547)]() && preCfd[_0x53231d(537)](), prevGray = _0x441aed["clone"](), preCfd = _0x159f11[_0x53231d(516)](), _0x159f11[_0x53231d(534)](_0x1e47e3), _0x441aed[_0x53231d(537)](), _0x159f11[_0x53231d(537)](), isInit && (isInit = ![]);
  } catch (_0x35f3aa) {
    error(_0x53231d(542), _0x35f3aa);
  }
  cv[_0x53231d(532)](_0x1e47e3, _0x1e47e3, new cv["Size"](_0x31b529, _0x4fa8cf), 0, 0, cv[_0x53231d(501)]);
  const _0x32d465 = new cv[_0x53231d(490)](_0x4fa8cf, _0x31b529, cv[_0x53231d(517)], [1, 1, 1, 1]);
  cv[_0x53231d(548)](_0x32d465, _0x1e47e3, _0x32d465), cv["cvtColor"](_0x1e47e3, _0x1e47e3, cv[_0x53231d(499)]), cv[_0x53231d(497)](_0x32d465, _0x32d465, cv["COLOR_GRAY2RGBA"]);
  const _0xc61651 = _0x46eec5;
  if (!_0xc61651 || _0xc61651["isDeleted"]()) throw new Error(_0x53231d(531));
  if (_0x2997a0 && !_0x2997a0[_0x53231d(547)]()) {
    cv[_0x53231d(532)](_0x2997a0, _0x2997a0, new cv[_0x53231d(523)](_0x31b529, _0x4fa8cf), 0, 0, cv["INTER_LINEAR"]);
    if (_0x2997a0[_0x53231d(512)]() === 3) cv[_0x53231d(497)](_0x2997a0, _0x2997a0, cv[_0x53231d(513)]);
    else _0x2997a0[_0x53231d(512)]() === 1 && cv[_0x53231d(497)](_0x2997a0, _0x2997a0, cv["COLOR_GRAY2RGBA"]);
  } else _0x2997a0 = new cv[_0x53231d(490)](_0x4fa8cf, _0x31b529, cv[_0x53231d(546)], _0x2d7995);
  _0xc61651[_0x53231d(549)](_0xc61651, cv[_0x53231d(517)]), _0x2997a0["convertTo"](_0x2997a0, cv[_0x53231d(517)]), cv[_0x53231d(511)](_0xc61651, _0x1e47e3, _0xc61651), cv[_0x53231d(511)](_0x2997a0, _0x32d465, _0x2997a0), cv["add"](_0xc61651, _0x2997a0, _0xc61651);
  let _0x32b3a4 = new cv[_0x53231d(490)]();
  _0xc61651["convertTo"](_0x32b3a4, cv[_0x53231d(533)]), _0x1e47e3["delete"](), _0x2997a0[_0x53231d(537)](), _0xc61651[_0x53231d(537)](), _0x32d465[_0x53231d(537)]();
  const _0x2ca51d = _0x32b3a4["data8S"], _0x4f1a65 = new ArrayBuffer(_0x2ca51d[_0x53231d(536)]), _0x179354 = new _0x2ca51d[_0x53231d(485)](_0x4f1a65);
  return _0x179354[_0x53231d(505)](_0x2ca51d), _0x32b3a4["delete"](), _0x4f1a65;
}
function rSegPostProcess(_0x446a4d, _0xd3d946, ..._0x653e4f) {
  const _0x1a4603 = _0xe99c, _0x313661 = _0x446a4d[_0x1a4603(526)], _0x249f4f = _0x446a4d[_0x1a4603(488)], _0x4e6444 = _0x313661["dims"], [_0x5119bf, _0x3eb372, _0x26eb36] = [_0x4e6444[1], _0x4e6444[2], _0x4e6444[3]], _0xdfe1c = _0x249f4f[_0x1a4603(492)];
  let _0x227876 = _0xd3d946, _0x58e355 = _0x653e4f[0], _0x130f06 = _0x653e4f[1], _0x58acb6 = _0x653e4f[2], _0x44f122 = _0x653e4f[3];
  const _0x52a971 = cv[_0x1a4603(554)](_0x3eb372, _0x26eb36, cv[_0x1a4603(517)], _0xdfe1c);
  if (disOpticalFlow) {
    let _0x45ea6f = _0x3eb372 / 2, _0x5aa5ae = _0x26eb36 / 2;
    try {
      const _0x1c0db6 = new cv["Mat"]();
      _0x227876 && !_0x227876[_0x1a4603(547)]() && (cv[_0x1a4603(497)](_0x227876, _0x1c0db6, cv[_0x1a4603(486)]), cv["resize"](_0x1c0db6, _0x1c0db6, new cv["Size"](_0x5aa5ae, _0x45ea6f), 0, 0, cv[_0x1a4603(501)]), cv[_0x1a4603(532)](_0x52a971, _0x52a971, new cv[_0x1a4603(523)](_0x5aa5ae, _0x45ea6f), 0, 0, cv[_0x1a4603(501)]));
      const _0x4ddca7 = opticFlowProcess(prevGray, _0x1c0db6, _0x52a971, preCfd, isInit, disflow);
      thresholdMask(_0x4ddca7, 0.2, 0.8), prevGray && !prevGray[_0x1a4603(547)]() && prevGray[_0x1a4603(537)](), preCfd && !preCfd[_0x1a4603(547)]() && preCfd["delete"](), prevGray = _0x1c0db6[_0x1a4603(516)](), preCfd = _0x4ddca7[_0x1a4603(516)](), _0x4ddca7[_0x1a4603(534)](_0x52a971), _0x1c0db6[_0x1a4603(537)](), _0x4ddca7[_0x1a4603(537)](), isInit && (isInit = ![]);
    } catch (_0x577d8e) {
      error(_0x1a4603(542), _0x577d8e);
    }
  }
  cv["resize"](_0x52a971, _0x52a971, new cv[_0x1a4603(523)](_0x130f06, _0x58e355), 0, 0, cv["INTER_LINEAR"]);
  const _0x496162 = new cv["Mat"](_0x58e355, _0x130f06, cv[_0x1a4603(517)], [1, 1, 1, 1]);
  cv[_0x1a4603(548)](_0x496162, _0x52a971, _0x496162), cv[_0x1a4603(497)](_0x52a971, _0x52a971, cv["COLOR_GRAY2RGBA"]), cv[_0x1a4603(497)](_0x496162, _0x496162, cv[_0x1a4603(499)]);
  const _0x25457b = _0x227876;
  if (!_0x25457b || _0x25457b["isDeleted"]()) throw new Error(_0x1a4603(531));
  if (_0x44f122 && !_0x44f122[_0x1a4603(547)]()) {
    cv[_0x1a4603(532)](_0x44f122, _0x44f122, new cv["Size"](_0x130f06, _0x58e355), 0, 0, cv[_0x1a4603(501)]);
    if (_0x44f122[_0x1a4603(512)]() === 3) cv[_0x1a4603(497)](_0x44f122, _0x44f122, cv["COLOR_BGR2RGBA"]);
    else _0x44f122["channels"]() === 1 && cv[_0x1a4603(497)](_0x44f122, _0x44f122, cv[_0x1a4603(499)]);
  } else _0x44f122 = new cv["Mat"](_0x58e355, _0x130f06, cv[_0x1a4603(546)], _0x58acb6);
  _0x25457b[_0x1a4603(549)](_0x25457b, cv[_0x1a4603(517)]), _0x44f122["convertTo"](_0x44f122, cv[_0x1a4603(517)]), cv[_0x1a4603(511)](_0x25457b, _0x52a971, _0x25457b), cv[_0x1a4603(511)](_0x44f122, _0x496162, _0x44f122), cv["add"](_0x25457b, _0x44f122, _0x25457b);
  let _0x987768 = new cv[_0x1a4603(490)]();
  _0x25457b[_0x1a4603(549)](_0x987768, cv["CV_8U"]), _0x52a971["delete"](), _0x44f122[_0x1a4603(537)](), _0x25457b[_0x1a4603(537)](), _0x496162[_0x1a4603(537)]();
  const _0xfc8746 = _0x987768[_0x1a4603(502)], _0x3a7e3c = new ArrayBuffer(_0xfc8746[_0x1a4603(536)]), _0x1cab30 = new _0xfc8746[_0x1a4603(485)](_0x3a7e3c);
  return _0x1cab30[_0x1a4603(505)](_0xfc8746), _0x987768[_0x1a4603(537)](), _0x3a7e3c;
}
function detPostProcess(_0x56e29c, ..._0x1494a0) {
  const _0x963f86 = _0xe99c;
  let _0x245efb = Object[_0x963f86(494)](_0x56e29c)[0], _0x34867b = _0x245efb["data"], _0xc61ff7 = _0x245efb["dims"];
  return { "results": _0x34867b, "dims": _0xc61ff7, "type": _0x963f86(544) };
}
function _0xe99c(_0xd2e1cd, _0x191db0) {
  const _0x5b67fb = _0x5b67();
  return _0xe99c = function(_0xe99c74, _0x523f04) {
    _0xe99c74 = _0xe99c74 - 484;
    let _0x5356fb = _0x5b67fb[_0xe99c74];
    return _0x5356fb;
  }, _0xe99c(_0xd2e1cd, _0x191db0);
}
async function runPostProcess(_0x1c61af, _0x3feabb, _0x1aa67b, _0x1075d7, _0xf6b78b, _0xe3c64f, _0x1c496f, _0x1f05d2, _0x19b74e) {
  const _0x3c8108 = _0xe99c;
  try {
    const _0x663f5b = new cv[_0x3c8108(490)](_0x1aa67b, _0x1075d7, cv[_0x3c8108(546)]);
    _0x663f5b[_0x3c8108(525)][_0x3c8108(505)](new Uint8Array(_0x3feabb));
    let _0x504449 = null;
    _0xe3c64f && (_0x504449 = new cv["Mat"](_0x1f05d2, _0x1c496f, cv[_0x3c8108(546)]), _0x504449[_0x3c8108(525)][_0x3c8108(505)](new Uint8Array(_0xe3c64f)));
    console[_0x3c8108(498)](_0x3c8108(489));
    switch (_0x19b74e) {
      case _0x3c8108(509):
        let _0x24dc43 = segPostProcess(_0x1c61af, _0x663f5b, _0x1aa67b, _0x1075d7, _0xf6b78b, _0x504449);
        console[_0x3c8108(519)](_0x3c8108(489));
        return _0x24dc43;
      case _0x3c8108(510):
        let _0x375265 = rSegPostProcess(_0x1c61af, _0x663f5b, _0x1aa67b, _0x1075d7, _0xf6b78b, _0x504449);
        console[_0x3c8108(519)](_0x3c8108(489));
        return _0x375265;
      case "Det":
        return detPostProcess(_0x1c61af, _0x663f5b, _0x1aa67b, _0x1075d7, _0xf6b78b, _0x504449);
      default:
        throw new Error("未支持的模型类型: " + _0x19b74e);
    }
  } catch (_0x42957c) {
    error(_0x3c8108(545), _0x42957c);
    throw _0x42957c;
  }
}
self[_0x1bee4c(551)] = async function(_0x23aa46) {
  const _0x41b71c = _0x1bee4c, { type: _0x34e91d, data: _0x879df7 } = _0x23aa46[_0x41b71c(525)], { taskId: _0xb858c9, resultsTensors: _0x447155, originalImg: _0xf20763, width: _0x5d51db, height: _0x25141f, backgroundColor: _0xc19668, backgroundImg: _0x4273d7, bgWidth: _0x22bba5, bgHeight: _0x5b5a2b, modelType: _0x26b391 } = _0x879df7 || {};
  try {
    switch (_0x34e91d) {
      case _0x41b71c(503): {
        const _0x23eca4 = await runPostProcess(_0x447155, _0xf20763, _0x5d51db, _0x25141f, _0xc19668, _0x4273d7, _0x22bba5, _0x5b5a2b, _0x26b391);
        self[_0x41b71c(504)]({ "type": "POST_PROCESS_DONE", "data": { "success": !![], "results": _0x23eca4, "taskId": _0xb858c9 } });
        break;
      }
      case _0x41b71c(550): {
        disOpticalFlow = _0x879df7["disOpticalFlow"] || ![];
        if (!disOpticalFlow) break;
        if (disflow != null) {
          disflow[_0x41b71c(537)](), disflow = null;
          if (prevGray) prevGray[_0x41b71c(537)]();
          if (preCfd) preCfd[_0x41b71c(537)]();
          prevGray = null, preCfd = null;
        }
        isInit = !![], disflow = createDISOpticalFlow(), self["postMessage"]({ "type": _0x41b71c(522), "data": { "success": !![], "taskId": _0xb858c9 } });
        break;
      }
      case _0x41b71c(515): {
        const _0x1b67f4 = _0x879df7[_0x41b71c(555)], _0x5c64af = await loadModelsAsync(_0x1b67f4);
        self["postMessage"]({ "type": "MODELS_LOADED", "data": { "success": !![], "model": _0x5c64af } }, [_0x5c64af]);
        break;
      }
      default:
        throw new Error("未知消息类型: " + _0x34e91d);
    }
  } catch (_0x2f3e2b) {
    error(_0x41b71c(491), _0x2f3e2b), self[_0x41b71c(504)]({ "type": _0x41b71c(506), "data": { "success": ![], "error": _0x2f3e2b["message"], "taskId": _0xb858c9 } });
  }
};
try {
  self[_0x1bee4c(504)]({ "type": _0x1bee4c(524), "data": { "success": !![] } });
} catch (_0x2e8b1f) {
  error(_0x1bee4c(541), _0x2e8b1f), self[_0x1bee4c(504)]({ "type": "POSTPROCESS_WORKER_READY", "data": { "success": ![], "error": _0x2e8b1f[_0x1bee4c(508)] } });
}
