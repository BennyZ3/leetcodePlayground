class LinkedList {
  constructor(value) {
    this.head = { value: value, next: null };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.showList();
  }

  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.showList();
  }

  showList() {
    return JSON.stringify(this);
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// const classLinekdList = new LinkedList(10);
// console.log(classLinekdList.showList());
// classLinekdList.append(5);
// console.log(classLinekdList.showList());
// classLinekdList.prepend(1);
// console.log(classLinekdList.showList());

// 'asdf'.to

let arr = [1, 2, 3, 4, 5, 6];
var sum = function (array) {
  //   array = array.slice();
  console.log(array);
  if (array.length == 0) {
    return 0;
  } else {
    // console.log(array);
    return array.pop() + sum(array);
  }
};

// console.log(sum(arr));

function isEven(num) {
  // account for decimals and negatives?
  num = Math.abs(Math.round(num));
  if (num == 0) {
    return true;
  } else if (num == 1) {
    return false;
  } else {
    return isEven(num - 2);
  }
}

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
  console.log(nums);
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

const checkPalindrome1 = (str) => {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

const checkPalindrome = (str) => {
  // w/ pointers
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

// const start2 = performance.now();
// for (let i = 0; i < 10000; i++) {
//   checkPalindrome1("racecar");
//   checkPalindrome1("racecara");
// }
// const end2 = performance.now();
// console.log(`Execution time: ${end2 - start2} ms`);

// const start = performance.now();
// for (let i = 0; i < 10000; i++) {
//   checkPalindrome("racecar");
//   checkPalindrome("racecara");
// }
// const end = performance.now();
// console.log(`Execution time: ${end - start} ms`);
