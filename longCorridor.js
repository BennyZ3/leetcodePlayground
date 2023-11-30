// https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor/?envType=daily-question&envId=2023-11-28
/**
 * @param {string} corridor
 * @return {number}
 */
// first pass, High memory usage, average speed
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
    if (strings[i] == "SS") {
      if (result == 0) result = 1;
      continue;
    }
    for (let j = 0; j < strings[i].length; j++) {
      if (strings[i][j] === "P") {
        count++;
      } else {
        break;
      }
    }
    result = (result == 0 ? count + 1 : result * (count + 1)) % (10 ** 9 + 7);
  }
  return result % (10 ** 9 + 7);
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
// console.log(numberOfWays("S") == 0);

// console.log(numberOfWays("SSPPSPS") == 3);

// console.log(numberOfWays("SPPSSSSPPS") == 1);

// console.log(
//   numberOfWays(
//     "PPPPPSPPSPPSPPPSPPPPSPPPPSPPPPSPPSPPPSPSPPPSPSPPPSPSPPPSPSPPPPSPPPPSPPPSPPSPPPPSPSPPPPSPSPPPPSPSPPPSPPSPPPPSPSPSS"
//   )== 919999993
// );

// console.log(
//   "Expected 596333475",
//   numberOfWays(
//     "SSSSPPPPPSSPSPSSPPPPPPSPSPSSPPPSPSPSPSSPPPSSSSPSSPSPSPSSSSPPSSPSSSSSSPPPSPSSPPSSPSPSPSSPSSSSSSPSSSPSSSPSSPSSPPPSSPSSPPSSSPSSPSPSSSSPSPPSSPSSPPSSPPSPSPPPSPSPPSPPSPSPPPPPPPPSPSSSPPSPSSPSSSSPPSPSPPPPSPPSSPSPSSPSSPSPPPPPPSSPSPPPPSSPSPPPPPSSSSPSSSSSPPSPPPSPSSPPSPSPSSSSPPPSPPSSSPSPPSSSSSSSSPSSSSPSPSSSPSPPPPPSPSPSPPPSSSPSSPSPSSSPPPPSSPSPSSSSPSSSSSPPSPSSSSPSSSSSSPPPSSPPPPPPSPSSSPPSPPSSSPPPSSPPPSPPSSPPSPSSSSSSPPSSSPPSPSPSPPSPSSPPSPSSPSPPSPSPPSSPSSPPSPPSPSPPSPPSSSSPSPPPSSPPSSPPPSPPSSPSPPSPSPSSPSPPSSSPPSSSPSSPSPPSPSPSPSPSPSSPPPSPSSSSSPPSPSSSPSSSPSSSSSSPSPPPPPPPSSPPSPPSPPSPSSSSPSSSPPPPSPSSPSSPSSPPSSSSPPSPSPSPPPSSSPSPSSPPSSSPPSSPSPPPPPSSSPPSSPSPPPSSSPPPPPSPPPPPSPSPSSSPPSPSSPPSPPSSSPSSSPPSSPPSPSSSPSPPSSSSPSPPSSSPSSPSPPPSPPPSPSSPSPPSSSPPSPSSPSPPPPSSSPSSPPSPSPSPSPSSSPSPSPPPPSSSSSSPPPPPPSPPPSPSPPSPSPPSPPPPPSSSPSPPPSPPSPSPPSSSPPSPSSPPPPPSSPPPPPSSPSSPPSPSPSSSPPPSSSSPPPSPPPPSSSPSPPPSPPPSPPSPSSSPPPPPSSSSPPPPSSSSPSPSPSPPSPSPPSPSPSPSSPPPSSPPPPPSSPSPPPPPPSSPSSPSPSSPPSPPSSSPPSPSSSSSSSSSSSPSSPSPSPPPSPSPPPPSPSSSPPPSSPSPSSSSPSPPPSPSPPSPSPPPSPSPPSSSPSPPSSSPPPPPPSPPSSPPPPSPPPPPSPPPPPSPSPSSPPPSPSSSSSPSSSSPPPSSSPPSPPPPPSSPSSSPSPSPSSSPPSSPSPSPPSSPSPSPSPSPPSSSSPPPSSPPPSSSPPSPSPPPPSPSPSPPPSSPSSPSSPPPPSSSPPPPSSSPPPPPPSPSSSPSSPSPSSSSPSPSPSPPSPSSSPPSSSSSPSSPPPPSSSSPPPSPSSPPSPSSPPPPPPPSSPSPPPSSPPPPSSSSSSPSPPPSPPSSSPSPSSSPSSPSSSSSPSSPSPSSPSSPPSSSSPPSPSSPPSSSPSPPSSSPSSPSSSPSPSPPSSPPPPSSPSPSPPSPPPPPSPSSSPPSPPPPSSPPSPSPSSPSPSPSSPPPPPPSSSPPPPSPSPPSSPSPSSSPSSPPPPSPSSSSPPSPPSSSPPSPPPSSPSPSPPPSPSSSSSPPSPSPPPSSPPPSSSPPSSSPPSPSSPPSSSPPSPPPPPPSSSPSSPSSPSPPPSPSPPPSPSSPSSSSSSSSPPPSSSSPPSSSPSSSPSSPPPSSPSPPPPPPPPSSPPSPPPSPPPSSPSSPPPPPSSSSPPSSPPPPSS"
//   )
// );

// Note: Core is caring about sets of 2 S's, and the spaces between them
// Base cases: Uneven number of S => 0, SS => 1, 0 or 1 S => 0

const numberOfWays2 = function (corridor) {
  //   cut out 2 for loops and saves about 1/4 of the memory used in the previous solution
  let result = 1;
  let seatIndices = [];
  for (let i = 0; i < corridor.length; i++) {
    if (corridor[i] === "S") {
      seatIndices.push(i);
    }
  }
  if (seatIndices.length == 2) return 1;
  if (seatIndices.length < 2 || seatIndices.length % 2 != 0) return 0;
  for (let i = 1; i < seatIndices.length - 1; i += 2) {
    result = (result * (seatIndices[i + 1] - seatIndices[i])) % (10 ** 9 + 7);
  }
  return result;
};

console.log(numberOfWays2("S") == 0);

console.log(numberOfWays2("SSPPSPS") == 3);

console.log(numberOfWays2("SPPSSSSPPS") == 1);

console.log(
  numberOfWays2(
    "PPPPPSPPSPPSPPPSPPPPSPPPPSPPPPSPPSPPPSPSPPPSPSPPPSPSPPPSPSPPPPSPPPPSPPPSPPSPPPPSPSPPPPSPSPPPPSPSPPPSPPSPPPPSPSPSS"
  ) == 919999993
);
