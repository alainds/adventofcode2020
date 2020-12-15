import { input } from "data/input13"
import {
  plusProcheMultipleSuivant,
  lcmArray,
  bigIntMax,
  plusProcheMultipleSuivantBigInt,
  plusProcheMultipleBigInt,
} from "util/math"

const dataBrut = input.split("\n")
const now = BigInt(dataBrut[0])
function result1() {
  const buses = getBuses()
  const nextBuses = buses
    .map((b) => b.id)
    .map((id) => {
      return { timestamp: plusProcheMultipleSuivantBigInt(now, id), id }
    })
    .sort((a, b) => Number(a.timestamp - b.timestamp))
  return Number((nextBuses[0].timestamp - now) * nextBuses[0].id)
}

function result2() {
  const buses = getBuses().map((a, j) => {
    return { id: j !== 0 ? -a.id : a.id, i: j !== 0 ? -a.i : a.i }
  })
  const resultatFinal = getResultatFinal(buses)
  // const resultatFinal = getCommonBus(buses)
  return resultatFinal
}

function getResultatFinal(buses) {
  let busesClone = [...buses]
  let resuEquaParticuliere
  let solPart = []
  do {
    let a = busesClone.slice(0, 2)[0].id
    let b = busesClone.slice(0, 2)[1].id
    let c = busesClone.slice(0, 2)[1].i

    // resuEquaParticuliere = getCommonBus(busesClone.slice(0, 2))
    resuEquaParticuliere = bezout(a, b, c)

    solPart.push({ x1: resuEquaParticuliere.x1, y1: resuEquaParticuliere.y1 })
    busesClone.splice(0, 2)
    if (busesClone.length) {
      const next = busesClone.splice(0, 1)
      const { a0, a1, y1 } = resuEquaParticuliere
      busesClone = [
        { id: a0 * a1, i: 0n },
        { id: next[0].id, i: -a0 * y1 + next[0].i },
        ...busesClone,
      ]
    }
  } while (busesClone.length >= 2)
  return solPart
}

function bezout(a, b, c) {
  let r1 = b
  let r2 = a
  let u1 = 1n
  let u2 = 0n
  let v1 = 0n
  let v2 = 1n
  while (r2 !== 0n) {
    const q = r1 / r2
    const rs = r1
    const us = u1
    const vs = v1
    r1 = r2
    u1 = u2
    v1 = v2
    r2 = rs - q * r2
    u2 = us - q * u2
    v2 = vs - q * v2
  }

  return { a0: a, a1: -b, x1: -u1 * c, y1: -v1 * c }
  // return { u: u1 * c, v: v1 * c }
}

export default function getResultats() {
  return [result1(), result2()]
}

function getBuses() {
  return dataBrut[1]
    .split(",")
    .map((a, i) => {
      return { id: a, i }
    })
    .filter((a) => a.id !== "x")
    .map((a) => {
      return { id: BigInt(a.id), i: BigInt(a.i) }
    })
}

function getBuses2() {
  return dataBrut[1]
    .split(",")
    .map((a, i) => {
      return { id: a, i }
    })
    .filter((a) => a.id !== "x")
    .map((a) => {
      return { id: BigInt(a.id), i: BigInt(a.i) }
    })
}
