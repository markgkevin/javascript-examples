function letterFinder(word, match) {// A function that accepts two parameters
    for (var i = 0; i < word.length; i++) { // this loop exists when i is equal to the length of the word
        if (word[i] == match) {  //check if the current characater, word[i], is equal to the match
            console.log('Found the', match, 'at', i);
        } else {
            console.log('---No match found at', i);
        }
    }
}
letterFinder("Mississippi", "i"); //indexing the parameter (word)  if any letter is equal to parameter (match)