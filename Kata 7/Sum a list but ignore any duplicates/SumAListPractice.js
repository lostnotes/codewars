function sumNoDuplicates(numList) {
    return numList.filter((el) => numList.indexOf(el) === numList.lastIndexOf(el)).reduce((a, currentValue) => a + currentValue, 0)
    }