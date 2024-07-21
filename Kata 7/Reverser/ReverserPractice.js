function reverse(n, total = 0){
    let newTotal = n % 10;
    if (n < 10) {
      return (total * 10) + newTotal ;
    } else {
      return reverse(Math.floor(n/10), (total * 10) + newTotal);
    } 
  }