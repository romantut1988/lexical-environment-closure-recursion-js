// замыкание, лексическое окружение, рекурсия

let car;
car = 'bmw';
function startEngine() {
    car = 'kia';
    // console.log(`Start ${car}`);

    const foo = () => {
        const model = "520";
        console.log(`${car} ${model}`);
    };
    foo();
}
car = "opel";
startEngine();

const foo = () => { }
const bar = function () { }
function baz() { }

// ===============================================

let count = 0
const conterCreator = () => {
    let count = 0

    return () => {
        console.log(++count)
    } 
}

const conter1 = conterCreator();
const conter2 = conterCreator();

conter1();
conter1();
conter1();

conter2();
conter2();
conter2();

// рекурсия ============================================= 

const pow = (x, n) => {
    if (n === 1) {
        return x
    } else {
        return x * pow(x, n - 1)
    }
}
console.log(pow(2, 4));

// Факториал ======================================

const factorial = (n) => {
    if (n === 1) {
        return n
    } else {
        return n * factorial(n - 1)
    }
}
console.log(factorial(6));
