module.exports = function getZerosCount(number, base) {
    var baseArray = [], n = 2, z = 0;
    while ((n <= base) || (n <= base)) { 
        if (base % n === 0) {
            baseArray = base;
            base = Math.round(base / n);
        } else {
            n++}
    }
    for (var i = 1; i < 12; i++) { 
        var numbers;
        numbers = Math.floor(number / Math.pow(baseArray, i));
        z += numbers;} 
return z;
}
