// https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor/?envType=daily-question&envId=2023-11-28
/**
 * @param {string} corridor
 * @return {number}
 */
const numberOfWays = function (corridor) {
  let result = 0;
  let count = 0;
  for (let i = 0; i < corridor.length; i++) {
    if (corridor[i] === "S") {
      count++;
    }
  }
  if (count == 2) return 1;
  if (count < 2 || count % 2 != 0) return 0;
  let strings = stringSplitter(corridor);
  for (let i = 1; i < strings.length; i++) {
    let count = 0;
    if (strings[i] == "SS") continue;
    for (let j = 0; j < strings[i].length; j++) {
      if (strings[i][j] === "P") {
        count++;
      } else {
        break;
      }
    }
    result = result == 0 ? count + 1 : result * (count + 1);
  }
  return result;
};

const stringSplitter = function (string) {
  const result = [];
  let count = 0;
  let substring = "";
  for (let i = 0; i < string.length; i++) {
    substring += string[i];
    if (string[i] === "S") {
      count++;
      if (count == 2) {
        result.push(substring);
        substring = "";
        count = 0;
      }
    }
  }
  return result;
};
// console.log("No ways ", numberOfWays("S") == 0);

// console.log("Expected 3 ways ", numberOfWays("SSPPSPS") == 3);

// console.log("SPPSSSSPPS", numberOfWays("SPPSSSSPPS") == 1);

console.log(
  "expected 919999993",
  numberOfWays(
    "PPPPPSPPSPPSPPPSPPPPSPPPPSPPPPSPPSPPPSPSPPPSPSPPPSPSPPPSPSPPPPSPPPPSPPPSPPSPPPPSPSPPPPSPSPPPPSPSPPPSPPSPPPPSPSPSS"
  )
);
// "PPPPPSPPS, PPSPPPS, PPPPSPPPPS, PPPPSPPS, PPPSPS, PPPSPS, PPPSPS, PPPSPS, PPPPSPPPPS, PPPSPPS, PPPPSPS, PPPPSPS, PPPPSPS, PPPSPPS, PPPPSPS, PSS"
// 3, 5, 5, 4, 4, 4, 4, 5, 4, 5, 5, 5, 4, 5, 2
