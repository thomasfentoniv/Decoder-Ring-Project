// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // declare a variable to store the alphabet (all lowercase)
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  // input => inputted text to be encoded/decoded
  // shift => how much each letter is "shifted" by (a postive number means shifted right)
  // encode => whether you should encode/decode the message (default is set to true)
  
  function caesar(input, shift, encode = true) {
    // initalize an empty string to store the encoded/decoded message
    let translation = ""
    // return false if shift is outside of the parameters 
    if (shift < -25 || shift > 25 || shift === 0 || shift === undefined) {
      return false
    }
    // if decoding
    if (!encode) {
      shift *= -1
    }
    // if encoding
      // loop through all characters in input
    for (let i = 0; i < input.length; i++) { 
      // change the input letters to. lowercase
      const letter = input[i].toLowerCase();
      // if the alphabet variable contains a character from the input
      if (alphabet.includes(letter)) {
        // find the index # of the alphabet variable that matches the input letter
        const alphabetIndex = alphabet.indexOf(letter);
        // determine the the new index after the shift
        let shiftedIndex = alphabetIndex + shift;
        // if the shift lays outside of the alphabet length, it should wrap around the alphabet
        // e.g., a shift of 3 on the z becomes c 
        if (shiftedIndex > 25) {
          shiftedIndex -= 26
        }
        if (shiftedIndex < 0) {
          shiftedIndex += 26
        }
        // finds the translated letter and adds it to the result (message)
        translation += alphabet[shiftedIndex];
      }
      else
        // maintains the spaces and special characters
      {
        translation += letter;
      }
  }
      return translation;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
