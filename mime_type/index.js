var n = readline();
var q = readline();

var mimeTypes = {};

for (var i = 0; i < n; i++) {
  var data = readline().split(' ');
  mimeTypes[data[0].toLowerCase()] = data[1];
}

for (var i = 0; i < q; i++) {
  var file = readline();
  var match = file.match(/\.(\w+)$/);
  if (match) {
    var ext = match[1].toLowerCase();
    if (mimeTypes[ext]) {
      print(mimeTypes[ext]);
    } else {
      print('UNKNOWN');
    }
  } else {
    print('UNKNOWN');
  }
}
