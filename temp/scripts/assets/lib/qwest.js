"use strict";
cc._RFpush(module, '8f513dtOl5DS4fIlTqIHORv', 'qwest');
// lib/qwest.js

!(function (e) {
  if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();else if ("function" == typeof define && define.amd) define([], e);else {
    var t;t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.qwest = e();
  }
})(function () {
  var define, module, exports;return (function e(t, n, o) {
    function r(i, a) {
      if (!n[i]) {
        if (!t[i]) {
          var p = "function" == typeof require && require;if (!a && p) return p(i, !0);if (s) return s(i, !0);var u = new Error("Cannot find module '" + i + "'");throw (u.code = "MODULE_NOT_FOUND", u);
        }var f = n[i] = { exports: {} };t[i][0].call(f.exports, function (e) {
          var n = t[i][1][e];return r(n ? n : e);
        }, f, f.exports, e, t, n, o);
      }return n[i].exports;
    }for (var s = "function" == typeof require && require, i = 0; i < o.length; i++) r(o[i]);return r;
  })({ 1: [function (e, t, n) {
      !(function (e) {
        "use strict";var n = function n(e) {
          var t = function t(e, _t, n) {
            n = "function" == typeof n ? n() : null === n ? "" : void 0 === n ? "" : n, e[e.length] = encodeURIComponent(_t) + "=" + encodeURIComponent(n);
          },
              n = function n(e, o, r) {
            var s, i, a;if ("[object Array]" === Object.prototype.toString.call(o)) for (s = 0, i = o.length; i > s; s++) n(e + "[" + ("object" == typeof o[s] ? s : "") + "]", o[s], r);else if (o && "[object Object]" === o.toString()) for (a in o) o.hasOwnProperty(a) && (e ? n(e + "[" + a + "]", o[a], r, t) : n(a, o[a], r, t));else if (e) t(r, e, o);else for (a in o) t(r, a, o[a]);return r;
          };return n("", e, []).join("&").replace(/%20/g, "+");
        };"object" == typeof t && "object" == typeof t.exports ? t.exports = n : "function" == typeof define && define.amd ? define([], function () {
          return n;
        }) : e.param = n;
      })(this);
    }, {}], 2: [function (e, t, n) {
      !(function (e) {
        function t(e) {
          return "function" == typeof e;
        }function n(e) {
          return "object" == typeof e;
        }function o(e) {
          "undefined" != typeof setImmediate ? setImmediate(e) : "undefined" != typeof process && process.nextTick ? process.nextTick(e) : setTimeout(e, 0);
        }var r;e[0][e[1]] = function s(e) {
          var i,
              a = [],
              p = [],
              u = function u(e, t) {
            return null == i && null != e && (i = e, a = t, p.length && o(function () {
              for (var e = 0; e < p.length; e++) p[e]();
            })), i;
          };return u.then = function (u, f) {
            var d = s(e),
                c = function c() {
              function e(o) {
                var s,
                    i = 0;try {
                  if (o && (n(o) || t(o)) && t(s = o.then)) {
                    if (o === d) throw new TypeError();s.call(o, function () {
                      i++ || e.apply(r, arguments);
                    }, function (e) {
                      i++ || d(!1, [e]);
                    });
                  } else d(!0, arguments);
                } catch (a) {
                  i++ || d(!1, [a]);
                }
              }try {
                var o = i ? u : f;t(o) ? e(o.apply(r, a || [])) : d(i, a);
              } catch (s) {
                d(!1, [s]);
              }
            };return null != i ? o(c) : p.push(c), d;
          }, e && (u = e(u)), u;
        };
      })("undefined" == typeof t ? [window, "pinkySwear"] : [t, "exports"]);
    }, {}], qwest: [function (_dereq_, module, exports) {
      module.exports = (function () {
        var global = window || this,
            pinkyswear = _dereq_("pinkyswear"),
            jparam = _dereq_("jquery-param"),
            defaultOptions = {},
            defaultXdrResponseType = "json",
            defaultDataType = "post",
            _limit = null,
            requests = 0,
            request_stack = [],
            getXHR = global.XMLHttpRequest ? function () {
          return new global.XMLHttpRequest();
        } : function () {
          return new ActiveXObject("Microsoft.XMLHTTP");
        },
            xhr2 = "" === getXHR().responseType,
            qwest = function qwest(method, url, data, options, before) {
          method = method.toUpperCase(), data = data || null, options = options || {};for (var name in defaultOptions) if (!(name in options)) if ("object" == typeof defaultOptions[name] && "object" == typeof options[name]) for (var name2 in defaultOptions[name]) options[name][name2] = defaultOptions[name][name2];else options[name] = defaultOptions[name];var nativeResponseParsing = !1,
              crossOrigin,
              xhr,
              xdr = !1,
              timeoutInterval,
              aborted = !1,
              attempts = 0,
              headers = {},
              mimeTypes = { text: "*/*", xml: "text/xml", json: "application/json", post: "application/x-www-form-urlencoded", document: "text/html" },
              accept = { text: "*/*", xml: "application/xml; q=1.0, text/xml; q=0.8, */*; q=0.1", json: "application/json; q=1.0, text/*; q=0.8, */*; q=0.1" },
              i,
              j,
              serialized,
              response,
              sending = !1,
              delayed = !1,
              timeout_start,
              promise = pinkyswear(function (e) {
            return e.abort = function () {
              xhr && (xhr.abort(), --requests, aborted = !0);
            }, e.send = function () {
              if (!sending) {
                if (requests == _limit) return void request_stack.push(e);if (aborted) return void (request_stack.length && request_stack.shift().send());if ((++requests, sending = !0, timeout_start = new Date().getTime(), xhr = getXHR(), crossOrigin && ("withCredentials" in xhr || !global.XDomainRequest || (xhr = new XDomainRequest(), xdr = !0, "GET" != method && "POST" != method && (method = "POST"))), xdr ? xhr.open(method, url) : (xhr.open(method, url, options.async, options.user, options.password), xhr2 && options.async && (xhr.withCredentials = options.withCredentials)), !xdr)) for (var t in headers) headers[t] && xhr.setRequestHeader(t, headers[t]);if (xhr2 && "auto" != options.responseType) try {
                  xhr.responseType = options.responseType, nativeResponseParsing = xhr.responseType == options.responseType;
                } catch (n) {}xhr2 || xdr ? (xhr.onload = handleResponse, xhr.onerror = handleError) : xhr.onreadystatechange = function () {
                  4 == xhr.readyState && handleResponse();
                }, "auto" != options.responseType && "overrideMimeType" in xhr && xhr.overrideMimeType(mimeTypes[options.responseType]), before && before(xhr), xdr ? (xhr.onprogress = function () {}, xhr.ontimeout = function () {}, xhr.onerror = function () {}, setTimeout(function () {
                  xhr.send("GET" != method ? data : null);
                }, 0)) : xhr.send("GET" != method ? data : null);
              }
            }, e;
          }),
              handleResponse = function handleResponse() {
            var i, responseType;if ((--requests, sending = !1, new Date().getTime() - timeout_start >= options.timeout)) return void (options.attempts && ++attempts == options.attempts ? promise(!1, [new Error("Timeout (" + url + ")"), xhr, response]) : promise.send());request_stack.length && request_stack.shift().send();try {
              if (nativeResponseParsing && "response" in xhr && null !== xhr.response) response = xhr.response;else {
                if ((responseType = options.responseType, "auto" == responseType)) if (xdr) responseType = defaultXdrResponseType;else {
                  var ct = xhr.getResponseHeader("Content-Type") || "";responseType = ct.indexOf(mimeTypes.json) > -1 ? "json" : ct.indexOf(mimeTypes.xml) > -1 ? "xml" : "text";
                }switch (responseType) {case "json":
                    if (xhr.responseText.length) try {
                      response = "JSON" in global ? JSON.parse(xhr.responseText) : eval("(" + xhr.responseText + ")");
                    } catch (e) {
                      throw "Error while parsing JSON body : " + e;
                    }break;case "xml":
                    try {
                      global.DOMParser ? response = new DOMParser().parseFromString(xhr.responseText, "text/xml") : (response = new ActiveXObject("Microsoft.XMLDOM"), response.async = "false", response.loadXML(xhr.responseText));
                    } catch (e) {
                      response = void 0;
                    }if (!response || !response.documentElement || response.getElementsByTagName("parsererror").length) throw "Invalid XML";break;default:
                    response = xhr.responseText;}
              }if ("status" in xhr && !/^2|1223/.test(xhr.status)) throw xhr.status + " (" + xhr.statusText + ")";promise(!0, [xhr, response]);
            } catch (e) {
              promise(!1, [e, xhr, response]);
            }
          },
              handleError = function handleError(e) {
            --requests, promise(!1, [new Error("Connection aborted"), xhr, null]);
          };if ((options.async = "async" in options ? !!options.async : !0, options.cache = "cache" in options ? !!options.cache : !1, options.dataType = "dataType" in options ? options.dataType.toLowerCase() : defaultDataType, options.responseType = "responseType" in options ? options.responseType.toLowerCase() : "auto", options.user = options.user || "", options.password = options.password || "", options.withCredentials = !!options.withCredentials, options.timeout = "timeout" in options ? parseInt(options.timeout, 10) : 3e4, options.attempts = "attempts" in options ? parseInt(options.attempts, 10) : 1, i = url.match(/\/\/(.+?)\//), crossOrigin = i && (i[1] ? i[1] != location.host : !1), "ArrayBuffer" in global && data instanceof ArrayBuffer ? options.dataType = "arraybuffer" : "Blob" in global && data instanceof Blob ? options.dataType = "blob" : "Document" in global && data instanceof Document ? options.dataType = "document" : "FormData" in global && data instanceof FormData && (options.dataType = "formdata"), null !== data)) switch (options.dataType) {case "json":
              data = JSON.stringify(data);break;case "post":
              data = jparam(data);}if (options.headers) {
            var format = function format(e, t, n) {
              return t + n.toUpperCase();
            };for (i in options.headers) headers[i.replace(/(^|-)([^-])/g, format)] = options.headers[i];
          }return "Content-Type" in headers || "GET" == method || options.dataType in mimeTypes && mimeTypes[options.dataType] && (headers["Content-Type"] = mimeTypes[options.dataType]), headers.Accept || (headers.Accept = options.responseType in accept ? accept[options.responseType] : "*/*"), crossOrigin || "X-Requested-With" in headers || (headers["X-Requested-With"] = "XMLHttpRequest"), options.cache || "Cache-Control" in headers || (headers["Cache-Control"] = "no-cache"), "GET" == method && data && "string" == typeof data && (url += (/\?/.test(url) ? "&" : "?") + data), options.async && promise.send(), promise;
        },
            getNewPromise = function getNewPromise(e) {
          var t = [],
              n = 0,
              o = [];return pinkyswear(function (r) {
            var s = -1,
                i = function i(e) {
              return function (i, a, p, u) {
                var f = ++s;return ++n, t.push(qwest(e, r.base + i, a, p, u).then(function (e, t) {
                  o[f] = arguments, --n || r(!0, 1 == o.length ? o[0] : [o]);
                }, function () {
                  r(!1, arguments);
                })), r;
              };
            };r.get = i("GET"), r.post = i("POST"), r.put = i("PUT"), r["delete"] = i("DELETE"), r["catch"] = function (e) {
              return r.then(null, e);
            }, r.complete = function (e) {
              var t = function t() {
                e();
              };return r.then(t, t);
            }, r.map = function (e, t, n, o, r) {
              return i(e.toUpperCase()).call(this, t, n, o, r);
            };for (var a in e) a in r || (r[a] = e[a]);return r.send = function () {
              for (var e = 0, n = t.length; n > e; ++e) t[e].send();return r;
            }, r.abort = function () {
              for (var e = 0, n = t.length; n > e; ++e) t[e].abort();return r;
            }, r;
          });
        },
            q = { base: "", get: function get() {
            return getNewPromise(q).get.apply(this, arguments);
          }, post: function post() {
            return getNewPromise(q).post.apply(this, arguments);
          }, put: function put() {
            return getNewPromise(q).put.apply(this, arguments);
          }, "delete": function _delete() {
            return getNewPromise(q)["delete"].apply(this, arguments);
          }, map: function map() {
            return getNewPromise(q).map.apply(this, arguments);
          }, xhr2: xhr2, limit: function limit(e) {
            return _limit = e, q;
          }, setDefaultOptions: function setDefaultOptions(e) {
            return defaultOptions = e, q;
          }, setDefaultXdrResponseType: function setDefaultXdrResponseType(e) {
            return defaultXdrResponseType = e.toLowerCase(), q;
          }, setDefaultDataType: function setDefaultDataType(e) {
            return defaultDataType = e.toLowerCase(), q;
          }, getOpenRequests: function getOpenRequests() {
            return requests;
          } };return q;
      })();
    }, { "jquery-param": 1, pinkyswear: 2 }] }, {}, [1, 2])("qwest");
});

cc._RFpop();