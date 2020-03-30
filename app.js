var express = require('express');
var path = require('path');
var app = express();
var bodyParser=require("body-parser");
var  sequelize=require('./utils/database');
const model = require('./model/main');
const router = require('./route/router');
const main = require('./controller/main');


const PORT = process.env.PORT || 8010;
app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
 app.listen(PORT, function () {
  console.log('Node.js server is running on port ' + PORT);
});


app.use('/',router);

sequelize
.sync();

app.listen(8080)