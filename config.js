
var switchy = require('./rule/rule.switchy.js');
var tbbuy = require('./rule/rule.taobao.buy.js');
var tmbuy = require('./rule/rule.tmall.buy.js');
var tbcart = require('./rule/rule.taobao.cart.js');
var tmbuyM = require('./rule/rule.tmall.buy-m.js');
var demo = require('./rule/rule.demo.js');

module.exports = [].concat(switchy, tbbuy, tmbuy, tmbuyM, tbcart, demo);
