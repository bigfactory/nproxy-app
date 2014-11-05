
var zlib = require('zlib');
var fs = require('fs');
var stream = require('stream');
var request = require('request');
var iconv = require('iconv-lite');
var cheerio = require('cheerio');


var TPL_FILE = '/proxy/file/order.html'

module.exports = [
    {
        pattern : 'http://buy.daily.taobao.net/auction/order/confirm_order.htm',
        responder : function(pattern, options, req, res, next){
            var gzipStream = zlib.createGunzip();
            var fileStream = fs.createWriteStream('/tmp/qq.html');
            var requestPipe = request(pattern);
            

            fileStream.on('finish', function(){
                var $, data, tpl, content;

                tpl = fs.readFileSync(TPL_FILE, {
                    encoding : 'utf-8'
                });
                
                content = fs.readFileSync('/tmp/qq.html');
                content = iconv.decode(content, 'gbk');
                $ = cheerio.load(content);
                data = $('.J_Page').next('script').text();
                content = tpl.replace('#OrderData#', data);
                
                res.set('Content-Type', 'text/html;charset=GBK');
                res.send(content);
            });

            req.pipe(requestPipe).pipe(gzipStream).pipe(fileStream);
        }
    }
];