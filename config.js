
var switchy = require('./rule.switchy.js');
var tbbuy = require('./rule.taobao.buy.js');
var tmbuy = require('./rule.tmall.buy.js');

module.exports = [].concat(switchy, tbbuy, tmbuy);