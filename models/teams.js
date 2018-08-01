const { db } = require('../config/connection');

function teamIndex() {
    return db.many(`
    SELECT * 
    FROM teams
    `);
}

module.exports = {
    teamIndex
};