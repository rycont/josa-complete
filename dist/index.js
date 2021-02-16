"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdverbalSuffix1 = exports.getObjectiveSuffix1 = exports.getSubjectiveSuffix2 = exports.getSubjectiveSuffix1 = exports.createJosaFunction = void 0;
var getJongseongIndex = function (letter) { return (letter.charCodeAt(0) - 44032) % 28; };
var hasJongseong = function (letter) { return getJongseongIndex(letter) > 0; };
exports.createJosaFunction = function (a, b) { return ({
    appender: function (word) { return "" + word + (hasJongseong(word[word.length - 1]) ? a : b); },
    getSuffix: function (word) { return hasJongseong(word[word.length - 1]) ? a : b; }
}); };
var addToString = function (key, getter) { return Object.defineProperty(String.prototype, key, {
    get: function () {
        return getter(this);
    }
}); };
var _a = exports.createJosaFunction('은', '는'), subj1 = _a.appender, getSubjectiveSuffix1 = _a.getSuffix;
exports.getSubjectiveSuffix1 = getSubjectiveSuffix1;
var _b = exports.createJosaFunction('을', '를'), obj = _b.appender, getObjectiveSuffix1 = _b.getSuffix;
exports.getObjectiveSuffix1 = getObjectiveSuffix1;
var _c = exports.createJosaFunction('이', '가'), subj2 = _c.appender, getSubjectiveSuffix2 = _c.getSuffix;
exports.getSubjectiveSuffix2 = getSubjectiveSuffix2;
var _d = {
    getSuffix: function (word) {
        return [0, 8].includes(getJongseongIndex(word[word.length - 1])) ? "로" : "으로";
    },
    appender: function (word) {
        return word + getAdverbalSuffix1(word);
    }
}, adv1 = _d.appender, getAdverbalSuffix1 = _d.getSuffix;
exports.getAdverbalSuffix1 = getAdverbalSuffix1;
addToString('은는', subj1);
addToString('이가', subj2);
addToString('을를', obj);
addToString('으로', adv1);
