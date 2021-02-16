declare global {
  interface String {
    은는: string;
    을를: string;
    이가: string;
    으로: string;
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

const { appender: subj1, getSuffix: getSubjectiveSuffix1 } = createJosaFunction('은', '는')
const { appender: obj, getSuffix: getObjectiveSuffix1 } = createJosaFunction('을', '를')
const { appender: subj2, getSuffix: getSubjectiveSuffix2 } = createJosaFunction('이', '가')
const { appender: adv1, getSuffix: getAdverbalSuffix1 } = createJosaFunction('으로', '로')

addToString('은는', subj1)
addToString('이가', subj2)
addToString('을를', obj)
addToString('으로', adv1)

export {
  getSubjectiveSuffix1,
  getSubjectiveSuffix2,
  getObjectiveSuffix1,
  getAdverbalSuffix1
}
