// biweekly 123
var triangleType = function (nums) {
  nums.sort((a, b) => a - b);
  if (nums[0] + nums[1] <= nums[2]) {
    return "none";
  }
  if (nums[0] == nums[1] && nums[1] == nums[2]) {
    return "equilateral";
  }
  if (nums[0] == nums[1] || nums[1] == nums[2]) {
    return "isosceles";
  }
  if (nums[0] != nums[1] && nums[1] != nums[2]) {
    return "scalene";
  }
};
// biweekly 123
var numberOfPairs = function (points) {
  //Upper Left
  //Bottom Right
  let count = 0;
  for (let i = 0; i < points.length; i++) {
    // UL person
    for (let j = 0; j < points.length; j++) {
      // BR person
      if (
        points[i][0] <= points[j][0] &&
        points[i][1] >= points[j][1] &&
        i != j
      ) {
        count++;
        let flag = false;
        for (let l = 0; l < points.length; l++) {
          // Everyone else excluding UL/BR
          if (l == i || l == j) {
            continue;
          } else {
            if (
              points[l][0] >= points[i][0] &&
              points[l][0] <= points[j][0] &&
              points[l][1] <= points[i][1] &&
              points[l][1] >= points[j][1]
            ) {
              flag = true;
            }
          }
        }
        if (flag) {
          count--;
        }
      }
    }
  }
  return count;
};

var maximumSubarraySum = function (nums, k) {
  let max = -Infinity;
  let numsIndex = {};
  for (let ind = 0; ind < nums.length; ind++) {
    numsIndex[nums[ind]] = numsIndex[nums[ind]]
      ? [...numsIndex[nums[ind]], ind]
      : [ind];
  }
  for (let i = 0; i < nums.length; i++) {
    if (numsIndex[nums[i] - k]) {
      for (let index of numsIndex[nums[i] - k]) {
        if (index > i) {
          let subArraySum = nums.slice(i, index + 1).reduce((a, b) => a + b, 0);
          if (max < subArraySum) {
            max = subArraySum;
          }
        }
      }
    }
    if (numsIndex[nums[i] + k]) {
      for (let index of numsIndex[nums[i] + k]) {
        if (index > i) {
          let subArraySum = nums.slice(i, index + 1).reduce((a, b) => a + b, 0);
          if (max < subArraySum) {
            max = subArraySum;
          }
        }
      }
    }
  }
  if (max == -Infinity) {
    return 0;
  }
  return max;
};

// https://leetcode.com/problems/first-unique-character-in-a-string/description/?envType=daily-question&envId=2024-02-05
var firstUniqChar = function (s) {
  let letters = {};
  for (let letter of s) {
    letters[letter] = letters[letter] ? letters[letter] + 1 : 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (letters[s[i]] == 1) {
      return i;
    }
  }
  return -1;
};
