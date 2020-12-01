var multiple3;
var multiple5;
var sum = 0;

for(var i = 1; i < 1000; i++){
    multiple3 = 3*i;
    multiple5 = 5*i;
    if(multiple3 < 1000){
        sum += multiple3;
    }

    if(multiple5 < 1000){
        sum += multiple5;
    }
}

console.log(sum);