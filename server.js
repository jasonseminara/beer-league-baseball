const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser'); 

const teamRoutes = require('./routes/teamRouter');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', teamRoutes);

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});