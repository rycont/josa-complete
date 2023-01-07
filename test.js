const { get은는, get이가, get으로, get을를, get와과 } = require("./dist");
const cases = require('jest-in-case');

const { 을를, 은는, 으로, 와과, 이가 } =
  Object.fromEntries(["을를", "은는", "으로", "와과", "이가"]
    .map(particle => [particle, s => s[particle]]))

cases("josa getter", opts => {
  expect(opts.particle(opts.noun)).toBe(opts.val)
}, [
  {name: "종이 is 종이를", noun: "종이", particle: 을를, val: "종이를"},
  {name: "종이 is 종이를", noun: "종이", particle: 을를, val:"종이를"},
  {name: "장미칼 is 장미칼을", noun: "장미칼", particle: 을를, val:"장미칼을"},
  {name: "시계 is 시계는", noun: "시계", particle: 은는, val:"시계는"},
  {name: "컵 is 컵은", noun: "컵", particle: 은는, val:"컵은"},
  {name: "집 is 집으로", noun: "집", particle: 으로, val:"집으로"},
  {name: "안정실 is 안정실로", noun: "안정실", particle: 으로, val:"안정실로"},
  {name: "NodeJS is NodeJS는", noun: "NodeJS", particle: 은는, val:"NodeJS는"},
  {name: "조명 is 조명과", noun: "조명", particle: 와과, val:"조명과"},
  {name: "파일 is 파일이", noun: "파일", particle: 이가, val:"파일이"},
].map(opt => [
  {...opt, noun: opt.noun.normalize("NFC"), val: opt.val.normalize("NFC")},
  {...opt, noun: opt.noun.normalize("NFD"), val: opt.val.normalize("NFD")},
]).flat());

cases("suffixes of 마우스", opts => {
  const 마우스 = "마우스"
  expect(opts.getter(마우스.normalize("NFC"))).toBe(opts.val.normalize("NFC"))
  expect(opts.getter(마우스.normalize("NFD"))).toBe(opts.val.normalize("NFD"))
}, [
  {name: "Subjective Suffix of 마우스 is 는", getter: get은는, val: "는"},
  {name: "Subjective Suffix2 of 마우스 is 가", getter: get이가, val: "가"},
  {name: "Adverbal Suffix1 of 마우스 is 로", getter: get으로, val: "로"},
  {name: "Objective Suffix of 마우스 is 를", getter: get을를, val: "를"},
  {name: "Objective Suffix2 of 마우스 is 를", getter: get와과, val: "와"},
]);
