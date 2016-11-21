'use strict';

const Hapi = require('hapi');
const app = new Hapi.Server();
app.connection({ host: '127.0.0.1', port: 3000 });

app.route([
    {
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
           reply("Start yapustoi.ru!");
        }
    }]);

app.register(require('./lib/users'), function(err){

    if (err) {
        console.log('Error:', err);
        throw err;
    }
    app.start(function(err){
        if (err) {
            throw err;
        }
        console.log('Server running at:', app.info.uri);
    });
});


