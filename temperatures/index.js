var n = +readline();
var t = readline();

if (n) {
  t = t.split(' ');
  t.sort(function(a, b) {
    a = parseInt(a);
    b = parseInt(b);

    if (Math.abs(a) === Math.abs(b)) {
      return a > b ? a : b;
    } else {
      return Math.abs(a) - Math.abs(b);
    }
  });
  print(t[0]);
} else {
  print(0);
}
