if (!String.prototype.repeat) {
  String.prototype.repeat = function(times) {
    return new Array(times + 1).join(this);
  };
}

print(readline().split('').map(function(c) {
  var binary = c.charCodeAt(0).toString(2);
  return binary.length === 7 ? binary : ('0'.repeat(7 - binary.length) + binary);
}).join('').replace(/(\d)\1*/g, function(match, digit) {
  return (+digit === 1 ? '0' : '00') + ' ' + '0'.repeat(match.length) + ' ';
}).trim());
