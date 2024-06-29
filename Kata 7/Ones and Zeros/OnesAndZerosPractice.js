const binaryArrayToNumber = arr => {
    let str = arr.join("");
    return parseInt(str, 2);
  };