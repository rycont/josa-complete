const {default: {getSubjectiveSuffix}} = require('./dist')

// console.log(getter)

test("종이 is 종이를", () => {
  expect("종이".을를).toBe("종이를")
})

test("장미칼 is 장미칼을", () => {
  expect("장미칼".을를).toBe("장미칼을")
})

test("시계 is 시계는", () => expect("시계".은는).toBe("시계는"))
test("컵 is 컵은", () => expect("컵".은는).toBe("컵은"))
test("NodeJS is NodeJS는", () => expect("NodeJS".은는).toBe("NodeJS는"))
test("Subjective Suffix of 마우스 is 는", () => expect(getSubjectiveSuffix("마우스")).toBe("는"))