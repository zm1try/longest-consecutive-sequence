module.exports = function longestConsecutiveLength(array) {
  var count = 1;
  var maxCount = 1;
  var arr = array.sort(function(a, b) {
    return a - b;
  });

  if (arr.length < 1) return 0;

  for(let i = 0; i < arr.length; i++) {
    if (arr[i+1]-arr[i] == 1) {
      count += 1;
      if (count > maxCount) maxCount = count;
    }
    else {
      if (arr[i+1]-arr[i] == 0) continue;
      count = 1;
    }
  }
  return maxCount;
}
