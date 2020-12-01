function convertTempC(c){
    var f;
    f = (c *(9/5)) + 32;
    console.log('Celcius to Fahrenheit');
    console.log(`Celcius: ${c}\nFahrenheit: ${f}\n\n\n`);
}

function convertTempF(f){
    var c;
    c = (f - 32) * (5/9);
    console.log('Fahrenheit to Celcius');
    console.log(`Fahrenheit: ${f}\nCelcius: ${c}`);
}

convertTempC(180); //test data... from celcius to fahrenheit
convertTempF(32); //test data... from fahrenheit to celcius

