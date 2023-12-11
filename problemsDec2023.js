// 2023_12_11 Leetcode Daily
// 1287. Element Appearing More Than 25% In Sorted Array
// https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/?envType=daily-question&envId=2023-12-11
var findSpecialInteger = function (arr) {
  const limit = arr.length / 4;
  let counts = {};
  for (const num of arr) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
    if (counts[num] > limit) {
      return num;
    }
  }
};
