/*! address/0.2.7 2014-04-02 10:56:27 */
KISSY.add("tbc/address/0.2.7/index", function(a, b, c, e) {
	var f = function(b) {
		return this instanceof f ? (b = b || {}, this._elSelects = b.elSelects, this._focus = b.focus, this._town = b.town, this._oversea = a.isUndefined(b.oversea) ? !0 : !!b.oversea, this._overseaPy = !!b.overseaPy, this._daily = a.isUndefined(b.daily) ? !window.location.hostname || !!~window.location.hostname.indexOf(".daily.") : !!b.daily, this._includeOther = !!b.includeOther, this._source = b.source, this._sourceName = b.sourceName, this._filter = a.isFunction(b.filter) ? b.filter : null, this._available = !0, this.DATA = {
			_data: null,
			data: {},
			dataP: null,
			prevValue: null
		}, this._init(), void 0) : new f(b)
	};
	return a.augment(f, e.Target, {
		_init: function() {
			if (!a.isObject(this._elSelects) || a.isEmptyObject(this._elSelects)) return this._available = !1, void 0;
			var b = this;
			this._initSelects(), this.render({
				source: this._source,
				sourceName: this._sourceName,
				callback: function() {
					b.DATA.prevValue = b.val()
				}
			});
			try {
				(new Image).src = "http://gm.mmstat.com/member.6.4"
			} catch (c) {}
		},
		render: function(a) {
			var b = this;
			return a = a || {}, this._getData({
				source: a.source,
				sourceName: a.sourceName,
				callback: function() {
					b._render(!0, a.callback), b.fire("render")
				}
			}), this
		},
		focus: function(b, c, d) {
			return this._available && a.isObject(b) ? (this._focus = b, this._town = c, this._render(!1, d), this) : this
		},
		val: function(a) {
			var b = this._elSelects.province,
				c = this._elSelects.country,
				d = this._elSelects.provinceExt,
				e = this._elSelects.city,
				f = this._elSelects.area,
				g = this._elSelects.town,
				h = {};
			return b && b.attr("data-available") && (h.province = a ? b.val() && {
				key: "province",
				value: b.val(),
				text: b[0].options[b[0].selectedIndex].text
			} || null : b.val()), c && c.attr("data-available") && (h.country = a ? c.val() && {
				key: "country",
				value: c.val(),
				text: c[0].options[c[0].selectedIndex].text
			} || null : c.val()), d && d.attr("data-available") && (h.provinceExt = a ? d.val() && {
				key: "provinceExt",
				value: d.val(),
				text: d[0].options[d[0].selectedIndex].text
			} || null : d.val()), e && e.attr("data-available") && (h.city = a ? e.val() && {
				key: "city",
				value: e.val(),
				text: e[0].options[e[0].selectedIndex].text
			} || null : e.val()), f && f.attr("data-available") && (h.area = a ? f.val() && {
				key: "area",
				value: f.val(),
				text: f[0].options[f[0].selectedIndex].text
			} || null : f.val()), g && g.attr("data-available") && (h.town = a ? g.val() && {
				key: "town",
				value: g.val(),
				text: g[0].options[g[0].selectedIndex].text
			} || null : g.val()), h
		},
		endVal: function(a) {
			var b = this.val(a);
			return b.town || b.area || b.city || city.provinceExt || city.country || city.province
		},
		destroy: function() {
			this.detach("change");
			var b = this;
			a.each(this._elSelects, function(c) {
				c = a.one(c), c && c.detach("change", b._changeSelect)
			}), a.each(this, function(a, c) {
				delete b[c]
			})
		},
		_render: function(a, b) {
			this.FOCUSPATH = this._getPath(this._getNode(this._focus)), a = a && !this.FOCUSPATH.province, this._renderSelect({
				key: "province",
				data: a ? [{
					id: "",
					value: ["\u8bf7\u9009\u62e9\u7701\u5e02/\u5176\u4ed6..."]
				}].concat(this.DATA.dataP) : this.DATA.dataP,
				placeholder: !!a,
				callback: b
			})
		},
		_getNode: function(b, c) {
			if (b = b || {}, c = c || this.DATA._data, c && (b.text || b.pingyin || b.id)) {
				"990100" === b.id && (b.id = "990000");
				for (var d in c)
					if (b.id === d || !a.isUndefined(c[d][2]) && b.pingyin === c[d][2] || !a.isUndefined(c[d][0]) && b.text === c[d][0]) return {
						id: d,
						value: c[d]
					}
			}
		},
		_getNodes: function(b, c) {
			b = a.isFunction(b) ? b : function() {
				return !0
			};
			var e = [],
				f = this;
			return d = c ? this.DATA._data : this.DATA.data, a.each(d, function(a, c) {
				var d = {
					id: c,
					value: a
				};
				b(d) && (f._includeOther || "\u5176\u5b83\u533a" !== a[0]) && e.push(d)
			}), e
		},
		_initSelects: function() {
			var b = this;
			a.each(this._elSelects, function(c, d) {
				c = a.one(c), c && (c && c.attr("data-key", d), b._elSelects[d] = c, "town" === d && c.hide(), c.on("change", b._changeSelect, b))
			})
		},
		_changeSelect: function(b) {
			var c = a.one(b.currentTarget),
				d = c.attr("data-key"),
				e = "area" !== d ? this._getNodes(function(a) {
					return a.value[1] === c.val()
				}) : null;
			return c[0].options[0] && "" === c[0].options[0].value && c[0].remove(0), this._isOverSea(), e && e.length ? (this._renderSelect({
				key: this._getChildKey(c.attr("data-key"), "990000" === c.val()),
				data: e
			}), void 0) : (this._hideSelects(c.attr("data-key"), "990000" === c.val()), "town" !== d ? this._renderTown() : this._fireChange(), void 0)
		},
		_getPath: function(a) {
			function b(a) {
				if (a) {
					d.unshift(a);
					var e = c._getNode({
						id: a.value[1]
					});
					e && "0" !== e.value[1] && b(e)
				}
			}
			var c = this,
				d = [],
				e = {};
			return b(a), d.length ? (e.province = d[0], "990000" === e.province.id ? (e.country = d[1], e.provinceExt = d[2], e.city = d[3], e.area = d[4]) : (e.city = d[1], e.area = d[2]), e) : e
		},
		_renderSelect: function(b) {
			var c, d = this._elSelects[b.key],
				e = this.FOCUSPATH[b.key],
				f = b.placeholder,
				g = b.data,
				h = this;
			if (!d || !g || !g.length) return this._hideSelects(b.key), void 0;
			e && g[0].value[1] !== e.value[1] && (e = null), this._hideSelect(b.key);
			var i, j = !1;
			if (e && "\u5176\u5b83\u533a" === e.value[0] && (j = f = !0, i = new Option("\u8bf7\u9009\u62e9\u533a/\u53bf...", ""), i.selected = j, d[0].add(i)), a.each(g, function(a, g) {
				var k = !1;
				e ? k = e && e.id === a.id ? !0 : !1 : 0 === g && (k = !0), i = new Option(("province" !== b.key && h.isOverSea && h._overseaPy && a.value[2] ? a.value[2] + "/" : "") + a.value[0], a.id), i.selected = k && !j, d[0].add(i), i.selected && (h._isOverSea(), c = f ? [{
					id: "",
					value: ["province" === b.key ? "\u8bf7\u9009\u62e9\u57ce\u5e02..." : "city" === b.key ? "\u8bf7\u9009\u62e9\u533a/\u53bf..." : "\u8bf7\u9009\u62e9..."]
				}] : "990000" !== d.val() || h.FOCUSPATH.country ? h._getNodes(function(b) {
					return b.value[1] === a.id
				}) : [{
					id: "",
					value: ["\u8bf7\u9009\u62e9\u56fd\u5bb6/\u5730\u533a..."]
				}].concat(h._getNodes(function(a) {
					return "990000" === a.value[1]
				})))
			}), this._elSelects.province && "990000" !== this._elSelects.province.val() && (this._hideSelect("country"), this._hideSelect("provinceExt")), d.css({
				display: "",
				visibility: ""
			}), d.attr("data-available", "true"), c && c.length) {
				if ("town" === b.key) return b.callback && b.callback(), void 0;
				this._renderSelect({
					key: this._getChildKey(b.key, "990000" === d.val()),
					data: c,
					placeholder: f,
					callback: b.callback
				})
			} else this._hideSelects(b.key), this._renderTown({
				callback: b.callback
			})
		},
		_renderTown: function(b) {
			var c = this,
				d = c._elSelects.town,
				b = b || {},
				e = this.val();
			return d && "" !== e.area && "" !== e.city && "" !== e.province ? (this._hideSelect("town", !0), this._getTown(function(e) {
				if (e.success) {
					var f = c._getNode(c._town, e.data),
						g = !1;
					if (d.css({
						display: "",
						visibility: ""
					}), d.attr("data-available", "true"), a.each(e.data, function(a, b) {
						var c = new Option(a[0], b);
						f && f.id === b && (c.selected = !0, g = !0), d[0].add(c)
					}), d[0].add(new Option("\u6211\u4e0d\u77e5\u9053...", "")), !g) {
						var h = new Option("\u8bf7\u9009\u62e9...", "");
						h.selected = !0;
						try {
							d[0].add(h, d[0].options[d[0].selectedIndex])
						} catch (i) {
							d[0].add(h, 0)
						}
					}
				} else c._hideSelect("town");
				b.callback && b.callback(), c._fireChange()
			}), void 0) : (b.callback && b.callback(), void 0)
		},
		_hideSelects: function(a, b) {
			var c, d = this._getChildKey(a, b),
				e = this.DATA.prevValue;
			return "province" === a && e && "990000" === e.province && !b ? (this._hideSelect("country"), this._hideSelects("country"), void 0) : ((c = this._elSelects[d]) && (this._hideSelect(d), this._hideSelects(d, b)), void 0)
		},
		_hideSelect: function(b, c) {
			var d = this._elSelects[b];
			if (d)
				if (c || (d.hide(), d.attr("data-available", "")), 6 === a.UA.ie)
					for (; d[0].options.length;) d[0].remove(d[0].options.length - 1);
				else d.html("")
		},
		_isOverSea: function() {
			var a = this._elSelects.province;
			this.isOverSea = "990000" === a.val() ? !0 : !1
		},
		_getChildKey: function(a, b) {
			var c;
			switch (a) {
				case "province":
					c = b ? "country" : "city";
					break;
				case "provinceExt":
					c = "city";
					break;
				case "country":
					c = "provinceExt";
					break;
				case "city":
					c = "area";
					break;
				case "area":
					c = "town"
			}
			return c
		},
		_fireChange: function() {
			var b = this.val(),
				c = this.DATA.prevValue;
			c && a.param(c) !== a.param(b) && this.fire("change"), this.DATA.prevValue = b
		},
		_filterData: function(a, b) {
			if (a && b && !this.DATA.data[a]) {
				if (this.DATA.data[a] = b, this.DATA.data[b[1]]) return;
				var c = this._getNode({
					id: b[1]
				});
				c && this._filterData(c.id, c.value)
			}
		},
		_getData: function(b) {
			b = b || {};
			var c = this,
				d = b.source || "http://" + (this._daily ? "g.assets.daily.taobao.net/tb/address" : "g.tbcdn.cn/tb/address") + "/0.2.2/tdist_py.js",
				e = b.callback || function() {},
				f = b.sourceName || "tdist_all";
			this.DATA.data = {}, a.getScript(d, {
				charset: "gbk",
				success: function() {
					a.isPlainObject(window[f]) && !a.isEmptyObject(window[f]) && (c.DATA._data = window[f], a.each(c.DATA._data, function(a, b) {
						return a[1] = "0" === a[1] && "1" !== b ? "990000" : a[1], "990100" === b ? (delete c.DATA._data[b], void 0) : (c._filter ? c._filter({
							id: b,
							value: a
						}) && c._filterData(b, a) : c._filterData(b, a), void 0)
					}), c.DATA.dataP = c._getNodes(function(a) {
						return "1" === a.value[1] && (c._oversea ? 1 : "990000" !== a.id)
					})), e()
				}
			})
		},
		_param: function() {
			var b = this.val(),
				c = {};
			return a.each(b, function(a, b) {
				switch (b) {
					case "province":
						c.l1 = a;
						break;
					case "city":
						c.l2 = a;
						break;
					case "area":
						c.l3 = a
				}
			}), c
		},
		_getTown: function(b) {
			var c = this._daily ? "http://lsp.wuliu.taobao.net" : "http://lsp.wuliu.taobao.com";
			a.IO({
				url: c + "/locationservice/addr/output_address_town.do",
				dataType: "jsonp",
				data: this._param(),
				timeout: 1,
				scriptCharset: "utf-8",
				complete: function(a) {
					return a && a.success && a.result ? (b({
						success: !0,
						data: a.result
					}), void 0) : (b({
						success: !1
					}), void 0)
				}
			})
		}
	}), f
}, {
	requires: ["node", "dom", "event", "ajax", "ua"]
});