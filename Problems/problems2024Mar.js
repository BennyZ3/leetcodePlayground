// https://leetcode.com/problems/maximum-odd-binary-number/?envType=daily-question&envId=2024-03-01
var maximumOddBinaryNumber = function (s) {
  let countOnes = 0;
  s.split("").forEach((num) => {
    if (num == "1") {
      countOnes++;
    }
  });
  return "1".repeat(countOnes - 1) + "0".repeat(s.length - countOnes) + "1";
};

// https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/
var getNoZeroIntegers = function (n) {
  let i = 1;
  while (i < n) {
    if (!i.toString().includes("0") && !(n - i).toString().includes("0")) {
      return [i, n - i];
    }
    i++;
  }
};

// https://leetcode.com/problems/squares-of-a-sorted-array/?envType=daily-question&envId=2024-03-02
var sortedSquares = function (nums) {
  return nums.map((num) => Math.pow(num, 2)).sort((a, b) => a - b);
};

// https://leetcode.com/problems/merge-sorted-array/
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, n, ...nums2);
  return nums1.sort((a, b) => a - b);
};

// https://leetcode.com/problems/remove-nth-node-from-end-of-list/?envType=daily-question&envId=2024-03-03
var removeNthFromEnd = function (head, n) {
  let listLen = 0;
  let pos = head;
  while (pos) {
    listLen++;
    pos = pos.next;
  }
  pos = head;
  let currentIndex = 1;
  while (currentIndex < listLen - n) {
    pos = pos.next;
    currentIndex++;
  }
  if (listLen <= 1) {
    return null;
  }
  if (listLen == n) {
    head = head.next;
  } else {
    let temp = pos.next;
    temp = temp.next;
    pos.next = temp;
  }
  return head;
};

// https://leetcode.com/problems/bag-of-tokens/?envType=daily-question&envId=2024-03-04
var bagOfTokensScore = function (tokens, power) {
  let highScore = 0;
  let currentScore = 0;
  tokens.sort((a, b) => a - b);
  while (tokens.length) {
    if (tokens[0] <= power) {
      power -= tokens.shift();
      currentScore++;
      if (currentScore > highScore) {
        highScore = currentScore;
      }
    } else {
      power += tokens.pop();
      currentScore--;
      if (currentScore < 0) {
        break;
      }
    }
  }
  return highScore;
};

// https://leetcode.com/problems/intersection-of-multiple-arrays/
var intersection = function (nums) {
  if (nums.length == 1) {
    return nums[0].sort((a, b) => a - b);
  }
  let intersect = {};
  let result = [];
  for (let num of nums[0]) {
    intersect[num] = 1;
  }
  for (let i = 1; i < nums.length; i++) {
    for (let num of nums[i]) {
      if (intersect[num] == i) {
        intersect[num] = i + 1;
        if (intersect[num] == nums.length) {
          result.push(num);
        }
      }
    }
  }
  return result.sort((a, b) => a - b);
};

// https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/?envType=daily-question&envId=2024-03-05
var minimumLength = function (s) {
  s = s.split("");
  while (s[0] == s[s.length - 1] && s.length > 1) {
    let char = s[0];
    while (s[0] == char) {
      s.shift();
    }
    while (s[s.length - 1] == char) {
      s.pop();
    }
  }
  return s.length;
};

var minimumLength2 = function (s) {
  // faster by not constantly mutating the array
  s = s.split("");
  let left = 0;
  let right = s.length - 1;
  let len = s.length;
  while (s[left] == s[right] && len > 1) {
    let char = s[left];
    while (s[left] == char) {
      left++;
      len--;
    }
    while (s[right] == char && right > left) {
      right--;
      len--;
    }
  }
  return len;
};

// https://leetcode.com/problems/linked-list-cycle/?envType=daily-question&envId=2024-03-06
var hasCycle = function (head) {
  if (!head) {
    return false;
  }
  let slow = head;
  let fast = head;
  while (slow != null && fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
      return true;
    }
  }
  return false;
};

// https://leetcode.com/problems/middle-of-the-linked-list/?envType=daily-question&envId=2024-03-07
var middleNode = function (head) {
  let slow = head;
  let fast = head;
  while (slow.next) {
    if (!fast) {
      return slow;
    }
    fast = fast.next;
    if (!fast) {
      return slow;
    }
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
};

// https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/
var deleteMiddle = function (head) {
  if (head.next == null) {
    return null;
  }
  let slow = head;
  let fast = head;
  let first = true;
  while (slow.next) {
    if (!fast) {
      slow.next = slow.next.next;
      return head;
    }
    fast = fast.next;
    if (!fast) {
      slow.next = slow.next.next;
      return head;
    }
    if (first) {
      first = false;
    } else {
      slow = slow.next;
    }
    fast = fast.next;
  }
  return head;
};

// https://leetcode.com/problems/count-elements-with-maximum-frequency/?envType=daily-question&envId=2024-03-08
var maxFrequencyElements = function (nums) {
  let counts = {};
  let max = 0;
  for (let num of nums) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
    if (counts[num] > max) {
      max = counts[num];
    }
  }
  return Object.values(counts).filter((entry) => entry == max).length * max;
};

// https://leetcode.com/problems/longest-substring-without-repeating-characters/
var lengthOfLongestSubstring = function (s) {
  if (!s.length) {
    return 0;
  }
  let longest = 1;
  let left = 0;
  let right = 0;
  let letters = {};
  while (right < s.length) {
    if (!letters[s[right]]) {
      letters[s[right]] = 1;
      if (right - left + 1 > longest) {
        longest = right - left + 1;
      }
    } else {
      letters[s[right]] = letters[s[right]] + 1;
      while (letters[s[right]] > 1 && left < right) {
        letters[s[left]] = letters[s[left]] - 1;
        left++;
      }
    }
    right++;
  }
  return longest;
};

// https://leetcode.com/problems/minimum-common-value/?envType=daily-question&envId=2024-03-09
var getCommon = function (nums1, nums2) {
  let first = 0;
  let second = 0;
  while (first < nums1.length && second < nums2.length) {
    if (nums1[first] == nums2[second]) {
      return nums1[first];
    } else if (nums1[first] < nums2[second]) {
      first++;
    } else {
      second++;
    }
  }
  return -1;
};

// https://leetcode.com/problems/custom-sort-string/?envType=daily-question&envId=2024-03-11
var customSortString = function (order, s) {
  let letterOrder = {};
  for (let i = 0; i < order.length; i++) {
    letterOrder[order[i]] = i + 1;
  }
  for (let char of s) {
    if (!letterOrder[char]) {
      letterOrder[char] = 32;
    }
  }
  s = s.split("");
  s.sort((a, b) => (letterOrder[a] < letterOrder[b] ? -1 : 1));
  return s.join("");
};

// https://leetcode.com/problems/sort-the-students-by-their-kth-score/
var sortTheStudents = function (score, k) {
  return score.sort((a, b) => b[k] - a[k]);
};

// https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/?envType=daily-question&envId=2024-03-12
var removeZeroSumSublists = function (head) {
  let negativeNode = new ListNode(0);
  negativeNode.next = head;
  let current = negativeNode;
  let sum = 0;
  let sums = {};
  while (current) {
    sum += current.val;
    sums[sum] = current;
    current = current.next;
  }
  sum = 0;
  current = negativeNode;
  while (current) {
    sum += current.val;
    current.next = sums[sum].next;
    current = current.next;
  }
  return negativeNode.next;
};

// https://leetcode.com/problems/find-the-pivot-integer/?envType=daily-question&envId=2024-03-13
var pivotInteger = function (n) {
  let total = (1 + n) * (n / 2);
  let reduction = total;
  let k = n;
  while (reduction > total / 2) {
    if (total - reduction == reduction - k) {
      return k;
    }
    reduction -= k;
    k--;
  }
  return -1;
};

// https://leetcode.com/problems/bulb-switcher/
var bulbSwitch = function (n) {
  return Math.floor(Math.pow(n, 0.5));
};

// https://leetcode.com/problems/binary-subarrays-with-sum/?envType=daily-question&envId=2024-03-14
var numSubarraysWithSum = function (nums, goal) {
  let count = 0;
  let sum = 0;
  let sums = { 0: 1 };
  for (let num of nums) {
    sum += num;
    count += sums[sum - goal] || 0;
    sums[sum] = (sums[sum] || 0) + 1;
  }
  return count;
};

// https://leetcode.com/problems/product-of-array-except-self/?envType=daily-question&envId=2024-03-15
var productExceptSelf = function (nums) {
  let result = [];
  let mults = {};
  let left = 1;
  let right = 1;
  for (let i = 0; i < nums.length; i++) {
    mults[i] = [1, 1];
  }
  for (let i = 0; i < nums.length; i++) {
    mults[i][0] = left;
    mults[nums.length - i - 1][1] = right;
    left *= nums[i];
    right *= nums[nums.length - i - 1];
  }
  for (let i = 0; i < nums.length; i++) {
    result.push(mults[i][0] * mults[i][1]);
  }
  return result;
};

// https://leetcode.com/problems/maximum-gap/
var maximumGap = function (nums) {
  let set = [...new Set(nums)].sort((a, b) => a - b);
  let result = 0;
  for (let i = nums.length - 1; i > 0; i--) {
    let diff = set[i] - set[i - 1];
    if (diff > result) {
      result = diff;
    }
  }
  return result;
};

// https://leetcode.com/problems/longest-palindromic-substring/
var longestPalindrome = function (s) {
  let longest = s[0];
  let len = 0;
  for (let i = 0; i < s.length - 1; i++) {
    if (s.length - i < len) {
      break;
    }
    for (let j = s.length - 1; j > i; j--) {
      if (j - i < len) {
        break;
      }
      if (s[i] == s[j]) {
        let base = s.substring(i, j + 1);
        if (isPalindrome(base)) {
          longest = base;
          len = base.length;
        }
      }
    }
  }
  return longest;
};

function isPalindrome(s, start = 0, end = s.length - 1) {
  while (start < end) {
    if (s[start++] !== s[end--]) {
      return false;
    }
  }
  return true;
}

// https://leetcode.com/problems/contiguous-array/submissions/1205602609/?envType=daily-question&envId=2024-03-16
var findMaxLength = function (nums) {
  let counts = new Map();
  counts.set(0, -1);
  let max = 0;
  let diff = 0;
  for (let i = 0; i < nums.length; i++) {
    diff += nums[i] == 1 ? 1 : -1;
    if (counts.has(diff)) {
      max = Math.max(max, i - counts.get(diff));
    } else {
      counts.set(diff, i);
    }
  }

  return max;
};

// overly complex first attempt adjusting based on new test cases
var insert = function (intervals, newInterval) {
  if (intervals.length == 0) {
    return [newInterval];
  }
  if (newInterval[1] <= intervals[0][0]) {
    if (newInterval[1] == intervals[0][0]) {
      intervals[0][0] = newInterval[0];
    } else {
      intervals.unshift(newInterval);
    }
    return intervals;
  }
  for (let i = 0; i < intervals.length; i++) {
    if (newInterval[0] < intervals[i][0]) {
      if (
        newInterval[1] > intervals[i][0] &&
        newInterval[1] <= intervals[i][1]
      ) {
        intervals[i][0] = newInterval[0];
      }
      if (newInterval[1] > intervals[i][1]) {
        intervals[i][1] = newInterval[1];
      }
    }
    if (
      newInterval[0] >= intervals[i][0] &&
      newInterval[0] <= intervals[i][1]
    ) {
      if (newInterval[1] >= intervals[i][1]) {
        intervals[i][1] = newInterval[1];
      }
    }
    if (intervals[i][0] > newInterval[0] && intervals[i][0] <= newInterval[1]) {
      intervals[i][0] = newInterval[0];
    }
    if (
      intervals[i + 1] &&
      intervals[i][1] < newInterval[0] &&
      intervals[i + 1][0] > newInterval[1]
    ) {
      intervals.splice(i + 1, 0, newInterval);
    } else if (!intervals[i + 1] && intervals[i][1] < newInterval[0]) {
      intervals.splice(i + 1, 0, newInterval);
    }

    while (intervals[i + 1] && intervals[i][1] >= intervals[i + 1][0]) {
      if (intervals[i][i] >= intervals[i + 1][1]) {
        intervals.splice(i + 1, 1);
      } else {
        intervals[i][1] = intervals[i + 1][1];
        intervals.splice(i + 1, 1);
      }
    }
  }
  return intervals;
};

// https://leetcode.com/problems/insert-interval/?envType=daily-question&envId=2024-03-17
var insert = function (intervals, newInterval) {
  let result = [];
  let i = 0;
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  result.push(newInterval);
  while (i < intervals.length) {
    result.push(intervals[i]);
    i++;
  }
  return result;
};

// https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/?envType=daily-question&envId=2024-03-18
var findMinArrowShots = function (points) {
  points.sort((a, b) => {
    if (a[1] == b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });
  let count = 0;
  let current = -Infinity;
  for (let i = 0; i < points.length; i++) {
    if (current >= points[i][0] && current <= points[i][1]) {
      continue;
    }
    if (points[i + 1] && points[i][1] > points[i + 1][1]) {
      current = points[i + 1][1];
    } else {
      current = points[i][1];
    }
    count++;
  }
  return count;
};

// https://leetcode.com/problems/task-scheduler/?envType=daily-question&envId=2024-03-19
var leastInterval = function (tasks, n) {
  let highestCount = 0;
  let taskCount = {};
  for (let task of tasks) {
    taskCount[task] = taskCount[task] ? taskCount[task] + 1 : 1;
    if (taskCount[task] > highestCount) {
      highestCount = taskCount[task];
    }
  }
  let numHighest = Object.values(taskCount).filter(
    (a) => a == highestCount
  ).length;
  let result = highestCount + (highestCount - 1) * n + numHighest - 1;
  return result < tasks.length ? tasks.length : result;
};

// https://leetcode.com/problems/merge-in-between-linked-lists/?envType=daily-question&envId=2024-03-20
var mergeInBetween = function (list1, a, b, list2) {
  let left;
  let right;
  let pointer1 = list1;
  let i = 0;
  while (!left || !right) {
    if (i == a - 1) {
      left = pointer1;
    }
    if (i == b) {
      right = pointer1.next;
    }
    pointer1 = pointer1.next;
    i++;
  }
  let pointer2 = list2;
  let endFlag = true;
  while (endFlag) {
    if (!pointer2.next) {
      endFlag = false;
      pointer2.next = right;
    }
    pointer2 = pointer2.next;
  }
  left.next = list2;
  return list1;
};

// https://leetcode.com/problems/reverse-linked-list/?envType=daily-question&envId=2024-03-21
var reverseList = function (head) {
  if (!head) {
    return head;
  }
  let i = 0;
  let map = {};
  let pointer = head;
  while (pointer) {
    map[i] = pointer;
    i++;
    pointer = pointer.next;
  }
  let newHead = map[i - 1];
  map[0].next = null;
  for (let j = 1; j < i; j++) {
    map[j].next = map[j - 1];
  }
  return newHead;
};

// Redone with one pass through
var reverseList = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let left = head;
  let center = head.next;
  let right = center ? center.next : null;
  left.next = null;
  while (right) {
    center.next = left;
    left = center;
    center = right;
    right = right.next;
  }
  if (!right) {
    center.next = left;
  }
  return center;
};

// https://leetcode.com/problems/palindrome-linked-list/?envType=daily-question&envId=2024-03-22
var isPalindrome = function (head) {
  let values = [];
  let pointer = head;
  while (pointer) {
    values.push(pointer.val);
    pointer = pointer.next;
  }
  for (let i = 0; i < values.length / 2; i++) {
    if (values[i] != values[values.length - i - 1]) {
      return false;
    }
  }
  return true;
};
