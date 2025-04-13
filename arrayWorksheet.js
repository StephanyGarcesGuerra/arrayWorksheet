console.log("------ Part 1--------"); //Part 1
let fruits = ['apple', 'banana', 'cherry']

console.log(fruits[1]); //access to the fruit at index 1 = banana
console.log(`the number of fruits in the array are: ${fruits.length}`); //number of items in the array

console.log("------ Part 2--------");//Part 2
fruits.push('orange') //adding 'orange' to the array
console.log(fruits);

fruits.pop()
console.log(fruits);

fruits.push('mango', 'grapes') //adding 2 more fruits
console.log(fruits);

fruits.pop() //removing the last fruit added to array
console.log(fruits);
console.log(`the number of fruits in the array are: ${fruits.length}`);

console.log("------ Part 3--------"); //Part 3
for (let i = 0; i < fruits.length; i++ ){
    console.log(fruits[i]);
};
for (let i = 0; i < fruits.length; i++ ){
    console.log(fruits[i].toUpperCase());
};

// for (let i = 0; i < fruits.length; i++ ){
//     if (fruits[i] === "apple") {
//         i++;
//     }
//     }
//     console.log(fruits[i]);

console.log('------ Part 4--------'); //Part 4
let cart =[]
cart.push('toothpaste','toothbrush', 'shampoo')
console.log(cart);

cart.pop()
console.log(cart);


let numbers = [1,2,3,4,5]
let reversed = []
for (let i = numbers.length - 1; i >=0; i--){
    reversed.push(numbers[i])
}
console.log(reversed);


console.log('------ Part 5--------'); //Part 5

let array1 = ["a", "b", "c", "d"];
let array2= ["red", "green", "blue"];

if (array1.length > array2.length){
    console.log("array 1 has a greater length than array 2");
    
} else{
    console.log("array 2 has a greater length than array 1");   
}

console.log('------ Part 6--------'); //Part 6
const array = [10, 20, 30, 40, 50, 60];
for(let i = 0; i <array.length; i+=2){
    console.log(array[i]);}

console.log('------ Part 7--------'); //Part 7
let names = ['Alice', 'Bob', 'Charlie']
let subjects = ['Math', 'Science']
for(let n = 0; n < names.length; n++){
    // console.log(names[n]);
    for (let j = 0; j<subjects.length; j++){
        // console.log(subjects[j]);
        console.log(`${names[n]} - ${subjects[j]}`);

    }
    
} //Nested loops are divinded into two parts, the outer and inner loops. 
//Each element/index of the outer loop loops through the inner loop.
// in this case, since we wanted the each names to be connected to each subject,
//the outer loop was the names and the inner loop was the subjects.

    













