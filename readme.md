# Josa-Complete
[NPM Link](https://www.npmjs.com/package/josa-complete)

한국어 조사를 완성시켜주는 자바스크립트 라이브러리.

# How to use
## ES6 Modules
```javascript
import 'josa-complete'

console.log("우리집".을를) //console => "우리집을"
console.log("지갑".은는) //console => "지갑은"
console.log("물병".이가) //console => "물병이"
```
```javascript
import {
  getSubjectiveSuffix,
  getSubjectiveSuffix2,
  getObjectiveSuffix
} from 'josa-complete'

console.log(getSubjectiveSuffix("마우스")) //console => "는"
console.log(getSubjectiveSuffix2("마우스")) //console => "가"
console.log(getObjectiveSuffix("마우스")) //console => "를"
```
## CommonJS
```javascript
require("josa-complete")

console.log("우리집".을를) //console => "우리집을"
console.log("지갑".은는) //console => "지갑은"
console.log("물병".이가) //console => "물병이"
```
```javascript
const {
  getSubjectiveSuffix,
  getSubjectiveSuffix2,
  getObjectiveSuffix
} = requier('josa-complete')

console.log(getSubjectiveSuffix("마우스")) //console => "는"
console.log(getSubjectiveSuffix2("마우스")) //console => "가"
console.log(getObjectiveSuffix("마우스")) //console => "를"
```