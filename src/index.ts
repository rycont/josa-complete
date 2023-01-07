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

const defaultPredicate = (word: string) => hasJongseong(lastLetterOf(word));

export const createJosaFunction = (
  whenTrue: string,
  whenFalse: string,
  predicate: (_: string) => boolean = defaultPredicate
) => {
  const getSuffix = (word: string) => {
    const suffix = predicate(word) ? whenTrue : whenFalse;
    return containsJohab(word) ? suffix.normalize("NFD") : suffix;
  }
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
  createJosaFunction("로", "으로", (word) => {
    // "ㄹ" (완성형, U+3139) !== "ᆯ" (조합형, U+11AF)
    return [undefined, "ᆯ"].includes(getJongseongOf(lastLetterOf(word)))
  });

addToString("은는", subj1);
addToString("이가", subj2);
addToString("을를", obj);
addToString("으로", adv1);
addToString("와과", adv2);

export { get은는, get이가, get을를, get으로, get와과 };
