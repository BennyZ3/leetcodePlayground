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
