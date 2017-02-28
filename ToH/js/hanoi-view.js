class View {
  constructor(game, dom) {
    this.game = game;
    this.dom = dom;
    this.setupTowers();
    this.render();

    let towers = $('li');
    for (var i = 0; i < towers.length; i++) {
      $(towers[i]).click(this.clickTower(i));
    }
  }

  setupTowers() {
    $(this.dom).append('<ul><li>""</li><li>""</li><li>""</li></ul>');
  }

  render() {
    let towers = $('li');

    for (var i = 0; i < towers.length; i++) {
      $(towers[i]).text(`${this.game.towers[i]}`);
    }
    if (this.game.isWon() === true) {
      setTimeout(() => alert("Try a harder game."), 500);
    }
  }

  clickTower(tower) {

    return () => {
      if(this.fromTower !== undefined){
        this.toTower = tower;
        if(this.game.isValidMove(this.fromTower, this.toTower)){
          this.game.move(this.fromTower, this.toTower);
        } else {
          alert("Invlaid Move!");
        }
        this.fromTower = undefined;
        this.toTower = undefined;
        this.render();
      } else {
        this.fromTower = tower;
      }
    };
  }
}

module.exports = View;
