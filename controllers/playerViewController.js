
function showAll(req, res) {
    debugger
    res.render('players', {name:req.params.team});
}

function updatePlayer(req, res) {
    res.render('updatePlayer');
}

module.exports = {
    showAll,
    updatePlayer
}