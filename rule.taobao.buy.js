

module.exports = [
    {
        pattern : 'http://g.tbcdn.cn/??kissy/k/1.4.6/seed-min.js,tb/global/3.1.5/global-min.js',
        responder : 'local',
        options : {
            file : '/proxy/file/kissy-global.js'
        }
    },

    {
        pattern : 'http://g.assets.daily.taobao.net/tb/buy/2.3.1/mt/??mods-dep-min.js,core-min.js',
        responder : 'kissy-combo',
        options : {
          packages: [{
            'name': 'mt',
            'path': '/gitlab/tb/buy/mt',
            'charset': 'gbk'
          }],
          input: '/gitlab/tb/buy/mt/index.js'
        }
    },

    {
        pattern : 'http://g.assets.daily.taobao.net/tb/buy/2.3.1/mt/',
        responder : 'local',
        options : {
            file : '/gitlab/tb/buy/mt/'
        }
    },
];