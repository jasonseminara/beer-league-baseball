const pgp = require('pg-promise')();
const opts = require('./dbConfig');

const db = pgp(opts);

module.exports = {
    db,
    pgp
};