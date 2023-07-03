// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // store alphabet in an arraay
  let alphabetArray = [ 
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 
    'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u', 
    'v', 'w', 'x', 'y', 'z'
  ]; 
  
  function substitution(input, alphabet, encode = true) {
    // return false if the alphabet isnt 26 chars long or there is none
    if (!alphabet || alphabet.length !== 26) return false;     
    let specialchars = []
    // return false if alphabet has non-special chars
    for (let chars of alphabet) { 
      if (specialchars.includes(chars)) {
        return false;
      } else {
        specialchars.push(chars);
      }
    }
    // make input lowercase
    let message = input.toLowerCase(); 
    //initalize an empty string to store the decoded message
    let translation = ''; 
    // if decoding
    if (encode == false){
      for (let i = 0; i < message.length; i++) {
        // if the current character is a space or special character
        if (message[i] == ' ' || !alphabet.includes(message[i])) { 
          translation = translation.concat(message[i]);
        } 
        // obtain the index of the character in the alphabet and use that index in the original alphabet to find the correct letter
        else { 
          let currentIndex = alphabet.indexOf(message[i]);
        let newLetter = alphabetArray[currentIndex];
        translation = translation.concat(newLetter);
        }
      }
      return translation;
    } else {
    for (let i = 0; i < message.length; i++) {
      // check if current character [i] is a space or special char
      if (message[i] == ' ' || !alphabetArray.includes(message[i])) {
        translation = translation.concat(message[i]);
      // else find the correct index of the letter
      } else { 
        let currentIndex = alphabetArray.indexOf(message[i]);
      let newLetter = alphabet[currentIndex];
      translation = translation.concat(newLetter);
      }
    }
    return translation;
  }
}
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

