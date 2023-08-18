var merge = function (nums1, m, nums2, n) {
  // pointer to track position of nums1 actuall elements from last
  let p1 = m - 1;
  // pointer to track position of nums2 elements from last
  let p2 = n - 1;

  // pointer to track zeros position from nums1 array starting from last element
  let p3 = nums1.length - 1;

  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] >= nums2[p2]) {
      nums1[p3] = nums1[p1];
      p1--;
    } else {
      nums1[p3] = nums2[p2];
      p2--;
    }
    p3--;
  }

  console.log({ nums1 });
};
(nums1 = [-1, 3, 0, 0, 0, 0, 0]), (m = 2), (nums2 = [0, 0, 1, 2, 3]), (n = 5);

merge(nums1, m, nums2, n);
