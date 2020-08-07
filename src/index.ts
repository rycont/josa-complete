declare global {
  interface String {
    은는: string;
    을를: string;
    이가: string;
  }
}

const hasJongseong = (letter: string) => Math.floor((letter.charCodeAt(0) - 44032) % 28) > 0;
export const createJosaFunction = (a: string, b: string) => ({
  appender: (word: string | String) => `${word}${hasJongseong(word[word.length - 1]) ? a : b}`,
  getSuffix: (word: string | String) => hasJongseong(word[word.length - 1]) ? a : b
})
const addToString = (key: string, getter: (value: string) => string) => Object.defineProperty(String.prototype, key, {
  get() {
    return getter(this)
  }
})

const {appender: subj1, getSuffix: _getSubjectiveSuffix1} = createJosaFunction('은', '는')
const { appender: obj, getSuffix: _getObjectiveSuffix } = createJosaFunction('을', '를')
const {appender: subj2, getSuffix: _getSubjectiveSuffix2} = createJosaFunction('이', '가')

addToString('은는', subj1)
addToString('이가', subj2)
addToString('을를', obj)

export const getSubjectiveSuffix = _getSubjectiveSuffix1
export const getSubjectiveSuffix2 = _getSubjectiveSuffix2
export const getObjectiveSuffix = _getObjectiveSuffix