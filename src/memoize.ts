export const memoize = <T = unknown>(fn: Function<T>) => {
    const cache = new Map();
    const cached = function (this: unknown, val: T) {
      return cache.has(val)
        ? cache.get(val)
        : cache.set(val, fn.call(this, val)) && cache.get(val);
    };
    cached.cache = cache;
    console.log(cache)
    return cached;
  };