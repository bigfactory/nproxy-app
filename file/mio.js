KISSY.config({
	modules: {
		"buy-base/startup": {
			requires: ["dom", "event", "buy-base/util/jstracker", "buy-base/biz/records"]
		},
		"buy-base/biz/ald": {
			requires: ["dom"]
		},
		"buy-base/biz/mmstat": {
			requires: ["buy-base/biz/records"]
		},
		"buy-base/biz/qrcode": {
			requires: ["dom", "event", "ajax", "buy-base/lib/qrcode", "buy-base/css/qrcode.css"]
		},
		"buy-base/biz/records": {
			requires: ["event", "mui/storage/basic"]
		},
		"buy-base/util/calendar": {
			requires: ["dom", "event", "gallery/moment/1.0/index", "buy-base/css/calendar.css"]
		},
		"buy-base/util/counter": {
			requires: ["dom", "event"]
		},
		"buy-base/util/feedback": {
			requires: ["dom", "event"]
		},
		"buy-base/util/gracetip": {
			requires: ["dom", "event", "buy-base/util/popup"]
		},
		"buy-base/util/inputmask": {
			requires: ["dom", "event"]
		},
		"buy-base/util/jstracker": {
			requires: ["dom"]
		},
		"buy-base/util/mask": {
			requires: ["dom", "event", "ua"]
		},
		"buy-base/util/option": {
			requires: ["dom", "event", "base"]
		},
		"buy-base/util/popup": {
			requires: ["dom", "event", "buy-base/util/mask"]
		},
		"buy-base/util/reporter": {
			requires: ["dom", "event", "ua"]
		},
		"buy-base/util/select": {
			requires: ["dom", "event", "base", "buy-base/util/option"]
		}
	},
	packages: {
		"buy-base": {
			path: "http://g.tbcdn.cn/tm/buy-base/1.3.3/",
			ignorePackageNameInUri: true,
			debug: true
		}
	}
});
KISSY.config({
	modules: {
		"buy-order/app": {
			requires: ["dom", "event", "buy-order/data", "buy-order/util"]
		},
		"buy-order/data": {
			requires: ["event", "buy-order/util"]
		},
		"buy-order/util": {
			requires: ["dom", "event", "buy-base/util/select", "buy-base/util/counter", "buy-base/util/inputmask"]
		},
		"buy-order/mod/address": {
			requires: ["dom", "event", "io", "buy-order/data", "buy-order/util", "buy-order/mod/addrOption", "buy-order/mod/addrService"]
		},
		"buy-order/mod/agencyPay": {
			requires: ["dom", "buy-order/data", "buy-order/util"]
		},
		"buy-order/mod/anonymous": {
			requires: ["dom", "buy-order/data", "buy-order/util"]
		},
		"buy-order/mod/coupon": {
			requires: ["dom", "node", "buy-order/data", "buy-order/util"]
		},
		"buy-order/mod/go": {
			requires: ["dom", "buy-order/data", "buy-base/util/checker", "buy-order/util"]
		},
		"buy-order/mod/installment": {
			requires: ["dom", "buy-order/data", "buy-order/util"]
		},
		"buy-order/mod/insure": {
			requires: ["dom", "event", "buy-order/data", "buy-order/util", "buy-base/util/select"]
		},
		"buy-order/mod/invoice": {
			requires: ["dom", "event", "buy-order/data", "buy-order/util"]
		},
		"buy-order/mod/memo": {
			requires: ["dom", "event", "buy-order/data"]
		},
		"buy-order/mod/misc": {
			requires: ["dom", "event", "buy-order/data", "buy-order/util"]
		},
		"buy-order/mod/point": {
			requires: ["dom", "event", "buy-order/data", "buy-order/util"]
		},
		"buy-order/mod/postage": {
			requires: ["dom", "event", "buy-order/data", "buy-order/util", "buy-base/util/select"]
		},
		"buy-order/mod/promotion": {
			requires: ["dom", "event", "buy-order/data", "buy-order/util", "buy-base/util/select"]
		},
		"buy-order/mod/quantity": {
			requires: ["dom", "event", "buy-order/data", "buy-order/util"]
		},
		"buy-order/mod/stepbar": {
			requires: ["dom"]
		},
		"buy-order/mod/addrMaker": {
			requires: ["dom", "event", "io", "buy-order/data", "buy-order/mod/address", "buy-base/util/popup", "buy-order/util"]
		},
		"buy-order/mod/addrOption": {
			requires: ["dom", "event", "anim", "io", "buy-base/util/popup", "buy-order/data", "buy-order/util"]
		},
		"buy-order/mod/addrService": {
			requires: ["dom", "event", "io", "cookie", "buy-base/util/popup", "buy-order/data", "buy-order/util"]
		},
		"buy-order/mod/addrTip": {
			requires: ["dom", "event", "buy-order/data", "buy-order/util"]
		},
		"buy-order/mod/addrUpdate": {
			requires: ["dom", "event", "io", "buy-order/data", "buy-order/mod/address", "buy-base/util/popup", "buy-base/util/gracetip", "buy-order/util"]
		},
		"buy-order/mod/checkCode": {
			requires: ["dom", "event", "buy-order/data", "buy-order/util"]
		},
		"buy-order/mod/cod": {
			requires: ["dom", "buy-order/data", "buy-order/util"]
		},
		"buy-order/mod/installmentPurchase": {
			requires: ["dom", "event", "buy-order/data", "buy-order/util", "buy-base/util/select"]
		},
		"buy-order/mod/invalid": {
			requires: ["dom", "buy-order/data", "buy-order/util"]
		},
		"buy-order/mod/largess": {
			requires: ["dom", "event", "buy-order/data", "buy-order/util"]
		},
		"buy-order/mod/mbContract": {
			requires: ["dom", "event", "buy-order/data", "buy-order/mod/credentialsType", "buy-order/util"]
		},
		"buy-order/mod/mileage": {
			requires: ["dom", "event", "buy-order/data", "buy-order/util", "buy-base/util/select", "xtemplate"]
		},
		"buy-order/mod/obtainedPoint": {
			requires: ["dom", "event", "buy-order/data", "buy-order/util"]
		},
		"buy-order/mod/order": {
			requires: ["dom", "buy-order/data", "buy-order/util"]
		},
		"buy-order/mod/realPay": {
			requires: ["dom", "buy-order/data"]
		},
		"buy-order/mod/remain": {
			requires: ["dom", "event", "buy-order/data", "buy-order/util"]
		},
		"buy-order/mod/service": {
			requires: ["dom", "buy-order/data", "buy-order/util", "event"]
		},
		"buy-order/mod/serviceAddress": {
			requires: ["dom", "buy-order/data", "buy-order/util"]
		},
		"buy-order/mod/terms": {
			requires: ["dom", "buy-order/data"]
		},
		"buy-order/mod/userAuth": {
			requires: ["dom", "event", "buy-order/data", "buy-order/util", "buy-order/mod/credentialsType", "buy-base/util/popup"]
		}
	},
	packages: {
		"buy-order": {
			path: "http://g.tbcdn.cn/tm/buy/1.1.1/",
			ignorePackageNameInUri: true,
			debug: true
		}
	}
});
KISSY.add("buy-order/app", function(e, t, a, n, r) {
	var i = t.get("#J_BuyOrder");
	n.on("reload", function(e) {
		r.destory();
		n.eachMod(function(e) {
			if (e.destory) {
				e.destory()
			}
		});
		t.removeAttr(i, "data-rendered");
		d.init(e.data, {
			reload: true
		})
	});
	var s = function() {
		var t = 0;
		e.each(n.get("_payFactor"), function(e) {
			t += e
		});
		var a = (n.get("_realPay") || 0) + t;
		n.set("_realSumCent", a);
		a /= 100;
		n.set("_realSum", a.toFixed(2))
	};
	n.on("calculate", s);
	n.on("payChange", function(e) {
		var a = e.data;
		var r = n.get("_payFactor") || {};
		r[a.name] = a.value;
		n.set("_payFactor", r);
		s();
		t.html("#J_RealPay", n.get("_realSum"))
	});
	var o = function(t) {
		e.use("buy-base/util/gracetip", function(e, a) {
			t(a)
		})
	};
	n.on("asyncBegin", function(e) {
		o(function(t) {
			t.show(n.read(e.data, "tip/start") || "\u64cd\u4f5c\u4e2d\uff0c\u8bf7\u7b49\u5f85")
		})
	});
	n.on("asyncEnd", function(e) {
		o(function(t) {
			var a = e.data;
			if (a.isSuccess) {
				t.hide()
			} else {
				t.growl(n.read(a, "tip/error") || "\u5f88\u62b1\u6b49\uff0c\u64cd\u4f5c\u9047\u5230\u4e86\u4e00\u4e9b\u95ee\u9898\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")
			}
		})
	});
	var c;
	var d = {
		init: function(a, s) {
			s = e.merge({
				reload: false
			}, s);
			r.record("tmalljy.2.6?action=showpage");
			n.load(a, function() {
				var r = a.error;
				if (r) {
					location.href = "/auction/order/TmallConfirmOrderError.htm?__buy_error_code=" + r.errorCode;
					return
				}
				if (t.attr(i, "data-rendered")) {
					u()
				} else {
					n.useMod("order", function(a) {
						var n = s.reload;
						a.buildHtml(function(a) {
							if (n) {
								t.html("#A_Main", a.main);
								e.each(a, function(e, a) {
									t.html("#A_" + a, e || "")
								})
							} else {
								var r = "";
								var s = function(e, t) {
									r += '<div id="A_' + e + '" class="' + e + '">' + (t || "") + "</div>"
								};
								s("tddress", a.tddress);
								s("remind", a.remind);
								s("serviceAddress", a.serviceAddress);
								s("backCart", a.backCart);
								r += "<h2>\u786e\u8ba4\u8ba2\u5355\u4fe1\u606f</h2>";
								s("orders", "" + a.orders);
								s("checkbar", a.checkbar);
								s("invalid", a.invalid);
								i.innerHTML = r
							}
							var o = a.stepbar;
							if (o) {
								t.html(t.get(".header-extra", "#header"), '<div id="A_Stepbar" class="flowstep">' + a.stepbar + "</div>")
							}
							u()
						}, {
							excludeAddr: n
						})
					})
				}
			})
		},
		agreePrePay: function(a) {
			var r = a.checked;
			var i = t.parent(a, ".go-wrapper");
			n.fireEvent("notifySubmit", {
				prepay: {
					pass: r
				}
			});
			if (r) {
				t.removeClass(i, "go-ys-disable");
				e.use("buy-base/util/feedback", function(e, a) {
					var n = t.get(".j_agreePrePayFeedbackTip");
					if (!c || !n) {
						c = new a({
							type: "attention",
							node: i,
							content: '<p class="red j_agreePrePayFeedbackTip"><ins></ins>\u5b9a\u91d1\u6055\u4e0d\u9000\u8fd8</p><p><ins></ins>\u9884\u552e\u5546\u54c1\u4e0d\u652f\u63017\u5929\u65e0\u7406\u7531\u9000\u6362\u8d27</p><p><ins></ins><a href="http://service.tmall.com/support/tmall/knowledge-5215992.htm">\u66f4\u591a\u89c4\u5219</a></p>',
							tip: false
						})
					}
					c.show()
				})
			} else {
				t.addClass(i, "go-ys-disable");
				if (c) {
					c.hide()
				}
			}
		},
		cart: function() {
			r.record("tmalljy.2.6?action=returncart_top");
			location.href = n.get("cartUrl") || "http://cart.tmall.com/"
		}
	};

	function u() {
		r.make();
		n.eachMod(function(e) {
			if (e.init) {
				e.init()
			}
		})
	}
	a.on(document, "click", function(e) {
		var a = e.target;
		if (t.hasClass(a.parentNode, "ww-light")) {
			r.record("tmalljy.2.6?action=wangwang")
		}
		do {
			if (a === this) {
				return
			}
			var n = t.attr(a, "data-clk");
			if ("^" === n) {
				return
			}
			if (n) {
				return l(a, n, e)
			}
			if (!a || !a.parentNode) {
				return
			}
			a = a.parentNode
		} while (true)
	});

	function l(a, n, i) {
		var s = t.attr(a, "data-mm");
		if (s) {
			r.record("tmalljy.2.6?action=" + s)
		}
		if ("A" === a.nodeName) {
			i.preventDefault()
		}
		n = n.split(":");
		if (n.length > 1) {
			e.use(n[0], function o(e, t) {
				t[n[1]](a, i)
			})
		}
	}
	return d
}, {
	requires: ["dom", "event", "buy-order/data", "buy-order/util"]
});
KISSY.add("buy-order/data", function(e, t, a) {
	var n = {};
	var r;
	var i = {};
	var s = {};

	function o(t) {
		e.each(t, function(t) {
			e.each(t, function(t) {
				var a = "a" + e.guid();
				var n = {};
				e.each(t, function(e) {
					n[e] = 1;
					var t = s[e] || [];
					t.push(a);
					s[e] = t
				});
				i[a] = n
			})
		})
	}
	var c = {
		tmallPoint: "point",
		memo: "memo",
		invoice: "invoice",
		deliveryMethod: "postage",
		address: "address",
		remain: "remain",
		quantity: "quantity",
		couponCard: "coupon",
		postageInsurance: "insure",
		service: "service",
		submitOrder: "go",
		checkCode: "checkCode",
		cod: "cod",
		promotion: "promotion",
		activity: "largess",
		stepbar: "stepbar",
		misc: "misc",
		alicommunUserAuth: "userAuth",
		mobileContract: "mbContract",
		invalidGroup: "invalid",
		agencyPay: "agencyPay",
		anonymous: "anonymous",
		installment: "installment",
		obtainedPoint: "obtainedPoint",
		realPay: "realPay",
		dsDesc: "addrService",
		order: "order",
		orderGroup: "order",
		orderBond: "order",
		installmentPurchase: "installmentPurchase",
		serviceAddress: "serviceAddress",
		terms: "terms",
		tripPoint: "mileage",
		tips: "tips"
	};
	var d = "buy-order/mod/";

	function u(e) {
		e = c[e];
		return e ? d + e : ""
	}
	var l = {};

	function f(e, t) {
		var a = l[e];
		if (a !== t) {
			l[e] = t;
			v.fireEvent(e + "PropChange", {
				preVal: a,
				newVal: t
			})
		}
	}
	var v = {
		all: function() {
			return n
		},
		fetchEl: function(t, a) {
			if (e.isPlainObject(t)) {
				t = this.uuid(t)
			}
			t = document.getElementById(t);
			a = h(a);
			if (t && false !== a(t)) {
				return t
			}
		},
		read: function(e, t, a) {
			if (!e) {
				return null
			}
			var n;
			t = t.split("/");
			while (n = t.shift()) {
				if (n in e) {
					e = e[n]
				} else {
					return a || ""
				}
			}
			return e
		},
		uuid: function(t, a) {
			if (e.isPlainObject(t)) {
				a = t.id;
				t = t.tag
			}
			return t + "_" + a
		},
		load: function(t, a) {
			n = t;
			r = null;
			var i = t.hierarchy || {};
			o(i.groups);
			p(function() {
				if (e.isFunction(a)) {
					a()
				}
			})
		},
		fromEl: function(e, t) {
			if (e) {
				return this.key(e.id, t)
			}
		},
		key: function(e, t) {
			var a = n.data;
			t = h(t);
			for (var r in a) {
				if (r === e) {
					var i = a[r];
					if (false !== t(i)) {
						return i
					}
				}
			}
		},
		tag: function(e, t) {
			var a = [];
			var r = n.data;
			t = h(t);
			for (var i in r) {
				var s = r[i];
				if (s.tag === e && false !== t(s)) {
					a.push(s)
				}
			}
			return a
		},
		children: function(t, a, r) {
			if (e.isFunction(a)) {
				r = a;
				a = ""
			}
			var i = a ? function(e) {
				if (e && e.tag === a) {
					return e
				}
			} : function(e) {
				return e
			};
			var s = [];
			var o = n.hierarchy.structure;
			var c = n.data;
			r = h(r);
			e.each(o[this.uuid(t)], function(e) {
				var t = i(c[e]);
				if (t && false !== r(t)) {
					s.push(t)
				}
			});
			return s
		},
		parent: function(t, a) {
			if (!r) {
				r = {};
				e.each(n.hierarchy.structure, function(t, a) {
					e.each(t, function(e) {
						r[e] = a
					})
				})
			}
			var i = r[this.uuid(t)];
			if (i) {
				a = h(a);
				t = n.data[i];
				if (t && false !== a(t)) {
					return t
				}
			}
		},
		parentEl: function(e, t) {
			this.parent(e, function(e) {
				v.fetchEl(e, t)
			})
		},
		list2Map: function(t, a) {
			var n = {};
			a = h(a);
			e.each(t, function(t) {
				if (false !== a(t)) {
					var r = t.tag;
					var i = n[r];
					if (i) {
						if (!e.isArray(i)) {
							i = [i]
						}
						i.push(t);
						n[r] = i
					} else {
						n[r] = t
					}
				}
			});
			return n
		},
		mustArray: function(t) {
			return e.isArray(t) ? t : [t]
		},
		mutex: function(t, a) {
			var n = this;
			var r = n.uuid(t);
			e.each(s[r], function(s) {
				e.each(i[s], function(i, s) {
					if (s !== r) {
						var o = n.key(s);
						if (!o) {
							return
						}
						e.use(u(o.tag) || u("misc"), function(e, n) {
							if (n.mutex) {
								n.mutex(o, a, s, {
									source: t,
									sourceTag: t.tag
								})
							}
						})
					}
				})
			})
		},
		getMutexRelationsById: function(t) {
			var a = this;
			var n = {};
			e.each(s[t], function(r) {
				e.each(i[r], function(e, r) {
					if (r === t) {
						return
					}
					var i = a.key(r);
					n[r] = i
				})
			});
			return n
		},
		async: function(t, r, i) {
			var s = this;
			var o = function(t, a) {
				if (e.isFunction(r)) {
					r(t)
				} else {
					i = r
				}
				i = i || {};
				i.isSuccess = t;
				i.response = a;
				s.fireEvent("asyncEnd", i)
			};
			e.use("io,json", function(e, r, i) {
				var c = s.uuid(t);
				var d = {};
				e.each(n.linkage.input, function(e) {
					d[e] = s.key(e)
				});
				d[c] = t;
				s.fireEvent("asyncBegin");
				r({
					url: "/auction/json/async_linkage.do?_input_charset=utf-8",
					type: "post",
					dataType: "json",
					data: {
						operator: c,
						data: i.stringify(d),
						linkage: i.stringify(n.linkage),
						hierarchy: i.stringify(n.hierarchy)
					},
					complete: function(e) {
						e = e || {
							error: {}
						};
						var t = e.error;
						if (t) {
							a.record("tmalljy.2.6?action=async_error");
							return o(false, e)
						}
						if (e.reload) {
							s.fireEvent("reload", e);
							o(true, e)
						} else {
							y(e, function() {
								o(true, e)
							})
						}
					},
					timeout: 5
				})
			})
		},
		get: function(e) {
			return l[e]
		},
		set: function(t, a) {
			if (e.isPlainObject(t)) {
				return e.each(t, function(e, t) {
					f(t, e)
				})
			}
			f(t, a)
		},
		fireEvent: function(t, a, n) {
			if (e.isString(t)) {
				n = a;
				a = t;
				t = null
			}
			if (t && t.name) {
				a = t.name + a.substr(0, 1).toUpperCase() + a.substr(1)
			}
			this.fire(a, {
				data: n,
				me: t || this
			})
		}
	};
	e.mix(v, t.Target);

	function p(t) {
		var a = function() {
			v.useMod = function(t, a, n) {
				if (e.isFunction(n)) {
					n()
				}
			};
			v.eachMod = function() {};
			t()
		};
		var r = v.read(n, "hierarchy/component");
		if (!r) {
			return t()
		}
		var i = [];
		e.each(r, function(e) {
			var t = u(e);
			if (t) {
				i.push(t)
			}
		});
		if (i.length) {
			i.unshift(u("misc"))
		}
		e.use(i.join(","), function() {
			var a = {};
			var n = [];
			e.each(e.makeArray(arguments), function(e) {
				var t = e.name;
				if (t && !a[t]) {
					n.push(e);
					a[t] = e
				}
			});
			v.useMod = function(t, n, r) {
				var i = a[t];
				if (i) {
					n(i)
				} else if (e.isFunction(r)) {
					r()
				}
			};
			v.eachMod = function(t) {
				e.each(n, t)
			};
			t()
		}, a)
	}

	function m(t, a, n) {
		e.use(u(t.tag) || u("misc"), {
			success: function(e, t) {
				a(t)
			},
			error: n
		})
	}

	function h(t, a) {
		return e.isFunction(t) ? t : a || function() {}
	}

	function y(t, a) {
		var i = n.data;
		var s = function(a, s) {
			var c = t[a];
			s = h(s);
			if (!c) {
				return s()
			}
			if ("hierarchy" === a) {
				var d = 0;
				var u = function(t) {
					if (!t) {
						d--
					}
					if (!d) {
						e.mix(n[a], c);
						o(c.groups);
						r = null;
						s()
					}
				};
				e.each(c.remove, function(e) {
					var t = v.key(e);
					m(t, function(a) {
						if (a.load) {
							a.load(t, "remove", e)
						}
						delete i[e];
						u()
					}, function() {
						delete i[e];
						u()
					})
				});
				delete c.remove;
				u(true)
			} else {
				e.mix(n[a], c);
				s()
			}
		};
		s("linkage");
		s("hierarchy", function() {
			p(function() {
				var r = t.data;
				e.each(r, function(t) {
					var a = v.uuid(t);
					var n = v.key(a);
					var r = "update";
					if (n) {
						e.mix(n, t)
					} else {
						r = "add";
						i[a] = n = t
					}
					n._asyncType = r
				});
				var s = n.hierarchy.structure;
				var o = function(t) {
					var a = i[t];
					var n = a._asyncType;
					if (n) {
						delete a._asyncType;
						v.useMod(c[a.tag] || "misc", function(e) {
							if (e.load) {
								e.load(a, n, t)
							}
						})
					}
					e.each(s[t], o)
				};
				v.tag("confirmOrder", function(e) {
					o(v.uuid(e))
				});
				if (e.isFunction(a)) {
					a()
				}
			})
		})
	}
	if ("undefined" !== typeof window) {
		window.Data = v
	}
	return v
}, {
	requires: ["event", "buy-order/util"]
});
KISSY.add("buy-order/util", function(e, t, a, n, r, i) {
	var s = {};
	var o = {
		select: n,
		counter: r,
		inputmask: i
	};

	function c(e, t) {
		return l(e) + "/" + t
	}
	var d = {
		make: function(a) {
			e.each(t.query(".tc-util", t.get(a) || document.body), function(t) {
				e.each(t.className.match(/\btc-(?!util)\w+\b/g), function(e) {
					e = e.substr(3);
					var a = o[e];
					if (!a) {
						return
					}
					var n = c(t, e);
					if (s[n]) {
						return
					}
					s[n] = new a(t)
				})
			})
		},
		fetch: function(a, n, r) {
			a = t.get(a);
			var i = a ? s[c(a, n)] : null;
			if (i && e.isFunction(r)) {
				r(i)
			}
			return i
		},
		destory: function() {},
		getRootEl: function(e, a) {
			if (e) {
				if (t.hasClass(e, a)) {
					return e
				}
				return t.parent(e, "." + a)
			}
		},
		toDog: function(e) {
			return '<span class="J_WangWang" data-encode="true" data-nick="' + e + '" data-display="inline" data-icon="small"></span>'
		},
		toMoney: function(t) {
			if (!e.isNumber(t)) {
				t = t - 0
			}
			t /= 100;
			return t.toFixed(2)
		},
		record: function(t) {
			e.use("buy-base/biz/records", function(e, a) {
				a.send(t.replace(/\baction=([^&$]+)/g, "action=$12"))
			})
		},
		disposeElement: function(e) {
			if (e) {
				a.detach(t.query("select", e));
				a.detach(t.query("input", e));
				a.detach(t.query("textarea", e));
				e.innerHTML = ""
			}
		},
		toPaytype: function(t) {
			var a = t.obj;
			var n = "paytype" + e.guid();
			var r = '<input data-clk="' + (t.chkClick || "") + '" id="' + n + '" type="checkbox" ' + (t.checked ? " checked" : "") + (t.disabled ? " disabled" : "") + " />";
			r += '<label for="' + n + '">' + t.label + "</label>";
			return '<div class="' + a.tag + " " + (t.cls || "") + '" id="' + t.uuid + '">' + r + "</div>"
		},
		focusEl: function(e) {
			setTimeout(function() {
				try {
					e.focus()
				} catch (t) {}
			}, 0)
		},
		isDaily: u()
	};

	function u() {
		if (location.hostname.match(/\b(daily|com\.hk)\b/)) {
			return true
		}
		return false
	}

	function l(a) {
		var n = t.attr(a, "data-fnid");
		if (!n) {
			n = "fn" + e.guid();
			t.attr(a, "data-fnid", n)
		}
		return n
	}
	return d
}, {
	requires: ["dom", "event", "buy-base/util/select", "buy-base/util/counter", "buy-base/util/inputmask"]
});
KISSY.add("buy-order/mod/address", function(e, t, a, n, r, i, s, o) {
	var c = "addr-cur";
	var d = "addr-def";
	var u;
	var l;
	var f = 20;
	var v;
	var p = {
		name: "address",
		init: function() {
			v = t.get("#J_addresses");
			y();
			var a = this.getAddrData().fields.options || [];
			l = a ? a.length : 0;
			if (0 === l) {
				e.use("buy-order/mod/addrMaker", function(e, t) {
					t.init({
						title: "\u521b\u5efa\u5730\u5740",
						closable: false
					})
				})
			} else {
				if (l === f) {
					t.remove(".createAddr")
				}
				var n = l < f;
				s.init()
			}
			t.addClass(u, "address-option-binded");
			o.fitBox();
			r.fireEvent("notifySubmit", {
				is4Address: {
					pass: !this.needUpdateDefaultAddress
				}
			})
		},
		toHtml: function(t) {
			var a = this;
			l = 0;
			if (!t) {
				return ""
			}
			this.initAddrMakerIframeUrls(t);
			var n = "";
			var i = t.fields;
			var s = i.selectedId;
			this.defaultAddressId = s;
			var o = i.options ? i.options.length : 0;
			this.needUpdateDefaultAddress = false;
			e.each(i.options, function(e) {
				l++;
				n += m(e, {
					selectedId: s,
					supportFwd: i.supportFwd
				});
				if (l == 4 && o > 4) {
					n += '<div class="moreAddr">'
				}
				var t = e.deliveryAddressId;
				if (t === s && e.needUpdate4Address) {
					a.needUpdateDefaultAddress = true
				}
			});
			if (l > 4) {
				n += "</div>"
			}
			this.uuid = r.uuid(t);
			return n
		},
		toControl: function() {
			var e = "";
			if (l > 4) {
				e += '<a class="showAll" data-mm="show_all_address" data-clk="buy-order/mod/address:showAll">\u663e\u793a\u5168\u90e8\u5730\u5740</a>'
			}
			if (l < f) {
				e += '<button class="tc-btn createAddr" data-mm="new_address" type="button" data-clk="buy-order/mod/addrMaker:show">\u4f7f\u7528\u65b0\u5730\u5740</button>'
			}
			var t = "http://member1." + (i.isDaily ? "daily.taobao.net" : "taobao.com") + "/member/fresh/deliver_address.htm";
			e += '<a class="manageAddr" href="' + t + '" data-mm="manange_address">\u7ba1\u7406\u6536\u8d27\u5730\u5740</a>';
			return e
		},
		showAll: function() {
			t.removeClass(v, "addrMuch");
			var e = l < f;
			i.record("tmalljy.2.6?action=show_all_address")
		},
		destory: function() {},
		load: function(e, a, n) {
			t.get(".list", "#J_addresses").innerHTML = this.toHtml(e);
			t.get(".control", "#J_addresses").innerHTML = this.toControl();
			p.init()
		},
		reload: function(e, t) {
			if (!e) {
				e = this.getAddrData()
			}
			r.set("_useAddrServer", false);
			r.async(e, t)
		},
		toInner: function(e, t) {
			var a;
			var n;
			var r = '<span class="dist">' + (e.areaName || "") + "</span>";
			if (e.townName) {
				r += '<span class="town">' + e.townName + "</span>"
			}
			r += '<span class="street">' + e.addressDetail + "</span>";
			var i = (e.areaName || "") + (e.townName || "") + " " + e.addressDetail;
			if (e.countryName) {
				a = e.countryName;
				n = e.provinceName || "";
				r = "<span>" + (e.cityName || "") + "</span>" + r;
				i = (e.cityName || "") + " " + (e.areaName || "") + (e.townName || "") + " " + e.addressDetail
			} else {
				a = e.provinceName;
				n = e.cityName || ""
			}
			var s = a + " " + n + " (" + e.fullName + "\u6536)";
			var o = '<div class="addr-hd" title="' + s + '">' + '<span class="prov">' + a + "</span>" + '<span class="city">' + n + "</span>" + '<span>\uff08</span><span class="name">' + e.fullName + "</span><span> \u6536\uff09</span>" + "</div>";
			var c = "";
			var d = e.forwardData;
			if (t.supportFwd && d && d.warehouseId) {
				var u = e.areaName || "";
				var l = u + " " + e.addressDetail;
				i = l;
				c += '<span class="forward-info">' + d.companyName + "&nbsp;" + d.province + "</span>" + '<span class="forward-flag">\u8f6c</span>' + '<span class="street">' + l + "</span>"
			} else {
				c += r
			}
			c += '<span class="phone">' + (e.mobile || e.tele || "") + '</span><span class="last">&nbsp;</span>';
			o += '<div title="' + i + '" class="addr-bd">' + c + "</div>";
			var f = t.selectedId === e.deliveryAddressId;
			var v = "";
			if (f) {
				v += '<a title="\u4fee\u6539\u5730\u5740" class="modify abtn" data-from="modify_address_link" data-id="' + e.deliveryAddressId + '" data-clk="buy-order/mod/addrMaker:showUpdate">\u4fee\u6539</a>'
			}
			o += '<div class="addr-toolbar">' + v + "</div>";
			return o
		},
		setDefault: function() {
			var e = t.attr(u, "data-id");
			var a = this.getAddrData().fields;
			if (!a) {
				return
			}
			var r = this.getOptionById(e);
			var i = this;
			var s = a.defaultAddressAPI;
			n({
				url: s,
				type: "get",
				dataType: "json",
				timeout: 6,
				data: {
					addrid: r.deliveryAddressId
				},
				success: function(e) {
					var a = t.get("ins.deftip", u);
					var n;
					if ("success" === e.status) {
						t.addClass(u, "addr-setsuccess");
						a.innerHTML = "\u8bbe\u7f6e\u6210\u529f";
						n = function() {
							a.innerHTML = "\u9ed8\u8ba4\u5730\u5740";
							t.removeClass(".addr-def", "addr-def");
							t.removeClass(u, "addr-setsuccess");
							t.addClass(u, "addr-def")
						}
					} else {
						t.addClass(u, "addr-setfailure");
						a.innerHTML = "\u8bbe\u7f6e\u5931\u8d25";
						n = function() {
							t.removeClass(u, "addr-setfailure")
						}
					}
					setTimeout(n, 500)
				}
			})
		},
		getOptionById: function(t) {
			var a = this.getAddrData().fields;
			if (!a) {
				return
			}
			var n = a.options;
			var r;
			var i = t || a.selectedId;
			e.each(n, function(e) {
				if (e.deliveryAddressId + "" === i + "") {
					r = e;
					return false
				}
			});
			return r
		},
		getAddrData: function() {
			return r.key(this.uuid)
		},
		initAddrMakerIframeUrls: function(t) {
			var a = t.fields;
			this._addrMakerIframeUrls = {};
			this._addrMakerIframeUrls.addUrl = a.addrMakerUrl;
			var n = {};
			e.each(a.options, function(e) {
				n[e.deliveryAddressId] = e.addrMakerUrl
			});
			this._addrMakerIframeUrls.updateUrls = n
		},
		getAddrMakerIframeUrls: function() {
			return this._addrMakerIframeUrls || {}
		}
	};

	function m(t, a) {
		var n = ["addr"];
		var r = t.deliveryAddressId;
		if (r === a.selectedId) {
			n.push(c)
		}
		if (t.defaultAddress) {
			n.push(d)
		}
		var i = '<div data-is4="' + !t.needUpdate4Address + '" data-id="' + r + '" class="' + n.join(" ") + '" tabindex="1">';
		i += '<div class="inner">' + p.toInner(t, a) + "</div>";
		i += s(t, a);
		i += '<ins class="curmarker"></ins>';
		i += '<a class="setdefault" data-clk="buy-order/mod/address:setDefault">\u8bbe\u4e3a\u9ed8\u8ba4</a>';
		i += '<ins class="deftip">\u9ed8\u8ba4\u5730\u5740</ins>';
		i += '<div class="floater">' + h(t, a) + "</div>";
		i += '<div class="option"><div class="container"></div></div>';
		return i + "</div>";

		function s() {
			var n = a.selectedId === t.deliveryAddressId;
			if (!t.needUpdate4Address || !n) {
				return ""
			}
			var r = [' <div class="update-4address-hint-mask j_Update4AddressHintMask"> ', "  <p>\u55b5\uff5e\u4e3a\u4e86\u8ba9\u5feb\u9012\u66f4\u597d\u7684\u4e3a\u60a8\u670d\u52a1\uff0c\u8bf7\u5b8c\u5584\u6536\u8d27\u5730\u5740\uff01\u5426\u5219\u65e0\u6cd5\u63d0\u4ea4\u8ba2\u5355<p>", '  <span class="btn j_update4AddressBtn" data-from="force_update_address_btn" data-id="{addressId}" data-clk="buy-order/mod/addrMaker:showUpdate"> \u7acb\u523b\u5b8c\u5584\u5730\u5740\u4fe1\u606f </span>', " </div>"].join("");
			return e.substitute(r, {
				addressId: t.deliveryAddressId
			})
		}
	}

	function h(e, t) {
		var a = "";
		var n = e.forwardData;
		if (t.supportFwd && n && n.warehouseId) {
			var r = n.district || "";
			if (r) {
				r = r + " "
			}
			var i = n.city + " " + r + n.street;
			a += '<span class="forward-tip-container">' + '<span class="forward-tip-title">\u8f6c\u8fd0\u4ed3\u5e93\uff1a</span>' + "<span>" + i + "</span><span> " + n.phone + "</span>" + '<s class="forward-tip-arrow"></s>' + "</span>"
		}
		return a
	}

	function y() {
		var n = t.get("#J_addresses");
		var r = t.get("div.list", n) || n;
		e.each(t.query("div.addr", r), function(e) {
			if (t.hasClass(e, c)) {
				u = e
			}
			a.detach(e, "mouseenter mouseleave click");
			a.on(e, "mouseenter mouseleave", function(e) {
				var a = "mouseenter" === e.type;
				if (t.hasClass(this, c)) {
					t[a && !t.hasClass(this, d) ? "addClass" : "removeClass"](this, "addr-set")
				}
				t[a ? "addClass" : "removeClass"](this, "addr-active")
			});
			a.on(e, "click", function() {
				b(this)
			})
		});
		a.detach(window, "keyup");
		a.on(window, "keyup", function(a) {
			var n;
			var r = a.target;
			var s = a.keyCode;
			if (a.target && a.target.tagName.toUpperCase === "SELECT") {
				return
			}
			if (13 === s) {
				n = document.activeElement;
				if (t.hasClass(n, "addr")) {
					b(n)
				}
			}
			if (37 === s || 39 === s) {
				n = document.activeElement;
				if (document.body === n) {
					return
				}
				if (t.hasClass(n, "addr")) {
					var o;
					if (t.hasClass("#J_addresses", ".addrMuch")) {
						o = t.query(".list > .addr")
					} else {
						o = t.query(".addr", ".list")
					}
					var c = o.length;
					var d;
					var u = 0;
					var l;
					var f = t.attr(n, "data-id");
					e.each(o, function(e, a) {
						d = t.attr(e, "data-id");
						if (d === f) {
							u = a;
							return false
						}
					});
					if (37 === s) {
						if (u === 0) {
							l = c - 1
						} else {
							l = u - 1
						}
						i.focusEl(o[l])
					} else if (39 === s) {
						if (u === c - 1) {
							l = 0
						} else {
							l = u + 1
						}
						i.focusEl(o[l])
					}
				}
			}
		});
		s.detach("updateAddrInner");
		s.on("updateAddrInner", function() {
			var e = p.getOptionById();
			var a = e.forwardData;
			var n = t.get("div.inner", u);
			n.innerHTML = p.toInner(e, {
				supportFwd: true,
				selectedId: e.deliveryAddressId
			});
			if (a && a.warehouseId) {
				t.addClass(u, "address-option-binded");
				var r = t.get("div.addr-toolbar", u);
				r.innerHTML += '<a href="#change" class="change-forward" data-mm="zhuanyun_change" data-clk="buy-order/mod/addrOption:showForward">\u66f4\u6539\u96c6\u8fd0</a>';
				var i = t.get("div.floater", u);
				t.empty(i);
				i.innerHTML = h(e, {
					supportFwd: true
				});
				g();
				o.fitBox(u)
			} else {
				t.removeClass(u, "address-option-binded")
			}
		})
	}

	function g() {
		var e = t.get("span.forward-info", u);
		var n = t.get("span.forward-tip-container", u);
		if (e) {
			var r = "";
			a.on(e, "mouseenter", function() {
				clearTimeout(r);
				t.css(n, {
					display: "block"
				});
				var e = t.parent(n, "div.addr");
				t.css(e, {
					"z-index": 3
				})
			});
			a.on(e, "mouseleave", function() {
				r = setTimeout(function() {
					t.css(n, {
						display: "none"
					})
				}, 50);
				var e = t.parent(n, "div.addr");
				t.css(e, {
					"z-index": ""
				})
			});
			a.on(n, "mouseenter", function() {
				clearTimeout(r);
				t.css(n, {
					display: "block"
				});
				var e = t.parent(n, "div.addr");
				t.css(e, {
					"z-index": 3
				})
			});
			a.on(n, "mouseleave", function() {
				r = setTimeout(function() {
					t.css(n, {
						display: "none"
					})
				}, 50);
				var e = t.parent(n, "div.addr");
				t.css(e, {
					"z-index": ""
				})
			})
		}
	}

	function b(a) {
		if (t.hasClass(a, c)) {
			return
		}
		var n = t.attr(a, "data-id");
		s.anim("hide", t.get("." + c, "#J_addresses"));
		t.removeClass(u, "address-option-binded");
		t.hide(".addr-toolbar", u);
		i.record("tmalljy.2.6?action=address");
		var r = e.clone(p.getAddrData());
		r.fields.selectedId = n;
		t.removeClass(u, c);
		t.addClass(a, c);
		t.prop(".addr-service-input", "checked", false);
		t.removeClass(".addr-station", ".service-active");
		var d = u;
		u = a;
		p.reload(r, function(e) {
			if (!e) {
				t.removeClass(u, c);
				u = d;
				t.addClass(u, c);
				i.focusEl(u);
				if (t.get(".use-forward", u)) {
					s.anim("show", u)
				}
				t.show(".addr-toolbar", u);
				var a = t.get(".use-forward", u);
				t.addClass(u, "address-option-binded");
				o.fitBox(u)
			}
		})
	}

	function k(t) {
		e.use("buy-order/mod/addrMaker", function(e, a) {
			a.init({
				type: "update",
				header: "\u4fee\u6539\u5730\u5740",
				deliveryAddressId: t
			})
		})
	}
	return p
}, {
	requires: ["dom", "event", "io", "buy-order/data", "buy-order/util", "buy-order/mod/addrOption", "buy-order/mod/addrService"]
});
KISSY.add("buy-order/mod/agencyPay", function(e, t, a, n) {
	var r = {
		name: "agencyPay",
		toHtml: function(e) {
			if (!e) {
				return ""
			}
			var t = e.fields;
			return n.toPaytype({
				label: "\u627e\u4eba\u4ee3\u4ed8",
				uuid: a.uuid(e),
				obj: e,
				checked: t.checked,
				disabled: t.disabled,
				chkClick: "buy-order/mod/agencyPay:toggle"
			})
		},
		load: function(e, n, i) {
			if ("add" === n) {
				t.append(t.create(r.toHtml(e)), "#J_CheckbarOption")
			} else {
				a.fetchEl(i, function(a) {
					if ("remove" === n) {
						t.remove(a)
					} else {
						t.replaceWith(a, t.create(r.toHtml(e)))
					}
				})
			}
		},
		mutex: function(n, r, s, o) {
			a.fetchEl(s, function(c) {
				var d = a.getMutexRelationsById(s);
				var u = o.sourceTag;
				if ("cod" === u || "couponCard" === u || "installment" === u || "installmentPurchase" === u || "tmallPoint" === u) {
					var l = "agencyPay-disabled";
					var f = t.get("input", c);
					if (r.checked) {
						m()
					} else {
						var v = true;
						e.each(d, function(e, t) {
							if (e && e.fields.checked) {
								v = false
							}
						});
						if (v) {
							p()
						}
					}
					i(false)
				}

				function p() {
					t.removeAttr(f, "disabled");
					t.removeClass(c, l)
				}

				function m() {
					f.checked = false;
					f.disabled = true;
					n.fields.checked = false;
					t.addClass(c, l)
				}
			})
		},
		toggle: function(e) {
			a.fromEl(n.getRootEl(e, "agencyPay"), function(t) {
				var r = e.checked;
				t.fields.checked = r;
				if (r) {
					n.record("tmalljy.2.6?action=otherspay")
				}
				i(r);
				a.mutex(t, {
					checked: r
				})
			})
		}
	};

	function i(e) {
		a.set("_isAgencyPayOn", e)
	}
	return r
}, {
	requires: ["dom", "buy-order/data", "buy-order/util"]
});
KISSY.add("buy-order/mod/anonymous", function(e, t, a, n) {
	var r = {
		name: "anonymous",
		toHtml: function(e) {
			if (!e) {
				return ""
			}
			var t = e.fields;
			return n.toPaytype({
				label: "\u533f\u540d\u8d2d\u4e70",
				obj: e,
				uuid: a.uuid(e),
				checked: t.checked,
				disabled: "disable" === e.status,
				chkClick: "buy-order/mod/anonymous:toggle"
			})
		},
		load: function(e, n, i) {
			if ("add" === n) {
				t.append(t.create(r.toHtml(e)), "#J_CheckbarOption")
			} else {
				a.fetchEl(i, function(a) {
					if ("remove" === n) {
						t.remove(a)
					} else {
						t.replaceWith(a, t.create(r.toHtml(e)))
					}
				})
			}
		},
		toggle: function(e) {
			a.fromEl(n.getRootEl(e, "anonymous"), function(t) {
				t.fields.checked = e.checked
			})
		}
	};
	return r
}, {
	requires: ["dom", "buy-order/data", "buy-order/util"]
});
KISSY.add("buy-order/mod/coupon", function(e, t, a, n, r) {
	var i;
	var s = true;
	var o = true;
	var c = {
		name: "coupon",
		init: function() {
			var e = a.one("#J_Coupon");
			this.$check = e.one("input.paytype-trigger");
			this.$root = e;
			this.$check.attr("checked", false);
			if (this.compData.fields.disable) {
				this.$check.attr("disabled", true);
				this.$root.addClass("coupon-disable")
			}
			this.fireMutex(false)
		},
		toHtml: function(e, t) {
			if (!e) {
				return ""
			}
			this.compData = e;
			var a = n.uuid(e);
			var r = '<input id="' + a + '" ' + (n.get("_isCouponOn") ? "checked" : "") + ' type="checkbox" class="paytype-trigger" data-clk="buy-order/mod/coupon:toggle"/><label for="' + a + '">\u4f7f\u7528\u5929\u732b\u70b9\u5238</label>';
			if (t) {
				return r
			}
			return '<div id="J_Coupon" class="coupon">' + r + "</div>"
		},
		fireMutex: function(e) {
			this.compData.fields.checked = e;
			n.set("_isCouponOn", e);
			n.mutex(this.compData, {
				checked: e
			})
		},
		toggle: function(e) {
			var t = this;
			var a = t.$root;
			if (e.checked) {
				if (t.compData.fields.code) {
					t.fireMutex(true);
					return f(t.compData.fields.code)
				}
				r.record("tmalljy.2.6?action=check");
				d(function() {
					e.checked = true;
					t.turnOn();
					t.fireMutex(true)
				}, function() {
					e.checked = false;
					t.fireMutex(false)
				})
			} else {
				a.removeClass("opt-Coupon-on opt-Coupon-empty opt-Coupon-forbidden opt-Coupon-frozen");
				l();
				t.fireMutex(false)
			}
		},
		turnOn: function() {
			var e = this;
			var t = e.$root;
			t.addClass("opt-Coupon-on");
			e.draw();
			var a = t.one("input.tc-text");
			if (a) {
				a.val("").on("valuechange", v);
				r.focusEl(a[0])
			}
		},
		draw: function() {
			var e = this;
			var t = e.$root;
			if (t.one("input.tc-text")) {
				e.updateDOM(t);
				return
			}
			var a = '<span class="coupon-detail">\uff1a' + '<span class="coupon-input">' + '<input class="tc-text" type="text" id="J_CouponInput" name="costCouponFee" autocomplete="off" />' + '\u70b9<span class="coupon-discount">\uff08\u5728\u4e0b\u4e00\u6b65\u62b5\u6263<span class="tc-rmb">&yen;</span><strong>0.00</strong>\uff09</span>' + "</span>" + '<span class="coupon-mask">\uff08\u65e0\u53ef\u7528\u70b9\u5238\uff09</span>' + '<span class="coupon-prepaid">' + '<a data-mm="dq_chongzhi" href="" data-clk="buy-order/mod/coupon:fill" class="abtn fillCoupon">\u5145\u503c</a>' + "</span>" + "</span>";
			a += '<div class="coupon-msg"><span class="coupon-rest"></span></div>';
			t.append(a);
			e.updateDOM(t)
		},
		updateDOM: function(t) {
			var a = this.$root;
			var n = this.compData.fields;
			a.removeClass("opt-Coupon-forbidden opt-Coupon-frozen");
			if (0 === n.available) {
				a.addClass("opt-Coupon-empty")
			} else {
				var r = a.one("span.coupon-rest");
				r.html("\uff08\u4f59\u989d" + n.total + '\u70b9\uff09<ins class="trigger">&#xe606;</ins>');
				a.removeClass("opt-Coupon-empty");
				var i = r.one("ins.trigger");
				var s = function() {
					e.use("buy-base/util/feedback", function(e, t) {
						var a = i[0];
						var r = new t({
							type: "error",
							node: a,
							trigger: a,
							arrow: "top",
							content: '<table class="grid-popup"><thead><tr><th>\u5355\u7b14\u9650\u989d\uff08\u70b9\uff09</th><th>\u6bcf\u65e5\u9650\u989d\uff08\u70b9\uff09</th></tr></thead><tbody><tr><td>' + n.every + "</td><td>" + n.daily + "</td></tr></tbody></table>"
						});
						r.show()
					});
					i.detach("mouseenter", s)
				};
				i.on("mouseenter", s)
			}
			var o = n.depositUrl;
			var c = a.one("a.fillCoupon");
			if (o) {
				c.attr("href", o).css("display", "inline")
			} else {
				c.css("display", "none")
			}
			a.one("strong").html("0.00")
		},
		fill: function(t) {
			var a = this;
			e.use("buy-base/util/popup", function(e, n) {
				var i = a.fillPopupObj;
				if (!i) {
					r.record("tmalljy.2.6?action=showchongzhi");
					i = new n({
						cls: "coupon-fill-popup",
						header: "\u5929\u732b\u70b9\u5238\u5145\u503c"
					});
					i.on("hide", function() {
						r.record("tmalljy.2.6?action=dq_closechongzhi");
						a.updateCoupon()
					});
					a.fillPopupObj = i
				}
				i.set("content", '<iframe frameborder="0" width="596" height="320" src="' + t.href + "&" + e.now() + '"></iframe>');
				i.show()
			})
		},
		updateCoupon: function() {
			var e = this;
			var t = e.$root;
			l();
			d(function() {
				e.turnOn();
				e.fireMutex(true)
			}, function() {
				e.$check.attr("checked", false);
				t.removeClass("opt-Coupon-on opt-Coupon-empty opt-Coupon-forbidden opt-Coupon-frozen");
				e.fireMutex(false)
			})
		},
		destory: function() {
			var e = this.$root;
			e.removeClass("opt-Coupon-on opt-Coupon-empty opt-Coupon-forbidden opt-Coupon-frozen");
			var t = e.one("input.tc-text");
			if (t) {
				t.detach("valuechange")
			}
			l()
		},
		load: function(e, a, n) {
			if ("add" === a) {
				t.prepend(t.create(this.toHtml(e)), "#J_CheckbarMain");
				this.init()
			} else {
				var r = this.$root;
				if (!r) {
					return
				}
				if ("remove" === a) {
					r.remove()
				} else {
					r.removeClass("opt-Coupon-on opt-Coupon-empty opt-Coupon-forbidden opt-Coupon-frozen");
					this.$check.attr("checked", false);
					l();
					s = true;
					this.fireMutex(false)
				}
			}
		},
		mutex: function(e, t, a, n) {
			var r = this.$root;
			if (!r) {
				return
			}
			var i = this.$check;
			var s = n.sourceTag;
			if ("installmentPurchase" === s || "agencyPay" === s || "cod" === s || "installment" === s) {
				var o = "coupon-disable";
				if (t.checked) {
					i.attr("checked", false);
					i.attr("disabled", true);
					e.fields.usePoint = 0;
					r.addClass(o)
				} else {
					i.removeAttr("disabled");
					r.removeClass(o)
				}
			}
		}
	};

	function d(e, t) {
		if (s) {
			return n.async(c.compData, function(a) {
				if (a) {
					s = false;
					e()
				} else {
					t()
				}
			})
		}
		e()
	}

	function u(t) {
		if (i) {
			return t(i)
		}
		var a = c.$root.one("span.coupon-input") || c.$root;
		e.use("buy-base/util/feedback", function(e, n) {
			i = new n({
				type: "stop",
				node: a.getDOMNode(),
				arrow: "top",
				tip: false
			});
			t(i)
		})
	}

	function l() {
		if (i) {
			i.hide()
		}
	}

	function f(e) {
		var t = '\u70b9\u5238\u5361\u6682\u65f6\u4e0d\u53ef\u7528\uff0c\u8bf7\u7a0d\u540e<a class="refreshCoupon" data-clk="buy-order/mod/coupon:updateCoupon">\u91cd\u8bd5</a>';
		if ("AliPayUserNotBind" === e) {
			t = '<a class="bind-alipay" href="http://member1.taobao.com/member/fresh/account_management.htm">\u8bf7\u5148\u7ed1\u5b9a\u652f\u4ed8\u5b9d\u8d26\u53f7</a>'
		} else if ("NoProduct" === e || "CardFrozen" === e) {
			t = "\u8d26\u6237\u88ab\u51bb\u7ed3\uff0c\u70b9\u5238\u5361\u6682\u65f6\u4e0d\u53ef\u7528"
		}
		c.$root.addClass("opt-Coupon-frozen");
		u(function(e) {
			e.set("content", t).show()
		})
	}

	function v() {
		var t = c.$root;
		var a = "";
		var r = c.compData.fields;
		var i = e.trim(t.one("input.tc-text").val());
		var s = 0;
		var d = 0;
		if (i) {
			if (!/^[1-9]\d*$/.test(i)) {
				a = "\u5929\u732b\u70b9\u5238\u5fc5\u987b\u4e3a\u5927\u4e8e\u6216\u7b49\u4e8e0\u7684\u6574\u6570";
				t.addClass("opt-Coupon-forbidden")
			} else {
				i = i - 0;
				var f = Math.min(r.available, n.get("_realSumCent"));
				var v = r.rate || 1;
				var p = i * v;
				if (p > f) {
					a = "\u672c\u6b21\u6700\u591a\u53ef\u4ee5\u4f7f\u7528" + parseInt(f / v, 10) + "\u70b9\u5238";
					t.addClass("opt-Coupon-forbidden")
				} else {
					s = i;
					d = p;
					t.removeClass("opt-Coupon-forbidden")
				}
			}
		} else {
			t.removeClass("opt-Coupon-forbidden")
		} if (a) {
			u(function(e) {
				e.set("content", a).show()
			});
			o = false
		} else {
			l();
			o = true
		}
		r.usePoint = s;
		t.one("strong").html((d / 100).toFixed(2))
	}
	n.on("_realSumCentPropChange", function() {
		if (n.get("_isCouponOn")) {
			v()
		}
	});
	n.on("testSubmit", function(e) {
		e.data.checker.add("coupon", function(e) {
			if (n.get("_isCouponOn")) {
				e(o, {})
			} else {
				e(true)
			}
		})
	});
	n.on("submitReady", function() {
		if (!n.get("_isCouponOn")) {
			try {
				c.compData.fields.usePoint = 0
			} catch (e) {}
		}
	});
	return c
}, {
	requires: ["dom", "node", "buy-order/data", "buy-order/util"]
});
KISSY.add("buy-order/mod/go", function(e, t, a, n, r) {
	var i = false;
	var s = {};
	var o = {
		name: "go",
		init: function() {
			this.btnEl = t.get("#J_Go")
		},
		toHtml: function(e, t) {
			var n = e.fields;
			var r = n.submitTitle;
			var i = ["go-btn"];
			var o = ["go-wrapper"];
			var c = "";
			if (l(e)) {
				i.push("cod-go-btn")
			}
			if (a.get("_isPreSell")) {
				i.push("go-btn-disable");
				o.push("go-ys-disable");
				s.prepay = {
					pass: false,
					focus: "#J_AgreePrePay"
				};
				c += a.get("_agreePrePayLabel")
			}
			if (e.fields.needUpdate4Address === true) {
				i.push("go-btn-disable");
				c = '<span class="not-4address-tip">\u8bf7\u5b8c\u5584\u6536\u8d27\u5730\u5740\u4fe1\u606f\uff01</span>'
			}
			if (a.get("_needTerm") && !a.get("_agreeTerm")) {
				i.push("go-btn-disable");
				o.push("go-ys-disable");
				s.terms = {
					pass: false,
					focus: "#J_Terms"
				}
			}
			c += '<span tabindex="21" id="J_Go" data-mm="submit2" class="' + i.join(" ") + '" data-clk="buy-order/mod/go:submit" title="' + r + '">' + r + "<s></s></span>";
			if (t) {
				return c
			}
			c = '<div id="' + a.uuid(e) + '" class="' + o.join(" ") + '">' + c + "</div>";
			if (a.get("fromCart")) {
				c = '<a class="back-cart" data-clk="buy-order/app:cart">\u8fd4\u56de\u8d2d\u7269\u8f66\u4fee\u6539</a>' + c
			}
			return c
		},
		submit: function(s) {
			if (i) {
				return
			}
			var o = u();
			if (!o.pass) {
				f(o.focus);
				return
			}
			i = true;
			var v = new n;
			a.fireEvent("testSubmit", {
				checker: v
			});
			v.validate(function(n, o) {
				if (!n) {
					i = false;
					e.each(o, function(e) {
						if (!e) {
							return
						}
						f(e.focus);
						return false
					})
				} else {
					var u = a.fromEl(r.getRootEl(s, "go-wrapper"));
					if (l(u)) {
						a.async(a.fromEl(r.getRootEl(s, "go-wrapper")), function(n) {
							if (n) {
								a.tag("urlTransfer", function(n) {
									e.use("json", function(e, r) {
										try {
											var i = n.fields;
											var s = r.parse(i.data);
											var o = t.create('<form action="' + i.url + '"></form>');
											var c = a.all();
											var u = {};
											e.each(c.data, function(e, t) {
												if (e.submit) {
													u[t] = e
												}
											});
											s.data = r.stringify(u);
											s.linkage = r.stringify(c.linkage);
											o.style.display = "none";
											t.prepend(o, document.body);
											d(o, s)
										} catch (l) {}
									})
								})
							} else {
								i = false
							}
						})
					} else {
						c()
					}
				}
			})
		},
		destory: function() {},
		load: function(e, t, n) {
			if ("update" === t) {
				var r = a.fetchEl(n);
				if (r) {
					r.innerHTML = this.toHtml(e, true);
					this.init()
				}
				this.init()
			}
		}
	};

	function c() {
		a.fireEvent("submitReady");
		var n = a.all();
		var r = {};
		e.each(n.data, function(e, t) {
			if (e.submit) {
				r[t] = e
			}
		});
		e.use("json", function(e, a) {
			d(t.get("#multiFormSubmit"), {
				data: a.stringify(r),
				linkage: a.stringify(n.linkage)
			})
		})
	}

	function d(a, n) {
		var r = t.create("<div></div>");
		e.each(n, function(e, a) {
			var n = t.create('<input type="hidden"/>');
			n.name = a;
			n.value = e;
			r.appendChild(n)
		});
		a.appendChild(r);
		a.method = "post";
		a.target = "_self";
		i = false;
		a.submit()
	}
	a.on("notifySubmit", function(a) {
		e.each(a.data, function(a, n) {
			var r = s[n] || {};
			e.mix(r, a);
			s[n] = r;
			var i = u();
			e.later(function() {
				t[i.pass ? "removeClass" : "addClass"](o.btnEl, "go-btn-disable")
			}, 100)
		})
	});

	function u() {
		var t = true;
		var a;
		e.each(s, function(e) {
			if (!e.pass) {
				t = false;
				a = e.focus;
				return false
			}
		});
		return {
			pass: t,
			focus: a
		}
	}

	function l(e) {
		return "COD" === e.fields.submitOrderType
	}

	function f(a) {
		a = a ? e.isFunction(a) ? a() : t.get(a) : "";
		if (!a) {
			return
		}
		setTimeout(function() {
			if (!a.nodeName.match(/(input|button|textarea|select)/i)) {
				t.scrollTop(t.offset(a).top - 100)
			} else {
				r.focusEl(a);
				if (a.select) {
					a.select()
				}
			}
		}, 0)
	}
	return o
}, {
	requires: ["dom", "buy-order/data", "buy-base/util/checker", "buy-order/util"]
});
KISSY.add("buy-order/mod/installment", function(e, t, a, n) {
	var r = "installment-disabled";
	var i = {
		name: "installment",
		init: function() {
			var t;
			a.on("_realSumCentPropChange _isCodPropChange", function(a) {
				if (t) {
					t.cancel()
				}
				t = e.later(function() {
					o()
				}, 20)
			});
			n.record("tmalljy.2.6?action=fenqi_pay")
		},
		toHtml: function(e) {
			if (!e) {
				return ""
			}
			var t = e.fields;
			var i = t.disabled;
			this.compData = e;
			return n.toPaytype({
				cls: i ? r : "",
				label: "\u4fe1\u7528\u5361\u5206\u671f",
				obj: e,
				uuid: a.uuid(e),
				checked: t.checked,
				disabled: i,
				chkClick: "buy-order/mod/installment:toggle"
			})
		},
		toggle: function(e) {
			var r = n.getRootEl(e, "installment");
			a.fromEl(r, function(i) {
				var s = i.fields;
				var o = e.checked;
				var c = s.bankUrl;
				if (c) {
					var d = "J_FenqiDesc";
					var u = t.get("#" + d);
					if (!u) {
						u = t.create('<div id="' + d + '">' + c + "</div>");
						t.insertAfter(u, n.getRootEl(r, "option"))
					}
					t.css(u, "display", o ? "block" : "none")
				}
				s.checked = o;
				a.mutex(i, {
					checked: o
				})
			})
		},
		mutex: function(e, t, a, n) {
			var r = n.sourceTag;
			if ("cod" === r || "couponCard" === r || "agencyPay" === r || "installmentPurchase" === r) {
				o(r, t)
			}
		},
		load: function(e, n, r) {
			if ("add" === n) {
				t.append(t.create(this.toHtml(e)), "#J_CheckbarOption")
			} else {
				a.fetchEl(r, function(a) {
					if ("update" === n) {
						t.replaceWith(a, t.create(i.toHtml(e)))
					} else {
						t.remove(a)
					}
				})
			}
		}
	};

	function s() {
		if (a.get("_isCod") || a.get("_isCouponOn") || a.get("_isAgencyPayOn")) {
			return false
		}
		var e = i.compData;
		if (e && a.get("_realSumCent") < e.fields.threshold) {
			return false
		}
		return true
	}

	function o(e, n) {
		var o = i.compData;
		if (!o) {
			return
		}
		a.fetchEl(o, function(a) {
			var i = t.get("input", a);
			var c = e === "installmentPurchase" && n.checked;
			if (s() && !c) {
				t.removeAttr(i, "disabled");
				t.removeClass(a, r)
			} else {
				i.checked = false;
				i.disabled = true;
				o.fields.checked = false;
				t.addClass(a, r);
				t.css("#J_FenqiDesc", "display", "none")
			}
		})
	}
	return i
}, {
	requires: ["dom", "buy-order/data", "buy-order/util"]
});
KISSY.add("buy-order/mod/insure", function(e, t, a, n, r, i) {
	var s = {
		name: "insure",
		init: function() {
			o(c);
			r.record("tmalljy.2.6?action=yfx_showuse")
		},
		toHtml: function(e) {
			if (!e) {
				return ""
			}
			var t = e.fields;
			var a = false;
			var r = "";
			t.checkBoxOptions = t.checkBoxOptions || [];
			var s = t.checkBoxOptions;
			if (1 === s.length) {
				var o = s[0];
				r += '<span class="tc-rmb">' + o.text + "</span>";
				a = o.readonly
			} else {
				r += i.render({
					toOption: function(e) {
						var t = e.checked;
						if (t && e.readonly) {
							a = true
						}
						return {
							isSelected: t,
							title: e.text
						}
					}
				}, s)
			}
			return '<span class="hd"><label><input id="' + n.uuid(e) + '" type="checkbox" ' + (a ? "disabled" : "") + ' data-clk="buy-order/mod/insure:toggle" ' + (t.checked ? "checked" : "") + ' /><span class="trigger">\u8fd0\u8d39\u9669</span></label></span>' + r
		},
		destory: function() {
			o(d)
		},
		load: function(e, a, i) {
			if ("add" === a) {
				n.parentEl(e, function(a) {
					a = t.get("div.insure", a);
					a.innerHTML = s.toHtml(e);
					r.make(a);
					c(a)
				})
			} else {
				n.fetchEl(i, function(t) {
					var n = r.getRootEl(t, "insure");
					d(n);
					if ("remove" === a) {
						n.innerHTML = ""
					} else {
						n.innerHTML = s.toHtml(e);
						r.make(n);
						c(n)
					}
				})
			}
		},
		toggle: function(e) {
			n.fromEl(e, function(t) {
				var a = r.getRootEl(e, "insure");
				var i = e.checked;
				var s;
				if (i) {
					var o = u(a);
					if (o) {
						l(t, o.get("selectedIndex"))
					} else {
						t.fields.checkBoxOptions[0].checked = true
					}
					s = "check";
					r.record("tmalljy.2.6?action=yfx_successuse")
				} else {
					s = "uncheck";
					r.record("tmalljy.2.6?action=yfx_cancel")
				}
				r.record("tmalljy.2.6?action=insure_click_" + s);
				t.fields.checked = i;
				var c = false;
				u(a, function(e) {
					var a = e.get("selectedIndex");
					var n = t.fields.checkBoxOptions[a];
					if (n.serviceId === "1064") {
						c = true
					}
				});
				n.async(t, function(a) {
					if (!a) {
						i = !i;
						t.fields.checked = i;
						e.checked = i
					} else {
						if (t.fields.checkBoxOptions.length === 1) {
							if (t.fields.checkBoxOptions[0].serviceId === "1064") {
								n.mutex(t, {
									checked: i,
									is1064: true
								})
							} else {
								n.mutex(t, {
									checked: i,
									is1064: false
								})
							}
						} else {
							n.mutex(t, {
								checked: i,
								is1064: c
							})
						}
					}
				})
			})
		},
		mutex: function(a, i, s, o) {
			var c = r.getRootEl(n.fetchEl(s), "insure");
			if (!c) {
				return
			}
			if ("cod" === o.sourceTag) {
				f()
			}
			if ("installmentPurchase" === o.sourceTag) {
				if (a.fields.checkBoxOptions.length === 1) {
					var d = a.fields.checkBoxOptions[0];
					if (d.serviceId === "1064") {
						f()
					}
				} else {
					v()
				}
			}
			var l = t.get("input", c);

			function f() {
				if (i.checked) {
					t.attr(t.get("input", c), "checked", false);
					a.fields.checked = false
				}
				t.css(c, "display", i.checked ? "none" : "block")
			}

			function v() {
				u(c, function(r) {
					if (i.checked) {
						var s;
						e.each(a.fields.checkBoxOptions, function(e, t) {
							if (e.serviceId === "1064") {
								var a = r.options[t];
								if (a.get("selected")) {
									s = e
								}
								a.set("disabled", true)
							}
						});
						var o = t.attr(l, "checked");
						if (s && o) {
							a.fields.checked = false;
							var d = e.clone(a);
							n.async(d, function(e) {
								if (e) {
									t.attr(t.get("input", c), "checked", false)
								} else {
									a.fields.checked = true;
									s.checked = true
								}
							})
						}
					} else {
						e.each(a.fields.checkBoxOptions, function(e, t) {
							var a = r.options[t];
							a.set("disabled", false)
						})
					}
				})
			}
		}
	};

	function o(a) {
		e.each(t.query("div.insure", "#content"), a)
	}

	function c(i) {
		var s;
		var o = t.get("input", i);
		u(i, function(a) {
			n.fromEl(o, function(r) {
				var i = a.get("selectedIndex");
				a.on("change", function() {
					var c = this.get("selectedIndex");
					if (c === i) {
						return
					}
					var d = e.clone(r);
					l(d, c);
					d.fields.checked = true;
					n.async(d, function(e) {
						if (e) {
							l(r, c, function(e) {
								if (s) {
									t.html(t.get(".mui-msg-content", s.contentEl), e.tips || "")
								}
							});
							r.fields.checked = true;
							o.checked = true;
							var d = r.fields.checkBoxOptions[c];
							if (d && d.serviceId === "1064") {
								n.mutex(r, {
									checked: true,
									is1064: true
								})
							} else {
								n.mutex(r, {
									checked: true,
									is1064: false
								})
							}
						} else {
							a.set("selectedIndex", i)
						}
					})
				})
			})
		});
		var c = t.get("span.trigger", i);
		var d = function() {
			r.record("tmalljy.2.6?action=insure_mouseenter");
			if (c.timer) {
				c.timer.cancel()
			}
			if (c.feedback) {
				c.feedback.show();
				return
			}
			e.use("mui/msg", function(e, t) {
				var a;
				var r;
				n.fromEl(o, function(n) {
					e.each(n.fields.checkBoxOptions, function(e, t) {
						if (0 === t) {
							r = e.tips
						}
						if (e.checked) {
							a = e.tips;
							return false
						}
					});
					s = new t({
						type: "tip",
						node: c,
						arrow: "top",
						content: a || r
					})
				});
				c.feedback = s
			})
		};
		a.on(c, "mouseenter", d);
		a.on(c, "mouseleave", function() {
			if (c.feedback) {
				c.timer = e.later(function() {
					c.feedback.hide()
				}, 150)
			}
		})
	}

	function d(e) {}

	function u(e, a) {
		return r.fetch(t.get("div.tc-select", e), "select", a)
	}

	function l(t, a, n) {
		e.each(t.fields.checkBoxOptions, function(t, r) {
			var i = r === a;
			t.checked = i;
			if (i && e.isFunction(n)) {
				n(t)
			}
		})
	}
	return s
}, {
	requires: ["dom", "event", "buy-order/data", "buy-order/util", "buy-base/util/select"]
});
KISSY.add("buy-order/mod/invoice", function(e, t, a, n, r) {
	var i = "invoice-modify";
	var s = {
		href: "http://service.tmall.com/support/tmall/knowledge-5529465.htm",
		text: "\u5982\u9700\u5f00\u5177\u589e\u503c\u7a0e\u53d1\u7968\uff0c",
		link: "\u8bf7\u6b64\u67e5\u770b\u8be6\u60c5"
	};
	var o;

	function c(t) {
		if (o) {
			return t(o)
		}
		e.use("mui/msg", function(e, a) {
			o = new a({
				type: "error",
				level: "stronger",
				arrow: "top",
				tip: false
			});
			t(o)
		})
	}
	var d = {
		name: "invoice",
		init: function() {
			u(l)
		},
		toHtml: function(t) {
			if (!t) {
				return ""
			}
			var a = "";
			var r = ["invoice"];
			var i = n.uuid(t);
			var o = t.fields;
			var c = o.title;
			var d = '<span class="bd"><span title="' + c + '" class="title">' + c + '</span><a title="\u4fee\u6539\u53d1\u7968\u62ac\u5934" tabindex="0" class="modify abtn" data-clk="buy-order/mod/invoice:modifyTitle">\u4fee\u6539</a></span>';
			if (o.options) {
				var u = i + "chk";
				r.push("invoice-dd invoice-dd-hide");
				a = '<div class="invoice-hd">' + '<input type="checkbox" id="' + u + '" data-clk="buy-order/mod/invoice:toggle" />' + '<label for="' + u + '">\u5f00\u5177\u53d1\u7968</label>' + "</div>" + '<div class="invoice-bd">' + '<span class="hd">\u62ac\u5934\uff1a</span>' + d + '<span class="types"><select>';
				e.each(o.options, function(e) {
					a += '<option value="' + e.id + '">' + e.text + "</option>"
				});
				a += "</select></span></div>"
			} else {
				a = '<span class="hd">\u53d1\u7968\u62ac\u5934\uff1a</span>' + d
			} if (o.valueAddTax) {
				a += '<span class="invoice-des">' + s.text + '<a target="_blank" href="' + s.href + '">' + s.link + "</a></span>"
			}
			return '<div id="' + i + '" class="' + r.join(" ") + '">' + a + "</div>"
		},
		modifyTitle: function(s) {
			var d = r.getRootEl(s, "invoice");
			t.addClass(d, i);
			var u = v(d);
			u.innerHTML = '<input type="text" class="tc-text" value="' + p(d) + '" />';
			var l = t.get("input.tc-text", u);
			a.on(l, "blur", function() {
				var s = e.trim(this.value);
				s = s.slice(0, 500);
				if (!s) {
					return c(function(e) {
						t.append(e.contentEl, l.parentNode);
						t.html(t.get(".mui-msg-content", e.contentEl), "\u8bf7\u586b\u5199\u53d1\u7968\u62ac\u5934");
						e.show();
						r.focusEl(l)
					})
				}
				if (o) {
					o.hide()
				}
				t.removeClass(d, i);
				a.detach(this);
				s = e.escapeHTML(s);
				u.innerHTML = s;
				u.title = s;
				n.fromEl(d, function(e) {
					e.fields.title = s
				})
			});
			r.focusEl(l)
		},
		toggle: function(e) {
			var a = r.getRootEl(e, "invoice");
			var i = e.checked;
			t[i ? "removeClass" : "addClass"](a, "invoice-dd-hide");
			n.fromEl(a, function(e) {
				e.fields.checked = i
			})
		},
		destory: function() {
			u(f)
		},
		load: function(e, t) {}
	};

	function u(a) {
		e.each(t.query("div.invoice", "#A_orders"), a)
	}

	function l(e) {
		a.on(t.get("select", e), "change", function() {
			var a = this.value;
			n.fromEl(e, function(n) {
				var r = t.get("input", e);
				n.fields.selectedId = a;
				r.chekced = true
			})
		})
	}

	function f(e) {
		a.detach(t.get("select", e), "change")
	}

	function v(e) {
		return t.get("span.title", e)
	}

	function p(e) {
		return t.get("span.title", e).title
	}
	return d
}, {
	requires: ["dom", "event", "buy-order/data", "buy-order/util"]
});
KISSY.add("buy-order/mod/memo", function(e, t, a, n) {
	var r = {
		name: "memo",
		init: function() {
			i(s)
		},
		toHtml: function(t, a, r) {
			if (!t) {
				return ""
			}
			r = e.merge({}, r);
			var i = n.uuid(t);
			var s = r.inAct;
			var o = "";
			if (!s) {
				o += '<label class="hd" for="' + i + 'msg">\u8865\u5145\u8bf4\u660e\uff1a</label><label class="hint">\u91cd\u8981\u63d0\u9192</label>'
			}
			o += '<div class="tc-util tc-inputmask"><textarea class="tc-text tc-util tc-counter" data-maxlength="200" id="' + i + 'msg"></textarea><label for="' + i + 'msg">' + (s ? "\u8865\u5145\u8bf4\u660e\u533a" : "\u9009\u586b\uff0c\u53ef\u544a\u8bc9\u5356\u5bb6\u60a8\u7684\u7279\u6b8a\u8981\u6c42") + "</label></div>";
			if (a) {
				return o
			}
			return '<div class="memo" id="' + i + '">' + o + "</div>"
		},
		destory: function() {
			i(o)
		},
		load: function(e, t, a) {
			if ("remove" === t) {
				n.fetchEl(a, function(e) {
					o(e);
					e.innerHTML = ""
				})
			}
		}
	};

	function i(a) {
		e.each(t.query("div.memo", "#content"), a)
	}

	function s(r) {
		var i = t.get("textarea", r);
		var s = function() {
			e.use("buy-base/util/feedback", function(e, a) {
				var n = t.get("label.hint", r);
				var i = new a({
					type: "attention",
					cls: "info-feed",
					node: n,
					trigger: n,
					arrow: "top",
					content: "\u6b64\u5904\u6240\u586b\u5185\u5bb9\u4ec5\u9650\u5bf9\u5546\u5bb6\u7684\u6e29\u99a8\u63d0\u9192\uff0c\u82e5\u60a8\u9700\u6539\u53d8\u8ba2\u5355\u5185\u5bb9\u6216\u53e6\u6709\u7279\u6b8a\u9700\u6c42\uff0c\u8bf7\u60a8\u52a1\u5fc5\u901a\u8fc7\u65fa\u65fa\u4e0e\u5546\u5bb6\u786e\u8ba4\u4e00\u81f4\u3002\u5426\u5219\uff0c\u8be5\u586b\u5199\u5185\u5bb9\u5c06\u89c6\u4e3a\u65e0\u6548\u3002"
				})
			});
			s = function() {}
		};
		a.on(i, "focus", function() {
			t.addClass(r, "memo-expand");
			s()
		});
		a.on(i, "blur", function() {
			var a = e.trim(t.val(this));
			if (!a) {
				t.removeClass(r, "memo-expand")
			}
			n.fromEl(r, function(e) {
				e.fields.value = a.substr(0, 200)
			})
		});
		a.on(i, "valuechange", function() {
			var a = e.trim(t.val(this));
			var n = true;
			if (a && a.length > 200) {
				n = false
			}
		})
	}

	function o(e) {
		var n = t.get("textarea", e);
		a.detach(n, "focus blur")
	}
	n.on("testSubmit", function(a) {
		a.data.checker.add("memo", function(a) {
			var n = true;
			i(function(r) {
				var i = t.get("textarea", r);
				var s = e.trim(t.val(i));
				if (s && s.length > 200) {
					n = false;
					a(false, {
						focus: i
					});
					return false
				}
			});
			if (n) {
				a(true)
			}
		})
	});
	return r
}, {
	requires: ["dom", "event", "buy-order/data"]
});
KISSY.add("buy-order/mod/misc", function(e, t, a, n, r) {
	var i = {
		itemPay: {
			tag: "span",
			render: function(e) {
				var t = "";
				var a = e.fields;
				if (a.prePay) {
					t += '<p class="prePay"><ins class="icon">\u5b9a\u91d1</ins>' + a.prePay + "</p>";
					if (a.finalPay) {
						t += '<p class="finalPay">\uff08\u5c3e\u6b3e ' + a.finalPay + "\uff09</p>"
					}
					return t
				}
				t += '<p class="sum">' + (a.price || a.unitPrice) + "</p>";
				if (n.get("isChaoshi")) {
					t += '<p class="weight">' + a.weight / 1e3 + "</p>"
				}
				return t
			}
		},
		orderPay: {
			tag: "div",
			render: function(e) {
				var t = e.fields;
				var a = n.get("_isPreSell") && "fullPay" !== n.get("orderType");
				var r = a ? "\u5b9a\u91d1" : t.isOrderGroup ? "\u6d3b\u52a8" : "\u5e97\u94fa";
				var i = a ? "(\u4e0d\u542b\u8fd0\u8d39\u3001\u670d\u52a1\u8d39)" : "(\u542b\u8fd0\u8d39)";
				var s = r + "\u5408\u8ba1";
				s += '<span class="isIncPostage">' + i + '</span>: <span class="tc-rmb">&yen;</span>';
				s += "<strong>" + t.price + "</strong>";
				if (a) {
					s += '<div class="ys-tip"><p>\u8fd0\u8d39\u3001\u670d\u52a1\u8d39\u5728\u5c3e\u6b3e\u9636\u6bb5\u652f\u4ed8\uff0c\u4e14\u4f18\u60e0\u5238\u5c06\u5728\u5c3e\u6b3e\u652f\u4ed8\u9636\u6bb5\u62b5\u6263</p></div>'
				}
				return s
			}
		}
	};
	var s = {
		name: "misc",
		init: function() {
			e.each(i, function(e) {
				o(e, "init")
			})
		},
		toHtml: function(e) {
			if (!e) {
				return ""
			}
			var t = e.tag;
			var a = i[t];
			if (a) {
				return c(a.tag, e, a.render(e))
			}
			return ""
		},
		destory: function() {
			e.each(i, function(e) {
				o(e, "destory")
			})
		},
		load: function(e, a, r) {
			if (!e) {
				return
			}
			var c = e.tag;
			if ("remove" === a) {} else if ("update" === a) {
				if ("itemInfo" === c) {
					n.parentEl(e, function(a) {
						t.html(t.get("div.campign", a), s.toCampign(e))
					})
				} else {
					var d = i[c];
					if (d) {
						var u = n.fetchEl(r);
						if (u) {
							u.innerHTML = d.render(e);
							o(d, "init")
						}
					}
				}
			} else {
				if ("realPay" === c) {
					t.css("#J_checkbar", "display", "block")
				}
			}
		},
		toCampign: function(e, t) {
			var a = "";
			var n = e.fields.campignName;
			if (n) {
				a += '<span class="icon">' + n + "</span></div>"
			}
			if (t) {
				return a
			}
			return '<div class="campign">' + a + "</div>"
		}
	};

	function o(t, a) {
		var n = t[a];
		if (e.isFunction(n)) {
			n()
		}
	}

	function c(e, t, a) {
		return "<" + e + ' class="' + t.tag + '" id="' + n.uuid(t) + '">' + a + "</" + e + ">"
	}
	return s
}, {
	requires: ["dom", "event", "buy-order/data", "buy-order/util"]
});
KISSY.add("buy-order/mod/point", function(e, t, a, n, r) {
	var i = {
		name: "point",
		init: function() {
			var e = t.get("#J_Point");
			if (e) {
				this.chkEl = t.get("input.toggle", e);
				this.inputEl = t.get("input.cost", e);
				this.dischargeEl = t.get("#J_Discharge");
				this.rootEl = e;
				a.on(this.inputEl, "valuechange", s);
				var r = this.data;
				r.fields.checked = false;
				if (f(r)) {
					r.fields.checked = true;
					n.mutex(r, {
						checked: true
					})
				}
			}
		},
		toHtml: function(e) {
			if (!e) {
				return ""
			}
			var t = n.uuid(e);
			var a = e.fields;
			var r = f(e);
			var i = a.totalPoint > a.availablePoint;
			var s = r ? "point point-buy" : "point point-off";
			var o = '<div class="hd">' + '<input class="toggle" data-clk="buy-order/mod/point:toggle" type="checkbox" id="' + t + '"/>' + '<label for="' + t + '">\u4f7f\u7528\u5929\u732b\u79ef\u5206</label>' + "<p>&nbsp;</p>" + "</div>";
			if (!r) {
				o += '<div class="bd">' + '<span class="colon">\uff1a</span>' + '<span class="txtBox">' + '<input class="tc-text cost" id="J_PointInput" type="text" autocomplete="off" />\u70b9</span>' + '<span class="discharge">- <span class="tc-rmb">&yen;</span>' + '<strong id="J_Discharge">0.00</strong>' + "</span>" + '<p class="totalPoint">';
				if (i) {
					o += '<span>(\u53ef\u7528<span class="usablePoints">' + a.totalPoint + '</span>\u70b9,\u672c\u6b21\u6700\u591a\u53ef\u7528<span class="usablePoints">' + a.availablePoint + "</span>\u70b9\uff09</span>"
				} else {
					o += '<span>\uff08\u53ef\u7528<span class="usablePoints">' + a.availablePoint + "</span>\u70b9\uff09</span>"
				}
				o += "</p></div>"
			} else {
				o += '<div class="bd">' + '<span class="colon">\uff1a</span>' + '<span class="txtBox"><span class="usePoint">' + a.usePoint + "</span>\u70b9</span>" + '<p class="totalPoint"><span>\uff08\u53ef\u7528<span class="usablePoints">' + a.availablePoint + "</span>\u70b9\uff09</span></p>" + "</div>"
			}
			this.data = e;
			this.maxUsablePoints = Math.min(a.availablePoint, a.totalPoint);
			return '<div class="' + s + '" id="J_Point">' + o + "</div>"
		},
		toggle: function() {
			var e = this.rootEl;
			var a = this.inputEl;
			var i = this.chkEl;
			if (t.get(".usePoint", e)) {
				return
			}
			if (i.checked) {
				t.removeClass(e, "point-off");
				r.focusEl(a);
				r.record("tmalljy.2.6?action=usepoints")
			} else {
				t.addClass(e, "point-off");
				a.value = "";
				o(0)
			}
			var s = n.fromEl(i);
			s.fields.checked = i.checked;
			n.mutex(s, {
				checked: i.checked
			})
		},
		destory: function() {
			var e = this.rootEl;
			a.detach(this.inputEl)
		},
		load: function(e, a) {
			if ("add" === a) {
				t.insertBefore(t.create(this.toHtml(e)), "#J_CheckDue");
				this.init()
			} else {
				o(e.fields.usePoint);
				if ("remove" === a) {
					r.disposeElement(this.rootEl)
				} else {
					this.destory();
					t.replaceWith(this.rootEl, t.create(this.toHtml(e)));
					this.init()
				}
			}
		},
		mutex: function(e, a, i, s) {
			var c = r.getRootEl(n.fetchEl(i), "point");
			if (!c) {
				return
			}
			var d = t.get("input", c);
			var u = s.sourceTag;
			if ("cod" === u) {
				if (a.checked) {
					t.attr(d, "checked", false);
					o(0);
					t.addClass(c, "point-hide")
				} else {
					t.removeClass(c, "point-hide")
				}
			} else if ("agencyPay" === u || "installmentPurchase" === u) {
				var l = "point-disable";
				if (a.checked) {
					t.attr(d, "checked", false);
					t.attr(d, "disabled", true);
					o(0);
					t.addClass(c, l)
				} else {
					t.removeAttr(d, "disabled");
					t.removeClass(c, l)
				}
			}
		}
	};

	function s() {
		var t = e.trim(i.inputEl.value);
		var a = i.maxUsablePoints;
		if (t) {
			if (!/^([1-9]\d*|0)$/.test(t)) {
				return c("\u4f7f\u7528\u5929\u732b\u79ef\u5206\u70b9\u6570\u5fc5\u987b\u4e3a\u5927\u4e8e\u6216\u7b49\u4e8e0\u7684\u6574\u6570")
			}
			a = i.maxUsablePoints;
			if (a <= 0) {
				return c("\u60a8\u5f53\u524d\u6ca1\u6709\u53ef\u7528\u79ef\u5206")
			}
			t = t - 0;
			if (t > a) {
				i.inputEl.value = a;
				return c("\u672c\u6b21\u6700\u591a\u53ef\u7528" + a + "\u79ef\u5206")
			}
		}
		if (d && t !== a) {
			d.hide()
		}
		o(t)
	}

	function o(e) {
		var a = i.data.fields;
		var r = f(i.data);
		if (r) {
			e = 0
		}
		l(true);
		t.html(i.dischargeEl, (e / 100).toFixed(2));
		n.fireEvent("payChange", {
			name: "point",
			value: 0 - e
		});
		if (!r) {
			a.usePoint = e
		}
	}

	function c(e, a) {
		if (!a) {
			l(false)
		}
		u(function(a) {
			t.html(t.get(".mui-msg-content", a.contentEl), e);
			a.show()
		})
	}
	var d;

	function u(t) {
		e.use("mui/msg", function(e, a) {
			if (!d) {
				d = new a({
					type: "stop",
					level: "stronger",
					node: i.inputEl.parentNode,
					arrow: "top",
					tip: false
				})
			}
			t(d)
		})
	}

	function l(e) {
		n.fireEvent("notifySubmit", {
			point: {
				pass: e,
				focus: "#J_PointInput"
			}
		})
	}

	function f(e) {
		if (e && e.fields) {
			return !e.fields.editable
		}
		return false
	}
	return i
}, {
	requires: ["dom", "event", "buy-order/data", "buy-order/util"]
});
KISSY.add("buy-order/mod/postage", function(e, t, a, n, r, i) {
	var s = "tube-postage-schedule";
	var o = "tub-postage-need-select";
	var c = "tub-postage-show-calendar";
	var d = {
		name: "postage",
		init: function() {
			f(v)
		},
		toHtml: function(t) {
			var a = "";
			if (t) {
				var r = t.fields;
				var s = r.selectedId;
				var o;
				a += i.render({
					cls: "postage-select",
					toOption: function(e) {
						var t = e.id;
						var a = false;
						if (t === s) {
							o = e;
							a = true
						}
						return {
							isSelected: a,
							value: t,
							title: e.message
						}
					}
				}, r.options);
				if (a) {
					a = '<label class="hd"><input id="' + n.uuid(t) + '" name="radio' + e.guid() + '" type="radio" data-clk="buy-order/mod/postage:toggle" ' + (r.checked ? "checked" : "") + " />\u666e\u901a\u914d\u9001</label>" + a;
					a += '<div class="schedule"></div>';
					a += '<div class="tip">' + m(o) + "</div>";
					a += '<div class="coverage"></div>'
				}
			}
			return a
		},
		destory: function() {
			f(p)
		},
		load: function(e, a, i) {
			if ("add" === a) {
				n.parentEl(e, function(a) {
					var n = t.get("div.postage", a);
					n.innerHTML = d.toHtml(e);
					r.make(n);
					v(n)
				})
			} else {
				n.fetchEl(i, function(t) {
					var n = r.getRootEl(t, "postage");
					p(n);
					if ("remove" === a) {
						n.innerHTML = ""
					} else {
						n.innerHTML = d.toHtml(e);
						r.make(n);
						v(n)
					}
				})
			}
		},
		toggle: function(e) {
			var t = h(e);
			var a = t.fields;
			var r = e.checked;
			if (r === a.checked) {
				return
			}
			t.fields.checked = r;
			n.async(t, function(e) {
				if (e) {
					if (r) {
						n.mutex(t, {
							checked: true
						})
					}
				} else {
					t.fields.checked = !r
				}
			})
		},
		mutex: function(e, t, a, r) {
			var i = n.fetchEl(a);
			if (!i) {
				return
			}
			if ("cod" === r.sourceTag && t.checked) {
				i.checked = false;
				e.fields.checked = false
			}
		},
		setTime: function(a, n) {
			if (t.hasClass(a, "set-time-enable")) {
				var r = l(a);
				var i = t.get("div.postage", r);
				var s = h(i);
				var d = C(s);
				y(d, i);
				t.addClass(r, c);
				t.removeClass(r, o);
				if (e.isObject(n) && n.target || !n) {
					u(a, true)
				}
			}
		},
		removeTime: function(e, a) {
			var n = l(e);
			t.empty(t.get("div.schedule", n));
			t.addClass(n, o);
			if (!a) {
				var r = t.get(".tip", n);
				u(r, false)
			}
		}
	};

	function u(t, a) {
		var r = h(t);
		var i = e.clone(r);
		var s = C(i);
		if (s.is3W) {
			s.is3WUsed = a
		}
		if (s.isSM) {
			s.isSMUsed = a
		}
		n.async(i, function(e) {
			if (!e) {
				d[a ? "setTime" : "removeTime"](t, true)
			}
		})
	}

	function l(e) {
		return r.getRootEl(e, "tube-postage")
	}

	function f(a) {
		e.each(t.query("div.postage", "#A_orders"), a)
	}

	function v(r) {
		w(r, function(i) {
			var d = h(r);
			var u = C(d);
			i.on("change", function() {
				var t = d.fields;
				var a = t.selectedId;
				var r = t.checked;
				var s = this.get("value");
				if (a === s) {
					return
				}
				var o = e.clone(d);
				o.fields.checked = true;
				o.fields.selectedId = this.get("value");
				n.async(o, function(e) {
					if (e) {
						t.checked = true;
						t.selectedId = s;
						if (!r) {
							n.mutex(d, {
								checked: true
							})
						}
					} else {
						i.set("value", a)
					}
				})
			});
			var f = l(r);
			var v = u.is3W && !u.is3WUsed || u.isSM && !u.isSMUsed;
			if (u.datePicker) {
				e.use("buy-base/util/calendar");
				t.addClass(f, s);
				y(u, r);
				if (v) {
					t.addClass(f, o)
				} else {
					if (t.hasClass(f, c)) {
						var p = t.get("div.dateval", f);
						a.fire(p, "click");
						t.removeClass(f, c)
					}
				}
			} else {
				t.removeClass(f, o);
				t.removeClass(f, s)
			} if (u.sfFree && u.sfFree.copyWrite) {
				t.addClass(f, "tube-postage-coverage");
				g(u, r)
			} else {
				t.addClass(f, "tube-postage-coverage")
			}
		})
	}

	function p(e) {}

	function m(e) {
		if (e) {
			var t = "";
			var a = e.signText;
			if (a) {
				t += '<p class="signText">' + a + "</p>"
			}
			if (e.is3W || e.isSM) {
				t += '<span class="abtn postage-set-time set-time-enable" data-clk="buy-order/mod/postage:setTime">\u9009\u62e9\u914d\u9001\u65f6\u95f4</span>' + '<div class="tc-feedback set-time-feed"><div class="tc-feedback-inner"><div class="tc-feedback-con tc-feedback-attention"><div class="tc-feedback-content">\u5f53\u524d\u914d\u9001\u65b9\u5f0f\u4e0d\u652f\u6301\u8be5\u670d\u52a1</div><ins class="tc-feedback-icon"></ins></div><s class="tc-feedback-arrow tc-feedback-arrow-top"></s></div></div>'
			}
			return t
		}
		return ""
	}

	function h(e) {
		var a = r.getRootEl(e, "postage");
		if (a) {
			return n.fromEl(t.get("input", a))
		}
	}

	function y(e, n) {
		var r = "";
		var i = e.datePicker;
		var s = e.is3W || e.isSM;
		if (s) {
			r += '<div class="schedule-ctl">\u914d\u9001\u65f6\u95f4 <span class="abtn" data-clk="buy-order/mod/postage:removeTime">\u53d6\u6d88</span></div>'
		}
		var o = i.selectedDate;
		var c = o || i.beginDate;
		var d = i.selectedPeriods;
		var u = d || i.periods[0];
		r += '<div class="schedule-zone">';
		r += '<div class="schedule-calendar"><div class="dateval">' + c + "&nbsp;" + u + "</div></div>";
		r += "</div>";
		r += '<div class="schedule-tip' + (s ? " tips-need-select" : "") + '">';
		if (e.is3W) {
			r += '\u4e0d\u53ef\u6297\u529b\u7b49\u56e0\u7d20\u53ef\u81f4\u5ef6\u8bef <a href="http://service.tmall.com/support/tmall/knowledge-5811867.htm">\u8be6\u60c5</a>'
		} else {
			r += b(i.payTimeTip, c, i.wayDay)
		}
		r += "</div>";
		var l = t.get("div.schedule", n);
		l.innerHTML = r;
		var f = t.get("div.dateval", l);
		a.on(f, "click", function(t) {
			t.halt();
			k(l, e)
		})
	}

	function g(e, a) {
		var n = t.get("div.coverage", a);
		t.empty(n);
		var r = e.sfFree;
		var i = '<span class="abtn" data-clk="buy-order/mod/addrUpdate:change" class="update" title="\u70b9\u6b64\u5347\u7ea7\u5730\u5740\u4fe1\u606f">\u70b9\u6b64\u5347\u7ea7\u5730\u5740\u4fe1\u606f</span>';
		var s = r.adviceTownId;
		if (s) {
			i = '<span data-clk="buy-order/mod/addrUpdate:change" data-val="' + s + '" class="abtn change" title="no!\u6211\u8981\u4fee\u6539">no!\u6211\u8981\u4fee\u6539</span>' + '<span data-clk="buy-order/mod/addrUpdate:save" data-val="' + s + '" class="abtn save" title="yes,\u4fdd\u5b58">yes,\u4fdd\u5b58</span>'
		}
		var o = '<div class="tc-feedback">' + '<div class="tc-feedback-inner">' + '<div class="tc-feedback-con tc-feedback-attention">' + '<div class="tc-feedback-content">' + r.copyWrite + "<p>" + i + "</p></div>" + '<s class="tc-feedback-icon"></s>' + "</div>" + '<s class="tc-feedback-arrow tc-feedback-arrow-top"></s>' + "</div>" + "</div>";
		n.innerHTML = o
	}

	function b(e, t, a) {
		var n = t.split("-");
		var r = new Date(n[0], n[1] - 1, n[2] - a);
		return "\uff08" + e.replace("{m}", r.getMonth() + 1).replace("{d}", r.getDate()) + "\uff09"
	}

	function k(i, s) {
		e.use("buy-base/util/calendar", function(e, o) {
			var c = s.datePicker;
			var d = c.selectedDate || c.beginDate;
			var u = {
				root: i
			};
			e.mix(u, c);
			u.payTimeTip = null;
			var l = new o(u);
			l.show();
			t.addClass(i, "calendar-show");
			l.on("selected", function() {
				var t = r.getRootEl(i, "postage");
				var a = e.clone(h(t));
				var s = C(a);
				var o = s.datePicker;
				o.selectedDate = this.get("selectedDate");
				o.selectedPeriods = this.get("selectedPeriods");
				n.async(a)
			});

			function f() {
				l.hide();
				t.removeClass(i, "calendar-show")
			}
			n.on("asyncBegin", function() {
				f()
			});
			a.on(document, "click", function(e) {
				var a = e.target;
				if (t.parent(a, ".tc-calendar") || t.hasClass(a, "tc-calendar")) {
					return
				} else {
					f()
				}
			})
		})
	}

	function C(t) {
		var a = t.fields.selectedId;
		var n;
		var r;
		e.each(t.fields.options, function(e) {
			if (e.id === a) {
				r = e;
				return false
			}
		});
		return r
	}

	function w(e, a) {
		return r.fetch(t.get("div.postage-select", e), "select", a)
	}
	return d
}, {
	requires: ["dom", "event", "buy-order/data", "buy-order/util", "buy-base/util/select"]
});
KISSY.add("buy-order/mod/promotion", function(e, t, a, n, r, i) {
	function s(e) {
		return '<span class="discount">-<span class="rmb">&yen;</span><strong>' + e + "</strong></span>"
	}
	var o = {
		item: {
			toHtml: function(e) {
				var t = f(e);
				var a = t.select;
				if (a) {
					var n = t.desc;
					if (n) {
						a += '<span class="tip" data-desc="' + escape(n) + '"></span>'
					}
				} else {
					a = "-"
				}
				return a
			}
		},
		shop: {
			toHtml: function(e) {
				var t = f(e);
				var a = t.select;
				if (a) {
					a = '<label for="' + n.uuid(e) + '">' + e.fields.title + "\uff1a</label>" + a;
					var i = t.desc;
					if (i) {
						a += '<span class="tip" data-desc="' + escape(i) + '"></span>'
					}
					a += s(r.toMoney(0 - e.quark))
				}
				return a
			}
		},
		cross: {
			toHtml: function(t) {
				var a = "";
				if (t) {
					var r = t.fields;
					var i = r.selectedId;
					a += '<span id="' + n.uuid(t) + '">' + r.title + "\uff1a</span>";
					e.each(r.options, function(e) {
						if (e.id === i) {
							a += s(e.discount);
							return false
						}
					})
				}
				return a
			}
		}
	};
	var c = {
		name: "promotion",
		invokeMethod: function(e, t, a) {
			var n = o[e.fields.promotionType] || {};
			t = n[t];
			if (t) {
				return t.apply(n, a)
			}
		},
		init: function() {
			d(u)
		},
		toHtml: function(e) {
			var t;
			if (e) {
				t = this.invokeMethod(e, "toHtml", [e])
			}
			return t || ""
		},
		destory: function() {
			d(l)
		},
		load: function(e, a, i) {
			if ("add" === a) {
				n.parentEl(e, function(a) {
					a = t.get("div." + ("item" === e.fields.promotionType ? "item" : "order") + "promo", a);
					if (a) {
						a.innerHTML = c.toHtml(e);
						r.make(a);
						u(a)
					}
				})
			} else {
				n.fetchEl(i, function(t) {
					t = r.getRootEl(t, "promotion");
					if (t) {
						l(t);
						if ("update" === a) {
							t.innerHTML = c.toHtml(e);
							r.make(t);
							u(t)
						} else {
							t.innerHTML = ""
						}
					}
				})
			}
		}
	};

	function d(a) {
		e.each(t.query("div.promotion", "#A_orders"), a)
	}

	function u(i) {
		r.fetch(t.get("div.tc-select", i), "select", function(r) {
			n.fromEl(r.el, function(s) {
				r.on("change", function() {
					var t = this.get("value");
					var a = s.fields.selectedId;
					if (t === a) {
						return
					}
					var i = e.clone(s);
					i.fields.selectedId = t;
					n.async(i, function(e) {
						if (e) {
							s.fields.selectedId = t
						} else {
							r.set("value", a)
						}
					})
				});
				var o = t.get("span.tip", i);
				if (o) {
					var c = function() {
						e.use("buy-base/util/feedback", function(e, a) {
							var n = new a({
								type: "tip",
								node: o,
								content: unescape(t.attr(o, "data-desc")),
								tip: true,
								arrow: "top"
							});
							n.show()
						});
						a.detach(o, "mouseenter", c)
					};
					a.on(o, "mouseenter", c)
				}
			})
		})
	}

	function l(e) {}

	function f(e) {
		var t = "";
		var a = "";
		if (e) {
			var r = e.fields;
			var s = r.selectedId;
			t += i.render({
				id: n.uuid(e),
				toOption: function(e) {
					var t = e.id;
					var n = false;
					if (t === s) {
						n = true;
						a = e.desc
					}
					return {
						title: e.title,
						value: t,
						isSelected: n
					}
				}
			}, r.options)
		}
		return {
			select: t,
			desc: a
		}
	}
	return c
}, {
	requires: ["dom", "event", "buy-order/data", "buy-order/util", "buy-base/util/select"]
});
KISSY.add("buy-order/mod/quantity", function(e, t, a, n, r) {
	var i = {
		name: "quantity",
		init: function() {
			s(o)
		},
		toHtml: function(e) {
			if (!e) {
				return ""
			}
			var t = e.fields;
			var a = t.quantity;
			var r = '<div class="tc-amount" id="' + n.uuid(e) + '">';
			if (t.editable) {
				r += '<span data-mm="minus_num" class="minus ' + (t.min === a ? "minus-off" : "") + '" data-clk="buy-order/mod/quantity:minus" ></span>';
				r += '<input type="text" class="tc-text amount" value="' + a + '" />';
				r += '<span data-mm="add_num" class="plus ' + (t.max <= a ? "plus-off" : "") + '" data-clk="buy-order/mod/quantity:plus" ></span>'
			} else {
				r += a
			}
			return r + "</div>"
		},
		plus: function(e) {
			if (t.hasClass(e, "plus-off")) {
				return
			}
			d(r.getRootEl(e, "tc-amount"), 1);
			r.record("tmalljy.2.6?action=add_num")
		},
		minus: function(e) {
			if (t.hasClass(e, "minus-off")) {
				return
			}
			d(r.getRootEl(e, "tc-amount"), -1);
			r.record("tmalljy.2.6?action=minus_num")
		},
		destory: function() {
			s(c)
		},
		load: function(e, t, a) {}
	};

	function s(a) {
		e.each(t.query("div.tc-amount", "#A_orders"), a)
	}

	function o(n) {
		var r;
		a.on(t.get("input", n), "valuechange", function() {
			if (r) {
				r.cancel()
			}
			r = e.later(function() {
				d(n, 0)
			}, 100)
		});
		d(n, 0)
	}

	function c(e) {
		a.detach(t.get("input", e))
	}

	function d(a, r) {
		var i = t.get("input", a);
		if (!i) {
			return
		}
		n.fromEl(a, function(s) {
			var o = s.fields;
			var c = o.quantity;
			var d = e.trim(i.value);
			if (d.match(/^[1-9]\d*$/)) {
				d = d - 0 + r
			} else {
				d = c
			}
			l(a);
			var f = o.max;
			var v = o.min;
			if (f <= d) {
				u(a, "\u6700\u591a\u53ea\u80fd\u8d2d\u4e70" + f + "\u4ef6");
				d = f
			} else if (v > d) {
				u(a, "\u6700\u5c11\u5fc5\u987b\u8d2d\u4e70" + f + "\u4ef6");
				d = v
			}
			t[v === d ? "addClass" : "removeClass"](t.get("span.minus", a), "minus-off");
			t[f <= d ? "addClass" : "removeClass"](t.get("span.plus", a), "plus-off");
			if (c !== d) {
				s.fields.quantity = d;
				n.async(s, function(e) {
					if (e) {
						i.value = d
					} else {
						s.fields.quantity = c
					}
				})
			} else {
				i.value = d
			}
		})
	}

	function u(e, a, n) {
		t.append(t.create('<div class="hint"></div>', {
			html: '<em class="' + (n || "err") + '">' + a + "</em>"
		}), e)
	}

	function l(e) {
		t.remove(t.query("div.hint", e))
	}
	return i
}, {
	requires: ["dom", "event", "buy-order/data", "buy-order/util"]
});
KISSY.add("buy-order/mod/stepbar", function(e, t) {
	var a = {
		name: "stepbar",
		init: function() {},
		toHtml: function(t) {
			if (!t) {
				return ""
			}
			var a = t.fields;
			var n = a.current;
			var r = a.options;
			var i = r.length;
			var s = '<ol class="flowstep-' + i + '">';
			e.each(r, function(e, t) {
				var a = t <= n;
				t = t + 1;
				if (1 === t) {
					s += '<li class="step-first">'
				} else if (i === t) {
					s += '<li class="step-last">'
				} else {
					s += "<li>"
				} if (a) {
					t = "";
					s += '<div class="step-done">'
				}
				s += '<div class="step-name">' + e + '</div><div class="step-no">' + t + "</div>";
				if (a) {
					s += "</div>"
				}
				s += "</li>"
			});
			return s + "</ol>"
		},
		destory: function() {},
		load: function(e, a, n) {
			if ("update" === a) {
				t.html("#A_Stepbar", this.toHtml(e))
			}
		}
	};
	return a
}, {
	requires: ["dom"]
});
KISSY.use("buy-order/app, buy-order/util", function(e, t, a) {
	var n = document.domain;
	document.domain = n.substr(n.indexOf(".tmall.") + 1);
	var r = a.isDaily ? "assets.daily.taobao.net" : "tbcdn.cn";
	e.config({
		combine: !a.isDaily,
		modules: {
			"tbc/address/0.2.7/index": {
				tag: "",
				charset: "utf-8",
				fullpath: "http://g." + r + "/tbc/address/0.2.7/index-min.js"
			}
		}
	});
	t.init(window.orderData);
	e.use("buy-base/util/jstracker", function(e, t) {
		t.init()
	});
	if (window && window.Velocity) {
		var i = window.Velocity;
		i.config({
			id: "tm/buy-order",
			ver: "1.0.12",
			sampling: 500
		});
		i.timing();
		i.resourceTiming();
		i.memory()
	}
	KISSY.use("mui/msg/msg-hd.css")
});