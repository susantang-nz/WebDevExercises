// var generateName = require('sillyname');

// // ****** In package.js, add "type" (under "main") to "module"; like this: "type" : "module";

// import generateName from sillyName;

// var sillyName = generateName();

// console.log(`my name is ${sillyName}`); //string interpolation from javascript with 2 backticks

// **Challenge: install and import superheroes module
// 1. go to npm.js to find this package 
// 2. install it - once it's done, check it in package.js
// 3. import this package with ejs 

import {randomSuperhero} from 'superheroes';
//4. use new way to call this function
var heroName = randomSuperhero();
console.log(`I am ${heroName}!!`)
//4. in terminal, use node to run this code