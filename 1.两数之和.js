/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	for (let i = 0; i < nums.length; i++) {
		let subtrahend = target - nums[i];
		if (nums.slice(i + 1).includes(subtrahend)) {
			let index = nums.lastIndexOf(subtrahend);
			return [i, index];
		}
	}
	return null;
};
// @lc code=end

