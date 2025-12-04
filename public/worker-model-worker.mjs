(function(_0x6bf0bc, _0x4858a5) {
  const _0x1d5221 = _0x4dcd, _0x2fc97c = _0x6bf0bc();
  while (!![]) {
    try {
      const _0x4a2ee2 = parseInt(_0x1d5221(344)) / 1 * (-parseInt(_0x1d5221(345)) / 2) + parseInt(_0x1d5221(338)) / 3 + -parseInt(_0x1d5221(330)) / 4 * (parseInt(_0x1d5221(334)) / 5) + parseInt(_0x1d5221(329)) / 6 * (-parseInt(_0x1d5221(337)) / 7) + -parseInt(_0x1d5221(341)) / 8 * (-parseInt(_0x1d5221(342)) / 9) + parseInt(_0x1d5221(335)) / 10 * (-parseInt(_0x1d5221(339)) / 11) + parseInt(_0x1d5221(332)) / 12 * (parseInt(_0x1d5221(333)) / 13);
      if (_0x4a2ee2 === _0x4858a5) break;
      else _0x2fc97c["push"](_0x2fc97c["shift"]());
    } catch (_0x27cc6c) {
      _0x2fc97c["push"](_0x2fc97c["shift"]());
    }
  }
})(_0x54cc, 681598);
let isDebugMode = !![];
function _0x54cc() {
  const _0x395a6a = ["error", "11837VLBsHC", "2978100EGdqao", "275WolokA", "info", "1184Sxzqcu", "78903kFauon", "log", "848839NHFSZz", "2gMFunm", "432uwqPet", "22468aenbgr", "warn", "516lcPgbN", "419731Ogzckg", "1145hbsJPL", "296030ZUTjqI"];
  _0x54cc = function() {
    return _0x395a6a;
  };
  return _0x54cc();
}
function info(..._0x1d47ad) {
  const _0x5e60c6 = _0x4dcd;
  isDebugMode && console[_0x5e60c6(340)](..._0x1d47ad);
}
function _0x4dcd(_0x3511f9, _0x1343eb) {
  const _0x54ccdc = _0x54cc();
  return _0x4dcd = function(_0x4dcd06, _0x61ef93) {
    _0x4dcd06 = _0x4dcd06 - 329;
    let _0x10f41c = _0x54ccdc[_0x4dcd06];
    return _0x10f41c;
  }, _0x4dcd(_0x3511f9, _0x1343eb);
}
const _0x590195 = _0x29da;
function _0x5953() {
  const _0xbc7d18 = ["未知消息类型: ", "buffer", "WORKER_READY", "seg_fast_v1", "48aCBRQn", "Worker: 模型加载完成", "年12月31日的使用期限", "138pChekJ", "Worker错误:", "./models.esm.js", "6064355LISAKO", "Worker中加载模型失败:", "11767jjqvIa", "2512qYntjY", "charCodeAt", "message", "Worker: 开始加载模型...", "seg_fast_v2", "ERROR", "seg_fast", "toDateString", "length", "14036LFvLQd", "postMessage", "onmessage", "304077gwEpba", "modelName", "528822WURKWN", " 超过了 ", "3323736AmmfSW", "seg_normal", "40951410yANFdQ"];
  _0x5953 = function() {
    return _0xbc7d18;
  };
  return _0x5953();
}
(function(_0x1ead47, _0x25b2fc) {
  const _0xb9b98e = _0x29da, _0x3f59cc = _0x1ead47();
  while (!![]) {
    try {
      const _0x45c9e0 = -parseInt(_0xb9b98e(279)) / 1 * (parseInt(_0xb9b98e(262)) / 2) + -parseInt(_0xb9b98e(265)) / 3 * (parseInt(_0xb9b98e(276)) / 4) + -parseInt(_0xb9b98e(282)) / 5 + -parseInt(_0xb9b98e(269)) / 6 + parseInt(_0xb9b98e(284)) / 7 * (parseInt(_0xb9b98e(285)) / 8) + -parseInt(_0xb9b98e(267)) / 9 + parseInt(_0xb9b98e(271)) / 10;
      if (_0x45c9e0 === _0x25b2fc) break;
      else _0x3f59cc["push"](_0x3f59cc["shift"]());
    } catch (_0x1cebdc) {
      _0x3f59cc["push"](_0x3f59cc["shift"]());
    }
  }
})(_0x5953, 612598);
let loadPromise = null;
function checkTimeLimit() {
  const _0x11608b = _0x29da, _0x3626e5 = /* @__PURE__ */ new Date(), _0x5aa0ac = _0x3626e5["getFullYear"](), _0x3081ec = new Date(_0x5aa0ac, 12, 31);
  if (_0x3626e5 > _0x3081ec) throw new Error("模型加载已过期，当前日期 " + _0x3626e5["toDateString"]() + _0x11608b(268) + _0x5aa0ac + _0x11608b(278));
  info("时间检查通过: " + _0x3626e5[_0x11608b(292)]());
}
const base64ToArrayBuffer = (_0x1db208) => {
  const _0x2049b8 = _0x29da, _0x4ba15d = atob(_0x1db208), _0x4438d7 = _0x4ba15d[_0x2049b8(293)], _0x419a96 = new Uint8Array(_0x4438d7);
  for (let _0x3c7808 = 0; _0x3c7808 < _0x4438d7; _0x3c7808++) {
    _0x419a96[_0x3c7808] = _0x4ba15d[_0x2049b8(286)](_0x3c7808);
  }
  return _0x419a96[_0x2049b8(273)];
};
async function loadModelsAsync(_0x599356) {
  if (loadPromise) return loadPromise;
  return loadPromise = (async () => {
    const _0x39501a = _0x29da;
    try {
      checkTimeLimit(), info(_0x39501a(288));
      const _0x253e81 = await import(_0x39501a(281));
      let _0x119b0f;
      if (_0x599356 === _0x39501a(291)) _0x119b0f = base64ToArrayBuffer(_0x253e81["seg_fast"]);
      else {
        if (_0x599356 === _0x39501a(270)) _0x119b0f = base64ToArrayBuffer(_0x253e81["seg_normal"]);
        else {
          if (_0x599356 === _0x39501a(275)) _0x119b0f = base64ToArrayBuffer(_0x253e81[_0x39501a(275)]);
          else _0x599356 === "seg_fast_v2" && (_0x119b0f = base64ToArrayBuffer(_0x253e81[_0x39501a(289)]));
        }
      }
      return info(_0x39501a(277)), loadPromise = null, _0x119b0f;
    } catch (_0x2d8e48) {
      _0x2d8e48(_0x39501a(283), _0x2d8e48), loadPromise = null;
      throw _0x2d8e48;
    }
  })(), loadPromise;
}
function _0x29da(_0x41d70f, _0x4b3fe6) {
  const _0x595303 = _0x5953();
  return _0x29da = function(_0x29dae5, _0xea1a68) {
    _0x29dae5 = _0x29dae5 - 262;
    let _0x3b6b73 = _0x595303[_0x29dae5];
    return _0x3b6b73;
  }, _0x29da(_0x41d70f, _0x4b3fe6);
}
self[_0x590195(264)] = async function(_0x149e0a) {
  const _0x48de78 = _0x590195, { type: _0x31bf51, data: _0x563915 } = _0x149e0a["data"];
  try {
    switch (_0x31bf51) {
      case "LOAD_MODELS":
        const _0x2a407c = _0x563915[_0x48de78(266)], _0x3ae263 = await loadModelsAsync(_0x2a407c);
        self["postMessage"]({ "type": "MODELS_LOADED", "data": { "success": !![], "model": _0x3ae263 } }, [_0x3ae263]);
        break;
      default:
        throw new Error(_0x48de78(272) + _0x31bf51);
    }
  } catch (_0xa164f2) {
    _0xa164f2(_0x48de78(280), _0xa164f2), self[_0x48de78(263)]({ "type": _0x48de78(290), "data": { "success": ![], "error": _0xa164f2[_0x48de78(287)] } });
  }
};
try {
  self[_0x590195(263)]({ "type": _0x590195(274), "data": { "success": !![] } });
} catch (_0x2a1f77) {
  _0x2a1f77("Worker初始化失败:", _0x2a1f77), self[_0x590195(263)]({ "type": _0x590195(274), "data": { "success": ![], "error": _0x2a1f77["message"] } });
}
