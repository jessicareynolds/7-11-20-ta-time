// Declare a function called listConcat that takes a single parameter that should be an array
// The purpose is to understand recursive functions and the .concat() method
function listConcatReverse(numList) {

  // Checks to see if there is at least one item stored in the array variable numList
  // The purpose of this if statement is to define when the program should stop its recursive calls
  if (!numList.length) {

    // The purpose of this return statement is to end this iteration of the function call
    return '';
  };

  // Declares a constant called numToStr to be equal to the value stored in the first position of numList
  // What numList[numList - 1] is saying is to take the value in numList at the indexed position of
  // the legnth of numList and subtract one.
  // What that translates to is to take the value at the last position of the array.
  const numToStr = numList[numList.length - 1];
  // Takes the value stored in the last position of numList and removes it
  numList.pop();

  /*
    A way we could combine the previous two commands, on lines 14 and 16, is by doing this:

    const numToStr = numList.pop()

    Line 21 is saying, remove the last value from numList and store that value into numToStr
  */

  return numToStr.concat(listConcatReverse(numList));
  // 1st call of listConcat: numToStr = 3 concatenated to '21' returns '321'
  // 2nd call of listConcat: numToStr = 2 concatenated to '1' returns '21'
  // 3rd call of listConcat: numToStr = 1 concatenated to listConcat([]) returns '1'
  // 4th call of listConcat: return ''

}
// Passes an array containing '1', '2', '3' to the function listConcat
// Prints the value returned from listConcat to the console
console.log(listConcatReverse(['1', '2', '3']));


/*  Walkthrough each call of listConcatReverse()

first call listConcatReverse(['1', '2', '3']) numList = ['1', '2', '3']
    numToStr = '3'
    numList.pop() => numList = ['1', '2']
    returns '321'
    (We got the return statement above from '1'.concat(listConcatReverse(['2', '3']))
      the value returned from listConcatReverse(['2', '3']) being '23')

  Second call listConcatReverse(['1', '1']) numList = ['1', '2']
    numToStr = '2'
    numList.pop() => numList = ['1']
    returns '21'
    (We got the return statement above from '2'.concat(listConcatReverse(['1']))
      the value returned being listConcatReverse(['1']) '1')

  Third call listConcatReverse(['3']) numList = ['3']
  numList.pop() => numList = []
  returns '1'
  (We got the return statement above from '1'.concat(listConcatReverse([]))
    the value returned from listConcatReverse([]) being '')

  Fourth call listConcatReverse([]) numList = []
    returns ''
*/



/*  Another way to do the same function above, but with the code from listConcatForward.js

function listConcatReverse(numList) {
  if (!numList.length) {
    return '';
  };

  const numToStr = numList[0];
  numList.shift();

  // All you need to change would be switching what value is to the left of the .concat and
  // whats inside the parenthesis of the .concat.  (Shown below).
  return listConcatReverse(numList).concat(numToStr);
}
console.log(listConcatReverse(['1', '2', '3']));

*/