function highNumbers(arr) {
  var length = arr.length;
  var digit = 16;
    for (var i = 0; i<length; i++) {
        var newArr= arr.shift();
        var answer = [];
        if (newArr<=digit) {
            continue;
        }
        else if (newArr>digit) {
          answer.push(newArr);
        console.log(answer);
        } 
    }
}

highNumbers([10, 25, 16, -5, 30, 15, 24]);