const controller = require('./controller');

var Koa = require('koa');

var app = new Koa();

app.use(controller());

app.listen(3000);