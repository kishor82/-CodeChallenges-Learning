/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // start pointer to scan elements from the beginning
  let start = 0;
  // last pointer to scan element from the last
  let last = nums.length - 1;
  // count of values matching with val
  let counts = 0;

  while (start < nums.length && last >= 0) {
    // check if last element is matching with val if so , increase count, update pointer value and remove that with pop;
    if (nums[last] === val) {
      counts++;
      last--;
      nums.pop();
    } else {
      // if val found at any other position move to last and pop it
      if (nums[start] === val) {
        const temp = nums[last];
        nums[last] = nums[start];
        nums[start] = temp;

        counts++;
        start++;
        last--;
        nums.pop();
      } else {
        start++;
      }
    }
  }

  console.log({ nums });
};

const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;

removeElement(nums, val);
