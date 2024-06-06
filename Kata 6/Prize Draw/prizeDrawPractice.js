
function rank(st, we, n) {

   //split the st at commas
  const names = st.split(",")
 //create new array of objects;
 const namesAndNumbers = []
 //for each push 
  names.forEach((element, index) => {
    let lengthOfName = element.length;
    let letterRank = 0;
    const letters = element.toLowerCase().split("");
    for (let i = 0; i < letters.length; i++) {
        letterRank += letters[i].charCodeAt(0) - 96;
    }
    let som = lengthOfName + letterRank;
    let winningNumber = som * we[index];
    namesAndNumbers.push({name: element, winningNumber });
});

namesAndNumbers.sort(compareFn);

function compareFn(a, b) {
    if (a.winningNumber < b.winningNumber) {
        return 1;
    } else if (a.winningNumber > b.winningNumber) {
        return -1
    }
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
    } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
    }
    return 0;
}

return namesAndNumbers[n-1].name;
}
rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 4);