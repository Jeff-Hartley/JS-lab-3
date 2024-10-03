//declaring my array
console.log("This is a variable I declared with 5 numbers.")
let numbers = [9, 2, 12, 4, 3];
console.log(numbers);
console.log(" "); //to create a gap in console

//accessing arrays
let firstStoredValue = numbers.at(0);
let secondStoredValue = numbers.at(2);
let thirdStoredValue = numbers[numbers.length -1];
console.log(`${firstStoredValue} is stored in the first variable named 'firstStoredValue'`);
console.log(`${secondStoredValue} is stored in the second variable named 'secondStoredValue'`);
console.log(`${thirdStoredValue} is stored in the third variable named 'thirdStoredValue'`);
console.log(" "); //to create a gap in console

//using array properties
console.log(`There are ${numbers.length} numbers stored in my array.`);
console.log(" "); //to create a gap in console

//array methods
numbers.pop();
console.log(`I used the pop method to remove the last element and now my array looks like this: ${numbers}`);
numbers.push(34);
console.log(`I used the push method to add a new element and now my array looks like this: ${numbers}`);
numbers.shift();
console.log(`I used the shift method to remove the first element and now my array looks like this: ${numbers}`);
numbers.unshift(123);
console.log(`I used the unshift method to add a new element at the front and now my array looks like this: ${numbers}`);
numbers.splice(3,0, 40);
console.log(`I used the splice method at the 3rd spot and now my array looks like this: ${numbers}`);
console.log(" "); //to create a gap in console

//iterating through arrays 
console.log("This is a traditional for loop that will log all of the numbers in my array.");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

console.log(" ");//to create a gap in console
console.log("This is using .map");
numbers.map(function(nummap) {
    console.log(nummap);
});
console.log(" "); //to creeate a gap in console


//array destruction
let [destNum1, destNum2, ...rest] = numbers;
console.log(`The first value destructed is ${destNum1}`);
console.log(`The second value destructed is ${destNum2}`);
console.log(`The rest of the values destructed is ${rest}`);
console.log(" "); //to create a gap in console

