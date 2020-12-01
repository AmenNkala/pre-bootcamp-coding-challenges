function commonChar(str1, str2){
    var arr = [];       //array to store common characters for output
    for(var a = 0; a < str1.length; a++){
        for(var b = 0; b < str2.length; b++){
            if(str2.charAt(b) === str1.charAt(a)){
                if(str2.charAt(b) !== arr[a]){      //check whether there's duplicates
                    arr.push(str2.charAt(b));
                }
            }
        }
    }

    for(var i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

//test data

commonChar("computers", "house")

