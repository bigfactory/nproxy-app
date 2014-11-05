
var proxy = require('nproxy-plus');

module.exports = [
    {
        pattern : 'http://g.tbcdn.cn/??mui/popbox/1.0.3/index.js,mui/popbox/1.0.3/alert.js,mui/popbox/1.0.3/confirm.js,mui/popbox/1.0.3/toast.js,tm/buy-base-m/1.0.16/seed.js,tm/buy-base-m/1.0.16/util/transition.js,tm/buy-base-m/1.0.16/util/checker.js,tm/buy-m/1.0.12/seed.js,tm/buy-m/1.0.12/mio.js',
        responder : proxy.mix(
            
            proxy.route('fetch', 'http://g.tbcdn.cn/??mui/popbox/1.0.3/index.js,mui/popbox/1.0.3/alert.js,mui/popbox/1.0.3/confirm.js,mui/popbox/1.0.3/toast.js,tm/buy-base-m/1.0.16/seed.js,tm/buy-base-m/1.0.16/util/transition.js,tm/buy-base-m/1.0.16/util/checker.js'),
            proxy.route('local', '/gitlab/tm/buy-m/src/seed.js'),
            proxy.route('local', '/gitlab/tm/buy-m/src/mio.js')
        )
    },


    {
        pattern : '/tm/buy-m/1.0.12/??',
        responder : 'combo',
        options : {
          base: '/gitlab/tm/buy-m/src/'
        }
    },

    {
        pattern : '/tm/buy-m/1.0.12/',
        responder : 'local',
        options : {
            file : '/gitlab/tm/buy-m/src/'
        }
    }
];