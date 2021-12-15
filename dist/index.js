class Stack {
    constructor() {
        this.collection = [];
    }
    print() {
        console.log(this.collection);
    }
    push(val) {
        return this.collection.push(val);
    }
    pop() {
        return this.collection.pop();
    }
    peek() {
        return this.collection[this.collection.length - 1];
    }
    size() {
        return this.collection.length;
    }
    isEmpty() {
        return this.collection.length === 0;
    }
    clear() {
        this.collection = [];
    }
}
const numberToArray = (num) => {
    const array = new Array(num);
    array.fill(0);
    return array.map((_, i) => i);
};
const isMultiple = (num) => {
    return num % 3 === 0 || num % 5 === 0 ? true : false;
};
const multiplesOf3and5 = (num) => {
    const array = numberToArray(num);
    const multiples = array.filter(number => isMultiple(number));
    return multiples.reduce((p, c) => p + c);
};
const fibonacci = (num) => {
    let a = 1, b = 0, temp;
    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }
    return b;
};
const fiboEvenSum = (n) => {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        let fib = fibonacci(i);
        if (fib <= n) {
            if (fib % 2 === 0) {
                sum += fib;
            }
        }
        else {
            return sum;
        }
    }
    return 0;
};
const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0)
            return false;
    }
    return num > 1;
};
const largestPrimeFactor = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        console.log({ i, n });
        if (n % i === 0) {
            const x = largestPrimeFactor(n / i);
            console.log({ i, n, x });
            return i > x ? i : x;
        }
    }
    return n;
};
console.log(largestPrimeFactor(100));
//# sourceMappingURL=index.js.map