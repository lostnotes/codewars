function smaller(nums) {
    const smallerCount = [];
    for (let i = 0; i < nums.length; i++) {
      let count = 0;
      for (let j = i; j < nums.length; j++) {
        if (nums[i] > nums [j]) {
          count++;
        }
      }
      smallerCount.push(count);
     }
    return smallerCount;
  }