function addTwoNumbers(x , y){  
    var z = x + y;
    var sum = z.toString();

    if(x === 3 || y === 3){
        return true;
    }else if(sum.includes("3")){
        return true;
    }else{
        return false;
    }
}

//test data
console.log(addTwoNumbers(3 , 2)); //3 + 2 = 5 (true)
console.log(addTwoNumbers(4 , 3)); //4 + 3 = 7 (true)
console.log(addTwoNumbers(3 , 0)); //3 + 0 = 3 (true)
console.log(addTwoNumbers(23, 0)); //23 + 0 = 23 (true)
console.log(addTwoNumbers(2 , 2)); //2 + 2 = 4 (false)
console.log(addTwoNumbers(7 , 6)); //7 + 6 = 13 (true)