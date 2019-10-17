var mongo = require('mongodb');

var connMongoDB = function(){
    var db = new mongo.Db(
        'got',
        new mongo.Server(
            'localhost',
            27017,
            {}
        ),
        {}
    );
    return db;
}
console.log('banco pronto')

module.exports = function(){
    return connMongoDB
    
}