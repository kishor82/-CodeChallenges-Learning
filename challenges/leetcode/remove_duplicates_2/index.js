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

/**
 * Effective and efficient
 * 
 * var removeDuplicates = function (nums) {
    // idx store the index of array till we have element duplicates maximum twice
    let idx = 2;
    // start iterating from index 2 because first two element can't be duplicate more than twice
    for (let i = 2; i < nums.length; i++) {
        // over write element if they are present more than twice
        if (nums[i] != nums[idx - 2]) {
            nums[idx] = nums[i];
            idx += 1;
        }
    }
    // return idx
    return idx;
};
 */
