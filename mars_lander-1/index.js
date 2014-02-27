var gravity = 3.711;
var world = [];

for (var n = +readline(); n--;) {
  var data = readline().split(' ');
  world.push({x: +data[0], y: +data[1]});
}

while (1) {
  var data = readline().split(' ');

  var x = +data[0];
  var y = +data[1];
  var dx = +data[2];
  var dy = +data[3];
  var fuel = +data[4];
  var angle = +data[5];
  var power = +data[6];

  if (Math.abs(dy) < 30) {
    print('0 0');
  } else {
    print('0 4');
  }
}
