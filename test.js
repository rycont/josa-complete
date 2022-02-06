const { get은는, get이가, get으로, get을를, get와과 } = require("./dist");

test("종이 is 종이를", () => expect("종이".을를).toBe("종이를"));
test("장미칼 is 장미칼을", () => expect("장미칼".을를).toBe("장미칼을"));
test("시계 is 시계는", () => expect("시계".은는).toBe("시계는"));
test("컵 is 컵은", () => expect("컵".은는).toBe("컵은"));
test("집 is 집으로", () => expect("집".으로).toBe("집으로"));
test("안정실 is 안정실로", () => expect("안정실".으로).toBe("안정실로"));
test("NodeJS is NodeJS는", () => expect("NodeJS".은는).toBe("NodeJS는"));
test("조명 is 조명과", () => expect("조명".와과).toBe("조명과"));
test("파일 is 파일이", () => expect("파일".이가).toBe("파일이"));
test("Subjective Suffix of 마우스 is 는", () =>
  expect(get은는("마우스")).toBe("는"));
test("Subjective Suffix2 of 마우스 is 가", () =>
  expect(get이가("마우스")).toBe("가"));
test("Adverbal Suffix1 of 마우스 is 로", () =>
  expect(get으로("마우스")).toBe("로"));
test("Objective Suffix of 마우스 is 를", () =>
  expect(get을를("마우스")).toBe("를"));
test("Objective Suffix2 of 마우스 is 를", () =>
  expect(get와과("마우스")).toBe("와"));
