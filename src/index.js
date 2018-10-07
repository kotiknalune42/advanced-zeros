module.exports =function gettrailingZeros(number, base) {
  let initBase = base, trailingZeros = number;

  for (let i = 2; i <= initBase; i++){

    if (initBase % i == 0){
      let count = 0;

      while (initBase % i == 0){
        count++;
        initBase = Math.floor(initBase / i);
      }

      let tempNumber = number;
      let power = 0;

      while (tempNumber / i  > 0){ 

        tempNumber = Math.floor(tempNumber / i);
        power += tempNumber;
      }
      
      trailingZeros = Math.min(trailingZeros, Math.floor(power / count));
    }
  }
  return trailingZeros;
}

