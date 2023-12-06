// https://leetcode.com/problems/backspace-string-compare/
var backspaceCompare = function (s, t) {
  // Average runtime, somewhat high memory
  let strS = "";
  let strT = "";
  for (let letter of s) {
    letter === "#" ? (strS = strS.slice(0, -1)) : (strS += letter);
  }
  for (let letter of t) {
    letter === "#" ? (strT = strT.slice(0, -1)) : (strT += letter);
  }
  return strS === strT;
};

// https://leetcode.com/problems/make-the-string-great/
let letters = {
  A: "a",
  B: "b",
  C: "c",
  D: "d",
  E: "e",
  F: "f",
  G: "g",
  H: "h",
  I: "i",
  J: "j",
  K: "k",
  L: "l",
  M: "m",
  N: "n",
  O: "o",
  P: "p",
  Q: "q",
  R: "r",
  S: "s",
  T: "t",
  U: "u",
  V: "v",
  W: "w",
  X: "x",
  Y: "y",
  Z: "z",
};

var makeGood = function (s) {
  let changes = false;
  for (let i = 0, len = s.length; i < len; i++) {
    if (Object.keys(letters).includes(s[i]) && s[i - 1] === letters[s[i]]) {
      s = s.slice(0, i - 1) + s.slice(i + 1);
      changes = true;
    } else if (
      Object.keys(letters).includes(s[i]) &&
      s[i + 1] === letters[s[i]]
    ) {
      s = s.slice(0, i) + s.slice(i + 2);
      changes = true;
    }
  }
  return changes ? makeGood(s) : s;
};
var makeGood2 = function (s) {
  // stack performs about 15-40% faster, and saves ~10% on memory as well
  let result = "";
  for (let char of s) {
    if (result.length == 0) {
      result = char;
    } else {
      if (
        char.toLowerCase() == result[result.length - 1].toLowerCase() &&
        char != result[result.length - 1]
      ) {
        result = result.slice(0, result.length - 1);
      } else {
        result += char;
      }
    }
  }
  return result;
};

// https://leetcode.com/problems/valid-parentheses/
var isValid = function (s) {
  const brackets = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  const stack = [];
  for (const item of s) {
    if (["(", "[", "{"].includes(item)) {
      stack.push(item);
    } else if (stack[stack.length - 1] === brackets[item]) {
      // check if the last item in the stack is the opening bracket for the current item
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length ? false : true;
};

// https://leetcode.com/problems/simplify-path/
