const functions = require("./functions")

test("returnTwo is 2", () => {
  expect(functions.returnTwo()).toBe(2)
})

test("greeting greets", () => {
  expect(functions.greeting("James")).toBe("Hello, James.")
  expect(functions.greeting("Jill")).toBe("Hello, Jill.")
})

describe("math functions", () => {
  test("add returns dynamic stuff", () => {
    expect(functions.add(1, 2)).toEqual(3)
    expect(functions.add(5, 9)).toEqual(14)
  })

  test("subtract returns dynamic stuff", () => {
    expect(functions.subtract(1, 2)).toEqual(-1)
    expect(functions.subtract(5, 9)).toEqual(-4)
  })

  test("multiply returns dynamic stuff", () => {
    expect(functions.multiply(1, 2)).toEqual(2)
    expect(functions.multiply(5, 9)).toEqual(45)
  })

  test("divide returns dynamic stuff", () => {
    let actualResult = functions.divide(4, 2)
    let expectedResult = 2
    expect(actualResult).toEqual(expectedResult)

    actualResult = functions.divide(9, 3)
    expectedResult = 3
    expect(actualResult).toEqual(expectedResult)
  })
})
