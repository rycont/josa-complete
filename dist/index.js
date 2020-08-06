"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getObjectiveSuffix = exports.getSubjectiveSuffix = exports.createJosaFunction = void 0;
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
var _a = exports.createJosaFunction('은', '는'), subj = _a.appender, _getSubjectiveSuffix = _a.getSuffix;
var _b = exports.createJosaFunction('을', '를'), obj = _b.appender, _getObjectiveSuffix = _b.getSuffix;
addToString('은는', subj);
addToString('을를', obj);
exports.getSubjectiveSuffix = _getSubjectiveSuffix;
exports.getObjectiveSuffix = _getObjectiveSuffix;
