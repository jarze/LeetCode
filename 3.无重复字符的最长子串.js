/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLen = 0;
  let max = [];
  for (let i of s) {
    const repeatIndex = max.lastIndexOf(i);
    if (repeatIndex >= 0) {
      maxLen = Math.max(maxLen, max.length);
      max = [...max.slice(repeatIndex + 1)];
    }
    max.push(i);
  }
  return Math.max(maxLen, max.length);
};
// @lc code=end
