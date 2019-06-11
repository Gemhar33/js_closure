// Challenge 1. Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];

// Your code here.
function flatten(arrays) {
  return arrays.reduce((acc, curr) => acc.concat(curr))
}
console.log(flatten(arrays));

// → [1, 2, 3, 4, 5, 6]

// Challenge 2. Your own loop
function loop(n, test, update, body){
  while(test(n)){
    body(n);
    n = update(n);
  }
}
// Your code here.

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

// Challenge 3. Everything
function every(array, test) {
  // Your code here.
  for(let i of array) {
    if(!test(i)){
      return false;
    }
  }
  return true;
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true


const SCRIPT = require('./model')

function characterScriptDirection(char) {
  let code = char.charCodeAt(0);
  for(let script of SCRIPT){
    if(script.ranges.some(([from, to]) => {
      return code>=from && code<to;
    })) {
      return script.direction;
    }
  }
  return null;
}


// Challenge 4. Dominant writing direction
function dominantDirection(text) {
  // Your code here.
  let dirObj = {}
  for(let char of text) {
    let dir = characterScriptDirection(char);
    if(dir){
      dir in dirObj ? dirObj[dir]++ : dirObj[dir] = 1;
    }
  }
  let domDir = ""
  for(let key in dirObj) {
    if(domDir) {
      domDir = dirObj[key] > dirObj[domDir]? key : domDir;
    } else {
      domDir = key;
    }
  }
  return domDir;
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
