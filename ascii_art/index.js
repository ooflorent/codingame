var w = readline();
var h = readline();
var text = readline();

for (var i = 0; i < h; i++) {
  var line = readline();
  var out = '';

  for (var j = 0; j < text.length; j++) {
    var c = text[j].charCodeAt(0);
    if (c >= 65 && c <= 90) {
      c -= 65;
    } else if (c >= 97 && c <= 122) {
      c -= 97;
    } else {
      c = 26;
    }

    out += line.substr(c * w, w);
  }

  print(out);
}
