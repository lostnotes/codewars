function checkThreeAndTwo(array) {
    let counts = {};
    array.forEach(letter => {
      counts[letter] = counts[letter] ? counts[letter] + 1 : 1;
    })
    return Object.values(counts)[0] === 3 && Object.values(counts)[1] === 2 || Object.values(counts)[0] === 2 && Object.values(counts)[1] === 3;
  }