
exports.min = function min (array) {
  if (!Array.isArray(array) || array.length == 0) {
    return 0;
  }
  
  var minNumber = array[0];
  
  for (var i = 1; i < array.length; i++) {
      var currentNumber = array[i];
      if (currentNumber < minNumber) {
        minNumber = currentNumber;
      }
  }
  return minNumber;
}

exports.max = function max (array) {
    if (!Array.isArray(array) || array.length == 0) {
        return 0;
      }
      
      var maxNumber = array[0];
      
      for (var i = 1; i < array.length; i++) {
          var currentNumber = array[i];
          if (currentNumber > maxNumber) {
            maxNumber = currentNumber;
          }
      }
      return maxNumber;
}

exports.avg = function avg (array) {
    if (!Array.isArray(array) || array.length == 0) {
        return 0;
      }
      
      var sumNumber = 0;
      
      for (var i = 0; i < array.length; i++) {
          sumNumber += array[i];
    }
      return (sumNumber/array.length);
}
