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

// https://leetcode.com/problems/xor-operation-in-an-array/
var xorOperation = function (n, start) {
  let base = 0 ^ start;
  for (let i = 1; i < n; i++) {
    base = (start + i * 2) ^ base;
  }
  return base;
};

// https://leetcode.com/problems/minimum-cuts-to-divide-a-circle/
var numberOfCuts = function (n) {
  return n % 2 == 0 ? n / 2 : n == 1 ? 0 : n;
};

// https://leetcode.com/problems/smallest-even-multiple/
var smallestEvenMultiple = function (n) {
  return n % 2 ? n * 2 : n;
};
// ~30% faster
var smallestEvenMultiple = function (n) {
  return (n & 1) == 1 ? n * 2 : n;
};

// https://leetcode.com/problems/find-greatest-common-divisor-of-array/
var findGCD = function (nums) {
  nums.sort((a, b) => a - b);
  if (nums[nums.length - 1] % nums[0] == 0) {
    return nums[0];
  }
  for (let i = Math.ceil(nums[0] / 2); i > 1; i--) {
    if (nums[nums.length - 1] % i == 0 && nums[0] % i == 0) {
      return i;
    }
  }
  return 1;
};

// https://leetcode.com/problems/rearrange-array-elements-by-sign/?envType=daily-question&envId=2024-02-14
var rearrangeArray = function (nums) {
  let posCount = 0;
  let negCount = 0;
  let result = new Array(nums.length);
  for (let num of nums) {
    if (num > 0) {
      result[posCount * 2] = num;
      posCount++;
    } else {
      result[negCount * 2 + 1] = num;
      negCount++;
    }
  }
  return result;
};

// https://leetcode.com/problems/find-polygon-with-the-largest-perimeter/?envType=daily-question&envId=2024-02-15
var largestPerimeter = function (nums) {
  let maxPerimeter = nums.reduce((a, b) => a + b, 0);
  nums.sort((a, b) => a - b);
  let flag = true;
  for (let i = nums.length - 1; flag; i--) {
    if (maxPerimeter - nums[i] <= nums[i]) {
      maxPerimeter = maxPerimeter - nums[i];
      nums.pop();
    } else {
      flag = false;
    }
  }
  return nums.length > 2 ? maxPerimeter : -1;
};

// https://leetcode.com/problems/valid-triangle-number/
var triangleNumber = function (nums) {
  let result = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let total = nums[i] + nums[j] + nums[k];
        if (
          Math.max(nums[i], nums[j], nums[k]) <
          total - Math.max(nums[i], nums[j], nums[k])
        ) {
          result++;
        } else {
          break;
        }
      }
    }
  }
  return result;
};

// https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/?envType=daily-question&envId=2024-02-16
var findLeastNumOfUniqueInts = function (arr, k) {
  let numCounts = {};
  for (let num of arr) {
    numCounts[num] = numCounts[num] ? numCounts[num] + 1 : 1;
  }
  numCounts = Object.entries(numCounts).sort((a, b) => b[1] - a[1]);
  for (let i = numCounts.length - 1; k > 0; i--) {
    if (k >= numCounts[i][1]) {
      k -= numCounts[i][1];
      numCounts.pop();
    } else {
      return numCounts.length;
    }
  }
  return numCounts.length;
};

var findLeastNumOfUniqueInts = function (arr, k) {
  let numCounts = {};
  for (let num of arr) {
    numCounts[num] = numCounts[num] ? numCounts[num] + 1 : 1;
  }
  numCounts = Object.values(numCounts).sort((a, b) => b - a);
  for (let i = numCounts.length - 1; k > 0; i--) {
    if (k >= numCounts[i]) {
      k -= numCounts[i];
      numCounts.pop();
    } else {
      return numCounts.length;
    }
  }
  return numCounts.length;
};

// https://leetcode.com/problems/merge-k-sorted-lists/
var mergeKLists = function (lists) {
  if (!lists.length) {
    let head = new ListNode();
    return head.next;
  }
  if (lists.length == 1) {
    return lists[0];
  }
  let nums = [];
  for (list of lists) {
    while (list != null && list.val != null) {
      nums.push(list.val);
      list = list.next;
    }
  }
  nums.sort((a, b) => a - b);
  let head = new ListNode(nums[0]);
  let currentPosition = head;
  for (let i = 1; i < nums.length; i++) {
    currentPosition.next = new ListNode(nums[i]);
    currentPosition = currentPosition.next;
  }
  if (!nums.length) {
    return head.next;
  }
  return head;
};

// https://leetcode.com/problems/sliding-window-maximum/
var maxSlidingWindow = function (nums, k) {
  // TODO: optimize for larger inputs
  let lastMax = Math.max(...nums.slice(0, k));
  let result = [lastMax];
  for (let i = 1; i <= nums.length - k; i++) {
    if (nums[i - 1] == lastMax || nums[i + k - 1] > lastMax) {
      lastMax = Math.max(...nums.slice(i, i + k));
      result.push(lastMax);
    } else {
      result.push(lastMax);
    }
  }
  return result;
};

// https://leetcode.com/problems/integer-to-english-words/
var numberToWords = function (num) {
  // Objects for all the unique words
  let digits = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  let tens = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];
  let thousands = ["", "Thousand", "Million", "Billion"];
  num = num.toString().split("");
  if (num.length == 1) return digits[num[0]];
  let temp = [];
  while (num.length > 0) {
    // group numbers into 3s
    temp.unshift(num.splice(-3, 3).join(""));
  }
  let result = "";
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] == "000") {
      continue;
    }
    if (temp[i].length == 3 && temp[i] > 99) {
      result += digits[temp[i][0]] + " Hundred ";
    }
    // using slice -2 to get the last 2 digits in account for cases of only 1-2 digits
    if (temp[i].slice(-2) < 20 && temp[i].slice(-2) > 0) {
      // if the last 2 digits are less than 20, use the digits object
      result += digits[Number(temp[i].slice(-2))] + " ";
    } else if (temp[i].slice(-2) > 19) {
      if (temp[i].slice(-1) == 0) {
        // if the last digit is 0, use just the tens object
        result += tens[temp[i].slice(-2)[0]] + " ";
      } else {
        result +=
          tens[temp[i].slice(-2)[0]] + " " + digits[temp[i].slice(-1)] + " ";
      }
    }
    if (i < temp.length - 1) {
      // add the necessary suffix
      result += thousands[temp.length - i - 1] + " ";
    }
  }
  // remove trailing space
  return result.trim();
};

// https://leetcode.com/problems/integer-to-roman/
var intToRoman = function (num) {
  let numerals = {
    1000: "M",
    500: "D",
    100: "C",
    50: "L",
    10: "X",
    5: "V",
    1: "I",
  };
  let numeralEntries = Object.entries(numerals);
  let result = "";
  for (let i = numeralEntries.length - 1; i >= 0; i--) {
    let val = Number(numeralEntries[i][0]);
    while (num >= val) {
      result += numeralEntries[i][1];
      num -= val;
    }
    if (`${num}`[0] == "9" && `${val}`[0] == "1" && num > val * 0.75) {
      result += numeralEntries[i - 2][1] + numeralEntries[i][1];
      num -= val - Number(numeralEntries[i - 2][0]);
    }
    if (`${num}`[0] == "4" && `${val}`[0] == "5" && num > val * 0.75) {
      result += numeralEntries[i - 1][1] + numeralEntries[i][1];
      num -= val - Number(numeralEntries[i - 1][0]);
    }
  }
  return result;
};

// https://leetcode.com/problems/text-justification/
var fullJustify = function (words, maxWidth) {
  let output = [];
  let row = [words[0]];
  let count = words[0].length;
  for (let i = 1; i <= words.length; i++) {
    if (i == words.length) {
      output.push(row.join(" ") + " ".repeat(maxWidth - count));
    } else if (count + words[i].length >= maxWidth) {
      let gap = (maxWidth - count) / (row.length - 1 || 1);
      if (gap < 0) {
        gap = 0;
      }
      if (gap % 1 > 0) {
        let remainder = Math.round((gap % 1) * (row.length - 1));
        for (let i = 0; i < remainder; i++) {
          row[i] = row[i] + " ";
        }
      }
      if (row.length == 1) {
        output.push(row[0] + " ".repeat(gap));
      } else {
        output.push(row.join(" ".repeat(Math.floor(1 + gap))));
      }
      row = [words[i]];
      count = words[i].length;
    } else {
      count += count == 0 ? words[i].length : words[i].length + 1;
      row.push(words[i]);
    }
  }
  return output;
};

// biweekly 124
var lastNonEmptyString = function (s) {
  let letters = {};
  let max = 0;
  for (let letter of s) {
    letters[letter] = letters[letter] + 1 || 1;
    if (letters[letter] > max) {
      max = letters[letter];
    }
  }
  max--;
  s = s.split("");
  while (max > 0) {
    for (let letter in letters) {
      let found = s.findIndex((element) => element === letter);
      if (found >= 0) {
        s.splice(found, 1);
      }
    }
    max--;
  }
  return s.join("");
};

var maxOperations = function (nums) {
  let scores = [
    nums[0] + nums[1],
    nums[0] + nums[nums.length - 1],
    nums[nums.length - 1] + nums[nums.length - 2],
  ];
  let maxCount = 0;
  for (let score of scores) {
    let count = scoreTraverser(nums, score);
    if (count > maxCount) {
      maxCount = count;
    }
  }
  return maxCount;
};

let scoreTraverser = function (nums, score) {
  let max = 0;
  if (nums.length <= 1) {
    return 0;
  }
  if (nums[0] + nums[1] == score) {
    let result = 1 + scoreTraverser(nums.slice(2), score);
    if (result > max) {
      max = result;
    }
  }
  if (nums[0] + nums[nums.length - 1] == score) {
    let result = 1 + scoreTraverser(nums.slice(1, -1), score);
    if (result > max) {
      max = result;
    }
  }
  if (nums[nums.length - 1] + nums[nums.length - 2] == score) {
    let result = 1 + scoreTraverser(nums.slice(0, -2), score);
    if (result > max) {
      max = result;
    }
  }
  return max;
};

var maxSelectedElements = function (nums) {
  nums.sort((a, b) => a - b);
  let numList = {};
  for (let num of nums) {
    numList[num] = numList[num] + 1 || 1;
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    if (numList[nums[i]] > 2) {
      numList[nums[i]] = numList[nums[i]] - 1;
      nums.splice(i, 1);
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      nums[i] = nums[i] + 1;
    } else if (nums[i] == nums[i + 1] - 2) {
      nums[i] = nums[i] + 1;
    }
  }
  let set = [...new Set(nums)];
  let currentSequence = 1;
  let longest = 1;
  for (let i = 0; i < set.length; i++) {
    if (set[i] + 1 == set[i + 1]) {
      currentSequence++;
      if (currentSequence > longest) {
        longest = currentSequence;
      }
    } else {
      currentSequence = 1;
    }
  }
  return longest;
};

// https://leetcode.com/problems/furthest-building-you-can-reach/description/?envType=daily-question&envId=2024-02-17
var furthestBuilding = function (heights, bricks, ladders) {
  return buildingTraversal(heights, bricks, ladders, 0);
};

let buildingTraversal = function (heights, bricks, ladders, index) {
  if (index == heights.length - 1) {
    return index;
  }
  let highest = index;
  if (heights[index] >= heights[index + 1]) {
    let result = buildingTraversal(heights, bricks, ladders, index + 1);
    if (result > highest) {
      highest = result;
    }
  } else {
    if (bricks > 0 && heights[index + 1] - heights[index] <= bricks) {
      let result = buildingTraversal(
        heights,
        bricks - (heights[index + 1] - heights[index]),
        ladders,
        index + 1
      );
      if (result > highest) {
        highest = result;
      }
    }
    if (ladders > 0) {
      let result = buildingTraversal(heights, bricks, ladders - 1, index + 1);
      if (result > highest) {
        highest = result;
      }
    }
  }
  return highest;
};

console.log(furthestBuilding([4, 2, 7, 6, 9, 14, 12], 5, 1));
console.log(furthestBuilding([4, 12, 2, 7, 3, 18, 20, 3, 19], 10, 2));
console.log(furthestBuilding([14, 3, 19, 3], 17, 0));
console.log(furthestBuilding([17, 16, 5, 10, 10, 14, 7], 74, 6));
console.log(furthestBuilding([1, 5, 1, 2, 3, 4, 10000], 4, 1));

// https://leetcode.com/problems/power-of-two/?envType=daily-question&envId=2024-02-19
var isPowerOfTwo = function (n) {
  if (n < 0) {
    return false;
  }
  return (
    n
      .toString(2)
      .split("")
      .filter((char) => char == "1").length == 1
  );
};
var isPowerOfTwo = function (n) {
  if (n < 0) {
    return false;
  }
  return n.toString(2).replaceAll("0", "") == "1";
};

// https://leetcode.com/problems/power-of-three/
var isPowerOfThree = function (n) {
  if (n < 1) {
    return false;
  }
  return n.toString(3).replaceAll("0", "") == "1";
};

// https://leetcode.com/problems/power-of-four/
var isPowerOfFour = function (n) {
  if (n < 1) {
    return false;
  }
  return n.toString(4).replaceAll("0", "") == "1";
};

// https://leetcode.com/problems/meeting-rooms-iii/
var mostBooked = function (n, meetings) {
  meetings.sort((a, b) => a[0] - b[0]);
  let numOfMeetings = new Array(n).fill(0);
  let currentEndTime = new Array(n).fill(0);
  for (let meeting of meetings) {
    let opening = currentEndTime.findIndex(
      (openTime) => openTime <= meeting[0]
    );
    if (opening != -1) {
      numOfMeetings[opening]++;
      currentEndTime[opening] = meeting[1];
    } else {
      let earliestOpening = Math.min(...currentEndTime);
      opening = currentEndTime.findIndex(
        (openTime) => openTime == earliestOpening
      );
      numOfMeetings[opening]++;
      currentEndTime[opening] += meeting[1] - meeting[0];
    }
  }
  return numOfMeetings.findIndex(
    (count) => count == Math.max(...numOfMeetings)
  );
};

// https://leetcode.com/problems/bitwise-and-of-numbers-range/?envType=daily-question&envId=2024-02-21
var rangeBitwiseAnd = function (left, right) {
  left = left.toString(2);
  right = right.toString(2);
  let combo = "";
  if (left.length > right.length) {
    right = "0".repeat(left.length - right.length) + right;
  }
  if (left.length < right.length) {
    right = "0".repeat(right.length - left.length) + left;
  }
  let flag = true;
  for (let i = 0; i < left.length; i++) {
    if (flag) {
      if (left[i] == right[i]) {
        combo += left[i];
      } else {
        combo += "0";
        flag = false;
      }
    } else {
      combo += "0";
    }
  }
  return parseInt(combo, 2);
};
