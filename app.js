let express = require('express');
let app = express();
const path = require('path');

const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, '/build2')));

app.get('/', function (req, res) {
  res.render('index2.html');
});

app.listen(port, () => console.log('Server running on port ' + port));