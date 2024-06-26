function Wc(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const l in r)
        if (l !== 'default' && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i &&
            Object.defineProperty(
              e,
              l,
              i.get ? i : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
  );
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === 'childList')
        for (const o of i.addedNodes)
          o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : l.crossOrigin === 'anonymous'
        ? (i.credentials = 'omit')
        : (i.credentials = 'same-origin'),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function Hc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var ys = { exports: {} },
  pl = {},
  ws = { exports: {} },
  T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lr = Symbol.for('react.element'),
  Qc = Symbol.for('react.portal'),
  Kc = Symbol.for('react.fragment'),
  Yc = Symbol.for('react.strict_mode'),
  Xc = Symbol.for('react.profiler'),
  Gc = Symbol.for('react.provider'),
  Zc = Symbol.for('react.context'),
  Jc = Symbol.for('react.forward_ref'),
  qc = Symbol.for('react.suspense'),
  bc = Symbol.for('react.memo'),
  ef = Symbol.for('react.lazy'),
  tu = Symbol.iterator;
function tf(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (tu && e[tu]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var ks = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ss = Object.assign,
  Es = {};
function dn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Es),
    (this.updater = n || ks);
}
dn.prototype.isReactComponent = {};
dn.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
dn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function xs() {}
xs.prototype = dn.prototype;
function ro(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Es),
    (this.updater = n || ks);
}
var lo = (ro.prototype = new xs());
lo.constructor = ro;
Ss(lo, dn.prototype);
lo.isPureReactComponent = !0;
var nu = Array.isArray,
  Cs = Object.prototype.hasOwnProperty,
  io = { current: null },
  _s = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ps(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = '' + t.key),
    t))
      Cs.call(t, r) && !_s.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: lr,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: io.current,
  };
}
function nf(e, t) {
  return {
    $$typeof: lr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function oo(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === lr;
}
function rf(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ru = /\/+/g;
function Dl(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? rf('' + e.key)
    : t.toString(36);
}
function Rr(e, t, n, r, l) {
  var i = typeof e;
  (i === 'undefined' || i === 'boolean') && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case 'string':
      case 'number':
        o = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case lr:
          case Qc:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === '' ? '.' + Dl(o, 0) : r),
      nu(l)
        ? ((n = ''),
          e != null && (n = e.replace(ru, '$&/') + '/'),
          Rr(l, t, n, '', function (a) {
            return a;
          }))
        : l != null &&
          (oo(l) &&
            (l = nf(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ''
                  : ('' + l.key).replace(ru, '$&/') + '/') +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === '' ? '.' : r + ':'), nu(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + Dl(i, u);
      o += Rr(i, t, n, s, l);
    }
  else if (((s = tf(e)), typeof s == 'function'))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + Dl(i, u++)), (o += Rr(i, t, n, s, l));
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return o;
}
function dr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Rr(e, r, '', '', function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function lf(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ae = { current: null },
  zr = { transition: null },
  of = {
    ReactCurrentDispatcher: ae,
    ReactCurrentBatchConfig: zr,
    ReactCurrentOwner: io,
  };
function Ns() {
  throw Error('act(...) is not supported in production builds of React.');
}
T.Children = {
  map: dr,
  forEach: function (e, t, n) {
    dr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      dr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      dr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!oo(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
T.Component = dn;
T.Fragment = Kc;
T.Profiler = Xc;
T.PureComponent = ro;
T.StrictMode = Yc;
T.Suspense = qc;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = of;
T.act = Ns;
T.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = Ss({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = io.current)),
      t.key !== void 0 && (l = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      Cs.call(t, s) &&
        !_s.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: lr, type: e.type, key: l, ref: i, props: r, _owner: o };
};
T.createContext = function (e) {
  return (
    (e = {
      $$typeof: Zc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Gc, _context: e }),
    (e.Consumer = e)
  );
};
T.createElement = Ps;
T.createFactory = function (e) {
  var t = Ps.bind(null, e);
  return (t.type = e), t;
};
T.createRef = function () {
  return { current: null };
};
T.forwardRef = function (e) {
  return { $$typeof: Jc, render: e };
};
T.isValidElement = oo;
T.lazy = function (e) {
  return { $$typeof: ef, _payload: { _status: -1, _result: e }, _init: lf };
};
T.memo = function (e, t) {
  return { $$typeof: bc, type: e, compare: t === void 0 ? null : t };
};
T.startTransition = function (e) {
  var t = zr.transition;
  zr.transition = {};
  try {
    e();
  } finally {
    zr.transition = t;
  }
};
T.unstable_act = Ns;
T.useCallback = function (e, t) {
  return ae.current.useCallback(e, t);
};
T.useContext = function (e) {
  return ae.current.useContext(e);
};
T.useDebugValue = function () {};
T.useDeferredValue = function (e) {
  return ae.current.useDeferredValue(e);
};
T.useEffect = function (e, t) {
  return ae.current.useEffect(e, t);
};
T.useId = function () {
  return ae.current.useId();
};
T.useImperativeHandle = function (e, t, n) {
  return ae.current.useImperativeHandle(e, t, n);
};
T.useInsertionEffect = function (e, t) {
  return ae.current.useInsertionEffect(e, t);
};
T.useLayoutEffect = function (e, t) {
  return ae.current.useLayoutEffect(e, t);
};
T.useMemo = function (e, t) {
  return ae.current.useMemo(e, t);
};
T.useReducer = function (e, t, n) {
  return ae.current.useReducer(e, t, n);
};
T.useRef = function (e) {
  return ae.current.useRef(e);
};
T.useState = function (e) {
  return ae.current.useState(e);
};
T.useSyncExternalStore = function (e, t, n) {
  return ae.current.useSyncExternalStore(e, t, n);
};
T.useTransition = function () {
  return ae.current.useTransition();
};
T.version = '18.3.1';
ws.exports = T;
var P = ws.exports;
const Ls = Hc(P),
  uf = Wc({ __proto__: null, default: Ls }, [P]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sf = P,
  af = Symbol.for('react.element'),
  cf = Symbol.for('react.fragment'),
  ff = Object.prototype.hasOwnProperty,
  df = sf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  pf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Rs(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) ff.call(t, r) && !pf.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: af,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: df.current,
  };
}
pl.Fragment = cf;
pl.jsx = Rs;
pl.jsxs = Rs;
ys.exports = pl;
var S = ys.exports,
  ui = {},
  zs = { exports: {} },
  ke = {},
  js = { exports: {} },
  Ts = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(_, z) {
    var j = _.length;
    _.push(z);
    e: for (; 0 < j; ) {
      var Q = (j - 1) >>> 1,
        J = _[Q];
      if (0 < l(J, z)) (_[Q] = z), (_[j] = J), (j = Q);
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var z = _[0],
      j = _.pop();
    if (j !== z) {
      _[0] = j;
      e: for (var Q = 0, J = _.length, cr = J >>> 1; Q < cr; ) {
        var St = 2 * (Q + 1) - 1,
          Ol = _[St],
          Et = St + 1,
          fr = _[Et];
        if (0 > l(Ol, j))
          Et < J && 0 > l(fr, Ol)
            ? ((_[Q] = fr), (_[Et] = j), (Q = Et))
            : ((_[Q] = Ol), (_[St] = j), (Q = St));
        else if (Et < J && 0 > l(fr, j)) (_[Q] = fr), (_[Et] = j), (Q = Et);
        else break e;
      }
    }
    return z;
  }
  function l(_, z) {
    var j = _.sortIndex - z.sortIndex;
    return j !== 0 ? j : _.id - z.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var s = [],
    a = [],
    h = 1,
    p = null,
    m = 3,
    g = !1,
    y = !1,
    w = !1,
    x = typeof setTimeout == 'function' ? setTimeout : null,
    f = typeof clearTimeout == 'function' ? clearTimeout : null,
    c = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(_) {
    for (var z = n(a); z !== null; ) {
      if (z.callback === null) r(a);
      else if (z.startTime <= _)
        r(a), (z.sortIndex = z.expirationTime), t(s, z);
      else break;
      z = n(a);
    }
  }
  function v(_) {
    if (((w = !1), d(_), !y))
      if (n(s) !== null) (y = !0), jl(E);
      else {
        var z = n(a);
        z !== null && Tl(v, z.startTime - _);
      }
  }
  function E(_, z) {
    (y = !1), w && ((w = !1), f(R), (R = -1)), (g = !0);
    var j = m;
    try {
      for (
        d(z), p = n(s);
        p !== null && (!(p.expirationTime > z) || (_ && !Le()));

      ) {
        var Q = p.callback;
        if (typeof Q == 'function') {
          (p.callback = null), (m = p.priorityLevel);
          var J = Q(p.expirationTime <= z);
          (z = e.unstable_now()),
            typeof J == 'function' ? (p.callback = J) : p === n(s) && r(s),
            d(z);
        } else r(s);
        p = n(s);
      }
      if (p !== null) var cr = !0;
      else {
        var St = n(a);
        St !== null && Tl(v, St.startTime - z), (cr = !1);
      }
      return cr;
    } finally {
      (p = null), (m = j), (g = !1);
    }
  }
  var N = !1,
    L = null,
    R = -1,
    H = 5,
    O = -1;
  function Le() {
    return !(e.unstable_now() - O < H);
  }
  function vn() {
    if (L !== null) {
      var _ = e.unstable_now();
      O = _;
      var z = !0;
      try {
        z = L(!0, _);
      } finally {
        z ? gn() : ((N = !1), (L = null));
      }
    } else N = !1;
  }
  var gn;
  if (typeof c == 'function')
    gn = function () {
      c(vn);
    };
  else if (typeof MessageChannel < 'u') {
    var eu = new MessageChannel(),
      Vc = eu.port2;
    (eu.port1.onmessage = vn),
      (gn = function () {
        Vc.postMessage(null);
      });
  } else
    gn = function () {
      x(vn, 0);
    };
  function jl(_) {
    (L = _), N || ((N = !0), gn());
  }
  function Tl(_, z) {
    R = x(function () {
      _(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (_) {
      _.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || g || ((y = !0), jl(E));
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (H = 0 < _ ? Math.floor(1e3 / _) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (_) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = m;
      }
      var j = m;
      m = z;
      try {
        return _();
      } finally {
        m = j;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, z) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var j = m;
      m = _;
      try {
        return z();
      } finally {
        m = j;
      }
    }),
    (e.unstable_scheduleCallback = function (_, z, j) {
      var Q = e.unstable_now();
      switch (
        (typeof j == 'object' && j !== null
          ? ((j = j.delay), (j = typeof j == 'number' && 0 < j ? Q + j : Q))
          : (j = Q),
        _)
      ) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return (
        (J = j + J),
        (_ = {
          id: h++,
          callback: z,
          priorityLevel: _,
          startTime: j,
          expirationTime: J,
          sortIndex: -1,
        }),
        j > Q
          ? ((_.sortIndex = j),
            t(a, _),
            n(s) === null &&
              _ === n(a) &&
              (w ? (f(R), (R = -1)) : (w = !0), Tl(v, j - Q)))
          : ((_.sortIndex = J), t(s, _), y || g || ((y = !0), jl(E))),
        _
      );
    }),
    (e.unstable_shouldYield = Le),
    (e.unstable_wrapCallback = function (_) {
      var z = m;
      return function () {
        var j = m;
        m = z;
        try {
          return _.apply(this, arguments);
        } finally {
          m = j;
        }
      };
    });
})(Ts);
js.exports = Ts;
var hf = js.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mf = P,
  we = hf;
function k(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var Os = new Set(),
  $n = {};
function Mt(e, t) {
  ln(e, t), ln(e + 'Capture', t);
}
function ln(e, t) {
  for ($n[e] = t, e = 0; e < t.length; e++) Os.add(t[e]);
}
var Ke = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  si = Object.prototype.hasOwnProperty,
  vf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  lu = {},
  iu = {};
function gf(e) {
  return si.call(iu, e)
    ? !0
    : si.call(lu, e)
    ? !1
    : vf.test(e)
    ? (iu[e] = !0)
    : ((lu[e] = !0), !1);
}
function yf(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function wf(e, t, n, r) {
  if (t === null || typeof t > 'u' || yf(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ce(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var ne = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    ne[e] = new ce(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  ne[t] = new ce(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    ne[e] = new ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  ne[e] = new ce(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  ne[e] = new ce(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  ne[e] = new ce(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  ne[e] = new ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var uo = /[\-:]([a-z])/g;
function so(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(uo, so);
    ne[t] = new ce(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(uo, so);
    ne[t] = new ce(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(uo, so);
  ne[t] = new ce(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new ce(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ao(e, t, n, r) {
  var l = ne.hasOwnProperty(t) ? ne[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (wf(t, n, l, r) && (n = null),
    r || l === null
      ? gf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ze = mf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  pr = Symbol.for('react.element'),
  Bt = Symbol.for('react.portal'),
  At = Symbol.for('react.fragment'),
  co = Symbol.for('react.strict_mode'),
  ai = Symbol.for('react.profiler'),
  Ds = Symbol.for('react.provider'),
  Ms = Symbol.for('react.context'),
  fo = Symbol.for('react.forward_ref'),
  ci = Symbol.for('react.suspense'),
  fi = Symbol.for('react.suspense_list'),
  po = Symbol.for('react.memo'),
  et = Symbol.for('react.lazy'),
  Is = Symbol.for('react.offscreen'),
  ou = Symbol.iterator;
function yn(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (ou && e[ou]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var V = Object.assign,
  Ml;
function Pn(e) {
  if (Ml === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ml = (t && t[1]) || '';
    }
  return (
    `
` +
    Ml +
    e
  );
}
var Il = !1;
function Fl(e, t) {
  if (!e || Il) return '';
  Il = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == 'string') {
      for (
        var l = a.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var s =
                  `
` + l[o].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    s.includes('<anonymous>') &&
                    (s = s.replace('<anonymous>', e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (Il = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? Pn(e) : '';
}
function kf(e) {
  switch (e.tag) {
    case 5:
      return Pn(e.type);
    case 16:
      return Pn('Lazy');
    case 13:
      return Pn('Suspense');
    case 19:
      return Pn('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Fl(e.type, !1)), e;
    case 11:
      return (e = Fl(e.type.render, !1)), e;
    case 1:
      return (e = Fl(e.type, !0)), e;
    default:
      return '';
  }
}
function di(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case At:
      return 'Fragment';
    case Bt:
      return 'Portal';
    case ai:
      return 'Profiler';
    case co:
      return 'StrictMode';
    case ci:
      return 'Suspense';
    case fi:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Ms:
        return (e.displayName || 'Context') + '.Consumer';
      case Ds:
        return (e._context.displayName || 'Context') + '.Provider';
      case fo:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case po:
        return (
          (t = e.displayName || null), t !== null ? t : di(e.type) || 'Memo'
        );
      case et:
        (t = e._payload), (e = e._init);
        try {
          return di(e(t));
        } catch {}
    }
  return null;
}
function Sf(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return di(t);
    case 8:
      return t === co ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function vt(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function Fs(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function Ef(e) {
  var t = Fs(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = '' + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = '' + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function hr(e) {
  e._valueTracker || (e._valueTracker = Ef(e));
}
function Us(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = Fs(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ar(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function pi(e, t) {
  var n = t.checked;
  return V({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function uu(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = vt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function $s(e, t) {
  (t = t.checked), t != null && ao(e, 'checked', t, !1);
}
function hi(e, t) {
  $s(e, t);
  var n = vt(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? mi(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && mi(e, t.type, vt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function su(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function mi(e, t, n) {
  (t !== 'number' || Ar(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Nn = Array.isArray;
function qt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + vt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function vi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return V({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function au(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (Nn(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: vt(n) };
}
function Bs(e, t) {
  var n = vt(t.value),
    r = vt(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function cu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function As(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function gi(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? As(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var mr,
  Vs = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        mr = mr || document.createElement('div'),
          mr.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = mr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Bn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var zn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  xf = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(zn).forEach(function (e) {
  xf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (zn[t] = zn[e]);
  });
});
function Ws(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (zn.hasOwnProperty(e) && zn[e])
    ? ('' + t).trim()
    : t + 'px';
}
function Hs(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        l = Ws(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Cf = V(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function yi(e, t) {
  if (t) {
    if (Cf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(k(62));
  }
}
function wi(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var ki = null;
function ho(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Si = null,
  bt = null,
  en = null;
function fu(e) {
  if ((e = ur(e))) {
    if (typeof Si != 'function') throw Error(k(280));
    var t = e.stateNode;
    t && ((t = yl(t)), Si(e.stateNode, e.type, t));
  }
}
function Qs(e) {
  bt ? (en ? en.push(e) : (en = [e])) : (bt = e);
}
function Ks() {
  if (bt) {
    var e = bt,
      t = en;
    if (((en = bt = null), fu(e), t)) for (e = 0; e < t.length; e++) fu(t[e]);
  }
}
function Ys(e, t) {
  return e(t);
}
function Xs() {}
var Ul = !1;
function Gs(e, t, n) {
  if (Ul) return e(t, n);
  Ul = !0;
  try {
    return Ys(e, t, n);
  } finally {
    (Ul = !1), (bt !== null || en !== null) && (Xs(), Ks());
  }
}
function An(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = yl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(k(231, t, typeof n));
  return n;
}
var Ei = !1;
if (Ke)
  try {
    var wn = {};
    Object.defineProperty(wn, 'passive', {
      get: function () {
        Ei = !0;
      },
    }),
      window.addEventListener('test', wn, wn),
      window.removeEventListener('test', wn, wn);
  } catch {
    Ei = !1;
  }
function _f(e, t, n, r, l, i, o, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (h) {
    this.onError(h);
  }
}
var jn = !1,
  Vr = null,
  Wr = !1,
  xi = null,
  Pf = {
    onError: function (e) {
      (jn = !0), (Vr = e);
    },
  };
function Nf(e, t, n, r, l, i, o, u, s) {
  (jn = !1), (Vr = null), _f.apply(Pf, arguments);
}
function Lf(e, t, n, r, l, i, o, u, s) {
  if ((Nf.apply(this, arguments), jn)) {
    if (jn) {
      var a = Vr;
      (jn = !1), (Vr = null);
    } else throw Error(k(198));
    Wr || ((Wr = !0), (xi = a));
  }
}
function It(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Zs(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function du(e) {
  if (It(e) !== e) throw Error(k(188));
}
function Rf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = It(e)), t === null)) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return du(l), e;
        if (i === r) return du(l), t;
        i = i.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function Js(e) {
  return (e = Rf(e)), e !== null ? qs(e) : null;
}
function qs(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = qs(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var bs = we.unstable_scheduleCallback,
  pu = we.unstable_cancelCallback,
  zf = we.unstable_shouldYield,
  jf = we.unstable_requestPaint,
  K = we.unstable_now,
  Tf = we.unstable_getCurrentPriorityLevel,
  mo = we.unstable_ImmediatePriority,
  ea = we.unstable_UserBlockingPriority,
  Hr = we.unstable_NormalPriority,
  Of = we.unstable_LowPriority,
  ta = we.unstable_IdlePriority,
  hl = null,
  $e = null;
function Df(e) {
  if ($e && typeof $e.onCommitFiberRoot == 'function')
    try {
      $e.onCommitFiberRoot(hl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Oe = Math.clz32 ? Math.clz32 : Ff,
  Mf = Math.log,
  If = Math.LN2;
function Ff(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Mf(e) / If) | 0)) | 0;
}
var vr = 64,
  gr = 4194304;
function Ln(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Qr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = Ln(u)) : ((i &= o), i !== 0 && (r = Ln(i)));
  } else (o = n & ~l), o !== 0 ? (r = Ln(o)) : i !== 0 && (r = Ln(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Oe(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Uf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function $f(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Oe(i),
      u = 1 << o,
      s = l[o];
    s === -1
      ? (!(u & n) || u & r) && (l[o] = Uf(u, t))
      : s <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function Ci(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function na() {
  var e = vr;
  return (vr <<= 1), !(vr & 4194240) && (vr = 64), e;
}
function $l(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ir(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Oe(t)),
    (e[t] = n);
}
function Bf(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Oe(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function vo(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Oe(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var M = 0;
function ra(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var la,
  go,
  ia,
  oa,
  ua,
  _i = !1,
  yr = [],
  ut = null,
  st = null,
  at = null,
  Vn = new Map(),
  Wn = new Map(),
  nt = [],
  Af =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function hu(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      ut = null;
      break;
    case 'dragenter':
    case 'dragleave':
      st = null;
      break;
    case 'mouseover':
    case 'mouseout':
      at = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Vn.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Wn.delete(t.pointerId);
  }
}
function kn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = ur(t)), t !== null && go(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Vf(e, t, n, r, l) {
  switch (t) {
    case 'focusin':
      return (ut = kn(ut, e, t, n, r, l)), !0;
    case 'dragenter':
      return (st = kn(st, e, t, n, r, l)), !0;
    case 'mouseover':
      return (at = kn(at, e, t, n, r, l)), !0;
    case 'pointerover':
      var i = l.pointerId;
      return Vn.set(i, kn(Vn.get(i) || null, e, t, n, r, l)), !0;
    case 'gotpointercapture':
      return (
        (i = l.pointerId), Wn.set(i, kn(Wn.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function sa(e) {
  var t = _t(e.target);
  if (t !== null) {
    var n = It(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Zs(n)), t !== null)) {
          (e.blockedOn = t),
            ua(e.priority, function () {
              ia(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function jr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Pi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ki = r), n.target.dispatchEvent(r), (ki = null);
    } else return (t = ur(n)), t !== null && go(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function mu(e, t, n) {
  jr(e) && n.delete(t);
}
function Wf() {
  (_i = !1),
    ut !== null && jr(ut) && (ut = null),
    st !== null && jr(st) && (st = null),
    at !== null && jr(at) && (at = null),
    Vn.forEach(mu),
    Wn.forEach(mu);
}
function Sn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    _i ||
      ((_i = !0),
      we.unstable_scheduleCallback(we.unstable_NormalPriority, Wf)));
}
function Hn(e) {
  function t(l) {
    return Sn(l, e);
  }
  if (0 < yr.length) {
    Sn(yr[0], e);
    for (var n = 1; n < yr.length; n++) {
      var r = yr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ut !== null && Sn(ut, e),
      st !== null && Sn(st, e),
      at !== null && Sn(at, e),
      Vn.forEach(t),
      Wn.forEach(t),
      n = 0;
    n < nt.length;
    n++
  )
    (r = nt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < nt.length && ((n = nt[0]), n.blockedOn === null); )
    sa(n), n.blockedOn === null && nt.shift();
}
var tn = Ze.ReactCurrentBatchConfig,
  Kr = !0;
function Hf(e, t, n, r) {
  var l = M,
    i = tn.transition;
  tn.transition = null;
  try {
    (M = 1), yo(e, t, n, r);
  } finally {
    (M = l), (tn.transition = i);
  }
}
function Qf(e, t, n, r) {
  var l = M,
    i = tn.transition;
  tn.transition = null;
  try {
    (M = 4), yo(e, t, n, r);
  } finally {
    (M = l), (tn.transition = i);
  }
}
function yo(e, t, n, r) {
  if (Kr) {
    var l = Pi(e, t, n, r);
    if (l === null) Gl(e, t, r, Yr, n), hu(e, r);
    else if (Vf(l, e, t, n, r)) r.stopPropagation();
    else if ((hu(e, r), t & 4 && -1 < Af.indexOf(e))) {
      for (; l !== null; ) {
        var i = ur(l);
        if (
          (i !== null && la(i),
          (i = Pi(e, t, n, r)),
          i === null && Gl(e, t, r, Yr, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Gl(e, t, r, null, n);
  }
}
var Yr = null;
function Pi(e, t, n, r) {
  if (((Yr = null), (e = ho(r)), (e = _t(e)), e !== null))
    if (((t = It(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Zs(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Yr = e), null;
}
function aa(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (Tf()) {
        case mo:
          return 1;
        case ea:
          return 4;
        case Hr:
        case Of:
          return 16;
        case ta:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var lt = null,
  wo = null,
  Tr = null;
function ca() {
  if (Tr) return Tr;
  var e,
    t = wo,
    n = t.length,
    r,
    l = 'value' in lt ? lt.value : lt.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Tr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Or(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function wr() {
  return !0;
}
function vu() {
  return !1;
}
function Se(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? wr
        : vu),
      (this.isPropagationStopped = vu),
      this
    );
  }
  return (
    V(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = wr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = wr));
      },
      persist: function () {},
      isPersistent: wr,
    }),
    t
  );
}
var pn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ko = Se(pn),
  or = V({}, pn, { view: 0, detail: 0 }),
  Kf = Se(or),
  Bl,
  Al,
  En,
  ml = V({}, or, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: So,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== En &&
            (En && e.type === 'mousemove'
              ? ((Bl = e.screenX - En.screenX), (Al = e.screenY - En.screenY))
              : (Al = Bl = 0),
            (En = e)),
          Bl);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Al;
    },
  }),
  gu = Se(ml),
  Yf = V({}, ml, { dataTransfer: 0 }),
  Xf = Se(Yf),
  Gf = V({}, or, { relatedTarget: 0 }),
  Vl = Se(Gf),
  Zf = V({}, pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Jf = Se(Zf),
  qf = V({}, pn, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  bf = Se(qf),
  ed = V({}, pn, { data: 0 }),
  yu = Se(ed),
  td = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  nd = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  rd = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function ld(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = rd[e]) ? !!t[e] : !1;
}
function So() {
  return ld;
}
var id = V({}, or, {
    key: function (e) {
      if (e.key) {
        var t = td[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Or(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? nd[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: So,
    charCode: function (e) {
      return e.type === 'keypress' ? Or(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Or(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  od = Se(id),
  ud = V({}, ml, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  wu = Se(ud),
  sd = V({}, or, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: So,
  }),
  ad = Se(sd),
  cd = V({}, pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  fd = Se(cd),
  dd = V({}, ml, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  pd = Se(dd),
  hd = [9, 13, 27, 32],
  Eo = Ke && 'CompositionEvent' in window,
  Tn = null;
Ke && 'documentMode' in document && (Tn = document.documentMode);
var md = Ke && 'TextEvent' in window && !Tn,
  fa = Ke && (!Eo || (Tn && 8 < Tn && 11 >= Tn)),
  ku = ' ',
  Su = !1;
function da(e, t) {
  switch (e) {
    case 'keyup':
      return hd.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function pa(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Vt = !1;
function vd(e, t) {
  switch (e) {
    case 'compositionend':
      return pa(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Su = !0), ku);
    case 'textInput':
      return (e = t.data), e === ku && Su ? null : e;
    default:
      return null;
  }
}
function gd(e, t) {
  if (Vt)
    return e === 'compositionend' || (!Eo && da(e, t))
      ? ((e = ca()), (Tr = wo = lt = null), (Vt = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return fa && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var yd = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Eu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!yd[e.type] : t === 'textarea';
}
function ha(e, t, n, r) {
  Qs(r),
    (t = Xr(t, 'onChange')),
    0 < t.length &&
      ((n = new ko('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var On = null,
  Qn = null;
function wd(e) {
  _a(e, 0);
}
function vl(e) {
  var t = Qt(e);
  if (Us(t)) return e;
}
function kd(e, t) {
  if (e === 'change') return t;
}
var ma = !1;
if (Ke) {
  var Wl;
  if (Ke) {
    var Hl = 'oninput' in document;
    if (!Hl) {
      var xu = document.createElement('div');
      xu.setAttribute('oninput', 'return;'),
        (Hl = typeof xu.oninput == 'function');
    }
    Wl = Hl;
  } else Wl = !1;
  ma = Wl && (!document.documentMode || 9 < document.documentMode);
}
function Cu() {
  On && (On.detachEvent('onpropertychange', va), (Qn = On = null));
}
function va(e) {
  if (e.propertyName === 'value' && vl(Qn)) {
    var t = [];
    ha(t, Qn, e, ho(e)), Gs(wd, t);
  }
}
function Sd(e, t, n) {
  e === 'focusin'
    ? (Cu(), (On = t), (Qn = n), On.attachEvent('onpropertychange', va))
    : e === 'focusout' && Cu();
}
function Ed(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return vl(Qn);
}
function xd(e, t) {
  if (e === 'click') return vl(t);
}
function Cd(e, t) {
  if (e === 'input' || e === 'change') return vl(t);
}
function _d(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Me = typeof Object.is == 'function' ? Object.is : _d;
function Kn(e, t) {
  if (Me(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!si.call(t, l) || !Me(e[l], t[l])) return !1;
  }
  return !0;
}
function _u(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Pu(e, t) {
  var n = _u(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = _u(n);
  }
}
function ga(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? ga(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function ya() {
  for (var e = window, t = Ar(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ar(e.document);
  }
  return t;
}
function xo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function Pd(e) {
  var t = ya(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    ga(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && xo(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = Pu(n, i));
        var o = Pu(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Nd = Ke && 'documentMode' in document && 11 >= document.documentMode,
  Wt = null,
  Ni = null,
  Dn = null,
  Li = !1;
function Nu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Li ||
    Wt == null ||
    Wt !== Ar(r) ||
    ((r = Wt),
    'selectionStart' in r && xo(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Dn && Kn(Dn, r)) ||
      ((Dn = r),
      (r = Xr(Ni, 'onSelect')),
      0 < r.length &&
        ((t = new ko('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Wt))));
}
function kr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var Ht = {
    animationend: kr('Animation', 'AnimationEnd'),
    animationiteration: kr('Animation', 'AnimationIteration'),
    animationstart: kr('Animation', 'AnimationStart'),
    transitionend: kr('Transition', 'TransitionEnd'),
  },
  Ql = {},
  wa = {};
Ke &&
  ((wa = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Ht.animationend.animation,
    delete Ht.animationiteration.animation,
    delete Ht.animationstart.animation),
  'TransitionEvent' in window || delete Ht.transitionend.transition);
function gl(e) {
  if (Ql[e]) return Ql[e];
  if (!Ht[e]) return e;
  var t = Ht[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in wa) return (Ql[e] = t[n]);
  return e;
}
var ka = gl('animationend'),
  Sa = gl('animationiteration'),
  Ea = gl('animationstart'),
  xa = gl('transitionend'),
  Ca = new Map(),
  Lu =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function yt(e, t) {
  Ca.set(e, t), Mt(t, [e]);
}
for (var Kl = 0; Kl < Lu.length; Kl++) {
  var Yl = Lu[Kl],
    Ld = Yl.toLowerCase(),
    Rd = Yl[0].toUpperCase() + Yl.slice(1);
  yt(Ld, 'on' + Rd);
}
yt(ka, 'onAnimationEnd');
yt(Sa, 'onAnimationIteration');
yt(Ea, 'onAnimationStart');
yt('dblclick', 'onDoubleClick');
yt('focusin', 'onFocus');
yt('focusout', 'onBlur');
yt(xa, 'onTransitionEnd');
ln('onMouseEnter', ['mouseout', 'mouseover']);
ln('onMouseLeave', ['mouseout', 'mouseover']);
ln('onPointerEnter', ['pointerout', 'pointerover']);
ln('onPointerLeave', ['pointerout', 'pointerover']);
Mt(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
Mt(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
Mt('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Mt(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
Mt(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
Mt(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var Rn =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  zd = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Rn));
function Ru(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), Lf(r, t, void 0, e), (e.currentTarget = null);
}
function _a(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
          Ru(l, u, a), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          Ru(l, u, a), (i = s);
        }
    }
  }
  if (Wr) throw ((e = xi), (Wr = !1), (xi = null), e);
}
function F(e, t) {
  var n = t[Oi];
  n === void 0 && (n = t[Oi] = new Set());
  var r = e + '__bubble';
  n.has(r) || (Pa(t, e, 2, !1), n.add(r));
}
function Xl(e, t, n) {
  var r = 0;
  t && (r |= 4), Pa(n, e, r, t);
}
var Sr = '_reactListening' + Math.random().toString(36).slice(2);
function Yn(e) {
  if (!e[Sr]) {
    (e[Sr] = !0),
      Os.forEach(function (n) {
        n !== 'selectionchange' && (zd.has(n) || Xl(n, !1, e), Xl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Sr] || ((t[Sr] = !0), Xl('selectionchange', !1, t));
  }
}
function Pa(e, t, n, r) {
  switch (aa(t)) {
    case 1:
      var l = Hf;
      break;
    case 4:
      l = Qf;
      break;
    default:
      l = yo;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Ei ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Gl(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = _t(u)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Gs(function () {
    var a = i,
      h = ho(n),
      p = [];
    e: {
      var m = Ca.get(e);
      if (m !== void 0) {
        var g = ko,
          y = e;
        switch (e) {
          case 'keypress':
            if (Or(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            g = od;
            break;
          case 'focusin':
            (y = 'focus'), (g = Vl);
            break;
          case 'focusout':
            (y = 'blur'), (g = Vl);
            break;
          case 'beforeblur':
          case 'afterblur':
            g = Vl;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            g = gu;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            g = Xf;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            g = ad;
            break;
          case ka:
          case Sa:
          case Ea:
            g = Jf;
            break;
          case xa:
            g = fd;
            break;
          case 'scroll':
            g = Kf;
            break;
          case 'wheel':
            g = pd;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            g = bf;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            g = wu;
        }
        var w = (t & 4) !== 0,
          x = !w && e === 'scroll',
          f = w ? (m !== null ? m + 'Capture' : null) : m;
        w = [];
        for (var c = a, d; c !== null; ) {
          d = c;
          var v = d.stateNode;
          if (
            (d.tag === 5 &&
              v !== null &&
              ((d = v),
              f !== null && ((v = An(c, f)), v != null && w.push(Xn(c, v, d)))),
            x)
          )
            break;
          c = c.return;
        }
        0 < w.length &&
          ((m = new g(m, y, null, n, h)), p.push({ event: m, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === 'mouseover' || e === 'pointerover'),
          (g = e === 'mouseout' || e === 'pointerout'),
          m &&
            n !== ki &&
            (y = n.relatedTarget || n.fromElement) &&
            (_t(y) || y[Ye]))
        )
          break e;
        if (
          (g || m) &&
          ((m =
            h.window === h
              ? h
              : (m = h.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = a),
              (y = y ? _t(y) : null),
              y !== null &&
                ((x = It(y)), y !== x || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((g = null), (y = a)),
          g !== y)
        ) {
          if (
            ((w = gu),
            (v = 'onMouseLeave'),
            (f = 'onMouseEnter'),
            (c = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((w = wu),
              (v = 'onPointerLeave'),
              (f = 'onPointerEnter'),
              (c = 'pointer')),
            (x = g == null ? m : Qt(g)),
            (d = y == null ? m : Qt(y)),
            (m = new w(v, c + 'leave', g, n, h)),
            (m.target = x),
            (m.relatedTarget = d),
            (v = null),
            _t(h) === a &&
              ((w = new w(f, c + 'enter', y, n, h)),
              (w.target = d),
              (w.relatedTarget = x),
              (v = w)),
            (x = v),
            g && y)
          )
            t: {
              for (w = g, f = y, c = 0, d = w; d; d = $t(d)) c++;
              for (d = 0, v = f; v; v = $t(v)) d++;
              for (; 0 < c - d; ) (w = $t(w)), c--;
              for (; 0 < d - c; ) (f = $t(f)), d--;
              for (; c--; ) {
                if (w === f || (f !== null && w === f.alternate)) break t;
                (w = $t(w)), (f = $t(f));
              }
              w = null;
            }
          else w = null;
          g !== null && zu(p, m, g, w, !1),
            y !== null && x !== null && zu(p, x, y, w, !0);
        }
      }
      e: {
        if (
          ((m = a ? Qt(a) : window),
          (g = m.nodeName && m.nodeName.toLowerCase()),
          g === 'select' || (g === 'input' && m.type === 'file'))
        )
          var E = kd;
        else if (Eu(m))
          if (ma) E = Cd;
          else {
            E = Ed;
            var N = Sd;
          }
        else
          (g = m.nodeName) &&
            g.toLowerCase() === 'input' &&
            (m.type === 'checkbox' || m.type === 'radio') &&
            (E = xd);
        if (E && (E = E(e, a))) {
          ha(p, E, n, h);
          break e;
        }
        N && N(e, m, a),
          e === 'focusout' &&
            (N = m._wrapperState) &&
            N.controlled &&
            m.type === 'number' &&
            mi(m, 'number', m.value);
      }
      switch (((N = a ? Qt(a) : window), e)) {
        case 'focusin':
          (Eu(N) || N.contentEditable === 'true') &&
            ((Wt = N), (Ni = a), (Dn = null));
          break;
        case 'focusout':
          Dn = Ni = Wt = null;
          break;
        case 'mousedown':
          Li = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Li = !1), Nu(p, n, h);
          break;
        case 'selectionchange':
          if (Nd) break;
        case 'keydown':
        case 'keyup':
          Nu(p, n, h);
      }
      var L;
      if (Eo)
        e: {
          switch (e) {
            case 'compositionstart':
              var R = 'onCompositionStart';
              break e;
            case 'compositionend':
              R = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              R = 'onCompositionUpdate';
              break e;
          }
          R = void 0;
        }
      else
        Vt
          ? da(e, n) && (R = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (R = 'onCompositionStart');
      R &&
        (fa &&
          n.locale !== 'ko' &&
          (Vt || R !== 'onCompositionStart'
            ? R === 'onCompositionEnd' && Vt && (L = ca())
            : ((lt = h),
              (wo = 'value' in lt ? lt.value : lt.textContent),
              (Vt = !0))),
        (N = Xr(a, R)),
        0 < N.length &&
          ((R = new yu(R, e, null, n, h)),
          p.push({ event: R, listeners: N }),
          L ? (R.data = L) : ((L = pa(n)), L !== null && (R.data = L)))),
        (L = md ? vd(e, n) : gd(e, n)) &&
          ((a = Xr(a, 'onBeforeInput')),
          0 < a.length &&
            ((h = new yu('onBeforeInput', 'beforeinput', null, n, h)),
            p.push({ event: h, listeners: a }),
            (h.data = L)));
    }
    _a(p, t);
  });
}
function Xn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Xr(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = An(e, n)),
      i != null && r.unshift(Xn(e, i, l)),
      (i = An(e, t)),
      i != null && r.push(Xn(e, i, l))),
      (e = e.return);
  }
  return r;
}
function $t(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function zu(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      l
        ? ((s = An(n, i)), s != null && o.unshift(Xn(n, s, u)))
        : l || ((s = An(n, i)), s != null && o.push(Xn(n, s, u)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var jd = /\r\n?/g,
  Td = /\u0000|\uFFFD/g;
function ju(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      jd,
      `
`
    )
    .replace(Td, '');
}
function Er(e, t, n) {
  if (((t = ju(t)), ju(e) !== t && n)) throw Error(k(425));
}
function Gr() {}
var Ri = null,
  zi = null;
function ji(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ti = typeof setTimeout == 'function' ? setTimeout : void 0,
  Od = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Tu = typeof Promise == 'function' ? Promise : void 0,
  Dd =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Tu < 'u'
      ? function (e) {
          return Tu.resolve(null).then(e).catch(Md);
        }
      : Ti;
function Md(e) {
  setTimeout(function () {
    throw e;
  });
}
function Zl(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(l), Hn(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = l;
  } while (n);
  Hn(t);
}
function ct(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function Ou(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var hn = Math.random().toString(36).slice(2),
  Ue = '__reactFiber$' + hn,
  Gn = '__reactProps$' + hn,
  Ye = '__reactContainer$' + hn,
  Oi = '__reactEvents$' + hn,
  Id = '__reactListeners$' + hn,
  Fd = '__reactHandles$' + hn;
function _t(e) {
  var t = e[Ue];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ye] || n[Ue])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ou(e); e !== null; ) {
          if ((n = e[Ue])) return n;
          e = Ou(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ur(e) {
  return (
    (e = e[Ue] || e[Ye]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Qt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function yl(e) {
  return e[Gn] || null;
}
var Di = [],
  Kt = -1;
function wt(e) {
  return { current: e };
}
function U(e) {
  0 > Kt || ((e.current = Di[Kt]), (Di[Kt] = null), Kt--);
}
function I(e, t) {
  Kt++, (Di[Kt] = e.current), (e.current = t);
}
var gt = {},
  oe = wt(gt),
  pe = wt(!1),
  zt = gt;
function on(e, t) {
  var n = e.type.contextTypes;
  if (!n) return gt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function he(e) {
  return (e = e.childContextTypes), e != null;
}
function Zr() {
  U(pe), U(oe);
}
function Du(e, t, n) {
  if (oe.current !== gt) throw Error(k(168));
  I(oe, t), I(pe, n);
}
function Na(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(k(108, Sf(e) || 'Unknown', l));
  return V({}, n, r);
}
function Jr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || gt),
    (zt = oe.current),
    I(oe, e),
    I(pe, pe.current),
    !0
  );
}
function Mu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n
    ? ((e = Na(e, t, zt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      U(pe),
      U(oe),
      I(oe, e))
    : U(pe),
    I(pe, n);
}
var Ve = null,
  wl = !1,
  Jl = !1;
function La(e) {
  Ve === null ? (Ve = [e]) : Ve.push(e);
}
function Ud(e) {
  (wl = !0), La(e);
}
function kt() {
  if (!Jl && Ve !== null) {
    Jl = !0;
    var e = 0,
      t = M;
    try {
      var n = Ve;
      for (M = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ve = null), (wl = !1);
    } catch (l) {
      throw (Ve !== null && (Ve = Ve.slice(e + 1)), bs(mo, kt), l);
    } finally {
      (M = t), (Jl = !1);
    }
  }
  return null;
}
var Yt = [],
  Xt = 0,
  qr = null,
  br = 0,
  Ee = [],
  xe = 0,
  jt = null,
  We = 1,
  He = '';
function xt(e, t) {
  (Yt[Xt++] = br), (Yt[Xt++] = qr), (qr = e), (br = t);
}
function Ra(e, t, n) {
  (Ee[xe++] = We), (Ee[xe++] = He), (Ee[xe++] = jt), (jt = e);
  var r = We;
  e = He;
  var l = 32 - Oe(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Oe(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (We = (1 << (32 - Oe(t) + l)) | (n << l) | r),
      (He = i + e);
  } else (We = (1 << i) | (n << l) | r), (He = e);
}
function Co(e) {
  e.return !== null && (xt(e, 1), Ra(e, 1, 0));
}
function _o(e) {
  for (; e === qr; )
    (qr = Yt[--Xt]), (Yt[Xt] = null), (br = Yt[--Xt]), (Yt[Xt] = null);
  for (; e === jt; )
    (jt = Ee[--xe]),
      (Ee[xe] = null),
      (He = Ee[--xe]),
      (Ee[xe] = null),
      (We = Ee[--xe]),
      (Ee[xe] = null);
}
var ye = null,
  ge = null,
  $ = !1,
  Te = null;
function za(e, t) {
  var n = Ce(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Iu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ye = e), (ge = ct(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ye = e), (ge = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = jt !== null ? { id: We, overflow: He } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ce(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ye = e),
            (ge = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Mi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ii(e) {
  if ($) {
    var t = ge;
    if (t) {
      var n = t;
      if (!Iu(e, t)) {
        if (Mi(e)) throw Error(k(418));
        t = ct(n.nextSibling);
        var r = ye;
        t && Iu(e, t)
          ? za(r, n)
          : ((e.flags = (e.flags & -4097) | 2), ($ = !1), (ye = e));
      }
    } else {
      if (Mi(e)) throw Error(k(418));
      (e.flags = (e.flags & -4097) | 2), ($ = !1), (ye = e);
    }
  }
}
function Fu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ye = e;
}
function xr(e) {
  if (e !== ye) return !1;
  if (!$) return Fu(e), ($ = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !ji(e.type, e.memoizedProps))),
    t && (t = ge))
  ) {
    if (Mi(e)) throw (ja(), Error(k(418)));
    for (; t; ) za(e, t), (t = ct(t.nextSibling));
  }
  if ((Fu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              ge = ct(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      ge = null;
    }
  } else ge = ye ? ct(e.stateNode.nextSibling) : null;
  return !0;
}
function ja() {
  for (var e = ge; e; ) e = ct(e.nextSibling);
}
function un() {
  (ge = ye = null), ($ = !1);
}
function Po(e) {
  Te === null ? (Te = [e]) : Te.push(e);
}
var $d = Ze.ReactCurrentBatchConfig;
function xn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var l = r,
        i = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != 'string') throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function Cr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      k(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function Uu(e) {
  var t = e._init;
  return t(e._payload);
}
function Ta(e) {
  function t(f, c) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [c]), (f.flags |= 16)) : d.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function l(f, c) {
    return (f = ht(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, c, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < c ? ((f.flags |= 2), c) : d)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, d, v) {
    return c === null || c.tag !== 6
      ? ((c = li(d, f.mode, v)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function s(f, c, d, v) {
    var E = d.type;
    return E === At
      ? h(f, c, d.props.children, v, d.key)
      : c !== null &&
        (c.elementType === E ||
          (typeof E == 'object' &&
            E !== null &&
            E.$$typeof === et &&
            Uu(E) === c.type))
      ? ((v = l(c, d.props)), (v.ref = xn(f, c, d)), (v.return = f), v)
      : ((v = Br(d.type, d.key, d.props, null, f.mode, v)),
        (v.ref = xn(f, c, d)),
        (v.return = f),
        v);
  }
  function a(f, c, d, v) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== d.containerInfo ||
      c.stateNode.implementation !== d.implementation
      ? ((c = ii(d, f.mode, v)), (c.return = f), c)
      : ((c = l(c, d.children || [])), (c.return = f), c);
  }
  function h(f, c, d, v, E) {
    return c === null || c.tag !== 7
      ? ((c = Rt(d, f.mode, v, E)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function p(f, c, d) {
    if ((typeof c == 'string' && c !== '') || typeof c == 'number')
      return (c = li('' + c, f.mode, d)), (c.return = f), c;
    if (typeof c == 'object' && c !== null) {
      switch (c.$$typeof) {
        case pr:
          return (
            (d = Br(c.type, c.key, c.props, null, f.mode, d)),
            (d.ref = xn(f, null, c)),
            (d.return = f),
            d
          );
        case Bt:
          return (c = ii(c, f.mode, d)), (c.return = f), c;
        case et:
          var v = c._init;
          return p(f, v(c._payload), d);
      }
      if (Nn(c) || yn(c))
        return (c = Rt(c, f.mode, d, null)), (c.return = f), c;
      Cr(f, c);
    }
    return null;
  }
  function m(f, c, d, v) {
    var E = c !== null ? c.key : null;
    if ((typeof d == 'string' && d !== '') || typeof d == 'number')
      return E !== null ? null : u(f, c, '' + d, v);
    if (typeof d == 'object' && d !== null) {
      switch (d.$$typeof) {
        case pr:
          return d.key === E ? s(f, c, d, v) : null;
        case Bt:
          return d.key === E ? a(f, c, d, v) : null;
        case et:
          return (E = d._init), m(f, c, E(d._payload), v);
      }
      if (Nn(d) || yn(d)) return E !== null ? null : h(f, c, d, v, null);
      Cr(f, d);
    }
    return null;
  }
  function g(f, c, d, v, E) {
    if ((typeof v == 'string' && v !== '') || typeof v == 'number')
      return (f = f.get(d) || null), u(c, f, '' + v, E);
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case pr:
          return (f = f.get(v.key === null ? d : v.key) || null), s(c, f, v, E);
        case Bt:
          return (f = f.get(v.key === null ? d : v.key) || null), a(c, f, v, E);
        case et:
          var N = v._init;
          return g(f, c, d, N(v._payload), E);
      }
      if (Nn(v) || yn(v)) return (f = f.get(d) || null), h(c, f, v, E, null);
      Cr(c, v);
    }
    return null;
  }
  function y(f, c, d, v) {
    for (
      var E = null, N = null, L = c, R = (c = 0), H = null;
      L !== null && R < d.length;
      R++
    ) {
      L.index > R ? ((H = L), (L = null)) : (H = L.sibling);
      var O = m(f, L, d[R], v);
      if (O === null) {
        L === null && (L = H);
        break;
      }
      e && L && O.alternate === null && t(f, L),
        (c = i(O, c, R)),
        N === null ? (E = O) : (N.sibling = O),
        (N = O),
        (L = H);
    }
    if (R === d.length) return n(f, L), $ && xt(f, R), E;
    if (L === null) {
      for (; R < d.length; R++)
        (L = p(f, d[R], v)),
          L !== null &&
            ((c = i(L, c, R)), N === null ? (E = L) : (N.sibling = L), (N = L));
      return $ && xt(f, R), E;
    }
    for (L = r(f, L); R < d.length; R++)
      (H = g(L, f, R, d[R], v)),
        H !== null &&
          (e && H.alternate !== null && L.delete(H.key === null ? R : H.key),
          (c = i(H, c, R)),
          N === null ? (E = H) : (N.sibling = H),
          (N = H));
    return (
      e &&
        L.forEach(function (Le) {
          return t(f, Le);
        }),
      $ && xt(f, R),
      E
    );
  }
  function w(f, c, d, v) {
    var E = yn(d);
    if (typeof E != 'function') throw Error(k(150));
    if (((d = E.call(d)), d == null)) throw Error(k(151));
    for (
      var N = (E = null), L = c, R = (c = 0), H = null, O = d.next();
      L !== null && !O.done;
      R++, O = d.next()
    ) {
      L.index > R ? ((H = L), (L = null)) : (H = L.sibling);
      var Le = m(f, L, O.value, v);
      if (Le === null) {
        L === null && (L = H);
        break;
      }
      e && L && Le.alternate === null && t(f, L),
        (c = i(Le, c, R)),
        N === null ? (E = Le) : (N.sibling = Le),
        (N = Le),
        (L = H);
    }
    if (O.done) return n(f, L), $ && xt(f, R), E;
    if (L === null) {
      for (; !O.done; R++, O = d.next())
        (O = p(f, O.value, v)),
          O !== null &&
            ((c = i(O, c, R)), N === null ? (E = O) : (N.sibling = O), (N = O));
      return $ && xt(f, R), E;
    }
    for (L = r(f, L); !O.done; R++, O = d.next())
      (O = g(L, f, R, O.value, v)),
        O !== null &&
          (e && O.alternate !== null && L.delete(O.key === null ? R : O.key),
          (c = i(O, c, R)),
          N === null ? (E = O) : (N.sibling = O),
          (N = O));
    return (
      e &&
        L.forEach(function (vn) {
          return t(f, vn);
        }),
      $ && xt(f, R),
      E
    );
  }
  function x(f, c, d, v) {
    if (
      (typeof d == 'object' &&
        d !== null &&
        d.type === At &&
        d.key === null &&
        (d = d.props.children),
      typeof d == 'object' && d !== null)
    ) {
      switch (d.$$typeof) {
        case pr:
          e: {
            for (var E = d.key, N = c; N !== null; ) {
              if (N.key === E) {
                if (((E = d.type), E === At)) {
                  if (N.tag === 7) {
                    n(f, N.sibling),
                      (c = l(N, d.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  N.elementType === E ||
                  (typeof E == 'object' &&
                    E !== null &&
                    E.$$typeof === et &&
                    Uu(E) === N.type)
                ) {
                  n(f, N.sibling),
                    (c = l(N, d.props)),
                    (c.ref = xn(f, N, d)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, N);
                break;
              } else t(f, N);
              N = N.sibling;
            }
            d.type === At
              ? ((c = Rt(d.props.children, f.mode, v, d.key)),
                (c.return = f),
                (f = c))
              : ((v = Br(d.type, d.key, d.props, null, f.mode, v)),
                (v.ref = xn(f, c, d)),
                (v.return = f),
                (f = v));
          }
          return o(f);
        case Bt:
          e: {
            for (N = d.key; c !== null; ) {
              if (c.key === N)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === d.containerInfo &&
                  c.stateNode.implementation === d.implementation
                ) {
                  n(f, c.sibling),
                    (c = l(c, d.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = ii(d, f.mode, v)), (c.return = f), (f = c);
          }
          return o(f);
        case et:
          return (N = d._init), x(f, c, N(d._payload), v);
      }
      if (Nn(d)) return y(f, c, d, v);
      if (yn(d)) return w(f, c, d, v);
      Cr(f, d);
    }
    return (typeof d == 'string' && d !== '') || typeof d == 'number'
      ? ((d = '' + d),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = l(c, d)), (c.return = f), (f = c))
          : (n(f, c), (c = li(d, f.mode, v)), (c.return = f), (f = c)),
        o(f))
      : n(f, c);
  }
  return x;
}
var sn = Ta(!0),
  Oa = Ta(!1),
  el = wt(null),
  tl = null,
  Gt = null,
  No = null;
function Lo() {
  No = Gt = tl = null;
}
function Ro(e) {
  var t = el.current;
  U(el), (e._currentValue = t);
}
function Fi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function nn(e, t) {
  (tl = e),
    (No = Gt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (de = !0), (e.firstContext = null));
}
function Pe(e) {
  var t = e._currentValue;
  if (No !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Gt === null)) {
      if (tl === null) throw Error(k(308));
      (Gt = e), (tl.dependencies = { lanes: 0, firstContext: e });
    } else Gt = Gt.next = e;
  return t;
}
var Pt = null;
function zo(e) {
  Pt === null ? (Pt = [e]) : Pt.push(e);
}
function Da(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), zo(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Xe(e, r)
  );
}
function Xe(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var tt = !1;
function jo(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ma(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Qe(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ft(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), D & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Xe(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), zo(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Xe(e, n)
  );
}
function Dr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), vo(e, n);
  }
}
function $u(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function nl(e, t, n, r) {
  var l = e.updateQueue;
  tt = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), o === null ? (i = a) : (o.next = a), (o = s);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (u = h.lastBaseUpdate),
      u !== o &&
        (u === null ? (h.firstBaseUpdate = a) : (u.next = a),
        (h.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var p = l.baseState;
    (o = 0), (h = a = s = null), (u = i);
    do {
      var m = u.lane,
        g = u.eventTime;
      if ((r & m) === m) {
        h !== null &&
          (h = h.next =
            {
              eventTime: g,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var y = e,
            w = u;
          switch (((m = t), (g = n), w.tag)) {
            case 1:
              if (((y = w.payload), typeof y == 'function')) {
                p = y.call(g, p, m);
                break e;
              }
              p = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = w.payload),
                (m = typeof y == 'function' ? y.call(g, p, m) : y),
                m == null)
              )
                break e;
              p = V({}, p, m);
              break e;
            case 2:
              tt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [u]) : m.push(u));
      } else
        (g = {
          eventTime: g,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          h === null ? ((a = h = g), (s = p)) : (h = h.next = g),
          (o |= m);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (m = u),
          (u = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (h === null && (s = p),
      (l.baseState = s),
      (l.firstBaseUpdate = a),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (Ot |= o), (e.lanes = o), (e.memoizedState = p);
  }
}
function Bu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != 'function'))
          throw Error(k(191, l));
        l.call(r);
      }
    }
}
var sr = {},
  Be = wt(sr),
  Zn = wt(sr),
  Jn = wt(sr);
function Nt(e) {
  if (e === sr) throw Error(k(174));
  return e;
}
function To(e, t) {
  switch ((I(Jn, t), I(Zn, e), I(Be, sr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : gi(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = gi(t, e));
  }
  U(Be), I(Be, t);
}
function an() {
  U(Be), U(Zn), U(Jn);
}
function Ia(e) {
  Nt(Jn.current);
  var t = Nt(Be.current),
    n = gi(t, e.type);
  t !== n && (I(Zn, e), I(Be, n));
}
function Oo(e) {
  Zn.current === e && (U(Be), U(Zn));
}
var B = wt(0);
function rl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ql = [];
function Do() {
  for (var e = 0; e < ql.length; e++)
    ql[e]._workInProgressVersionPrimary = null;
  ql.length = 0;
}
var Mr = Ze.ReactCurrentDispatcher,
  bl = Ze.ReactCurrentBatchConfig,
  Tt = 0,
  A = null,
  G = null,
  q = null,
  ll = !1,
  Mn = !1,
  qn = 0,
  Bd = 0;
function re() {
  throw Error(k(321));
}
function Mo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Me(e[n], t[n])) return !1;
  return !0;
}
function Io(e, t, n, r, l, i) {
  if (
    ((Tt = i),
    (A = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Mr.current = e === null || e.memoizedState === null ? Hd : Qd),
    (e = n(r, l)),
    Mn)
  ) {
    i = 0;
    do {
      if (((Mn = !1), (qn = 0), 25 <= i)) throw Error(k(301));
      (i += 1),
        (q = G = null),
        (t.updateQueue = null),
        (Mr.current = Kd),
        (e = n(r, l));
    } while (Mn);
  }
  if (
    ((Mr.current = il),
    (t = G !== null && G.next !== null),
    (Tt = 0),
    (q = G = A = null),
    (ll = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function Fo() {
  var e = qn !== 0;
  return (qn = 0), e;
}
function Fe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return q === null ? (A.memoizedState = q = e) : (q = q.next = e), q;
}
function Ne() {
  if (G === null) {
    var e = A.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = G.next;
  var t = q === null ? A.memoizedState : q.next;
  if (t !== null) (q = t), (G = e);
  else {
    if (e === null) throw Error(k(310));
    (G = e),
      (e = {
        memoizedState: G.memoizedState,
        baseState: G.baseState,
        baseQueue: G.baseQueue,
        queue: G.queue,
        next: null,
      }),
      q === null ? (A.memoizedState = q = e) : (q = q.next = e);
  }
  return q;
}
function bn(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function ei(e) {
  var t = Ne(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = G,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      s = null,
      a = i;
    do {
      var h = a.lane;
      if ((Tt & h) === h)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var p = {
          lane: h,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        s === null ? ((u = s = p), (o = r)) : (s = s.next = p),
          (A.lanes |= h),
          (Ot |= h);
      }
      a = a.next;
    } while (a !== null && a !== i);
    s === null ? (o = r) : (s.next = u),
      Me(r, t.memoizedState) || (de = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (A.lanes |= i), (Ot |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ti(e) {
  var t = Ne(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    Me(i, t.memoizedState) || (de = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Fa() {}
function Ua(e, t) {
  var n = A,
    r = Ne(),
    l = t(),
    i = !Me(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (de = !0)),
    (r = r.queue),
    Uo(Aa.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (q !== null && q.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      er(9, Ba.bind(null, n, r, l, t), void 0, null),
      b === null)
    )
      throw Error(k(349));
    Tt & 30 || $a(n, t, l);
  }
  return l;
}
function $a(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = A.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (A.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Ba(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Va(t) && Wa(e);
}
function Aa(e, t, n) {
  return n(function () {
    Va(t) && Wa(e);
  });
}
function Va(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Me(e, n);
  } catch {
    return !0;
  }
}
function Wa(e) {
  var t = Xe(e, 1);
  t !== null && De(t, e, 1, -1);
}
function Au(e) {
  var t = Fe();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: bn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Wd.bind(null, A, e)),
    [t.memoizedState, e]
  );
}
function er(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = A.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (A.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Ha() {
  return Ne().memoizedState;
}
function Ir(e, t, n, r) {
  var l = Fe();
  (A.flags |= e),
    (l.memoizedState = er(1 | t, n, void 0, r === void 0 ? null : r));
}
function kl(e, t, n, r) {
  var l = Ne();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (G !== null) {
    var o = G.memoizedState;
    if (((i = o.destroy), r !== null && Mo(r, o.deps))) {
      l.memoizedState = er(t, n, i, r);
      return;
    }
  }
  (A.flags |= e), (l.memoizedState = er(1 | t, n, i, r));
}
function Vu(e, t) {
  return Ir(8390656, 8, e, t);
}
function Uo(e, t) {
  return kl(2048, 8, e, t);
}
function Qa(e, t) {
  return kl(4, 2, e, t);
}
function Ka(e, t) {
  return kl(4, 4, e, t);
}
function Ya(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Xa(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), kl(4, 4, Ya.bind(null, t, e), n)
  );
}
function $o() {}
function Ga(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Mo(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Za(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Mo(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ja(e, t, n) {
  return Tt & 21
    ? (Me(n, t) || ((n = na()), (A.lanes |= n), (Ot |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (de = !0)), (e.memoizedState = n));
}
function Ad(e, t) {
  var n = M;
  (M = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = bl.transition;
  bl.transition = {};
  try {
    e(!1), t();
  } finally {
    (M = n), (bl.transition = r);
  }
}
function qa() {
  return Ne().memoizedState;
}
function Vd(e, t, n) {
  var r = pt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ba(e))
  )
    ec(t, n);
  else if (((n = Da(e, t, n, r)), n !== null)) {
    var l = se();
    De(n, e, r, l), tc(n, t, r);
  }
}
function Wd(e, t, n) {
  var r = pt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ba(e)) ec(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Me(u, o))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), zo(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Da(e, t, l, r)),
      n !== null && ((l = se()), De(n, e, r, l), tc(n, t, r));
  }
}
function ba(e) {
  var t = e.alternate;
  return e === A || (t !== null && t === A);
}
function ec(e, t) {
  Mn = ll = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function tc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), vo(e, n);
  }
}
var il = {
    readContext: Pe,
    useCallback: re,
    useContext: re,
    useEffect: re,
    useImperativeHandle: re,
    useInsertionEffect: re,
    useLayoutEffect: re,
    useMemo: re,
    useReducer: re,
    useRef: re,
    useState: re,
    useDebugValue: re,
    useDeferredValue: re,
    useTransition: re,
    useMutableSource: re,
    useSyncExternalStore: re,
    useId: re,
    unstable_isNewReconciler: !1,
  },
  Hd = {
    readContext: Pe,
    useCallback: function (e, t) {
      return (Fe().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Pe,
    useEffect: Vu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ir(4194308, 4, Ya.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ir(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ir(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Fe();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Fe();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Vd.bind(null, A, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Fe();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Au,
    useDebugValue: $o,
    useDeferredValue: function (e) {
      return (Fe().memoizedState = e);
    },
    useTransition: function () {
      var e = Au(!1),
        t = e[0];
      return (e = Ad.bind(null, e[1])), (Fe().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = A,
        l = Fe();
      if ($) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), b === null)) throw Error(k(349));
        Tt & 30 || $a(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        Vu(Aa.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        er(9, Ba.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Fe(),
        t = b.identifierPrefix;
      if ($) {
        var n = He,
          r = We;
        (n = (r & ~(1 << (32 - Oe(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = qn++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = Bd++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Qd = {
    readContext: Pe,
    useCallback: Ga,
    useContext: Pe,
    useEffect: Uo,
    useImperativeHandle: Xa,
    useInsertionEffect: Qa,
    useLayoutEffect: Ka,
    useMemo: Za,
    useReducer: ei,
    useRef: Ha,
    useState: function () {
      return ei(bn);
    },
    useDebugValue: $o,
    useDeferredValue: function (e) {
      var t = Ne();
      return Ja(t, G.memoizedState, e);
    },
    useTransition: function () {
      var e = ei(bn)[0],
        t = Ne().memoizedState;
      return [e, t];
    },
    useMutableSource: Fa,
    useSyncExternalStore: Ua,
    useId: qa,
    unstable_isNewReconciler: !1,
  },
  Kd = {
    readContext: Pe,
    useCallback: Ga,
    useContext: Pe,
    useEffect: Uo,
    useImperativeHandle: Xa,
    useInsertionEffect: Qa,
    useLayoutEffect: Ka,
    useMemo: Za,
    useReducer: ti,
    useRef: Ha,
    useState: function () {
      return ti(bn);
    },
    useDebugValue: $o,
    useDeferredValue: function (e) {
      var t = Ne();
      return G === null ? (t.memoizedState = e) : Ja(t, G.memoizedState, e);
    },
    useTransition: function () {
      var e = ti(bn)[0],
        t = Ne().memoizedState;
      return [e, t];
    },
    useMutableSource: Fa,
    useSyncExternalStore: Ua,
    useId: qa,
    unstable_isNewReconciler: !1,
  };
function ze(e, t) {
  if (e && e.defaultProps) {
    (t = V({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ui(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : V({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Sl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? It(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      l = pt(e),
      i = Qe(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = ft(e, i, l)),
      t !== null && (De(t, e, l, r), Dr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      l = pt(e),
      i = Qe(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = ft(e, i, l)),
      t !== null && (De(t, e, l, r), Dr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = se(),
      r = pt(e),
      l = Qe(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = ft(e, l, r)),
      t !== null && (De(t, e, r, n), Dr(t, e, r));
  },
};
function Wu(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Kn(n, r) || !Kn(l, i)
      : !0
  );
}
function nc(e, t, n) {
  var r = !1,
    l = gt,
    i = t.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = Pe(i))
      : ((l = he(t) ? zt : oe.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? on(e, l) : gt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Sl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Hu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Sl.enqueueReplaceState(t, t.state, null);
}
function $i(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), jo(e);
  var i = t.contextType;
  typeof i == 'object' && i !== null
    ? (l.context = Pe(i))
    : ((i = he(t) ? zt : oe.current), (l.context = on(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (Ui(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function' ||
      (typeof l.UNSAFE_componentWillMount != 'function' &&
        typeof l.componentWillMount != 'function') ||
      ((t = l.state),
      typeof l.componentWillMount == 'function' && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == 'function' &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Sl.enqueueReplaceState(l, l.state, null),
      nl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
}
function cn(e, t) {
  try {
    var n = '',
      r = t;
    do (n += kf(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ni(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Bi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Yd = typeof WeakMap == 'function' ? WeakMap : Map;
function rc(e, t, n) {
  (n = Qe(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ul || ((ul = !0), (Zi = r)), Bi(e, t);
    }),
    n
  );
}
function lc(e, t, n) {
  (n = Qe(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Bi(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        Bi(e, t),
          typeof r != 'function' &&
            (dt === null ? (dt = new Set([this])) : dt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : '',
        });
      }),
    n
  );
}
function Qu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Yd();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = up.bind(null, e, t, n)), t.then(e, e));
}
function Ku(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Yu(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Qe(-1, 1)), (t.tag = 2), ft(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Xd = Ze.ReactCurrentOwner,
  de = !1;
function ue(e, t, n, r) {
  t.child = e === null ? Oa(t, null, n, r) : sn(t, e.child, n, r);
}
function Xu(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    nn(t, l),
    (r = Io(e, t, n, r, i, l)),
    (n = Fo()),
    e !== null && !de
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ge(e, t, l))
      : ($ && n && Co(t), (t.flags |= 1), ue(e, t, r, l), t.child)
  );
}
function Gu(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !Yo(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), ic(e, t, i, r, l))
      : ((e = Br(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Kn), n(o, r) && e.ref === t.ref)
    )
      return Ge(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = ht(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function ic(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Kn(i, r) && e.ref === t.ref)
      if (((de = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (de = !0);
      else return (t.lanes = e.lanes), Ge(e, t, l);
  }
  return Ai(e, t, n, r, l);
}
function oc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        I(Jt, ve),
        (ve |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          I(Jt, ve),
          (ve |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        I(Jt, ve),
        (ve |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      I(Jt, ve),
      (ve |= r);
  return ue(e, t, l, n), t.child;
}
function uc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ai(e, t, n, r, l) {
  var i = he(n) ? zt : oe.current;
  return (
    (i = on(t, i)),
    nn(t, l),
    (n = Io(e, t, n, r, i, l)),
    (r = Fo()),
    e !== null && !de
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ge(e, t, l))
      : ($ && r && Co(t), (t.flags |= 1), ue(e, t, n, l), t.child)
  );
}
function Zu(e, t, n, r, l) {
  if (he(n)) {
    var i = !0;
    Jr(t);
  } else i = !1;
  if ((nn(t, l), t.stateNode === null))
    Fr(e, t), nc(t, n, r), $i(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var s = o.context,
      a = n.contextType;
    typeof a == 'object' && a !== null
      ? (a = Pe(a))
      : ((a = he(n) ? zt : oe.current), (a = on(t, a)));
    var h = n.getDerivedStateFromProps,
      p =
        typeof h == 'function' ||
        typeof o.getSnapshotBeforeUpdate == 'function';
    p ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((u !== r || s !== a) && Hu(t, o, r, a)),
      (tt = !1);
    var m = t.memoizedState;
    (o.state = m),
      nl(t, r, o, l),
      (s = t.memoizedState),
      u !== r || m !== s || pe.current || tt
        ? (typeof h == 'function' && (Ui(t, n, h, r), (s = t.memoizedState)),
          (u = tt || Wu(t, n, u, r, m, s, a))
            ? (p ||
                (typeof o.UNSAFE_componentWillMount != 'function' &&
                  typeof o.componentWillMount != 'function') ||
                (typeof o.componentWillMount == 'function' &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == 'function' &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = a),
          (r = u))
        : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Ma(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : ze(t.type, u)),
      (o.props = a),
      (p = t.pendingProps),
      (m = o.context),
      (s = n.contextType),
      typeof s == 'object' && s !== null
        ? (s = Pe(s))
        : ((s = he(n) ? zt : oe.current), (s = on(t, s)));
    var g = n.getDerivedStateFromProps;
    (h =
      typeof g == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function') ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((u !== p || m !== s) && Hu(t, o, r, s)),
      (tt = !1),
      (m = t.memoizedState),
      (o.state = m),
      nl(t, r, o, l);
    var y = t.memoizedState;
    u !== p || m !== y || pe.current || tt
      ? (typeof g == 'function' && (Ui(t, n, g, r), (y = t.memoizedState)),
        (a = tt || Wu(t, n, a, r, m, y, s) || !1)
          ? (h ||
              (typeof o.UNSAFE_componentWillUpdate != 'function' &&
                typeof o.componentWillUpdate != 'function') ||
              (typeof o.componentWillUpdate == 'function' &&
                o.componentWillUpdate(r, y, s),
              typeof o.UNSAFE_componentWillUpdate == 'function' &&
                o.UNSAFE_componentWillUpdate(r, y, s)),
            typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != 'function' ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != 'function' ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (o.props = r),
        (o.state = y),
        (o.context = s),
        (r = a))
      : (typeof o.componentDidUpdate != 'function' ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != 'function' ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Vi(e, t, n, r, i, l);
}
function Vi(e, t, n, r, l, i) {
  uc(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Mu(t, n, !1), Ge(e, t, i);
  (r = t.stateNode), (Xd.current = t);
  var u =
    o && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = sn(t, e.child, null, i)), (t.child = sn(t, null, u, i)))
      : ue(e, t, u, i),
    (t.memoizedState = r.state),
    l && Mu(t, n, !0),
    t.child
  );
}
function sc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Du(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Du(e, t.context, !1),
    To(e, t.containerInfo);
}
function Ju(e, t, n, r, l) {
  return un(), Po(l), (t.flags |= 256), ue(e, t, n, r), t.child;
}
var Wi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Hi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ac(e, t, n) {
  var r = t.pendingProps,
    l = B.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    I(B, l & 1),
    e === null)
  )
    return (
      Ii(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: 'hidden', children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = Cl(o, r, 0, null)),
              (e = Rt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Hi(n)),
              (t.memoizedState = Wi),
              e)
            : Bo(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return Gd(e, t, o, r, u, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: 'hidden', children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = ht(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = ht(u, i)) : ((i = Rt(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Hi(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Wi),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = ht(i, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Bo(e, t) {
  return (
    (t = Cl({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function _r(e, t, n, r) {
  return (
    r !== null && Po(r),
    sn(t, e.child, null, n),
    (e = Bo(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Gd(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ni(Error(k(422)))), _r(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = Cl({ mode: 'visible', children: r.children }, l, 0, null)),
        (i = Rt(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && sn(t, e.child, null, o),
        (t.child.memoizedState = Hi(o)),
        (t.memoizedState = Wi),
        i);
  if (!(t.mode & 1)) return _r(e, t, o, null);
  if (l.data === '$!') {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(k(419))), (r = ni(i, r, void 0)), _r(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), de || u)) {
    if (((r = b), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Xe(e, l), De(r, e, l, -1));
    }
    return Ko(), (r = ni(Error(k(421)))), _r(e, t, o, r);
  }
  return l.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = sp.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (ge = ct(l.nextSibling)),
      (ye = t),
      ($ = !0),
      (Te = null),
      e !== null &&
        ((Ee[xe++] = We),
        (Ee[xe++] = He),
        (Ee[xe++] = jt),
        (We = e.id),
        (He = e.overflow),
        (jt = t)),
      (t = Bo(t, r.children)),
      (t.flags |= 4096),
      t);
}
function qu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Fi(e.return, t, n);
}
function ri(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function cc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ue(e, t, r.children, n), (r = B.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && qu(e, n, t);
        else if (e.tag === 19) qu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((I(B, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case 'forwards':
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && rl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          ri(t, !1, l, n, i);
        break;
      case 'backwards':
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && rl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        ri(t, !0, n, null, i);
        break;
      case 'together':
        ri(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Fr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ge(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ot |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ht(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = ht(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Zd(e, t, n) {
  switch (t.tag) {
    case 3:
      sc(t), un();
      break;
    case 5:
      Ia(t);
      break;
    case 1:
      he(t.type) && Jr(t);
      break;
    case 4:
      To(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      I(el, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (I(B, B.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? ac(e, t, n)
          : (I(B, B.current & 1),
            (e = Ge(e, t, n)),
            e !== null ? e.sibling : null);
      I(B, B.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return cc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        I(B, B.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), oc(e, t, n);
  }
  return Ge(e, t, n);
}
var fc, Qi, dc, pc;
fc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Qi = function () {};
dc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Nt(Be.current);
    var i = null;
    switch (n) {
      case 'input':
        (l = pi(e, l)), (r = pi(e, r)), (i = []);
        break;
      case 'select':
        (l = V({}, l, { value: void 0 })),
          (r = V({}, r, { value: void 0 })),
          (i = []);
        break;
      case 'textarea':
        (l = vi(e, l)), (r = vi(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Gr);
    }
    yi(n, r);
    var o;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === 'style') {
          var u = l[a];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
        } else
          a !== 'dangerouslySetInnerHTML' &&
            a !== 'children' &&
            a !== 'suppressContentEditableWarning' &&
            a !== 'suppressHydrationWarning' &&
            a !== 'autoFocus' &&
            ($n.hasOwnProperty(a)
              ? i || (i = [])
              : (i = i || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((u = l != null ? l[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === 'style')
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ''));
            for (o in s)
              s.hasOwnProperty(o) &&
                u[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]));
          } else n || (i || (i = []), i.push(a, n)), (n = s);
        else
          a === 'dangerouslySetInnerHTML'
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(a, s))
            : a === 'children'
            ? (typeof s != 'string' && typeof s != 'number') ||
              (i = i || []).push(a, '' + s)
            : a !== 'suppressContentEditableWarning' &&
              a !== 'suppressHydrationWarning' &&
              ($n.hasOwnProperty(a)
                ? (s != null && a === 'onScroll' && F('scroll', e),
                  i || u === s || (i = []))
                : (i = i || []).push(a, s));
    }
    n && (i = i || []).push('style', n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
pc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Cn(e, t) {
  if (!$)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Jd(e, t, n) {
  var r = t.pendingProps;
  switch ((_o(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return le(t), null;
    case 1:
      return he(t.type) && Zr(), le(t), null;
    case 3:
      return (
        (r = t.stateNode),
        an(),
        U(pe),
        U(oe),
        Do(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (xr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Te !== null && (bi(Te), (Te = null)))),
        Qi(e, t),
        le(t),
        null
      );
    case 5:
      Oo(t);
      var l = Nt(Jn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        dc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return le(t), null;
        }
        if (((e = Nt(Be.current)), xr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Ue] = t), (r[Gn] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              F('cancel', r), F('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              F('load', r);
              break;
            case 'video':
            case 'audio':
              for (l = 0; l < Rn.length; l++) F(Rn[l], r);
              break;
            case 'source':
              F('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              F('error', r), F('load', r);
              break;
            case 'details':
              F('toggle', r);
              break;
            case 'input':
              uu(r, i), F('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                F('invalid', r);
              break;
            case 'textarea':
              au(r, i), F('invalid', r);
          }
          yi(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === 'children'
                ? typeof u == 'string'
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Er(r.textContent, u, e),
                    (l = ['children', u]))
                  : typeof u == 'number' &&
                    r.textContent !== '' + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Er(r.textContent, u, e),
                    (l = ['children', '' + u]))
                : $n.hasOwnProperty(o) &&
                  u != null &&
                  o === 'onScroll' &&
                  F('scroll', r);
            }
          switch (n) {
            case 'input':
              hr(r), su(r, i, !0);
              break;
            case 'textarea':
              hr(r), cu(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = Gr);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = As(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = o.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === 'select' &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Ue] = t),
            (e[Gn] = r),
            fc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = wi(n, r)), n)) {
              case 'dialog':
                F('cancel', e), F('close', e), (l = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                F('load', e), (l = r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < Rn.length; l++) F(Rn[l], e);
                l = r;
                break;
              case 'source':
                F('error', e), (l = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                F('error', e), F('load', e), (l = r);
                break;
              case 'details':
                F('toggle', e), (l = r);
                break;
              case 'input':
                uu(e, r), (l = pi(e, r)), F('invalid', e);
                break;
              case 'option':
                l = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = V({}, r, { value: void 0 })),
                  F('invalid', e);
                break;
              case 'textarea':
                au(e, r), (l = vi(e, r)), F('invalid', e);
                break;
              default:
                l = r;
            }
            yi(n, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === 'style'
                  ? Hs(e, s)
                  : i === 'dangerouslySetInnerHTML'
                  ? ((s = s ? s.__html : void 0), s != null && Vs(e, s))
                  : i === 'children'
                  ? typeof s == 'string'
                    ? (n !== 'textarea' || s !== '') && Bn(e, s)
                    : typeof s == 'number' && Bn(e, '' + s)
                  : i !== 'suppressContentEditableWarning' &&
                    i !== 'suppressHydrationWarning' &&
                    i !== 'autoFocus' &&
                    ($n.hasOwnProperty(i)
                      ? s != null && i === 'onScroll' && F('scroll', e)
                      : s != null && ao(e, i, s, o));
              }
            switch (n) {
              case 'input':
                hr(e), su(e, r, !1);
                break;
              case 'textarea':
                hr(e), cu(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + vt(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? qt(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      qt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == 'function' && (e.onclick = Gr);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return le(t), null;
    case 6:
      if (e && t.stateNode != null) pc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(k(166));
        if (((n = Nt(Jn.current)), Nt(Be.current), xr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ue] = t),
            (i = r.nodeValue !== n) && ((e = ye), e !== null))
          )
            switch (e.tag) {
              case 3:
                Er(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Er(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ue] = t),
            (t.stateNode = r);
      }
      return le(t), null;
    case 13:
      if (
        (U(B),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if ($ && ge !== null && t.mode & 1 && !(t.flags & 128))
          ja(), un(), (t.flags |= 98560), (i = !1);
        else if (((i = xr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(k(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(k(317));
            i[Ue] = t;
          } else
            un(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          le(t), (i = !1);
        } else Te !== null && (bi(Te), (Te = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || B.current & 1 ? Z === 0 && (Z = 3) : Ko())),
          t.updateQueue !== null && (t.flags |= 4),
          le(t),
          null);
    case 4:
      return (
        an(), Qi(e, t), e === null && Yn(t.stateNode.containerInfo), le(t), null
      );
    case 10:
      return Ro(t.type._context), le(t), null;
    case 17:
      return he(t.type) && Zr(), le(t), null;
    case 19:
      if ((U(B), (i = t.memoizedState), i === null)) return le(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) Cn(i, !1);
        else {
          if (Z !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = rl(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Cn(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return I(B, (B.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            K() > fn &&
            ((t.flags |= 128), (r = !0), Cn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = rl(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Cn(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !o.alternate && !$)
            )
              return le(t), null;
          } else
            2 * K() - i.renderingStartTime > fn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Cn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = K()),
          (t.sibling = null),
          (n = B.current),
          I(B, r ? (n & 1) | 2 : n & 1),
          t)
        : (le(t), null);
    case 22:
    case 23:
      return (
        Qo(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ve & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function qd(e, t) {
  switch ((_o(t), t.tag)) {
    case 1:
      return (
        he(t.type) && Zr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        an(),
        U(pe),
        U(oe),
        Do(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Oo(t), null;
    case 13:
      if ((U(B), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        un();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return U(B), null;
    case 4:
      return an(), null;
    case 10:
      return Ro(t.type._context), null;
    case 22:
    case 23:
      return Qo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Pr = !1,
  ie = !1,
  bd = typeof WeakSet == 'function' ? WeakSet : Set,
  C = null;
function Zt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        W(e, t, r);
      }
    else n.current = null;
}
function Ki(e, t, n) {
  try {
    n();
  } catch (r) {
    W(e, t, r);
  }
}
var bu = !1;
function ep(e, t) {
  if (((Ri = Kr), (e = ya()), xo(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            s = -1,
            a = 0,
            h = 0,
            p = e,
            m = null;
          t: for (;;) {
            for (
              var g;
              p !== n || (l !== 0 && p.nodeType !== 3) || (u = o + l),
                p !== i || (r !== 0 && p.nodeType !== 3) || (s = o + r),
                p.nodeType === 3 && (o += p.nodeValue.length),
                (g = p.firstChild) !== null;

            )
              (m = p), (p = g);
            for (;;) {
              if (p === e) break t;
              if (
                (m === n && ++a === l && (u = o),
                m === i && ++h === r && (s = o),
                (g = p.nextSibling) !== null)
              )
                break;
              (p = m), (m = p.parentNode);
            }
            p = g;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (zi = { focusedElem: e, selectionRange: n }, Kr = !1, C = t; C !== null; )
    if (((t = C), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (C = e);
    else
      for (; C !== null; ) {
        t = C;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var w = y.memoizedProps,
                    x = y.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : ze(t.type, w),
                      x
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = '')
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (v) {
          W(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (C = e);
          break;
        }
        C = t.return;
      }
  return (y = bu), (bu = !1), y;
}
function In(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Ki(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function El(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Yi(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function hc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), hc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ue], delete t[Gn], delete t[Oi], delete t[Id], delete t[Fd])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function mc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function es(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || mc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Xi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Gr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Xi(e, t, n), e = e.sibling; e !== null; ) Xi(e, t, n), (e = e.sibling);
}
function Gi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Gi(e, t, n), e = e.sibling; e !== null; ) Gi(e, t, n), (e = e.sibling);
}
var ee = null,
  je = !1;
function Je(e, t, n) {
  for (n = n.child; n !== null; ) vc(e, t, n), (n = n.sibling);
}
function vc(e, t, n) {
  if ($e && typeof $e.onCommitFiberUnmount == 'function')
    try {
      $e.onCommitFiberUnmount(hl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ie || Zt(n, t);
    case 6:
      var r = ee,
        l = je;
      (ee = null),
        Je(e, t, n),
        (ee = r),
        (je = l),
        ee !== null &&
          (je
            ? ((e = ee),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ee.removeChild(n.stateNode));
      break;
    case 18:
      ee !== null &&
        (je
          ? ((e = ee),
            (n = n.stateNode),
            e.nodeType === 8
              ? Zl(e.parentNode, n)
              : e.nodeType === 1 && Zl(e, n),
            Hn(e))
          : Zl(ee, n.stateNode));
      break;
    case 4:
      (r = ee),
        (l = je),
        (ee = n.stateNode.containerInfo),
        (je = !0),
        Je(e, t, n),
        (ee = r),
        (je = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ie &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Ki(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      Je(e, t, n);
      break;
    case 1:
      if (
        !ie &&
        (Zt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          W(n, t, u);
        }
      Je(e, t, n);
      break;
    case 21:
      Je(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ie = (r = ie) || n.memoizedState !== null), Je(e, t, n), (ie = r))
        : Je(e, t, n);
      break;
    default:
      Je(e, t, n);
  }
}
function ts(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new bd()),
      t.forEach(function (r) {
        var l = ap.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Re(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (ee = u.stateNode), (je = !1);
              break e;
            case 3:
              (ee = u.stateNode.containerInfo), (je = !0);
              break e;
            case 4:
              (ee = u.stateNode.containerInfo), (je = !0);
              break e;
          }
          u = u.return;
        }
        if (ee === null) throw Error(k(160));
        vc(i, o, l), (ee = null), (je = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (a) {
        W(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) gc(t, e), (t = t.sibling);
}
function gc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Re(t, e), Ie(e), r & 4)) {
        try {
          In(3, e, e.return), El(3, e);
        } catch (w) {
          W(e, e.return, w);
        }
        try {
          In(5, e, e.return);
        } catch (w) {
          W(e, e.return, w);
        }
      }
      break;
    case 1:
      Re(t, e), Ie(e), r & 512 && n !== null && Zt(n, n.return);
      break;
    case 5:
      if (
        (Re(t, e),
        Ie(e),
        r & 512 && n !== null && Zt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Bn(l, '');
        } catch (w) {
          W(e, e.return, w);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === 'input' && i.type === 'radio' && i.name != null && $s(l, i),
              wi(u, o);
            var a = wi(u, i);
            for (o = 0; o < s.length; o += 2) {
              var h = s[o],
                p = s[o + 1];
              h === 'style'
                ? Hs(l, p)
                : h === 'dangerouslySetInnerHTML'
                ? Vs(l, p)
                : h === 'children'
                ? Bn(l, p)
                : ao(l, h, p, a);
            }
            switch (u) {
              case 'input':
                hi(l, i);
                break;
              case 'textarea':
                Bs(l, i);
                break;
              case 'select':
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null
                  ? qt(l, !!i.multiple, g, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? qt(l, !!i.multiple, i.defaultValue, !0)
                      : qt(l, !!i.multiple, i.multiple ? [] : '', !1));
            }
            l[Gn] = i;
          } catch (w) {
            W(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Re(t, e), Ie(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (w) {
          W(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Re(t, e), Ie(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Hn(t.containerInfo);
        } catch (w) {
          W(e, e.return, w);
        }
      break;
    case 4:
      Re(t, e), Ie(e);
      break;
    case 13:
      Re(t, e),
        Ie(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Wo = K())),
        r & 4 && ts(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ie = (a = ie) || h), Re(t, e), (ie = a)) : Re(t, e),
        Ie(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !h && e.mode & 1)
        )
          for (C = e, h = e.child; h !== null; ) {
            for (p = C = h; C !== null; ) {
              switch (((m = C), (g = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  In(4, m, m.return);
                  break;
                case 1:
                  Zt(m, m.return);
                  var y = m.stateNode;
                  if (typeof y.componentWillUnmount == 'function') {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (w) {
                      W(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Zt(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    rs(p);
                    continue;
                  }
              }
              g !== null ? ((g.return = m), (C = g)) : rs(p);
            }
            h = h.sibling;
          }
        e: for (h = null, p = e; ; ) {
          if (p.tag === 5) {
            if (h === null) {
              h = p;
              try {
                (l = p.stateNode),
                  a
                    ? ((i = l.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((u = p.stateNode),
                      (s = p.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty('display')
                          ? s.display
                          : null),
                      (u.style.display = Ws('display', o)));
              } catch (w) {
                W(e, e.return, w);
              }
            }
          } else if (p.tag === 6) {
            if (h === null)
              try {
                p.stateNode.nodeValue = a ? '' : p.memoizedProps;
              } catch (w) {
                W(e, e.return, w);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            h === p && (h = null), (p = p.return);
          }
          h === p && (h = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      Re(t, e), Ie(e), r & 4 && ts(e);
      break;
    case 21:
      break;
    default:
      Re(t, e), Ie(e);
  }
}
function Ie(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (mc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Bn(l, ''), (r.flags &= -33));
          var i = es(e);
          Gi(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = es(e);
          Xi(e, u, o);
          break;
        default:
          throw Error(k(161));
      }
    } catch (s) {
      W(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function tp(e, t, n) {
  (C = e), yc(e);
}
function yc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; C !== null; ) {
    var l = C,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Pr;
      if (!o) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || ie;
        u = Pr;
        var a = ie;
        if (((Pr = o), (ie = s) && !a))
          for (C = l; C !== null; )
            (o = C),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? ls(l)
                : s !== null
                ? ((s.return = o), (C = s))
                : ls(l);
        for (; i !== null; ) (C = i), yc(i), (i = i.sibling);
        (C = l), (Pr = u), (ie = a);
      }
      ns(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (C = i)) : ns(e);
  }
}
function ns(e) {
  for (; C !== null; ) {
    var t = C;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ie || El(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ie)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ze(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Bu(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Bu(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    s.autoFocus && n.focus();
                    break;
                  case 'img':
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var h = a.memoizedState;
                  if (h !== null) {
                    var p = h.dehydrated;
                    p !== null && Hn(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(k(163));
          }
        ie || (t.flags & 512 && Yi(t));
      } catch (m) {
        W(t, t.return, m);
      }
    }
    if (t === e) {
      C = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (C = n);
      break;
    }
    C = t.return;
  }
}
function rs(e) {
  for (; C !== null; ) {
    var t = C;
    if (t === e) {
      C = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (C = n);
      break;
    }
    C = t.return;
  }
}
function ls(e) {
  for (; C !== null; ) {
    var t = C;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            El(4, t);
          } catch (s) {
            W(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              W(t, l, s);
            }
          }
          var i = t.return;
          try {
            Yi(t);
          } catch (s) {
            W(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Yi(t);
          } catch (s) {
            W(t, o, s);
          }
      }
    } catch (s) {
      W(t, t.return, s);
    }
    if (t === e) {
      C = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (C = u);
      break;
    }
    C = t.return;
  }
}
var np = Math.ceil,
  ol = Ze.ReactCurrentDispatcher,
  Ao = Ze.ReactCurrentOwner,
  _e = Ze.ReactCurrentBatchConfig,
  D = 0,
  b = null,
  Y = null,
  te = 0,
  ve = 0,
  Jt = wt(0),
  Z = 0,
  tr = null,
  Ot = 0,
  xl = 0,
  Vo = 0,
  Fn = null,
  fe = null,
  Wo = 0,
  fn = 1 / 0,
  Ae = null,
  ul = !1,
  Zi = null,
  dt = null,
  Nr = !1,
  it = null,
  sl = 0,
  Un = 0,
  Ji = null,
  Ur = -1,
  $r = 0;
function se() {
  return D & 6 ? K() : Ur !== -1 ? Ur : (Ur = K());
}
function pt(e) {
  return e.mode & 1
    ? D & 2 && te !== 0
      ? te & -te
      : $d.transition !== null
      ? ($r === 0 && ($r = na()), $r)
      : ((e = M),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : aa(e.type))),
        e)
    : 1;
}
function De(e, t, n, r) {
  if (50 < Un) throw ((Un = 0), (Ji = null), Error(k(185)));
  ir(e, n, r),
    (!(D & 2) || e !== b) &&
      (e === b && (!(D & 2) && (xl |= n), Z === 4 && rt(e, te)),
      me(e, r),
      n === 1 && D === 0 && !(t.mode & 1) && ((fn = K() + 500), wl && kt()));
}
function me(e, t) {
  var n = e.callbackNode;
  $f(e, t);
  var r = Qr(e, e === b ? te : 0);
  if (r === 0)
    n !== null && pu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && pu(n), t === 1))
      e.tag === 0 ? Ud(is.bind(null, e)) : La(is.bind(null, e)),
        Dd(function () {
          !(D & 6) && kt();
        }),
        (n = null);
    else {
      switch (ra(r)) {
        case 1:
          n = mo;
          break;
        case 4:
          n = ea;
          break;
        case 16:
          n = Hr;
          break;
        case 536870912:
          n = ta;
          break;
        default:
          n = Hr;
      }
      n = Pc(n, wc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function wc(e, t) {
  if (((Ur = -1), ($r = 0), D & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (rn() && e.callbackNode !== n) return null;
  var r = Qr(e, e === b ? te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = al(e, r);
  else {
    t = r;
    var l = D;
    D |= 2;
    var i = Sc();
    (b !== e || te !== t) && ((Ae = null), (fn = K() + 500), Lt(e, t));
    do
      try {
        ip();
        break;
      } catch (u) {
        kc(e, u);
      }
    while (!0);
    Lo(),
      (ol.current = i),
      (D = l),
      Y !== null ? (t = 0) : ((b = null), (te = 0), (t = Z));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Ci(e)), l !== 0 && ((r = l), (t = qi(e, l)))), t === 1)
    )
      throw ((n = tr), Lt(e, 0), rt(e, r), me(e, K()), n);
    if (t === 6) rt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !rp(l) &&
          ((t = al(e, r)),
          t === 2 && ((i = Ci(e)), i !== 0 && ((r = i), (t = qi(e, i)))),
          t === 1))
      )
        throw ((n = tr), Lt(e, 0), rt(e, r), me(e, K()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Ct(e, fe, Ae);
          break;
        case 3:
          if (
            (rt(e, r), (r & 130023424) === r && ((t = Wo + 500 - K()), 10 < t))
          ) {
            if (Qr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              se(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Ti(Ct.bind(null, e, fe, Ae), t);
            break;
          }
          Ct(e, fe, Ae);
          break;
        case 4:
          if ((rt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Oe(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = K() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * np(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ti(Ct.bind(null, e, fe, Ae), r);
            break;
          }
          Ct(e, fe, Ae);
          break;
        case 5:
          Ct(e, fe, Ae);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return me(e, K()), e.callbackNode === n ? wc.bind(null, e) : null;
}
function qi(e, t) {
  var n = Fn;
  return (
    e.current.memoizedState.isDehydrated && (Lt(e, t).flags |= 256),
    (e = al(e, t)),
    e !== 2 && ((t = fe), (fe = n), t !== null && bi(t)),
    e
  );
}
function bi(e) {
  fe === null ? (fe = e) : fe.push.apply(fe, e);
}
function rp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Me(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function rt(e, t) {
  for (
    t &= ~Vo,
      t &= ~xl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Oe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function is(e) {
  if (D & 6) throw Error(k(327));
  rn();
  var t = Qr(e, 0);
  if (!(t & 1)) return me(e, K()), null;
  var n = al(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ci(e);
    r !== 0 && ((t = r), (n = qi(e, r)));
  }
  if (n === 1) throw ((n = tr), Lt(e, 0), rt(e, t), me(e, K()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ct(e, fe, Ae),
    me(e, K()),
    null
  );
}
function Ho(e, t) {
  var n = D;
  D |= 1;
  try {
    return e(t);
  } finally {
    (D = n), D === 0 && ((fn = K() + 500), wl && kt());
  }
}
function Dt(e) {
  it !== null && it.tag === 0 && !(D & 6) && rn();
  var t = D;
  D |= 1;
  var n = _e.transition,
    r = M;
  try {
    if (((_e.transition = null), (M = 1), e)) return e();
  } finally {
    (M = r), (_e.transition = n), (D = t), !(D & 6) && kt();
  }
}
function Qo() {
  (ve = Jt.current), U(Jt);
}
function Lt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Od(n)), Y !== null))
    for (n = Y.return; n !== null; ) {
      var r = n;
      switch ((_o(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Zr();
          break;
        case 3:
          an(), U(pe), U(oe), Do();
          break;
        case 5:
          Oo(r);
          break;
        case 4:
          an();
          break;
        case 13:
          U(B);
          break;
        case 19:
          U(B);
          break;
        case 10:
          Ro(r.type._context);
          break;
        case 22:
        case 23:
          Qo();
      }
      n = n.return;
    }
  if (
    ((b = e),
    (Y = e = ht(e.current, null)),
    (te = ve = t),
    (Z = 0),
    (tr = null),
    (Vo = xl = Ot = 0),
    (fe = Fn = null),
    Pt !== null)
  ) {
    for (t = 0; t < Pt.length; t++)
      if (((n = Pt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    Pt = null;
  }
  return e;
}
function kc(e, t) {
  do {
    var n = Y;
    try {
      if ((Lo(), (Mr.current = il), ll)) {
        for (var r = A.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        ll = !1;
      }
      if (
        ((Tt = 0),
        (q = G = A = null),
        (Mn = !1),
        (qn = 0),
        (Ao.current = null),
        n === null || n.return === null)
      ) {
        (Z = 1), (tr = t), (Y = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          s = t;
        if (
          ((t = te),
          (u.flags |= 32768),
          s !== null && typeof s == 'object' && typeof s.then == 'function')
        ) {
          var a = s,
            h = u,
            p = h.tag;
          if (!(h.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var m = h.alternate;
            m
              ? ((h.updateQueue = m.updateQueue),
                (h.memoizedState = m.memoizedState),
                (h.lanes = m.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var g = Ku(o);
          if (g !== null) {
            (g.flags &= -257),
              Yu(g, o, u, i, t),
              g.mode & 1 && Qu(i, a, t),
              (t = g),
              (s = a);
            var y = t.updateQueue;
            if (y === null) {
              var w = new Set();
              w.add(s), (t.updateQueue = w);
            } else y.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Qu(i, a, t), Ko();
              break e;
            }
            s = Error(k(426));
          }
        } else if ($ && u.mode & 1) {
          var x = Ku(o);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              Yu(x, o, u, i, t),
              Po(cn(s, u));
            break e;
          }
        }
        (i = s = cn(s, u)),
          Z !== 4 && (Z = 2),
          Fn === null ? (Fn = [i]) : Fn.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = rc(i, s, t);
              $u(i, f);
              break e;
            case 1:
              u = s;
              var c = i.type,
                d = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == 'function' ||
                  (d !== null &&
                    typeof d.componentDidCatch == 'function' &&
                    (dt === null || !dt.has(d))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var v = lc(i, u, t);
                $u(i, v);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      xc(n);
    } catch (E) {
      (t = E), Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Sc() {
  var e = ol.current;
  return (ol.current = il), e === null ? il : e;
}
function Ko() {
  (Z === 0 || Z === 3 || Z === 2) && (Z = 4),
    b === null || (!(Ot & 268435455) && !(xl & 268435455)) || rt(b, te);
}
function al(e, t) {
  var n = D;
  D |= 2;
  var r = Sc();
  (b !== e || te !== t) && ((Ae = null), Lt(e, t));
  do
    try {
      lp();
      break;
    } catch (l) {
      kc(e, l);
    }
  while (!0);
  if ((Lo(), (D = n), (ol.current = r), Y !== null)) throw Error(k(261));
  return (b = null), (te = 0), Z;
}
function lp() {
  for (; Y !== null; ) Ec(Y);
}
function ip() {
  for (; Y !== null && !zf(); ) Ec(Y);
}
function Ec(e) {
  var t = _c(e.alternate, e, ve);
  (e.memoizedProps = e.pendingProps),
    t === null ? xc(e) : (Y = t),
    (Ao.current = null);
}
function xc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = qd(n, t)), n !== null)) {
        (n.flags &= 32767), (Y = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Z = 6), (Y = null);
        return;
      }
    } else if (((n = Jd(n, t, ve)), n !== null)) {
      Y = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  Z === 0 && (Z = 5);
}
function Ct(e, t, n) {
  var r = M,
    l = _e.transition;
  try {
    (_e.transition = null), (M = 1), op(e, t, n, r);
  } finally {
    (_e.transition = l), (M = r);
  }
  return null;
}
function op(e, t, n, r) {
  do rn();
  while (it !== null);
  if (D & 6) throw Error(k(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Bf(e, i),
    e === b && ((Y = b = null), (te = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Nr ||
      ((Nr = !0),
      Pc(Hr, function () {
        return rn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = _e.transition), (_e.transition = null);
    var o = M;
    M = 1;
    var u = D;
    (D |= 4),
      (Ao.current = null),
      ep(e, n),
      gc(n, e),
      Pd(zi),
      (Kr = !!Ri),
      (zi = Ri = null),
      (e.current = n),
      tp(n),
      jf(),
      (D = u),
      (M = o),
      (_e.transition = i);
  } else e.current = n;
  if (
    (Nr && ((Nr = !1), (it = e), (sl = l)),
    (i = e.pendingLanes),
    i === 0 && (dt = null),
    Df(n.stateNode),
    me(e, K()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (ul) throw ((ul = !1), (e = Zi), (Zi = null), e);
  return (
    sl & 1 && e.tag !== 0 && rn(),
    (i = e.pendingLanes),
    i & 1 ? (e === Ji ? Un++ : ((Un = 0), (Ji = e))) : (Un = 0),
    kt(),
    null
  );
}
function rn() {
  if (it !== null) {
    var e = ra(sl),
      t = _e.transition,
      n = M;
    try {
      if (((_e.transition = null), (M = 16 > e ? 16 : e), it === null))
        var r = !1;
      else {
        if (((e = it), (it = null), (sl = 0), D & 6)) throw Error(k(331));
        var l = D;
        for (D |= 4, C = e.current; C !== null; ) {
          var i = C,
            o = i.child;
          if (C.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (C = a; C !== null; ) {
                  var h = C;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      In(8, h, i);
                  }
                  var p = h.child;
                  if (p !== null) (p.return = h), (C = p);
                  else
                    for (; C !== null; ) {
                      h = C;
                      var m = h.sibling,
                        g = h.return;
                      if ((hc(h), h === a)) {
                        C = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = g), (C = m);
                        break;
                      }
                      C = g;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var w = y.child;
                if (w !== null) {
                  y.child = null;
                  do {
                    var x = w.sibling;
                    (w.sibling = null), (w = x);
                  } while (w !== null);
                }
              }
              C = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (C = o);
          else
            e: for (; C !== null; ) {
              if (((i = C), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    In(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (C = f);
                break e;
              }
              C = i.return;
            }
        }
        var c = e.current;
        for (C = c; C !== null; ) {
          o = C;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) (d.return = o), (C = d);
          else
            e: for (o = c; C !== null; ) {
              if (((u = C), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      El(9, u);
                  }
                } catch (E) {
                  W(u, u.return, E);
                }
              if (u === o) {
                C = null;
                break e;
              }
              var v = u.sibling;
              if (v !== null) {
                (v.return = u.return), (C = v);
                break e;
              }
              C = u.return;
            }
        }
        if (
          ((D = l), kt(), $e && typeof $e.onPostCommitFiberRoot == 'function')
        )
          try {
            $e.onPostCommitFiberRoot(hl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (M = n), (_e.transition = t);
    }
  }
  return !1;
}
function os(e, t, n) {
  (t = cn(n, t)),
    (t = rc(e, t, 1)),
    (e = ft(e, t, 1)),
    (t = se()),
    e !== null && (ir(e, 1, t), me(e, t));
}
function W(e, t, n) {
  if (e.tag === 3) os(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        os(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (dt === null || !dt.has(r)))
        ) {
          (e = cn(n, e)),
            (e = lc(t, e, 1)),
            (t = ft(t, e, 1)),
            (e = se()),
            t !== null && (ir(t, 1, e), me(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function up(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = se()),
    (e.pingedLanes |= e.suspendedLanes & n),
    b === e &&
      (te & n) === n &&
      (Z === 4 || (Z === 3 && (te & 130023424) === te && 500 > K() - Wo)
        ? Lt(e, 0)
        : (Vo |= n)),
    me(e, t);
}
function Cc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = gr), (gr <<= 1), !(gr & 130023424) && (gr = 4194304))
      : (t = 1));
  var n = se();
  (e = Xe(e, t)), e !== null && (ir(e, t, n), me(e, n));
}
function sp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Cc(e, n);
}
function ap(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  r !== null && r.delete(t), Cc(e, n);
}
var _c;
_c = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || pe.current) de = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (de = !1), Zd(e, t, n);
      de = !!(e.flags & 131072);
    }
  else (de = !1), $ && t.flags & 1048576 && Ra(t, br, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Fr(e, t), (e = t.pendingProps);
      var l = on(t, oe.current);
      nn(t, n), (l = Io(null, t, r, e, l, n));
      var i = Fo();
      return (
        (t.flags |= 1),
        typeof l == 'object' &&
        l !== null &&
        typeof l.render == 'function' &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            he(r) ? ((i = !0), Jr(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            jo(t),
            (l.updater = Sl),
            (t.stateNode = l),
            (l._reactInternals = t),
            $i(t, r, e, n),
            (t = Vi(null, t, r, !0, i, n)))
          : ((t.tag = 0), $ && i && Co(t), ue(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Fr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = fp(r)),
          (e = ze(r, e)),
          l)
        ) {
          case 0:
            t = Ai(null, t, r, e, n);
            break e;
          case 1:
            t = Zu(null, t, r, e, n);
            break e;
          case 11:
            t = Xu(null, t, r, e, n);
            break e;
          case 14:
            t = Gu(null, t, r, ze(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        Ai(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        Zu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((sc(t), e === null)) throw Error(k(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          Ma(e, t),
          nl(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = cn(Error(k(423)), t)), (t = Ju(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = cn(Error(k(424)), t)), (t = Ju(e, t, r, n, l));
            break e;
          } else
            for (
              ge = ct(t.stateNode.containerInfo.firstChild),
                ye = t,
                $ = !0,
                Te = null,
                n = Oa(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((un(), r === l)) {
            t = Ge(e, t, n);
            break e;
          }
          ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ia(t),
        e === null && Ii(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        ji(r, l) ? (o = null) : i !== null && ji(r, i) && (t.flags |= 32),
        uc(e, t),
        ue(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Ii(t), null;
    case 13:
      return ac(e, t, n);
    case 4:
      return (
        To(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = sn(t, null, r, n)) : ue(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        Xu(e, t, r, l, n)
      );
    case 7:
      return ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          I(el, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Me(i.value, o)) {
            if (i.children === l.children && !pe.current) {
              t = Ge(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Qe(-1, n & -n)), (s.tag = 2);
                      var a = i.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var h = a.pending;
                        h === null
                          ? (s.next = s)
                          : ((s.next = h.next), (h.next = s)),
                          (a.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      Fi(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(k(341));
                (o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  Fi(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        ue(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        nn(t, n),
        (l = Pe(l)),
        (r = r(l)),
        (t.flags |= 1),
        ue(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = ze(r, t.pendingProps)),
        (l = ze(r.type, l)),
        Gu(e, t, r, l, n)
      );
    case 15:
      return ic(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        Fr(e, t),
        (t.tag = 1),
        he(r) ? ((e = !0), Jr(t)) : (e = !1),
        nn(t, n),
        nc(t, r, l),
        $i(t, r, l, n),
        Vi(null, t, r, !0, e, n)
      );
    case 19:
      return cc(e, t, n);
    case 22:
      return oc(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function Pc(e, t) {
  return bs(e, t);
}
function cp(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ce(e, t, n, r) {
  return new cp(e, t, n, r);
}
function Yo(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function fp(e) {
  if (typeof e == 'function') return Yo(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === fo)) return 11;
    if (e === po) return 14;
  }
  return 2;
}
function ht(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ce(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Br(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == 'function')) Yo(e) && (o = 1);
  else if (typeof e == 'string') o = 5;
  else
    e: switch (e) {
      case At:
        return Rt(n.children, l, i, t);
      case co:
        (o = 8), (l |= 8);
        break;
      case ai:
        return (
          (e = Ce(12, n, t, l | 2)), (e.elementType = ai), (e.lanes = i), e
        );
      case ci:
        return (e = Ce(13, n, t, l)), (e.elementType = ci), (e.lanes = i), e;
      case fi:
        return (e = Ce(19, n, t, l)), (e.elementType = fi), (e.lanes = i), e;
      case Is:
        return Cl(n, l, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Ds:
              o = 10;
              break e;
            case Ms:
              o = 9;
              break e;
            case fo:
              o = 11;
              break e;
            case po:
              o = 14;
              break e;
            case et:
              (o = 16), (r = null);
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = Ce(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Rt(e, t, n, r) {
  return (e = Ce(7, e, r, t)), (e.lanes = n), e;
}
function Cl(e, t, n, r) {
  return (
    (e = Ce(22, e, r, t)),
    (e.elementType = Is),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function li(e, t, n) {
  return (e = Ce(6, e, null, t)), (e.lanes = n), e;
}
function ii(e, t, n) {
  return (
    (t = Ce(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function dp(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = $l(0)),
    (this.expirationTimes = $l(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = $l(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Xo(e, t, n, r, l, i, o, u, s) {
  return (
    (e = new dp(e, t, n, u, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ce(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    jo(i),
    e
  );
}
function pp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Bt,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Nc(e) {
  if (!e) return gt;
  e = e._reactInternals;
  e: {
    if (It(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (he(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (he(n)) return Na(e, n, t);
  }
  return t;
}
function Lc(e, t, n, r, l, i, o, u, s) {
  return (
    (e = Xo(n, r, !0, e, l, i, o, u, s)),
    (e.context = Nc(null)),
    (n = e.current),
    (r = se()),
    (l = pt(n)),
    (i = Qe(r, l)),
    (i.callback = t ?? null),
    ft(n, i, l),
    (e.current.lanes = l),
    ir(e, l, r),
    me(e, r),
    e
  );
}
function _l(e, t, n, r) {
  var l = t.current,
    i = se(),
    o = pt(l);
  return (
    (n = Nc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Qe(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ft(l, t, o)),
    e !== null && (De(e, l, o, i), Dr(e, l, o)),
    o
  );
}
function cl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function us(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Go(e, t) {
  us(e, t), (e = e.alternate) && us(e, t);
}
function hp() {
  return null;
}
var Rc =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function Zo(e) {
  this._internalRoot = e;
}
Pl.prototype.render = Zo.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  _l(e, t, null, null);
};
Pl.prototype.unmount = Zo.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Dt(function () {
      _l(null, e, null, null);
    }),
      (t[Ye] = null);
  }
};
function Pl(e) {
  this._internalRoot = e;
}
Pl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = oa();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < nt.length && t !== 0 && t < nt[n].priority; n++);
    nt.splice(n, 0, e), n === 0 && sa(e);
  }
};
function Jo(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Nl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function ss() {}
function mp(e, t, n, r, l) {
  if (l) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var a = cl(o);
        i.call(a);
      };
    }
    var o = Lc(t, r, e, 0, null, !1, !1, '', ss);
    return (
      (e._reactRootContainer = o),
      (e[Ye] = o.current),
      Yn(e.nodeType === 8 ? e.parentNode : e),
      Dt(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == 'function') {
    var u = r;
    r = function () {
      var a = cl(s);
      u.call(a);
    };
  }
  var s = Xo(e, 0, !1, null, null, !1, !1, '', ss);
  return (
    (e._reactRootContainer = s),
    (e[Ye] = s.current),
    Yn(e.nodeType === 8 ? e.parentNode : e),
    Dt(function () {
      _l(t, s, n, r);
    }),
    s
  );
}
function Ll(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == 'function') {
      var u = l;
      l = function () {
        var s = cl(o);
        u.call(s);
      };
    }
    _l(t, o, e, l);
  } else o = mp(n, t, e, l, r);
  return cl(o);
}
la = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ln(t.pendingLanes);
        n !== 0 &&
          (vo(t, n | 1), me(t, K()), !(D & 6) && ((fn = K() + 500), kt()));
      }
      break;
    case 13:
      Dt(function () {
        var r = Xe(e, 1);
        if (r !== null) {
          var l = se();
          De(r, e, 1, l);
        }
      }),
        Go(e, 1);
  }
};
go = function (e) {
  if (e.tag === 13) {
    var t = Xe(e, 134217728);
    if (t !== null) {
      var n = se();
      De(t, e, 134217728, n);
    }
    Go(e, 134217728);
  }
};
ia = function (e) {
  if (e.tag === 13) {
    var t = pt(e),
      n = Xe(e, t);
    if (n !== null) {
      var r = se();
      De(n, e, t, r);
    }
    Go(e, t);
  }
};
oa = function () {
  return M;
};
ua = function (e, t) {
  var n = M;
  try {
    return (M = e), t();
  } finally {
    M = n;
  }
};
Si = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((hi(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = yl(r);
            if (!l) throw Error(k(90));
            Us(r), hi(r, l);
          }
        }
      }
      break;
    case 'textarea':
      Bs(e, n);
      break;
    case 'select':
      (t = n.value), t != null && qt(e, !!n.multiple, t, !1);
  }
};
Ys = Ho;
Xs = Dt;
var vp = { usingClientEntryPoint: !1, Events: [ur, Qt, yl, Qs, Ks, Ho] },
  _n = {
    findFiberByHostInstance: _t,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  gp = {
    bundleType: _n.bundleType,
    version: _n.version,
    rendererPackageName: _n.rendererPackageName,
    rendererConfig: _n.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ze.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Js(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: _n.findFiberByHostInstance || hp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Lr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Lr.isDisabled && Lr.supportsFiber)
    try {
      (hl = Lr.inject(gp)), ($e = Lr);
    } catch {}
}
ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vp;
ke.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Jo(t)) throw Error(k(200));
  return pp(e, t, null, n);
};
ke.createRoot = function (e, t) {
  if (!Jo(e)) throw Error(k(299));
  var n = !1,
    r = '',
    l = Rc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Xo(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ye] = t.current),
    Yn(e.nodeType === 8 ? e.parentNode : e),
    new Zo(t)
  );
};
ke.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(k(188))
      : ((e = Object.keys(e).join(',')), Error(k(268, e)));
  return (e = Js(t)), (e = e === null ? null : e.stateNode), e;
};
ke.flushSync = function (e) {
  return Dt(e);
};
ke.hydrate = function (e, t, n) {
  if (!Nl(t)) throw Error(k(200));
  return Ll(null, e, t, !0, n);
};
ke.hydrateRoot = function (e, t, n) {
  if (!Jo(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = '',
    o = Rc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Lc(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[Ye] = t.current),
    Yn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Pl(t);
};
ke.render = function (e, t, n) {
  if (!Nl(t)) throw Error(k(200));
  return Ll(null, e, t, !1, n);
};
ke.unmountComponentAtNode = function (e) {
  if (!Nl(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (Dt(function () {
        Ll(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ye] = null);
        });
      }),
      !0)
    : !1;
};
ke.unstable_batchedUpdates = Ho;
ke.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Nl(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return Ll(e, t, n, !1, r);
};
ke.version = '18.3.1-next-f1338f8080-20240426';
function zc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zc);
    } catch (e) {
      console.error(e);
    }
}
zc(), (zs.exports = ke);
var yp = zs.exports,
  as = yp;
(ui.createRoot = as.createRoot), (ui.hydrateRoot = as.hydrateRoot);
const wp = '/assets/duck_devs_transparent-CpYIdO0k.png';
/**
 * @remix-run/router v1.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function nr() {
  return (
    (nr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    nr.apply(this, arguments)
  );
}
var ot;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(ot || (ot = {}));
const cs = 'popstate';
function kp(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: i, search: o, hash: u } = r.location;
    return eo(
      '',
      { pathname: i, search: o, hash: u },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || 'default'
    );
  }
  function n(r, l) {
    return typeof l == 'string' ? l : fl(l);
  }
  return Ep(t, n, null, e);
}
function X(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function jc(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Sp() {
  return Math.random().toString(36).substr(2, 8);
}
function fs(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function eo(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    nr(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? mn(t) : t,
      { state: n, key: (t && t.key) || r || Sp() }
    )
  );
}
function fl(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function mn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Ep(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: i = !1 } = r,
    o = l.history,
    u = ot.Pop,
    s = null,
    a = h();
  a == null && ((a = 0), o.replaceState(nr({}, o.state, { idx: a }), ''));
  function h() {
    return (o.state || { idx: null }).idx;
  }
  function p() {
    u = ot.Pop;
    let x = h(),
      f = x == null ? null : x - a;
    (a = x), s && s({ action: u, location: w.location, delta: f });
  }
  function m(x, f) {
    u = ot.Push;
    let c = eo(w.location, x, f);
    a = h() + 1;
    let d = fs(c, a),
      v = w.createHref(c);
    try {
      o.pushState(d, '', v);
    } catch (E) {
      if (E instanceof DOMException && E.name === 'DataCloneError') throw E;
      l.location.assign(v);
    }
    i && s && s({ action: u, location: w.location, delta: 1 });
  }
  function g(x, f) {
    u = ot.Replace;
    let c = eo(w.location, x, f);
    a = h();
    let d = fs(c, a),
      v = w.createHref(c);
    o.replaceState(d, '', v),
      i && s && s({ action: u, location: w.location, delta: 0 });
  }
  function y(x) {
    let f = l.location.origin !== 'null' ? l.location.origin : l.location.href,
      c = typeof x == 'string' ? x : fl(x);
    return (
      (c = c.replace(/ $/, '%20')),
      X(
        f,
        'No window.location.(origin|href) available to create URL for href: ' +
          c
      ),
      new URL(c, f)
    );
  }
  let w = {
    get action() {
      return u;
    },
    get location() {
      return e(l, o);
    },
    listen(x) {
      if (s) throw new Error('A history only accepts one active listener');
      return (
        l.addEventListener(cs, p),
        (s = x),
        () => {
          l.removeEventListener(cs, p), (s = null);
        }
      );
    },
    createHref(x) {
      return t(l, x);
    },
    createURL: y,
    encodeLocation(x) {
      let f = y(x);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: m,
    replace: g,
    go(x) {
      return o.go(x);
    },
  };
  return w;
}
var ds;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(ds || (ds = {}));
function xp(e, t, n) {
  return n === void 0 && (n = '/'), Cp(e, t, n, !1);
}
function Cp(e, t, n, r) {
  let l = typeof t == 'string' ? mn(t) : t,
    i = qo(l.pathname || '/', n);
  if (i == null) return null;
  let o = Tc(e);
  _p(o);
  let u = null;
  for (let s = 0; u == null && s < o.length; ++s) {
    let a = Ip(i);
    u = Dp(o[s], a, r);
  }
  return u;
}
function Tc(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let l = (i, o, u) => {
    let s = {
      relativePath: u === void 0 ? i.path || '' : u,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    s.relativePath.startsWith('/') &&
      (X(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let a = mt([r, s.relativePath]),
      h = n.concat(s);
    i.children &&
      i.children.length > 0 &&
      (X(
        i.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + a + '".')
      ),
      Tc(i.children, t, h, a)),
      !(i.path == null && !i.index) &&
        t.push({ path: a, score: Tp(a, i.index), routesMeta: h });
  };
  return (
    e.forEach((i, o) => {
      var u;
      if (i.path === '' || !((u = i.path) != null && u.includes('?'))) l(i, o);
      else for (let s of Oc(i.path)) l(i, o, s);
    }),
    t
  );
}
function Oc(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith('?'),
    i = n.replace(/\?$/, '');
  if (r.length === 0) return l ? [i, ''] : [i];
  let o = Oc(r.join('/')),
    u = [];
  return (
    u.push(...o.map((s) => (s === '' ? i : [i, s].join('/')))),
    l && u.push(...o),
    u.map((s) => (e.startsWith('/') && s === '' ? '/' : s))
  );
}
function _p(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Op(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Pp = /^:[\w-]+$/,
  Np = 3,
  Lp = 2,
  Rp = 1,
  zp = 10,
  jp = -2,
  ps = (e) => e === '*';
function Tp(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(ps) && (r += jp),
    t && (r += Lp),
    n
      .filter((l) => !ps(l))
      .reduce((l, i) => l + (Pp.test(i) ? Np : i === '' ? Rp : zp), r)
  );
}
function Op(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Dp(e, t, n) {
  let { routesMeta: r } = e,
    l = {},
    i = '/',
    o = [];
  for (let u = 0; u < r.length; ++u) {
    let s = r[u],
      a = u === r.length - 1,
      h = i === '/' ? t : t.slice(i.length) || '/',
      p = hs(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: a },
        h
      ),
      m = s.route;
    if (
      (!p &&
        a &&
        n &&
        !r[r.length - 1].route.index &&
        (p = hs(
          { path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 },
          h
        )),
      !p)
    )
      return null;
    Object.assign(l, p.params),
      o.push({
        params: l,
        pathname: mt([i, p.pathname]),
        pathnameBase: Bp(mt([i, p.pathnameBase])),
        route: m,
      }),
      p.pathnameBase !== '/' && (i = mt([i, p.pathnameBase]));
  }
  return o;
}
function hs(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Mp(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let i = l[0],
    o = i.replace(/(.)\/+$/, '$1'),
    u = l.slice(1);
  return {
    params: r.reduce((a, h, p) => {
      let { paramName: m, isOptional: g } = h;
      if (m === '*') {
        let w = u[p] || '';
        o = i.slice(0, i.length - w.length).replace(/(.)\/+$/, '$1');
      }
      const y = u[p];
      return (
        g && !y ? (a[m] = void 0) : (a[m] = (y || '').replace(/%2F/g, '/')), a
      );
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function Mp(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    jc(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    );
  let r = [],
    l =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, u, s) => (
            r.push({ paramName: u, isOptional: s != null }),
            s ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        );
  return (
    e.endsWith('*')
      ? (r.push({ paramName: '*' }),
        (l += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
      ? (l += '\\/*$')
      : e !== '' && e !== '/' && (l += '(?:(?=\\/|$))'),
    [new RegExp(l, t ? void 0 : 'i'), r]
  );
}
function Ip(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      jc(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    );
  }
}
function qo(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function Fp(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: n,
    search: r = '',
    hash: l = '',
  } = typeof e == 'string' ? mn(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : Up(n, t)) : t,
    search: Ap(r),
    hash: Vp(l),
  };
}
function Up(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((l) => {
      l === '..' ? n.length > 1 && n.pop() : l !== '.' && n.push(l);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function oi(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function $p(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Dc(e, t) {
  let n = $p(e);
  return t
    ? n.map((r, l) => (l === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Mc(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == 'string'
    ? (l = mn(e))
    : ((l = nr({}, e)),
      X(
        !l.pathname || !l.pathname.includes('?'),
        oi('?', 'pathname', 'search', l)
      ),
      X(
        !l.pathname || !l.pathname.includes('#'),
        oi('#', 'pathname', 'hash', l)
      ),
      X(!l.search || !l.search.includes('#'), oi('#', 'search', 'hash', l)));
  let i = e === '' || l.pathname === '',
    o = i ? '/' : l.pathname,
    u;
  if (o == null) u = n;
  else {
    let p = t.length - 1;
    if (!r && o.startsWith('..')) {
      let m = o.split('/');
      for (; m[0] === '..'; ) m.shift(), (p -= 1);
      l.pathname = m.join('/');
    }
    u = p >= 0 ? t[p] : '/';
  }
  let s = Fp(l, u),
    a = o && o !== '/' && o.endsWith('/'),
    h = (i || o === '.') && n.endsWith('/');
  return !s.pathname.endsWith('/') && (a || h) && (s.pathname += '/'), s;
}
const mt = (e) => e.join('/').replace(/\/\/+/g, '/'),
  Bp = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Ap = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  Vp = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
function Wp(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const Ic = ['post', 'put', 'patch', 'delete'];
new Set(Ic);
const Hp = ['get', ...Ic];
new Set(Hp);
/**
 * React Router v6.24.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function rr() {
  return (
    (rr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    rr.apply(this, arguments)
  );
}
const bo = P.createContext(null),
  Qp = P.createContext(null),
  Ft = P.createContext(null),
  Rl = P.createContext(null),
  Ut = P.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Fc = P.createContext(null);
function Kp(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  ar() || X(!1);
  let { basename: r, navigator: l } = P.useContext(Ft),
    { hash: i, pathname: o, search: u } = $c(e, { relative: n }),
    s = o;
  return (
    r !== '/' && (s = o === '/' ? r : mt([r, o])),
    l.createHref({ pathname: s, search: u, hash: i })
  );
}
function ar() {
  return P.useContext(Rl) != null;
}
function zl() {
  return ar() || X(!1), P.useContext(Rl).location;
}
function Uc(e) {
  P.useContext(Ft).static || P.useLayoutEffect(e);
}
function Yp() {
  let { isDataRoute: e } = P.useContext(Ut);
  return e ? oh() : Xp();
}
function Xp() {
  ar() || X(!1);
  let e = P.useContext(bo),
    { basename: t, future: n, navigator: r } = P.useContext(Ft),
    { matches: l } = P.useContext(Ut),
    { pathname: i } = zl(),
    o = JSON.stringify(Dc(l, n.v7_relativeSplatPath)),
    u = P.useRef(!1);
  return (
    Uc(() => {
      u.current = !0;
    }),
    P.useCallback(
      function (a, h) {
        if ((h === void 0 && (h = {}), !u.current)) return;
        if (typeof a == 'number') {
          r.go(a);
          return;
        }
        let p = Mc(a, JSON.parse(o), i, h.relative === 'path');
        e == null &&
          t !== '/' &&
          (p.pathname = p.pathname === '/' ? t : mt([t, p.pathname])),
          (h.replace ? r.replace : r.push)(p, h.state, h);
      },
      [t, r, o, i, e]
    )
  );
}
function $c(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = P.useContext(Ft),
    { matches: l } = P.useContext(Ut),
    { pathname: i } = zl(),
    o = JSON.stringify(Dc(l, r.v7_relativeSplatPath));
  return P.useMemo(() => Mc(e, JSON.parse(o), i, n === 'path'), [e, o, i, n]);
}
function Gp(e, t) {
  return Zp(e, t);
}
function Zp(e, t, n, r) {
  ar() || X(!1);
  let { navigator: l } = P.useContext(Ft),
    { matches: i } = P.useContext(Ut),
    o = i[i.length - 1],
    u = o ? o.params : {};
  o && o.pathname;
  let s = o ? o.pathnameBase : '/';
  o && o.route;
  let a = zl(),
    h;
  if (t) {
    var p;
    let x = typeof t == 'string' ? mn(t) : t;
    s === '/' || ((p = x.pathname) != null && p.startsWith(s)) || X(!1),
      (h = x);
  } else h = a;
  let m = h.pathname || '/',
    g = m;
  if (s !== '/') {
    let x = s.replace(/^\//, '').split('/');
    g = '/' + m.replace(/^\//, '').split('/').slice(x.length).join('/');
  }
  let y = xp(e, { pathname: g }),
    w = th(
      y &&
        y.map((x) =>
          Object.assign({}, x, {
            params: Object.assign({}, u, x.params),
            pathname: mt([
              s,
              l.encodeLocation
                ? l.encodeLocation(x.pathname).pathname
                : x.pathname,
            ]),
            pathnameBase:
              x.pathnameBase === '/'
                ? s
                : mt([
                    s,
                    l.encodeLocation
                      ? l.encodeLocation(x.pathnameBase).pathname
                      : x.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && w
    ? P.createElement(
        Rl.Provider,
        {
          value: {
            location: rr(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              h
            ),
            navigationType: ot.Pop,
          },
        },
        w
      )
    : w;
}
function Jp() {
  let e = ih(),
    t = Wp(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
  return P.createElement(
    P.Fragment,
    null,
    P.createElement('h2', null, 'Unexpected Application Error!'),
    P.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? P.createElement('pre', { style: l }, n) : null,
    null
  );
}
const qp = P.createElement(Jp, null);
class bp extends P.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      'React Router caught the following error during render',
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? P.createElement(
          Ut.Provider,
          { value: this.props.routeContext },
          P.createElement(Fc.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function eh(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = P.useContext(bo);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    P.createElement(Ut.Provider, { value: t }, r)
  );
}
function th(e, t, n, r) {
  var l;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let o = e,
    u = (l = n) == null ? void 0 : l.errors;
  if (u != null) {
    let h = o.findIndex(
      (p) => p.route.id && (u == null ? void 0 : u[p.route.id]) !== void 0
    );
    h >= 0 || X(!1), (o = o.slice(0, Math.min(o.length, h + 1)));
  }
  let s = !1,
    a = -1;
  if (n && r && r.v7_partialHydration)
    for (let h = 0; h < o.length; h++) {
      let p = o[h];
      if (
        ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (a = h),
        p.route.id)
      ) {
        let { loaderData: m, errors: g } = n,
          y =
            p.route.loader &&
            m[p.route.id] === void 0 &&
            (!g || g[p.route.id] === void 0);
        if (p.route.lazy || y) {
          (s = !0), a >= 0 ? (o = o.slice(0, a + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((h, p, m) => {
    let g,
      y = !1,
      w = null,
      x = null;
    n &&
      ((g = u && p.route.id ? u[p.route.id] : void 0),
      (w = p.route.errorElement || qp),
      s &&
        (a < 0 && m === 0
          ? ((y = !0), (x = null))
          : a === m &&
            ((y = !0), (x = p.route.hydrateFallbackElement || null))));
    let f = t.concat(o.slice(0, m + 1)),
      c = () => {
        let d;
        return (
          g
            ? (d = w)
            : y
            ? (d = x)
            : p.route.Component
            ? (d = P.createElement(p.route.Component, null))
            : p.route.element
            ? (d = p.route.element)
            : (d = h),
          P.createElement(eh, {
            match: p,
            routeContext: { outlet: h, matches: f, isDataRoute: n != null },
            children: d,
          })
        );
      };
    return n && (p.route.ErrorBoundary || p.route.errorElement || m === 0)
      ? P.createElement(bp, {
          location: n.location,
          revalidation: n.revalidation,
          component: w,
          error: g,
          children: c(),
          routeContext: { outlet: null, matches: f, isDataRoute: !0 },
        })
      : c();
  }, null);
}
var Bc = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    );
  })(Bc || {}),
  dl = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    );
  })(dl || {});
function nh(e) {
  let t = P.useContext(bo);
  return t || X(!1), t;
}
function rh(e) {
  let t = P.useContext(Qp);
  return t || X(!1), t;
}
function lh(e) {
  let t = P.useContext(Ut);
  return t || X(!1), t;
}
function Ac(e) {
  let t = lh(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || X(!1), n.route.id;
}
function ih() {
  var e;
  let t = P.useContext(Fc),
    n = rh(dl.UseRouteError),
    r = Ac(dl.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function oh() {
  let { router: e } = nh(Bc.UseNavigateStable),
    t = Ac(dl.UseNavigateStable),
    n = P.useRef(!1);
  return (
    Uc(() => {
      n.current = !0;
    }),
    P.useCallback(
      function (l, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof l == 'number'
              ? e.navigate(l)
              : e.navigate(l, rr({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
function be(e) {
  X(!1);
}
function uh(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: l = ot.Pop,
    navigator: i,
    static: o = !1,
    future: u,
  } = e;
  ar() && X(!1);
  let s = t.replace(/^\/*/, '/'),
    a = P.useMemo(
      () => ({
        basename: s,
        navigator: i,
        static: o,
        future: rr({ v7_relativeSplatPath: !1 }, u),
      }),
      [s, u, i, o]
    );
  typeof r == 'string' && (r = mn(r));
  let {
      pathname: h = '/',
      search: p = '',
      hash: m = '',
      state: g = null,
      key: y = 'default',
    } = r,
    w = P.useMemo(() => {
      let x = qo(h, s);
      return x == null
        ? null
        : {
            location: { pathname: x, search: p, hash: m, state: g, key: y },
            navigationType: l,
          };
    }, [s, h, p, m, g, y, l]);
  return w == null
    ? null
    : P.createElement(
        Ft.Provider,
        { value: a },
        P.createElement(Rl.Provider, { children: n, value: w })
      );
}
function sh(e) {
  let { children: t, location: n } = e;
  return Gp(to(t), n);
}
new Promise(() => {});
function to(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    P.Children.forEach(e, (r, l) => {
      if (!P.isValidElement(r)) return;
      let i = [...t, l];
      if (r.type === P.Fragment) {
        n.push.apply(n, to(r.props.children, i));
        return;
      }
      r.type !== be && X(!1), !r.props.index || !r.props.children || X(!1);
      let o = {
        id: r.props.id || i.join('-'),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (o.children = to(r.props.children, i)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.24.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function no() {
  return (
    (no = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    no.apply(this, arguments)
  );
}
function ah(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++)
    (l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function ch(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function fh(e, t) {
  return e.button === 0 && (!t || t === '_self') && !ch(e);
}
const dh = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
    'unstable_viewTransition',
  ],
  ph = '6';
try {
  window.__reactRouterVersion = ph;
} catch {}
const hh = 'startTransition',
  ms = uf[hh];
function mh(e) {
  let { basename: t, children: n, future: r, window: l } = e,
    i = P.useRef();
  i.current == null && (i.current = kp({ window: l, v5Compat: !0 }));
  let o = i.current,
    [u, s] = P.useState({ action: o.action, location: o.location }),
    { v7_startTransition: a } = r || {},
    h = P.useCallback(
      (p) => {
        a && ms ? ms(() => s(p)) : s(p);
      },
      [s, a]
    );
  return (
    P.useLayoutEffect(() => o.listen(h), [o, h]),
    P.createElement(uh, {
      basename: t,
      children: n,
      location: u.location,
      navigationType: u.action,
      navigator: o,
      future: r,
    })
  );
}
const vh =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  gh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  qe = P.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: i,
        replace: o,
        state: u,
        target: s,
        to: a,
        preventScrollReset: h,
        unstable_viewTransition: p,
      } = t,
      m = ah(t, dh),
      { basename: g } = P.useContext(Ft),
      y,
      w = !1;
    if (typeof a == 'string' && gh.test(a) && ((y = a), vh))
      try {
        let d = new URL(window.location.href),
          v = a.startsWith('//') ? new URL(d.protocol + a) : new URL(a),
          E = qo(v.pathname, g);
        v.origin === d.origin && E != null
          ? (a = E + v.search + v.hash)
          : (w = !0);
      } catch {}
    let x = Kp(a, { relative: l }),
      f = yh(a, {
        replace: o,
        state: u,
        target: s,
        preventScrollReset: h,
        relative: l,
        unstable_viewTransition: p,
      });
    function c(d) {
      r && r(d), d.defaultPrevented || f(d);
    }
    return P.createElement(
      'a',
      no({}, m, { href: y || x, onClick: w || i ? r : c, ref: n, target: s })
    );
  });
var vs;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState');
})(vs || (vs = {}));
var gs;
(function (e) {
  (e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(gs || (gs = {}));
function yh(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: i,
      relative: o,
      unstable_viewTransition: u,
    } = t === void 0 ? {} : t,
    s = Yp(),
    a = zl(),
    h = $c(e, { relative: o });
  return P.useCallback(
    (p) => {
      if (fh(p, n)) {
        p.preventDefault();
        let m = r !== void 0 ? r : fl(a) === fl(h);
        s(e, {
          replace: m,
          state: l,
          preventScrollReset: i,
          relative: o,
          unstable_viewTransition: u,
        });
      }
    },
    [a, s, h, r, l, n, e, i, o, u]
  );
}
const wh = (e) =>
  S.jsx('nav', {
    className: 'navbar',
    children: S.jsxs('div', {
      className: 'navbar__container',
      children: [
        S.jsxs(qe, {
          to: '/',
          id: 'navbar__logo',
          children: [
            'DUCK DEVS',
            S.jsx('img', { src: wp, alt: 'Duck Devs Logo' }),
          ],
        }),
        S.jsxs('ul', {
          className: 'navbar__menu',
          children: [
            S.jsx('li', {
              className: 'navbar__item',
              children: S.jsx(qe, {
                to: '/',
                className: 'navbar__links',
                children: 'HOME',
              }),
            }),
            S.jsxs('li', {
              className: 'navbar__item',
              id: 'dropdown__head',
              children: [
                S.jsx('a', {
                  className: 'navbar__links',
                  children: 'PROJECTS',
                }),
                S.jsxs('ul', {
                  className: 'dropdown__content',
                  children: [
                    S.jsx('li', {
                      children: S.jsx(qe, {
                        to: '/projects/leaderboard',
                        children: 'Leaderboard',
                      }),
                    }),
                    S.jsx('li', {
                      children: S.jsx(qe, {
                        to: '/projects/duckarmy',
                        children: 'Duck Army',
                      }),
                    }),
                    S.jsx('li', {
                      children: S.jsx(qe, {
                        to: '/projects/duckpond',
                        children: 'Duck Pond',
                      }),
                    }),
                    S.jsx('li', {
                      children: S.jsx(qe, {
                        to: '/projects/ducksweeper',
                        children: 'DuckSweeper',
                      }),
                    }),
                    S.jsx('li', {
                      children: S.jsx(qe, {
                        to: '/projects/duckracer',
                        children: 'Duck Racer',
                      }),
                    }),
                  ],
                }),
              ],
            }),
            S.jsx('li', {
              className: 'navbar__item',
              children: S.jsx(qe, {
                to: '/people',
                className: 'navbar__links',
                children: 'TEAM MEMBERS',
              }),
            }),
          ],
        }),
      ],
    }),
  });
function kh() {
  return S.jsxs('div', {
    children: [
      S.jsx('h1', { children: 'Quack!' }),
      S.jsx('p', { children: 'Welcome to Duck Devs!' }),
      S.jsx('p', { children: 'Click the button below to see a duck!' }),
    ],
  });
}
function Sh() {
  return S.jsx('button', { children: 'Get Duck' });
}
function Eh() {
  return 'duck race here';
}
const xh = (e) =>
    S.jsxs(S.Fragment, {
      children: [S.jsx(kh, {}), S.jsx(Sh, {}), S.jsx(Eh, {})],
    }),
  Ch = (e) =>
    S.jsx(
      'div',
      {
        className: `people__card duck${Math.floor(Math.random() * 4) + 1}`,
        children: S.jsxs('div', {
          className: 'card__content',
          children: [
            S.jsx('h2', { children: e.data.name }),
            S.jsx('p', { children: e.data.role }),
            S.jsx('button', {
              onClick: function () {
                window.location.href = e.data.githubLink;
              },
              children: 'Github',
            }),
          ],
        }),
      },
      e.data.id
    ),
  _h = (e) =>
    S.jsxs(S.Fragment, {
      children: [
        S.jsx('h1', { children: 'DEVELOPERS' }),
        S.jsx('div', {
          className: 'people__container',
          children: e.data.map((t) => S.jsx(Ch, { data: t }, t.id)),
        }),
      ],
    }),
  Ph = [
    {
      id: 1,
      name: 'Chris Minnick',
      role: 'C$',
      githubLink: 'https://github.com/chrisminnick',
    },
    {
      id: 2,
      name: 'Chris Penick',
      role: 'DJ Crispy',
      githubLink: 'https://github.com/chrispenick',
    },
    {
      id: 3,
      name: 'Dan Savidge',
      role: 'Software Engineer',
      githubLink: 'https://github.com/dsavidge02',
    },
    {
      id: 4,
      name: 'Arvind Kasiliya',
      role: 'Software Engineer',
      githubLink: 'https://github.com/Arvonit',
    },
    {
      id: 5,
      name: 'Dustin Hagstrom',
      role: 'Software Engineer',
      githubLink: 'https://github.com/dustinhagstrom',
    },
    {
      id: 6,
      name: 'Will Sibble',
      role: 'Software Engineer',
      githubLink: 'https://github.com/wsibble',
    },
    {
      id: 7,
      name: 'Shantanu Jain',
      role: 'Data Engineer',
      githubLink: 'https://github.com/shantanujain9',
    },
    {
      id: 8,
      name: 'Darius Dunn',
      role: 'Data Engineer',
      githubLink: 'https://github.com/deadius1',
    },
    {
      id: 9,
      name: 'Sean Molion',
      role: 'Software Engineer',
      githubLink: 'https://github.com/seanmo15',
    },
    {
      id: 10,
      name: 'Anike Braun',
      role: 'Software Engineer',
      githubLink: 'https://github.com/anikebraun',
    },
    {
      id: 11,
      name: 'Stephen Antogiovanni',
      role: 'Data Engineer',
      githubLink: 'https://github.com/santogiovanni',
    },
    {
      id: 12,
      name: 'Brandon Onyejekwe',
      role: 'Data Engineer',
      githubLink: 'https://github.com/bonyejekwe',
    },
    {
      id: 13,
      name: 'Dea Konjusha',
      role: 'Software Engineer',
      githubLink: 'https://github.com/deakonjusha',
    },
    {
      id: 14,
      name: 'Disha Verma',
      role: 'Data Engineer',
      githubLink: 'https://github.com/div12345678',
    },
    {
      id: 15,
      name: 'Will Bartholomay',
      role: 'Software Engineer',
      githubLink: 'https://github.com/wbartholomay',
    },
    {
      id: 16,
      name: 'Zach Florian',
      role: 'Full Duck Engineer',
      githubLink: 'https://github.com/Zach-Flo',
    },
    {
      id: 17,
      name: 'Evan Phillips',
      role: 'Software Engineer',
      githubLink: 'https://github.com/Evanp467',
    },
    {
      id: 18,
      name: 'Paris Machado',
      role: 'Software Engineer',
      githubLink: 'https://github.com/ParksMacadoo',
    },
    {
      id: 19,
      name: 'Aditya Manikandan',
      role: 'Software Engineer',
      githubLink: 'https://github.com/adimanikandan',
    },
    {
      id: 20,
      name: 'Adam Young',
      role: 'Cyber Security',
      githubLink: 'https://github.com/BiggestBubba633',
    },
    {
      id: 21,
      name: 'Angie Chen',
      role: 'Software Engineer',
      githubLink: 'https://github.com/anchen08',
    },
    {
      id: 22,
      name: 'Chris Truedson',
      role: 'Data Engineer',
      githubLink: 'https://github.com/ChrisTruedson',
    },
    {
      id: 23,
      name: 'Steven Consolini',
      role: 'Cyber Security',
      githubLink: 'https://github.com/consjr',
    },
  ],
  Nh = (e) => S.jsx(S.Fragment, {}),
  Lh = (e) => S.jsx(S.Fragment, {}),
  Rh = (e) => S.jsx(S.Fragment, {}),
  zh = (e) => S.jsx(S.Fragment, {}),
  jh = (e) => S.jsx(S.Fragment, {});
function Th() {
  return S.jsx(S.Fragment, {
    children: S.jsxs(mh, {
      children: [
        S.jsx(wh, {}),
        S.jsxs(sh, {
          children: [
            S.jsx(be, { exact: !0, path: '/', element: S.jsx(xh, {}) }),
            S.jsx(be, {
              exact: !0,
              path: '/people',
              element: S.jsx(_h, { data: Ph }),
            }),
            S.jsx(be, {
              exact: !0,
              path: '/projects/leaderboard',
              element: S.jsx(Nh, {}),
            }),
            S.jsx(be, {
              exact: !0,
              path: '/projects/duckarmy',
              element: S.jsx(Lh, {}),
            }),
            S.jsx(be, {
              exact: !0,
              path: '/projects/duckpond',
              element: S.jsx(Rh, {}),
            }),
            S.jsx(be, {
              exact: !0,
              path: '/projects/ducksweeper',
              element: S.jsx(zh, {}),
            }),
            S.jsx(be, {
              exact: !0,
              path: '/projects/duckracer',
              element: S.jsx(jh, {}),
            }),
          ],
        }),
      ],
    }),
  });
}
ui.createRoot(document.getElementById('root')).render(
  S.jsx(Ls.StrictMode, { children: S.jsx(Th, {}) })
);
