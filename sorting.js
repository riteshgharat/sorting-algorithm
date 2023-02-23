function buggySort(arr) {
  var len = arr.length;
  for (var i = len - 1; i >= 0; i--) {
    for (var j = 1; j <= i; j++) {
      if (arr[j-1] > arr[j]) {
        var temp = arr[j-1];
        arr[j-1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

// Example usage
var arr = [5, 2, 1, 3, 6];
console.log(buggySort(arr)); // [1, 2, 3, 5, 6]
