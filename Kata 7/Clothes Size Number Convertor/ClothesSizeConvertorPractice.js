function sizeToNumber(size) {
    if (size === '') {
      return null;
    }
    const sizeLetters = size.split("");
    //split string
     //if arr.length == 1 do switch 
    if (sizeLetters.length === 1) {
      switch (sizeLetters[0]) {
          case 's': 
            return 36;
            break;
          case 'm': 
            return 38; 
            break;
          case 'l': 
            return 40;
            break;
          default: 
            return null;
      }
      }
  //   } else if (!sizeLetters.includes('s') && !sizeLetters.includes('l') && !sizeLetters.includes('x')) {
  //     return null;
  //   }
    
    //if arr.length is greater than 1 
      // if the array contains a character code that does not equal s, l, or x return null 
    else {
      if (sizeLetters.includes('m') && sizeLetters.includes('x')) {
        return null;
      }
      else if (sizeLetters[sizeLetters.length - 1] === 's' && sizeLetters.slice(0, sizeLetters.length - 1).every((letter) => {return letter ==='x'})) {
        return 36 - ((sizeLetters.length - 1) * 2);
      } else if (sizeLetters[sizeLetters.length -1] === 'l' && sizeLetters.slice(0, sizeLetters.length - 1).every((letter) => {return letter === 'x'})) {
        return 40 + ((sizeLetters.length - 1) * 2);
      } else {
        return null;
      }
    }
    
      //if size.split contains character code for s
        //return 36 + ((size.split.length - 2) * 2)
      //if size.split contains character code for l
        //return 38  + ((size.split.length - 2) * 2)
  }