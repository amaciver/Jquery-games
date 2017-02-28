class View {
  constructor(game, $el) {
    this.display = $el;
    this.game = game;
    this.setupBoard();
  }

  bindEvents() {

  }

  makeMove($square) {}

  setupBoard() {
    let grid = $('<ul></ul>');

    for(let i = 0;i < 9;i++){
      grid.append($(`<li pos=${Math.floor(i/3)}${i%3}></li>`));
    }

    grid.css('width', 300)
        .css('list-style-type', "none")
        .css("background-color", 'green');

    const view = this;

    grid.children('li').each( function() {
      $(this).css('float', 'left')
             .css('display', 'flex')
             .css('align-items', 'center')
             .css('justify-content','center')
             .css('width', 80)
             .css('border', 5)
             .css('border-style', 'solid')
             .css('border-color', 'black')
             .css('height', 80)
             .css('background-color', 'gray')
             .css('font-size', 42)
             .attr('clicked', false)
             .attr('default-color', 'gray')
             .on("click", () => view.squareClickHandler($(this)))
             .hover(() => $(this).css('background-color', 'yellow')
                    ,() => $(this).css('background-color', $(this).attr('default-color')));
    });
    this.display.append(grid);
  }

  squareClickHandler ($el) {
    // console.log($el.attr('clicked'));
    if($el.attr('clicked') === 'true'){
      $el.attr('clicked', 'false');
    } else {
      this.game.playMove(Array.from($el.attr('pos')));
      $el.attr('clicked', 'true');
      $el.text(this.game.currentPlayer);
      if (this.game.currentPlayer === "X") {
        $el.css('color', 'red');
      } else {
        $el.css('color', 'blue');
      }
      $el.attr('default-color', 'white');
      if(this.game.isOver() === true){
        setTimeout(() => alert(`${this.game.winner()} wins!`), 1000);
      }
    }
  }

}


module.exports = View;
