var lengthOfSequence = function (arr, n) {
    let numberOfN = 0;
    arr.forEach((number, i) => {
      if (number === n) {
        numberOfN += 1;
      }
    })
    if (numberOfN !== 2) {
      return 0;
    } 
    return arr.lastIndexOf(n) - arr.indexOf(n) + 1;
    
  };