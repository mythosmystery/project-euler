class Stack<Type> {
   collection: Type[];

   constructor() {
      this.collection = [];
   }

   print() {
      console.log(this.collection);
   }

   push(val: Type) {
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

//////////////////////////////////////////////////

const numberToArray = (num: number) => {
   const array = new Array<number>(num);
   array.fill(0);
   return array.map((_, i) => i);
};

const isMultiple = (num: number) => {
   return num % 3 === 0 || num % 5 === 0 ? true : false;
};

const multiplesOf3and5 = (num: number) => {
   const array = numberToArray(num);
   const multiples = array.filter(number => isMultiple(number));
   return multiples.reduce((p, c) => p + c);
};

// console.log(multiplesOf3and5(1000));

/////////////////////////////////////////

const fibonacci = (num: number) => {
   let a = 1,
      b = 0,
      temp: number;

   while (num >= 0) {
      temp = a;
      a = a + b;
      b = temp;
      num--;
   }

   return b;
};

const fiboEvenSum = (n: number) => {
   let sum = 0;
   for (let i = 0; i < n; i++) {
      let fib = fibonacci(i);
      if (fib <= n) {
         if (fib % 2 === 0) {
            sum += fib;
         }
      } else {
         return sum;
      }
   }
   return 0;
};

// console.log(fiboEvenSum(100000));

////////////////////////////////////////////////////

const largestPrimeFactor = (n: number): number => {
   for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
         const x = largestPrimeFactor(n / i);
         return i > x ? i : x;
      }
   }
   return n;
};

// console.log(largestPrimeFactor(100));

///////////////////////////////////////////
