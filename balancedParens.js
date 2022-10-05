// Sample Strings
let sample1 = "This ( is unbalanced.";
let sample2 = "(This (is (a) balanced) string.)";
let sample3 = "This is () also ) unbalanced.";
let sample4 = "Balanced.";

// Write your solution below:
function balancedParens(str) {
  let result = false;
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      count++;
    }
    if (str[i] === ")") {
      count++;
    }
  }
  if (count % 2 === 0 && count > 0) {
    result = true;
  }
  return result;
}

console.log(balancedParens(sample1));
console.log(balancedParens(sample2));
console.log(balancedParens(sample3));
console.log(balancedParens(sample4));

