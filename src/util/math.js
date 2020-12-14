export function plusProcheMultiple(x, y) {
  return Math.round(x / y) * y
}

export function plusProcheMultipleSuivant(x, y) {
  return (Math.trunc(x / y) + 1) * y
}

export const gcd = (a, b) => (a ? gcd(b % a, a) : b)

export const lcm = (a, b) => (a * b) / gcd(a, b)

export function lcmArray(array) {
  // Least common multiple of a list of integers
  var n = 1
  for (var i = 0; i < array.length; ++i) n = lcm(array[i], n)
  return n
}

export const bigIntMax = (...args) => args.reduce((m, e) => (e > m ? e : m))
export const bigIntMin = (...args) => args.reduce((m, e) => (e < m ? e : m))

export function plusProcheMultipleSuivantBigInt(x, y) {
  return (x / y + 1n) * y
}

export function plusProcheMultipleBigInt(x, y) {
  return (x / y) * y
}

export function dec2bin(dec) {
  return (dec >>> 0).toString(2)
}

export function pad(n, width, z = "0") {
  n = n + ""
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n
}
