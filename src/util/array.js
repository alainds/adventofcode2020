export const transformData = (mydata) => {
  const regexp = new RegExp("(.*)-(.*) (.*): (.*)")
  return mydata.map((i) => {
    const regex = regexp.exec(i)
    return { min: regex[1], max: regex[2], lettre: regex[3], pass: regex[4] }
  })
}

export const reducerSum = (accumulator, currentValue) =>
  accumulator + currentValue
export const reducerAnd = (accumulator, currentValue) =>
  accumulator && currentValue
export const reducerMultiply = (accumulator, currentValue) =>
  accumulator * currentValue
export const repeteData = (data, nRep) => {
  let newData = [...data]
  let i = 0
  while (i < nRep) {
    newData = newData.map((row, index) => row.concat(data[index]))
    i++
  }
  return newData
}

export const intersectArray = (array1, array2) =>
  array1.filter((value) => array2.includes(value))

export function getNbOccurrence(array, value) {
  return array.filter((v) => v === value).length
}
