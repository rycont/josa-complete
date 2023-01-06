declare global {
  interface String {
    은는: string;
    을를: string;
    이가: string;
    으로: string;
    와과: string;
  }
}

const lastLetterOf = (hangul: string) => hangul.normalize("NFC").slice(-1);
const getJongseongOf = (letter: string) => letter.normalize("NFD")[2];
const hasJongseong = (letter: string) => letter.normalize("NFD").length > 2;

export const createJosaFunction = (a: string, b: string) => ({
  appender: (word: string) =>
    `${word}${hasJongseong(lastLetterOf(word)) ? a : b}`,
  getSuffix: (word: string) =>
    hasJongseong(lastLetterOf(word)) ? a : b,
});
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

const { appender: adv1, getSuffix: get으로 } = {
  getSuffix(word: string) {
    // 아래의 리을은 받침으로서 한글 자판으로 칠 수 없다
    return [undefined, "ᆯ"].includes(getJongseongOf(lastLetterOf(word)))
      ? "로"
      : "으로";
  },
  appender(word: string) {
    return word + get으로(word);
  },
};

addToString("은는", subj1);
addToString("이가", subj2);
addToString("을를", obj);
addToString("으로", adv1);
addToString("와과", adv2);

export { get은는, get이가, get을를, get으로, get와과 };
