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
