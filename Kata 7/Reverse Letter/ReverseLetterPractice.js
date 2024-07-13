function reverseLetter(str) {
    return str.split("").filter(letter => letter.charCodeAt() >= 97 &&  letter.charCodeAt() <= 122).reverse().join("");
}