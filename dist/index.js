"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJosaFunction = void 0;
var hasJongseong = function (letter) { return Math.floor((letter.charCodeAt(0) - 44032) % 28) > 0; };
exports.createJosaFunction = function (a, b) { return function (word) {
    return "" + word + (hasJongseong(word[word.length - 1]) ? a : b);
}; };
var addToString = function (key, getter) { return Object.defineProperty(String.prototype, key, {
    get: function () {
        return getter(this);
    }
}); };
var subj = exports.createJosaFunction('은', '는');
var obj = exports.createJosaFunction('을', '를');
addToString('은는', subj);
addToString('을를', obj);
