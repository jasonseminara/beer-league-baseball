const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser'); 
const path = require('path');

const teamRoutes = require('./routes/teamRouter');
const teamViews = require('./controllers/teamViewController');

const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', teamRoutes);

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});