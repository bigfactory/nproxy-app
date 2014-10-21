
var proxy = require('nproxy-plus');

module.exports = [
    {
        pattern : 'http://g.assets.daily.taobao.net/??tm/buy-base/1.3.4/seed.js,tm/buy/1.1.3/seed.js,tm/buy/1.1.3/mio.js',
        responder : proxy.mix(
            
            proxy.route('fetch', 'http://g.assets.daily.taobao.net/??tm/buy-base/1.3.4/seed.js'),
            proxy.route('local', '/gitlab/tm/buy/src/seed.js'),
            proxy.route('local', '/gitlab/tm/buy/src/mio.js')
            /*proxy.route('concat', {
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
        pattern : '/tm/buy/1.1.9/??',
        responder : 'combo',
        options : {
          base: '/gitlab/tm/buy/src/'
        }
    },

    {
        pattern : '/tm/buy/1.1.9/',
        responder : 'local',
        options : {
            file : '/gitlab/tm/buy/src/'
        }
    }
];