function operation() {
  const [operation, ...rest] = arguments 

  const sum = rest.reduce((cumul, number) => (
    cumul + number
  ))

  if (operation === "add") {
    return sum
  } else if (operation === "average") {
    return sum / rest.length
  }
}




const testData = [
  { input: ["add", 1,2,3,4,5],
    expected: 15
  },
  { input: ["average", 1,2,3,4,5],
    expected: 3
  },
  { input: ["add", 1,-2,-3,4,5],
    expected: 5
  },
  { input: ["average", 1,-2,-3,4,5],
    expected: 1
  }
]

let errorCount = 0

testData.forEach(data => {
  const { input, expected } = data
  const result = operation(...input)

  if (result !== expected) {
    errorCount += 1
    console.log(
      "ERROR input:", input,
      "expected:", expected,
      "received", result
    );
    
  }
})

if (!errorCount) {
  console.log("All tests passed")
}