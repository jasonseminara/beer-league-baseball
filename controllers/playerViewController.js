
function showAll(req, res) {
  res.render('players', { name: req.query.team, id: req.params.id });
}

function updatePlayer(req, res) {
  res.render('updatePlayer');
}

function createPlayer(req, res) {
  res.render('createPlayer', { id: req.params.id, name: req.params.name });
}

function handleCreateRedirect(req, res) {
  res.redirect(res.locals.redirect);
}

function handleUpdateRedirect(req, res) {
  res.redirect(res.locals.redirect);
}

function handleDeleteRedirect(req, res) {
  res.redirect(res.locals.redirect);
}

module.exports = {
  showAll,
  updatePlayer,
  createPlayer,
  handleCreateRedirect,
  handleUpdateRedirect,
  handleDeleteRedirect,
};
