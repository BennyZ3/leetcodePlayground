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

// https://leetcode.com/problems/largest-divisible-subset/?envType=daily-question&envId=2024-02-05
var largestDivisibleSubset = function (nums) {
  if (nums.length == 1) {
    return nums;
  }
  let result = [];
  nums.sort((a, b) => a - b);
  for (let i = nums.length - 1; i > 0; i--) {
    let temp = [nums[i]];
    let temp2 = [nums[i]];
    let filter = nums.filter((a) => a <= nums[i] / 2).reverse();
    for (let num of filter) {
      let flag = true;
      temp.forEach((int) => {
        if (int % num != 0) {
          flag = false;
        }
      });
      if (flag) {
        temp.push(num);
      }
    }
    if (temp.length > result.length) {
      result = temp;
    }
    for (let num of filter.reverse()) {
      let flag = true;
      temp2.forEach((int) => {
        if (!(num % int == 0 || int % num == 0)) {
          flag = false;
        }
      });
      if (flag) {
        temp2.push(num);
      }
    }
    if (temp2.length > result.length) {
      result = temp2;
    }
  }
  return result;
};

// https://leetcode.com/problems/majority-element/submissions/1173240180/?envType=daily-question&envId=2024-02-05
var majorityElement = function (nums) {
  let elements = {};
  let breakpoint = nums.length / 2;
  for (let num of nums) {
    elements[num] = elements[num] ? elements[num] + 1 : 1;
    if (elements[num] >= breakpoint) {
      return num;
    }
  }
};

var majorityElement = function (nums) {
  nums.sort();
  return nums[Math.floor(nums.length / 2)];
};

// https://leetcode.com/problems/majority-element-ii/submissions/1173267488/
var majorityElement = function (nums) {
  let breakpoint = nums.length / 3;
  let element = {};
  let result = [];
  for (let num of nums) {
    element[num] = element[num] ? element[num] + 1 : 1;
  }
  for (let [key, value] of Object.entries(element)) {
    if (value > breakpoint) {
      result.push(key);
    }
  }
  return result;
};

// https://leetcode.com/problems/palindromic-substrings/submissions/1173345938/?envType=daily-question&envId=2024-02-05
var countSubstrings = function (s) {
  let result = s.length;
  for (let i = 0; i < s.length - 1; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] == s[j]) {
        let base = s.slice(i, j + 1);
        if (base.split("").reverse().join("") == base) {
          result++;
        }
      }
    }
  }
  return result;
};

// https://leetcode.com/problems/find-first-palindromic-string-in-the-array/?envType=daily-question&envId=2024-02-13
var firstPalindrome = function (words) {
  for (let word of words) {
    if (word[0] == word[word.length - 1]) {
      if (word.split("").reverse().join("") == word) {
        return word;
      }
    }
  }
  return "";
};

// ~30% faster and ~5% lower memory
var firstPalindrome = function (words) {
  for (let word of words) {
    for (let i = 0; i <= word.length / 2; i++) {
      if (word[i] == word[word.length - i - 1]) {
        if (i == Math.floor(word.length / 2)) {
          return word;
        }
      } else {
        break;
      }
    }
  }
  return "";
};

// https://leetcode.com/problems/first-letter-to-appear-twice/
var repeatedCharacter = function (s) {
  let letters = {};
  for (let letter of s) {
    if (letters[letter]) {
      return letter;
    } else {
      letters[letter] = 1;
    }
  }
};
