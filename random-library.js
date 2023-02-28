// random library

// return a random decimal b/t low (inclusive) and return high (exclusive)
function randomDec(low, high) {
  return Math.random() * (high - low) + low;
}

// return a random integer b/t low (inclusive) and high (exclusive)
function randomInt(low, high) {
  return Math.floor(randomDec(low, high));
}

// return a random rgb color - 'rgb(_, _, _, )'
function randomRGB() {
  return `rgb(${randomInt(0, 256)}, ${randomInt(0, 256)}, ${randomInt(
    0,
    256
  )})`;
}
