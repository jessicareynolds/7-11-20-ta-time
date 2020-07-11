// Declared a function called forHelp that accepts one parameter, an array, stored as list.
// This function is meant for reinforcing the for loop syntax.
function forHelp(list) {

  // Declare an empty string to concat the passed in list to.
  let phrase = ''

  // for (initiate looping variable; condition to keep looping; looping variable incremenet)
  // With the condition to keep looping, in regards to an array, we don't want to use '<=' (IE: i <= list.length)
  // A array containing 4 items will have the last item at an index of 3 (because arrays are zero indexed)
  // Zero index meaning the first item in an array is loacted at position zero.
  for (let i = 0; i < list.length; i++) {

    // Checks to see if the for-loop is in its first loop through
    if (i === 0) {

      // If the above condition is met, adds the value from list at the zero index to 
      // the variable called phrase without a space.
      phrase = phrase + list[i]
    } else {

      // If the above if statment, line 14, is false (not in the first loop through),
      // it adds the item to the phrase variable with a space.
      phrase = phrase + ' ' + list[i]
    }
  }

  // Returns the value stored in the variable called phrase.
  return phrase;
}

// Outputs the returned value from the function forHelp, with the passed in array, to the console
console.log(forHelp(['I', 'hate', 'for', 'loops']))

/* Some other options to logging the result to the console are:

  --Option 1: Declare the array and pass it to the function inside a console.log() statement

      const stringArray = ['I', 'hate', 'for', 'loops']
      console.log(forHelp(stringArray))

  --Option 2: Declare a variable, set that variable's value to be the returned value of forHelp()
    with an explicitly passed in array, and then console.log() the returnedValue variable

      const returnValue = forHelp(['I', 'hate', 'for', 'loops'])
      console.log(returnValue)

  --Option 3: Declare a variable and give it an explicit value, declare a returnedValue variable to hold the
    returned value from forHelp() with a variable holding the value of an array passed in,
    and then console.log() the returnedValue variable

      const stringArray = ['I', 'hate', 'for', 'loops']
      const returnValue = forHelp(stringArray)
      console.log(stringArray)
*/