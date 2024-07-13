function onlyDuplicates(str) {
    const letters = str.split("");
    return letters.filter((letter) => letters.indexOf(letter) !== letters.lastIndexOf(letter)).join("");
    
}