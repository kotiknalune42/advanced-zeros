module.exports = function getZerosCount(number, base) {
    let baseArray = [], 
        minNum = 2, 
        zeroes = 0;
    while (minNum <= base) { 
        if (base % minNum === 0) {
            baseArray = base;
            base = Math.round(base / minNum);
        } else {
            minNum++}
    }
    for (let i = 1; i < 12; i++) { 
        let numbers;
        numbers = Math.floor(number / Math.pow(baseArray, i));
        zeroes += numbers;} 
return zeroes;
}
