
function showAll(req, res) {
  res.render('allTeams');
}

function updateTeam(req, res) {
  res.render('updateTeam');
}

function createTeam(req, res) {
  res.render('createTeam');
}

module.exports = {
  showAll,
  updateTeam,
  createTeam,
};
