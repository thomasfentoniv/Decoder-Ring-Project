// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // create an object storing the Polybius square
  const polybiusSquare = {
    1: { 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'},
    2: { 1: 'f', 2: 'g', 3: 'h', 4: 'i/j', 5: 'k'},
    3: { 1: 'l', 2: 'm', 3: 'n', 4: 'o', 5: 'p'},
    4: { 1: 'q', 2: 'r', 3: 's', 4: 't', 5: 'u'},
    5: { 1: 'v', 2: 'w', 3: 'x', 4: 'y', 5: 'z'},
    };
  
  function polybius(input, encode = true) {
    // put input to lowercase 
    const message = input.toLowerCase().split('');
    // make array have no spaces
    const messageNoSpaces = message.filter(number => number != ' ')
    // if decoding
    if(!encode){ 
      let decodeMessage = '';
      // returns false if there is odd numbers 
      if(messageNoSpaces.length % 2 != 0) return false;
      for(let a = 0; a < message.length; a += 2){
        //[column][row] and maintaing spaces in input
        if(message[a] === ' '){
          a--
          decodeMessage += ' '
        }
        else { 
          decodeMessage += polybiusSquare[message[a + 1]][message[a]]; 
        }
      }
      return decodeMessage;
    }
    // if encoding
    else {
      // initialze an empty array to store values in
      const encodeMessage = [] 
      // Loop through to find key and value pairs for each letter 
      for(let key of message){
        // This will ensure the spaces are maintained
        if(key === ' '){ encodeMessage.push(' '); }
        // Loop through all columns
        for(let b = 1; b < 6; b++){ 
          // Loop through all rows
          for(let c = 1; c < 6; c++){ 
            if(polybiusSquare[b][c].includes(key)){
              encodeMessage.push(c);
              encodeMessage.push(b);
            } 
          }
        }
      }
      return encodeMessage.join('');
    }
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };