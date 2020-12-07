import { input } from "data/input7"
// import {} from "util/array"

const reponsesBrut = input
  .split("\n")
  .map((a) =>
    a
      .replace("bags", "")
      .replace("contain", "")
      .replace("bags", "")
      .replace(".", "")
      .replace(",", "")
      .replace("no other", "0")
  )

function result1() {
  return reponsesBrut.length
}

function result2() {
  return
}

export default function getResultats() {
  return [result1(), result2()]
}
