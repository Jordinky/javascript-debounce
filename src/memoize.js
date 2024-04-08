"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memoize = void 0;
var memoize = function (fn) {
    var cache = new Map();
    var cached = function (val) {
        return cache.has(val)
            ? cache.get(val)
            : cache.set(val, fn.call(this, val)) && cache.get(val);
    };
    cached.cache = cache;
    console.log(cache);
    return cached;
};
exports.memoize = memoize;
