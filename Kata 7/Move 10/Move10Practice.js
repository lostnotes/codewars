function moveTen(s){
    let letters = s.toLowerCase().split('');
    //at each index->
    return letters.map(letter => {
      //find the char code for the currrent letter.
      let characterCode = letter.charCodeAt(0);
      //create a variable for difference between 122 (z) and current char code,
      let difference = 122 - characterCode;
      //if difference is less than or equal to 10
      if (difference >= 10) {
         //add 10 to charcode and return character from new char code
        let newCharacterCode = characterCode + 10;
        return String.fromCharCode(newCharacterCode);
      }
      //if difference is greater than 10
      else {
        let leftoverDifference = 10 - difference;
        //subtract difference from 10
         //add remainder to 96 and return character from that number 
        let newCharacterCode = 96 + leftoverDifference;
        return String.fromCharCode(newCharacterCode);
      }
    }).join("");
}