const Coord = require('./coord');

class Snake {
  constructor() {
    this.direction = "N";
    this.segments = [new Coord([100,200], "N"), new Coord([105,200], "N"), new Coord([110,200], "N")];
  }

  move() {
    let evendir;
    let odddir;
    for (var i = 0; i < this.segments.length; i++) {
      if (i === 0) {
        evendir = this.segments[0].dir;
        // console.log(this.segments[0].dir);
        this.segments[0].plus(this.direction);
      } else if (i%2 === 1){
        // console.log(evendir);
        // console.log(odddir);
        odddir = this.segments[i].dir;
        this.segments[i].plus(evendir);
      } else {
        evendir = this.segments[i].dir;
        this.segments[i].plus(odddir);

      }
    }
    this.segments.forEach ((seg) => {
        // console.log(seg.pos);
        seg = seg.plus(this.direction);
    });
  }

  turn(dir) {
    this.direction = dir;
  }
}

module.exports = Snake;
