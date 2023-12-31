// 2023_12_11 Leetcode Daily
// 1287. Element Appearing More Than 25% In Sorted Array
// https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/?envType=daily-question&envId=2023-12-11
var findSpecialInteger = function (arr) {
  const limit = arr.length / 4;
  let counts = {};
  for (const num of arr) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
    if (counts[num] > limit) {
      return num;
    }
  }
};

// https://leetcode.com/problems/transpose-matrix/?envType=daily-question&envId=2023-12-11
var transpose = function (matrix) {
  const length = matrix.length;
  const width = matrix[0].length;
  const result = [];
  for (let i = 0; i < width; i++) {
    result.push([]);
    for (let j = 0; j < length; j++) {
      result[i].push(matrix[j][i]);
    }
  }
  return result;
};

// https://leetcode.com/problems/construct-string-from-binary-tree/?envType=daily-question&envId=2023-12-11
var tree2str = function (root) {
  let left = "";
  let right = "";
  if (root.left) {
    left = `(${tree2str(root.left)})`;
  }
  if (root.right) {
    right = `(${tree2str(root.right)})`;
    if (!left) {
      left = "()";
    }
  }
  return `${root.val}${left}${right}`;
};

// https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/?envType=daily-question&envId=2023-12-11
var maxProduct = function (nums) {
  let max = 0;
  let secondMax = 0;
  for (const num of nums) {
    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num > secondMax) {
      secondMax = num;
    }
  }
  return (max - 1) * (secondMax - 1);
};

// https://leetcode.com/problems/largest-odd-number-in-string/submissions/?envType=daily-question&envId=2023-12-11

var largestOddNumber = function (num) {
  for (let i = num.length - 1; i >= 0; i--) {
    if (Number(num[i]) % 2) {
      return num.slice(0, i + 1);
    }
  }
  return "";
};

// https://leetcode.com/problems/calculate-money-in-leetcode-bank/?envType=daily-question&envId=2023-12-11
var totalMoney = function (n) {
  let total = 0;
  // value of day
  for (let i = 0; i < n; i++) {
    total += Math.floor(i / 7) + 1 + (i % 7);
  }
  return total;
};

var totalMoney2 = function (n) {
  return (
    Math.floor(n / 7) * 28 +
    sumRange(1, Math.floor(n / 7) - 1) * 7 +
    sumRange(1, n % 7) +
    (n % 7) * Math.floor(n / 7)
  );
};

const sumRange = (start, end) => {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};

// https://leetcode.com/problems/count-of-matches-in-tournament/?envType=daily-question&envId=2023-12-11
var numberOfMatches = function (n) {
  if (n === 1) {
    return 0;
  }
  if (n % 2) {
    return (n - 1) / 2 + numberOfMatches((n - 1) / 2 + 1);
  } else {
    return n / 2 + numberOfMatches(n / 2);
  }
};

// https://leetcode.com/problems/special-positions-in-a-binary-matrix/?envType=daily-question&envId=2023-12-11
var numSpecial = function (mat) {
  let specials = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1 && checkSpecial(mat, i, j)) {
        specials++;
      }
    }
  }
  return specials;
};

const checkSpecial = (mat, i, j) => {
  for (let k = 0; k < mat.length; k++) {
    if (k !== i && mat[k][j] === 1) {
      return false;
    }
  }
  for (let k = 0; k < mat[i].length; k++) {
    if (k !== j && mat[i][k] === 1) {
      return false;
    }
  }
  return true;
};

// https://leetcode.com/problems/largest-3-same-digit-number-in-string/?envType=daily-question&envId=2023-12-11
var largestGoodInteger = function (num) {
  let result = "";
  let digit;
  for (let i = 0; i < num.length - 2; i++) {
    if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
      if (digit === undefined) {
        digit = num[i];
        result = num.slice(i, i + 3);
      } else if (num[i] > digit) {
        digit = num[i];
        result = num.slice(i, i + 3);
      }
    }
  }
  return result;
};

// https://leetcode.com/problems/minimum-time-visiting-all-points/?envType=daily-question&envId=2023-12-11
var minTimeToVisitAllPoints = function (points) {
  let result = 0;
  for (let i = 0; i < points.length - 1; i++) {
    result += Math.max(
      Math.abs(points[i][0] - points[i + 1][0]),
      Math.abs(points[i][1] - points[i + 1][1])
    );
  }
  return result;
};

var checkXMatrix = function (grid) {
  for (let i = 0; i < grid.length; i++) {
    // Diagonals
    if (grid[i][i] == 0 || grid[i][grid.length - 1 - i] == 0) {
      return false;
    }
    for (let j = 0; j < grid[i].length; j++) {
      if (j == i || j == grid.length - 1 - i) {
        // Skip diagonals
        continue;
      } else if (grid[i][j] !== 0) {
        return false;
      }
    }
  }
  return true;
};

var checkXMatrix2 = function (grid) {
  // Moving diagonal check into the nested loop slows it down by a decent amount
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (j == i || j == grid.length - 1 - i) {
        if (grid[i][j] == 0) {
          return false;
        } else {
          continue;
        }
      } else if (grid[i][j] !== 0) {
        return false;
      }
    }
  }
  return true;
};

// https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/?envType=daily-question&envId=2023-12-11
var onesMinusZeros = function (grid) {
  let result = [];
  for (let i = 0; i < grid.length; i++) {
    let row = [];
    let rowTotal = grid[i].reduce(
      (acc, curr) => acc + (curr === 1 ? 1 : -1),
      0
    );
    for (let j = 0; j < grid[0].length; j++) {
      let columnTotal = grid.reduce(
        (acc, curr) => acc + (curr[j] === 1 ? 1 : -1),
        0
      );
      row.push(columnTotal + rowTotal);
    }
    result.push(row);
  }
  //  Need to make it faster for leetcode test, failing on a test case with a large number of single item rows
  return result;
};

var onesMinusZeros2 = function (grid) {
  // Faster and will do each row/column calculation only once, but still on the bottom 50% of submissions for time and space
  let result = [];
  let rows = [];
  let columns = [];
  for (let i = 0; i < grid.length; i++) {
    let rowTotal = grid[i].reduce(
      (acc, curr) => acc + (curr === 1 ? 1 : -1),
      0
    );
    rows.push(rowTotal);
  }
  for (let j = 0; j < grid[0].length; j++) {
    let columnTotal = grid.reduce(
      (acc, curr) => acc + (curr[j] === 1 ? 1 : -1),
      0
    );
    columns.push(columnTotal);
  }
  for (let i = 0; i < rows.length; i++) {
    let row = [];
    for (let j = 0; j < columns.length; j++) {
      row.push(rows[i] + columns[j]);
    }
    result.push(row);
  }
  return result;
};

// https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/?envType=daily-question&envId=2023-12-11
var countCharacters = function (words, chars) {
  // above avg memory, below avg speed
  let characters = {};
  for (const char of chars) {
    characters[char] = characters[char] ? characters[char] + 1 : 1;
  }
  let result = 0;
  for (const word of words) {
    let wordChars = { ...characters };
    let flag = true;
    for (const char of word) {
      if (wordChars[char]) {
        wordChars[char]--;
      } else {
        flag = false;
        break;
      }
    }
    if (flag) {
      result += word.length;
    }
  }
  return result;
};

// https://leetcode.com/problems/destination-city/?envType=daily-question&envId=2023-12-11
var destCity = function (paths) {
  let cities = {};
  for (const path of paths) {
    cities[path[0]] = cities[path[0]] ? cities[path[0]] + 1 : 1;
    cities[path[1]] = cities[path[1]] ? cities[path[1]] + 1 : 1;
  }
  for (const city of Object.keys(cities)) {
    if (cities[city] == 1) {
      for (let path of paths) {
        if (path[1] == city) {
          return city;
        }
      }
    }
  }
};
var destCity2 = function (paths) {
  let cities = {};
  for (const path of paths) {
    cities[path[0]] = path[1];
  }
  let currentLocation = paths[0][0];
  while (cities[currentLocation]) {
    currentLocation = cities[currentLocation];
  }
  return currentLocation;
};

// https://leetcode.com/problems/valid-anagram/?envType=daily-question&envId=2023-12-11
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let chars = {};
  for (const char of s) {
    chars[char] = chars[char] ? chars[char] + 1 : 1;
  }
  for (const char of t) {
    if (!chars[char]) {
      return false;
    }
    chars[char]--;
  }
  return true;
};

// https://leetcode.com/problems/design-a-food-rating-system/?envType=daily-question&envId=2023-12-17
// TODO: Make this faster
var FoodRatings = function (foods, cuisines, ratings) {
  this.foods = {};
  this.cuisines = {};
  for (let i = 0; i < foods.length; i++) {
    this.foods[foods[i]] = {
      cuisine: cuisines[i],
      rating: ratings[i],
    };
    this.cuisines[cuisines[i]]
      ? this.cuisines[cuisines[i]].push(foods[i])
      : (this.cuisines[cuisines[i]] = [foods[i]]);
  }
};
FoodRatings.prototype.changeRating = function (food, rating) {
  this.foods[food].rating = rating;
};
FoodRatings.prototype.highestRated = function (cuisine) {
  let highestRated = 0;
  let highestRatedFood = null;
  for (const food of this.cuisines[cuisine]) {
    if (this.foods[food].rating > highestRated) {
      highestRated = this.foods[food].rating;
      highestRatedFood = food;
    } else if (this.foods[food].rating == highestRated) {
      highestRatedFood = highestRatedFood < food ? highestRatedFood : food;
    }
  }
  return highestRatedFood;
};

// const test = new FoodRatings(
//   ["kimchi", "miso", "sushi", "moussaka", "ramen", "bulgogi"],
//   ["korean", "japanese", "japanese", "greek", "japanese", "korean"],
//   [9, 12, 8, 15, 14, 7]
// );
// console.log(test.foods.miso);
// test.changeRating("miso", 13);
// console.log(test.foods.miso);
// console.log(test.highestRated("korean"));

// https://leetcode.com/problems/maximum-product-difference-between-two-pairs/submissions/?envType=daily-question&envId=2023-12-17
var maxProductDifference = function (nums) {
  nums.sort((a, b) => a - b);
  return nums[nums.length - 1] * nums[nums.length - 2] - nums[0] * nums[1];
};

var macProductDifference2 = function (nums) {
  // A bit faster by avoiding a sort
  let max = 0;
  let secondMax = 0;
  let min = Infinity;
  let secondMin = Infinity;
  for (const num of nums) {
    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num > secondMax) {
      secondMax = num;
    }
    if (num < min) {
      secondMin = min;
      min = num;
    } else if (num < secondMin) {
      secondMin = num;
    }
  }
  return max * secondMax - min * secondMin;
};

// for (let i of "hello") {
//   console.log(i);
// }

// https://leetcode.com/problems/number-of-1-bits/?envType=daily-question&envId=2023-12-11
var hammingWeight = function (n) {
  let count = 0;
  while (n > 0) {
    if (n % 2) {
      count++;
    }
    n = Math.floor(n / 2);
  }
  return count;
};

// console.log(hammingWeight());

// https://leetcode.com/problems/image-smoother/?envType=daily-question&envId=2023-12-11
var imageSmoother = function (img) {
  let result = [];
  for (let i = 0; i < img.length; i++) {
    result.push([]);
    for (let j = 0; j < img[i].length; j++) {
      let sum = 0;
      let count = 0;
      console.log(i, j);
      for (
        let k = i - 1 > 0 ? i - 1 : 0;
        k < (i + 2 < img.length ? i + 2 : img.length);
        k++
      ) {
        for (
          let l = j - 1 > 0 ? j - 1 : 0;
          l < (j + 2 < img[i].length ? j + 2 : img[i].length);
          l++
        ) {
          sum += img[k][l];
          count++;
        }
      }
      result[i][j] = Math.floor(sum / count);
    }
  }
  return result;
};
// let matrix = imageSmoother([
//   [2, 3, 4],
//   [5, 6, 7],
//   [8, 9, 10],
//   [11, 12, 13],
//   [14, 15, 16],
// ]);
// for (const row of matrix) {
//   console.log(row);
// }

// https://leetcode.com/problems/knight-dialer/?envType=daily-question&envId=2023-12-11
let pattern = {
  0: [4, 6],
  1: [6, 8],
  2: [7, 9],
  3: [4, 8],
  4: [0, 3, 9],
  5: [],
  6: [0, 1, 7],
  7: [2, 6],
  8: [1, 3],
  9: [2, 4],
};
// TODO: needs to be faster
var knightDialer = function (n) {
  if (n === 1) {
    // includes the case of starting on 5
    return 10;
  }
  let result = 0;
  for (let number of [0, 1, 2, 3, 4, 6, 7, 8, 9]) {
    result += countPaths(n, number);
  }
  return result;
};

var countPaths = function (n, number) {
  if (n === 1) {
    return 1;
  }
  let result = 0;
  for (let nextNumber of pattern[number]) {
    result += countPaths(n - 1, nextNumber);
  }
  return result;
};

// https://leetcode.com/problems/buy-two-chocolates/submissions/?envType=daily-question&envId=2023-12-11
var buyChoco = function (prices, money) {
  let min = prices[0];
  let secondMin = 101;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      secondMin = min;
      min = prices[i];
    } else if (prices[i] < secondMin) {
      secondMin = prices[i];
    }
  }
  return min + secondMin <= money ? money - (min + secondMin) : money;
};

// https://leetcode.com/problems/shift-2d-grid/submissions/
var shiftGrid = function (grid, k) {
  let lenX = grid.length;
  let lenY = grid[0].length;
  grid = grid.flat();
  k = k % grid.length;
  grid = [...grid.splice(-k), ...grid];
  let result = [];
  for (let i = 0; i < lenX; i++) {
    result.push(grid.slice(i * lenY, (i + 1) * lenY));
  }
  return result;
};

var shiftGrid2 = function (grid, k) {
  let lenX = grid.length;
  let lenY = grid[0].length;
  grid = grid.flat();
  k = k % grid.length;
  grid = [...grid.splice(-k), ...grid];
  for (let i = 0; i < lenX; i++) {
    let temp = grid.splice(i, lenY);
    grid.splice(i, 0, temp);
  }
  return grid;
};

// https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/?envType=daily-question&envId=2023-12-21
var maxWidthOfVerticalArea = function (points) {
  points.sort((a, b) => a[0] - b[0]);
  let max = 0;
  for (let i = 1; i < points.length; i++) {
    max = Math.max(max, points[i][0] - points[i - 1][0]);
  }
  return max;
};

// https://leetcode.com/problems/maximum-score-after-splitting-a-string/?envType=daily-question&envId=2023-12-21
var maxScore = function (s) {
  let maxScore = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] === "0" && s[i] === "1") {
      let left = s.slice(0, i);
      let right = s.slice(i);
      let score = 0;
      for (const char of left) {
        if (char === "0") {
          score++;
        }
      }
      for (const char of right) {
        if (char === "1") {
          score++;
        }
      }
      if (score > maxScore) {
        maxScore = score;
      }
    } else if (i == 1 || i == s.length - 1) {
      let left = s.slice(0, i);
      let right = s.slice(i);
      let score = 0;
      for (const char of left) {
        if (char === "0") {
          score++;
        }
      }
      for (const char of right) {
        if (char === "1") {
          score++;
        }
      }
      if (score > maxScore) {
        maxScore = score;
      }
    }
  }
  return maxScore;
};

var maxScore2 = function (s) {
  let maxScore = 0;
  let left = 0;
  let right = 0;
  for (let i = 0; i < s.length; i++) {
    // count # of initial ones
    if (s[i] === "1") {
      right++;
    }
  }
  for (let i = 1; i < s.length; i++) {
    // traverse string again adjusting the counts of ones and zeros at given position
    if (s[i - 1] === "0") {
      left++;
    } else {
      right--;
    }
    if (left + right > maxScore) {
      maxScore = left + right;
    }
  }
  return maxScore;
};

// https://leetcode.com/problems/number-of-senior-citizens/submissions/
var countSeniors = function (details) {
  return details.reduce((a, b) => (b[11] + b[12] > 60 ? a + 1 : a), 0);
};

// https://leetcode.com/problems/check-if-a-string-can-break-another-string/submissions/
var checkIfCanBreak = function (s1, s2) {
  let allLarger = true;
  let allSmaller = true;
  s1 = s1.split("").sort();
  s2 = s2.split("").sort();
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] < s2[i]) {
      allLarger = false;
    }
    if (s1[i] > s2[i]) {
      allSmaller = false;
    }
    if (!allSmaller && !allLarger) {
      return false;
    }
  }
  return true;
};

// https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/?envType=daily-question&envId=2023-12-24
var minDifficulty = function (jobDifficulty, d) {
  if (jobDifficulty.length < d) {
    return -1;
  }
  jobDifficulty.sort((a, b) => b - a);
  return (
    jobDifficulty
      .slice(jobDifficulty.length - d, jobDifficulty.length - 1)
      .reduce((a, b) => a + b) + jobDifficulty[0]
  );
};

console.log(minDifficulty([11, 111, 22, 222, 33, 333, 44, 444], 6));

// https://leetcode.com/problems/minimum-time-to-make-rope-colorful/?envType=daily-question&envId=2023-12-24
var minCost = function (colors, neededTime) {
  let cost = 0;
  let colorCount = [];
  for (let i = 0; i < colors.length; i++) {
    if (colors[i] === colors[i + 1]) {
      colorCount.push(neededTime[i]);
      i++;
    } else {
    }
  }
};

const returnMinRemovalTime = (arr) => {
  let removalTime = 0;
  let min = Infinity;
  for (const num of arr) {
    if (num < min) {
      min = num;
    }
    removalTime += num;
  }
  return removalTime - min;
};
