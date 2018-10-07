module.exports = function longestConsecutiveLength(array) {

  if (!array.length) return 0;

  let param = {currentNumber: null, currentLength : 1, maxLength : 1};

  let arrSet = new Set(array);
  
  let countLength = function(arrSet, param) {
    for (let item of arrSet.values()) {
      let nextNumber;
      param.currentNumber = item;
      nextNumber = param.currentNumber + 1;
      while(arrSet.has(nextNumber)) {
        param.currentLength++;
        arrSet.delete(nextNumber);
        nextNumber++;
      }
      let prevNumber;
      prevNumber = param.currentNumber - 1;
      arrSet.delete(item)
      while(arrSet.has(prevNumber)) {
        param.currentLength++;
        arrSet.delete(prevNumber);
        prevNumber--;
      }
      param.maxLength = param.currentLength > param.maxLength ? param.currentLength : param.maxLength;
      param.currentLength = 1;
    }
    return param.maxLength;
  }
  
  return countLength(arrSet, param);
}
