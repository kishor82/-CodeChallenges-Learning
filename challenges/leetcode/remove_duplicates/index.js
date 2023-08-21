/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let scanner = 0;
  let uniqes = 0;
  let cDindex = null;

  while (scanner < nums.length) {
    if (nums[scanner] === nums[scanner + 1]) {
      if (!cDindex) {
        cDindex = scanner + 1;
      }
    } else {
      if (cDindex && nums[scanner + 1] != undefined) {
        nums[cDindex] = nums[scanner + 1];
        cDindex++;
      }
    }
    scanner++;
  }

  console.log({ nums, uniqes, cDindex, scanner });

  return cDindex ? cDindex : 1;
};
const a = [1, 2, 3];
const b = [-3, -1, -1, 0, 0, 0, 0, 0, 2];
const c = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
removeDuplicates([1]);
