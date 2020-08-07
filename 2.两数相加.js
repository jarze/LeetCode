/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

	let a = nodeToArray(l1);
	let b = nodeToArray(l2);

	let ia = a.length > b.length;
	let c = ia ? a : b;
	let d = ia ? b : a;

	let short = d.length;

	let u = {};
	let ls = u;

	let jin = 0;
	c.map((item, index) => {
		let val = Number(item) + (index >= short ? 0 : Number(d[index])) + jin;
		jin = Math.floor(val / 10);
		vv = val % 10;
		ls.val = vv;
		if (index === c.length - 1) {
			ls.next = jin > 0 ? { val: jin, next: null } : null
		} else {
			ls.next = {};
			ls = ls.next;
		}
	});
	return u;
};

function nodeToArray(l, data = []) {
	let newData = [...data, l.val];
	return l.next ? nodeToArray(l.next, newData) : newData;
}
// @lc code=end

