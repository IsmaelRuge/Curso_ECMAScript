// arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a,fruits[1]);

// object destructuring

let user = {
    userName: 'Ismael',
    age: 24
}
let {userName, age} = user;
console.log(userName, user.age);


// spread operator

let person = {name: 'Ismael', age:24};
let country = 'CO';

let data = {Id: 1, ...person, country};

console.log(data);


// rest

function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1,2,3,4,5);