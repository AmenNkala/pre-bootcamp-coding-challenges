function addTwoNumbers(x , y){
    if((x === 3 || y === 3) && (x + y) === 3){
        return true;
    }else{
        return false;
    }
}

//test data
console.log(addTwoNumbers(1 , 2));
console.log(addTwoNumbers(3 , 2));
console.log(addTwoNumbers(4 , 3));
console.log(addTwoNumbers(3 , 0));