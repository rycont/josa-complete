# josa-complete

[![https://www.npmjs.com/package/josa-complete](https://img.shields.io/npm/v/josa-complete?color=%23bb271a&label=josa-complete&logo=npm)](https://www.npmjs.com/package/josa-complete)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fqb20nh%2Fjosa-complete.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fqb20nh%2Fjosa-complete?ref=badge_shield)

한국어 조사를 완성시켜주는 자바스크립트 라이브러리.

## How to use

### ES6 Modules

```javascript
import 'josa-complete'

console.log('지갑'.은는) // '지갑은'
console.log('상자'.은는) // '상자는'

console.log('물병'.이가) // '물병이'
console.log('텀블러'.이가) // '텀블러가'

console.log('우리집'.을를) // '우리집을'
console.log('우리'.을를) // '우리를'

console.log('에어팟'.으로) // '에어팟으로'
console.log('귀이개'.으로) // '귀이개로'

console.log('친구'.와과) // '친구와'
console.log('절친'.와과) // '절친과'
```

```javascript
import {
  get은는,
  get이가,
  get을를,
  get으로,
  get와과
} from 'josa-complete'

console.log(get은는('마우스')) // '는'
console.log(get이가('마우스')) // '가'
console.log(get을를('마우스')) // '를'
console.log(get으로('마우스')) // '로'
console.log(get와과('마우스')) // '와'
```

### CommonJS

```javascript
require('josa-complete')

console.log('지갑'.은는) // '지갑은'
console.log('상자'.은는) // '상자는'

console.log('물병'.이가) // '물병이'
console.log('텀블러'.이가) // '텀블러가'

console.log('우리집'.을를) // '우리집을'
console.log('우리'.을를) // '우리를'

console.log('에어팟'.으로) // '에어팟으로'
console.log('귀이개'.으로) // '귀이개로'

console.log('친구'.와과) // '친구와'
console.log('절친'.와과) // '절친과'
```

```javascript
const {
  get은는,
  get이가,
  get을를,
  get으로,
  get와과
} = require('josa-complete')

console.log(get은는('마우스')) // '는'
console.log(get이가('마우스')) // '가'
console.log(get을를('마우스')) // '를'
console.log(get으로('마우스')) // '로'
console.log(get와과('마우스')) // '와'
```


## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fqb20nh%2Fjosa-complete.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fqb20nh%2Fjosa-complete?ref=badge_large)