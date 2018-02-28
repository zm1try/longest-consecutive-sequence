module.exports = function longestConsecutiveLength(array) {
  var iStart;
  var value;
  var count = 1;
  var maxCount = 1;
  var arr = array.sort(function(a, b) {
    return a - b;
  });

  if (arr.length < 1) return 0;

  for(let i = 0; i < arr.length; i++) {
    if (arr[i+1]-arr[i] == 1) {
      count ++;
      if (count > maxCount) maxCount = count;
    }
    else {
      count = 1;
    }
  }
  return maxCount;
}

// module.exports = function longestConsecutiveLength(array) {
//   var iStart;
//   var value;
//   var count = 0;
//   var maxCount = 1;

//   if (array.length < 1) return 0;

//   for(let i = 0; i < array.length;) {
//     if(count == 0) {
//       iStart = i;
//       value = array[i];
//       i = 0;
//       count = 1;
//     }
//     if (array[i] - value == count) {
//       count = count + 1;
//       if (maxCount < count) maxCount = count;
//       else i = 0;
//       continue;
//     }
//     else {
//       if (i == array.length - 1 && iStart != array.length - 1) {
//         count = 0;
//         i = iStart + 1;
//       }
//       else i = i + 1;
//     }
//   }
//   return maxCount;
// }
