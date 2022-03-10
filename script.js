let greens = { 0: "L", 1: "A" };
let yellows = { 2: "S", 3: "E" };

let alphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let guess = [];
let yellowKeys = Object.keys(yellows);
console.log(yellowKeys);
let yellowValues = Object.values(yellows);

for (let i = 0; i < 5; i++) {
  if (greens[i]) {
    guess[i] = greens[i];
  } else {
    for (let j = 0; j < yellowKeys.length; j++) {
      if (parseInt(yellowKeys[j]) !== i) {
        guess[i] = yellowValues[j];
      }
    }
  }
}
console.log(guess);
