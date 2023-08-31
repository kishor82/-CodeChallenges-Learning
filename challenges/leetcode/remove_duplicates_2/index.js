/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let scanner = 0;
  let uniqes = 0;
  let cDindex = null;
  let currentPointer = nums[0];
  let currentCounter = 1;
  console.log({ input: nums });

  while (scanner < nums.length) {
    if (nums[scanner] === nums[scanner + 1]) {
      if (currentPointer === nums[scanner]) {
        currentCounter++;
      }
      if (!cDindex) {
        if (nums[scanner + 1] !== nums[scanner + 2]) {
          if (currentCounter > 2) {
            cDindex = scanner + 1;
          }
        }
      }
    } else {
      if (cDindex && nums[scanner + 1] != undefined) {
        nums[cDindex] = nums[scanner + 1];
        if (nums[scanner + 1] !== nums[scanner + 2]) {
          cDindex++;
        } else {
          cDindex = scanner + 2;
        }
      }
    }
    scanner++;
  }

  console.log({ nums, uniqes, cDindex, scanner });

  return cDindex ? cDindex : 1;
};
const a = [1, 1, 1, 2, 2, 3];
const b = [0, 0, 1, 1, 1, 1, 2, 3, 3];
const c = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
removeDuplicates(b);
