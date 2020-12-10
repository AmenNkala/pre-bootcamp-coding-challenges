function addTwoNumbers(x , y){  
    return ((x === 3 || y === 3) && ((x + y) === 3));
}

//test data
console.log(addTwoNumbers(3 , 2)); 
console.log(addTwoNumbers(4 , 3)); 
console.log(addTwoNumbers(3 , 0)); 
console.log(addTwoNumbers(23, 0)); 
console.log(addTwoNumbers(2 , 2)); 
console.log(addTwoNumbers(7 , 6)); 