const repeat = (n, f) => {
    if (typeof f !== 'function') throw new TypeError('f must be a function');

    Array.from({ length: n }).forEach((_, i) => f(i));
}

// repeat(10, n => console.log(n + 2));
repeat(10,1);