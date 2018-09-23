module.exports = function getZerosCount(number, base) {
  var zeros = 0;
  while ( 1 <= number <= 10000000 || 2 <= base <= 256) {
    number = Math.floor(number / 5);
    zeros += number
  }
  return zeros;
}
