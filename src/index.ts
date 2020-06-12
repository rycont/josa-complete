declare global {
  interface String {
    은는: string;
    을를: string;
  }
}

const hasJongseong = (letter: string) => Math.floor((letter.charCodeAt(0) - 44032) % 28) > 0;
export const createJosaFunction = (a: string, b: string) => (word: string | String) => {
  return `${word}${hasJongseong(word[word.length - 1]) ? a : b}`
}
const addToString = (key: string, getter: (value: string) => string) => Object.defineProperty(String.prototype, key, {
  get() {
    return getter(this)
  }
})

const subj = createJosaFunction('은', '는')
const obj = createJosaFunction('을', '를')

addToString('은는', subj)
addToString('을를', obj)