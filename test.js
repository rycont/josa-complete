const {
  get은는,
  get이가,
  get을를,
  get으로,
  get와과,
  get야아,
  get이여,
  get이나,
  get이다,
  get이였다,
  get이든,
  get이라,
  get이란,
  get이랑,
  get이야,
  get이며,
} = require("./dist");
const cases = require('jest-in-case');


const { 을를, 은는, 으로, 와과, 이가, 야아, 이여, 이나, 이다, 이였다, 이든, 이라, 이란, 이랑, 이야, 이며 } =
  Object.fromEntries(["을를", "은는", "으로", "와과", "이가", "야아", "이여", "이나", "이다", "이였다", "이든", "이라", "이란", "이랑", "이야", "이며"]
    .map(particle => [particle, s => s[particle]]))

cases("josa getters", opts => {
  expect(opts.val.startsWith(opts.noun)).toBeTruthy()
  expect(opts.particle(opts.noun)).toBe(opts.val)
}, [
  {name: "종이 is 종이를", noun: "종이", particle: 을를, val: "종이를"},
  {name: "장미칼 is 장미칼을", noun: "장미칼", particle: 을를, val: "장미칼을"},
  {name: "시계 is 시계는", noun: "시계", particle: 은는, val: "시계는"},
  {name: "컵 is 컵은", noun: "컵", particle: 은는, val: "컵은"},
  {name: "집 is 집으로", noun: "집", particle: 으로, val: "집으로"},
  {name: "안정실 is 안정실로", noun: "안정실", particle: 으로, val: "안정실로"},
  {name: "NodeJS is NodeJS는", noun: "NodeJS", particle: 은는, val:"NodeJS는"},
  {name: "npm is npm은", noun: "npm", particle: 은는, val: "npm은"},
  {name: "NodeJS is NodeJS로", noun: "NodeJS", particle: 으로, val: "NodeJS로"},
  {name: "npm is npm으로", noun: "npm", particle: 으로, val: "npm으로"},
  {name: "PR is PR로", noun: "PR", particle: 으로, val: "PR로"},
  {name: "wsl is wsl로", noun: "wsl", particle: 으로, val:"wsl로"},
  {name: "조명 is 조명과", noun: "조명", particle: 와과, val: "조명과"},
  {name: "수초 is 수초와", noun: "수초", particle: 와과, val: "수초와"},
  {name: "파일 is 파일이", noun: "파일", particle: 이가, val: "파일이"},
  {name: "폴더 is 폴더가", noun: "폴더", particle: 이가, val: "폴더가"},
  {name: "친구 is 친구야", noun: "친구", particle: 야아, val: "친구야"},
  {name: "녀석 is 녀석아", noun: "녀석", particle: 야아, val: "녀석아"},
  {name: "그대 is 그대여", noun: "그대", particle: 이여, val: "그대여"},
  {name: "사랑 is 사랑이여", noun: "사랑", particle: 이여, val: "사랑이여"},
  {name: "이것 is 이것이나", noun: "이것", particle: 이나, val: "이것이나"},
  {name: "저거 is 저거나", noun: "저거", particle: 이나, val: "저거나"},
  {name: "밥 is 밥이다", noun: "밥", particle: 이다, val: "밥이다"},
  {name: "고기 is 고기다", noun: "고기", particle: 이다, val: "고기다"},
  {name: "떡 is 떡이었다", noun: "떡", particle: 이였다, val: "떡이었다"},
  {name: "채소 is 채소였다", noun: "채소", particle: 이였다, val: "채소였다"},
  {name: "라면 is 라면이든", noun: "라면", particle: 이든, val: "라면이든"},
  {name: "떡볶이 is 떡볶이든", noun: "떡볶이", particle: 이든, val: "떡볶이든"},
  {name: "감자 is 감자라", noun: "감자", particle: 이라, val: "감자라"},
  {name: "수박 is 수박이라", noun: "수박", particle: 이라, val: "수박이라"},
  {name: "마늘 is 마늘이란", noun: "마늘", particle: 이란, val: "마늘이란"},
  {name: "파 is 파란", noun: "파", particle: 이란, val: "파란"},
  {name: "준식 is 준식이랑", noun: "준식", particle: 이랑, val: "준식이랑"},
  {name: "혜리 is 혜리랑", noun: "혜리", particle: 이랑, val: "혜리랑"},
  {name: "인생 is 인생이야", noun: "인생", particle: 이야, val: "인생이야"},
  {name: "병아리 is 병아리야", noun: "병아리", particle: 이야, val: "병아리야"},
  {name: "ㄱ is ㄱ을", noun: "ㄱ", particle: 을를, val: "ㄱ을"},
  {name: "ㄹ is ㄹ로", noun: "ㄹ", particle: 으로, val: "ㄹ로"},
].map(opt => opt.noun.match(/[^가-힣]$/) ? opt : [
  {...opt, noun: opt.noun.normalize("NFC"), val: opt.val.normalize("NFC")},
  {...opt, noun: opt.noun.normalize("NFD"), val: opt.val.normalize("NFD")},
]).flat());

cases("문장부호 무시", opts => {
  expect(opts.particle(opts.noun)).toBe(opts.val)
}, [
  {
    name: "\"안녕히 계셨어요?\" + (이)라",
    noun: "\"안녕히 계셨어요?\"",
    particle: 이라,
    val: "\"안녕히 계셨어요?\"라"
  },
  {
    name: "월드 와이드 웹(World Wide Web, WWW, W3) + 은/는",
    noun: "월드 와이드 웹(World Wide Web, WWW, W3)",
    particle: 은는,
    val: "월드 와이드 웹(World Wide Web, WWW, W3)은"
  }
])

cases("suffixes of 마우스", opts => {
  const 마우스 = "마우스"
  expect(opts.getter(마우스.normalize("NFC"))).toBe(opts.val.normalize("NFC"))
  expect(opts.getter(마우스.normalize("NFD"))).toBe(opts.val.normalize("NFD"))
}, [
  {name: "마우스 + 은/는 is 는", getter: get은는, val: "는"},
  {name: "마우스 + 이/가 is 가", getter: get이가, val: "가"},
  {name: "마우스 + (으)로 is 로", getter: get으로, val: "로"},
  {name: "마우스 + 을/를 is 를", getter: get을를, val: "를"},
  {name: "마우스 + 과/와 is 와", getter: get와과, val: "와"},
  {name: "마우스 + 야/아 is 야", getter: get야아, val: "야"},
  {name: "마우스 + (이)나 is 나", getter: get이나, val: "나"},
  {name: "마우스 + (이)다 is 다", getter: get이다, val: "다"},
  {name: "마우스 + 이었다/였다 is 였다", getter: get이였다, val: "였다"},
  {name: "마우스 + (이)든 is 든", getter: get이든, val: "든"},
  {name: "마우스 + (이)라 is 라", getter: get이라, val: "라"},
  {name: "마우스 + (이)란 is 란", getter: get이란, val: "란"},
  {name: "마우스 + (이)랑 is 랑", getter: get이랑, val: "랑"},
  {name: "마우스 + (이)야 is 야", getter: get이야, val: "야"},
  {name: "마우스 + (이)여 is 여", getter: get이여, val: "여"},
  {name: "마우스 + (이)며 is 며", getter: get이며, val: "며"},
]);

cases("suffixes of 디자인", opts => {
  const 디자인 = "디자인"
  expect(opts.getter(디자인.normalize("NFC"))).toBe(opts.val.normalize("NFC"))
  expect(opts.getter(디자인.normalize("NFD"))).toBe(opts.val.normalize("NFD"))
}, [
  {name: "디자인 + 은/는 is 은", getter: get은는, val: "은"},
  {name: "디자인 + 이/가 is 이", getter: get이가, val: "이"},
  {name: "디자인 + (으)로 is 으로", getter: get으로, val: "으로"},
  {name: "디자인 + 을/를 is 을", getter: get을를, val: "을"},
  {name: "디자인 + 과/와 is 과", getter: get와과, val: "과"},
  {name: "디자인 + 야/아 is 아", getter: get야아, val: "아"},
  {name: "디자인 + (이)나 is 이나", getter: get이나, val: "이나"},
  {name: "디자인 + (이)다 is 이다", getter: get이다, val: "이다"},
  {name: "디자인 + 이었다/였다 is 이었다", getter: get이였다, val: "이었다"},
  {name: "디자인 + (이)든 is 이든", getter: get이든, val: "이든"},
  {name: "디자인 + (이)라 is 이라", getter: get이라, val: "이라"},
  {name: "디자인 + (이)란 is 이란", getter: get이란, val: "이란"},
  {name: "디자인 + (이)랑 is 이랑", getter: get이랑, val: "이랑"},
  {name: "디자인 + (이)야 is 이야", getter: get이야, val: "이야"},
  {name: "디자인 + (이)여 is 이여", getter: get이여, val: "이여"},
  {name: "디자인 + (이)며 is 이며", getter: get이며, val: "이며"},
]);
