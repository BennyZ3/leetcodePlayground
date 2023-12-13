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

// https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/?envType=daily-question&envId=2023-12-11
var maxProduct = function (nums) {
  let max = 0;
  let secondMax = 0;
  for (const num of nums) {
    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num > secondMax) {
      secondMax = num;
    }
  }
  return (max - 1) * (secondMax - 1);
};

// https://leetcode.com/problems/largest-odd-number-in-string/submissions/?envType=daily-question&envId=2023-12-11

var largestOddNumber = function (num) {
  for (let i = num.length - 1; i >= 0; i--) {
    if (Number(num[i]) % 2) {
      return num.slice(0, i + 1);
    }
  }
  return "";
};

// https://leetcode.com/problems/calculate-money-in-leetcode-bank/?envType=daily-question&envId=2023-12-11
var totalMoney = function (n) {
  let total = 0;
  // value of day
  for (let i = 0; i < n; i++) {
    total += Math.floor(i / 7) + 1 + (i % 7);
  }
  return total;
};

var totalMoney2 = function (n) {
  return (
    Math.floor(n / 7) * 28 +
    sumRange(1, Math.floor(n / 7) - 1) * 7 +
    sumRange(1, n % 7) +
    (n % 7) * Math.floor(n / 7)
  );
};

const sumRange = (start, end) => {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};

// https://leetcode.com/problems/count-of-matches-in-tournament/?envType=daily-question&envId=2023-12-11
var numberOfMatches = function (n) {
  if (n === 1) {
    return 0;
  }
  if (n % 2) {
    return (n - 1) / 2 + numberOfMatches((n - 1) / 2 + 1);
  } else {
    return n / 2 + numberOfMatches(n / 2);
  }
};

// https://leetcode.com/problems/special-positions-in-a-binary-matrix/?envType=daily-question&envId=2023-12-11
var numSpecial = function (mat) {
  let specials = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1 && checkSpecial(mat, i, j)) {
        specials++;
      }
    }
  }
  return specials;
};

const checkSpecial = (mat, i, j) => {
  for (let k = 0; k < mat.length; k++) {
    if (k !== i && mat[k][j] === 1) {
      return false;
    }
  }
  for (let k = 0; k < mat[i].length; k++) {
    if (k !== j && mat[i][k] === 1) {
      return false;
    }
  }
  return true;
};

// https://leetcode.com/problems/largest-3-same-digit-number-in-string/?envType=daily-question&envId=2023-12-11
var largestGoodInteger = function (num) {
  let result = "";
  let digit;
  for (let i = 0; i < num.length - 2; i++) {
    if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
      if (digit === undefined) {
        digit = num[i];
        result = num.slice(i, i + 3);
      } else if (num[i] > digit) {
        digit = num[i];
        result = num.slice(i, i + 3);
      }
    }
  }
  return result;
};
