var supportsPassive = !1,
  webpSupport = !1,
  jp2Supports = !1;
try {
  var opts = Object.defineProperty({}, "passive", {
    get: function () {
      supportsPassive = !0;
    },
  });
  window.addEventListener("testPassive", null, opts),
    window.removeEventListener("testPassive", null, opts);
} catch (t) {}
try {
  function canUseWebP() {
    var t = document.createElement("canvas");
    if (t.getContext && t.getContext("2d")) {
      var e = !!t.toDataURL && t.toDataURL("image/webp");
      if (e) return 0 === e.indexOf("data:image/webp");
    }
    return !1;
  }
  webpSupport = canUseWebP();
} catch (t) {}

function canUseJp2() {
  try {
    var t = new Image();
    (t.onload = t.onerror =
      function () {
        2 === t.height && (jp2Supports = !0);
      }),
      (t.src =
        "data:image/jp2;base64,/0//UQAyAAAAAAABAAAAAgAAAAAAAAAAAAAABAAAAAQAAAAAAAAAAAAEBwEBBwEBBwEBBwEB/1IADAAAAAEAAAQEAAH/XAAEQED/ZAAlAAFDcmVhdGVkIGJ5IE9wZW5KUEVHIHZlcnNpb24gMi4wLjD/kAAKAAAAAABYAAH/UwAJAQAABAQAAf9dAAUBQED/UwAJAgAABAQAAf9dAAUCQED/UwAJAwAABAQAAf9dAAUDQED/k8+kEAGvz6QQAa/PpBABr994EAk//9k=");
  } catch (t) {}
}
canUseJp2();
var optimizedResize = (function () {
  var e = [],
    t = !1;

  function n() {
    t ||
      ((t = !0),
      window.requestAnimationFrame
        ? window.requestAnimationFrame(i)
        : setTimeout(i, 66));
  }

  function i() {
    e.forEach(function (t) {
      t();
    }),
      (t = !1);
  }
  return {
    add: function (t) {
      e.length || window.addEventListener("resize", n),
        (function (t) {
          t && e.push(t);
        })(t);
    },
  };
})();

function getCoords(t) {
  if (t) {
    var e = t.getBoundingClientRect();
    return {
      top: e.top + pageYOffset,
      left: e.left + pageXOffset,
    };
  }
}

function iterateImages(t, e, n) {
  for (var i = 0; i < e.length; i++) {
    var a = createSource(e[i], n);
    a && t.appendChild(a);
  }
  return t;
}

function createSource(t, e) {
  if (
    t &&
    e &&
    t.hasOwnProperty("type") &&
    t.hasOwnProperty("url") &&
    t.type &&
    t.url
  ) {
    var n = e.cloneNode(!0);
    return (
      t.hasOwnProperty("dimension") &&
        t.dimension &&
        n.setAttribute("media", "(max-width: " + t.dimension + "px)"),
      n.setAttribute("type", t.type),
      n.setAttribute("data-srcset", t.url),
      n
    );
  }
  return !1;
}
if (!window.send_ajax)
  function send_ajax(t, e, n, i, a, r, o) {
    if (!n) return !1;
    if (o) l = new FormData(o);
    else if ("GET" == t || "get" == t) {
      var s = [];
      for (key in n) s.push(key + "=" + n[key]);
      e = e + "?" + (s = s.join("&"));
    } else {
      var l = new FormData();
      for (key in n)
        l.hasOwnProperty("set") ? l.set(key, n[key]) : l.append(key, n[key]);
    }
    var c = new XMLHttpRequest();
    c.open(t, e),
      "POST" == t || "post" == t ? c.send(l) : c.send(),
      (c.onload = function () {
        var t = c.responseText;
        200 <= c.status && c.status < 400
          ? t && a && (i ? a(t, i) : a(t))
          : r && (i ? r(t, i) : r(t));
      }),
      (c.onerror = function () {
        r && (i ? r({}, i) : r({}));
      });
  }
var tns = (function () {
    Object.keys ||
      (Object.keys = function (t) {
        var e = [];
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
        return e;
      }),
      "remove" in Element.prototype ||
        (Element.prototype.remove = function () {
          this.parentNode && this.parentNode.removeChild(this);
        });
    var t = window,
      Mi =
        t.requestAnimationFrame ||
        t.webkitRequestAnimationFrame ||
        t.mozRequestAnimationFrame ||
        t.msRequestAnimationFrame ||
        function (t) {
          return setTimeout(t, 16);
        },
      e = window,
      Ii =
        e.cancelAnimationFrame ||
        e.mozCancelAnimationFrame ||
        function (t) {
          clearTimeout(t);
        };

    function Oi(t) {
      for (var e, n, i, a = t || {}, r = 1, o = arguments.length; r < o; r++)
        if (null !== (e = arguments[r]))
          for (n in e) a !== (i = e[n]) && void 0 !== i && (a[n] = i);
      return a;
    }

    function Pi(t) {
      return 0 <= ["true", "false"].indexOf(t) ? JSON.parse(t) : t;
    }

    function Bi(t, e, n, i) {
      if (i)
        try {
          t.setItem(e, n);
        } catch (t) {}
      return n;
    }

    function zi() {
      var t = document,
        e = t.body;
      return e || ((e = t.createElement("body")).fake = !0), e;
    }
    var n = document.documentElement;

    function Ni(t) {
      var e = "";
      return (
        t.fake &&
          ((e = n.style.overflow),
          (t.style.background = ""),
          (t.style.overflow = n.style.overflow = "hidden"),
          n.appendChild(t)),
        e
      );
    }

    function ji(t, e) {
      t.fake && (t.remove(), (n.style.overflow = e), n.offsetHeight);
    }

    function Hi(t, e, n, i) {
      "insertRule" in t
        ? t.insertRule(e + "{" + n + "}", i)
        : t.addRule(e, n, i);
    }

    function qi(t) {
      return ("insertRule" in t ? t.cssRules : t.rules).length;
    }

    function Di(t, e, n) {
      for (var i = 0, a = t.length; i < a; i++) e.call(n, t[i], i);
    }
    var i = "classList" in document.createElement("_"),
      Ri = i
        ? function (t, e) {
            return t.classList.contains(e);
          }
        : function (t, e) {
            return 0 <= t.className.indexOf(e);
          },
      Fi = i
        ? function (t, e) {
            Ri(t, e) || t.classList.add(e);
          }
        : function (t, e) {
            Ri(t, e) || (t.className += " " + e);
          },
      Wi = i
        ? function (t, e) {
            Ri(t, e) && t.classList.remove(e);
          }
        : function (t, e) {
            Ri(t, e) && (t.className = t.className.replace(e, ""));
          };

    function Ui(t, e) {
      return t.hasAttribute(e);
    }

    function Gi(t, e) {
      return t.getAttribute(e);
    }

    function r(t) {
      return void 0 !== t.item;
    }

    function Qi(t, e) {
      if (
        ((t = r(t) || t instanceof Array ? t : [t]),
        "[object Object]" === Object.prototype.toString.call(e))
      )
        for (var n = t.length; n--; )
          for (var i in e) t[n].setAttribute(i, e[i]);
    }

    function Vi(t, e) {
      t = r(t) || t instanceof Array ? t : [t];
      for (
        var n = (e = e instanceof Array ? e : [e]).length, i = t.length;
        i--;

      )
        for (var a = n; a--; ) t[i].removeAttribute(e[a]);
    }

    function Yi(t) {
      for (var e = [], n = 0, i = t.length; n < i; n++) e.push(t[n]);
      return e;
    }

    function Ji(t, e) {
      "none" !== t.style.display && (t.style.display = "none");
    }

    function Xi(t, e) {
      "none" === t.style.display && (t.style.display = "");
    }

    function Ki(t) {
      return "none" !== window.getComputedStyle(t).display;
    }

    function $i(e) {
      if ("string" == typeof e) {
        var n = [e],
          i = e.charAt(0).toUpperCase() + e.substr(1);
        ["Webkit", "Moz", "ms", "O"].forEach(function (t) {
          ("ms" === t && "transform" !== e) || n.push(t + i);
        }),
          (e = n);
      }
      for (
        var t = document.createElement("fakeelement"), a = (e.length, 0);
        a < e.length;
        a++
      ) {
        var r = e[a];
        if (void 0 !== t.style[r]) return r;
      }
      return !1;
    }

    function Zi(t, e) {
      var n = !1;
      return (
        /^Webkit/.test(t)
          ? (n = "webkit" + e + "End")
          : /^O/.test(t)
          ? (n = "o" + e + "End")
          : t && (n = e.toLowerCase() + "end"),
        n
      );
    }
    var a = !1;
    try {
      var o = Object.defineProperty({}, "passive", {
        get: function () {
          a = !0;
        },
      });
      window.addEventListener("test", null, o);
    } catch (t) {}
    var s = !!a && {
      passive: !0,
    };

    function ta(t, e, n) {
      for (var i in e) {
        var a = 0 <= ["touchstart", "touchmove"].indexOf(i) && !n && s;
        t.addEventListener(i, e[i], a);
      }
    }

    function ea(t, e) {
      for (var n in e) {
        var i = 0 <= ["touchstart", "touchmove"].indexOf(n) && s;
        t.removeEventListener(n, e[n], i);
      }
    }

    function na() {
      return {
        topics: {},
        on: function (t, e) {
          (this.topics[t] = this.topics[t] || []), this.topics[t].push(e);
        },
        off: function (t, e) {
          if (this.topics[t])
            for (var n = 0; n < this.topics[t].length; n++)
              if (this.topics[t][n] === e) {
                this.topics[t].splice(n, 1);
                break;
              }
        },
        emit: function (e, n) {
          (n.type = e),
            this.topics[e] &&
              this.topics[e].forEach(function (t) {
                t(n, e);
              });
        },
      };
    }
    var ia = function (I) {
      I = Oi(
        {
          container: ".slider",
          mode: "carousel",
          axis: "horizontal",
          items: 1,
          gutter: 0,
          edgePadding: 0,
          fixedWidth: !1,
          autoWidth: !1,
          viewportMax: !1,
          slideBy: 1,
          center: !1,
          controls: !0,
          controlsPosition: "top",
          controlsText: ["prev", "next"],
          controlsContainer: !1,
          prevButton: !1,
          nextButton: !1,
          nav: !0,
          navPosition: "top",
          navContainer: !1,
          navAsThumbnails: !1,
          arrowKeys: !1,
          speed: 300,
          autoplay: !1,
          autoplayPosition: "top",
          autoplayTimeout: 5e3,
          autoplayDirection: "forward",
          autoplayText: ["start", "stop"],
          autoplayHoverPause: !1,
          autoplayButton: !1,
          autoplayButtonOutput: !0,
          autoplayResetOnVisibility: !0,
          animateIn: "tns-fadeIn",
          animateOut: "tns-fadeOut",
          animateNormal: "tns-normal",
          animateDelay: !1,
          loop: !0,
          rewind: !1,
          autoHeight: !1,
          responsive: !1,
          lazyload: !1,
          lazyloadSelector: ".tns-lazy-img",
          touch: !0,
          mouseDrag: !1,
          swipeAngle: 15,
          nested: !1,
          preventActionWhenRunning: !1,
          preventScrollOnTouch: !1,
          freezable: !0,
          onInit: !1,
          useLocalStorage: !0,
        },
        I || {}
      );
      var O = document,
        m = window,
        a = {
          ENTER: 13,
          SPACE: 32,
          LEFT: 37,
          RIGHT: 39,
        },
        e = {},
        t = I.useLocalStorage;
      if (t) {
        var n = navigator.userAgent,
          i = new Date();
        try {
          (e = m.localStorage)
            ? (e.setItem(i, i), (t = e.getItem(i) == i), e.removeItem(i))
            : (t = !1),
            t || (e = {});
        } catch (n) {
          t = !1;
        }
        t &&
          (e.tnsApp &&
            e.tnsApp !== n &&
            [
              "tC",
              "tPL",
              "tMQ",
              "tTf",
              "t3D",
              "tTDu",
              "tTDe",
              "tADu",
              "tADe",
              "tTE",
              "tAE",
            ].forEach(function (t) {
              e.removeItem(t);
            }),
          (localStorage.tnsApp = n));
      }
      var r,
        o,
        s,
        l,
        c,
        u,
        d,
        v = e.tC
          ? Pi(e.tC)
          : Bi(
              e,
              "tC",
              (function () {
                var t = document,
                  e = zi(),
                  n = Ni(e),
                  i = t.createElement("div"),
                  a = !1;
                e.appendChild(i);
                try {
                  for (
                    var r,
                      o = "(10px * 10)",
                      s = ["calc" + o, "-moz-calc" + o, "-webkit-calc" + o],
                      l = 0;
                    l < 3;
                    l++
                  )
                    if (
                      ((r = s[l]), (i.style.width = r), 100 === i.offsetWidth)
                    ) {
                      a = r.replace(o, "");
                      break;
                    }
                } catch (t) {}
                return e.fake ? ji(e, n) : i.remove(), a;
              })(),
              t
            ),
        b = e.tPL
          ? Pi(e.tPL)
          : Bi(
              e,
              "tPL",
              (function () {
                var t,
                  e = document,
                  n = zi(),
                  i = Ni(n),
                  a = e.createElement("div"),
                  r = e.createElement("div"),
                  o = "";
                (a.className = "tns-t-subp2"), (r.className = "tns-t-ct");
                for (var s = 0; s < 70; s++) o += "<div></div>";
                return (
                  (r.innerHTML = o),
                  a.appendChild(r),
                  n.appendChild(a),
                  (t =
                    Math.abs(
                      a.getBoundingClientRect().left -
                        r.children[67].getBoundingClientRect().left
                    ) < 2),
                  n.fake ? ji(n, i) : a.remove(),
                  t
                );
              })(),
              t
            ),
        P = e.tMQ
          ? Pi(e.tMQ)
          : Bi(
              e,
              "tMQ",
              ((o = document),
              (l = Ni((s = zi()))),
              (c = o.createElement("div")),
              (d =
                "@media all and (min-width:1px){.tns-mq-test{position:absolute}}"),
              ((u = o.createElement("style")).type = "text/css"),
              (c.className = "tns-mq-test"),
              s.appendChild(u),
              s.appendChild(c),
              u.styleSheet
                ? (u.styleSheet.cssText = d)
                : u.appendChild(o.createTextNode(d)),
              (r = window.getComputedStyle
                ? window.getComputedStyle(c).position
                : c.currentStyle.position),
              s.fake ? ji(s, l) : c.remove(),
              "absolute" === r),
              t
            ),
        f = e.tTf ? Pi(e.tTf) : Bi(e, "tTf", $i("transform"), t),
        p = e.t3D
          ? Pi(e.t3D)
          : Bi(
              e,
              "t3D",
              (function (t) {
                if (!t) return !1;
                if (!window.getComputedStyle) return !1;
                var e,
                  n = document,
                  i = zi(),
                  a = Ni(i),
                  r = n.createElement("p"),
                  o =
                    9 < t.length
                      ? "-" + t.slice(0, -9).toLowerCase() + "-"
                      : "";
                return (
                  (o += "transform"),
                  i.insertBefore(r, null),
                  (r.style[t] = "translate3d(1px,1px,1px)"),
                  (e = window.getComputedStyle(r).getPropertyValue(o)),
                  i.fake ? ji(i, a) : r.remove(),
                  void 0 !== e && 0 < e.length && "none" !== e
                );
              })(f),
              t
            ),
        w = e.tTDu ? Pi(e.tTDu) : Bi(e, "tTDu", $i("transitionDuration"), t),
        h = e.tTDe ? Pi(e.tTDe) : Bi(e, "tTDe", $i("transitionDelay"), t),
        y = e.tADu ? Pi(e.tADu) : Bi(e, "tADu", $i("animationDuration"), t),
        g = e.tADe ? Pi(e.tADe) : Bi(e, "tADe", $i("animationDelay"), t),
        A = e.tTE ? Pi(e.tTE) : Bi(e, "tTE", Zi(w, "Transition"), t),
        x = e.tAE ? Pi(e.tAE) : Bi(e, "tAE", Zi(y, "Animation"), t),
        L = m.console && "function" == typeof m.console.warn,
        E = [
          "container",
          "controlsContainer",
          "prevButton",
          "nextButton",
          "navContainer",
          "autoplayButton",
        ],
        k = {};
      if (
        (E.forEach(function (t) {
          if ("string" == typeof I[t]) {
            var e = I[t],
              n = O.querySelector(e);
            if (((k[t] = e), !n || !n.nodeName))
              return void (L && console.warn("Can't find", I[t]));
            I[t] = n;
          }
        }),
        !(I.container.children.length < 1))
      ) {
        var B = I.responsive,
          z = I.nested,
          N = "carousel" === I.mode;
        if (B) {
          0 in B && ((I = Oi(I, B[0])), delete B[0]);
          var C = {};
          for (var _ in B) {
            var T = B[_];
            (T =
              "number" == typeof T
                ? {
                    items: T,
                  }
                : T),
              (C[_] = T);
          }
          (B = C), (C = null);
        }
        if (
          (N ||
            (function t(e) {
              for (var n in e)
                N ||
                  ("slideBy" === n && (e[n] = "page"),
                  "edgePadding" === n && (e[n] = !1),
                  "autoHeight" === n && (e[n] = !1)),
                  "responsive" === n && t(e[n]);
            })(I),
          !N)
        ) {
          (I.axis = "horizontal"), (I.slideBy = "page"), (I.edgePadding = !1);
          var j = I.animateIn,
            H = I.animateOut,
            S = I.animateDelay,
            q = I.animateNormal;
        }
        var M,
          D,
          R = "horizontal" === I.axis,
          F = O.createElement("div"),
          W = O.createElement("div"),
          U = I.container,
          G = U.parentNode,
          Q = U.outerHTML,
          V = U.children,
          Y = V.length,
          J = ln(),
          X = !1;
        B && Tn(), N && (U.className += " tns-vpfix");
        var K,
          $,
          Z,
          tt,
          et,
          nt,
          it,
          at = I.autoWidth,
          rt = fn("fixedWidth"),
          ot = fn("edgePadding"),
          st = fn("gutter"),
          lt = un(),
          ct = fn("center"),
          ut = at ? 1 : Math.floor(fn("items")),
          dt = fn("slideBy"),
          ft = I.viewportMax || I.fixedWidthViewportWidth,
          pt = fn("arrowKeys"),
          ht = fn("speed"),
          gt = I.rewind,
          mt = !gt && I.loop,
          vt = fn("autoHeight"),
          bt = fn("controls"),
          wt = fn("controlsText"),
          yt = fn("nav"),
          At = fn("touch"),
          xt = fn("mouseDrag"),
          Lt = fn("autoplay"),
          Et = fn("autoplayTimeout"),
          kt = fn("autoplayText"),
          Ct = fn("autoplayHoverPause"),
          _t = fn("autoplayResetOnVisibility"),
          Tt =
            ((it = document.createElement("style")),
            document.querySelector("head").appendChild(it),
            it.sheet ? it.sheet : it.styleSheet),
          St = I.lazyload,
          Mt = (I.lazyloadSelector, []),
          It = mt
            ? ((et = (function () {
                if (at || (rt && !ft)) return Y - 1;
                var t = rt ? "fixedWidth" : "items",
                  e = [];
                if (((rt || I[t] < Y) && e.push(I[t]), B))
                  for (var n in B) {
                    var i = B[n][t];
                    i && (rt || i < Y) && e.push(i);
                  }
                return (
                  e.length || e.push(0),
                  Math.ceil(
                    rt ? ft / Math.min.apply(null, e) : Math.max.apply(null, e)
                  )
                );
              })()),
              (nt = N ? Math.ceil((5 * et - Y) / 2) : 4 * et - Y),
              (nt = Math.max(et, nt)),
              dn("edgePadding") ? nt + 1 : nt)
            : 0,
          Ot = N ? Y + 2 * It : Y + It,
          Pt = !((!rt && !at) || mt),
          Bt = rt ? ei() : null,
          zt = !N || !mt,
          Nt = R ? "left" : "top",
          jt = "",
          Ht = "",
          qt = rt
            ? function () {
                return ct && !mt ? Y - 1 : Math.ceil(-Bt / (rt + st));
              }
            : at
            ? function () {
                for (var t = Ot; t--; ) if (K[t] >= -Bt) return t;
              }
            : function () {
                return ct && N && !mt
                  ? Y - 1
                  : mt || N
                  ? Math.max(0, Ot - Math.ceil(ut))
                  : Ot - 1;
              },
          Dt = rn(fn("startIndex")),
          Rt = Dt,
          Ft = (an(), 0),
          Wt = at ? null : qt(),
          Ut = I.preventActionWhenRunning,
          Gt = I.swipeAngle,
          Qt = !Gt || "?",
          Vt = !1,
          Yt = I.onInit,
          Jt = new na(),
          Xt = " tns-slider tns-" + I.mode,
          Kt =
            U.id ||
            ((tt = window.tnsId),
            (window.tnsId = tt ? tt + 1 : 1),
            "tns" + window.tnsId),
          $t = fn("disable"),
          Zt = !1,
          te = I.freezable,
          ee = !(!te || at) && _n(),
          ne = !1,
          ie = {
            click: ui,
            keydown: function (t) {
              t = bi(t);
              var e = [a.LEFT, a.RIGHT].indexOf(t.keyCode);
              0 <= e &&
                (0 === e ? Ee.disabled || ui(t, -1) : ke.disabled || ui(t, 1));
            },
          },
          ae = {
            click: function (t) {
              if (Vt) {
                if (Ut) return;
                li();
              }
              for (var e = wi((t = bi(t))); e !== Se && !Ui(e, "data-nav"); )
                e = e.parentNode;
              if (Ui(e, "data-nav")) {
                var n = (Pe = Number(Gi(e, "data-nav"))),
                  i = rt || at ? (n * Y) / Ie : n * ut;
                ci(fe ? n : Math.min(Math.ceil(i), Y - 1), t),
                  Be === n && (De && gi(), (Pe = -1));
              }
            },
            keydown: function (t) {
              t = bi(t);
              var e = O.activeElement;
              if (Ui(e, "data-nav")) {
                var n = [a.LEFT, a.RIGHT, a.ENTER, a.SPACE].indexOf(t.keyCode),
                  i = Number(Gi(e, "data-nav"));
                0 <= n &&
                  (0 === n
                    ? 0 < i && vi(Te[i - 1])
                    : 1 === n
                    ? i < Ie - 1 && vi(Te[i + 1])
                    : ci((Pe = i), t));
              }
            },
          },
          re = {
            mouseover: function () {
              De && (fi(), (Re = !0));
            },
            mouseout: function () {
              Re && (di(), (Re = !1));
            },
          },
          oe = {
            visibilitychange: function () {
              O.hidden ? De && (fi(), (We = !0)) : We && (di(), (We = !1));
            },
          },
          se = {
            keydown: function (t) {
              t = bi(t);
              var e = [a.LEFT, a.RIGHT].indexOf(t.keyCode);
              0 <= e && ui(t, 0 === e ? -1 : 1);
            },
          },
          le = {
            touchstart: Li,
            touchmove: Ei,
            touchend: ki,
            touchcancel: ki,
          },
          ce = {
            mousedown: Li,
            mousemove: Ei,
            mouseup: ki,
            mouseleave: ki,
          },
          ue = dn("controls"),
          de = dn("nav"),
          fe = !!at || I.navAsThumbnails,
          pe = dn("autoplay"),
          he = dn("touch"),
          ge = dn("mouseDrag"),
          me = "tns-slide-active",
          ve = "tns-complete",
          be = {
            load: function (t) {
              jn(wi(t));
            },
            error: function (t) {
              var e;
              (e = wi(t)), Fi(e, "failed"), Hn(e);
            },
          },
          we = "force" === I.preventScrollOnTouch;
        if (ue)
          var ye,
            Ae,
            xe = I.controlsContainer,
            Le = I.controlsContainer ? I.controlsContainer.outerHTML : "",
            Ee = I.prevButton,
            ke = I.nextButton,
            Ce = I.prevButton ? I.prevButton.outerHTML : "",
            _e = I.nextButton ? I.nextButton.outerHTML : "";
        if (de)
          var Te,
            Se = I.navContainer,
            Me = I.navContainer ? I.navContainer.outerHTML : "",
            Ie = at ? Y : _i(),
            Oe = 0,
            Pe = -1,
            Be = sn(),
            ze = Be,
            Ne = "tns-nav-active",
            je = "Carousel Page ",
            He = " (Current Slide)";
        if (pe)
          var qe,
            De,
            Re,
            Fe,
            We,
            Ue = "forward" === I.autoplayDirection ? 1 : -1,
            Ge = I.autoplayButton,
            Qe = I.autoplayButton ? I.autoplayButton.outerHTML : "",
            Ve = ["<span class='tns-visually-hidden'>", " animation</span>"];
        if (he || ge)
          var Ye,
            Je,
            Xe = {},
            Ke = {},
            $e = !1,
            Ze = R
              ? function (t, e) {
                  return t.x - e.x;
                }
              : function (t, e) {
                  return t.y - e.y;
                };
        at || nn($t || ee),
          f &&
            ((Nt = f),
            (jt = "translate"),
            (Ht = p
              ? ((jt += R ? "3d(" : "3d(0px, "), R ? ", 0px, 0px)" : ", 0px)")
              : ((jt += R ? "X(" : "Y("), ")"))),
          N && (U.className = U.className.replace("tns-vpfix", "")),
          (function () {
            dn("gutter"),
              (F.className = "tns-outer"),
              (W.className = "tns-inner"),
              (F.id = Kt + "-ow"),
              (W.id = Kt + "-iw"),
              "" === U.id && (U.id = Kt),
              (Xt += b || at ? " tns-subpixel" : " tns-no-subpixel"),
              (Xt += v ? " tns-calc" : " tns-no-calc"),
              at && (Xt += " tns-autowidth"),
              (Xt += " tns-" + I.axis),
              (U.className += Xt),
              N
                ? (((M = O.createElement("div")).id = Kt + "-mw"),
                  (M.className = "tns-ovh"),
                  F.appendChild(M),
                  M.appendChild(W))
                : F.appendChild(W),
              vt && ((M || W).className += " tns-ah");
            if (
              (G.insertBefore(F, U),
              W.appendChild(U),
              Di(V, function (t, e) {
                Fi(t, "tns-item"),
                  t.id || (t.id = Kt + "-item" + e),
                  !N && q && Fi(t, q),
                  Qi(t, {
                    "aria-hidden": "true",
                    tabindex: "-1",
                  });
              }),
              It)
            ) {
              for (
                var t = O.createDocumentFragment(),
                  e = O.createDocumentFragment(),
                  n = It;
                n--;

              ) {
                var i = n % Y,
                  a = V[i].cloneNode(!0);
                if ((Vi(a, "id"), e.insertBefore(a, e.firstChild), N)) {
                  var r = V[Y - 1 - i].cloneNode(!0);
                  Vi(r, "id"), t.appendChild(r);
                }
              }
              U.insertBefore(t, U.firstChild),
                U.appendChild(e),
                (V = U.children);
            }
          })(),
          (function () {
            if (!N)
              for (var t = Dt, e = Dt + Math.min(Y, ut); t < e; t++) {
                var n = V[t];
                (n.style.left = (100 * (t - Dt)) / ut + "%"),
                  Fi(n, j),
                  Wi(n, q);
              }
            if (
              (R &&
                (b || at
                  ? (Hi(
                      Tt,
                      "#" + Kt + " > .tns-item",
                      "font-size:" + m.getComputedStyle(V[0]).fontSize + ";",
                      qi(Tt)
                    ),
                    Hi(Tt, "#" + Kt, "font-size:0;", qi(Tt)))
                  : N &&
                    Di(V, function (t, e) {
                      var n;
                      t.style.marginLeft =
                        ((n = e),
                        v
                          ? v + "(" + 100 * n + "% / " + Ot + ")"
                          : (100 * n) / Ot + "%");
                    })),
              P)
            ) {
              if (w) {
                var i = M && I.autoHeight ? bn(I.speed) : "";
                Hi(Tt, "#" + Kt + "-mw", i, qi(Tt));
              }
              (i = pn(
                I.edgePadding,
                I.gutter,
                I.fixedWidth,
                I.speed,
                I.autoHeight
              )),
                Hi(Tt, "#" + Kt + "-iw", i, qi(Tt)),
                N &&
                  ((i =
                    R && !at
                      ? "width:" + hn(I.fixedWidth, I.gutter, I.items) + ";"
                      : ""),
                  w && (i += bn(ht)),
                  Hi(Tt, "#" + Kt, i, qi(Tt))),
                (i = R && !at ? gn(I.fixedWidth, I.gutter, I.items) : ""),
                I.gutter && (i += mn(I.gutter)),
                N || (w && (i += bn(ht)), y && (i += wn(ht))),
                i && Hi(Tt, "#" + Kt + " > .tns-item", i, qi(Tt));
            } else {
              Wn(),
                (W.style.cssText = pn(ot, st, rt, vt)),
                N && R && !at && (U.style.width = hn(rt, st, ut));
              i = R && !at ? gn(rt, st, ut) : "";
              st && (i += mn(st)),
                i && Hi(Tt, "#" + Kt + " > .tns-item", i, qi(Tt));
            }
            if (B && P)
              for (var a in B) {
                a = parseInt(a);
                var r = B[a],
                  o = ((i = ""), ""),
                  s = "",
                  l = "",
                  c = "",
                  u = at ? null : fn("items", a),
                  d = fn("fixedWidth", a),
                  f = fn("speed", a),
                  p = fn("edgePadding", a),
                  h = fn("autoHeight", a),
                  g = fn("gutter", a);
                w &&
                  M &&
                  fn("autoHeight", a) &&
                  "speed" in r &&
                  (o = "#" + Kt + "-mw{" + bn(f) + "}"),
                  ("edgePadding" in r || "gutter" in r) &&
                    (s = "#" + Kt + "-iw{" + pn(p, g, d, f, h) + "}"),
                  N &&
                    R &&
                    !at &&
                    ("fixedWidth" in r ||
                      "items" in r ||
                      (rt && "gutter" in r)) &&
                    (l = "width:" + hn(d, g, u) + ";"),
                  w && "speed" in r && (l += bn(f)),
                  (l = l && "#" + Kt + "{" + l + "}"),
                  ("fixedWidth" in r ||
                    (rt && "gutter" in r) ||
                    (!N && "items" in r)) &&
                    (c += gn(d, g, u)),
                  "gutter" in r && (c += mn(g)),
                  !N && "speed" in r && (w && (c += bn(f)), y && (c += wn(f))),
                  (i =
                    o +
                    s +
                    l +
                    (c = c && "#" + Kt + " > .tns-item{" + c + "}")) &&
                    Tt.insertRule(
                      "@media (min-width: " + a / 16 + "em) {" + i + "}",
                      Tt.cssRules.length
                    );
              }
          })(),
          yn();
        var tn = mt
            ? N
              ? function () {
                  var t = Ft,
                    e = Wt;
                  (t += dt),
                    (e -= dt),
                    ot
                      ? ((t += 1), (e -= 1))
                      : rt && (lt + st) % (rt + st) && (e -= 1),
                    It && (e < Dt ? (Dt -= Y) : Dt < t && (Dt += Y));
                }
              : function () {
                  if (Wt < Dt) for (; Ft + Y <= Dt; ) Dt -= Y;
                  else if (Dt < Ft) for (; Dt <= Wt - Y; ) Dt += Y;
                }
            : function () {
                Dt = Math.max(Ft, Math.min(Wt, Dt));
              },
          en = N
            ? function () {
                var e, n, i, a, t, r, o, s, l, c, u;
                Zn(U, ""),
                  w || !ht
                    ? (ai(), (ht && Ki(U)) || li())
                    : ((e = U),
                      (n = Nt),
                      (i = jt),
                      (a = Ht),
                      (t = ni()),
                      (r = ht),
                      (o = li),
                      (s = Math.min(r, 10)),
                      (l = 0 <= t.indexOf("%") ? "%" : "px"),
                      (t = t.replace(l, "")),
                      (c = Number(
                        e.style[n].replace(i, "").replace(a, "").replace(l, "")
                      )),
                      (u = ((t - c) / r) * s),
                      setTimeout(function t() {
                        (r -= s),
                          (c += u),
                          (e.style[n] = i + c + l + a),
                          0 < r ? setTimeout(t, s) : o();
                      }, s)),
                  R || Ci();
              }
            : function () {
                Mt = [];
                var t = {};
                (t[A] = t[x] = li),
                  ea(V[Rt], t),
                  ta(V[Dt], t),
                  ri(Rt, j, H, !0),
                  ri(Dt, q, j),
                  (A && x && ht && Ki(U)) || li();
              };
        return {
          version: "2.9.2",
          getInfo: Si,
          events: Jt,
          goTo: ci,
          play: function () {
            Lt && !De && (hi(), (Fe = !1));
          },
          pause: function () {
            De && (gi(), (Fe = !0));
          },
          isOn: X,
          updateSliderHeight: Gn,
          refresh: yn,
          destroy: function () {
            if (
              ((Tt.disabled = !0),
              Tt.ownerNode && Tt.ownerNode.remove(),
              ea(m, {
                resize: kn,
              }),
              pt && ea(O, se),
              xe && ea(xe, ie),
              Se && ea(Se, ae),
              ea(U, re),
              ea(U, oe),
              Ge &&
                ea(Ge, {
                  click: mi,
                }),
              Lt && clearInterval(qe),
              N && A)
            ) {
              var t = {};
              (t[A] = li), ea(U, t);
            }
            At && ea(U, le), xt && ea(U, ce);
            var r = [Q, Le, Ce, _e, Me, Qe];
            for (var e in (E.forEach(function (t, e) {
              var n = "container" === t ? F : I[t];
              if ("object" == typeof n) {
                var i = !!n.previousElementSibling && n.previousElementSibling,
                  a = n.parentNode;
                (n.outerHTML = r[e]),
                  (I[t] = i ? i.nextElementSibling : a.firstElementChild);
              }
            }),
            (E =
              j =
              H =
              S =
              q =
              R =
              F =
              W =
              U =
              G =
              Q =
              V =
              Y =
              D =
              J =
              at =
              rt =
              ot =
              st =
              lt =
              ut =
              dt =
              ft =
              pt =
              ht =
              gt =
              mt =
              vt =
              Tt =
              St =
              K =
              Mt =
              It =
              Ot =
              Pt =
              Bt =
              zt =
              Nt =
              jt =
              Ht =
              qt =
              Dt =
              Rt =
              Ft =
              Wt =
              Gt =
              Qt =
              Vt =
              Yt =
              Jt =
              Xt =
              Kt =
              $t =
              Zt =
              te =
              ee =
              ne =
              ie =
              ae =
              re =
              oe =
              se =
              le =
              ce =
              ue =
              de =
              fe =
              pe =
              he =
              ge =
              me =
              ve =
              be =
              $ =
              bt =
              wt =
              xe =
              Le =
              Ee =
              ke =
              ye =
              Ae =
              yt =
              Se =
              Me =
              Te =
              Ie =
              Oe =
              Pe =
              Be =
              ze =
              Ne =
              je =
              He =
              Lt =
              Et =
              Ue =
              kt =
              Ct =
              Ge =
              Qe =
              _t =
              Ve =
              qe =
              De =
              Re =
              Fe =
              We =
              Xe =
              Ke =
              Ye =
              $e =
              Je =
              Ze =
              At =
              xt =
                null),
            this))
              "rebuild" !== e && (this[e] = null);
            X = !1;
          },
          rebuild: function () {
            return ia(Oi(I, k));
          },
        };
      }

      function nn(t) {
        t && (bt = yt = At = xt = pt = Lt = Ct = _t = !1);
      }

      function an() {
        for (var t = N ? Dt - It : Dt; t < 0; ) t += Y;
        return (t % Y) + 1;
      }

      function rn(t) {
        return (
          (t = t ? Math.max(0, Math.min(mt ? Y - 1 : Y - ut, t)) : 0),
          N ? t + It : t
        );
      }

      function on(t) {
        for (null == t && (t = Dt), N && (t -= It); t < 0; ) t += Y;
        return Math.floor(t % Y);
      }

      function sn() {
        var t,
          e = on();
        return (
          (t = fe
            ? e
            : rt || at
            ? Math.ceil(((e + 1) * Ie) / Y - 1)
            : Math.floor(e / ut)),
          !mt && N && Dt === Wt && (t = Ie - 1),
          t
        );
      }

      function ln() {
        return (
          m.innerWidth || O.documentElement.clientWidth || O.body.clientWidth
        );
      }

      function cn(t) {
        return "top" === t ? "afterbegin" : "beforeend";
      }

      function un() {
        var t = ot ? 2 * ot - st : 0;
        return (
          (function t(e) {
            var n,
              i,
              a = O.createElement("div");
            return (
              e.appendChild(a),
              (i = (n = a.getBoundingClientRect()).right - n.left),
              a.remove(),
              i || t(e.parentNode)
            );
          })(G) - t
        );
      }

      function dn(t) {
        if (I[t]) return !0;
        if (B) for (var e in B) if (B[e][t]) return !0;
        return !1;
      }

      function fn(t, e) {
        if ((null == e && (e = J), "items" === t && rt))
          return Math.floor((lt + st) / (rt + st)) || 1;
        var n = I[t];
        if (B) for (var i in B) e >= parseInt(i) && t in B[i] && (n = B[i][t]);
        return (
          "slideBy" === t && "page" === n && (n = fn("items")),
          N || ("slideBy" !== t && "items" !== t) || (n = Math.floor(n)),
          n
        );
      }

      function pn(t, e, n, i, a) {
        var r = "";
        if (void 0 !== t) {
          var o = t;
          e && (o -= e),
            (r = R
              ? "margin: 0 " + o + "px 0 " + t + "px;"
              : "margin: " + t + "px 0 " + o + "px 0;");
        } else if (e && !n) {
          var s = "-" + e + "px";
          r = "margin: 0 " + (R ? s + " 0 0" : "0 " + s + " 0") + ";";
        }
        return !N && a && w && i && (r += bn(i)), r;
      }

      function hn(t, e, n) {
        return t
          ? (t + e) * Ot + "px"
          : v
          ? v + "(" + 100 * Ot + "% / " + n + ")"
          : (100 * Ot) / n + "%";
      }

      function gn(t, e, n) {
        var i;
        if (t) i = t + e + "px";
        else {
          N || (n = Math.floor(n));
          var a = N ? Ot : n;
          i = v ? v + "(100% / " + a + ")" : 100 / a + "%";
        }
        return (i = "width:" + i), "inner" !== z ? i + ";" : i + " !important;";
      }

      function mn(t) {
        var e = "";
        return (
          !1 !== t &&
            (e =
              (R ? "padding-" : "margin-") +
              (R ? "right" : "bottom") +
              ": " +
              t +
              "px;"),
          e
        );
      }

      function vn(t, e) {
        var n = t.substring(0, t.length - e).toLowerCase();
        return (n = n && "-" + n + "-");
      }

      function bn(t) {
        return vn(w, 18) + "transition-duration:" + t / 1e3 + "s;";
      }

      function wn(t) {
        return vn(y, 17) + "animation-duration:" + t / 1e3 + "s;";
      }

      function yn() {
        if (dn("autoHeight") || at || !R) {
          var t = U.querySelectorAll("img");
          Di(t, function (t) {
            var e = t.src;
            e && e.indexOf("data:image") < 0
              ? (ta(t, be), (t.src = ""), (t.src = e), Fi(t, "loading"))
              : St || jn(t);
          }),
            Mi(function () {
              Rn(Yi(t), function () {
                $ = !0;
              });
            }),
            !at && R && (t = qn(Dt, Math.min(Dt + ut - 1, Ot - 1))),
            St
              ? An()
              : Mi(function () {
                  Rn(Yi(t), An);
                });
        } else N && ii(), Ln(), En();
      }

      function An() {
        if (at) {
          var e = mt ? Dt : Y - 1;
          !(function t() {
            V[e - 1].getBoundingClientRect().right.toFixed(2) ===
            V[e].getBoundingClientRect().left.toFixed(2)
              ? xn()
              : setTimeout(function () {
                  t();
                }, 16);
          })();
        } else xn();
      }

      function xn() {
        (R && !at) ||
          (Qn(),
          at
            ? ((Bt = ei()), te && (ee = _n()), (Wt = qt()), nn($t || ee))
            : Ci()),
          N && ii(),
          Ln(),
          En();
      }

      function Ln() {
        if (
          (Vn(),
          F.insertAdjacentHTML(
            "afterbegin",
            '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' +
              Bn() +
              "</span>  of " +
              Y +
              "</div>"
          ),
          (Z = F.querySelector(".tns-liveregion .current")),
          pe)
        ) {
          var t = Lt ? "stop" : "start";
          Ge
            ? Qi(Ge, {
                "data-action": t,
              })
            : I.autoplayButtonOutput &&
              (F.insertAdjacentHTML(
                cn(I.autoplayPosition),
                '<button data-action="' +
                  t +
                  '">' +
                  Ve[0] +
                  t +
                  Ve[1] +
                  kt[0] +
                  "</button>"
              ),
              (Ge = F.querySelector("[data-action]"))),
            Ge &&
              ta(Ge, {
                click: mi,
              }),
            Lt && (hi(), Ct && ta(U, re), _t && ta(U, oe));
        }
        if (de) {
          if (Se)
            Qi(Se, {
              "aria-label": "Carousel Pagination",
            }),
              Di((Te = Se.children), function (t, e) {
                Qi(t, {
                  "data-nav": e,
                  tabindex: "-1",
                  "aria-label": je + (e + 1),
                  "aria-controls": Kt,
                });
              });
          else {
            for (
              var e = "", n = fe ? "" : 'style="display:none"', i = 0;
              i < Y;
              i++
            )
              e +=
                '<button data-nav="' +
                i +
                '" tabindex="-1" aria-controls="' +
                Kt +
                '" ' +
                n +
                ' aria-label="' +
                je +
                (i + 1) +
                '"></button>';
            (e =
              '<div class="tns-nav" aria-label="Carousel Pagination">' +
              e +
              "</div>"),
              F.insertAdjacentHTML(cn(I.navPosition), e),
              (Se = F.querySelector(".tns-nav")),
              (Te = Se.children);
          }
          if ((Ti(), w)) {
            var a = w.substring(0, w.length - 18).toLowerCase(),
              r = "transition: all " + ht / 1e3 + "s";
            a && (r = "-" + a + "-" + r),
              Hi(Tt, "[aria-controls^=" + Kt + "-item]", r, qi(Tt));
          }
          Qi(Te[Be], {
            "aria-label": je + (Be + 1) + He,
          }),
            Vi(Te[Be], "tabindex"),
            Fi(Te[Be], Ne),
            ta(Se, ae);
        }
        ue &&
          (xe ||
            (Ee && ke) ||
            (F.insertAdjacentHTML(
              cn(I.controlsPosition),
              '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="' +
                Kt +
                '">' +
                wt[0] +
                '</button><button data-controls="next" tabindex="-1" aria-controls="' +
                Kt +
                '">' +
                wt[1] +
                "</button></div>"
            ),
            (xe = F.querySelector(".tns-controls"))),
          (Ee && ke) || ((Ee = xe.children[0]), (ke = xe.children[1])),
          I.controlsContainer &&
            Qi(xe, {
              "aria-label": "Carousel Navigation",
              tabindex: "0",
            }),
          (I.controlsContainer || (I.prevButton && I.nextButton)) &&
            Qi([Ee, ke], {
              "aria-controls": Kt,
              tabindex: "-1",
            }),
          (I.controlsContainer || (I.prevButton && I.nextButton)) &&
            (Qi(Ee, {
              "data-controls": "prev",
            }),
            Qi(ke, {
              "data-controls": "next",
            })),
          (ye = Jn(Ee)),
          (Ae = Jn(ke)),
          $n(),
          xe ? ta(xe, ie) : (ta(Ee, ie), ta(ke, ie))),
          Sn();
      }

      function En() {
        if (N && A) {
          var t = {};
          (t[A] = li), ta(U, t);
        }
        At && ta(U, le, I.preventScrollOnTouch),
          xt && ta(U, ce),
          pt && ta(O, se),
          "inner" === z
            ? Jt.on("outerResized", function () {
                Cn(), Jt.emit("innerLoaded", Si());
              })
            : (B || rt || at || vt || !R) &&
              ta(m, {
                resize: kn,
              }),
          vt && ("outer" === z ? Jt.on("innerLoaded", Dn) : $t || Dn()),
          Nn(),
          $t ? On() : ee && In(),
          Jt.on("indexChanged", Fn),
          "inner" === z && Jt.emit("innerLoaded", Si()),
          "function" == typeof Yt && Yt(Si()),
          (X = !0);
      }

      function kn(t) {
        Mi(function () {
          Cn(bi(t));
        });
      }

      function Cn(t) {
        if (X) {
          "outer" === z && Jt.emit("outerResized", Si(t)), (J = ln());
          var e,
            n = D,
            i = !1;
          B && (Tn(), (e = n !== D) && Jt.emit("newBreakpointStart", Si(t)));
          var a,
            r,
            o,
            s,
            l = ut,
            c = $t,
            u = ee,
            d = pt,
            f = bt,
            p = yt,
            h = At,
            g = xt,
            m = Lt,
            v = Ct,
            b = _t,
            w = Dt;
          if (e) {
            var y = rt,
              A = vt,
              x = wt,
              L = ct,
              E = kt;
            if (!P)
              var k = st,
                C = ot;
          }
          if (
            ((pt = fn("arrowKeys")),
            (bt = fn("controls")),
            (yt = fn("nav")),
            (At = fn("touch")),
            (ct = fn("center")),
            (xt = fn("mouseDrag")),
            (Lt = fn("autoplay")),
            (Ct = fn("autoplayHoverPause")),
            (_t = fn("autoplayResetOnVisibility")),
            e &&
              (($t = fn("disable")),
              (rt = fn("fixedWidth")),
              (ht = fn("speed")),
              (vt = fn("autoHeight")),
              (wt = fn("controlsText")),
              (kt = fn("autoplayText")),
              (Et = fn("autoplayTimeout")),
              P || ((ot = fn("edgePadding")), (st = fn("gutter")))),
            nn($t),
            (lt = un()),
            (R && !at) || $t || (Qn(), R || (Ci(), (i = !0))),
            (rt || at) && ((Bt = ei()), (Wt = qt())),
            (e || rt) &&
              ((ut = fn("items")),
              (dt = fn("slideBy")),
              (r = ut !== l) && (rt || at || (Wt = qt()), tn())),
            e &&
              $t !== c &&
              ($t
                ? On()
                : (function () {
                    if (Zt) {
                      if (((Tt.disabled = !1), (U.className += Xt), ii(), mt))
                        for (var t = It; t--; )
                          N && Xi(V[t]), Xi(V[Ot - t - 1]);
                      if (!N)
                        for (var e = Dt, n = Dt + Y; e < n; e++) {
                          var i = V[e],
                            a = e < Dt + ut ? j : q;
                          (i.style.left = (100 * (e - Dt)) / ut + "%"),
                            Fi(i, a);
                        }
                      Mn(), (Zt = !1);
                    }
                  })()),
            te &&
              (e || rt || at) &&
              (ee = _n()) !== u &&
              (ee
                ? (ai(ni(rn(0))), In())
                : ((function () {
                    if (ne) {
                      if ((ot && P && (W.style.margin = ""), It))
                        for (var t = "tns-transparent", e = It; e--; )
                          N && Wi(V[e], t), Wi(V[Ot - e - 1], t);
                      Mn(), (ne = !1);
                    }
                  })(),
                  (i = !0))),
            nn($t || ee),
            Lt || (Ct = _t = !1),
            pt !== d && (pt ? ta(O, se) : ea(O, se)),
            bt !== f &&
              (bt
                ? xe
                  ? Xi(xe)
                  : (Ee && Xi(Ee), ke && Xi(ke))
                : xe
                ? Ji(xe)
                : (Ee && Ji(Ee), ke && Ji(ke))),
            yt !== p && (yt ? Xi(Se) : Ji(Se)),
            At !== h && (At ? ta(U, le, I.preventScrollOnTouch) : ea(U, le)),
            xt !== g && (xt ? ta(U, ce) : ea(U, ce)),
            Lt !== m &&
              (Lt
                ? (Ge && Xi(Ge), De || Fe || hi())
                : (Ge && Ji(Ge), De && gi())),
            Ct !== v && (Ct ? ta(U, re) : ea(U, re)),
            _t !== b && (_t ? ta(O, oe) : ea(O, oe)),
            e)
          ) {
            if (
              ((rt === y && ct === L) || (i = !0),
              vt !== A && (vt || (W.style.height = "")),
              bt &&
                wt !== x &&
                ((Ee.innerHTML = wt[0]), (ke.innerHTML = wt[1])),
              Ge && kt !== E)
            ) {
              var _ = Lt ? 1 : 0,
                T = Ge.innerHTML,
                S = T.length - E[_].length;
              T.substring(S) === E[_] &&
                (Ge.innerHTML = T.substring(0, S) + kt[_]);
            }
          } else ct && (rt || at) && (i = !0);
          if (
            ((r || (rt && !at)) && ((Ie = _i()), Ti()),
            (a = Dt !== w)
              ? (Jt.emit("indexChanged", Si()), (i = !0))
              : r
              ? a || Fn()
              : (rt || at) && (Nn(), Vn(), Pn()),
            r &&
              !N &&
              (function () {
                for (var t = Dt + Math.min(Y, ut), e = Ot; e--; ) {
                  var n = V[e];
                  Dt <= e && e < t
                    ? (Fi(n, "tns-moving"),
                      (n.style.left = (100 * (e - Dt)) / ut + "%"),
                      Fi(n, j),
                      Wi(n, q))
                    : n.style.left && ((n.style.left = ""), Fi(n, q), Wi(n, j)),
                    Wi(n, H);
                }
                setTimeout(function () {
                  Di(V, function (t) {
                    Wi(t, "tns-moving");
                  });
                }, 300);
              })(),
            !$t && !ee)
          ) {
            if (
              e &&
              !P &&
              ((vt === autoheightTem && ht === speedTem) || Wn(),
              (ot === C && st === k) ||
                (W.style.cssText = pn(ot, st, rt, ht, vt)),
              R)
            ) {
              N && (U.style.width = hn(rt, st, ut));
              var M = gn(rt, st, ut) + mn(st);
              (s = qi((o = Tt)) - 1),
                "deleteRule" in o ? o.deleteRule(s) : o.removeRule(s),
                Hi(Tt, "#" + Kt + " > .tns-item", M, qi(Tt));
            }
            vt && Dn(), i && (ii(), (Rt = Dt));
          }
          e && Jt.emit("newBreakpointEnd", Si(t));
        }
      }

      function _n() {
        if (!rt && !at) return Y <= (ct ? ut - (ut - 1) / 2 : ut);
        var t = rt ? (rt + st) * Y : K[Y],
          e = ot ? lt + 2 * ot : lt + st;
        return (
          ct && (e -= rt ? (lt - rt) / 2 : (lt - (K[Dt + 1] - K[Dt] - st)) / 2),
          t <= e
        );
      }

      function Tn() {
        for (var t in ((D = 0), B)) (t = parseInt(t)) <= J && (D = t);
      }

      function Sn() {
        !Lt && Ge && Ji(Ge),
          !yt && Se && Ji(Se),
          bt || (xe ? Ji(xe) : (Ee && Ji(Ee), ke && Ji(ke)));
      }

      function Mn() {
        Lt && Ge && Xi(Ge),
          yt && Se && Xi(Se),
          bt && (xe ? Xi(xe) : (Ee && Xi(Ee), ke && Xi(ke)));
      }

      function In() {
        if (!ne) {
          if ((ot && (W.style.margin = "0px"), It))
            for (var t = "tns-transparent", e = It; e--; )
              N && Fi(V[e], t), Fi(V[Ot - e - 1], t);
          Sn(), (ne = !0);
        }
      }

      function On() {
        if (!Zt) {
          if (
            ((Tt.disabled = !0),
            (U.className = U.className.replace(Xt.substring(1), "")),
            Vi(U, ["style"]),
            mt)
          )
            for (var t = It; t--; ) N && Ji(V[t]), Ji(V[Ot - t - 1]);
          if (((R && N) || Vi(W, ["style"]), !N))
            for (var e = Dt, n = Dt + Y; e < n; e++) {
              var i = V[e];
              Vi(i, ["style"]), Wi(i, j), Wi(i, q);
            }
          Sn(), (Zt = !0);
        }
      }

      function Pn() {
        var t = Bn();
        Z.innerHTML !== t && (Z.innerHTML = t);
      }

      function Bn() {
        var t = zn(),
          e = t[0] + 1,
          n = t[1] + 1;
        return e === n ? e + "" : e + " to " + n;
      }

      function zn(t) {
        null == t && (t = ni());
        var n,
          i,
          a,
          r = Dt;
        if (
          (ct || ot
            ? (at || rt) && ((i = -(parseFloat(t) + ot)), (a = i + lt + 2 * ot))
            : at && ((i = K[Dt]), (a = i + lt)),
          at)
        )
          K.forEach(function (t, e) {
            e < Ot &&
              ((ct || ot) && t <= i + 0.5 && (r = e), 0.5 <= a - t && (n = e));
          });
        else {
          if (rt) {
            var e = rt + st;
            n =
              ct || ot
                ? ((r = Math.floor(i / e)), Math.ceil(a / e - 1))
                : r + Math.ceil(lt / e) - 1;
          } else if (ct || ot) {
            var o = ut - 1;
            if (((n = ct ? ((r -= o / 2), Dt + o / 2) : Dt + o), ot)) {
              var s = (ot * ut) / lt;
              (r -= s), (n += s);
            }
            (r = Math.floor(r)), (n = Math.ceil(n));
          } else n = r + ut - 1;
          (r = Math.max(r, 0)), (n = Math.min(n, Ot - 1));
        }
        return [r, n];
      }

      function Nn() {
        St &&
          !$t &&
          qn.apply(null, zn()).forEach(function (t) {
            if (!Ri(t, ve)) {
              var e = {};
              (e[A] = function (t) {
                t.stopPropagation();
              }),
                ta(t, e),
                ta(t, be),
                (t.src = Gi(t, "data-src"));
              var n = Gi(t, "data-srcset");
              n && (t.srcset = n), Fi(t, "loading");
            }
          });
      }

      function jn(t) {
        Fi(t, "loaded"), Hn(t);
      }

      function Hn(t) {
        Fi(t, "tns-complete"), Wi(t, "loading"), ea(t, be);
      }

      function qn(t, e) {
        for (var n = []; t <= e; )
          Di(V[t].querySelectorAll("img"), function (t) {
            n.push(t);
          }),
            t++;
        return n;
      }

      function Dn() {
        var t = qn.apply(null, zn());
        Mi(function () {
          Rn(t, Gn);
        });
      }

      function Rn(n, t) {
        return $
          ? t()
          : (n.forEach(function (t, e) {
              Ri(t, ve) && n.splice(e, 1);
            }),
            n.length
              ? void Mi(function () {
                  Rn(n, t);
                })
              : t());
      }

      function Fn() {
        Nn(),
          Vn(),
          Pn(),
          $n(),
          (function () {
            if (yt && ((Be = 0 <= Pe ? Pe : sn()), (Pe = -1), Be !== ze)) {
              var t = Te[ze],
                e = Te[Be];
              Qi(t, {
                tabindex: "-1",
                "aria-label": je + (ze + 1),
              }),
                Wi(t, Ne),
                Qi(e, {
                  "aria-label": je + (Be + 1) + He,
                }),
                Vi(e, "tabindex"),
                Fi(e, Ne),
                (ze = Be);
            }
          })();
      }

      function Wn() {
        N && vt && (M.style[w] = ht / 1e3 + "s");
      }

      function Un(t, e) {
        for (var n = [], i = t, a = Math.min(t + e, Ot); i < a; i++)
          n.push(V[i].offsetHeight);
        return Math.max.apply(null, n);
      }

      function Gn() {
        var t = vt ? Un(Dt, ut) : Un(It, Y),
          e = M || W;
        e.style.height !== t && (e.style.height = t + "px");
      }

      function Qn() {
        K = [0];
        var n = R ? "left" : "top",
          i = R ? "right" : "bottom",
          a = V[0].getBoundingClientRect()[n];
        Di(V, function (t, e) {
          e && K.push(t.getBoundingClientRect()[n] - a),
            e === Ot - 1 && K.push(t.getBoundingClientRect()[i] - a);
        });
      }

      function Vn() {
        var t = zn(),
          n = t[0],
          i = t[1];
        Di(V, function (t, e) {
          n <= e && e <= i
            ? Ui(t, "aria-hidden") &&
              (Vi(t, ["aria-hidden", "tabindex"]), Fi(t, me))
            : Ui(t, "aria-hidden") ||
              (Qi(t, {
                "aria-hidden": "true",
                tabindex: "-1",
              }),
              Wi(t, me));
        });
      }

      function Yn(t) {
        return t.nodeName.toLowerCase();
      }

      function Jn(t) {
        return "button" === Yn(t);
      }

      function Xn(t) {
        return "true" === t.getAttribute("aria-disabled");
      }

      function Kn(t, e, n) {
        t ? (e.disabled = n) : e.setAttribute("aria-disabled", n.toString());
      }

      function $n() {
        if (bt && !gt && !mt) {
          var t = ye ? Ee.disabled : Xn(Ee),
            e = Ae ? ke.disabled : Xn(ke),
            n = Dt <= Ft,
            i = !gt && Wt <= Dt;
          n && !t && Kn(ye, Ee, !0),
            !n && t && Kn(ye, Ee, !1),
            i && !e && Kn(Ae, ke, !0),
            !i && e && Kn(Ae, ke, !1);
        }
      }

      function Zn(t, e) {
        w && (t.style[w] = e);
      }

      function ti(t) {
        return (
          null == t && (t = Dt),
          at
            ? (lt - (ot ? st : 0) - (K[t + 1] - K[t] - st)) / 2
            : rt
            ? (lt - rt) / 2
            : (ut - 1) / 2
        );
      }

      function ei() {
        var t = lt + (ot ? st : 0) - (rt ? (rt + st) * Ot : K[Ot]);
        return (
          ct &&
            !mt &&
            (t = rt ? -(rt + st) * (Ot - 1) - ti() : ti(Ot - 1) - K[Ot - 1]),
          0 < t && (t = 0),
          t
        );
      }

      function ni(t) {
        var e;
        if ((null == t && (t = Dt), R && !at))
          if (rt) (e = -(rt + st) * t), ct && (e += ti());
          else {
            var n = f ? Ot : ut;
            ct && (t -= ti()), (e = (100 * -t) / n);
          }
        else (e = -K[t]), ct && at && (e += ti());
        return Pt && (e = Math.max(e, Bt)), e + (!R || at || rt ? "px" : "%");
      }

      function ii(t) {
        Zn(U, "0s"), ai(t);
      }

      function ai(t) {
        null == t && (t = ni()), (U.style[Nt] = jt + t + Ht);
      }

      function ri(t, e, n, i) {
        var a = t + ut;
        mt || (a = Math.min(a, Ot));
        for (var r = t; r < a; r++) {
          var o = V[r];
          i || (o.style.left = (100 * (r - Dt)) / ut + "%"),
            S && h && (o.style[h] = o.style[g] = (S * (r - t)) / 1e3 + "s"),
            Wi(o, e),
            Fi(o, n),
            i && Mt.push(o);
        }
      }

      function oi(t, e) {
        zt && tn(),
          (Dt === Rt && !e) ||
            (Jt.emit("indexChanged", Si()),
            Jt.emit("transitionStart", Si()),
            vt && Dn(),
            De && t && 0 <= ["click", "keydown"].indexOf(t.type) && gi(),
            (Vt = !0),
            en());
      }

      function si(t) {
        return t.toLowerCase().replace(/-/g, "");
      }

      function li(t) {
        if (N || Vt) {
          if ((Jt.emit("transitionEnd", Si(t)), !N && 0 < Mt.length))
            for (var e = 0; e < Mt.length; e++) {
              var n = Mt[e];
              (n.style.left = ""),
                g && h && ((n.style[g] = ""), (n.style[h] = "")),
                Wi(n, H),
                Fi(n, q);
            }
          if (
            !t ||
            (!N && t.target.parentNode === U) ||
            (t.target === U && si(t.propertyName) === si(Nt))
          ) {
            if (!zt) {
              var i = Dt;
              tn(), Dt !== i && (Jt.emit("indexChanged", Si()), ii());
            }
            "inner" === z && Jt.emit("innerLoaded", Si()), (Vt = !1), (Rt = Dt);
          }
        }
      }

      function ci(t, e) {
        if (!ee)
          if ("prev" === t) ui(e, -1);
          else if ("next" === t) ui(e, 1);
          else {
            if (Vt) {
              if (Ut) return;
              li();
            }
            var n = on(),
              i = 0;
            if (
              ("first" === t
                ? (i = -n)
                : "last" === t
                ? (i = N ? Y - ut - n : Y - 1 - n)
                : ("number" != typeof t && (t = parseInt(t)),
                  isNaN(t) ||
                    (e || (t = Math.max(0, Math.min(Y - 1, t))), (i = t - n))),
              !N && i && Math.abs(i) < ut)
            ) {
              var a = 0 < i ? 1 : -1;
              i += Ft <= Dt + i - Y ? Y * a : 2 * Y * a * -1;
            }
            (Dt += i),
              N && mt && (Dt < Ft && (Dt += Y), Wt < Dt && (Dt -= Y)),
              on(Dt) !== on(Rt) && oi(e);
          }
      }

      function ui(t, e) {
        if (Vt) {
          if (Ut) return;
          li();
        }
        var n;
        if (!e) {
          for (var i = wi((t = bi(t))); i !== xe && [Ee, ke].indexOf(i) < 0; )
            i = i.parentNode;
          var a = [Ee, ke].indexOf(i);
          0 <= a && ((n = !0), (e = 0 === a ? -1 : 1));
        }
        if (gt) {
          if (Dt === Ft && -1 === e) return void ci("last", t);
          if (Dt === Wt && 1 === e) return void ci("first", t);
        }
        e &&
          ((Dt += dt * e),
          at && (Dt = Math.floor(Dt)),
          oi(n || (t && "keydown" === t.type) ? t : null));
      }

      function di() {
        (qe = setInterval(function () {
          ui(null, Ue);
        }, Et)),
          (De = !0);
      }

      function fi() {
        clearInterval(qe), (De = !1);
      }

      function pi(t, e) {
        Qi(Ge, {
          "data-action": t,
        }),
          (Ge.innerHTML = Ve[0] + t + Ve[1] + e);
      }

      function hi() {
        di(), Ge && pi("stop", kt[1]);
      }

      function gi() {
        fi(), Ge && pi("start", kt[0]);
      }

      function mi() {
        Fe = De ? (gi(), !0) : (hi(), !1);
      }

      function vi(t) {
        t.focus();
      }

      function bi(t) {
        return yi((t = t || m.event)) ? t.changedTouches[0] : t;
      }

      function wi(t) {
        return t.target || m.event.srcElement;
      }

      function yi(t) {
        return 0 <= t.type.indexOf("touch");
      }

      function Ai(t) {
        t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
      }

      function xi() {
        return (
          (a = Ke.y - Xe.y),
          (r = Ke.x - Xe.x),
          (t = Math.atan2(a, r) * (180 / Math.PI)),
          (n = !1),
          90 - (e = Gt) <= (i = Math.abs(90 - Math.abs(t)))
            ? (n = "horizontal")
            : i <= e && (n = "vertical"),
          n === I.axis
        );
        var t, e, n, i, a, r;
      }

      function Li(t) {
        if (Vt) {
          if (Ut) return;
          li();
        }
        Lt && De && fi(), ($e = !0), Je && (Ii(Je), (Je = null));
        var e = bi(t);
        Jt.emit(yi(t) ? "touchStart" : "dragStart", Si(t)),
          !yi(t) && 0 <= ["img", "a"].indexOf(Yn(wi(t))) && Ai(t),
          (Ke.x = Xe.x = e.clientX),
          (Ke.y = Xe.y = e.clientY),
          N && ((Ye = parseFloat(U.style[Nt].replace(jt, ""))), Zn(U, "0s"));
      }

      function Ei(t) {
        if ($e) {
          var e = bi(t);
          (Ke.x = e.clientX),
            (Ke.y = e.clientY),
            N
              ? (Je =
                  Je ||
                  Mi(function () {
                    !(function t(e) {
                      if (Qt) {
                        if (
                          (Ii(Je),
                          $e &&
                            (Je = Mi(function () {
                              t(e);
                            })),
                          "?" === Qt && (Qt = xi()),
                          Qt)
                        ) {
                          !we && yi(e) && (we = !0);
                          try {
                            e.type &&
                              Jt.emit(yi(e) ? "touchMove" : "dragMove", Si(e));
                          } catch (t) {}
                          var n = Ye,
                            i = Ze(Ke, Xe);
                          if (!R || rt || at) (n += i), (n += "px");
                          else
                            (n += f
                              ? (i * ut * 100) / ((lt + st) * Ot)
                              : (100 * i) / (lt + st)),
                              (n += "%");
                          U.style[Nt] = jt + n + Ht;
                        }
                      } else $e = !1;
                    })(t);
                  }))
              : ("?" === Qt && (Qt = xi()), Qt && (we = !0)),
            we && t.preventDefault();
        }
      }

      function ki(i) {
        if ($e) {
          Je && (Ii(Je), (Je = null)), N && Zn(U, ""), ($e = !1);
          var t = bi(i);
          (Ke.x = t.clientX), (Ke.y = t.clientY);
          var a = Ze(Ke, Xe);
          if (Math.abs(a)) {
            if (!yi(i)) {
              var n = wi(i);
              ta(n, {
                click: function t(e) {
                  Ai(e),
                    ea(n, {
                      click: t,
                    });
                },
              });
            }
            N
              ? (Je = Mi(function () {
                  if (R && !at) {
                    var t = (-a * ut) / (lt + st);
                    (t = 0 < a ? Math.floor(t) : Math.ceil(t)), (Dt += t);
                  } else {
                    var e = -(Ye + a);
                    if (e <= 0) Dt = Ft;
                    else if (e >= K[Ot - 1]) Dt = Wt;
                    else
                      for (var n = 0; n < Ot && e >= K[n]; )
                        e > K[(Dt = n)] && a < 0 && (Dt += 1), n++;
                  }
                  oi(i, a), Jt.emit(yi(i) ? "touchEnd" : "dragEnd", Si(i));
                }))
              : Qt && ui(i, 0 < a ? -1 : 1);
          }
        }
        "auto" === I.preventScrollOnTouch && (we = !1),
          Gt && (Qt = "?"),
          Lt && !De && di();
      }

      function Ci() {
        (M || W).style.height = K[Dt + ut] - K[Dt] + "px";
      }

      function _i() {
        var t = rt ? ((rt + st) * Y) / lt : Y / ut;
        return Math.min(Math.ceil(t), Y);
      }

      function Ti() {
        if (yt && !fe && Ie !== Oe) {
          var t = Oe,
            e = Ie,
            n = Xi;
          for (Ie < Oe && ((t = Ie), (e = Oe), (n = Ji)); t < e; )
            n(Te[t]), t++;
          Oe = Ie;
        }
      }

      function Si(t) {
        return {
          container: U,
          slideItems: V,
          navContainer: Se,
          navItems: Te,
          controlsContainer: xe,
          hasControls: ue,
          prevButton: Ee,
          nextButton: ke,
          items: ut,
          slideBy: dt,
          cloneCount: It,
          slideCount: Y,
          slideCountNew: Ot,
          index: Dt,
          indexCached: Rt,
          displayIndex: an(),
          navCurrentIndex: Be,
          navCurrentIndexCached: ze,
          pages: Ie,
          pagesCached: Oe,
          sheet: Tt,
          isOn: X,
          event: t || {},
        };
      }
      L && console.warn("No slides found in", I.container);
    };
    return ia;
  })(),
  elementInFrame = {
    elements: [],
    init: function () {
      window.addEventListener("scroll", this.initCheckFrame.bind(this)),
        window.addEventListener("resize", this.initCheckFrame.bind(this)),
        this.initCheckFrame();
    },
    set: function (t) {
      var e = this.getElementParam(t);
      this.elements.push(e);
    },
    getElementParam: function (t) {
      return {
        element: t,
        positionTop: this.getCoords(t).top,
        positionLeft: this.getCoords(t).left,
        elementHeight: t.clientHeight,
        elementWidth: t.clientWidth,
      };
    },
    check: function (t) {
      var e = window.pageYOffset || document.documentElement.scrollTop,
        n = e + window.innerHeight,
        i = t.positionTop,
        a = i + t.elementHeight,
        r = !1;
      return (
        ((i < e && e < a) ||
          (i < n && n < a) ||
          (e < i && i < n && a < n && a < n)) &&
          (r = !r),
        r
      );
    },
    setElementClass: function (t) {
      var e = t.getAttribute("data-class");
      if (e) {
        e = e.split(",");
        for (var n = 0; n < e.length; n++) t.classList.add(e[n]);
      }
    },
    getCoords: function (t) {
      var e = t.getBoundingClientRect();
      return {
        top: e.top + pageYOffset,
        left: e.left + pageXOffset,
      };
    },
    initCheckFrame: function () {
      if (0 < this.elements.length)
        for (var t = 0; t < this.elements.length; t++) {
          this.elements[t].element.hasAttribute("data-show") ||
            (this.elements[t] = this.getElementParam(this.elements[t].element)),
            this.check(this.elements[t]) &&
              (this.setElementClass(this.elements[t].element),
              this.elements[t].element.setAttribute("data-show", "true"));
        }
    },
  },
  animate_element = document.querySelectorAll('[data-animate="true"]');
if (animate_element) {
  for (var i = 0; i < animate_element.length; i++)
    elementInFrame.set(animate_element[i]);
  elementInFrame.init();
}
!(function () {
  var t = document.querySelectorAll("input[data-autocomplete-on]");

  function e(t) {
    t &&
      ((this.element = t),
      (this.ajax = !1),
      (this.timer = !1),
      (this.status = !0),
      (this.search = ""),
      (this.beforeLength = 0),
      (this.container = !1),
      (this.items = []),
      (this.config = {
        minlength: 2,
        timout: 400,
        groupBy: "",
        target: "form",
        clear: void 0,
        searchDefault: !1,
        renderFunction: void 0,
        submitFunction: void 0,
        linkFunction: void 0,
        destroyFunction: void 0,
      }),
      (this.track = function () {
        this.element.setAttribute("autocomplete", "off"),
          this.element.addEventListener("input", this.input.bind(this)),
          this.element.addEventListener("focus", this.focusInput.bind(this)),
          this.element.addEventListener(
            "focus",
            this.addActiveToContainer.bind(this)
          ),
          document.body.addEventListener("click", this.removeActive.bind(this)),
          document.body.addEventListener(
            "touchstart",
            this.removeActive.bind(this),
            !!supportsPassive && {
              passive: !0,
            }
          );
      }),
      (this.focusInput = function () {
        this.container || this.input.call(this);
      }),
      (this.input = function () {
        if (
          (this.beforeLength > this.element.value.length &&
            !this.status &&
            (this.status = !0),
          this.element.value.length >= this.config.minlength && this.status
            ? (this.timer && (clearTimeout(this.timer), (this.timer = !1)),
              (this.timer = setTimeout(
                this.sendAjax.bind(this),
                this.config.timout
              )))
            : this.config.searchDefault &&
              window.site_option.search.suggestions &&
              0 < window.site_option.search.suggestions.length
            ? this.config.renderFunction.call(
                this,
                this.prepareResponse(window.site_option.search)
              )
            : this.config.destroyFunction.call(this),
          this.config.clear)
        ) {
          var t = this.getClosestParent(this.config.target);
          if (t) var e = t.querySelector(this.config.clear);
          this.element.value.length
            ? e &&
              !e.classList.contains("active") &&
              (e.classList.add("active"),
              e.addEventListener("click", this.clear.bind(this, e)))
            : e &&
              e.classList.contains("active") &&
              (e.classList.remove("active"),
              e.removeEventListener("click", this.clear.bind(this, e)));
        }
      }),
      (this.clear = function (t) {
        t.classList.remove("active"),
          t.removeEventListener("click", this.clear.bind(this, t)),
          (this.element.value = "");
      }),
      (this.sendAjax = function () {
        if (window.hasOwnProperty("send_ajax")) {
          this.ajax && this.ajax.abort();
          var t = this.element.hasAttribute("data-language")
              ? this.element.getAttribute("data-language")
              : "en",
            e = this.element.hasAttribute("data-action")
              ? this.element.getAttribute("data-action")
              : "autocomplete";
          this.search = this.element.value;
          var n = {
            action: e,
            language: t,
            query: this.search,
          };
          (this.beforeLength = this.search.length),
            (this.ajax = window.send_ajax(
              "POST",
              window.ajaxactionurl,
              n,
              null,
              this.success.bind(this),
              this.error.bind(this)
            ));
        }
      }),
      (this.prepareConfig = function () {
        this.element.hasAttribute("data-default") &&
          (this.config.searchDefault = !0),
          this.element.hasAttribute("data-timout") &&
            (this.config.timout = this.element.getAttribute("data-timout")),
          this.element.hasAttribute("minlength") &&
            (this.config.minlength = this.element.getAttribute("minlength")),
          this.element.hasAttribute("data-group-by") &&
            (this.config.groupBy = this.element.getAttribute("data-group-by")),
          this.element.hasAttribute("data-target-selector") &&
            (this.config.target = this.element.getAttribute(
              "data-target-selector"
            )),
          this.element.hasAttribute("data-clear-selector") &&
            (this.config.clear = this.element.getAttribute(
              "data-clear-selector"
            )),
          this.prepareFunction(["link", "render", "submit", "destroy"]);
      }),
      (this.prepareFunction = function (t) {
        if (t)
          for (var e = 0; e < t.length; e++) {
            var n = t[e];
            if (this.element.hasAttribute("data-" + n + "-function")) {
              var i = this.element.getAttribute("data-" + n + "-function");
              window.hasOwnProperty(i) &&
                (this.config[n + "Function"] = window[i]);
            }
            this.config[n + "Function"] ||
              (this.config[n + "Function"] = this[n]);
          }
      }),
      (this.success = function (t) {
        if (t) {
          var e = JSON.parse(t);
          e.suggestions &&
            0 === e.suggestions.length &&
            window.site_option.search &&
            0 === window.site_option.search.suggestions.length &&
            (this.status = !1),
            (!e.suggestions || (e.suggestions && 0 === e.suggestions.length)) &&
              this.config.searchDefault &&
              (e = window.site_option.search),
            e.suggestions && 0 < e.suggestions.length
              ? this.config.renderFunction.call(this, this.prepareResponse(e))
              : this.config.destroyFunction.call(this);
        } else this.status = !1;
      }),
      (this.prepareResponse = function (t) {
        for (var e = 0; e < t.suggestions.length; e++)
          (t.suggestions[e].value = this.transformResult(
            t.suggestions[e].value
          )),
            (t.suggestions[e].data.prepareValue = this.prepareSuggestions(
              t.suggestions[e].value,
              this.search
            ));
        if (this.config.groupBy) {
          var n = {};
          for (e = 0; e < t.suggestions.length; e++) {
            var i = t.suggestions[e].data[this.config.groupBy];
            i
              ? (n.suggestions || (n.suggestions = {}),
                n.suggestions[i] || (n.suggestions[i] = {}),
                n.suggestions[i].data || (n.suggestions[i].data = []),
                n.suggestions[i].data.push(t.suggestions[e]),
                n.suggestions[i].class ||
                  (n.suggestions[i].class = t.suggestions[e].data.class),
                n.suggestions[i].title ||
                  (n.suggestions[i].title = t.suggestions[e].data.title))
              : (n.suggestions || (n.suggestions = []),
                n.suggestions.push(t.suggestions[e]));
          }
          t = n;
        }
        return t;
      }),
      (this.render = function (t) {
        var e = this.getClosestParent(this.config.target);
        if (
          (this.container
            ? ((this.container.innerHTML = ""), (this.items = []))
            : ((this.container = document.createElement("div")),
              this.container.classList.add("autocomplete-suggestions"),
              e && e.appendChild(this.container)),
          Array.isArray(t.suggestions))
        )
          for (var n = 0; n < t.suggestions.length; n++) {
            (o = this.renderItem(t.suggestions[n])) &&
              this.container &&
              (this.items.push(o), this.container.appendChild(o));
          }
        else
          for (var i in t.suggestions) {
            var a = this.renderGroup(t.suggestions[i].class);
            if (a) {
              var r = this.renderGroupTitle(t.suggestions[i].title);
              r && a.appendChild(r);
              for (n = 0; n < t.suggestions[i].data.length; n++) {
                var o;
                (o = this.renderItem(t.suggestions[i].data[n])) &&
                  (this.items.push(o), a.appendChild(o));
              }
              this.container.appendChild(a);
            }
          }
        this.container && this.container.classList.add("active"),
          e && e.classList.add("active-result"),
          this.element.classList.add("active-result");
      }),
      (this.renderGroup = function (t) {
        var e = document.createElement("div");
        return (
          e.classList.add("autocomplete-group-cover"), e.classList.add(t), e
        );
      }),
      (this.renderGroupTitle = function (t) {
        var e = document.createElement("div");
        return (
          e.classList.add("autocomplete-group"),
          (e.innerHTML = "<strong>" + t + "</strong>"),
          e
        );
      }),
      (this.renderItem = function (t) {
        var e = document.createElement("div");
        e.classList.add("autocomplete-suggestion"),
          t.data &&
            t.data.image &&
            !t.data.images &&
            ((n = document.createElement("div")).classList.add(
              "autocomplete-suggestion-image"
            ),
            ((r = document.createElement("img")).src = t.data.image),
            n.appendChild(r),
            e.appendChild(n));
        if (t.data && t.data.images && "object" == typeof t.data.images) {
          var n;
          (n = document.createElement("div")).classList.add(
            "autocomplete-suggestion-image"
          );
          var i = document.createElement("picture"),
            a = document.createElement("source"),
            r = document.createElement("img"),
            o = t.data.images.webp,
            s = t.data.images.jp2,
            l = t.data.images.default;
          l &&
            l.length &&
            (o && (i = this.iterateImages(i, o, a)),
            s && (i = this.iterateImages(i, s, a)),
            l && (i = this.iterateImages(i, l, a)),
            (r.src = l[l.length - 1].url),
            i.appendChild(r),
            n.appendChild(i),
            e.appendChild(n));
        }
        var c = document.createElement("div");
        c.classList.add("autocomplete-suggestion-content");
        var u = document.createElement("div");
        if (
          (u.classList.add("autocomplete-suggestion-content-title"),
          (u.innerHTML = t.data.prepareValue),
          c.appendChild(u),
          e.appendChild(c),
          e.addEventListener("mouseenter", this.addSelectedClass.bind(this, e)),
          t.data.behavior)
        )
          switch (t.data.behavior) {
            case "link":
              e.addEventListener(
                "click",
                this.config.linkFunction.bind(this, t)
              );
              break;
            default:
              e.addEventListener(
                "click",
                this.config.submitFunction.bind(this, t)
              );
          }
        else
          e.addEventListener("click", this.config.submitFunction.bind(this, t));
        return e;
      }),
      (this.iterateImages = function (t, e, n) {
        for (var i = 0; i < e.length; i++) {
          var a = e[i],
            r = this.createSource(a, n);
          r && t.appendChild(r);
        }
        return t;
      }),
      (this.createSource = function (t, e) {
        if (
          t &&
          e &&
          t.hasOwnProperty("type") &&
          t.hasOwnProperty("url") &&
          t.type &&
          t.url
        ) {
          var n = e.cloneNode(!0);
          return (
            t.hasOwnProperty("dimension") &&
              t.dimension &&
              n.setAttribute("media", "(max-width: " + t.dimension + "px)"),
            n.setAttribute("type", t.type),
            n.setAttribute("srcset", t.url),
            n
          );
        }
        return !1;
      }),
      (this.addSelectedClass = function (t) {
        if (0 < this.items.length)
          for (var e = 0; e < this.items.length; e++)
            this.items[e].classList.remove("autocomplete-selected");
        t.classList.add("autocomplete-selected");
      }),
      (this.link = function (t) {
        this.config.destroyFunction.call(this),
          (window.location.href = t.data.link);
      }),
      (this.submit = function (t) {
        this.element.value = t.value;
        var e = this.getClosestParent("form");
        e && (this.config.destroyFunction.call(this), e.submit());
      }),
      (this.addActiveToContainer = function () {
        this.container && this.container.classList.add("active");
      }),
      (this.escapeRegExp = function (t) {
        return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }),
      (this.removeActive = function (t) {
        var e = this.getClosestParent(this.config.target);
        t.target === this.element ||
          (e && t.target === e) ||
          (e && e.contains(t.target)) ||
          (this.container && this.container.classList.remove("active"),
          e && e.classList.remove("active-result"),
          this.element.classList.remove("active-result"));
      }),
      (this.destroy = function () {
        (this.items = []),
          this.container &&
            ((this.container.innerHTML = ""),
            this.container.classList.remove("active"));
        var t = this.getClosestParent(this.config.target);
        t && t.classList.remove("active-result"),
          this.element.classList.remove("active-result");
      }),
      (this.error = function (t) {
        this.status = !0;
      }),
      (this.transformResult = function (t) {
        if (t) {
          var e = document.createElement("span");
          (e.innerHTML = t), (t = e.innerText), (e.innerHTML = "");
        }
        return t;
      }),
      (this.prepareSuggestions = function (t, e) {
        var n = this.escapeRegExp(e),
          i = new RegExp(n);
        void 0 !== RegExp.prototype.flags && (i = new RegExp(i.source, "i"));
        return i.test(t)
          ? t.replace(i, function (t) {
              return "<strong>" + t + "</strong>";
            })
          : t;
      }),
      (this.getClosestParent = function (t) {
        for (
          var e = this.element;
          !e.classList.contains(t) &&
          "BODY" !== e.tagName &&
          e.tagName !== t.toUpperCase();

        )
          e = e.parentNode;
        return (
          e != this.element &&
          ("BODY" === t.toUpperCase() || "BODY" !== e.tagName) &&
          e
        );
      }),
      this.prepareConfig(),
      this.track());
  }
  if (t) for (var n = 0; n < t.length; n++) new e(t[n]);
})(),
  window.addEventListener("load", function () {
    var t = document.querySelectorAll(".faq-accordion__title");
    if (t)
      for (var e = t.length - 1; 0 <= e; e--)
        t[e].addEventListener("click", function (t) {
          this.classList.toggle("active");
          var e = this.closest(".faq-accordion__card");
          if (e) {
            e.classList.toggle("active");
            var n = e.querySelector(".faq-accordion__panel");
            n && n.classList.toggle("active");
          }
          t.preventDefault();
        });
  }),
  window.addEventListener("load", function () {
    var t = document.querySelectorAll(".footer-menu-title");
    if (t)
      for (var e = t.length - 1; 0 <= e; e--)
        t[e].addEventListener("click", function () {
          var t = this.closest(".footer-menu");
          t && t.classList.toggle("opened");
        });
  }),
  (function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = e())
      : "function" == typeof define && define.amd
      ? define(e)
      : ((t = t || self).LazyLoad = e());
  })(this, function () {
    "use strict";

    function e() {
      return (e =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        }).apply(this, arguments);
    }

    function l(t) {
      return e({}, G, t);
    }

    function a(t, e) {
      var n,
        i = "LazyLoad::Initialized",
        a = new t(e);
      try {
        n = new CustomEvent(i, {
          detail: {
            instance: a,
          },
        });
      } catch (t) {
        (n = document.createEvent("CustomEvent")).initCustomEvent(i, !1, !1, {
          instance: a,
        });
      }
      window.dispatchEvent(n);
    }

    function b(t, e) {
      return t.getAttribute("data-" + e);
    }

    function A(t) {
      return b(t, "ll-status");
    }

    function x(t, e) {
      return (
        (n = t),
        (a = "data-ll-status"),
        void (null !== (i = e) ? n.setAttribute(a, i) : n.removeAttribute(a))
      );
      var n, i, a;
    }

    function L(t) {
      return x(t, null);
    }

    function E(t) {
      return null === A(t);
    }

    function o(t) {
      return "native" === A(t);
    }

    function k(t, e, n, i) {
      t && (void 0 === i ? (void 0 === n ? t(e) : t(e, n)) : t(e, n, i));
    }

    function C(t, e) {
      W ? t.classList.add(e) : (t.className += (t.className ? " " : "") + e);
    }

    function _(t, e) {
      W
        ? t.classList.remove(e)
        : (t.className = t.className
            .replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ")
            .replace(/^\s+/, "")
            .replace(/\s+$/, ""));
    }

    function w(t) {
      return t.llTempImage;
    }

    function T(t, e) {
      if (e) {
        var n = e._observer;
        n && n.unobserve(t);
      }
    }

    function S(t, e) {
      t && (t.loadingCount += e);
    }

    function c(t, e) {
      t && (t.toLoadCount = e);
    }

    function i(t) {
      for (var e, n = [], i = 0; (e = t.children[i]); i += 1)
        "SOURCE" === e.tagName && n.push(e);
      return n;
    }

    function n(t, e, n) {
      n && t.setAttribute(e, n);
    }

    function r(t, e) {
      t.removeAttribute(e);
    }

    function s(t) {
      return !!t.llOriginalAttrs;
    }

    function u(t) {
      if (!s(t)) {
        var e = {};
        (e.src = t.getAttribute("src")),
          (e.srcset = t.getAttribute("srcset")),
          (e.sizes = t.getAttribute("sizes")),
          (t.llOriginalAttrs = e);
      }
    }

    function M(t) {
      if (s(t)) {
        var e = t.llOriginalAttrs;
        n(t, "src", e.src), n(t, "srcset", e.srcset), n(t, "sizes", e.sizes);
      }
    }

    function d(t, e) {
      n(t, "sizes", b(t, e.data_sizes)),
        n(t, "srcset", b(t, e.data_srcset)),
        n(t, "src", b(t, e.data_src));
    }

    function I(t) {
      r(t, "src"), r(t, "srcset"), r(t, "sizes");
    }

    function O(t, e) {
      var n = t.parentNode;
      n && "PICTURE" === n.tagName && i(n).forEach(e);
    }

    function f(t, e) {
      var n = K[t.tagName];
      n && n(t, e);
    }

    function y(t, e, n) {
      S(n, 1), C(t, e.class_loading), x(t, Q), k(e.callback_loading, t, n);
    }

    function p(t, e) {
      !e || 0 < e.loadingCount || 0 < e.toLoadCount || k(t.callback_finish, e);
    }

    function h(t, e, n) {
      t.addEventListener(e, n), (t.llEvLisnrs[e] = n);
    }

    function g(t) {
      return !!t.llEvLisnrs;
    }

    function P(t) {
      if (g(t)) {
        var e = t.llEvLisnrs;
        for (var n in e) {
          var i = e[n];
          (a = n), (r = i), t.removeEventListener(a, r);
        }
        delete t.llEvLisnrs;
      }
      var a, r;
    }

    function m(t, e, n) {
      delete t.llTempImage,
        S(n, -1),
        n && (n.toLoadCount -= 1),
        _(t, e.class_loading),
        e.unobserve_completed && T(t, n);
    }

    function B(n, i, a) {
      var r = w(n) || n;
      g(r) ||
        (function (t) {
          g(t) || (t.llEvLisnrs = {});
          var e = "VIDEO" === t.tagName ? "loadeddata" : "load";
          h(t, e, function (t) {
            !(function (t, e, n, i) {
              var a = o(e);
              m(e, n, i),
                C(e, n.class_loaded),
                x(e, V),
                k(n.callback_loaded, e, i),
                a || p(n, i);
            })(0, n, i, a),
              P(r);
          }),
            h(t, "error", function (t) {
              !(function (t, e, n, i) {
                var a = o(e);
                m(e, n, i),
                  C(e, n.class_error),
                  x(e, J),
                  k(n.callback_error, e, i),
                  a || p(n, i);
              })(0, n, i, a),
                P(r);
            });
        })(r);
    }

    function z(t, e, n) {
      var i, a, r, o;
      (o = t),
        -1 < $.indexOf(o.tagName)
          ? (B((i = t), (a = e), (r = n)), f(i, a), y(i, a, r))
          : (function (t, e, n) {
              var i, a, r, o, s, l, c, u, d, f, p, h, g, m, v;
              (t.llTempImage = document.createElement("IMG")),
                B(t, e, n),
                (h = n),
                (g = b((f = t), (p = e).data_bg)),
                (m = b(f, p.data_bg_hidpi)),
                (v = U && m ? m : g) &&
                  ((f.style.backgroundImage = 'url("'.concat(v, '")')),
                  w(f).setAttribute("src", v),
                  y(f, p, h)),
                (r = n),
                (c = b((i = t), (a = e).data_bg_multi)),
                (u = b(i, a.data_bg_multi_hidpi)),
                (d = U && u ? u : c) &&
                  ((i.style.backgroundImage = d),
                  (l = r),
                  C((o = i), (s = a).class_applied),
                  x(o, Y),
                  s.unobserve_completed && T(o, s),
                  k(s.callback_applied, o, l));
            })(t, e, n);
    }

    function v(t) {
      return t.use_native && "loading" in HTMLImageElement.prototype;
    }

    function N(t) {
      return Array.prototype.slice.call(t);
    }

    function j(t) {
      return t.container.querySelectorAll(t.elements_selector);
    }

    function H(t) {
      return A(t) === J;
    }

    function q(t, e) {
      return (n = t || j(e)), N(n).filter(E);
      var n;
    }

    function t(t, e) {
      var i,
        a,
        n,
        r,
        o,
        s = l(t);
      (this._settings = s),
        (this.loadingCount = 0),
        (n = s),
        (r = this),
        F &&
          !v(n) &&
          (r._observer = new IntersectionObserver(
            function (t) {
              !(function (t, w, y) {
                t.forEach(function (t) {
                  return (b = t).isIntersecting || 0 < b.intersectionRatio
                    ? ((d = t.target),
                      (f = t),
                      (p = w),
                      (h = y),
                      x(d, "entered"),
                      C(d, p.class_entered),
                      _(d, p.class_exited),
                      (m = d),
                      (v = h),
                      p.unobserve_entered && T(m, v),
                      k(p.callback_enter, d, f, h),
                      (g = d),
                      void (0 <= X.indexOf(A(g)) || z(d, p, h)))
                    : ((e = t.target),
                      (n = t),
                      (i = w),
                      (a = y),
                      void (
                        E(e) ||
                        (C(e, i.class_exited),
                        (r = e),
                        (o = n),
                        (l = a),
                        (s = i).cancel_on_exit &&
                          A(r) === Q &&
                          "IMG" === r.tagName &&
                          (P(r),
                          O((u = r), function (t) {
                            I(t);
                          }),
                          I(u),
                          O((c = r), function (t) {
                            M(t);
                          }),
                          M(c),
                          _(r, s.class_loading),
                          S(l, -1),
                          L(r),
                          k(s.callback_cancel, r, o, l)),
                        k(i.callback_exit, e, n, a))
                      ));
                  var e, n, i, a, r, o, s, l, c, u, d, f, p, h, g, m, v, b;
                });
              })(t, n, r);
            },
            {
              root: (o = n).container === document ? null : o.container,
              rootMargin: o.thresholds || o.threshold + "px",
            }
          )),
        (i = s),
        (a = this),
        D &&
          window.addEventListener("online", function () {
            var e, t, n;
            (t = a),
              ((n = j((e = i))), N(n).filter(H)).forEach(function (t) {
                _(t, e.class_error), L(t);
              }),
              t.update();
          }),
        this.update(e);
    }
    var D = "undefined" != typeof window,
      R =
        (D && !("onscroll" in window)) ||
        ("undefined" != typeof navigator &&
          /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
      F = D && "IntersectionObserver" in window,
      W = D && "classList" in document.createElement("p"),
      U = D && 1 < window.devicePixelRatio,
      G = {
        elements_selector: ".lazy",
        container: R || D ? document : null,
        threshold: 300,
        thresholds: null,
        data_src: "src",
        data_srcset: "srcset",
        data_sizes: "sizes",
        data_bg: "bg",
        data_bg_hidpi: "bg-hidpi",
        data_bg_multi: "bg-multi",
        data_bg_multi_hidpi: "bg-multi-hidpi",
        data_poster: "poster",
        class_applied: "applied",
        class_loading: "loading",
        class_loaded: "loaded",
        class_error: "error",
        class_entered: "entered",
        class_exited: "exited",
        unobserve_completed: !0,
        unobserve_entered: !1,
        cancel_on_exit: !0,
        callback_enter: null,
        callback_exit: null,
        callback_applied: null,
        callback_loading: null,
        callback_loaded: null,
        callback_error: null,
        callback_finish: null,
        callback_cancel: null,
        use_native: !1,
      },
      Q = "loading",
      V = "loaded",
      Y = "applied",
      J = "error",
      X = [Q, "loaded", Y, J],
      K = {
        IMG: function (t, e) {
          O(t, function (t) {
            u(t), d(t, e);
          }),
            u(t),
            d(t, e);
        },
        IFRAME: function (t, e) {
          n(t, "src", b(t, e.data_src));
        },
        VIDEO: function (t, e) {
          i(t).forEach(function (t) {
            n(t, "src", b(t, e.data_src));
          }),
            n(t, "poster", b(t, e.data_poster)),
            n(t, "src", b(t, e.data_src)),
            t.load();
        },
      },
      $ = ["IMG", "IFRAME", "VIDEO"],
      Z = ["IMG", "IFRAME"];
    return (
      (t.prototype = {
        update: function (t) {
          var e,
            n,
            i,
            a,
            r,
            o = this._settings,
            s = q(t, o);
          c(this, s.length),
            !R && F
              ? v(o)
                ? ((a = o),
                  (r = this),
                  s.forEach(function (t) {
                    var e, n;
                    -1 !== Z.indexOf(t.tagName) &&
                      (t.setAttribute("loading", "lazy"),
                      B((e = t), (n = a), r),
                      f(e, n),
                      x(e, "native"));
                  }),
                  c(r, 0))
                : ((n = s),
                  (e = this._observer).disconnect(),
                  (i = e),
                  n.forEach(function (t) {
                    i.observe(t);
                  }))
              : this.loadAll(s);
        },
        destroy: function () {
          this._observer && this._observer.disconnect(),
            j(this._settings).forEach(function (t) {
              delete t.llOriginalAttrs;
            }),
            delete this._observer,
            delete this._settings,
            delete this.loadingCount,
            delete this.toLoadCount;
        },
        loadAll: function (t) {
          var e = this,
            n = this._settings;
          q(t, n).forEach(function (t) {
            T(t, e), z(t, n, e);
          });
        },
      }),
      (t.load = function (t, e) {
        var n = l(e);
        z(t, n);
      }),
      (t.resetStatus = function (t) {
        L(t);
      }),
      D &&
        (function (t, e) {
          if (e)
            if (e.length) for (var n, i = 0; (n = e[i]); i += 1) a(t, n);
            else a(t, e);
        })(t, window.lazyLoadOptions),
      t
    );
  });
var timerUpButton,
  laodmore = {},
  button = document.querySelectorAll("[data-load-more]");

function initload(t, e) {
  laodmore.initload(t, e);
}

function test(t, e) {}

function up_button() {
  var n = document.querySelector(".footer__scroll-top-button-cover"),
    i = !1;

  function a() {
    var n = Date.now();
    timerUpButton = setInterval(function () {
      var t = Date.now() - n,
        e = window.pageYOffset || document.documentElement.scrollTop;
      if (5e3 <= t || e <= 0)
        return clearInterval(timerUpButton), void (timerUpButton = void 0);
      !(function (t, e, n) {
        if (0 < n) {
          var i = n - (n * t) / (2 * e);
          window.scrollTo(0, Math.floor(i));
        }
      })(t, 5e3, e);
    }, 10);
  }
  n ||
    (((n = document.createElement("img")).src = "/img/up.png"),
    (n.style.opacity = "0"),
    (n.className = "up-button"),
    document.body.appendChild(n),
    (i = !0)),
    window.addEventListener("mousewheel", function () {
      timerUpButton && clearInterval(timerUpButton);
    }),
    window.addEventListener("touchstart", function () {
      timerUpButton && clearInterval(timerUpButton);
    }),
    (window.onscroll = function () {
      !(function () {
        var t = window.pageYOffset || document.documentElement.scrollTop,
          e = window.innerHeight;
        0.5 * e < t
          ? (i
              ? ((n.style.opacity = "1"), (n.style.cursor = "pointer"))
              : n.classList.add("show-up-button"),
            n.addEventListener("click", a))
          : (n.classList.add("show-up-button"),
            i
              ? ((n.style.opacity = "0"), (n.style.cursor = "inherit"))
              : n.classList.remove("show-up-button"),
            n.removeEventListener("click", a));
      })();
    });
}

function scrollingLink(t) {
  var e = document.querySelectorAll(t);
  if (0 !== e.length)
    for (var n = e.length - 1; 0 <= n; n--)
      e[n].addEventListener("click", scrollFuncLink);
}

function scrollFuncLink(t) {
  t.preventDefault();
  var e = this.hasAttribute("data-navigate")
      ? '[data-navigate-to="' + this.getAttribute("data-navigate") + '"]'
      : this.getAttribute("href"),
    n = document.querySelector(".header-nav"),
    i = 0;
  if ((n && ((i = n.offsetHeight), (i += n.offsetTop)), e)) {
    var a = document.querySelector(e);
    if (a) {
      var r = getCoords(a).top;
      window.pageYOffset,
        (r -= i),
        window.scrollTo({
          top: r,
          behavior: "smooth",
        });
    }
  }
  return !1;
}

function load_iframe(t, i, a) {
  var e = document.querySelector(t);
  e &&
    e.addEventListener("click", function () {
      var t = this.getAttribute("data-iframe-link");
      if (t && i) {
        var e = !!i && this.closest(i);
        if (e) {
          e.classList.add(a);
          var n = e.querySelector("iframe");
          n && (n.src = t);
        }
      }
    });
}
(laodmore.button = button || !1),
  (laodmore.ajaxactionurl = !!window.ajaxactionurl && window.ajaxactionurl),
  (laodmore.init = function () {
    if (this.button)
      for (var t = 0; t < this.button.length; t++)
        this.button[t].addEventListener("click", this.load, !1);
  }),
  (laodmore.testMobile = function () {
    var t = !1;
    return (
      (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
        navigator.userAgent
      ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          navigator.userAgent.substr(0, 4)
        )) &&
        (t = !0),
      t
    );
  }),
  (laodmore.load = function () {
    var t = {},
      e = {};
    (t.element = this),
      (t.language =
        !!this.getAttribute("data-language") &&
        this.getAttribute("data-language")),
      (t.template =
        !!this.getAttribute("data-template") &&
        this.getAttribute("data-template")),
      (t.mobile = laodmore.testMobile() ? "mobile" : "desktop"),
      (t.args =
        !!this.getAttribute("data-args") && this.getAttribute("data-args")),
      (t.max_pages = this.getAttribute("data-max-pages")
        ? this.getAttribute("data-max-pages")
        : 1),
      (t.load_next =
        !!this.getAttribute("data-load-next") &&
        this.getAttribute("data-load-next")),
      (t.load_default =
        !!this.getAttribute("data-load-default") &&
        this.getAttribute("data-load-default")),
      (t.loading_progress =
        !!this.getAttribute("data-loading-progress") &&
        this.getAttribute("data-loading-progress")),
      (t.page = this.getAttribute("data-current-page")
        ? this.getAttribute("data-current-page")
        : 1),
      (t.selector =
        !!this.getAttribute("data-selector") &&
        this.getAttribute("data-selector")),
      (t.insert_before =
        !!this.getAttribute("data-insert-before") &&
        this.getAttribute("data-insert-before")),
      (t.lazy = this.hasAttribute("data-lazy")),
      (e.action = "loadmore"),
      (e.page = t.page),
      (e.args = t.args),
      (e.template = t.template),
      (e.mobile = t.mobile),
      (e.language = t.language),
      laodmore.ajaxactionurl &&
        (t.loading_progress &&
          (t.load_default || (t.load_default = t.element.innerHTML),
          (t.element.innerHTML = t.loading_progress)),
        send_ajax("POST", laodmore.ajaxactionurl, e, t, initload, test));
  }),
  (laodmore.initload = function (t, e) {
    var n = document.createElement("div");
    (n.innerHTML = t), n.classList.add("response_container");
    var i = Number(e.page) + 1;
    e.element.setAttribute("data-current-page", i);
    var a = n.querySelectorAll(e.selector),
      r = document.querySelector(e.insert_before);
    if (a)
      if (r)
        for (var o = 0; o < a.length; o++)
          r.parentNode.insertBefore(a[o], r),
            e.lazy &&
              window.lazyLoadInstance &&
              window.lazyLoadInstance.update();
      else if (e.element)
        for (o = 0; o < a.length; o++)
          e.element.parentNode.insertBefore(a[o], e.element),
            e.lazy &&
              window.lazyLoadInstance &&
              window.lazyLoadInstance.update();
    n.remove(),
      +i == +e.max_pages && e.element.remove(),
      e.load_next
        ? (e.element.innerHTML = e.load_next)
        : e.load_default && (e.element.innerHTML = e.load_default);
  }),
  laodmore.init(),
  window.addEventListener("load", function () {
    var t = document.querySelectorAll(".save-list__card");
    if (t)
      for (var e = 0; e < t.length; e++) {
        var n = t[e];
        n.addEventListener("mouseenter", function () {
          var t = this.querySelector("img[data-save-list-item-hover]");
          if (t) {
            var e = t.getAttribute("data-save-list-item-hover");
            e && t.setAttribute("src", e);
          }
        }),
          n.addEventListener("mouseleave", function () {
            var t = this.querySelector("img[data-save-list-item]");
            if (t) {
              var e = t.getAttribute("data-save-list-item");
              e && t.setAttribute("src", e);
            }
          });
      }
  }),
  window.addEventListener("load", function () {
    scrollingLink("[data-navigate]"), up_button();
  }),
  window.addEventListener("load", function () {
    var t = document.querySelectorAll(".navigation-list__search");
    if (t)
      for (var e = 0; e < t.length; e++)
        document.body.addEventListener("click", n.bind(t[e])),
          document.body.addEventListener(
            "touchstart",
            n.bind(t[e]),
            !!supportsPassive && {
              passive: !0,
            }
          ),
          t[e].addEventListener("click", function () {
            this.classList.add("search-visible");
            var t = this.closest(".toolbar");
            t && t.classList.add("search-visible");
            var e = this.querySelector("input");
            e && e.focus();
          });

    function n(t) {
      var e = this.closest(".navigation-list__search"),
        n = this.closest(".toolbar");
      t.target === this ||
        (e && t.target === e) ||
        (e && e.contains(t.target)) ||
        (n && n.classList.remove("search-visible"),
        e && e.classList.remove("search-visible"));
    }
  }),
  window.addEventListener("load", function () {
    for (
      var t = ["#sidebar-open", "#sidebar-close", ".sidebar-open"], e = 0;
      e < t.length;
      e++
    ) {
      var n = document.querySelectorAll(t[e]);
      if (n)
        for (var i = 0; i < n.length; i++)
          n[i].addEventListener("click", function () {
            document.body.classList.toggle("sidebar-visible"),
              window.lazyLoadInstance && window.lazyLoadInstance.update();
          });
    }
    optimizedResize.add(function () {
      if (992 <= window.innerWidth) {
        document.body.classList.remove("sidebar-visible");
        var t = document.querySelectorAll(".sidebar");
        if (t)
          for (var e = 0; e < t.length; e++)
            t[e].classList.remove("sidebar-visible");
      }
    });
  }),
  window.addEventListener("load", function () {
    load_iframe("#slot__play-button", ".slot", "frame_on");
  });
var sorting = {};

function successLoadSorting(t, e) {
  sorting.progress && sorting.progress.classList.remove("init");
  try {
    if (((t = JSON.parse(t)), e.insertTo))
      try {
        sorting.generateItems.call(
          Object.assign(e, {
            response: t,
          }),
          1
        );
      } catch (t) {}
  } catch (t) {}
}

function errorLoadSorting(t, e) {
  sorting.progress && sorting.progress.classList.remove("init");
}
(sorting.init = function () {
  if (this.buttons)
    for (var t = 0; t < this.buttons.length; t++)
      this.buttons[t].addEventListener("click", this.load, !1);
}),
  (sorting.testMobile = function () {
    var t = !1;
    return (
      (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
        navigator.userAgent
      ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          navigator.userAgent.substr(0, 4)
        )) &&
        (t = !0),
      t
    );
  }),
  (sorting.load = function () {
    var t = {},
      e = {};
    if (
      ((t.element = this),
      (t.language =
        !!this.getAttribute("data-language") &&
        this.getAttribute("data-language")),
      (t.template =
        !!this.getAttribute("data-template") &&
        this.getAttribute("data-template")),
      (t.scrollTo =
        !!this.getAttribute("data-scroll-to") &&
        document.querySelector(this.getAttribute("data-scroll-to"))),
      (t.scrollToStatus = this.hasAttribute("data-scroll-to")),
      (t.mobile = sorting.testMobile() ? "mobile" : "desktop"),
      (t.args =
        !!this.getAttribute("data-args") && this.getAttribute("data-args")),
      (t.varArgs =
        !!this.getAttribute("data-args-var") &&
        this.getAttribute("data-args-var")),
      (t.itemPattern =
        !!this.getAttribute("data-item-pattern") &&
        document.querySelector(this.getAttribute("data-item-pattern"))),
      (t.insertTo =
        !!this.getAttribute("data-insert-to") &&
        document.querySelector(this.getAttribute("data-insert-to"))),
      (t.createPagination = this.hasAttribute("data-create-pagination")),
      (t.lazy = this.hasAttribute("data-lazy")),
      (e.action = this.getAttribute("data-action")
        ? this.getAttribute("data-action")
        : "sorting"),
      (e.args = t.args),
      t.varArgs && (e.args = JSON.stringify(window[t.varArgs])),
      !t.scrollTo && t.scrollToStatus && (t.scrollTo = t.insertTo),
      (e.template = t.template),
      (e.mobile = t.mobile),
      (e.language = t.language),
      sorting.ajaxactionurl && !this.classList.contains("active"))
    ) {
      if (
        (sorting.progress && sorting.progress.classList.add("init"),
        send_ajax(
          "POST",
          sorting.ajaxactionurl,
          e,
          t,
          successLoadSorting,
          errorLoadSorting
        ),
        sorting.buttons)
      )
        for (var n = 0; n < sorting.buttons.length; n++)
          sorting.buttons[n].classList.remove("active");
      this.classList.add("active");
    }
  }),
  (sorting.generateItems = function (t) {
    if (((this.insertTo.innerHTML = ""), this.response)) {
      if (this.response.items)
        for (
          var e = this.response.postPerPage * (t - 1);
          e <
          Math.min(
            this.response.postPerPage * (t - 1) + this.response.postPerPage,
            +this.response.foundPosts
          );
          e++
        ) {
          var n = this.response.items[e],
            i = {};
          if (
            ((i.title = n.title),
            (i.img = n.img),
            (i.link = n.link),
            (i.reels = n.reels),
            (i.paylines = n.paylines),
            (i.rtp = n.rtp),
            this.itemPattern)
          ) {
            var a = this.itemPattern.cloneNode(!0);
            a.removeAttribute("data-item-patter"), (a.style.display = "");
          }
          if (a) {
            for (param in i) {
              var r = a.querySelector("[data-item-" + param + "]");
              if (r) {
                switch (param) {
                  case "img":
                    var o = document.createElement("picture"),
                      s = document.createElement("source");
                    if (i[param] && "object" == typeof i[param]) {
                      var l = i[param].webp,
                        c = i[param].jp2,
                        u = i[param].default;
                      u &&
                        u.length &&
                        (l && (o = iterateImages(o, l, s)),
                        c && (o = iterateImages(o, c, s)),
                        u && (o = iterateImages(o, u, s)),
                        (r.src = window.transparent_pixel),
                        r.setAttribute("data-original", u[u.length - 1].url),
                        r.parentNode.insertBefore(o, r),
                        o.appendChild(r));
                    } else
                      i[param] &&
                        "string" == typeof i[param] &&
                        ((r.src = window.transparent_pixel),
                        r.setAttribute("data-original", i[param]));
                    break;
                  case "link":
                    r.href = i[param];
                    break;
                  default:
                    (!1 === i[param] && 0 !== i[param]) ||
                      (r.innerHTML = i[param]);
                }
                r.removeAttribute("data-item-" + param);
              }
            }
            this.insertTo.appendChild(a);
          }
        }
      if (
        (this.lazy &&
          window.lazyLoadInstance &&
          window.lazyLoadInstance.update(),
        this.createPagination)
      ) {
        var d = document.createElement("div");
        d.classList.add("pagination-wrapper");
        var f = document.createElement("div");
        if ((f.classList.add("wp-pagenavi"), this.response.itemsTotal)) {
          var p = document.createElement("div");
          p.classList.add("total-post-count"),
            (p.innerHTML = this.response.itemsTotal);
        }
        sorting.createPaginationItems.call(
          Object.assign(this, {
            paginationContainer: f,
          }),
          t || 1
        ),
          d.appendChild(f),
          this.response.itemsTotal && d.appendChild(p),
          this.insertTo.appendChild(d);
      }
    }
  }),
  (sorting.createPaginationItems = function (t) {
    var e = +this.response.maxPage,
      n = this.response.step ? this.response.step : 2;
    if (this.paginationContainer) {
      if (1 != t) {
        var i = document.createElement("div");
        i.classList.add("prev"),
          i.classList.add("page-numbers"),
          i.classList.add("cursor-pointer"),
          (i.innerHTML = this.response.prevMark),
          i.addEventListener("click", sorting.generateItems.bind(this, t - 1)),
          this.scrollTo &&
            i.addEventListener("click", sorting.scrollFunction.bind(this)),
          this.paginationContainer.appendChild(i);
      }
      var a = 1,
        r = 3;
      if (
        (0 < t - n ? (a = t - n) : (n += n + 1 - t),
        t + n <= e
          ? (r = t + n)
          : (a = 0 < t - (t + n - (r = e) + n) ? t - (t + n - e) - n : 1),
        1 < e)
      )
        for (var o = a; o <= r; o++) {
          var s = document.createElement("div");
          s.classList.add("page-numbers"),
            (s.innerHTML = o) == +t
              ? s.classList.add("current")
              : (s.classList.add("cursor-pointer"),
                s.addEventListener(
                  "click",
                  sorting.generateItems.bind(this, o)
                ),
                this.scrollTo &&
                  s.addEventListener(
                    "click",
                    sorting.scrollFunction.bind(this)
                  )),
            this.paginationContainer.appendChild(s);
        }
      if (t != e) {
        var l = document.createElement("div");
        l.classList.add("next"),
          l.classList.add("page-numbers"),
          l.classList.add("cursor-pointer"),
          (l.innerHTML = this.response.nextMark),
          l.addEventListener("click", sorting.generateItems.bind(this, t + 1)),
          this.scrollTo &&
            l.addEventListener("click", sorting.scrollFunction.bind(this)),
          this.paginationContainer.appendChild(l);
      }
    }
  }),
  (sorting.scrollFunction = function () {
    if (this.scrollTo)
      try {
        var t = document.querySelector(".header-nav"),
          e = getCoords(this.scrollTo).top - t.offsetHeight - t.offsetTop;
        window.scrollTo({
          top: e,
          behavior: "smooth",
        });
      } catch (t) {}
  }),
  window.addEventListener("load", function () {
    var t = document.querySelectorAll("[data-sorting]"),
      e = document.querySelector("body>.progress");
    (sorting.buttons = t || !1),
      (sorting.progress = e || !1),
      (sorting.ajaxactionurl = !!window.ajaxactionurl && window.ajaxactionurl),
      sorting.init();
  });
var optionsSlider = {
    items: 4,
    mouseDrag: !0,
    nav: !1,
    fixedWidth: 300,
    loop: !1,
    swipeAngle: 45,
    preventScrollOnTouch: !0,
    speed: 500,
    responsive: {
      320: {
        items: 1,
        fixedWidth: 300,
        center: !1,
      },
      600: {
        items: 2,
        fixedWidth: 300,
        center: !1,
      },
      1280: {
        items: 4,
        fixedWidth: 300,
        center: !1,
      },
    },
  },
  sliders = document.querySelectorAll(".slider-container");
if (sliders && 0 < sliders.length)
  for (i = 0; i < sliders.length; i++) {
    optionsSlider.container = sliders[i];
    var prevAll = sliders[i].parentNode.querySelector(".prev"),
      nextAll = sliders[i].parentNode.querySelector(".next"),
      controlsContainer =
        sliders[i].parentNode.querySelector(".next-prev-button");
    controlsContainer && (optionsSlider.controlsContainer = controlsContainer),
      prevAll && nextAll
        ? ((optionsSlider.prevButton = prevAll),
          (optionsSlider.nextButton = nextAll))
        : (optionsSlider.controls = !1);
    var sliderTAll = tns(optionsSlider);
  }
window.addEventListener("load", function () {
  var t = {
    container: document,
    elements_selector: ".lazy",
    data_src: "original",
    load_delay: 200,
    threshold: 0,
    callback_enter: function (t) {
      if (
        (window.hasOwnProperty("webpSupport") &&
          window.webpSupport &&
          t.classList.add("webp-support"),
        window.hasOwnProperty("jp2Supports") &&
          !window.webpSupport &&
          window.jp2Supports &&
          t.classList.add("jp2-support"),
        t.classList.contains("webp-support") ||
          t.classList.contains("jp2-support") ||
          t.classList.add("default-support"),
        t.hasAttribute("data-save-list-item") &&
          t.setAttribute("src", t.getAttribute("data-save-list-item")),
        "IMG" !== t.tagName)
      ) {
        if (
          window.hasOwnProperty("webpSupport") &&
          window.webpSupport &&
          (!t.hasAttribute("data-bg-webp") ||
            !t.hasAttribute("data-bg-multi-webp")) &&
          (t.hasAttribute("data-bg") || t.hasAttribute("data-bg-multi"))
        ) {
          if (t.hasAttribute("data-bg"))
            (e = t.getAttribute("data-bg")) && (t.style.backgroundImage = e);
          if (t.hasAttribute("data-bg-multi"))
            (e = t.getAttribute("data-bg-multi")) && (t.style.background = e);
        }
        if (
          window.hasOwnProperty("jp2Supports") &&
          !window.webpSupport &&
          window.jp2Supports &&
          (!t.hasAttribute("data-bg-webp") ||
            !t.hasAttribute("data-bg-multi-webp")) &&
          (t.hasAttribute("data-bg") || t.hasAttribute("data-bg-multi"))
        ) {
          var e;
          if (t.hasAttribute("data-bg"))
            (e = t.getAttribute("data-bg")) && (t.style.backgroundImage = e);
          if (t.hasAttribute("data-bg-multi"))
            (e = t.getAttribute("data-bg-multi")) && (t.style.background = e);
        }
      }
    },
    callback_error: function (t) {
      "IMG" === t.tagName && t.setAttribute("src", window.transparent_pixel);
    },
  };
  window.hasOwnProperty("webpSupport") &&
    window.webpSupport &&
    ((t.data_bg = "bg-webp"), (t.data_bg_multi = "bg-multi-webp")),
    window.hasOwnProperty("jp2Supports") &&
      !window.webpSupport &&
      window.jp2Supports &&
      ((t.data_bg = "bg-jp2"), (t.data_bg_multi = "bg-multi-jp2")),
    (window.lazyLoadInstance = new LazyLoad(t));
});
