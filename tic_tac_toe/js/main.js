const View = require('./ttt-view');
const Game = require('../lib/game');

$( () => {
  const g = new Game();
  const v = new View(g, $('figure.ttt'));

});
