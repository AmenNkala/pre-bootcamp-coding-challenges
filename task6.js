function findMaxNumber(x, y, z){
    var maxNum;
    
    if(x > y){
        if(x > z){
            maxNum = x;
        }else{
            maxNum = z;
        }
    }else if(y > z){
        maxNum = y;
    }else{
        maxNum = z;
    }
    console.log(maxNum);
}

//test data
findMaxNumber(10, 15, 9);
findMaxNumber(8, 5, 3);
findMaxNumber(11, 25, 96);
findMaxNumber(0.1, 2.2, 1.3);