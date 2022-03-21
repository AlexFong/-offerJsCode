/*
 * @Author: alex
 * @Date: 2022-03-21 20:27:24
 * @LastEditors: alex
 * @LastEditTime: 2022-03-21 20:44:46
 * @Description: file content
 * 
 * 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

 

示例 1：

输入：head = [1,3,2]
输出：[2,3,1]
 

限制：

0 <= 链表长度 <= 10000



来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
 var reversePrint = function(head) {
  const arr = [];
  // 遍历链表
  while (head) {
      // 链表的调用方法
      // console.log(head.val,head.next)
      arr.push(head.val);
      head = head.next;
  }
  return arr.reverse();
}