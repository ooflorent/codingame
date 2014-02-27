var horses = [];
var power = Infinity;

var n = +readline();

for (var i = 0; i < n; i++) {
  horses.push(+readline());
}

horses.sort();

for (var i = 1; i < n; i++) {
  var p = Math.abs(horses[i - 1] - horses[i]);
  if (p < power) {
    power = p;
  }
}

print(power);
