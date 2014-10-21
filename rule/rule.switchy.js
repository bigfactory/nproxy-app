

module.exports = [
    {
        pattern : '/switchy/rulelist',
        responder : function(pattern, options, req, res, next){
            res.sendFile('/proxy/rule/rule.ini');
        }
    }
];
