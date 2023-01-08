declare global {
  interface String {
    은는: string;
    을를: string;
    이가: string;
    으로: string;
    와과: string;
  }
}

const containsJohab = (word: string) => word.normalize("NFC") !== word
const lastLetterOf = (word: string) => word.normalize("NFC").slice(-1);
const getJongseongOf = (letter: string) => letter.normalize("NFD")[2];
const hasJongseong = (letter: string) => letter.normalize("NFD").length > 2;

const defaultPredicate = (last: string) => hasJongseong(last);

interface JosaCompleter {
  /**
   * Takes a string and appends an appropriate suffix from {@link getSuffix}
   * @param word input word
   * @returns concatenated string
   */
  appender: (word: string) => string;
  /**
   * Returns an appropriate suffix for a word
   * @param word input word
   * @returns suffix string
   */
  getSuffix: (word: string) => string;
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
  customPredicate: (letter: string) => boolean = defaultPredicate
): JosaCompleter => {
  const getSuffix = (word: string) => {
    const last = lastLetterOf(word);
    const suffix =
      "LMNR".includes(last.toUpperCase()) || customPredicate(last)
        ? whenTrue
        : whenFalse;
    return containsJohab(word) ? suffix.normalize("NFD") : suffix;
  };
  return {
    appender: (word: string) =>
      `${word}${getSuffix(word)}`,
    getSuffix
  };
};
const addToString = (key: string, getter: (value: string) => string) =>
  Object.defineProperty(String.prototype, key, {
    get() {
      return getter(this);
    },
  });

const { appender: subj1, getSuffix: get은는 } = createJosaFunction("은", "는");
const { appender: obj, getSuffix: get을를 } = createJosaFunction("을", "를");
const { appender: subj2, getSuffix: get이가 } = createJosaFunction("이", "가");
const { appender: adv2, getSuffix: get와과 } = createJosaFunction("과", "와");
const { appender: adv1, getSuffix: get으로 } =
  createJosaFunction("으로", "로", (last) => {
    // "ㄹ" (완성형, U+3139) !== "ᆯ" (조합형, U+11AF)
    return ![undefined, "ᆯ"].includes(getJongseongOf(last))
  });

addToString("은는", subj1);
addToString("이가", subj2);
addToString("을를", obj);
addToString("으로", adv1);
addToString("와과", adv2);

export { get은는, get이가, get을를, get으로, get와과 };
