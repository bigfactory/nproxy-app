
var async = require('async');

exports.mix = function(){
    var steps = [].slice.apply(arguments);
    return function(pattern, options, req, res, next){
        async.parallel(steps, function(err, result){
            if(err){
                res.status(500).end();
                return;
            }
            res.type('js');
            res.send(result.join(''));
        });
    };
};

exports.route = function(name){
    var args = [].slice.apply(arguments);
    args.shift();
    return function(callback){
        var runArgs = [callback];
        for(var i = 0, len =args.length; i < len; i++){
            runArgs.push(args[i]);
        }
        require('./step/'+name).apply(this, runArgs);
    };
};