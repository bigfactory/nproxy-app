/*
Copyright 2014, KISSY v1.46
MIT Licensed
build time: Aug 18 12:19
*/
var KISSY = function(a) {
	function f(a) {
		var g = {},
			f;
		for (f in j)(function(b, d) {
			b[d] = function(b) {
				return h.log(b, d, a)
			}
		})(g, f);
		return g
	}
	var h, k = 0,
		j = {
			debug: 10,
			info: 20,
			warn: 30,
			error: 40
		};
	h = {
		__BUILD_TIME: "20140818121916",
		Env: {
			host: this
		},
		Config: {
			debug: "",
			fns: {}
		},
		version: '1.46',
		config: function(c, g) {
			var f, b, d = this,
				i, e = h.Config,
				o = e.fns;
			h.isObject(c) ? h.each(c, function(a, b) {
				(i = o[b]) ? i.call(d, a) : e[b] = a
			}) : (f = o[c], g === a ? b = f ? f.call(d) : e[c] : f ? b = f.call(d, g) : e[c] = g);
			return b
		},
		log: function() {
			return a
		},
		getLogger: function(a) {
			return f(a)
		},
		error: function() {},
		guid: function(a) {
			return (a || "") + k++
		},
		Logger: {}
	};
	h.Logger.Level = {
		DEBUG: "debug",
		INFO: "info",
		WARN: "warn",
		ERROR: "error"
	};
	return h
}();
(function(a, f) {
	function h() {}

	function k(d, l, b, e, i, g) {
		if (!l || !d) return d;
		var r, q, u, x;
		l[c] = d;
		g.push(l);
		u = a.keys(l);
		x = u.length;
		for (r = 0; r < x; r++)
			if (q = u[r], q !== c) {
				var h = d,
					j = l,
					w = b,
					F = e,
					H = i,
					K = g;
				if (w || !(q in h) || H) {
					var y = h[q],
						v = j[q];
					if (y === v) y === f && (h[q] = y);
					else if (F && (v = F.call(j, q, v)), H && v && (a.isArray(v) || a.isPlainObject(v))) v[c] ? h[q] = v[c] : (j = y && (a.isArray(y) || a.isPlainObject(y)) ? y : a.isArray(v) ? [] : {}, h[q] = j, k(j, v, w, F, n, K));
					else if (v !== f && (w || !(q in h))) h[q] = v
				}
			}
		return d
	}

	function j(a, d) {
		return "constructor" ===
			a ? f : d
	}
	var c = "__MIX_CIRCULAR",
		g = this,
		n = !0,
		b = Object,
		d = b.create,
		i = !{
			toString: 1
		}.propertyIsEnumerable("toString"),
		e = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toString,toLocaleString,valueOf".split(",");
	(function(a, d) {
		for (var b in d) a[b] = d[b]
	})(a, {
		stamp: function(d, b, e) {
			var e = e || "__~ks_stamped",
				c = d[e];
			if (!c && !b) try {
				c = d[e] = a.guid(e)
			} catch (i) {
				c = f
			}
			return c
		},
		keys: b.keys || function(a) {
			var d = [],
				b, c;
			for (b in a) a.hasOwnProperty(b) && d.push(b);
			if (i)
				for (c = e.length - 1; 0 <= c; c--) b = e[c], a.hasOwnProperty(b) &&
					d.push(b);
			return d
		},
		mix: function(d, b, e, i, s) {
			"object" === typeof e && (i = e.whitelist, s = e.deep, e = e.overwrite);
			if (i && "function" !== typeof i) var g = i,
				i = function(d, b) {
					return a.inArray(d, g) ? b : f
				};
			e === f && (e = n);
			var r = [],
				q = 0;
			for (k(d, b, e, i, s, r); b = r[q++];) delete b[c];
			return d
		},
		merge: function(d) {
			var d = a.makeArray(arguments),
				b = {},
				e, c = d.length;
			for (e = 0; e < c; e++) a.mix(b, d[e]);
			return b
		},
		augment: function(d, b) {
			var e = a.makeArray(arguments),
				c = e.length - 2,
				i = 1,
				g, r, q = e[c],
				u = e[c + 1];
			e[1] = b;
			a.isArray(u) || (q = u, u = f, c++);
			"boolean" !== typeof q &&
				(q = f, c++);
			for (; i < c; i++) {
				r = e[i];
				if (g = r.prototype) r = a.mix({}, g, !0, j);
				a.mix(d.prototype, r, q, u)
			}
			return d
		},
		extend: function(b, l, e, c) {
			var i = l.prototype;
			i.constructor = l;
			d ? l = d(i) : (h.prototype = i, l = new h);
			l.constructor = b;
			b.prototype = a.mix(l, b.prototype);
			b.superclass = i;
			e && a.mix(l, e);
			c && a.mix(b, c);
			return b
		},
		namespace: function() {
			var d = a.makeArray(arguments),
				b = d.length,
				e = null,
				c, i, f, r = d[b - 1] === n && b--;
			for (c = 0; c < b; c++) {
				f = ("" + d[c]).split(".");
				e = r ? g : this;
				for (i = g[f[0]] === e ? 1 : 0; i < f.length; ++i) e = e[f[i]] = e[f[i]] || {}
			}
			return e
		}
	})
})(KISSY);
(function(a, f) {
	var h = Array.prototype,
		k = h.indexOf,
		j = h.lastIndexOf,
		c = h.filter,
		g = h.every,
		n = h.some,
		b = h.map;
	a.mix(a, {
		each: function(d, b, e) {
			if (d) {
				var c, l, m = 0;
				c = d && d.length;
				l = c === f || "function" === a.type(d);
				e = e || null;
				if (l)
					for (l = a.keys(d); m < l.length && !(c = l[m], !1 === b.call(e, d[c], c, d)); m++);
				else
					for (l = d[0]; m < c && !1 !== b.call(e, l, m, d); l = d[++m]);
			}
			return d
		},
		indexOf: k ? function(a, b) {
			return k.call(b, a)
		} : function(a, b) {
			for (var e = 0, c = b.length; e < c; ++e)
				if (b[e] === a) return e;
			return -1
		},
		lastIndexOf: j ? function(a, b) {
			return j.call(b,
				a)
		} : function(a, b) {
			for (var e = b.length - 1; 0 <= e && b[e] !== a; e--);
			return e
		},
		unique: function(b, c) {
			var e = b.slice();
			c && e.reverse();
			for (var o = 0, l, m; o < e.length;) {
				for (m = e[o];
					(l = a.lastIndexOf(m, e)) !== o;) e.splice(l, 1);
				o += 1
			}
			c && e.reverse();
			return e
		},
		inArray: function(b, c) {
			return -1 < a.indexOf(b, c)
		},
		filter: c ? function(a, b, e) {
			return c.call(a, b, e || this)
		} : function(b, c, e) {
			var o = [];
			a.each(b, function(a, b, d) {
				c.call(e || this, a, b, d) && o.push(a)
			});
			return o
		},
		map: b ? function(a, c, e) {
			return b.call(a, c, e || this)
		} : function(a, b, e) {
			for (var c =
				a.length, l = Array(c), m = 0; m < c; m++) {
				var f = "string" === typeof a ? a.charAt(m) : a[m];
				if (f || m in a) l[m] = b.call(e || this, f, m, a)
			}
			return l
		},
		reduce: function(a, b, e) {
			var c = a.length;
			if ("function" !== typeof b) throw new TypeError("callback is not function!");
			if (0 === c && 2 === arguments.length) throw new TypeError("arguments invalid");
			var l = 0,
				m;
			if (3 <= arguments.length) m = e;
			else {
				do {
					if (l in a) {
						m = a[l++];
						break
					}
					l += 1;
					if (l >= c) throw new TypeError;
				} while (1)
			}
			for (; l < c;) l in a && (m = b.call(f, m, a[l], l, a)), l++;
			return m
		},
		every: g ? function(a, b,
			e) {
			return g.call(a, b, e || this)
		} : function(a, b, e) {
			for (var c = a && a.length || 0, l = 0; l < c; l++)
				if (l in a && !b.call(e, a[l], l, a)) return !1;
			return !0
		},
		some: n ? function(a, b, c) {
			return n.call(a, b, c || this)
		} : function(a, b, c) {
			for (var o = a && a.length || 0, l = 0; l < o; l++)
				if (l in a && b.call(c, a[l], l, a)) return !0;
			return !1
		},
		makeArray: function(b) {
			if (null == b) return [];
			if (a.isArray(b)) return b;
			var c = typeof b.length,
				e = typeof b;
			if ("number" !== c || b.alert || "string" === e || "function" === e && !("item" in b && "number" === c)) return [b];
			for (var c = [], e = 0, o = b.length; e <
				o; e++) c[e] = b[e];
			return c
		}
	})
})(KISSY);
(function(a, f) {
	function h(a) {
		var b = typeof a;
		return null == a || "object" !== b && "function" !== b
	}

	function k() {
		if (b) return b;
		var d = c;
		a.each(g, function(a) {
			d += a + "|"
		});
		d = d.slice(0, -1);
		return b = RegExp(d, "g")
	}

	function j() {
		if (d) return d;
		var b = c;
		a.each(n, function(a) {
			b += a + "|"
		});
		b += "&#(\\d{1,5});";
		return d = RegExp(b, "g")
	}
	var c = "",
		g = {
			"&amp;": "&",
			"&gt;": ">",
			"&lt;": "<",
			"&#x60;": "`",
			"&#x2F;": "/",
			"&quot;": '"',
			"&#x27;": "'"
		},
		n = {},
		b, d, i = /[\-#$\^*()+\[\]{}|\\,.?\s]/g;
	(function() {
		for (var a in g) n[g[a]] = a
	})();
	a.mix(a, {
		urlEncode: function(a) {
			return encodeURIComponent("" +
				a)
		},
		urlDecode: function(a) {
			return decodeURIComponent(a.replace(/\+/g, " "))
		},
		fromUnicode: function(a) {
			return a.replace(/\\u([a-f\d]{4})/ig, function(a, b) {
				return String.fromCharCode(parseInt(b, 16))
			})
		},
		escapeHtml: function(a) {
			return (a + "").replace(k(), function(a) {
				return n[a]
			})
		},
		escapeRegExp: function(a) {
			return a.replace(i, "\\$&")
		},
		unEscapeHtml: function(a) {
			return a.replace(j(), function(a, b) {
				return g[a] || String.fromCharCode(+b)
			})
		},
		param: function(b, d, l, m) {
			d = d || "&";
			l = l || "=";
			m === f && (m = !0);
			var i = [],
				g, j, r, q, u, x =
				a.urlEncode;
			for (g in b)
				if (u = b[g], g = x(g), h(u)) i.push(g), u !== f && i.push(l, x(u + c)), i.push(d);
				else if (a.isArray(u) && u.length) {
				j = 0;
				for (q = u.length; j < q; ++j) r = u[j], h(r) && (i.push(g, m ? x("[]") : c), r !== f && i.push(l, x(r + c)), i.push(d))
			}
			i.pop();
			return i.join(c)
		},
		unparam: function(b, d, c) {
			if ("string" !== typeof b || !(b = a.trim(b))) return {};
			for (var c = c || "=", m = {}, i, g = a.urlDecode, b = b.split(d || "&"), h = 0, r = b.length; h < r; ++h) {
				i = b[h].indexOf(c);
				if (-1 === i) d = g(b[h]), i = f;
				else {
					d = g(b[h].substring(0, i));
					i = b[h].substring(i + 1);
					try {
						i = g(i)
					} catch (q) {}
					a.endsWith(d,
						"[]") && (d = d.substring(0, d.length - 2))
				}
				d in m ? a.isArray(m[d]) ? m[d].push(i) : m[d] = [m[d], i] : m[d] = i
			}
			return m
		}
	});
	a.escapeHTML = a.escapeHtml;
	a.unEscapeHTML = a.unEscapeHtml
})(KISSY);
(function(a) {
	function f(a, f, j) {
		function c() {}
		var g = [].slice,
			n = g.call(arguments, 3),
			b = function() {
				var b = g.call(arguments);
				return f.apply(this instanceof c ? this : j || this, a ? b.concat(n) : n.concat(b))
			};
		c.prototype = f.prototype;
		b.prototype = new c;
		return b
	}
	a.mix(a, {
		noop: function() {},
		bind: f(0, f, null, 0),
		rbind: f(0, f, null, 1),
		later: function(f, k, j, c, g) {
			var k = k || 0,
				n = f,
				b = a.makeArray(g),
				d;
			"string" === typeof f && (n = c[f]);
			f = function() {
				n.apply(c, b)
			};
			d = j ? setInterval(f, k) : setTimeout(f, k);
			return {
				id: d,
				interval: j,
				cancel: function() {
					this.interval ?
						clearInterval(d) : clearTimeout(d)
				}
			}
		},
		throttle: function(f, k, j) {
			k = k || 150;
			if (-1 === k) return function() {
				f.apply(j || this, arguments)
			};
			var c = a.now();
			return function() {
				var g = a.now();
				g - c > k && (c = g, f.apply(j || this, arguments))
			}
		},
		buffer: function(f, k, j) {
			function c() {
				c.stop();
				g = a.later(f, k, 0, j || this, arguments)
			}
			k = k || 150;
			if (-1 === k) return function() {
				f.apply(j || this, arguments)
			};
			var g = null;
			c.stop = function() {
				g && (g.cancel(), g = 0)
			};
			return c
		}
	})
})(KISSY);
(function(a, f) {
	function h(b, d, i) {
		var e = b,
			f, l, m, j;
		if (!b) return e;
		if (b[g]) return i[b[g]].destination;
		if ("object" === typeof b) {
			j = b.constructor;
			if (a.inArray(j, [Boolean, String, Number, Date, RegExp])) e = new j(b.valueOf());
			else if (f = a.isArray(b)) e = d ? a.filter(b, d) : b.concat();
			else if (l = a.isPlainObject(b)) e = {};
			b[g] = j = a.guid("c");
			i[j] = {
				destination: e,
				input: b
			}
		}
		if (f)
			for (b = 0; b < e.length; b++) e[b] = h(e[b], d, i);
		else if (l)
			for (m in b)
				if (m !== g && (!d || d.call(b, b[m], m, b) !== c)) e[m] = h(b[m], d, i);
		return e
	}

	function k(b, d, c, e) {
		if (b[n] ===
			d && d[n] === b) return j;
		b[n] = d;
		d[n] = b;
		var g = function(a, b) {
				return null !== a && a !== f && a[b] !== f
			},
			l;
		for (l in d)!g(b, l) && g(d, l) && c.push("expected has key " + l + '", but missing from actual.');
		for (l in b)!g(d, l) && g(b, l) && c.push('expected missing key "' + l + '", but present in actual.');
		for (l in d) l !== n && (a.equals(b[l], d[l], c, e) || e.push('"' + l + '" was "' + (d[l] ? d[l].toString() : d[l]) + '" in expected, but was "' + (b[l] ? b[l].toString() : b[l]) + '" in actual.'));
		a.isArray(b) && a.isArray(d) && b.length !== d.length && e.push("arrays were not the same length");
		delete b[n];
		delete d[n];
		return 0 === c.length && 0 === e.length
	}
	var j = !0,
		c = !1,
		g = "__~ks_cloned",
		n = "__~ks_compared";
	a.mix(a, {
		equals: function(a, d, c, e) {
			c = c || [];
			e = e || [];
			return a === d ? j : a === f || null === a || d === f || null === d ? null == a && null == d : a instanceof Date && d instanceof Date ? a.getTime() === d.getTime() : "string" === typeof a && "string" === typeof d || "number" === typeof a && "number" === typeof d ? a === d : "object" === typeof a && "object" === typeof d ? k(a, d, c, e) : a === d
		},
		clone: function(b, d) {
			var c = {},
				e = h(b, d, c);
			a.each(c, function(a) {
				a = a.input;
				if (a[g]) try {
					delete a[g]
				} catch (b) {
					a[g] = f
				}
			});
			c = null;
			return e
		},
		now: Date.now || function() {
			return +new Date
		}
	})
})(KISSY);
(function(a, f) {
	var h = /^[\s\xa0]+|[\s\xa0]+$/g,
		k = String.prototype.trim,
		j = /\\?\{([^{}]+)\}/g;
	a.mix(a, {
		trim: k ? function(a) {
			return null == a ? "" : k.call(a)
		} : function(a) {
			return null == a ? "" : (a + "").replace(h, "")
		},
		substitute: function(a, g, h) {
			return "string" !== typeof a || !g ? a : a.replace(h || j, function(a, d) {
				return "\\" === a.charAt(0) ? a.slice(1) : g[d] === f ? "" : g[d]
			})
		},
		ucfirst: function(a) {
			a += "";
			return a.charAt(0).toUpperCase() + a.substring(1)
		},
		startsWith: function(a, f) {
			return 0 === a.lastIndexOf(f, 0)
		},
		endsWith: function(a, f) {
			var j =
				a.length - f.length;
			return 0 <= j && a.indexOf(f, j) === j
		}
	})
})(KISSY);
(function(a, f) {
	var h = {},
		k = Object.prototype,
		j = k.toString;
	a.mix(a, {
		type: function(a) {
			return null == a ? "" + a : h[j.call(a)] || "object"
		},
		isNull: function(a) {
			return null === a
		},
		isUndefined: function(a) {
			return a === f
		},
		isEmptyObject: function(a) {
			for (var g in a)
				if (g !== f) return !1;
			return !0
		},
		isPlainObject: function(c) {
			if (!c || "object" !== a.type(c) || c.nodeType || c.window == c) return !1;
			var g, j;
			try {
				if ((j = c.constructor) && !k.hasOwnProperty.call(c, "constructor") && !k.hasOwnProperty.call(j.prototype, "isPrototypeOf")) return !1
			} catch (b) {
				return !1
			}
			for (g in c);
			return g === f || k.hasOwnProperty.call(c, g)
		}
	});
	a.each("Boolean,Number,String,Function,Date,RegExp,Object,Array".split(","), function(c, f) {
		h["[object " + c + "]"] = f = c.toLowerCase();
		a["is" + c] = function(c) {
			return a.type(c) === f
		}
	});
	a.isArray = Array.isArray || a.isArray
})(KISSY);
(function(a) {
	function f() {
		for (var a = 0, b; b = h[a++];) try {
			b()
		} catch (d) {
			setTimeout(function() {
				throw d;
			}, 0)
		}
		1 < a && (h = []);
		k = 0
	}
	var h = [],
		k = 0;
	a.setImmediate = function(a) {
		h.push(a);
		k || (k = 1, j())
	};
	var j;
	if ("function" === typeof setImmediate) j = function() {
		setImmediate(f)
	};
	else if ("undefined" !== typeof process && "function" === typeof process.nextTick) j = function() {
		process.nextTick(f)
	};
	else if ("undefined" !== typeof MessageChannel) {
		var c = new MessageChannel;
		c.port1.onmessage = function() {
			j = g;
			c.port1.onmessage = f;
			f()
		};
		var g = function() {
			c.port2.postMessage(0)
		};
		j = function() {
			setTimeout(f, 0);
			g()
		}
	} else j = function() {
		setTimeout(f, 0)
	}
})(KISSY);
(function(a) {
	function f(a, c) {
		for (var f = 0, h = a.length - 1, b = [], d; 0 <= h; h--) d = a[h], "." !== d && (".." === d ? f++ : f ? f-- : b[b.length] = d);
		if (c)
			for (; f--; f) b[b.length] = "..";
		return b = b.reverse()
	}
	var h = /^(\/?)([\s\S]+\/(?!$)|\/)?((?:\.{1,2}$|[\s\S]+?)?(\.[^.\/]*)?)$/,
		k = a.Path = {
			resolve: function() {
				var j = "",
					c, g = arguments,
					h, b = 0;
				for (c = g.length - 1; 0 <= c && !b; c--) h = g[c], "string" === typeof h && h && (j = h + "/" + j, b = "/" === h.charAt(0));
				j = f(a.filter(j.split("/"), function(a) {
					return !!a
				}), !b).join("/");
				return (b ? "/" : "") + j || "."
			},
			normalize: function(j) {
				var c =
					"/" === j.charAt(0),
					g = "/" === j.slice(-1),
					j = f(a.filter(j.split("/"), function(a) {
						return !!a
					}), !c).join("/");
				!j && !c && (j = ".");
				j && g && (j += "/");
				return (c ? "/" : "") + j
			},
			join: function() {
				var f = a.makeArray(arguments);
				return k.normalize(a.filter(f, function(a) {
					return a && "string" === typeof a
				}).join("/"))
			},
			relative: function(f, c) {
				var f = k.normalize(f),
					c = k.normalize(c),
					g = a.filter(f.split("/"), function(a) {
						return !!a
					}),
					h = [],
					b, d, i = a.filter(c.split("/"), function(a) {
						return !!a
					});
				d = Math.min(g.length, i.length);
				for (b = 0; b < d && g[b] === i[b]; b++);
				for (d = b; b < g.length;) h.push(".."), b++;
				h = h.concat(i.slice(d));
				return h = h.join("/")
			},
			basename: function(a, c) {
				var f;
				f = (a.match(h) || [])[3] || "";
				c && f && f.slice(-1 * c.length) === c && (f = f.slice(0, -1 * c.length));
				return f
			},
			dirname: function(a) {
				var c = a.match(h) || [],
					a = c[1] || "",
					c = c[2] || "";
				if (!a && !c) return ".";
				c && (c = c.substring(0, c.length - 1));
				return a + c
			},
			extname: function(a) {
				return (a.match(h) || [])[4] || ""
			}
		}
})(KISSY);
(function(a, f) {
	function h(b) {
		b._queryMap || (b._queryMap = a.unparam(b._query))
	}

	function k(a) {
		this._query = a || ""
	}

	function j(a, b) {
		return encodeURI(a).replace(b, function(a) {
			a = a.charCodeAt(0).toString(16);
			return "%" + (1 === a.length ? "0" + a : a)
		})
	}

	function c(b) {
		if (b instanceof c) return b.clone();
		var d = this;
		a.mix(d, {
			scheme: "",
			userInfo: "",
			hostname: "",
			port: "",
			path: "",
			query: "",
			fragment: ""
		});
		b = c.getComponents(b);
		a.each(b, function(b, c) {
			b = b || "";
			if ("query" === c) d.query = new k(b);
			else {
				try {
					b = a.urlDecode(b)
				} catch (l) {}
				d[c] = b
			}
		});
		return d
	}
	var g = /[#\/\?@]/g,
		n = /[#\?]/g,
		b = /[#@]/g,
		d = /#/g,
		i = RegExp("^(?:([\\w\\d+.-]+):)?(?://(?:([^/?#@]*)@)?([\\w\\d\\-\\u0100-\\uffff.+%]*|\\[[^\\]]+\\])(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),
		e = a.Path,
		o = {
			scheme: 1,
			userInfo: 2,
			hostname: 3,
			port: 4,
			path: 5,
			query: 6,
			fragment: 7
		};
	k.prototype = {
		constructor: k,
		clone: function() {
			return new k(this.toString())
		},
		reset: function(a) {
			this._query = a || "";
			this._queryMap = null;
			return this
		},
		count: function() {
			var b = 0,
				d, c;
			h(this);
			d = this._queryMap;
			for (c in d) a.isArray(d[c]) ?
				b += d[c].length : b++;
			return b
		},
		has: function(b) {
			var d;
			h(this);
			d = this._queryMap;
			return b ? b in d : !a.isEmptyObject(d)
		},
		get: function(a) {
			var b;
			h(this);
			b = this._queryMap;
			return a ? b[a] : b
		},
		keys: function() {
			h(this);
			return a.keys(this._queryMap)
		},
		set: function(b, d) {
			var c;
			h(this);
			c = this._queryMap;
			"string" === typeof b ? this._queryMap[b] = d : (b instanceof k && (b = b.get()), a.each(b, function(a, b) {
				c[b] = a
			}));
			return this
		},
		remove: function(a) {
			h(this);
			a ? delete this._queryMap[a] : this._queryMap = {};
			return this
		},
		add: function(a, b) {
			var d,
				c;
			if ("string" === typeof a) h(this), d = this._queryMap, c = d[a], c = c === f ? b : [].concat(c).concat(b), d[a] = c;
			else
				for (d in a instanceof k && (a = a.get()), a) this.add(d, a[d]);
			return this
		},
		toString: function(b) {
			h(this);
			return a.param(this._queryMap, f, f, b)
		}
	};
	c.prototype = {
		constructor: c,
		clone: function() {
			var b = new c,
				d = this;
			a.each(o, function(a, c) {
				b[c] = d[c]
			});
			b.query = b.query.clone();
			return b
		},
		resolve: function(b) {
			"string" === typeof b && (b = new c(b));
			var d = 0,
				f, i = this.clone();
			a.each("scheme,userInfo,hostname,port,path,query,fragment".split(","),
				function(c) {
					if (c === "path")
						if (d) i[c] = b[c];
						else {
							if (c = b.path) {
								d = 1;
								if (!a.startsWith(c, "/"))
									if (i.hostname && !i.path) c = "/" + c;
									else if (i.path) {
									f = i.path.lastIndexOf("/");
									f !== -1 && (c = i.path.slice(0, f + 1) + c)
								}
								i.path = e.normalize(c)
							}
						} else if (c === "query") {
						if (d || b.query.toString()) {
							i.query = b.query.clone();
							d = 1
						}
					} else if (d || b[c]) {
						i[c] = b[c];
						d = 1
					}
				});
			return i
		},
		getScheme: function() {
			return this.scheme
		},
		setScheme: function(a) {
			this.scheme = a;
			return this
		},
		getHostname: function() {
			return this.hostname
		},
		setHostname: function(a) {
			this.hostname =
				a;
			return this
		},
		setUserInfo: function(a) {
			this.userInfo = a;
			return this
		},
		getUserInfo: function() {
			return this.userInfo
		},
		setPort: function(a) {
			this.port = a;
			return this
		},
		getPort: function() {
			return this.port
		},
		setPath: function(a) {
			this.path = a;
			return this
		},
		getPath: function() {
			return this.path
		},
		setQuery: function(d) {
			"string" === typeof d && (a.startsWith(d, "?") && (d = d.slice(1)), d = new k(j(d, b)));
			this.query = d;
			return this
		},
		getQuery: function() {
			return this.query
		},
		getFragment: function() {
			return this.fragment
		},
		setFragment: function(b) {
			a.startsWith(b,
				"#") && (b = b.slice(1));
			this.fragment = b;
			return this
		},
		isSameOriginAs: function(a) {
			return this.hostname.toLowerCase() === a.hostname.toLowerCase() && this.scheme.toLowerCase() === a.scheme.toLowerCase() && this.port.toLowerCase() === a.port.toLowerCase()
		},
		toString: function(b) {
			var c = [],
				f, i;
			if (f = this.scheme) c.push(j(f, g)), c.push(":");
			if (f = this.hostname) {
				c.push("//");
				if (i = this.userInfo) c.push(j(i, g)), c.push("@");
				c.push(encodeURIComponent(f));
				if (i = this.port) c.push(":"), c.push(i)
			}
			if (i = this.path) f && !a.startsWith(i, "/") &&
				(i = "/" + i), i = e.normalize(i), c.push(j(i, n));
			if (b = this.query.toString.call(this.query, b)) c.push("?"), c.push(b);
			if (b = this.fragment) c.push("#"), c.push(j(b, d));
			return c.join("")
		}
	};
	c.Query = k;
	c.getComponents = function(b) {
		var d = (b || "").match(i) || [],
			c = {};
		a.each(o, function(a, b) {
			c[b] = d[a]
		});
		return c
	};
	a.Uri = c
})(KISSY);
(function(a, f) {
	function h(a) {
		var b = 0;
		return parseFloat(a.replace(/\./g, function() {
			return 0 === b++ ? "." : ""
		}))
	}

	function k(a, b) {
		var d;
		b.trident = 0.1;
		if ((d = a.match(/Trident\/([\d.]*)/)) && d[1]) b.trident = h(d[1]);
		b.core = "trident"
	}

	function j(a) {
		var b, d;
		return (b = a.match(/MSIE ([^;]*)|Trident.*; rv(?:\s|:)?([0-9.]+)/)) && (d = b[1] || b[2]) ? h(d) : 0
	}

	function c(a) {
		var b, d = "",
			c = "",
			e, i = [6, 9],
			r, q = n && n.createElement("div"),
			u = [],
			g = {
				webkit: f,
				trident: f,
				gecko: f,
				presto: f,
				chrome: f,
				safari: f,
				firefox: f,
				ie: f,
				ieMode: f,
				opera: f,
				mobile: f,
				core: f,
				shell: f,
				phantomjs: f,
				os: f,
				ipad: f,
				iphone: f,
				ipod: f,
				ios: f,
				android: f,
				nodejs: f
			};
		q && q.getElementsByTagName && (q.innerHTML = "<\!--[if IE {{version}}]><s></s><![endif]--\>".replace("{{version}}", ""), u = q.getElementsByTagName("s"));
		if (0 < u.length) {
			k(a, g);
			e = i[0];
			for (i = i[1]; e <= i; e++)
				if (q.innerHTML = "<\!--[if IE {{version}}]><s></s><![endif]--\>".replace("{{version}}", e), 0 < u.length) {
					g[c = "ie"] = e;
					break
				}
			if (!g.ie && (r = j(a))) g[c = "ie"] = r
		} else if ((e = a.match(/AppleWebKit\/([\d.]*)/)) && e[1]) {
			g[d = "webkit"] = h(e[1]);
			if ((e =
				a.match(/OPR\/(\d+\.\d+)/)) && e[1]) g[c = "opera"] = h(e[1]);
			else if ((e = a.match(/Chrome\/([\d.]*)/)) && e[1]) g[c = "chrome"] = h(e[1]);
			else if ((e = a.match(/\/([\d.]*) Safari/)) && e[1]) g[c = "safari"] = h(e[1]);
			if (/ Mobile\//.test(a) && a.match(/iPad|iPod|iPhone/)) {
				g.mobile = "apple";
				if ((e = a.match(/OS ([^\s]*)/)) && e[1]) g.ios = h(e[1].replace("_", "."));
				b = "ios";
				if ((e = a.match(/iPad|iPod|iPhone/)) && e[0]) g[e[0].toLowerCase()] = g.ios
			} else if (/ Android/i.test(a)) {
				if (/Mobile/.test(a) && (b = g.mobile = "android"), (e = a.match(/Android ([^\s]*);/)) &&
					e[1]) g.android = h(e[1])
			} else if (e = a.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/)) g.mobile = e[0].toLowerCase();
			if ((e = a.match(/PhantomJS\/([^\s]*)/)) && e[1]) g.phantomjs = h(e[1])
		} else if ((e = a.match(/Presto\/([\d.]*)/)) && e[1]) {
			if (g[d = "presto"] = h(e[1]), (e = a.match(/Opera\/([\d.]*)/)) && e[1]) {
				g[c = "opera"] = h(e[1]);
				if ((e = a.match(/Opera\/.* Version\/([\d.]*)/)) && e[1]) g[c] = h(e[1]);
				if ((e = a.match(/Opera Mini[^;]*/)) && e) g.mobile = e[0].toLowerCase();
				else if ((e = a.match(/Opera Mobi[^;]*/)) && e) g.mobile = e[0]
			}
		} else if (r =
			j(a)) g[c = "ie"] = r, k(a, g);
		else if (e = a.match(/Gecko/)) {
			g[d = "gecko"] = 0.1;
			if ((e = a.match(/rv:([\d.]*)/)) && e[1]) g[d] = h(e[1]), /Mobile|Tablet/.test(a) && (g.mobile = "firefox");
			if ((e = a.match(/Firefox\/([\d.]*)/)) && e[1]) g[c = "firefox"] = h(e[1])
		}
		b || (/windows|win32/i.test(a) ? b = "windows" : /macintosh|mac_powerpc/i.test(a) ? b = "macintosh" : /linux/i.test(a) ? b = "linux" : /rhino/i.test(a) && (b = "rhino"));
		g.os = b;
		g.core = g.core || d;
		g.shell = c;
		g.ieMode = g.ie && n.documentMode || g.ie;
		return g
	}
	var g = a.Env.host,
		n = g.document,
		g = g.navigator,
		b = KISSY.UA =
		c(g && g.userAgent || "");
	if ("object" === typeof process) {
		var d, i;
		if ((d = process.versions) && (i = d.node)) b.os = process.platform, b.nodejs = h(i)
	}
	b.getDescriptorFromUserAgent = c;
	d = "webkit,trident,gecko,presto,chrome,safari,firefox,ie,opera".split(",");
	i = n && n.documentElement;
	var e = "";
	i && (a.each(d, function(a) {
		var d = b[a];
		d && (e += " ks-" + a + (parseInt(d) + ""), e += " ks-" + a)
	}), a.trim(e) && (i.className = a.trim(i.className + e)))
})(KISSY);
(function(a, f) {
	function h(a) {
		if (w[a]) return w[a];
		if (!t || a in t) w[a] = {
			name: a,
			prefix: ""
		};
		else {
			for (var b = a.charAt(0).toUpperCase() + a.slice(1), d, e = c.length; e--;) d = c[e] + b, d in t && (w[a] = {
				name: d,
				prefix: c[e]
			});
			w[a] = w[a] || {
				name: a,
				prefix: !1
			}
		}
		return w[a]
	}
	var k = a.Env.host,
		j = a.UA,
		c = ["", "Webkit", "Moz", "O", "ms"],
		g = k.document || {},
		n, b, d, i, e, o, l, m = g.documentElement,
		t, s = !0,
		p = !1,
		r = "ontouchstart" in g && !j.phantomjs,
		q = j.ieMode;
	if (m && (m.querySelector && 8 !== q && (p = !0), t = m.style, a.each(c, function(a) {
		var b = a ? a + "Transition" : "transition",
			c = a ? a + "Transform" : "transform";
		e === f && b in t && (e = a, d = b);
		o === f && c in t && (o = a, i = c)
	}), s = "classList" in m, j = k.navigator || {}, n = "msPointerEnabled" in j, b = "pointerEnabled" in j, i)) try {
		var u = g.createElement("p");
		m.insertBefore(u, m.firstChild);
		u.style[i] = "translate3d(1px,1px,1px)";
		var x = k.getComputedStyle(u),
			E = x.getPropertyValue(i) || x[i];
		m.removeChild(u);
		l = E !== f && 0 < E.length && "none" !== E
	} catch (L) {
		l = !0
	}
	var w = {};
	a.Features = {
		isMsPointerSupported: function() {
			return n
		},
		isPointerSupported: function() {
			return b
		},
		isTouchEventSupported: function() {
			return r
		},
		isTouchGestureSupported: function() {
			return r || b || n
		},
		isDeviceMotionSupported: function() {
			return !!k.DeviceMotionEvent
		},
		isHashChangeSupported: function() {
			return "onhashchange" in k && (!q || 7 < q)
		},
		isTransitionSupported: function() {
			return e !== f
		},
		isTransformSupported: function() {
			return o !== f
		},
		isTransform3dSupported: function() {
			return l
		},
		isClassListSupported: function() {
			return s
		},
		isQuerySelectorSupported: function() {
			return !a.config("dom/selector") && p
		},
		isIELessThan: function(a) {
			return !!(q && q < a)
		},
		getTransitionPrefix: function() {
			return e
		},
		getTransformPrefix: function() {
			return o
		},
		getTransitionProperty: function() {
			return d
		},
		getTransformProperty: function() {
			return i
		},
		getVendorCssPropPrefix: function(a) {
			return h(a).prefix
		},
		getVendorCssPropName: function(a) {
			return h(a).name
		}
	}
})(KISSY);
(function(a) {
	(a.Loader = {}).Status = {
		ERROR: -1,
		INIT: 0,
		LOADING: 1,
		LOADED: 2,
		READY_TO_ATTACH: 3,
		ATTACHING: 4,
		ATTACHED: 5
	}
})(KISSY);
(function(a) {
	function f(a) {
		if ("string" === typeof a) return h(a);
		for (var b = [], d = 0, c = a.length; d < c; d++) b[d] = h(a[d]);
		return b
	}

	function h(b) {
		"/" === b.charAt(b.length - 1) && (b += "index");
		a.endsWith(b, ".js") && (b = b.slice(0, -3));
		return b
	}

	function k(b, d) {
		var c = d.indexOf("!");
		if (-1 !== c) {
			var e = d.substring(0, c),
				d = d.substring(c + 1);
			a.use(e, {
				sync: !0,
				success: function(a, c) {
					c.alias && (d = c.alias(b, d, e))
				}
			})
		}
		return d
	}
	var j = a.Loader,
		c = a.Path,
		g = a.Env.host,
		n = a.startsWith,
		b = j.Status,
		d = b.ATTACHED,
		i = b.READY_TO_ATTACH,
		e = b.LOADED,
		o =
		b.ATTACHING,
		l = b.ERROR,
		m = j.Utils = {},
		t = g.document;
	a.mix(m, {
		docHead: function() {
			return t.getElementsByTagName("head")[0] || t.documentElement
		},
		normalDepModuleName: function(a, b) {
			var d = 0,
				e;
			if (!b) return b;
			if ("string" === typeof b) return n(b, "../") || n(b, "./") ? c.resolve(c.dirname(a), b) : c.normalize(b);
			for (e = b.length; d < e; d++) b[d] = m.normalDepModuleName(a, b[d]);
			return b
		},
		createModulesInfo: function(b, d) {
			a.each(d, function(a) {
				m.createModuleInfo(b, a)
			})
		},
		createModuleInfo: function(b, d, c) {
			var d = h(d),
				e = b.Env.mods,
				f = e[d];
			return f ? f : e[d] = f = new j.Module(a.mix({
				name: d,
				runtime: b
			}, c))
		},
		getModules: function(b, d) {
			var c = [b],
				e, f, i, g, h = b.Env.mods;
			a.each(d, function(d) {
				e = h[d];
				!e || "css" !== e.getType() ? (f = m.unalias(b, d), (i = a.reduce(f, function(a, b) {
					g = h[b];
					return a && g && g.status >= o
				}, !0)) ? c.push(h[f[0]].exports) : c.push(null)) : c.push(void 0)
			});
			return c
		},
		attachModsRecursively: function(a, b) {
			var d, c = a.length;
			for (d = 0; d < c; d++) m.attachModRecursively(a[d], b)
		},
		checkModsLoadRecursively: function(a, b, d, c, e) {
			var d = d || [],
				e = e || {},
				f, i = 1,
				g = a.length,
				h = d.length;
			for (f = 0; f < g; f++) i = i && m.checkModLoadRecursively(a[f], b, d, c, e), d.length = h;
			return !!i
		},
		checkModLoadRecursively: function(a, b, d, c, f) {
			var g, h = b.Env.mods[a];
			if (a in f) return f[a];
			if (!h) return f[a] = !1;
			g = h.status;
			return g === l ? (c.push(h), f[a] = !1) : g >= i ? f[a] = !0 : g !== e ? f[a] = !1 : m.checkModsLoadRecursively(h.getNormalizedRequires(), b, d, c, f) ? (h.status = i, f[a] = !0) : f[a] = !1
		},
		attachModRecursively: function(a, b) {
			var d = b.Env.mods[a];
			d.status >= o || (d.status = o, d.cjs || m.attachModsRecursively(d.getNormalizedRequires(),
				b), m.attachMod(b, d))
		},
		attachMod: function(b, c) {
			var e = c.factory;
			if ("function" === typeof e) {
				var f;
				c.requires && c.requires.length && (f = a.bind(c.require, c));
				e = e.apply(c, c.cjs ? [b, f, c.exports, c] : m.getModules(b, c.getRequiresWithAlias()));
				void 0 !== e && (c.exports = e)
			} else c.exports = e;
			c.status = d
		},
		getModNamesAsArray: function(a) {
			"string" === typeof a && (a = a.replace(/\s+/g, "").split(","));
			return a
		},
		normalizeModNames: function(a, b, d) {
			return m.unalias(a, m.normalizeModNamesWithAlias(a, b, d))
		},
		unalias: function(a, b) {
			for (var d =
				[].concat(b), c, e, i, g = 0, h, j = a.Env.mods; !g;) {
				g = 1;
				for (c = d.length - 1; 0 <= c; c--)
					if ((e = j[d[c]]) && "alias" in e) {
						g = 0;
						i = e.alias;
						"string" === typeof i && (i = [i]);
						for (h = i.length - 1; 0 <= h; h--) i[h] || i.splice(h, 1);
						d.splice.apply(d, [c, 1].concat(f(i)))
					}
			}
			return d
		},
		normalizeModNamesWithAlias: function(a, b, d) {
			var c = [],
				e, i;
			if (b) {
				e = 0;
				for (i = b.length; e < i; e++) b[e] && c.push(k(a, f(b[e])))
			}
			d && (c = m.normalDepModuleName(d, c));
			return c
		},
		registerModule: function(b, d, c, f) {
			var d = h(d),
				i = b.Env.mods,
				g = i[d];
			g && void 0 !== g.factory || (m.createModuleInfo(b,
				d), g = i[d], a.mix(g, {
				name: d,
				status: e,
				factory: c
			}), a.mix(g, f))
		},
		getHash: function(a) {
			var b = 5381,
				d;
			for (d = a.length; - 1 < --d;) b = (b << 5) + b + a.charCodeAt(d);
			return b + ""
		},
		getRequiresFromFn: function(a) {
			var b = [];
			a.toString().replace(s, "").replace(p, function(a, d) {
				b.push(d.match(/^\s*["']([^'"\s]+)["']\s*$/)[1])
			});
			return b
		}
	});
	var s = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,
		p = /[^.'"]\s*require\s*\(([^)]+)\)/g
})(KISSY);
(function(a) {
	function f(a, d) {
		return d in a ? a[d] : a.runtime.Config[d]
	}

	function h(b) {
		a.mix(this, b)
	}

	function k(b) {
		this.exports = {};
		this.status = j.Status.INIT;
		this.factory = this.name = void 0;
		this.cjs = 1;
		a.mix(this, b);
		this.waitedCallbacks = []
	}
	var j = a.Loader,
		c = a.Path,
		g = j.Utils;
	h.prototype = {
		constructor: h,
		reset: function(b) {
			a.mix(this, b)
		},
		getTag: function() {
			return f(this, "tag")
		},
		getName: function() {
			return this.name
		},
		getBase: function() {
			return f(this, "base")
		},
		getPrefixUriForCombo: function() {
			var a = this.name;
			return this.getBase() +
				(a && !this.isIgnorePackageNameInUri() ? a + "/" : "")
		},
		getPackageUri: function() {
			this.packageUri || (this.packageUri = new a.Uri(this.getPrefixUriForCombo()));
			return this.packageUri
		},
		getBaseUri: function() {
			return f(this, "baseUri")
		},
		isDebug: function() {
			return f(this, "debug")
		},
		isIgnorePackageNameInUri: function() {
			return f(this, "ignorePackageNameInUri")
		},
		getCharset: function() {
			return f(this, "charset")
		},
		isCombine: function() {
			return f(this, "combine")
		},
		getGroup: function() {
			return f(this, "group")
		}
	};
	j.Package = h;
	k.prototype = {
		kissy: 1,
		constructor: k,
		use: function(a, d) {
			a = g.getModNamesAsArray(a);
			return KISSY.use(g.normalDepModuleName(this.name, a), d)
		},
		resolve: function(a) {
			return this.getFullPathUri().resolve(a)
		},
		resolveByName: function(a) {
			return g.normalDepModuleName(this.name, a)
		},
		require: function(b) {
			return a.require(b, this.name)
		},
		wait: function(a) {
			this.waitedCallbacks.push(a)
		},
		notifyAll: function() {
			for (var a, d = this.waitedCallbacks.length, c = 0; c < d; c++) {
				a = this.waitedCallbacks[c];
				try {
					a(this)
				} catch (e) {
					setTimeout(function() {
						throw e;
					}, 0)
				}
			}
			this.waitedCallbacks = []
		},
		getType: function() {
			var a = this.type;
			a || (this.type = a = ".css" === c.extname(this.name).toLowerCase() ? "css" : "js");
			return a
		},
		getFullPathUri: function() {
			var b, d, f, e;
			if (!this.fullPathUri) {
				if (this.fullpath) d = new a.Uri(this.fullpath);
				else {
					d = this.getPackage();
					b = d.getBaseUri();
					e = this.getPath();
					if (d.isIgnorePackageNameInUri() && (f = d.name)) e = c.relative(f, e);
					d = b.resolve(e);
					if (b = this.getTag()) b += "." + this.getType(), d.query.set("t", b)
				}
				this.fullPathUri = d
			}
			return this.fullPathUri
		},
		getFullPath: function() {
			var a;
			this.fullpath || (a = this.getFullPathUri(), this.fullpath = a.toString());
			return this.fullpath
		},
		getPath: function() {
			var a;
			if (!(a = this.path)) {
				a = this.name;
				var d = "." + this.getType(),
					f = "-min";
				a = c.join(c.dirname(a), c.basename(a, d));
				this.getPackage().isDebug() && (f = "");
				a = this.path = a + f + d
			}
			return a
		},
		getName: function() {
			return this.name
		},
		getPackage: function() {
			var b;
			if (!(b = this.packageInfo)) {
				var d = this.name;
				b = this.runtime.config("packages");
				var d = d + "/",
					c = "",
					e;
				for (e in b) a.startsWith(d, e + "/") && e.length > c.length && (c = e);
				b = this.packageInfo = b[c] || n
			}
			return b
		},
		getTag: function() {
			return this.tag || this.getPackage().getTag()
		},
		getCharset: function() {
			return this.charset || this.getPackage().getCharset()
		},
		getRequiresWithAlias: function() {
			var a = this.requiresWithAlias,
				d = this.requires;
			if (!d || 0 === d.length) return d || [];
			a || (this.requiresWithAlias = a = g.normalizeModNamesWithAlias(this.runtime, d, this.name));
			return a
		},
		getRequiredMods: function() {
			var b = this.runtime;
			return a.map(this.getNormalizedRequires(), function(a) {
				return g.createModuleInfo(b,
					a)
			})
		},
		getNormalizedRequires: function() {
			var a, d = this.normalizedRequiresStatus,
				c = this.status,
				e = this.requires;
			if (!e || 0 === e.length) return e || [];
			if ((a = this.normalizedRequires) && d === c) return a;
			this.normalizedRequiresStatus = c;
			return this.normalizedRequires = g.normalizeModNames(this.runtime, e, this.name)
		}
	};
	j.Module = k;
	var n = new h({
		name: "",
		runtime: a
	})
})(KISSY);
(function(a) {
	function f(a) {
		var d = 0;
		if (j.webkit) a.sheet && (d = 1);
		else if (a.sheet) try {
			a.sheet.cssRules && (d = 1)
		} catch (c) {
			"NS_ERROR_DOM_SECURITY_ERR" === c.name && (d = 1)
		}
		return d
	}

	function h() {
		for (var b in n) {
			var d = n[b],
				c = d.node;
			f(c, b) && (d.callback && d.callback.call(c), delete n[b])
		}
		g = a.isEmptyObject(n) ? 0 : setTimeout(h, k)
	}
	var k = 30,
		j = a.UA,
		c = a.Loader.Utils,
		g = 0,
		n = {};
	c.pollCss = function(a, d) {
		var c;
		c = n[a.href] = {};
		c.node = a;
		c.callback = d;
		g || h()
	};
	c.isCssLoaded = f
})(KISSY);
(function(a) {
	var f = a.Env.host.document,
		h = a.Loader.Utils,
		k = a.Path,
		j = {},
		c, g = a.UA;
	a.getScript = function(n, b, d) {
		function i() {
			var a = p.readyState;
			if (!a || "loaded" === a || "complete" === a) p.onreadystatechange = p.onload = null, r(0)
		}
		var e = b,
			o = 0,
			l, m, t, s;
		a.startsWith(k.extname(n).toLowerCase(), ".css") && (o = 1);
		a.isPlainObject(e) && (b = e.success, l = e.error, m = e.timeout, d = e.charset, t = e.attrs);
		e = j[n] = j[n] || [];
		e.push([b, l]);
		if (1 < e.length) return e.node;
		var p = f.createElement(o ? "link" : "script");
		t && a.each(t, function(a, b) {
			p.setAttribute(b,
				a)
		});
		d && (p.charset = d);
		o ? (p.href = n, p.rel = "stylesheet") : (p.src = n, p.async = !0);
		e.node = p;
		var r = function(b) {
				var d;
				if (s) {
					s.cancel();
					s = void 0
				}
				a.each(j[n], function(a) {
					(d = a[b]) && d.call(p)
				});
				delete j[n]
			},
			b = "onload" in p,
			d = a.Config.forceCssPoll || g.webkit && 536 > g.webkit;
		o && d && b && (b = !1);
		b ? (p.onload = i, p.onerror = function() {
			p.onerror = null;
			r(1)
		}) : o ? h.pollCss(p, function() {
			r(0)
		}) : p.onreadystatechange = i;
		m && (s = a.later(function() {
			r(1)
		}, 1E3 * m));
		c || (c = h.docHead());
		o ? c.appendChild(p) : c.insertBefore(p, c.firstChild);
		return p
	}
})(KISSY);
(function(a, f) {
	function h(b) {
		b = b.replace(/\\/g, "/");
		"/" !== b.charAt(b.length - 1) && (b += "/");
		g ? b = g.resolve(b) : (a.startsWith(b, "file:") || (b = "file:" + b), b = new a.Uri(b));
		return b
	}
	var k = a.Loader,
		j = k.Utils,
		c = a.Env.host.location,
		g, n, b = a.Config.fns;
	if (!a.UA.nodejs && c && (n = c.href)) g = new a.Uri(n);
	a.Config.loadModsFn = function(b, c) {
		a.getScript(b.fullpath, c)
	};
	b.packages = function(b) {
		var c, e = this.Config,
			g = e.packages = e.packages || {};
		return b ? (a.each(b, function(b, d) {
			c = b.name || d;
			var e = h(b.base || b.path);
			b.name = c;
			b.base = e.toString();
			b.baseUri = e;
			b.runtime = a;
			delete b.path;
			g[c] ? g[c].reset(b) : g[c] = new k.Package(b)
		}), f) : !1 === b ? (e.packages = {}, f) : g
	};
	b.modules = function(b) {
		var c = this;
		b && a.each(b, function(b, d) {
			var f = j.createModuleInfo(c, d, b);
			f.status === k.Status.INIT && a.mix(f, b)
		})
	};
	b.base = function(a) {
		var b = this.Config;
		if (!a) return b.base;
		a = h(a);
		b.base = a.toString();
		b.baseUri = a;
		return f
	}
})(KISSY);
(function(a, f) {
	function h(b, c, e, i, h) {
		var j = c && c.length,
			k = [],
			l = [];
		a.each(c, function(c) {
			var q, m = {
				timeout: h,
				success: function() {
					l.push(c);
					q && s && (d.registerModule(b, q.name, s.factory, s.config), s = f);
					--j || e(l, k)
				},
				error: function() {
					k.push(c);
					--j || e(l, k)
				},
				charset: i
			};
			c.combine || (q = c.mods[0], "css" === q.getType() ? q = f : g && (p = q.name, a.now(), m.attrs = {
				"data-mod-name": q.name
			}));
			a.Config.loadModsFn(c, m)
		})
	}

	function k(b, c) {
		a.mix(this, {
			runtime: b,
			waitingModules: c
		})
	}

	function j(a, b) {
		if (!a && "function" === typeof b && 1 < b.length) {
			var c =
				d.getRequiresFromFn(b);
			c.length && (a = a || {}, a.requires = c)
		} else a && a.requires && !a.cjs && (a.cjs = 0);
		return a
	}

	function c(a, b) {
		for (var a = a.split(/\//), b = b.split(/\//), c = Math.min(a.length, b.length), d = 0; d < c && a[d] === b[d]; d++);
		return a.slice(0, d).join("/") + "/"
	}
	var g = 10 > a.UA.ieMode,
		n = a.Loader,
		b = n.Status,
		d = n.Utils,
		i = d.getHash,
		e = b.LOADING,
		o = b.LOADED,
		l = b.READY_TO_ATTACH,
		m = b.ERROR,
		t = a.now();
	k.groupTag = t;
	var s, p;
	k.add = function(b, c, e, i, h) {
		if (3 === h && a.isArray(c)) var k = c,
			c = e,
			e = {
				requires: k,
				cjs: 1
			};
		if ("function" === typeof b ||
			1 === h)
			if (e = c, c = b, e = j(e, c), g) {
				for (var b = a.Env.host.document.getElementsByTagName("script"), l, h = b.length - 1; 0 <= h; h--)
					if (k = b[h], "interactive" === k.readyState) {
						l = k;
						break
					}
				b = l ? l.getAttribute("data-mod-name") : p;
				d.registerModule(i, b, c, e);
				p = null
			} else s = {
				factory: c,
				config: e
			};
		else g ? p = null : s = f, e = j(e, c), d.registerModule(i, b, c, e)
	};
	a.augment(k, {
		use: function(b) {
			var c = a.Config.timeout,
				e = this.runtime,
				b = a.keys(this.calculate(b));
			d.createModulesInfo(e, b);
			b = this.getComboUrls(b);
			a.each(b.css, function(b) {
				h(e, b, function(b,
					c) {
					a.each(b, function(b) {
						a.each(b.mods, function(b) {
							d.registerModule(e, b.name, a.noop);
							b.notifyAll()
						})
					});
					a.each(c, function(b) {
						a.each(b.mods, function(a) {
							a.status = m;
							a.notifyAll()
						})
					})
				}, b.charset, c)
			});
			a.each(b.js, function(b) {
				h(e, b, function() {
					a.each(b, function(b) {
						a.each(b.mods, function(a) {
							a.factory || (a.status = m);
							a.notifyAll()
						})
					})
				}, b.charset, c)
			})
		},
		calculate: function(a, b, c) {
			var f, g, i, h, j = this.waitingModules,
				k = this.runtime,
				c = c || {},
				b = b || {};
			for (f = 0; f < a.length; f++) g = a[f], b[g] || (b[g] = 1, i = d.createModuleInfo(k, g),
				h = i.status, h >= l || (h !== o && !j.contains(g) && (h !== e && (i.status = e, c[g] = 1), i.wait(function(a) {
					j.remove(a.name);
					j.notifyAll()
				}), j.add(g)), this.calculate(i.getNormalizedRequires(), b, c)));
			return c
		},
		getComboMods: function(b, e) {
			for (var f = {}, g, i = this.runtime, h = 0, j = b.length, k, l, m, n, p, o, s, G, I; h < j; ++h) {
				k = b[h];
				k = d.createModuleInfo(i, k);
				m = k.getType();
				I = k.getFullPath();
				l = k.getPackage();
				s = l.name;
				p = l.getCharset();
				n = l.getTag();
				G = l.getGroup();
				o = l.getPrefixUriForCombo();
				g = l.getPackageUri();
				var z = s;
				(k.canBeCombined = l.isCombine() &&
					a.startsWith(I, o)) && G ? (z = G + "_" + p + "_" + t, (l = e[z]) ? l.isSameOriginAs(g) ? l.setPath(c(l.getPath(), g.getPath())) : (z = s, e[s] = g) : e[z] = g.clone()) : e[s] = g;
				g = f[m] = f[m] || {};
				(m = g[z]) ? 1 === m.tags.length && m.tags[0] === n || m.tags.push(n) : (m = g[z] = [], m.charset = p, m.tags = [n]);
				m.push(k)
			}
			return f
		},
		getComboUrls: function(a) {
			var b = this.runtime.Config,
				c = b.comboPrefix,
				d = b.comboSep,
				e = b.comboMaxFileNum,
				b = b.comboMaxUrlLength,
				f = {},
				a = this.getComboMods(a, f),
				g = {},
				h;
			for (h in a) {
				g[h] = {};
				for (var j in a[h]) {
					var k = [],
						l = [],
						m = a[h][j],
						n = m.tags,
						p = (n = 1 < n.length ? i(n.join("")) : n[0]) ? "?t=" + encodeURIComponent(n) + "." + h : "",
						n = p.length,
						o = f[j].toString(),
						s = o.length,
						t = o + c,
						A = g[h][j] = [],
						o = t.length;
					A.charset = m.charset;
					A.mods = [];
					for (var J = function() {
						A.push({
							combine: 1,
							fullpath: t + k.join(d) + p,
							mods: l
						})
					}, C = 0; C < m.length; C++) {
						var B = m[C];
						A.mods.push(B);
						var D = B.getFullPath();
						if (B.canBeCombined) {
							if (D = D.slice(s).replace(/\?.*$/, ""), k.push(D), l.push(B), k.length > e || o + k.join(d).length + n > b) k.pop(), l.pop(), J(), k = [], l = [], C--
						} else A.push({
							combine: 0,
							fullpath: D,
							mods: [B]
						})
					}
					k.length &&
						J()
				}
			}
			return g
		}
	});
	n.ComboLoader = k
})(KISSY);
(function(a, f) {
	function h(b) {
		a.mix(this, {
			fn: b,
			waitMods: {}
		})
	}
	var k = a.Loader,
		j = a.Env,
		c = k.Utils,
		g = a.setImmediate,
		n = k.ComboLoader;
	h.prototype = {
		constructor: h,
		notifyAll: function() {
			var b = this.fn;
			b && a.isEmptyObject(this.waitMods) && (this.fn = null, b())
		},
		add: function(a) {
			this.waitMods[a] = 1
		},
		remove: function(a) {
			delete this.waitMods[a]
		},
		contains: function(a) {
			return this.waitMods[a]
		}
	};
	k.WaitingModules = h;
	a.mix(a, {
		add: function(b, c, f) {
			n.add(b, c, f, a, arguments.length)
		},
		use: function(b, d) {
			function i() {
				++t;
				var b = [];
				a.now();
				c.checkModsLoadRecursively(e, a, f, b) ? (c.attachModsRecursively(e, a), d && (m ? s() : g(s))) : b.length ? k && (m ? k.apply(a, b) : g(function() {
					k.apply(a, b)
				})) : (p.fn = i, j.use(e))
			}
			var e, j, k, m, t = 0,
				s, p = new h(i);
			a.isPlainObject(d) && (m = d.sync, k = d.error, d = d.success);
			s = function() {
				d.apply(a, c.getModules(a, b))
			};
			b = c.getModNamesAsArray(b);
			b = c.normalizeModNamesWithAlias(a, b);
			e = c.unalias(a, b);
			j = new n(a, p);
			m ? p.notifyAll() : g(function() {
				p.notifyAll()
			});
			return a
		},
		require: function(b, d) {
			if (b) {
				var f = c.unalias(a, c.normalizeModNamesWithAlias(a, [b], d));
				c.attachModsRecursively(f, a);
				return c.getModules(a, f)[1]
			}
		}
	});
	j.mods = {}
})(KISSY);
(function(a) {
	function f(f) {
		var e = f.src || "";
		if (!e.match(d)) return 0;
		var f = (f = f.getAttribute("data-config")) ? (new Function("return " + f))() : {},
			h = f.comboPrefix || g,
			k = f.comboSep || n,
			m, t = e.indexOf(h); - 1 === t ? m = e.replace(b, "$1") : (m = e.substring(0, t), "/" !== m.charAt(m.length - 1) && (m += "/"), h = e.substring(t + h.length).split(k), a.each(h, function(a) {
			if (a.match(d)) return m += a.replace(b, "$1"), !1
		}));
		"tag" in f || (h = e.lastIndexOf("?t="), -1 !== h && (e = e.substring(h + 1), f.tag = j.getHash(c + e)));
		f.base = f.base || m;
		return f
	}

	function h() {
		var a =
			k.getElementsByTagName("script"),
			b, c;
		for (b = a.length - 1; 0 <= b; b--)
			if (c = f(a[b])) return c;
		return null
	}
	var k = a.Env.host && a.Env.host.document,
		j = a.Loader.Utils,
		c = "20140818121916",
		g = "??",
		n = ",",
		b = /^(.*)(seed|kissy)(?:-min)?\.js[^/]*/i,
		d = /(seed|kissy)(?:-min)?\.js/i;
	a.config({
		comboPrefix: g,
		comboSep: n,
		charset: "utf-8",
		lang: "zh-cn"
	});
	a.UA.nodejs ? a.config({
		charset: "utf-8",
		base: __dirname.replace(/\\/g, "/").replace(/\/$/, "") + "/"
	}) : k && k.getElementsByTagName && a.config(a.mix({
		comboMaxUrlLength: 2E3,
		comboMaxFileNum: 40
	}, h()))
})(KISSY);
KISSY.add("i18n", {
	alias: function(a, f) {
		return f + "/i18n/" + a.Config.lang
	}
});
(function(a, f) {
	function h() {
		if (!b) {
			c && !j.nodejs && t(k, l, h);
			b = 1;
			for (var e = 0; e < d.length; e++) try {
				d[e](a)
			} catch (f) {
				setTimeout(function() {
					throw f;
				}, 0)
			}
		}
	}
	var k = a.Env.host,
		j = a.UA,
		c = k.document,
		g = c && c.documentElement,
		n = k.location,
		b = 0,
		d = [],
		i = /^#?([\w-]+)$/,
		e = /\S/,
		o = !(!c || !c.addEventListener),
		l = "load",
		m = o ? function(a, b, c) {
			a.addEventListener(b, c, !1)
		} : function(a, b, c) {
			a.attachEvent("on" + b, c)
		},
		t = o ? function(a, b, c) {
			a.removeEventListener(b, c, !1)
		} : function(a, b, c) {
			a.detachEvent("on" + b, c)
		};
	a.mix(a, {
		isWindow: function(a) {
			return null !=
				a && a == a.window
		},
		parseXML: function(a) {
			if (a.documentElement) return a;
			var b;
			try {
				k.DOMParser ? b = (new DOMParser).parseFromString(a, "text/xml") : (b = new ActiveXObject("Microsoft.XMLDOM"), b.async = !1, b.loadXML(a))
			} catch (c) {
				b = f
			}!b || !b.documentElement || b.getElementsByTagName("parsererror");
			return b
		},
		globalEval: function(a) {
			a && e.test(a) && (k.execScript ? k.execScript(a) : k.eval.call(k, a))
		},
		ready: function(c) {
			if (b) try {
				c(a)
			} catch (e) {
				setTimeout(function() {
					throw e;
				}, 0)
			} else d.push(c);
			return this
		},
		available: function(b, d) {
			var b =
				(b + "").match(i)[1],
				e = 1,
				f = a.later(function() {
					if (500 < ++e) f.cancel();
					else {
						var a = c.getElementById(b);
						a && (d(a), f.cancel())
					}
				}, 40, !0)
		}
	});
	if (n && -1 !== (n.search || "").indexOf("ks-debug")) a.Config.debug = !0;
	(function() {
		if (!c || "complete" === c.readyState) h();
		else if (m(k, l, h), o) {
			var a = function() {
				t(c, "DOMContentLoaded", a);
				h()
			};
			m(c, "DOMContentLoaded", a)
		} else {
			var b = function() {
				"complete" === c.readyState && (t(c, "readystatechange", b), h())
			};
			m(c, "readystatechange", b);
			var d, e = g && g.doScroll;
			try {
				d = null === k.frameElement
			} catch (f) {
				d = !1
			}
			if (e && d) {
				var i = function() {
					try {
						e("left"), h()
					} catch (a) {
						setTimeout(i, 40)
					}
				};
				i()
			}
		}
	})();
	if (j.ie) try {
		c.execCommand("BackgroundImageCache", !1, !0)
	} catch (s) {}
})(KISSY, void 0);
(function(a) {
	a.config({
		modules: {
			core: {
				alias: "dom,event,io,anim,base,node,json,ua,cookie".split(",")
			},
			ajax: {
				alias: "io"
			},
			"rich-base": {
				alias: "base"
			}
		}
	});
	if ("undefined" !== typeof location) {
		var f = a.startsWith(location.href, "https") ? "https://s.tbcdn.cn/s/kissy/" : "http://a.tbcdn.cn/s/kissy/";
		a.config({
			packages: {
				gallery: {
					base: f
				},
				kg: {
					base: "//g.alicdn.com/"
				},
				mobile: {
					base: f
				}
			}
		})
	}
})(KISSY);
(function(a, f, h) {
	a({
		"anim/transition?": {
			alias: KISSY.Features.isTransitionSupported() ? "anim/transition" : ""
		}
	});
	a({
		anim: {
			requires: ["anim/base", "anim/timer", "anim/transition?"]
		}
	});
	a({
		"anim/base": {
			requires: ["dom", "promise"]
		}
	});
	a({
		"anim/timer": {
			requires: ["dom", "anim/base"]
		}
	});
	a({
		"anim/transition": {
			requires: ["dom", "event/dom", "anim/base"]
		}
	});
	a({
		attribute: {
			requires: ["event/custom"]
		}
	});
	a({
		base: {
			requires: ["attribute"]
		}
	});
	a({
		button: {
			requires: ["node", "component/control"]
		}
	});
	a({
		color: {
			requires: ["attribute"]
		}
	});
	a({
		combobox: {
			requires: ["node", "component/control", "menu", "attribute", "io"]
		}
	});
	a({
		"component/container": {
			requires: ["component/control", "component/manager"]
		}
	});
	a({
		"component/control": {
			requires: ["node", "base", "promise", "component/manager", "xtemplate/runtime"]
		}
	});
	a({
		"component/extension/align": {
			requires: ["node"]
		}
	});
	a({
		"component/extension/content-render": {
			requires: ["component/extension/content-xtpl"]
		}
	});
	a({
		"component/extension/delegate-children": {
			requires: ["node", "component/manager"]
		}
	});
	a({
		"component/plugin/drag": {
			requires: ["dd"]
		}
	});
	a({
		"component/plugin/resize": {
			requires: ["resizable"]
		}
	});
	a({
		"date/format": {
			requires: ["date/gregorian", "i18n!date"]
		}
	});
	a({
		"date/gregorian": {
			requires: ["i18n!date"]
		}
	});
	a({
		"date/picker": {
			requires: "node,date/gregorian,i18n!date/picker,component/control,date/format,date/picker-xtpl".split(",")
		}
	});
	a({
		"date/popup-picker": {
			requires: ["date/picker-xtpl", "date/picker", "component/extension/shim", "component/extension/align"]
		}
	});
	a({
		dd: {
			requires: ["node", "base"]
		}
	});
	a({
		"dd/plugin/constrain": {
			requires: ["node", "base"]
		}
	});
	a({
		"dd/plugin/proxy": {
			requires: ["node", "dd", "base"]
		}
	});
	a({
		"dd/plugin/scroll": {
			requires: ["node", "dd", "base"]
		}
	});
	a({
		"dom/basic": {
			alias: ["dom/base", f.isIELessThan(9) ? "dom/ie" : "", f.isClassListSupported() ? "" : "dom/class-list"]
		},
		dom: {
			alias: ["dom/basic", !f.isQuerySelectorSupported() ? "dom/selector" : ""]
		}
	});
	a({
		"dom/base": {
			requires: ["ua"]
		}
	});
	a({
		"dom/class-list": {
			requires: ["dom/base"]
		}
	});
	a({
		"dom/ie": {
			requires: ["dom/base"]
		}
	});
	a({
		"dom/selector": {
			requires: ["dom/basic"]
		}
	});
	a({
		editor: {
			requires: ["node", "html-parser",
				"component/control", "ua"
			]
		}
	});
	a({
		event: {
			requires: ["event/dom", "event/custom"]
		}
	});
	a({
		"event/custom": {
			requires: ["event/base"]
		}
	});
	a({
		"event/dom": {
			alias: ["event/dom/base", f.isTouchGestureSupported() ? "event/dom/touch" : "", f.isDeviceMotionSupported() ? "event/dom/shake" : "", f.isHashChangeSupported() ? "" : "event/dom/hashchange", f.isIELessThan(9) ? "event/dom/ie" : "", h.ie ? "" : "event/dom/focusin"]
		}
	});
	a({
		"event/dom/base": {
			requires: ["event/base", "dom"]
		}
	});
	a({
		"event/dom/focusin": {
			requires: ["event/dom/base"]
		}
	});
	a({
		"event/dom/hashchange": {
			requires: ["event/dom/base",
				"dom"
			]
		}
	});
	a({
		"event/dom/ie": {
			requires: ["event/dom/base", "dom"]
		}
	});
	a({
		"event/dom/shake": {
			requires: ["event/dom/base"]
		}
	});
	a({
		"event/dom/touch": {
			requires: ["event/dom/base", "dom"]
		}
	});
	a({
		"filter-menu": {
			requires: ["menu", "component/extension/content-xtpl", "component/extension/content-render"]
		}
	});
	a({
		io: {
			requires: ["dom", "event/custom", "promise", "event/dom"]
		}
	});
	a({
		kison: {
			requires: ["base"]
		}
	});
	a({
		menu: {
			requires: "node,component/container,component/extension/delegate-children,component/control,component/extension/content-render,component/extension/content-xtpl,component/extension/align,component/extension/shim".split(",")
		}
	});
	a({
		menubutton: {
			requires: ["node", "button", "component/extension/content-xtpl", "component/extension/content-render", "menu"]
		}
	});
	a({
		mvc: {
			requires: ["io", "json", "attribute", "node"]
		}
	});
	a({
		node: {
			requires: ["dom", "event/dom", "anim"]
		}
	});
	a({
		overlay: {
			requires: "component/container,component/extension/shim,component/extension/align,node,component/extension/content-xtpl,component/extension/content-render".split(",")
		}
	});
	a({
		resizable: {
			requires: ["node", "base", "dd"]
		}
	});
	a({
		"resizable/plugin/proxy": {
			requires: ["node", "base"]
		}
	});
	a({
		"scroll-view": {
			alias: f.isTouchGestureSupported() ? "scroll-view/drag" : "scroll-view/base"
		}
	});
	a({
		"scroll-view/base": {
			requires: ["node", "anim", "component/container", "component/extension/content-render"]
		}
	});
	a({
		"scroll-view/drag": {
			requires: ["scroll-view/base", "node", "anim"]
		}
	});
	a({
		"scroll-view/plugin/pull-to-refresh": {
			requires: ["base"]
		}
	});
	a({
		"scroll-view/plugin/scrollbar": {
			requires: ["base", "node", "component/control"]
		}
	});
	a({
		separator: {
			requires: ["component/control"]
		}
	});
	a({
		"split-button": {
			requires: ["component/container",
				"button", "menubutton"
			]
		}
	});
	a({
		stylesheet: {
			requires: ["dom"]
		}
	});
	a({
		swf: {
			requires: ["dom", "json", "attribute"]
		}
	});
	a({
		tabs: {
			requires: ["component/container", "toolbar", "button"]
		}
	});
	a({
		toolbar: {
			requires: ["component/container", "component/extension/delegate-children", "node"]
		}
	});
	a({
		tree: {
			requires: ["node", "component/container", "component/extension/content-xtpl", "component/extension/content-render", "component/extension/delegate-children"]
		}
	});
	a({
		xtemplate: {
			requires: ["xtemplate/runtime", "xtemplate/compiler"]
		}
	});
	a({
		"xtemplate/compiler": {
			requires: ["xtemplate/runtime"]
		}
	});
	a({
		"xtemplate/runtime": {
			requires: ["path"]
		}
	})
})(function(a) {
	KISSY.config("modules", a)
}, KISSY.Features, KISSY.UA);
(function(a) {
	a.add("ua", function() {
		return a.UA
	});
	a.add("uri", function() {
		return a.Uri
	});
	a.add("path", function() {
		return a.Path
	});
	var f = a.UA,
		h = a.Env.host,
		k = (f.nodejs && "object" === typeof global ? global : h).JSON;
	9 > f.ieMode && (k = null);
	if (k) a.add("json", function() {
		return a.JSON = k
	}), a.parseJson = function(a) {
		return k.parse(a)
	};
	else {
		var j = /^[\],:{}\s]*$/,
			c = /(?:^|:|,)(?:\s*\[)+/g,
			g = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
			n = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g;
		a.parseJson = function(b) {
			return null ===
				b ? b : "string" === typeof b && (b = a.trim(b)) && j.test(b.replace(g, "@").replace(n, "]").replace(c, "")) ? (new Function("return " + b))() : a.error("Invalid Json: " + b)
		}
	}
	a.UA.nodejs && (a.KISSY = a, module.exports = a)
})(KISSY);
! function(a, b) {
	a.TB = a.TB || {};
	var c = TB.Global = {};
	c.version = "2.0", c.v = {}, c.util = {}, c.fn = {}, c.config = {}, c.ui = {}, c.init = function() {
		var a = this;
		c.el = c.util.$("J_SiteNav"), c.blacklist = c.blacklist || [];
		try {
			var d = location.search,
				e = d.length ? d.substring(1) : "",
				f = b.unparam(e);
			b.each(f, function(a, b) {~
				b.indexOf("fn-") && (c.v[b] = a)
			})
		} catch (g) {}
		c.el ? a.load("fn-core") : c.blacklist = c.blacklist.concat(["fn-core", "fn-login-info", "fn-tmsg", "fn-mini-cart", "fn-site-map"]), b.each(a.fn, function(d, e) {
			!b.inArray(e, c.blacklist) && a.load(e)
		}), a.init = function() {}
	}, c.get = function(a, b) {
		var c = this,
			d = c.config[a];
		return b ? d[b] : d
	}, c.set = function(a, c, d) {
		var e = this,
			f = e.config[a];
		b.isObject(c) ? b.each(c, function(b, c) {
			e.set(a, c, b)
		}) : f[c] = d
	}, c.add = function(a, b, c) {
		var d = this,
			c = c || {};
		d.fn[a] = b, d.config[a] = {}, d.set(a, c)
	}, c.load = function(a) {
		var b = this,
			c = b.get(a, "load");
		if (!c) {
			b.set(a, "load", !0);
			try {
				b.fn[a]()
			} catch (d) {}
		}
	}, c.use = function(a, d) {
		{
			var e = this,
				f = e.get(a, "exports");
			e.get(a, "callback") || []
		}
		b.isFunction(d) && (f ? d.call(e, c, f) : (e.get(a, "callback").push(d), e.load(a)))
	}, c.exports = function(a, b) {
		var d = this,
			e = d.get(a, "callback");
		for (d.set(a, "exports", b); e && e.length;) {
			var f = e.shift();
			f.call(d, c, b)
		}
	}, c.reload = function() {
		var a = ["fn-core", "fn-login-info", "fn-tmsg", "fn-mini-cart"];
		b.each(a, function(a) {
			c.set(a, {
				load: !1,
				isRender: !1
			}), c.isLogin = c.util.isLogin(), c.load(a)
		})
	}
}(window, KISSY), ! function(a, b) {
	var c = window,
		d = c.document,
		e = d.body,
		f = a.util,
		g = " ";
	f.isNotEmptyString = function(a) {
		return "string" == typeof a && "" !== a
	}, f.getCookie = function(a) {
		var b = d.cookie.match("(?:^|;)\\s*" + a + "=([^;]*)");
		return b && b[1] ? decodeURIComponent(b[1]) : ""
	}, f.setCookie = function(a, b, c, e, f, g) {
		var h = String(encodeURIComponent(b)),
			i = c;
		"number" == typeof i && (i = new Date, i.setTime(i.getTime() + 24 * c * 60 * 60 * 1e3)), i instanceof Date && (h += "; expires=" + i.toUTCString()), this.isNotEmptyString(e) && (h += "; domain=" + e), this.isNotEmptyString(f) && (h += "; path=" + f), g && (h += "; secure"), d.cookie = a + "=" + h
	}, f.$ = function(a) {
		return d.getElementById(a)
	}, f.selector = function(a, b) {
		var c = b ? d.getElementById(b) || b : d;
		if (d.querySelectorAll) return c.querySelectorAll("." + a);
		for (var e = c.getElementsByTagName("*"), g = e.length, h = [], i = 0; g > i; i++) {
			var j = e[i];
			f.hasClass(j, a) && h.push(j)
		}
		return h
	}, f.contains = function(a, b) {
		for (; b && "BODY" !== b.nodeName;) {
			if (a === b.parentNode) return !0;
			b = b.parentNode
		}
		return !1
	}, f.hasClass = function(a, b) {
		var c = a && a.className;
		return c && (g + c + g).indexOf(g + b + g) > -1
	}, f.addClass = function(a, c) {
		var d = a && a.className;
		a && (d = g + d + g, !~d.indexOf(g + c + g) && (a.className = b.trim(d + c)))
	}, f.removeClass = function(a, c) {
		var d = a && a.className;
		d && (d = (g + d + g).replace(g + c + g, g), a.className = b.trim(d))
	}, f.addEvent = function(a, b, c, d) {
		a && (a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c))
	}, f.removeEvent = function(a, b, c, d) {
		a && (a.removeEventListener ? a.removeEventListener(b, c, !!d) : a.detachEvent && a.detachEvent("on" + b, c))
	}, f.getEvent = function(a) {
		return a ? a : c.event
	}, f.getTarget = function(a) {
		return a.target || a.srcElement
	}, f.preventDefault = function(a) {
		a.preventDefault ? a.preventDefault() : a.returnValue = !1
	}, f.stopPropagation = function(a) {
		a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0
	}, f.css = function(a, b, d) {
		var e = function(a, b) {
				var d;
				if (c.getComputedStyle) d = c.getComputedStyle(a, null)[b];
				else if (d = a.currentStyle[b], "auto" === d && ("width" === b || "height" == b)) return f.getWH(a, b);
				return d
			},
			g = function(a, b, c) {
				a && (a.style[b] = c)
			};
		return d ? void g(a, b, d) : e(a, b)
	}, f.getWH = function(a, c, d) {
		if (!a) return "";
		var e = "width" === c ? a.offsetWidth : a.offsetHeight,
			g = "width" === c ? ["Left", "Right"] : ["Top", "Bottom"];
		return d ? ("border" === d && b.each(g, function(b) {
			e += parseFloat(f.css(a, "border" + b + "Width")) || 0
		}), "margin" === d && b.each(g, function(b) {
			e += parseFloat(f.css(a, "margin" + b)) || 0
		})) : b.each(g, function(b) {
			e -= parseFloat(f.css(a, "padding" + b)) || 0
		}), e + "px"
	}, f.isLogin = function() {
		var a = f.getCookie("_nk_") || f.getCookie("tracknick"),
			b = f.getCookie("_l_g_"),
			c = f.getCookie("lgc");
		return !!(b && a || c)
	}, f.fromUnicode = function(a) {
		return a.replace(/\\u([a-f\d]{4})/gi, function(a, b) {
			return String.fromCharCode(parseInt(b, 16))
		})
	}, f.encodeGBK = function(a) {
		function b(a) {
			return a ? c.ActiveXObject ? (execScript('SetLocale "zh-cn"', "vbscript"), a.replace(/[\d\D]/g, function(a) {
				return c.vbsval = "", execScript('window.vbsval=Hex(Asc("' + a + '"))', "vbscript"), "%" + c.vbsval.slice(0, 2) + "%" + c.vbsval.slice(-2)
			})) : (e.src = "http://www.atpanel.com/jsclick?globaljs=1&separator=" + a, e.src.split("&separator=").pop()) : ""
		}
		var e = d.createElement("img");
		return a.replace(/([^\x00-\xff]+)|([\x00-\xff]+)/g, function(a, c, d) {
			return b(c) + encodeURIComponent(d || "")
		})
	}, f.getNick = function(a) {
		var b = f.getCookie("_nk_"),
			c = f.getCookie("lgc"),
			d = f.fromUnicode(b || c);
		return a ? f.encodeGBK(d).toLowerCase() : d
	}, f.getTag = function() {
		return parseInt(b.unparam(f.getCookie("uc1")).tag)
	}, f.isDaily = function() {
		return !!~location.hostname.indexOf("daily.taobao.net")
	}, f.getHost = function() {
		return this.isDaily() ? ".daily.taobao.net" : ".taobao.com"
	}, f.getUA = function() {
		return c.navigator && c.navigator.userAgent || ""
	}, f.isIE6 = function() {
		var a = f.getUA(),
			b = a.match(/MSIE ([\w.]+)/);
		return !(!b || "6.0" !== b[1])
	}, f.isMobile = function() {
		var a = f.getUA();
		return !!a.match(/AppleWebKit.*Mobile.*/) || "ontouchstart" in d.documentElement
	}, f.isHttps = function() {
		return "https:" === location.protocol
	}, f.jsonp = function(a, d, e, f) {
		"function" == typeof d && (e = d, d = void 0);
		var g = b.guid("jsonp"),
			h = d && !b.isEmptyObject(d) && b.param(d) + "&" || "",
			i = "";
		b.isObject(f) && f.callbackName && (g = f.callbackName), c[g] = e, i += a + (~a.indexOf("?") ? "&" : "?") + h, i += "callback=" + g + "&t=" + b.now(), b.getScript(i, f || {})
	}, f.scrollTop = function() {
		var a = c.pageYOffset;
		return "number" != typeof a && (a = d.documentElement.scrollTop, "number" != typeof a && (a = e.scrollTop)), a
	}, a.isLogin = f.isLogin(), a.isIE6 = f.isIE6(), a.isMobile = f.isMobile(), a.isDaily = f.isDaily(), a.isHTTPS = f.isHttps(), a.host = f.getHost(), TB.namespace = TB.namespace || function() {
		b.namespace.apply(TB, arguments)
	}
}(TB.Global, KISSY), ! function(a) {
	var b = window,
		c = a.util;
	a.isMobile && c.addEvent(b, "DOMContentLoaded", function() {
		c.addClass(c.$("J_SiteNav"), "site-nav-mobile")
	})
}(TB.Global, KISSY), ! function(a, b) {
	var c = a.util,
		d = parseFloat(b.version);
	d > 1.1 && (b.config({
		packages: [{
			name: "tbc",
			path: c.isDaily() ? "http://g.assets.daily.taobao.net/tbc/" : "http://g.tbcdn.cn/tbc/",
			ignorePackageNameInUri: !0
		}]
	}), b.config({
		packages: [{
			name: "kg",
			path: c.isDaily() ? "http://g.assets.daily.taobao.net/kg/" : "http://g.tbcdn.cn/kg/",
			ignorePackageNameInUri: !0
		}]
	}), 1.2 === d && b.config({
		map: [
			[/(\/tbc\/)tbc\//g, "$1"]
		]
	}), window.TBC = {
		use: function(a, c) {
			var d = window._tbc_alias;
			if (d) return b.use(d[a], c);
			var e, f = new Date,
				g = [f.getFullYear(), f.getMonth(), f.getDate()].join("-"),
				h = window.localStorage && (window.JSON || b.JSON);
			return h && (e = localStorage.getItem("_tbc_alias"), e && (e = JSON.parse(e), e[g])) ? (d = window._tbc_alias = e[g], b.use(d[a], c)) : void b.getScript("//www.taobao.com/go/act/tbc/alias.php", function() {
				b.use(_tbc_alias[a], c), h && (e = {}, e[g] = _tbc_alias, localStorage.setItem("_tbc_alias", JSON.stringify(e)))
			})
		}
	}), d >= 1.4 && b.config({
		modules: {
			sizzle: {
				alias: ["node"]
			},
			ajax: {
				alias: ["io"]
			},
			calendar: {
				alias: ["gallery/calendar-deprecated/1.0/"]
			},
			datalazyload: {
				alias: ["gallery/datalazyload/1.0/"]
			},
			switchable: {
				alias: ["gallery/switchable/1.3.1/"]
			},
			imagezoom: {
				alias: ["gallery/imagezoom/1.0/"]
			},
			waterfall: {
				alias: ["gallery/waterfall/1.0/"]
			},
			flash: {
				alias: ["gallery/flash/1.0/"]
			}
		}
	})
}(TB.Global, KISSY), ! function(a, b) {
	var c = document,
		d = a.util;
	a.add("fn-core", function() {
		var e = {
				home: ['<li class="menu home" data-spm="1581860521">', '<div class="menu-hd">', a.isMobile ? '<a href="//www.taobao.com/" target="_top"><span class="g-icon">&#xe600;</span></a>' : '<a href="//www.taobao.com/" target="_top" class="h">\u6dd8\u5b9d\u7f51\u9996\u9875</a>', "</div>", "</li>"].join(""),
				loginInfo: a.isLogin ? '<li id="J_LoginInfo" class="J_Menu menu login-info" data-fn-name="fn-login-info" data-spm="754894437"></li>' : '<li id="J_LoginInfo" class="menu" data-spm="1997563269"><div id="J_LoginInfoHd" class="menu-hd"></div></li>',
				tmsg: a.isLogin ? ['<li id="J_Tmsg" class="tmsg" data-spm="1997563201"><div class="J_Menu menu" data-fn-name="fn-tmsg"><div class="menu-hd J_Tmsg_Basic tmsg_basic"><span class="J_Tmsg_Logo tmsg_logo_area" style="zoom:1;"><span class="J_Tmsg_Logo_Loading tmsg_logo_loading"></span> <span class="J_Tmsg_Logo_Icon tmsg_logo_icon g-icon" style="display:none">&#xe602;</span> <span class="J_Tmsg_Logo_Text tmsg_logo_text">\u6d88\u606f</span> <span class="J_Tmsg_Logo_Unread tmsg_logo_unread"></span></span> <span class="arrow-icon-wrapper"><span class="g-icon arrow-icon">&#xe605;</span></span></div><div class="menu-bd"><div class="J_Tmsg_Panel_Apps tmsg_panel_apps"></div></div></div>', '<div class="J_Tmsg_Panels tmsg_panels"><div class="J_Tmsg_Panel_Detail tmsg_panel_detail"></div><div class="J_Tmsg_Panel_history tmsg_panel_history"></div><div class="J_Tmsg_Panel_Strong tmsg_panel_strong"></div><div class="J_Tmsg_Panel_Setting tmsg_panel_setting"></div></div></li>'].join("") : "",
				myTaobao: ['<li class="J_Menu menu my-taobao" data-spm="1997525045">', '<div class="menu-hd J_MenuMyTaobao">', '<a href="//i' + a.host + '/my_taobao.htm" target="_top">\u6211\u7684\u6dd8\u5b9d</a>', '<span class="arrow-icon-wrapper"><span class="g-icon arrow-icon">&#xe605;</span></span>', "</div>", '<div class="menu-bd menu-list">', '<div class="menu-bd-panel">', '<a href="//trade' + a.host + '/trade/itemlist/list_bought_items.htm" target="_top">\u5df2\u4e70\u5230\u7684\u5b9d\u8d1d</a>', '<a href="//lu.taobao.com/newMyPath.htm" target="_top">\u6211\u7684\u8db3\u8ff9</a>', '<a href="//dongtai.taobao.com/hub/new_arrival.htm?scm=1046.1.7.1" target="_top">\u6211\u7684\u4e0a\u65b0</a>', '<a href="//guang.taobao.com/?scm=2022.1.1.1" target="_top">\u7231\u901b\u8857 <em class="J_GuangCount guang-count"></em></a>', '<a href="//daren.taobao.com/" target="_top">\u6dd8\u5b9d\u8fbe\u4eba</a>', '<a href="//love.taobao.com/" target="_top">\u65b0\u6b22</a>', a.isMobile ? '<a href="//i' + a.host + '/my_taobao.htm" target="_top" class="site-nav-btn">\u67e5\u770b\u6211\u7684\u6dd8\u5b9d</a>' : "", "</div>", "</div>", "</li>"].join(""),
				miniCart: ['<li id="J_MiniCart" class="J_Menu menu menu-empty" data-fn-name="fn-mini-cart" data-spm="1997525049">', '<div class="menu-hd">', '<a href="//cart.taobao.com/cart.htm?from=mini&ad_id=&am_id=&cm_id=&pm_id=1501036000a02c5c3739" target="_top">', '<span class="g-icon">&#xe603;</span>', "<span>\u8d2d\u7269\u8f66</span>", '<strong class="h"></strong>', "</a>", '<span class="arrow-icon-wrapper"><span class="g-icon arrow-icon">&#xe605;</span></span>', "</div>", '<div class="menu-bd">', '<div class="menu-bd-panel"></div>', "</div>", "</li>"].join(""),
				favorite: ['<li class="J_Menu menu favorite" data-spm="1997525053">', '<div class="menu-hd">', '<a href="//shoucang.taobao.com/shop_collect_list.htm" target="_top">', '<span class="g-icon">&#xe604;</span>', "<span>\u6536\u85cf\u5939</span>", "</a>", '<span class="arrow-icon-wrapper"><span class="g-icon arrow-icon">&#xe605;</span></span>', "</div>", '<div class="menu-bd menu-list">', '<div class="menu-bd-panel">', '<a href="//shoucang.taobao.com/item_collect.htm" target="_top">\u6536\u85cf\u7684\u5b9d\u8d1d</a>', '<a href="//shoucang.taobao.com/shop_collect_list.htm" target="_top">\u6536\u85cf\u7684\u5e97\u94fa</a>', "</div>", "</div>", "</li>"].join(""),
				guide: ['<li class="menu guide" data-spm="1997563209">', '<div class="menu-hd">', '<a href="//list.taobao.com/browse/cat-0.htm?taobao_from=6" target="_top">\u5546\u54c1\u5206\u7c7b</a>', "</div>", "</li>"].join(""),
				pipe: '<li class="site-nav-pipe">|</li>',
				sellerCenter: ['<li class="J_Menu menu seller-center" data-spm="1997525073">', '<div class="menu-hd">', '<a href="//mai' + a.host + '/seller_admin.htm" target="_top">\u5356\u5bb6\u4e2d\u5fc3</a>', '<span class="arrow-icon-wrapper"><span class="g-icon arrow-icon">&#xe605;</span></span>', "</div>", '<div class="menu-bd menu-list">', '<div class="menu-bd-panel">', '<a href="//mai.taobao.com/seller_admin.htm" target="_top">\u514d\u8d39\u5f00\u5e97</a>', '<a href="//trade' + a.host + '/trade/itemlist/list_sold_items.htm" target="_top">\u5df2\u5356\u51fa\u7684\u5b9d\u8d1d</a>', '<a href="//sell' + a.host + '/auction/goods/goods_on_sale.htm" target="_top">\u51fa\u552e\u4e2d\u7684\u5b9d\u8d1d</a>', '<a href="//fuwu' + a.host + '/?tracelog=tbdd" target="_top">\u5356\u5bb6\u670d\u52a1\u5e02\u573a</a>', '<a href="//daxue.taobao.com" target="_top">\u5356\u5bb6\u57f9\u8bad\u4e2d\u5fc3</a>', "</div>", "</div>", "</li>"].join(""),
				mobile: ['<li class="menu mobile" data-spm="1997563273">', '<div class="menu-hd">', '<a href="//www.taobao.com/m" target="_top">\u624b\u673a\u901b\u6dd8\u5b9d</a>', "</div>", "</li>"].join(""),
				service: ['<li class="menu service" data-spm="754895749">', '<div class="menu-hd">', '<a href="//service.taobao.com/support/main/service_center.htm" target="_top">\u8054\u7cfb\u5ba2\u670d</a>', "</div>", "</li>"].join(""),
				siteMap: ['<li id="J_SiteMap" class="J_Menu menu site-map" data-fn-name="fn-site-map" data-spm="1997525077">', '<div class="menu-hd">', '<a href="//www.taobao.com/sitemap.php?id=sitemap2" target="_top">', '<span class="g-icon">&#xe601;</span>', "<span>\u7f51\u7ad9\u5bfc\u822a</span>", "</a>", '<span class="arrow-icon-wrapper"><span class="g-icon arrow-icon">&#xe605;</span></span>', "</div>", '<div class="menu-bd"><div id="J_SiteMapBd" class="menu-bd-panel"></div></div>', "</li>"].join(""),
				suggest: ['<li class="menu global-suggest" data-fn-name="fn-suggest">', '<div class="search-panel">', '<form target="_top" action="//s.taobao.com/search">', '<div class="search-button"><button class="g-icon btn-search" type="submit">\u0151</button></div>', '<div class="search-panel-fields search-common-panel">', '<input id="J_GlobalSuggestInput" value="" name="q" aria-label="\u641c\u7d22" placeholder="\u641c\u7d22" accesskey="s" autocomplete="off">', "</div>", "</form>", "</div>", "</li>"].join(""),
				weekend: '<li id="J_Weekend" class="menu weekend" data-spm="1996803849"></li>'
			},
			f = ["loginInfo", "tmsg", "mobile", "weekend"],
			g = ["myTaobao", "miniCart", "favorite", "guide", "pipe", "sellerCenter", "service", "siteMap"],
			h = null,
			i = 200,
			j = function() {
				this.init()
			};
		j.prototype.init = function() {
			var a = this;
			a.render(), a.bind()
		}, j.prototype.render = function() {
			var b = this,
				c = d.$("J_SiteNavBdL"),
				h = d.$("J_SiteNavBdR");
			a.ui = a.ui || {}, f = a.ui.l || f, g = a.ui.r || g, a.isMobile ? ("home" !== f[0] && f.unshift("home"), e.mobile = "", a.isLogin || (e.myTaobao = "", e.miniCart = "", e.favorite = "", e.guide = "", e.sellerCenter = "")) : "home" !== g[0] && g.unshift("home"), c.innerHTML = b.renderUI(f), h.innerHTML = b.renderUI(g)
		}, j.prototype.bind = function() {
			var e = this;
			e.$menus = d.selector("J_Menu", a.el), e.menuCls = a.isMobile ? "menu-click" : "menu-hover", b.each(e.$menus, function(a) {
				e.menuBind(a)
			}), a.isMobile && d.addEvent(c, "click", function() {
				e.menuClose()
			})
		}, j.prototype.renderUI = function(a) {
			var c = "";
			return b.each(a, function(a) {
				c += b.isObject(a) ? a.tpl : e[a]
			}), c
		}, j.prototype.menuBind = function(c) {
			var e = this,
				f = function(a) {
					var b = d.getEvent(a),
						f = d.getTarget(b),
						g = d.selector("menu-hd", c)[0];
					d.stopPropagation(b), d.contains(g, f) && (d.preventDefault(b), d.hasClass(c, e.menuCls) ? e.menuClose(c) : (e.menuClose(), e.menuOpen(c)))
				},
				g = function(a) {
					var f = d.getEvent(a),
						g = f.type,
						j = f.relatedTarget || ("mouseover" === g ? f.fromElement : f.toElement);
					d.contains(c, j) || j === c || (h && h.cancel(), h = b.later(function() {
						"mouseover" === g ? (e.menuClose(), e.menuOpen(c)) : e.menuClose()
					}, i))
				};
			a.isMobile ? d.addEvent(c, "click", f) : (d.addEvent(c, "mouseover", g), d.addEvent(c, "mouseout", g))
		}, j.prototype.menuOpen = function(b) {
			var c = this,
				e = b.getAttribute("data-fn-name");
			if (e) {
				var f = a.get(e, "exports"),
					g = a.get(e, "isRender"),
					h = a.get(e, "cbRender");
				g || (a.set(e, "isRender", !0), a.set(e, "cbResult", f[h]())), a.get(e, "cbResult") && d.addClass(b, c.menuCls)
			} else d.addClass(b, c.menuCls);
			a.isIE6 && !a.isHTTPS && c.iframeShim(b)
		}, j.prototype.menuClose = function(a) {
			var c = this;
			a ? d.removeClass(a, c.menuCls) : b.each(c.$menus, function(a) {
				d.removeClass(a, c.menuCls)
			})
		}, j.prototype.iframeShim = function(a) {
			a.getAttribute("data-iframe-shim")
		}, a.exports("fn-core", new j)
	})
}(TB.Global, KISSY), ! function(a, b) {
	var c = a.util,
		d = "fn-login-info";
	a.writeLoginInfo = function(a, b) {
		var c = this;
		c.set(d, a || {}), c.set(d, "async", b || !1)
	}, a.add(d, function() {
		var e = function() {
			this.el = c.$("J_LoginInfo"), this.init()
		};
		e.prototype.init = function() {
			var b = this,
				e = a.get(d),
				f = b.getLoginInfo(e);
			a.isLogin ? b.el.innerHTML = f : c.$("J_LoginInfoHd").innerHTML = f
		}, e.prototype.render = function() {
			var a = this;
			return a.getAvatar(), a.getMedals(), a.WeiboBind(), !0
		}, e.prototype.getAvatar = function() {
			var a = c.$("J_UserAvatar"),
				b = a.getElementsByTagName("img")[0];
			b.setAttribute("src", b.getAttribute("data-lazy"))
		}, e.prototype.getMedals = function() {
			var d = this,
				e = c.getHost(),
				f = c.getNick(!0),
				g = "//vipservice" + e + "/medal/GetUserVisibleMedals.do?nick=" + f,
				h = function(e) {
					var f = c.$("J_UserMedal"),
						g = c.$("J_UserMedalCont"),
						h = c.$("J_UserMedalFt"),
						i = c.$("J_ArrowL"),
						j = c.$("J_ArrowR"),
						k = e && e.userMedals,
						l = k.length,
						m = "",
						n = Math.ceil(l / 5) - 1,
						o = 0;
					if (l && e.isSuccess) {
						b.each(k, function(a) {
							m += b.substitute('<a href="{medalUrl}" target="_top" title="{medalName}"><img src="{pic}"></a>', a)
						}), c.removeClass(f, "site-nav-loading"), g.innerHTML = m, 5 >= l && (h.style.display = "none");
						var p = function() {
							g.style.left = -205 * o + "px"
						};
						c.addEvent(i, "click", function(a) {
							var b = c.getEvent(a);
							c.preventDefault(b), c.stopPropagation(b), o > 0 && (o -= 1, p())
						}), c.addEvent(j, "click", function(a) {
							var b = c.getEvent(a);
							c.preventDefault(b), c.stopPropagation(b), n > o && (o += 1, p())
						})
					} else f.style.display = "none";
					a.use("fn-core", function(a, b) {
						b.iframeShim(d.el, !0)
					})
				};
			c.jsonp(g, {
				from: "diaoding"
			}, h, {
				charset: "utf-8",
				callbackName: "getUserVisibleMedals"
			})
		}, e.prototype.WeiboBind = function() {
			var a = c.getHost(),
				b = c.getNick(!0),
				d = "http://member1" + a + "/member/weibo_bind_tag.do?nick=" + b,
				e = function(a) {
					a.success && a.weiboTag && (c.$("J_WeiboBindIcon").style.display = "block")
				};
			c.jsonp(d, e)
		}, e.prototype.getLoginTpl = function(b) {
			var c = '<a href="{spaceUrl}" target="_top">{nick}</a>',
				d = '<img src="//wwc.taobaocdn.com/avatar/getAvatar.do?userNick={userNick}&width=30&height=30&type=sns" width="30" height="30">',
				e = '<a href="//vip.taobao.com" target="_top" class="vip-icon vip-icon-{tag}"></a>',
				f = '<a href="//vip.taobao.com/growth_info.htm" target="_top" class="vip-icon vip-icon-{tag}"></a>';
			(-1 === b || isNaN(b)) && (e = "", f = ""), a.isMobile ? (c = "", e = "") : d = "";
			var g = '<a href="{loginUrl}" target="_top" class="h">\u4eb2\uff0c\u8bf7\u767b\u5f55</a> <a href="{regUrl}" target="_top">\u514d\u8d39\u6ce8\u518c</a>',
				h = ['<div class="menu-hd">', d, c, e, '<span class="arrow-icon-wrapper"><span class="g-icon arrow-icon">&#xe605;</span></span>', "</div>", '<div class="menu-bd">', '<div class="menu-bd-panel">', '<a href="//i.taobao.com/my_taobao.htm?ad_id=&am_id=&cm_id=&pm_id=1501036000a02c5c3739" target="_top" id="J_UserAvatar" class="user-avatar">', '<img src="//a.tbcdn.cn/g/s.gif" data-lazy="//wwc.taobaocdn.com/avatar/getAvatar.do?userNick={userNick}&width=80&height=80&type=sns" width="80" height="80">', "</a>", '<div class="user-info">', '<p class="user-operate">', '<a href="//member1' + a.host + '/member/fresh/account_security.htm" target="_top">\u8d26\u53f7\u7ba1\u7406</a>', '<span class="site-nav-pipe">|</span>', '<a href="{logoutUrl}" target="_top">\u9000\u51fa</a>', "</p>", "<p>", f, '<a href="//login.taobao.com/aso/logintowb?target=//weibo.com" target="_top" id="J_WeiboBindIcon" class="weibo-bind-icon"></a>', "</p>", "<p>", '<a href="{powerUrl}" target="_top"><strong>{powerTit}</strong></a>', "</p>", "<p>", '<a href="{serviceUrl}" target="_top">{serviceTit}</a>', "</p>", "</div>", '<div id="J_UserMedal" class="user-medal site-nav-loading">', '<div class="user-medal-bd">', '<div id="J_UserMedalCont" class="user-medal-cont"></div>', "</div>", '<div id="J_UserMedalFt" class="user-medal-ft">', '<a href="javascript:;" target="_top" id="J_ArrowL" class="arrow-l"><em></em><span></span></a>', '<a href="javascript:;" target="_top" id="J_ArrowR" class="arrow-r"><em></em><span></span></a>', "</div>", "</div>", "</div>", "</div>"].join("");
			return a.isLogin ? h : g
		}, e.prototype.getLoginInfo = function(d) {
			var e = this,
				f = d.loginServer || "https://login" + a.host,
				g = d.loginServer || "//login" + a.host,
				h = d.loginUrl || f + "/member/login.jhtml?f=top",
				i = d.logoutUrl || g + "/member/logout.jhtml?f=top&out=true",
				j = "//reg" + a.host + "/member/new_register.jhtml?from=tbtop&ex_info=&ex_sign=",
				k = "//i" + a.host + "/my_taobao.htm?ad_id=&am_id=&cm_id=&pm_id=1501036000a02c5c3739",
				l = c.getNick(),
				m = c.getNick(!0),
				n = c.getTag(),
				o = location.href;
			/^http.*(\/member\/login\.jhtml)$/i.test(o) && (o = "");
			var p = d.redirectUrl || o;
			h += (~h.indexOf("?") ? "&" : "?") + "redirectURL=" + encodeURIComponent(p), i += (~i.indexOf("?") ? "&" : "?") + "redirectURL=" + encodeURIComponent(p);
			var q, r, s, t;
			0 === n || -1 === n ? (q = "//new.taobao.com/?ad_id=&am_id=1301066543d8134877ba&cm_id=&pm_id=", r = "\u65b0\u624b\u8d2d\u7269\u5165\u95e8\u6559\u5b66", s = "//vip.taobao.com/newuser/newGift.htm", t = "\u5feb\u53bb\u9886\u65b0\u4eba\u793c\u91d1!") : (7 === n ? (q = "//vip.taobao.com/vip_club.htm", r = "\u7acb\u523b\u6fc0\u6d3b\u6211\u7684\u8eab\u4efd") : (q = "//vip.taobao.com/growth_info.htm", r = "\u67e5\u770b\u6211\u7684\u4f1a\u5458\u7279\u6743"), n > 2 && 7 > n ? (s = "//service.taobao.com/support/minerva/robot_main.htm?dcs=2&sourceId=1215183713&businessId=100&moduleGroupId=taobaocrm", t = "\u6211\u7684\u5ba2\u670d") : (s = "//vip.taobao.com/growth_info.htm", t = "\u6211\u7684\u6210\u957f"));
			var u = e.getLoginTpl(n),
				v = {
					loginUrl: h,
					logoutUrl: i,
					regUrl: j,
					spaceUrl: k,
					nick: l,
					tag: n,
					userNick: m,
					powerUrl: q,
					powerTit: r,
					serviceUrl: s,
					serviceTit: t
				};
			return b.substitute(u, v)
		}, a.set(d, {
			exports: new e,
			cbRender: "render"
		})
	})
}(TB.Global, KISSY),
function(a, b) {
	a.add("fn-tmsg", function() {
		function c() {
			a.set("fn-tmsg", {
				isRender: !1,
				cbRender: "showList",
				exports: {
					showList: function() {
						return !i && j && TMsg.base.renderHover(), a.set("fn-tmsg", "isRender", !1), !0
					}
				}
			})
		}

		function d() {
			a.util.isLogin() ? b.use("core", function() {
				b.getScript(g + h, function() {
					j ? b.use("tbc/umpp/" + f + "/", function() {
						b.use("tbc/tmsg/" + e + "/", c)
					}) : c()
				})
			}) : j ? b.use("tbc/umpp/" + f + "/") : b.use("core", function() {
				b.getScript(g + h + "?t=" + b.now())
			})
		}
		var e = a.v["fn-tmsg"] || "3.0.8",
			f = a.v["fn-umpp"] || "1.4.20",
			g = "http://g." + (a.util.isDaily() ? "assets.daily.taobao.net" : "tbcdn.cn") + "/tbc/",
			h = a.util.isLogin() ? "??umpp/" + f + "/index-min.js,tmsg/" + e + "/index-min.js" : "umpp/" + f + "/index-min.js",
			i = window.ActiveXObject && !window.XMLHttpRequest,
			j = parseFloat(b.version) >= 1.2;
		if (window.TMsg && b.TBC && b.TBC.umpp) try {
			b.TBC.umpp.destroy(), TMsg.base.destroy(), b.TBC.umpp.init(), a.util.isLogin() && TMsg.base.init()
		} catch (k) {} else b.ready(function() {
			d()
		})
	})
}(TB.Global, KISSY), ! function(a, b) {
	function c(a) {
		if (b && b.unparam) return d.userCookie && "2" == d.userCookie.version ? b.unparam(a, "&amp;") : b.unparam(a);
		if (a) {
			for (var c = a.split("&"), e = {}, f = 0; f < c.length; f++) {
				var g = c[f].split("=");
				e[g[0]] = e[g[1]]
			}
			return e
		}
		return {}
	}
	var d = window,
		e = "fn-mini-cart",
		f = a.util,
		g = "g_config" in d && "appId" in d.g_config ? parseInt(d.g_config.appId) : void 0,
		h = "mini-cart",
		i = "menu-empty",
		j = f.getHost();
	a.setCartNum = function(b) {
		a.use("fn-mini-cart", function(a, c) {
			c.setCartNum.call(c, b)
		})
	}, a.add(e, function() {
		function k() {
			var a = this;
			this.$cart = f.$("J_MiniCart"), this.$cart && (f.addClass(this.$cart, i), f.addEvent(f.$("mc-menu-hd"), "click", function() {
				f.removeClass(a.$cart, "menu-hover"), d.MiniCart && (d.MiniCart._clicked = !1);
				var b = new Image;
				b.src = "http://gm.mmstat.com/tbcart.1.56&t=" + +new Date
			}), this.update()), this.cartNum = 0, d.MiniCart && d.MiniCart.reset && d.MiniCart.reset()
		}
		k.prototype.update = function() {
			function a(c) {
				if (c = c || 0) {
					var e = {
						keys: "TCART_234_" + c + "_q",
						t: b.now()
					};
					f.jsonp(o, e, function(b) {
						if (b) {
							var c = k >= 0 ? k : m ? 1 : 0;
							d.setCartNum(b[e.keys]), f.setCookie("mt", "ci=" + b[e.keys] + "_" + c + (l ? "&" + l : ""), 7, j)
						} else m && a()
					})
				} else b.getScript(n + "callback=TB.Global.setCartNum&t=" + +new Date + (g ? "&appid=" + g : ""))
			}
			var d = this,
				e = c(f.getCookie("mt")),
				h = e && e.ci ? e.ci.split("_") : [void 0, void 0],
				i = parseInt(h[0], 10),
				k = parseInt(h[1], 10),
				l = e ? e.cp : void 0,
				m = f.isLogin(),
				n = "//cart" + j + "/top_cart_quantity.htm?",
				o = "//count." + (f.isDaily() ? "config-vip.taobao.net:8888" : "tbcdn.cn") + "/counter6";
			if (d._OFF = 0 > h, m) e ? 1 == k ? d.setCartNum(i) : a() : a(f.getCookie("unb"));
			else {
				var p = f.getCookie("t");
				p ? i >= 0 ? d.setCartNum(i) : a(p) : d.setCartNum(0)
			}
		}, k.prototype.setCartNum = function(a) {
			var c = this;
			if (b.isNumber(a) && !c._OFF && c.$cart) {
				var e = c.$cart.getElementsByTagName("a")[0],
					k = '<span class="g-icon">&#xe603;</span><span>\u8d2d\u7269\u8f66</span>',
					l = 19 !== g;
				0 > a && (c._OFF = -1 === a, e.innerHTML = k, f.removeClass(c.$cart, h), d.MiniCart && c.off()), e.innerHTML = k + (c._OFF !== !0 ? '<strong id="J_MiniCartNum" class="h">' + a + "</strong>" : ""), e.href = "http://cart" + j + "/cart.htm?from=mini&ad_id=&am_id=&cm_id=&pm_id=1501036000a02c5c3739", f.addClass(c.$cart, h), c._OFF !== !0 || f.isMobile() || (l = !1), f[(l ? "remove" : "add") + "Class"](c.$cart, i), f.addClass(c.$cart, "menu"), e.id = "mc-menu-hd", d.MiniCart && (d.MiniCart.cartNum = a, d.MiniCart.isExpired = !0)
			}
		}, k.prototype.off = function() {
			var a = f.selector("menu-bd-panel", "J_MiniCart");
			return a && a[0] ? (a[0].innerHTML = d.MiniCart._parseMsg(" "), f.addClass(a[0], "mini-cart-closed"), !0) : (f.addClass(self.$cart, i), !1)
		}, k.prototype.renderMenu = function() {
			var c = this;
			return 19 !== g ? c._OFF !== !0 || f.isMobile() ? (d.MiniCart ? d.MiniCart.render() : b.ready(function() {
				var g = a.v[e] || "0.1.3";
				b.getScript("http://" + (f.isDaily() ? "g.assets.daily.taobao.net" : "g.tbcdn.cn") + "/tb/cart/" + g + "/mini/minicart-min.js", function() {
					var a = f.$("J_MiniCartNum"),
						b = a ? a.innerHTML : -1;
					return -1 === b || c._OFF === !0 ? c.off() : void d.MiniCart.init(b, !0)
				})
			}), !0) : (f.addClass(c.$cart, i), !1) : !1
		}, a.set(e, {
			exports: new k,
			cbRender: "renderMenu",
			isRender: !1
		})
	}, {})
}(TB.Global, KISSY), ! function(a, b) {
	var c = a.util,
		d = "fn-site-map",
		e = "//www.taobao.com/go/rgn/global/site-map-ajax.php";
	a.add(d, function() {
		var f = function() {
			this.el = c.$("J_SiteMap"), this.init()
		};
		f.prototype.init = function() {}, f.prototype.render = function() {
			var f = this,
				g = c.$("J_SiteNavBd"),
				h = c.$("J_SiteMapBd");
			if (!a.isMobile) {
				var i = parseFloat(c.css(g, "width")) - 18 + "px";
				c.css(h, "width", i)
			}
			return c.jsonp(a.get(d, "url") || e, function(d) {
				if (!h) return !1;
				h.innerHTML = d;
				var e = c.selector("mod-wrap", h),
					g = 0;
				b.each(e, function(a) {
					var b = parseInt(c.css(a, "height"));
					b > g && (g = b)
				}), b.each(e, function(a) {
					c.css(a, "height", g + "px")
				}), a.use("fn-core", function(a, b) {
					b.iframeShim(f.el, !0)
				})
			}), !0
		}, a.set(d, {
			exports: new f,
			cbRender: "render"
		})
	})
}(TB.Global, KISSY),
function(a, b) {
	a.add("fn-webww", function() {
		var c = window.g_config,
			d = c ? c.appId : "",
			e = a.v["fn-webww"] || "1.0.15",
			f = b.unparam(location.search.substring(1));
		if (d && -1 != d || "tstart" in f || "tdog" in f) {
			var g = "http://" + (a.util.isDaily ? "g.tbcdn.cn" : "g.assets.daily.taobao.net") + "/tbc/webww/" + e + "/webww-min.js",
				h = 0;
			b.ready(function() {
				b.DOM ? b.getScript(g) : 10 > h ? (setTimeout(arguments.callee, 1e3), h++) : b.use("core", function() {
					b.getScript(g)
				})
			})
		}
	})
}(TB.Global, KISSY),
function(a, b) {
	a.add("fn-tracker", function() {
		var c = "1.0.13",
			d = "http://" + (a.util.isDaily ? "g.tbcdn.cn" : "g.assets.daily.taobao.net") + "/tb/tracker/" + c + "/index.js";
		b.ready(function() {
			window.JSTracker || (b.DOM ? b.getScript(d) : b.use("core", function() {
				b.getScript(d)
			}))
		})
	})
}(TB.Global, KISSY), ! function(a) {
	a.util;
	a.add("fn-tlabs", function() {
		function a(a, c, d) {
			var e = document,
				f = e.getElementsByTagName("head")[0],
				g = e.createElement("script");
			return g.src = a, g.async = !0, d && (g.charset = d), b(g, function() {
				c && c.call(g);
				try {
					if (g.clearAttributes) g.clearAttributes();
					else
						for (var a in g) delete g[a]
				} catch (b) {}
				f.removeChild(g)
			}), f.insertBefore(g, f.firstChild), g
		}

		function b(a, b) {
			return document.addEventListener ? a.addEventListener("load", b, !1) : function() {
				var c = a.onreadystatechange;
				a.onreadystatechange = function() {
					var d = a.readyState;
					/loaded|complete/i.test(d) && (a.onreadystatechange = null, c && c(), b.call(this))
				}
			}()
		}

		function c(a, b) {
			for (var c in b) a[c] = b[c];
			return a
		}

		function d(a, b, c) {
			return a.replace ? a.replace(/\{(\w+)\}/g, function(a, d) {
				var e = c ? c(d) : b[d];
				return void 0 !== e ? e : a
			}) : ""
		}

		function e(a) {
			var b = n.createElement("div"),
				c = n.createTextNode(a);
			return b.appendChild(c), b.innerHTML
		}

		function f(a) {
			if (m.userCookie && void 0 !== !m.userCookie[a]) return m.userCookie[a];
			if (void 0 === o[a]) {
				var b = n.cookie.match("(?:^|;)\\s*" + a + "=([^;]*)");
				o[a] = b && b[1] ? decodeURIComponent(b[1]) : ""
			}
			return o[a]
		}

		function g() {
			var a = f("tracknick"),
				b = f("_nk_") || a;
			return !!(f("_l_g_") && b || f("ck1") && a)
		}

		function h(a) {
			var b, c = f("l"),
				d = c.split("::"),
				a = g() ? a : "",
				h = !1,
				i = d[0],
				j = d[1],
				k = d[2] || "";
			return b = "1" === k.substring(0, 1), i = encodeURIComponent(e(unescape(i.replace(/\\u/g, "%u")))), void 0 !== i && (h = i === a && b && (new Date).getTime() < j), h
		}
		var i = new Date,
			j = i.getMonth(),
			k = i.getDate();
		if (10 === j && 13 > k && k > 9 || 11 === j && 14 > k && k > 10) return !1;
		var l = document.domain,
			m = window,
			n = document,
			o = {},
			p = l.indexOf("taobao.com") + l.indexOf("tmall.com") === -2,
			q = {
				cookieName: "l",
				baseUrl: "http://megatron." + (p ? "daily.taobao.net" : "labs.taobao.com") + "/services",
				remoteDevUrl: "http://dev.labs." + (p ? "daily.taobao.net:8080" : "taobao.com") + "/",
				queryParams: "?{nick}",
				featureUrl: "http://" + (p ? "img01.daily.taobaocdn.net/L1/98/8628/" : "tu.taobaocdn.com/s1/")
			},
			r = {
				base: "http://" + (p ? "assets.daily.taobao.net" : "a.tbcdn.cn") + "/libs/",
				alias: {
					jquery: "jquery/1.6.2/jquery",
					mustache: "mustache/0.3.1/mustache",
					underscore: "underscore/1.1.6/underscore",
					backbone: "backbone/0.5.1/backbone",
					"jquery-1.6.1": "jquery/1.6.1/jquery"
				}
			},
			s = m;
		for (var t in r.alias) r.alias[t] = r.base + r.alias[t];
		s.TLabs = {
			version: "1.0.1",
			loaded: !1,
			description: "TLabs is taobao labs JS engine, cc @macji<xiaomacji@gmail.com>",
			features: [],
			_errorFeatures: [],
			addFeature: function(a) {
				for (var b = a.mods, c = 0, d = b.length; d > c; c++) b[c].matches && this.isMatchCurrentPage(b[c].matches) ? this.features.push(a) : this._errorFeatures.push(a)
			},
			isMatchCurrentPage: function(a) {
				if ("*" === a) return !0;
				try {
					return new RegExp(a, "i").test(location.href)
				} catch (b) {
					return !1
				}
			},
			_loadFeature: function() {
				for (var a, b, c, d, e, f = this, g = 0, h = f.features.length, i = "http://dev.tlabs/", j = f.config.featureUrl, k = f.config.remoteDevUrl; h > g; g++)
					for (c = f.features[g], d = c.id, e = d && d.split("/"), a = 0, b = c.mods.length; b > a; a++) seajs.use(f.dev && f.dev_feature_id === c.id ? i + f.dev_feature_mod : e && e[0] && "dev" === e[0] ? k + d + "/" + c.mods[a].path : j + d + "/" + c.mods[a].path);
				f.dev && f.dev_feature_mod && seajs.use(i + f.dev_feature_mod)
			},
			init: function(b) {
				var e, f = this,
					i = s.location + "",
					j = f.loaded;
				f.config = c(q, b || {}), -1 !== i.indexOf("__tlabs-dev") && (f.dev = !0, f.dev_feature_id = (i.match(/__tlabs_feature_id\=([^&]+)/i) || [])[1], f.dev_feature_mod = (i.match(/__tlabs_feature_mod\=([^&]+)/i) || [])[1]), (f.dev || !j && !h(b.nick)) && (f.dev || g()) && (e = d(f.config.queryParams, f.config, function(a) {
					var b, c = f.config;
					switch (a) {
						case "nick":
							b = c.nick && g() ? "nick=" + c.nick : "";
							break;
						default:
							b = c.key
					}
					return b
				}), a(f.config.baseUrl + e, function() {
					return f.loaded = !0, 0 !== f.features.length ? window.seajs ? (seajs.config(r), f._loadFeature()) : void a(r.base + "seajs/1.0.0/sea.js", function() {
						seajs.config(r), f._loadFeature()
					}) : void 0
				}))
			}
		}, s.LabsJS = s
	}, {})
}(TB.Global, KISSY), ! function(G, S) {
	var doc = document,
		win = window,
		util = G.util;
	G.add("fn-feedback", function() {
		var isDaily = location.href.indexOf(".daily.") > -1,
			storage = function(a, b) {
				if (win.localStorage) {
					var c = win.localStorage;
					if (!(arguments.length >= 2)) return c.getItem(a);
					c.setItem(a, b)
				} else try {
					var d = doc.createElement("div");
					if (d.style.behavior || (d.style.behavior = "url(#default#userData)"), !(arguments.length >= 2)) return d.load("sns"), d.getAttribute(a);
					d.setAttribute(a, b), d.save("sns")
				} catch (e) {}
			},
			sendReq = function(nick) {
				var search = win.location.search.substring(1),
					param = S.unparam(search),
					referrer = doc.referrer,
					SITE_REG = /atpanel\.|taobao\.|alimama\.|tmall\.|\:\d+\/auth\/|taobaocdn\.|tbcdn\.|taofula\.|google\.com\.hk|baidu\.|yigoupai\.|sougou\.|youdao\.|linezing\.|127\./i;
				if ("" === S.trim(nick)) nick = storage("tracknick");
				else try {
					nick = eval('"' + nick + '"')
				} catch (e) {}
				if (param.nick = nick, param.referrer = referrer, -1 == search.indexOf("snsfb-debug")) {
					if (!param.nick || "" === S.trim(param.nick)) return;
					if (!param._fb && !param._u) return;
					if (!param._fb && param._u && referrer && SITE_REG.test(referrer)) return
				}
				var requestURI = "//jianghu." + (isDaily ? "daily.taobao.net" : "taobao.com") + "/feedback/feedback_receiver.htm?_input_charset=utf-8&" + S.param(param),
					script = document.createElement("script");
				script.src = requestURI, script.charset = "gbk", doc.getElementsByTagName("head")[0].appendChild(script), storage("tracknick", param.nick)
			};
		if (-1 != location.hostname.indexOf("tmall")) try {
			TB.Global.loginStatusReady && TB.Global.loginStatusReady(function(a) {
				var b = a.tracknick;
				sendReq(b)
			})
		} catch (e) {} else {
			var nick = util.getCookie("tracknick");
			sendReq(nick)
		}
	})
}(TB.Global, KISSY),
function(a, b) {
	a.add("fn-check-b2b-user", function() {
		var c = b.unparam(a.util.getCookie("uc1")),
			d = encodeURIComponent(location.href);
		if (c.cbu && !(d.indexOf("www.taobao.com") > -1 && !/taobao\.com\/(\w+)/g.test(d) || d.indexOf("list.taobao.com") > -1 || d.indexOf("service.taobao.com") > -1)) {
			var e = document.createElement("div");
			e.className = "cbu-cover", e.innerHTML = "<!--[if lte IE 6.5]><iframe></iframe><![endif]-->", document.body.appendChild(e);
			var f = document.createElement("iframe");
			f.src = "//reg" + a.util.getHost() + "/member/changeNick2B.jhtml?t=" + b.now() + "&url=" + d, f.className = "cbu-iframe", f.allowTransparency = "true", document.body.appendChild(f), document.documentElement.style.overflow = "hidden"
		}
	})
}(TB.Global, KISSY),
function(a, b) {
	a.add("fn-check-bad-seller", function() {
		function c() {
			document.body.appendChild(f), document.body.appendChild(g), document.documentElement.style.overflow = "hidden"
		}
		var d = b.unparam(a.util.getCookie("mt")),
			e = encodeURIComponent(location.href);
		if (d.np) {
			var f = document.createElement("div");
			f.className = "cbu-cover", f.innerHTML = "<!--[if lte IE 6.5]><iframe></iframe><![endif]-->";
			var g = document.createElement("iframe");
			g.src = "//law" + a.util.getHost() + "/rulefaces/summon.htm?t=" + b.now() + "&url=" + e, g.className = "cbu-iframe", g.allowTransparency = "true", c()
		}
	})
}(TB.Global, KISSY), ! function(a, b) {
	var c, d, e, f = a.util,
		g = "fn-login",
		h = f.getNick(),
		i = !1;
	a.add(g, function() {
		c = a.v && a.v[g] || "1.4.2", d = "tbc/mini-login/" + c + "/index", e = {
			daily: "http://g.assets.daily.taobao.net/" + d + ".js",
			production: (a.isHTTPS ? "https://s.tbcdn.cn/g/" : "http://g.tbcdn.cn/") + d + "-min.js"
		};
		var j = {};
		j.getUser = function() {}, j.Mini = {}, j.Mini.popup = function(c) {
			if (window.parseFloat(b.version, 10) < 1.2) return void b.log("ERR: KISSY version less than 1.2.0(fn-login)");
			var f = a.get(g, "popup");
			f ? f.show(function() {
				c && c(), j.reloadGlobal()
			}) : b.use("ua", function(b) {
				b.getScript(a.isDaily ? e.daily : e.production, function() {
					b.use(d, function(b, d) {
						a.set(g, "popup", d), d.show(function() {
							c && c(), j.reloadGlobal()
						})
					})
				}, "utf-8")
			})
		}, j.Mini.hide = function() {
			var b = a.get(g, "popup");
			b && b.hide()
		}, j.reloadGlobal = function() {
			var b = f.getNick();
			if (b !== h) {
				try {
					a.reload()
				} catch (c) {}
				h = b
			}
		}, j.open = function() {}, j.redirect = function() {}, a.exports(g, j), i || (f.addEvent(window, "load", function() {
			(new Image).src = "https://s.tbcdn.cn/apps/login/static/css/images/loading.gif", (new Image).src = "https://login.taobao.com/favicon.ico"
		}), i = !0)
	})
}(TB.Global, KISSY), ! function(a, b) {
	var c = a.util,
		d = "fn-suggest";
	a.add(d, function() {
		var e = {};
		a.exports(d, e), e.loadPlugin = function(c) {
			var f = a.v && a.v[d] || "1.0.29",
				g = ",tbc/search-suggest/" + f + "/",
				h = ["dom", "index", "plugin/history", "plugin/bts", "new_suggest.css"];
			b.use(h.join(g), function(a, b, d, f, g) {
				var h = (new g).getBucket(),
					i = ["history", "cat", "global", "list", "shop"],
					j = [new f],
					k = "//suggest.taobao.com/sug?k=1&area=c2c&bucketid=" + h,
					l = "",
					m = new d({
						plugins: j,
						sugConfig: {
							sourceUrl: k,
							node: "#" + c.node,
							resultFormat: l
						},
						mods: {
							sort: i
						}
					});
				m.on("beforeSubmit", function() {
					var a = this.get("form");
					a && !a[0].initiative_id && b.append(e.createInput(c.date), a[0])
				})
			})
		}, e.createInput = function(a) {
			var b = document.createElement("input");
			return b.setAttribute("type", "hidden"), b.setAttribute("name", "initiative_id"), b.setAttribute("value", "diaoding_" + (a || "")), b
		}, e.init = function(a) {
			if (a.node || (a.node = "J_GlobalSuggestInput"), window.parseFloat(b.version, 10) < 1.3) {
				b.log("the version of KISSY is lower than 1.3");
				var d = c.$(a.node);
				return d && d.parentNode.appendChild(e.createInput(a.date)), !1
			}
			e.loadPlugin(a)
		}
	})
}(TB.Global, KISSY), ! function(a) {
	var b = window,
		c = b.document,
		d = c.body,
		e = a.util,
		f = "fn-fixed";
	a.add(f, function() {
		var c = function() {
			this.init()
		};
		c.prototype.init = function() {
			var b = this;
			!a.isIE6 && b.bind()
		}, c.prototype.bind = function() {
			var c = this;
			a.isFixed = !0, c.isFixed = !1, e.addEvent(b, "scroll", function() {
				var b = e.scrollTop(),
					f = "site-nav-fixed",
					g = parseInt(e.css(a.el, "height")),
					h = parseInt(e.css(d, "paddingTop"));
				b > 0 ? c.isFixed || (c.isFixed = !0, e.addClass(a.el, f), e.css(d, "paddingTop", h + g + "px")) : c.isFixed && (c.isFixed = !1, e.removeClass(a.el, f), e.css(d, "paddingTop", h - g + "px"))
			})
		}, a.exports(f, c)
	})
}(TB.Global, KISSY), ! function(a, b) {
	var c = window,
		d = (a.util, "fn-cart");
	a.add(d, function() {
		var e = function() {
			this.init()
		};
		e.prototype.init = function() {
			if (!(a && a.miniCart || a.isIE6)) {
				if (c.g_config) switch (c.g_config.appId) {
					case 6:
					case 10:
					case 19:
					case 15:
						return
				}
				if ("1.1.6" !== b.version && "1.20" !== b.version) {
					var e = a.v[d] || "0.0.20";
					b.use("tbc/mini-cart/" + e + "/", function(a, b) {
						b.init()
					})
				}
			}
		}, a.exports(d, e), b.ready(function() {
			new e
		})
	})
}(TB.Global, KISSY), ! function(a, b) {
	var c = (a.util, "fn-super-bowl"),
		d = "//www.taobao.com/go/rgn/global/super-bowl.php",
		e = "undefined" != typeof SUPER_BOWL_IS_SHOW;
	a.add(c, function() {
		var f = function() {};
		f.prototype.init = function(a) {
			e && b.jsonp(d, function(b) {
				a(b)
			})
		}, a.exports(c, f)
	})
}(TB.Global, KISSY), ! function(a, b) {
	var c = a.util,
		d = "fn-weekend",
		e = "//www.taobao.com/go/rgn/global/weekend.php";
	a.add(d, function() {
		var f = function() {
			this.init()
		};
		f.prototype.init = function() {
			var a = c.$("J_Weekend"),
				d = c.$("J_SiteNavBd");
			b.ready(function() {
				if (d) {
					var f = parseFloat(c.css(d, "width"));
					if (1190 > f) return !1
				}
				c.jsonp(e, function(d) {
					if (d.status) {
						var e = d.list;
						if (e && "" != e) {
							e = e.split(",");
							var f = location.href.split("?")[0],
								g = !1;
							if (b.each(e, function(a) {
								return new RegExp(a).test(f) ? g = !0 : void 0
							}), !g) return !1
						}
						var h = d.data,
							i = h.img1,
							j = h.img2,
							k = h.href;
						a.innerHTML = ['<div class="menu-hd">', '<a href="' + k + '"  data-spm="d3">', '<img id="J_WeekendImg" src="' + i + '"/>', "</a>", "</div>"].join(""), c.css(a, "display", "block");
						var l = c.$("J_WeekendImg");
						c.addEvent(a, "mouseover", function() {
							l.setAttribute("src", j)
						}), c.addEvent(a, "mouseout", function() {
							l.setAttribute("src", i)
						})
					}
				})
			})
		}, a.exports(d, f), a.set(d, {
			exports: new f,
			cbRender: "init"
		})
	})
}(TB.Global, KISSY), ! function(a, b) {
	var c = a.util,
		d = "fn-Guang",
		e = "//guang.taobao.com/street/ajax/top.json";
	a.add(d, function() {
		var f = function() {
			this.init()
		};
		f.prototype.init = function() {
			b.ready(function() {
				var a = !1;
				b.use("dom,event", function(b, d, f) {
					f.on(".J_MenuMyTaobao", "mouseover", function() {
						return a ? !1 : void c.jsonp(e, function(a) {
							a && a.success && Number(a.count) > 0 && d.text(".J_GuangCount", a.count)
						})
					})
				})
			})
		}, a.exports(d, f), a.set(d, {
			exports: new f,
			cbRender: "init"
		})
	})
}(TB.Global, KISSY), ! function(a, b) {
	var c = "fn-browser-update";
	a.add(c, function() {
		var d = function() {
			this.init()
		};
		d.prototype.init = function() {
			var a = this;
			b.ready(function() {
				b.DOM ? a.render() : b.use("core", function() {
					a.render()
				})
			})
		}, d.prototype.render = function() {
			KISSY.use("tbc/browser-updater/1.4.0/", function(a, b) {
				b.show()
			})
		}, a.exports(c, d)
	})
}(TB.Global, KISSY);

KISSY.Config.debug = 1;