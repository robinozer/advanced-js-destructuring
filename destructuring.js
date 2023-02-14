/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays: instead of doing this:

// let ages [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];
// console.log(john, mary, joe);

let ages = [30, 26, 27];
let [john, mary, joe] = ages;
console.log(john, mary, joe);

// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant"
};
let {mike, jill, alicia} = jobs
console.log(mike, jill, alicia)

// Destructuring subsets (the rest of the parameters are ignored)
// (leave commas  in the place of the values you want to skip)
let languages = ["eng", "fre", "spa", "ger", "jap"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary)

// Using rest parameter syntax 
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite)
console.log(secondFavorite)
console.log(others)
// here others becomes an array of the remaining elements

