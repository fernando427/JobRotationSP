function fibonacci(n) {
    if (n < 2) {
        return n;
    } else {
        const fib = [0, 1];
        j = 0;
        i = 2;
        while (j <= n) {
            fib[i] = fib[i-1] + fib[i-2];
            j = fib[i];
            i++;
        }
        if (fib.some(num => num === n)) {
            return 'O número ' + n + ' está na sequência de fibonacci: ' + fib;
        } else {
            return 'O número ' + n + ' não está na sequência de fibonacci: ' + fib;
        }
    }
}


console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(3));
console.log(fibonacci(7));
console.log(fibonacci(21));