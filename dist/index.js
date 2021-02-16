"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdverbalSuffix1 = exports.getObjectiveSuffix1 = exports.getSubjectiveSuffix2 = exports.getSubjectiveSuffix1 = exports.createJosaFunction = void 0;
var hasJongseong = function (letter) { return Math.floor((letter.charCodeAt(0) - 44032) % 28) > 0; };
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
var _d = exports.createJosaFunction('으로', '로'), adv1 = _d.appender, getAdverbalSuffix1 = _d.getSuffix;
exports.getAdverbalSuffix1 = getAdverbalSuffix1;
addToString('은는', subj1);
addToString('이가', subj2);
addToString('을를', obj);
addToString('으로', adv1);
