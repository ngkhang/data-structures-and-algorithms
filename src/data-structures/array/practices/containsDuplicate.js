const containsDuplicate = (nums) => {
  // Solution 1:
  return [...new Set(nums)].length !== nums.length;

  // Solution 2:
  // const objNums = {};

  // for (const num of nums) {
  //   if (objNums.hasOwnProperty(num)) return true;

  //   objNums[num] = objNums[num] ? objNums[num] + 1 : 1;
  // }
  // return false;
}