
function showAll(req, res) {
    res.render('players', {name:req.params.team, id:req.params.id});
}

function updatePlayer(req, res) {
    res.render('updatePlayer');
}

function createPlayer(req, res) {
    debugger
    res.render('createPlayer', {id:req.params.id, name:req.params.name});
}

module.exports = {
    showAll,
    updatePlayer,
    createPlayer
}