/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const merge = [...nums1, ...nums2].sort((a, b) => a - b);
  const len = merge.length;
  if (len === 1) return merge[0];
  const m = Math.floor(len / 2);
  const y = len % 2;
  if (y) return merge[m];
  return (merge[m] + merge[m - 1]) / 2;
};
// @lc code=end
