var s = document.createElement("script"),
  glob_extension_score = {},
  glob_csv = "",
  dl_flag = 0;
function inject() {
  var e = {},
    t = {},
    r = {},
    o = {},
    a = 0,
    n = 0,
    c = 0,
    s = {},
    p = {},
    g = 0,
    _ = 0,
    l = {},
    m = [
      [
        "VAR: property.subproperty",
        "NOarguments",
        "return value",
        "size of RV",
        "count",
      ],
      [
        "FUN: function call",
        "arguments",
        "return value",
        "size of RV",
        "count",
      ],
    ],
    u = [...m],
    f = "",
    d = [];
  function v(e, t) {
    l[t] = e;
  }
  function h(e, t, r, o, a, n) {
    for (var i = 0; i < t.length; i++)
      if (u[e][0] === t[i]) {
        for (var c = 0, s = 0; s < m.length; s++)
          if (m[s][0] === t[i]) {
            c = s;
            break;
          }
        for (var p = 0, g = 0; g < m[c].length; g++) m[c][g] === r && (p = 1);
        0 === p && (m[c].push(r), d.push(r + ":" + o + ":" + a + ":" + n)),
          (f += r + ";");
      }
  }
  function b() {
    (aggro = 1), (naggro = 0);
    for (var e = 0; e < u.length; e++)
      h(e, fp_metric_canvas, "Canvas", aggro, 0.9, 1),
        h(e, fp_metric_jsfonts, "JS_fonts", aggro, 0.9, 1),
        h(e, fp_metric_list_of_plugins, "List_of_plugins", aggro, 0.9, 1),
        h(e, fp_metric_webgl, "WebGL", aggro, 0.9, 1),
        h(e, fp_metric_webdriver, "Webdriver", aggro, 0.25, 1),
        h(e, fp_metric_flash, "Flash", naggro, 0.4, 1),
        h(e, fp_metric_enabled_cookies, "Cookies_enabled", naggro, 0.25, 1),
        h(e, fp_metric_java_enabled, "Java_enabled", naggro, 0.4, 1),
        h(
          e,
          fp_metric_audio_video_formats,
          "Audio_Video_formats",
          aggro,
          0.5,
          1
        ),
        h(e, fp_metric_audio, "Audio", aggro, 0.9, 1),
        h(e, fp_metric_media_devices, "Media_devices", aggro, 0.9, 1),
        h(e, fp_metric_frequency_analyzer, "Frequency_analyzer", aggro, 0.9, 1),
        h(e, fp_metric_geolocation, "Geolocation", aggro, 0.7, 1),
        h(e, fp_metric_connection, "Connection", aggro, 0.75, 1),
        h(e, fp_metric_timezone, "Timezone", naggro, 0.75, 1),
        h(e, fp_metric_content_language, "Content_language", naggro, 0.75, 1),
        h(e, fp_metric_browser_language, "Browser_language", naggro, 0.75, 1),
        h(e, fp_metric_system_language, "System_language", naggro, 0.75, 1),
        h(e, fp_metric_navigator_onLine, "Online", naggro, 0.1, 1),
        h(e, fp_metric_userAgent, "User_agent", naggro, 0.9, 1),
        h(e, fp_metric_appVersion, "App_version", aggro, 0.75, 1),
        h(e, fp_metric_buildID, "Build_ID", naggro, 0.2, 1),
        h(e, fp_metric_permissions, "Permissions", aggro, 0.5, 1),
        h(e, fp_metric_product, "Product", naggro, 0.4, 1),
        h(e, fp_metric_product_sub, "Product_sub", aggro, 0.4, 1),
        h(e, fp_metric_vendor, "Vendor", naggro, 0.4, 1),
        h(e, fp_metric_vendor_sub, "Vendor_sub", naggro, 0.4, 1),
        h(e, fp_metric_appCodeName, "App_code_name", naggro, 0.2, 1),
        h(e, fp_metric_appName, "App_name", naggro, 0.2, 1),
        h(e, fp_metric_storage, "Storage", naggro, 0.25, 1),
        h(e, fp_metric_dragDrop, "Drag_and_drop", naggro, 0.1, 1),
        h(e, fp_metric_donottrack, "DoNotTrack", naggro, 0.2, 1),
        h(e, fp_metric_platform, "Platform", naggro, 0.25, 1),
        h(e, fp_metric_oscpu, "Oscpu", aggro, 0.1, 1),
        h(e, fp_metric_battery, "Battery_status", aggro, 0.7, 1),
        h(e, fp_metric_device_memory, "Device_memory", aggro, 0.5, 1),
        h(e, fp_metric_cpuClass, "Cpu_Class", naggro, 0.5, 1),
        h(
          e,
          fp_metric_hardwareConcurrency,
          "Hardware_concurrency",
          aggro,
          0.2,
          1
        ),
        h(e, fp_metric_mobile, "Mobile", naggro, 0.3, 1);
    return m;
  }
  (fp_metric_userAgent = ["navigator.userAgent"]),
    (fp_metric_platform = ["navigator.platform"]),
    (fp_metric_enabled_cookies = ["navigator.cookieEnabled"]),
    (fp_metric_timezone = ["getTimezoneOffset()", "window.Intl"]),
    (fp_metric_content_language = [
      "navigator.languages",
      "navigator.userLanguage",
      "navigator.language",
    ]),
    (fp_metric_canvas = [
      "getImageData()",
      "getLineDash()",
      "measureText()",
      "isPointInPath()",
    ]),
    (fp_metric_audio = [
      "createAnalyser()",
      "createOscillator()",
      "createGain()",
      "createScriptProcessor()",
      "createDynamicsCompressor()",
    ]),
    (fp_metric_jsfonts = ["fill()", "fillText()"]),
    (fp_metric_donottrack = ["navigator.doNotTrack", "navigator.msDoNotTrack"]),
    (fp_metric_buildID = ["navigator.buildID"]),
    (fp_metric_product = ["navigator.product"]),
    (fp_metric_product_sub = ["navigator.productSub"]),
    (fp_metric_vendor = ["navigator.vendor"]),
    (fp_metric_vendor_sub = ["navigator.vendorSub"]),
    (fp_metric_hardwareConcurrency = ["navigator.hardwareConcurrency"]),
    (fp_metric_java_enabled = ["navigator.enabled"]),
    (fp_metric_device_memory = ["navigator.deviceMemory"]),
    (fp_metric_list_of_plugins = ["navigator.plugins"]),
    (fp_metric_permissions = ["navigator.permissions"]),
    (fp_metric_webgl = [
      "getParameter()",
      "getSupportedExtensions()",
      "getContextAttributes()",
      "getShaderPrecisionFormat()",
      "getExtension()",
      "readPixels()",
      "getUniformLocation()",
      "getAttribLocation()",
      "clearColor()",
      "enable()",
      "depthFunc()",
      "clear()",
      "createBuffer()",
      "bindBuffer()",
      "bufferData()",
      "createProgram()",
      "createShader()",
      "shaderSource()",
      "compileShader()",
      "attachShader()",
      "linkProgram()",
      "useProgram()",
      "drawArrays()",
    ]),
    (fp_metric_storage = [
      "window.sessionStorage",
      "window.localStorage",
      "window.indexedDB",
      "window.openDatabase",
      "navigator.webkitTemporaryStorage",
      "navigator.webkitPersistentStorage",
      "navigator.openDatabase",
      "navigator.localStorage",
    ]),
    (fp_metric_audio_video_formats = ["canPlayType()"]),
    (fp_metric_media_devices = ["navigator.mediaDevices"]),
    (fp_metric_frequency_analyzer = [
      "getFloatFrequencyData()",
      "getByteFrequencyData()",
      "getFloatTimeDomainData()",
      "getByteTimeDomainData()",
    ]),
    (fp_metric_battery = ["navigator.getBattery"]),
    (fp_metric_oscpu = ["navigator.oscpu"]),
    (fp_metric_webdriver = ["window.webdriver", "navigator.webdriver"]),
    (fp_metric_cpuClass = ["navigator.cpuClass"]),
    (fp_metric_geolocation = ["navigator.geolocation"]),
    (fp_metric_appCodeName = ["navigator.appCodeName"]),
    (fp_metric_appName = ["navigator.appName"]),
    (fp_metric_appVersion = ["navigator.appVersion"]),
    (fp_metric_navigator_onLine = ["navigator.onLine"]),
    (fp_metric_browser_language = ["navigator.browserLanguage"]),
    (fp_metric_system_language = ["navigator.systemLanguage"]),
    (fp_metric_dragDrop = ["navigator.dragDrop"]),
    (fp_metric_flash = ["window.swfobject"]),
    (fp_metric_connection = ["navigator.connection"]),
    (fp_metric_mobile = [
      "window.ondeviceproximity",
      "window.onuserproximity",
      "window.DeviceOrientationEvent",
      "window.DeviceMotionEvent",
      "navigator.maxTouchPoints",
      "navigator.msMaxTouchPoints",
      "navigator.touch",
    ]),
    (fp_metric_screen_window = [
      "window.devicePixelRatio",
      "window.innerWidth",
      "window.innerHeight",
      "window.emit",
      "window.outerWidth",
      "window.outerHeight",
      "screen.colorDepth",
      "screen.width",
      "screen.availWidth",
      "screen.availHeight",
      "screen.pixelDepth",
      "screen.height",
      "screen.availTop",
      "screen.availLeft",
      "screen.deviceXDPI",
      "screen.logicalXDPI",
      "screen.fontSmoothingEnabled",
      "screen.screenInfo",
      "navigator.orientation",
    ]),
    v(fp_metric_canvas, "Canvas"),
    v(fp_metric_jsfonts, "JS_fonts"),
    v(fp_metric_list_of_plugins, "List_of_plugins"),
    v(fp_metric_webgl, "WebGL"),
    v(fp_metric_webdriver, "Webdriver"),
    v(fp_metric_flash, "Flash"),
    v(fp_metric_enabled_cookies, "Cookies_enabled"),
    v(fp_metric_java_enabled, "Java_enabled"),
    v(fp_metric_audio_video_formats, "Audio_Video_formats"),
    v(fp_metric_audio, "Audio"),
    v(fp_metric_media_devices, "Media_devices"),
    v(fp_metric_frequency_analyzer, "Frequency_analyzer"),
    v(fp_metric_geolocation, "Geolocation"),
    v(fp_metric_connection, "Connection"),
    v(fp_metric_timezone, "Timezone"),
    v(fp_metric_content_language, "Content_language"),
    v(fp_metric_browser_language, "Browser_language"),
    v(fp_metric_system_language, "System_language"),
    v(fp_metric_navigator_onLine, "Online"),
    v(fp_metric_userAgent, "User_agent"),
    v(fp_metric_appVersion, "App_version"),
    v(fp_metric_buildID, "Build_ID"),
    v(fp_metric_permissions, "Permissions"),
    v(fp_metric_product, "Product"),
    v(fp_metric_product_sub, "Product_sub"),
    v(fp_metric_vendor, "Vendor"),
    v(fp_metric_vendor_sub, "Vendor_sub"),
    v(fp_metric_appCodeName, "App_code_name"),
    v(fp_metric_appName, "App_name"),
    v(fp_metric_storage, "Storage"),
    v(fp_metric_dragDrop, "Drag_and_drop"),
    v(fp_metric_donottrack, "DoNotTrack"),
    v(fp_metric_platform, "Platform"),
    v(fp_metric_oscpu, "Oscpu"),
    v(fp_metric_battery, "Battery_status"),
    v(fp_metric_device_memory, "Device_memory"),
    v(fp_metric_cpuClass, "Cpu_Class"),
    v(fp_metric_hardwareConcurrency, "Hardware_concurrency"),
    v(fp_metric_mobile, "Mobile"),
    v(fp_metric_screen_window, "Screen_window");
  var y = function (e, t) {
    var r = [];
    return null == e
      ? r
      : Array.prototype.map && e.map === Array.prototype.map
      ? e.map(t)
      : ((function (e, t) {
          if (Array.prototype.forEach && e.forEach === Array.prototype.forEach)
            e.forEach(t);
          else if (e.length === +e.length)
            for (var r = 0, o = e.length; r < o; r++) t(e[r], r, e);
          else for (var a in e) e.hasOwnProperty(a) && t(e[a], a, e);
        })(e, function (e, o, a) {
          r.push(t(e, o, a));
        }),
        r);
  };
  function w(e, t, r, o, a) {
    var n = (function () {
      let e = Error.prepareStackTrace;
      var t = {};
      try {
        let e;
        for (
          Error.prepareStackTrace = function (e, t) {
            return t;
          },
            err = new Error(),
            e = err.stack[0].getFileName(),
            i = 0;
          i < err.stack.length;
          i++
        )
          if (
            void 0 !== err.stack[i].getFileName() &&
            null !== err.stack[i].getFileName() &&
            e !== err.stack[i].getFileName()
          ) {
            t.file = err.stack[i].getFileName();
            break;
          }
      } catch (e) {}
      return (Error.prepareStackTrace = e), t;
    })();
    (call_source = n.file),
      delete n.file,
      (n.functioncall = e),
      (n.category = (function (e) {
        for (key in l) if (l[key].includes(e)) return key;
        return "unknown";
      })(e));
    try {
      a.toString().includes("Storage")
        ? localStorage === a
          ? (n.object = "[object LocalStorage]")
          : sessionStorage === a
          ? (n.object = "[object sessionStorage]")
          : (n.object = a.toString())
        : (n.object = a.toString());
    } catch (e) {
      n.object = "error: " + e;
    }
    call_source in s ||
      ((s[call_source] = { idx: g, length: 0, data: [] }),
      (p[call_source] = { score: 0, unique_categories: [], fingerprint: [] }),
      g++),
      (n.idx = s[call_source].length),
      (n.gidx = _),
      _++,
      "unknown" == n.category ||
        p[call_source].unique_categories.includes(n.category) ||
        (p[call_source].unique_categories.push(n.category),
        (p[call_source].score = p[call_source].unique_categories.length)),
      "unknown" != n.category && p[call_source].fingerprint.push(n.category),
      s[call_source].data.push(n),
      s[call_source].length++;
    var c,
      m = [];
    try {
      m.push(e),
        "{}" === JSON.stringify(t)
          ? m.push("")
          : '""' === JSON.stringify(t)
          ? m.push(t)
          : m.push(JSON.stringify(t));
      var u = "";
      (u =
        "object" == typeof (c = r)
          ? null === c
            ? "null"
            : c
          : "function" == typeof c || c instanceof Function
          ? c.toString().slice(9).slice(0, -18)
          : c),
        "undefined" === r || void 0 === typeof r ? m.push("") : m.push(u + ""),
        m.push("0"),
        m.push(o + "");
    } catch (e) {}
    return m;
  }
  function S(e, t) {
    f = "";
    n = c + 41 + 12 + 16;
    var r = b(),
      o = (function (e) {
        for (var t = "", r = e.split(";"), o = 0; o < r.length; o++) {
          let e = r[o];
          t.includes(e) || (t += e + ";");
        }
        return t;
      })(f),
      a = "";
    "" == o
      ? (a = 0)
      : (";" == o.slice(-1) && (o = o.slice(0, -1)), (a = o.split(";").length));
    var i = [...new Set(d)],
      g = (function (e) {
        for (var t = "", r = 2; r < e.length; r++) {
          let o = e[r][0];
          o.includes("()") && (o = o.split("(")[0] + "()"),
            t.includes(o) || (t += o + ";");
        }
        return t;
      })(m),
      l = Math.ceil(((r.length - 2) / n) * 100) + "%",
      u = Math.ceil((a / 40) * 100) + "%",
      v = l + " (" + (r.length - 2) + "/" + n + ")",
      h = u + " (" + a + "/40)",
      y = window.location.href,
      w = (function (e) {
        for (var t = 0, r = 0; r < e.length; r++)
          1 == e[r].split(":")[1] && (t += 1);
        return t;
      })(i),
      S = Math.ceil((w / 18) * 100) + "%",
      D = Math.ceil((w / a) * 100) + "% (" + w + "/" + a + ")";
    1 == D.includes("NaN") && (D = "0% (" + w + "/" + a + ")");
    var N = S + " (" + w + "/18)",
      x = s;
    (timestamp = new Date().getTime()),
      (script_based_page_fps = []),
      Object.keys(p)
        .sort()
        .forEach(function (e, t) {
          (script_calls_cnt = p[e].fingerprint.length),
            (script_fp = p[e].fingerprint.join(";")),
            (script_score = p[e].unique_categories.length),
            (fixed_url = e),
            e.includes("?") && (fixed_url = e.split("?")[0]),
            fixed_url.includes(".js") &&
              p[e].fingerprint.length &&
              script_based_page_fps.push(script_fp);
        }),
      (glob_extension_score = JSON.stringify({
        url: y,
        date: timestamp,
        coverage_entities: v,
        coverage_categories: h,
        aggressive_coverage: N,
        aggressive_categories: D,
        fingerprint_categories: o,
        fingerprint_categories_all: f,
        loadtime: e,
        TIMEOUT: t,
        score: a,
        entities_all: g,
        script_origins_calls: x,
        script_origins_calls_cnt: _,
      })),
      (glob_csv = [y, v, h, N, D, a, e, t, timestamp, o, f, g, x].join(", "));
  }
  function D(e, t = "glob_extension_score") {
    window.postMessage({ type: t, text: e }, "*");
  }
  (detectFingerprinting = function () {
    function n(e) {
      var t, a;
      e.obj[e.propName] =
        ((t = e.obj[e.propName]),
        (a = e.obj),
        function () {
          if (void 0 === t) return;
          let e = arguments;
          try {
            var n = t.apply(this, e);
          } catch (e) {
            return;
          }
          var i = n;
          if (
            (void 0 === i && (i = "undefined"),
            null === i && (i = "null"),
            "function" == typeof t)
          ) {
            if (!0 === t.toString().includes("function ()")) return n;
            (handleSeperately = [
              "canPlayType()",
              "getItem()",
              "setItem()",
              "getParameter()",
              "getExtension()",
            ]),
              handleSeperately.forEach(function (r, o) {
                if (!0 === t.toString().includes(r)) {
                  var a = e;
                  a = "{}" === JSON.stringify(e) ? "" : JSON.stringify(e);
                  for (var n = m.length - 1; n >= 0; n--)
                    m[n][0] === r &&
                      ((m[n][1] = m[n][1] + ";" + a),
                      (m[n][2] = m[n][2] + ";" + i),
                      (m[n][4] = parseInt(m[n][4], 10) + 1 + ""));
                }
              });
          }
          if (!0 === i.toString().includes("[object HTML")) return n;
          !0 === i.toString().includes("WebGL") && (i = !!i),
            (!0 !== i.toString().includes("OscillatorNode") &&
              !0 !== i.toString().includes("DynamicsCompressorNode")) ||
              (i = !!i),
            !0 === i.toString().includes("[object Object]") && (i = !!i),
            (g[t] = (g[t] || 0) + 1),
            (r[t] = (r[t] || 0) + 1),
            (_[i] = (_[i] || 0) + 1),
            (o[i] = (o[i] || 0) + 1);
          for (
            var c = 0,
              s = t.toString().split(" ")[1],
              p = w(s, e, i, r[t], a),
              l = 0;
            l < m.length;
            l++
          )
            m[l][0] === s &&
              (c++,
              "canPlayType()" != m[l][0] &&
                "setItem()" != m[l][0] &&
                "getParameter()" != m[l][0] &&
                "getExtension()" != m[l][0] &&
                "getItem()" != m[l][0] &&
                (m[l] = p));
          return c || m.push(p), u.push(p), n;
        });
    }
    function i(r, o) {
      var n = originalValues[o],
        i = n;
      if (1 != a) return n;
      if ("getComputedStyle" === o) return n;
      if ("plugins" === o) {
        for (var c = [], g = 0, _ = i.length; g < _; g++) i[g] && c.push(i[g]);
        i = y(c, function (e) {
          var t = y(e, function (e) {
            return [e.type, e.suffixes];
          });
          return [e.name, e.description, t];
        });
      }
      if ("mimeTypes" === o) {
        for (c = [], g = 0, _ = i.length; g < _; g++) i[g] && c.push(i[g]);
        i = y(c, function (e) {
          var t = y(e, function (e) {
            return [e.type, e.suffixes, e.description];
          });
          return [e.type, e.description, t];
        });
      }
      if ("permissions" === o) {
        for (c = [], g = 0, _ = i.length; g < _; g++) i[g] && c.push(i[g]);
        i = y(c, function (e) {
          var t = y(e, function (e) {
            return [e.type, e.suffixes];
          });
          return [e.name, e.description, t];
        });
      }
      var l = [
        "geolocation",
        "WebGLRenderingContext",
        "localStorage",
        "sessionStorage",
        "openDatabase",
        "indexedDB",
        "addBehavior",
        "history",
        "DeprecatedStorageQuota",
      ];
      for (items in l) o === l[items] && (i = !!n);
      "Intl" === o && (i = i.DateTimeFormat().resolvedOptions().timeZone),
        "mediaDevices" === o &&
          n.enumerateDevices().then(function (e) {
            i = e.map(function (e) {
              return (
                "id=" +
                e.deviceId +
                ";gid=" +
                e.groupId +
                ";" +
                e.kind +
                ";" +
                e.label
              );
            });
            for (var t = m.length - 1; t >= 0; t--)
              "navigator.mediaDevices" === m[t][0] &&
                (m[t][2] = JSON.stringify(i));
          }),
        (s[r + "." + o] = (s[r + "." + o] || 0) + 1),
        (e[r + "." + o] = (e[r + "." + o] || 0) + 1),
        (p[r + "." + o] = (p[r + "." + o] || 0) + 1),
        (t[r + "." + o] = (t[r + "." + o] || 0) + 1);
      var f = 0,
        d = w(r + "." + o, "", i, p[r + "." + o], window);
      for (g = 0; g < m.length; g++)
        m[g][0] === r + "." + o && (f++, (m[g] = d));
      return f || m.push(d), u.push(d), n;
    }
    (attributesToMonitor = {
      navigator: [
        "userAgent",
        "platform",
        "plugins",
        "doNotTrack",
        "languages",
        "product",
        "productSub",
        "language",
        "vendor",
        "vendorSub",
        "buildID",
        "oscpu",
        "hardwareConcurrency",
        "cpuClass",
        "webdriver",
        "maxTouchPoints",
        "appVersion",
        "appCodeName",
        "cookieEnabled",
        "enabled",
        "msDoNotTrack",
        "appName",
        "mediaDevices",
        "userLanguage",
        "browserLanguage",
        "systemLanguage",
        "msMaxTouchPoints",
        "webkitTemporaryStorage",
        "webkitPersistentStorage",
        "onLine",
        "permissions",
        "canvas",
        "dragDrop",
        "geolocation",
        "localStorage",
        "orientation",
        "touch",
        "openDatabase",
        "getBattery",
        "deviceMemory",
        "connection",
      ],
      screen: [
        "width",
        "height",
        "availWidth",
        "availHeight",
        "availTop",
        "availLeft",
        "colorDepth",
        "pixelDepth",
        "deviceXDPI",
        "logicalXDPI",
        "fontSmoothingEnabled",
        "screenInfo",
      ],
      window: [
        "webdriver",
        "emit",
        "outerHeight",
        "outerWidth",
        "innerWidth",
        "innerHeight",
        "devicePixelRatio",
        "localStorage",
        "indexedDB",
        "sessionStorage",
        "Intl",
        "openDatabase",
        "swfobject",
        "ondeviceproximity",
        "onuserproximity",
        "DeviceOrientationEvent",
        "DeviceMotionEvent",
      ],
    }),
      (window.navigator.monitorFingerprinting = {}),
      (originalValues = {});
    var s = {},
      p = {},
      g = {},
      _ = {};
    for (let e of Object.keys(attributesToMonitor))
      for (let t of attributesToMonitor[e])
        if ("window" !== e) {
          try {
            originalValues[t] = window[e][t];
          } catch (e) {
            console.log(e);
          }
          window[e].__defineGetter__(t, () => i(e, t));
        } else {
          try {
            originalValues[t] = window[t];
          } catch (e) {
            console.log(e);
          }
          window.__defineGetter__(t, () => i(e, t));
        }
    (audioContextMethods = [
      "createAnalyser",
      "createOscillator",
      "createGain",
      "createScriptProcessor",
      "createDynamicsCompressor",
    ]),
      audioContextMethods.forEach((e) => {
        n({ propName: e, obj: window.AudioContext.prototype }), (c += 1);
      }),
      (offlineAudioContextMethods = [
        "createAnalyser",
        "createOscillator",
        "createGain",
        "createScriptProcessor",
        "createDynamicsCompressor",
      ]),
      offlineAudioContextMethods.forEach((e) => {
        n({ propName: e, obj: window.OfflineAudioContext.prototype });
      }),
      (analyserMethods = [
        "getFloatFrequencyData",
        "getByteFrequencyData",
        "getFloatTimeDomainData",
        "getByteTimeDomainData",
      ]),
      analyserMethods.forEach((e) => {
        n({ propName: e, obj: window.AnalyserNode.prototype }), (c += 1);
      }),
      (webGLMethods = [
        "getParameter",
        "getSupportedExtensions",
        "getContextAttributes",
        "getShaderPrecisionFormat",
        "getExtension",
        "readPixels",
        "getUniformLocation",
        "getAttribLocation",
        "clearColor",
        "enable",
        "depthFunc",
        "clear",
        "createBuffer",
        "bindBuffer",
        "bufferData",
        "createProgram",
        "createShader",
        "shaderSource",
        "compileShader",
        "attachShader",
        "linkProgram",
        "useProgram",
        "drawArrays",
      ]),
      webGLMethods.forEach((e) => {
        n({ propName: e, obj: window.WebGLRenderingContext.prototype }),
          (c += 1);
      }),
      (webGL2Methods = [
        "getParameter",
        "getSupportedExtensions",
        "getContextAttributes",
        "getShaderPrecisionFormat",
        "getExtension",
        "readPixels",
        "getUniformLocation",
        "getAttribLocation",
        "clearColor",
        "enable",
        "depthFunc",
        "clear",
        "createBuffer",
        "bindBuffer",
        "bufferData",
        "createProgram",
        "createShader",
        "shaderSource",
        "compileShader",
        "attachShader",
        "linkProgram",
        "useProgram",
        "drawArrays",
      ]),
      webGL2Methods.forEach((e) => {
        n({ propName: e, obj: window.WebGL2RenderingContext.prototype });
      }),
      (canvasEltMethods = ["toDataURL", "toBlob"]),
      canvasEltMethods.forEach((e) => {
        n({ propName: e, obj: HTMLCanvasElement.prototype }), (c += 1);
      }),
      (canvasMethods = [
        "getImageData",
        "getLineDash",
        "measureText",
        "isPointInPath",
        "fillText",
        "fillRect",
        "beginPath",
        "arc",
        "closePath",
        "fill",
      ]),
      canvasMethods.forEach((e) => {
        n({ propName: e, obj: CanvasRenderingContext2D.prototype }), (c += 1);
      }),
      (otherFunctionsToOverride = [
        {
          propName: "resolvedOptions().timeZone",
          obj: window.Intl.DateTimeFormat.prototype,
        },
        { propName: "getTimezoneOffset", obj: Date.prototype },
        {
          propName: "getComputedTextLength",
          obj: SVGTextContentElement.prototype,
        },
        { propName: "createElement", obj: document },
        { propName: "createElementNS", obj: document },
        { propName: "pushState", obj: window.history },
        { propName: "getElementsByClassName", obj: document },
        { propName: "getElementsByName", obj: document },
        { propName: "getElementsByTagName", obj: document },
        { propName: "insertBefore", obj: document },
        { propName: "appendChild", obj: document },
        { propName: "elementFromPoint", obj: document },
        { propName: "getVoices", obj: speechSynthesis },
        { propName: "setItem", obj: localStorage },
        { propName: "getItem", obj: localStorage },
        { propName: "removeItem", obj: localStorage },
        { propName: "setItem", obj: sessionStorage },
        { propName: "getItem", obj: sessionStorage },
        { propName: "removeItem", obj: sessionStorage },
        { propName: "canPlayType", obj: HTMLVideoElement.prototype },
        { propName: "canPlayType", obj: HTMLAudioElement.prototype },
      ]);
    try {
      otherFunctionsToOverride.forEach(n), (c += 2);
    } catch (e) {
      console.log("[FPMON] Error: " + e);
    }
  }),
    detectFingerprinting();
  var N = new Date().getTime();
  console.log("[FPMON] fingerprinting monitor initiated."), (a = 1);
  S(new Date().getTime() - N, !1),
    D(glob_extension_score),
    D(JSON.stringify(p), "script_origins_internal"),
    (numberofcalls = 0),
    (olddata = 0),
    setTimeout(function () {
      !(function e() {
        (numberofcalls += 1),
          S(new Date().getTime() - N, !1),
          D(glob_extension_score),
          D(JSON.stringify(p), "script_origins_internal"),
          setTimeout(function () {
            e();
          }, 100 * numberofcalls);
      })();
    }, 10);
}
var actualCode = "(" + inject + ")()";
(s.text = "" + actualCode),
  s.setAttribute("data-myAttri", "key"),
  (document.head || document.documentElement).appendChild(s);
var share_extension_score = {},
  share_script_origins_internal = {},
  glob_trace_id = null,
  glob_orig_domain = null;
window.addEventListener(
  "message",
  function (e) {
    e.source == window &&
      (e.data.type &&
        "glob_extension_score" == e.data.type &&
        (share_extension_score = e.data.text),
      e.data.type &&
        "script_origins_internal" == e.data.type &&
        (share_script_origins_internal = e.data.text));
  },
  !1
),
  chrome.runtime.onMessage.addListener((e, t, r) => {
    "popup" === e.from &&
      "DOMInfo" === e.subject &&
      r({ extension_score: share_extension_score });
    "popup" === e.from &&
      "ScriptInfo" === e.subject &&
      r({ script_origins_internal: share_script_origins_internal });
  }),
  (interval3 = setInterval(function () {
    chrome.runtime.sendMessage({
      from: "content",
      subject: "showPageAction",
      score: share_extension_score,
    });
    console.log(share_extension_score)
  }, 1e3));
