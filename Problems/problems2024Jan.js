// https://leetcode.com/problems/number-of-laser-beams-in-a-bank/?envType=daily-question&envId=2024-01-03
var numberOfBeams = function (bank) {
  bank = bank.filter((row, i) => {
    return row.includes("1");
  });
  if (bank.length < 2) return 0;
  bank = bank.map((row) => {
    let count = 0;
    for (const item of row) {
      if (item === "1") {
        count++;
      }
    }
    return count;
  });
  let result = 0;
  for (let i = 0; i < bank.length - 1; i++) {
    result += bank[i] * bank[i + 1];
  }
  return result;
};

// https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/?envType=daily-question&envId=2024-01-03
var minOperations = function (nums) {
  let numbers = {};
  let operations = 0;
  for (const num of nums) {
    if (!numbers[num]) {
      numbers[num] = 1;
    } else {
      numbers[num]++;
    }
  }
  for (const num in numbers) {
    let count = numbers[num];
    if (count == 1) {
      return -1;
    } else if (count == 2 || count == 3) {
      operations++;
    } else if (count == 4 || count == 5 || count == 6) {
      operations += 2;
    } else {
      if (count % 2 == 1) {
        count -= 3;
        operations += 1;
      }
      if (count >= 6) {
        operations += Math.floor(count / 3);
        count = count % 3;
      }
      if (count == 4 || count == 5) {
        operations += 2;
      } else if (count > 0) {
        operations += 1;
      }
    }
  }
  return operations;
};

var minOperations2 = function (nums) {
  let numbers = {};
  let operations = 0;
  for (const num of nums) {
    if (!numbers[num]) {
      numbers[num] = 1;
    } else {
      numbers[num]++;
    }
  }
  for (const num in numbers) {
    let count = numbers[num];
    if (count == 1) {
      return -1;
    } else {
      operations += Math.ceil(count / 3);
    }
  }
  return operations;
};

// https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/?envType=daily-question&envId=2024-01-03
var findMatrix = function (nums) {
  let result = [];
  let numbers = {};
  let rows = 1;
  for (let i = 0; i < nums.length; i++) {
    if (!numbers[nums[i]]) {
      numbers[nums[i]] = 1;
    } else {
      numbers[nums[i]]++;
      if (numbers[nums[i]] > rows) {
        rows = numbers[nums[i]];
      }
    }
  }
  for (let i = 0; i < rows; i++) {
    result.push([]);
    for (const num in numbers) {
      if (numbers[num] > 0) {
        result[i].push(num);
        numbers[num]--;
      }
    }
  }
  return result;
};

// https://leetcode.com/problems/assign-cookies/?envType=daily-question&envId=2024-01-03
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let count = 0;
  let i = 0;
  let j = 0;
  while (i < g.length && j < s.length) {
    if (g[i] <= s[j]) {
      count++;
      i++;
    }
    j++;
  }
  return count;
};

// https://leetcode.com/problems/range-sum-of-bst/?envType=daily-question&envId=2024-01-03
var rangeSumBST = function (root, low, high) {
  let sum = 0;
  if (root.val >= low && root.val <= high) {
    sum += root.val;
  }
  if (root.left && root.val > low) {
    sum += rangeSumBST(root.left, low, high);
  }
  if (root.right && root.val < high) {
    sum += rangeSumBST(root.right, low, high);
  }
  return sum;
};

// https://leetcode.com/problems/arithmetic-slices/
var numberOfArithmeticSlices = function (nums) {
  if (nums.length < 3) return 0;
  let count = 0;
  let pattern = nums[1] - nums[0];
  for (let i = 0; i < nums.length - 2; i++) {
    let j = 1;
    if (nums[i + 2] - nums[i + 1] == pattern) {
      count++;
      while (nums[i + 2 + j] - nums[i + 1 + j] == pattern) {
        count++;
        j++;
      }
    } else {
      pattern = nums[i + 2] - nums[i + 1];
    }
  }
  return count;
};

// https://leetcode.com/problems/leaf-similar-trees/submissions/?envType=daily-question&envId=2024-01-08
var leafSimilar = function (root1, root2) {
  const treeTraverser = (node) => {
    let result = [];
    if (!node.left && !node.right) {
      return [node.val];
    }
    if (node.left) {
      result.push(...treeTraverser(node.left));
    }
    if (node.right) {
      result.push(...treeTraverser(node.right));
    }
    return result;
  };
  let r1 = treeTraverser(root1);
  let r2 = treeTraverser(root2);
  if (r1.length != r2.length) return false;
  for (let i = 0; i < r1.length; i++) {
    if (r1[i] != r2[i]) {
      return false;
    }
  }
  return true;
};

// https://leetcode.com/problems/island-perimeter/submissions/
var islandPerimeter = function (grid) {
  let result = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) {
        let value = 4;
        if (grid[i + 1] && grid[i + 1][j] == 1) {
          value--;
        }
        if (grid[i - 1] && grid[i - 1][j] == 1) {
          value--;
        }
        if (grid[i][j + 1] == 1) {
          value--;
        }
        if (grid[i][j - 1] == 1) {
          value--;
        }
        result += value;
      }
    }
  }
  return result;
};

var islandPerimeter2 = function (grid) {
  let result = 0;
  let gridMap = grid.map((row) =>
    row.reduce((acc, curr) => {
      if (curr == 1) {
        acc++;
      }
      return acc;
    }, 0)
  );
  for (let i = 0; i < gridMap.length; i++) {
    let value = gridMap[i] * 2 + 2;
    if (gridMap[i - 1]) {
      // TODO: adjust these differences to account for misaligned islands
      let difference = Math.abs(grid[i].indexOf(1) - grid[i - 1].indexOf(1));
      value -= Math.min(gridMap[i], gridMap[i - 1]) - difference;
    }
    if (gridMap[i + 1]) {
      let difference = Math.abs(grid[i].indexOf(1) - grid[i + 1].indexOf(1));
      value -= Math.min(gridMap[i], gridMap[i + 1]) - difference;
    }
    result += value;
  }
  return result;
};

// islandPerimeter([
//   [0, 1, 0, 0],
//   [1, 1, 1, 0],
//   [0, 1, 0, 0],
//   [1, 1, 0, 0],
// ]);

// https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/?envType=daily-question&envId=2024-01-10
var maxAncestorDiff = function (root) {};

var minMaxNode = function (root) {
  if (!root.left && !root.right) {
    return [root.val, root.val];
  }
  let min = root.val;
  let max = root.val;
  if (root.left) {
    let left = minMaxNode(root.left);
    min = Math.min(min, left[0]);
    max = Math.max(max, left[1]);
  }
  if (root.right) {
    let right = minMaxNode(root.right);
    min = Math.min(min, right[0]);
    max = Math.max(max, right[1]);
  }
  let result =
    Math.abs(root.val - min) > Math.abs(max - root.val)
      ? Math.abs(root.val - min)
      : Math.abs(max - root.val);
  return result;
};

var traverseTree = function (root, max = 0) {
  if (!root.left && !root.right) {
    return root.val;
  }
  if (root.left) {
    result.push(...traverseTree(root.left));
  }
  if (root.right) {
    result.push(...traverseTree(root.right));
  }
  return max;
};

// https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/?envType=daily-question&envId=2024-01-13
var minSteps = function (s, t) {
  let steps = s.length;
  let letters = {};
  for (const letter of s) {
    letters[letter] = letters[letter] ? letters[letter] + 1 : 1;
  }
  for (const letter of t) {
    if (letters[letter] && letters[letter] > 0) {
      letters[letter]--;
      steps--;
    }
  }
  return steps;
};

// https://leetcode.com/problems/determine-if-two-strings-are-close/description/
var closeStrings = function (word1, word2) {
  if (word1.length != word2.length) return false;
  let letters1 = {};
  let letters2 = {};
  for (const letter of word1) {
    letters1[letter] = letters1[letter] ? letters1[letter] + 1 : 1;
  }
  for (const letter of word2) {
    letters2[letter] = letters2[letter] ? letters2[letter] + 1 : 1;
  }
  let keys1 = Object.keys(letters1).sort();
  let keys2 = Object.keys(letters2).sort();
  if (keys1.length != keys2.length) return false;
  if (keys1.join() != keys2.join()) {
    return false;
  }
  let values1 = Object.values(letters1).sort();
  let values2 = Object.values(letters2).sort();
  if (values1.join() != values2.join()) {
    return false;
  }
  return true;
};

var closeStrings2 = function (word1, word2) {
  if (word1.length != word2.length) return false;
  let letters1 = {};
  let letters2 = {};
  for (const letter of word1) {
    letters1[letter] = letters1[letter] ? letters1[letter] + 1 : 1;
  }
  for (const letter of word2) {
    letters2[letter] = letters2[letter] ? letters2[letter] + 1 : 1;
  }
  if (
    Object.keys(letters1).sort().join() != Object.keys(letters2).sort().join()
  ) {
    return false;
  }
  return (
    Object.values(letters1).sort().join() ==
    Object.values(letters2).sort().join()
  );
};

// https://leetcode.com/problems/unique-number-of-occurrences/description/?envType=daily-question&envId=2024-01-17
var uniqueOccurrences = function (arr) {
  let numbers = {};
  for (const num of arr) {
    numbers[num] = numbers[num] ? numbers[num] + 1 : 1;
  }
  let occurrences = Object.values(numbers);
  let unique = new Set(occurrences);
  return occurrences.length == unique.size();
};

// https://leetcode.com/problems/find-players-with-zero-or-one-losses/?envType=daily-question&envId=2024-01-17
var findWinners = function (matches) {
  let players = {};
  for (const match of matches) {
    if (!players[match[0]]) {
      players[match[0]] = 0;
    }
    if (!players[match[1]]) {
      players[match[1]] = 1;
    } else {
      players[match[1]]++;
    }
  }
  let result = [[], []];
  for (const [player, losses] of Object.entries(players)) {
    if (losses == 0) {
      result[0].push(player);
    } else if (losses == 1) {
      result[1].push(player);
    }
  }
  return result;
};

// https://leetcode.com/problems/climbing-stairs/?envType=daily-question&envId=2024-01-18
var climbStairs = function (n) {
  let first = 1;
  let second = 1;
  let current = 1;
  for (let i = 2; i <= n; i++) {
    current = first + second;
    first = second;
    second = current;
  }
  return current;
};

// https://leetcode.com/problems/set-mismatch/?envType=daily-question&envId=2024-01-21
var findErrorNums = function (nums) {
  let result = [0, 0];
  let numObj = {};
  for (let i = 0; i < nums.length; i++) {
    numObj[nums[i]] = numObj[nums[i]] ? numObj[nums[i]] + 1 : 1;
    if (numObj[nums[i]] == 2) {
      result[0] = nums[i];
    }
  }
  for (let i = 1; i <= nums.length; i++) {
    if (!numObj[i]) {
      result[1] = i;
      return result;
    }
  }
};

/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
  arr.sort((a, b) => (a.length < b.length ? 1 : -1));
  let maxLen = arr[0].length;
  for (let i = 0; i < arr.length; i++) {
    let chars = {};
    let noDupes = true;
    for (let char of arr[i]) {
      if (chars[char]) {
        noDupes = false;
        continue;
      }
      chars[char] = 1;
    }
    if (noDupes) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i].length + arr[j].length > 26) {
          continue;
        } else {
          let flag = true;
          for (let char2 of arr[j]) {
            if (chars[char2]) {
              flag = false;
            }
          }
          let len = arr[i].length + arr[j].length;
          if (flag && len > maxLen) {
            maxLen = len;
          }
        }
      }
    }
  }
  return maxLen;
};

// https://leetcode.com/problems/evaluate-reverse-polish-notation/?envType=daily-question&envId=2024-01-24
var evalRPN = function (tokens) {
  let stack = [];
  tokens = tokens.map((i) => {
    return Number(i) ? Number(i) : i;
  });
  for (let token of tokens) {
    if (Number(token) || token == "0") {
      stack.push(Number(token));
    } else {
      let a = stack.pop();
      let b = stack.pop();
      if (token == "+") {
        stack.push(a + b);
      } else if (token == "-") {
        stack.push(b - a);
      } else if (token == "*") {
        stack.push(a * b);
      } else if (token == "/") {
        if (b / a < 0) {
          stack.push(Math.ceil(b / a));
        } else {
          stack.push(Math.floor(b / a));
        }
      }
    }
  }
  return stack[0];
};

// https://leetcode.com/problems/next-greater-element-i/submissions/1162161005/
var nextGreaterElement = function (nums1, nums2) {
  let result = [];
  for (let num of nums1) {
    let i = nums2.indexOf(num);
    let flag = true;
    while (flag && i < nums2.length) {
      if (nums2[i] > num) {
        result.push(nums2[i]);
        flag = false;
      } else if (i == nums2.length - 1) {
        result.push(-1);
      }
      i++;
    }
  }
  return result;
};

// https://leetcode.com/problems/daily-temperatures/?envType=daily-question&envId=2024-01-24
var dailyTemperatures = function (temperatures) {
  let result = [];
  let indexGreaterThan = {};
  for (let i = 0; i < temperatures.length; i++) {
    let flag = true;
    let j = i + 1;
    if (i == temperatures.length - 1) {
      result.push(0);
    } else if (
      indexGreaterThan[temperatures[i]] &&
      indexGreaterThan[temperatures[i]] > j
    ) {
      result.push(indexGreaterThan[temperatures[i]] - i);
      flag = false;
    }
    while (flag && j < temperatures.length) {
      if (temperatures[i] < temperatures[j]) {
        result.push(j - i);
        indexGreaterThan[temperatures[i]] = j;
        flag = false;
      } else if (j == temperatures.length - 1) {
        result.push(0);
      }
      j++;
    }
  }
  return result;
};

// https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/?envType=daily-question&envId=2024-02-01
var divideArray = function (nums, k) {
  if (nums.length % 3 != 0) {
    return [];
  }
  nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length; i += 3) {
    if (nums[i + 2] - nums[i] > k) {
      return [];
    } else {
      result.push(nums.slice(i, i + 3));
    }
  }
  return result;
};

// https://leetcode.com/problems/russian-doll-envelopes/?source=submission-noac
// var maxEnvelopes = function (envelopes) {
//   // sort by width
//   envelopes.sort((a, b) => {
//     if (a[0] == b[0]) {
//       return a[1] - b[1];
//     } else {
//       return a[0] - b[0];
//     }
//   });
//   let maxEnvelopes = 0;
//   currentEnv = [0, 0];
//   for (let envelope of envelopes) {
//     if (currentEnv[0] < envelope[0] && currentEnv[1] < envelope[1]) {
//       maxEnvelopes++;
//       currentEnv = envelope;
//     }
//     // Somehow account for instance where skipping is better
//   }
//   return maxEnvelopes;
// };
var maxEnvelopes = function (envelopes) {
  // Needs to be optimized for large inputs (O(n^2) is too slow)
  // Currently passes 85/87 test cases
  envelopes.sort((a, b) => a[0] - b[0]);
  let result = 0;
  // count of envelopes that can fit inside the current envelope
  let nestCount = new Array(envelopes.length).fill(1);
  for (let i = 0; i < envelopes.length; i++) {
    for (let j = 0; j < i; j++) {
      if (
        envelopes[i][0] > envelopes[j][0] &&
        envelopes[i][1] > envelopes[j][1]
      ) {
        nestCount[i] = Math.max(nestCount[i], nestCount[j] + 1);
      }
    }
    result = Math.max(result, nestCount[i]);
  }
  return result;
};

// console.log(
//   maxEnvelopes([
//     [5, 4],
//     [6, 4],
//     [6, 7],
//     [2, 3],
//   ])
// );

// console.log(
//   maxEnvelopes([
//     [2, 100],
//     [3, 200],
//     [4, 300],
//     [5, 500],
//     [5, 400],
//     [5, 250],
//     [6, 370],
//     [6, 360],
//     [7, 380],
//   ])
// );

// https://leetcode.com/problems/sequential-digits/?envType=daily-question&envId=2024-02-02
var sequentialDigits = function (low, high) {
  let lowLen = low.toString().length;
  let highLen = high.toString().length;
  let sequences = [];
  for (let len = lowLen; len <= highLen; len++) {
    // number of digits
    for (let i = 1; i <= 10 - lowLen; i++) {
      // starting number
      let num = [];
      for (let k = i; k < Math.min(i + len, 10) && 10 - i >= len; k++) {
        // how far to go from starting number
        num.push(k);
      }
      num = Number(num.join(""));
      if (num <= high && num >= low) {
        sequences.push(num);
      }
      if (num > high) {
        break;
      }
    }
  }
  return sequences;
};

var sequentialDigits = function (low, high) {
  let sequences = [
    12, 23, 34, 45, 56, 67, 78, 89, 123, 234, 345, 456, 567, 678, 789, 1234,
    2345, 3456, 4567, 5678, 6789, 12345, 23456, 34567, 45678, 56789, 123456,
    234567, 345678, 456789, 1234567, 2345678, 3456789, 12345678, 23456789,
    123456789,
  ];
  return sequences.filter((a) => a >= low && a <= high);
};
