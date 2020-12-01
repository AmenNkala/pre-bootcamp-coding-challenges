function vowelPrint(str){
    var arr = [];
    for(var i = 0; i < str.length; i++){
        if(str.charAt(i) === 'A' || str.charAt(i) === 'a'){
            arr.push(str.charAt(i));
        }else if(str.charAt(i) === 'E' || str.charAt(i) === 'e'){
            arr.push(str.charAt(i));
        }else if(str.charAt(i) === 'I' || str.charAt(i) === 'i'){
            arr.push(str.charAt(i));
        }else if(str.charAt(i) === 'O' || str.charAt(i) === 'o'){
            arr.push(str.charAt(i));
        }else if(str.charAt(i) === 'U' || str.charAt(i) === 'u'){
            arr.push(str.charAt(i));
        }
    }
    for(var i =0; i < arr.length; i++){
        console.log(`${arr[i]} `)
    }
}

//test data
vowelPrint("Umuzi bootcamp");