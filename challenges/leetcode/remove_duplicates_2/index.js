/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const map = new Map();

  for (let i = 0; i <= nums.length - 1; i++) {
    if (!map.get(nums[i])) {
      map.set(nums[i], 1);
    } else {
      if (map.get(nums[i]) < 2) {
        map[nums[i]] = map.set(nums[i], map.get(nums[i]) + 1);
      }
    }
  }

  const newNums = Array.from(map).reduce((a, c) => {
    const [number, repeatable] = c;
    for (let i = 0; i < repeatable; i++) {
      a.push(number);
    }
    return a;
  }, []);

  for (let i = 0; i <= newNums.length - 1; i++) {
    nums[i] = newNums[i];
  }
  return newNums.length;
};

const a = [1, 1, 1, 2, 2, 3];
const b = [0, 0, 1, 1, 1, 1, 2, 3, 3];
const c = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const d = [0, 1, 1, 1, 2, 2];
removeDuplicates([1, 1, 1, 2, 2, 3]);
