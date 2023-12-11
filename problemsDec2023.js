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

// https://leetcode.com/problems/transpose-matrix/?envType=daily-question&envId=2023-12-11
var transpose = function (matrix) {
  const length = matrix.length;
  const width = matrix[0].length;
  const result = [];
  for (let i = 0; i < width; i++) {
    result.push([]);
    for (let j = 0; j < length; j++) {
      result[i].push(matrix[j][i]);
    }
  }
  return result;
};

// https://leetcode.com/problems/construct-string-from-binary-tree/?envType=daily-question&envId=2023-12-11
var tree2str = function (root) {
  let left = "";
  let right = "";
  if (root.left) {
    left = `(${tree2str(root.left)})`;
  }
  if (root.right) {
    right = `(${tree2str(root.right)})`;
    if (!left) {
      left = "()";
    }
  }
  return `${root.val}${left}${right}`;
};
