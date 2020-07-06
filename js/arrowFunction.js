/*var suma = function(a, b){
    return a +b;
};

console.log(suma(5, 20));


// Arrow functions

function Car(){
    this.foo = "bar";
}

var createObj = () => ({ teste : 123})
var sum = (a, b) => a + b;

var obj = {
    showContext: function showContext(){
      // this = obj

      setTimeout(() => {
        this.log('after 1000ms');
    }, 1000);
  },
  log: function log(value){
    console.log(value);
  }
};

obj.showContext();

console.log(suma(20, 50));
console.log(createObj());
console.log(new Car());
*/

var multiplicar = (a, b, c) => a * b / c;
console.log(multiplicar(5, 6, 2));

// Default Function arguments

function randomNumber(){
    console.log('Generating a random number...');

    return Math.random() * 10;
}

function multiply(a, b = randomNumber()){
    return a * b
}

console.log(multiply(5));
console.log(multiply(5));

// Enhanced Object Literals

var propName = 'test';

var obj = {
    [propName + 'Concat']: 'prop value'
};
console.log(obj);