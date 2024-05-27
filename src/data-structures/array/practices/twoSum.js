const twoSum = (nums, target) => {
  const map = new Map();

  for (const index in nums) {
    map.set(nums[index], index * 1);
  }

  for (let step = 0; step < nums.length; step++) {
    const num = target - nums[step];
    let index = map.get(num);

    if (map.has(num) && index !== step) return [step, index];
  }
}
