"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getObjectiveSuffix = exports.getSubjectiveSuffix2 = exports.getSubjectiveSuffix = exports.createJosaFunction = void 0;
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
var _a = exports.createJosaFunction('은', '는'), subj1 = _a.appender, _getSubjectiveSuffix1 = _a.getSuffix;
var _b = exports.createJosaFunction('을', '를'), obj = _b.appender, _getObjectiveSuffix = _b.getSuffix;
var _c = exports.createJosaFunction('이', '가'), subj2 = _c.appender, _getSubjectiveSuffix2 = _c.getSuffix;
addToString('은는', subj1);
addToString('이가', subj2);
addToString('을를', obj);
exports.getSubjectiveSuffix = _getSubjectiveSuffix1;
exports.getSubjectiveSuffix2 = _getSubjectiveSuffix2;
exports.getObjectiveSuffix = _getObjectiveSuffix;
