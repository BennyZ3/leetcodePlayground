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
