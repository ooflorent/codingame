var data = readline().split(' ');

var light = {x: +data[0], y: +data[1]};
var thor  = {x: +data[2], y: +data[3]};

do {
  var output = '';

  if (thor.y < light.y) {
    thor.y++;
    output += 'S';
  } else if (thor.y > light.y) {
    thor.y--;
    output += 'N';
  }

  if (thor.x < light.x) {
    thor.x++;
    output += 'E';
  } else if (thor.x > light.x) {
    thor.x--;
    output += 'W';
  }

  print(output);
} while (readline());
