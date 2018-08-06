
function showAll(req, res) {
  res.render('allTeams');
}

function updateTeam(req, res) {
  res.render('updateTeam');
}

function createTeam(req, res) {
  res.render('createTeam');
}

function handleRedirect(req, res) {
  res.redirect('/teams');
}

module.exports = {
  showAll,
  updateTeam,
  createTeam,
  handleRedirect,
};
