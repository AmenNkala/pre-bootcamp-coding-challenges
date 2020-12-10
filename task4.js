function addTwoNumbers(x , y){  
    return ((x === 3 || y === 3) && (String(x + y).includes(3)));
}

//test data
console.log(addTwoNumbers(3 , 2)); 
console.log(addTwoNumbers(34 , 3)); 
console.log(addTwoNumbers(3 , 0)); 
