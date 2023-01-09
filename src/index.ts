import {
  parenthesisToSkip,
  punctuationsToIgnore,
  alphabetWithPhoneticJongseong
} from './data.json'

declare global {
  interface String {
    /**
     * @example
     * [[[gocog
     * require("./gen.cjs")(
     *   (josa) => josa.map(
     *     ({getterName}) =>
     *       `${getterName}: string`
     *   )
     * )
     * gocog]]] */
    /***/
    은는: string
    을를: string
    이가: string
    와과: string
    으로: string
    야아: string
    이여: string
    이나: string
    이다: string
    이였다: string
    이든: string
    이라: string
    이란: string
    이랑: string
    이야: string
    이며: string
    /* [[[end]]] */
  }
}

interface RangeOverloads {
  (min: number, max: number): number[]
  (tuple: [number, number]): number[]
}
const range: RangeOverloads =
  (min: number | [number, number], max?: number): number[] => {
    if (typeof min !== 'number' || typeof max === 'undefined') {
      max = (min as [number, number])[1]
      min = (min as [number, number])[0]
    }
    return Array<number>(max - min + 1).fill(min).map((e, i) => e + i)
  }

const objectFromEntries = <K extends string, V>(entries: Array<[K, V]>): object => {
  const newObject: { [_: string]: V } = {}
  entries.forEach(([key, value]) => {
    newObject[key] = value
  })
  return newObject
}

const generateCompatibilityJamoEntries = (): object =>
  objectFromEntries(
    range(
      ['ㄱ', 'ㅎ'].map(c => c.charCodeAt(0)) as [number, number]
    ).map(n => String.fromCharCode(n))
      .map(a => [a, a])
  )

const endsWithParenthesisRE = new RegExp(`${parenthesisToSkip.map(
  (parens) => {
    const [opening, closing] = parens.split('')
    return `\\${opening}.*\\${closing}$`
  }
).join('|')}`)
const endsWithPunctuationRE = new RegExp(`[${punctuationsToIgnore}\\s]*$`)

const containsJohab = (word: string): boolean => word.normalize('NFC') !== word
const lastLetterOf = (word: string): string =>
  word.normalize('NFC')
    .replace(endsWithPunctuationRE, '')
    .replace(endsWithParenthesisRE, '')
    .slice(-1)
const getJongseongOf = (letter: string): string | undefined => {
  const jongseongMap: { [_: string]: string } = {
    ...alphabetWithPhoneticJongseong,
    ...generateCompatibilityJamoEntries()
  }
  return jongseongMap[letter.toUpperCase()] ?? letter.normalize('NFD')[2]
}
const hasJongseong = (letter: string): boolean => getJongseongOf(letter) !== undefined

interface JosaCompleter {
  /**
   * Takes a string and appends an appropriate suffix from {@link getSuffix}
   * @param word input word
   * @returns concatenated string
   */
  appender: (word: string, strict?: boolean) => string
  /**
   * Returns an appropriate suffix for a word
   * @param word input word
   * @returns suffix string
   */
  getSuffix: (word: string, strict?: boolean) => string
}

/**
 * Creates a {@link JosaCompleter} instance
 * @param whenTrue string to append when predicate returned true
 * @param whenFalse string to append when predicate returned false
 * @param customPredicate takes the last letter of a word you're appending to
 * and returns a boolean
 * @returns {} {@link JosaCompleter}
 */
export const createJosaFunction = (
  whenTrue: string,
  whenFalse: string,
  customPredicate: (letter: string) => boolean = hasJongseong
): JosaCompleter => {
  const getSuffix = (word: string): string => {
    const last = lastLetterOf(word)
    const suffix = customPredicate(last) ? whenTrue : whenFalse
    return containsJohab(word) ? suffix.normalize('NFD') : suffix
  }
  return {
    appender: (word: string): string =>
      `${word}${getSuffix(word)}`,
    getSuffix
  }
}

/**
 * @example
 * [[[gocog
 * require("./gen.cjs")(
 *   (josa) => josa.filter(
 *     opt => !opt.usesAlternativePredicate
 *   ).map(({getterName, whenTrue, whenFalse}) =>
 *     `const { appender: append${getterName}, getSuffix: get${getterName} } = createJosaFunction('${whenTrue}', '${whenFalse}')`
 *   )
 * )
 * gocog]]] */
/***/
const { appender: append은는, getSuffix: get은는 } = createJosaFunction('은', '는')
const { appender: append을를, getSuffix: get을를 } = createJosaFunction('을', '를')
const { appender: append이가, getSuffix: get이가 } = createJosaFunction('이', '가')
const { appender: append와과, getSuffix: get와과 } = createJosaFunction('과', '와')
const { appender: append야아, getSuffix: get야아 } = createJosaFunction('아', '야')
const { appender: append이여, getSuffix: get이여 } = createJosaFunction('이여', '여')
const { appender: append이나, getSuffix: get이나 } = createJosaFunction('이나', '나')
const { appender: append이다, getSuffix: get이다 } = createJosaFunction('이다', '다')
const { appender: append이였다, getSuffix: get이였다 } = createJosaFunction('이었다', '였다')
const { appender: append이든, getSuffix: get이든 } = createJosaFunction('이든', '든')
const { appender: append이라, getSuffix: get이라 } = createJosaFunction('이라', '라')
const { appender: append이란, getSuffix: get이란 } = createJosaFunction('이란', '란')
const { appender: append이랑, getSuffix: get이랑 } = createJosaFunction('이랑', '랑')
const { appender: append이야, getSuffix: get이야 } = createJosaFunction('이야', '야')
const { appender: append이며, getSuffix: get이며 } = createJosaFunction('이며', '며')
/* [[[end]]] */
const { appender: append으로, getSuffix: get으로 } =
  createJosaFunction('으로', '로', (last) => {
    return ![undefined, 'ㄹ', 'ᆯ'].includes(getJongseongOf(last))
  })

const addToString = (key: string, getter: (value: string) => string): unknown =>
  // eslint-disable-next-line no-extend-native
  Object.defineProperty(String.prototype, key, {
    get () {
      return getter(this)
    }
  })

/**
 * @example
 * [[[gocog
 * require("./gen.cjs")(
 *   (josa) => josa.map(
 *     ({getterName}) =>
 *       `addToString('${getterName}', append${getterName})`
 *   )
 * )
 * gocog]]] */
/***/
addToString('은는', append은는)
addToString('을를', append을를)
addToString('이가', append이가)
addToString('와과', append와과)
addToString('으로', append으로)
addToString('야아', append야아)
addToString('이여', append이여)
addToString('이나', append이나)
addToString('이다', append이다)
addToString('이였다', append이였다)
addToString('이든', append이든)
addToString('이라', append이라)
addToString('이란', append이란)
addToString('이랑', append이랑)
addToString('이야', append이야)
addToString('이며', append이며)
/* [[[end]]] */

export {
/**
 * @example
 * [[[gocog
 * require("./gen.cjs")(
 *   (josa) => josa.map(
 *     ({getterName}) =>
 *       `get${getterName},`
 *   )
 * )
 * gocog]]] */
  /***/
  get은는,
  get을를,
  get이가,
  get와과,
  get으로,
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
  get이며
  /* [[[end]]] */
}
