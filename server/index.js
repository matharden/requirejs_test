var express = require('express')
  , app = express()
  , baseDir   = __dirname + '/../';

app.set('views', baseDir + 'views');
app.set('view engine', 'jade');

app.use(express.logger('dev'));
app.use(express.static(baseDir + 'assets'));

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(8080);

console.log('Server running on http://localhost:8080');