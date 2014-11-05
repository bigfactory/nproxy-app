var path = require('path');

module.exports = [
   

    {
        pattern : 'http://g.assets.daily.taobao.net/tb/cart/4.40.0/3.0/cart/',
        responder : function(pattern, options, req, res, next){

            var filename = req.url.replace(pattern, '');
            if(filename.indexOf('-min') != -1){
                filename = filename.replace('-min', '');
            }

            res.sendFile(path.join(options.base, filename));
        },
        options : {
            base: '/gitlab/tb/cart/3.0/cart/'
        }
    }
];

