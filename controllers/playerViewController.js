
function showAll(req, res) {
    res.render('players');
}

function updatePlayer(req, res) {
    res.render('updatePlayer');
}

module.exports = {
    showAll,
    updatePlayer
}