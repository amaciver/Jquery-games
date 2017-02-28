class Coord {
  constructor (pos, dir){
    this.pos = pos;
    this.dir = dir;
  }

  plus(direction){
    switch(direction) {
      case 'N':
        this.pos[1] -= 5;
        break;
      case 'E':
        this.pos[0] += 5;
        break;
      case 'S':
        this.pos[1] += 5;
        break;
      case 'W':
        this.pos[0] -= 5;
        break;
    }
    this.dir = direction;
  }
}

module.exports = Coord;
