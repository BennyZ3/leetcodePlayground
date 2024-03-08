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
  return Object.entries(counts).filter((entry) => entry[1] == max).length * max;
};
