function addTwoNumbers(x , y){
    if(x === 65 || y === 65){
        return true;
    }else if((x + y) === 65){
        return true;
    }else{
        return false;
    }
}
//test data
console.log(addTwoNumbers(1, 63));
console.log(addTwoNumbers(64, 1));
console.log(addTwoNumbers(65 , 3))