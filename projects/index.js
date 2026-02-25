const arr = [2, 2, 2, 2, 2]
arr.reduce((acc, crr) => {
  const sum = acc + crr
  console.log(sum)
  return sum
},0)