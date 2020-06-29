const express = require('express');
const app = express();
const path = require('path');
const { title } = require('process');

//settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//routes
app.use(require('./routes/index'));

app.listen(app.get('port'), () => {
})

//static files
app.use(express.static(path.join(__dirname, '/public')));