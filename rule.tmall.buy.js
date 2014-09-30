
var proxy = require('./lib');

module.exports = [
	{
		pattern : 'http://g.assets.daily.taobao.net/??tm/buy-base/1.3.3/seed.js,tm/buy/1.1.1/seed.js,tm/buy/1.1.1/mio.js',
		responder : proxy.mix(
			proxy.route('kissy', {
				packages: [{
					'name': 'mt',
					'path': '/gitlab/tb/buy/mt',
					'charset': 'gbk'
				}],
				input: '/gitlab/tb/buy/mt/index.js'
			})
/*
			proxy.route('fetch', 'http://g.assets.daily.taobao.net/??tm/buy-base/1.3.3/seed.js'),
			proxy.route('local', '/gitlab/tm/buy/src/seed.js'),
			proxy.route('concat', {
				base : '/gitlab/tm/buy/src/',
				files : [
					'app',
					'data',
					'util',
					'mod/address',
					'mod/agencyPay',
					'mod/anonymous',
					'mod/coupon',
					'mod/go',
					'mod/installment',
					'mod/insure',
					'mod/invoice',
					'mod/memo',
					'mod/misc',
					'mod/point',
					'mod/postage',
					'mod/promotion',
					'mod/quantity',
					'mod/stepbar',
					//'mod/page',
					'init'
				]
			})*/
		)
	},




	{
		pattern : 'http://g.tbcdn.cn/tm/buy/1.1.1/',
		responder : 'local',
		options : {
			file : '/gitlab/tm/buy/src/'
		}
	}
];