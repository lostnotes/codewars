function findNextSquare(sq) {
    if (Math.sqrt(sq) % 1 === 0) {
    let i = sq + 1;
    while (Math.sqrt(i) % 1 !== 0 ) {
        i++
    }
    return i;
    }
    else {
    return -1;
    }
}