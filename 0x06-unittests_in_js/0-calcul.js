function calculateNumber(a, b) {
  return Math.round(a) + Math.round(b);
}

module.exports = calculateNumber

// execute func
let r = calculateNumber(1.7, 0)
console.log(r)