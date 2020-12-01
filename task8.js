function convertToTime(num){
    var hours, minutes;
    hours = Math.floor(num/60); //round off to nearest smaller interger
    minutes = num % 60;
    console.log(`Number: ${num}\nHours: ${hours}\nMinutes: ${minutes}`);
}

//test data
convertToTime(71);
convertToTime(133);