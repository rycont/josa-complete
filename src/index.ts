declare global {
  interface String {
    은는: string;
    을를: string;
    이가: string;
    으로: string;
    와과: string;
  }
}

const getJongseongIndex = (letter: string) =>
  (letter.charCodeAt(0) - 44032) % 28;
const hasJongseong = (letter: string) => getJongseongIndex(letter) > 0;

export const createJosaFunction = (a: string, b: string) => ({
  appender: (word: string | String) =>
    `${word}${hasJongseong(word[word.length - 1]) ? a : b}`,
  getSuffix: (word: string | String) =>
    hasJongseong(word[word.length - 1]) ? a : b,
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
  getSuffix(word: string | String) {
    return [0, 8].includes(getJongseongIndex(word[word.length - 1]))
      ? "로"
      : "으로";
  },
  appender(word: string | String) {
    return word + get으로(word);
  },
};

addToString("은는", subj1);
addToString("이가", subj2);
addToString("을를", obj);
addToString("으로", adv1);
addToString("와과", adv2);

export { get은는, get이가, get을를, get으로, get와과 };
