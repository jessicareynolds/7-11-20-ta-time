// Declared a function called recursiveSumAll that accepts one parameter, a number, stored as num.
// This function is meant for reinforcing recursion based on the facorial algorithm from Thursday 7/9/20.
function recursiveSumAll(num) {

  // Checkts to see if the value in number is equal to 1, if the condition is true it returns 1
  if (num === 1) return 1;

  // Returns the the value of num times the returned value from recursiveSumAll(n - 1)
  return num * recursiveSumAll(num - 1);
}

console.log(recursiveSumAll(5)); // Returns 120

/*  Walkthrough each call of recursiveSumAll(5)

first call recursiveSumAll(5)
    num = 5
    returns '120'
    (We got the return statement above from 5 * recursiveSumAll(4))
      the value returned from recursiveSumAll(4) being 24)

  Second call recursiveSumAll(4)
    numToStr = 2
    returns '24'
    (We got the return statement above from 4 * recursiveSumAll(3))
      the value returned being recursiveSumAll(3) '6')

  Third call recursiveSumAll(3)
    returns '6'
    (We got the return statement above from 3 * recursiveSumAll(2))
      the value returned from recursiveSumAll(eing 2)

  Fourth call recursiveSumAll(2)
    returns '2'
    (We got the return statement above from 2 * recursiveSumAll(1))
      the value returned from recursiveSumAll(1) being 1)

  Fifth call recursiveSumAll(1)
    returns '1'
*/