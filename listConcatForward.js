// Declare a function called listConcat that takes a single parameter that should be an array
// The purpose is to understand recursive functions and the .concat() method
function listConcatForward(numList) {

  // Checks to see if there is at least one item stored in the array variable numList
  // The purpose of this if statement is to define when the program should stop its recursive calls
  if (!numList.length) {

    // The purpose of this return statement is to end this iteration of the function call
    return '';
  };

  // Declares a constant called numToStr to be equal to the value stored in the first position of numList
  const numToStr = numList[0];
  // Takes the value stored in the first position of numList and removes it
  numList.shift();

  /*
    A way we could combine the previous two commands, on lines 14 and 16, is by doing this:
    
    const numToStr = numList.shift()

    Line 21 is saying, remove the first value from numList and store that value into numToStr
  */

  return numToStr.concat(listConcatForward(numList));
}

// Passes an array containing '1', '2', '3' to the function listConcat
// Prints the value returned from listConcat to the console
console.log(listConcatForward(['1', '2', '3']));


/*  Walkthrough each call of listConcatForward()

first call listConcatForward([1,2,3]) numList = [1,2,3]
    numToStr = 1
    numList.shift() => numList = [2, 3]
    returns '123'
    (We got the return statement above from '1'.concat(listConcatForward(['2', '3']))
      the value returned from listConcatForward(['2', '3']) being '23')

  Second call listConcatForward([2,3]) numList = [2,3]
    numToStr = 2
    numList.shift() => numList = [3]
    returns '23'
    (We got the return statement above from '2'.concat(listConcatForward(['3']))
      the value returned being listConcatForward(['3']) '3')

  Third call listConcatForward([3]) numList = [3]
  numList.shift() => numList = []
  returns '3'
  (We got the return statement above from '3'.concat(listConcatForward([]))
    the value returned from listConcatForward([]) being '')

  Fourth call listConcatForward([]) numList = []
    returns ''
*/