const Board = require('./board.js');

class View {
  constructor($display) {
    this.$display = $display;
    this.board = new Board();
    $(window).on('keydown', (e) => this.handleKeyEvent(e));
    setInterval(() => this.step(), 500);
  }

  handleKeyEvent(e) {
    if (e.keyCode === 87) {
      this.board.snake.direction = 'N';
    }
    //key 'd' --> east
    if (e.keyCode === 68) {
      this.board.snake.direction = 'E';
    }
    //key 's' --> south
    if (e.keyCode === 83) {
      this.board.snake.direction = 'S';
    }
    //key 'a' --> west
    if (e.keyCode === 65) {
      this.board.snake.direction = 'W';
    }
    console.log(this.board.snake.direction);
  }

  step() {
    $('ul').remove();
    this.board.snake.move();
    this.draw();
  }

  draw() {
    let $ul = $("<ul class='board'></ul>");
    this.board.snake.segments.forEach((segment) => {
      let $li = $('<li class="segment"></li>');
      $ul.append($li);
      $li.position(segment.pos[0], segment.pos[1]);
    });
    this.$display.append($ul);
  }
}

module.exports = View;
