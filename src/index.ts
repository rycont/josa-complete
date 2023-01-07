declare global {
  interface String {
    은는: string;
    을를: string;
    이가: string;
    으로: string;
    와과: string;
    야아: string;
    이여: string;
    이나: string;
    이다: string;
    이든: string;
    이라고: string;
    이란: string;
    이랑: string;
    이야: string;
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

const { appender: append은는, getSuffix: get은는 } = createJosaFunction("은", "는");
const { appender: append을를, getSuffix: get을를 } = createJosaFunction("을", "를");
const { appender: append이가, getSuffix: get이가 } = createJosaFunction("이", "가");
const { appender: append와과, getSuffix: get와과 } = createJosaFunction("과", "와");
const { appender: append으로, getSuffix: get으로 } =
  createJosaFunction("으로", "로", (word) => {
    // "ㄹ" (완성형, U+3139) !== "ᆯ" (조합형, U+11AF)
    return ![undefined, "ᆯ"].includes(getJongseongOf(lastLetterOf(word)))
  });
 const {appender: append야아, getSuffix: get야아 } = createJosaFunction("아", "야");
 const {appender: append이여, getSuffix: get이여 } = createJosaFunction("이여", "여");
 const {appender: append이나, getSuffix: get이나 } = createJosaFunction("이나", "나");
 const {appender: append이다, getSuffix: get이다 } = createJosaFunction("이다", "다");
 const {appender: append이든, getSuffix: get이든 } = createJosaFunction("이든", "든");
 const {appender: append이라고, getSuffix: get이라고 } = createJosaFunction("이라고", "라고");
 const {appender: append이란, getSuffix: get이란 } = createJosaFunction("이란", "란");
 const {appender: append이랑, getSuffix: get이랑 } = createJosaFunction("이랑", "랑");
 const {appender: append이야, getSuffix: get이야 } = createJosaFunction("이야", "야");

 export const defineGetters = () => {
  addToString("은는", append은는);
  addToString("이가", append이가);
  addToString("을를", append을를);
  addToString("으로", append으로);
  addToString("와과", append와과);
  addToString("야아", append야아);
  addToString("이여", append이여);
  addToString("이나", append이나);
  addToString("이다", append이다);
  addToString("이든", append이든);
  addToString("이라고", append이라고);
  addToString("이란", append이란);
  addToString("이랑", append이랑);
  addToString("이야", append이야);
};

export {
  get은는,
  get이가,
  get을를,
  get으로,
  get와과,
  get야아,
  get이여,
  get이나,
  get이다,
  get이든,
  get이라고,
  get이란,
  get이랑,
  get이야
};
