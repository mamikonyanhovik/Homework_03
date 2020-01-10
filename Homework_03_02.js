/////miayn erknish tveri hamar e 

function evenNumbers(num1, num2) {

    for (var i = 0; i<=num2; i++) {
      if (num1<=i && i%2==0 && ((i-(i%10))/10)%2==0) {
          console.log(i);
      }
    }
}


evenNumbers(19,42)

///// porcer voronq chen stacvel

function evenNumbers(num1, num2) {

for (var i = 0; i<=num2; i++) {
  if (num1<=i && i%2==0) {
var exist = false;
    var newDigit = i%10;
    var newNum = (i-newDigit)/10;
    var str = "" + newNum;
    var length = str.length;
            for (var f=0; f<=length; f++) {
                  if ((newNum%10)%2===0) {
                   exist = false;
                    break;
                            }
                  var newDigit2 = newNum%10;
                  newNum = (newNum-newDigit2)/10;
                 console.log(i);
            }
            }
  }
}

evenNumbers(189,212)

//////2rd porc@ vor evs chi stacvel

function evenNumbers(num1, num2) {
  
  for (var i = 0; i<=num2; i++) {
      if (num1<=i && i%2===0) {
          var str = i + "";
          var length = str.length;
          var newDigit= i%10;
          var newNum = i;
    
          for (var g=0; g<length; g++) {
            if (newDigit !== 0) {
              break;
            } else {
              console.log(i);
            }
             
            
          }
        newNum = (newNum-newDigit)/10;
            newDigit = newNum%10;
        
      }
  }
}

evenNumbers(189,212)