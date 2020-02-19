/*
1. Write a function for the palindrome test. 
        if the string is plaindrome ==> return true
        otherwise ==> return false        
*/

//from me

function Palindrome(check) {
        check = check.trim();
var reverse="";    
    for(var i=check.length-1; i >= 0; i--) {   
    reverse += check.charAt(i);
    
    }

    reverse = reverse.trim();
    if(check.toLowerCase() == reverse.toLowerCase()){
        return true;
        }else {
        return false;
}
    
}

      var bool =  Palindrome("   level");
      console.log(bool);

      //from Muhtar
      function plainDromeTest(str){
        var result = "";
        if(typeof str == "string"){
        
            for(var i = str.length -1 ; i >= 0; i-- ){
                result = result.concat(str.charAt(i));
            }
            
            if(result == str){
                return true;
            }
        }
        return false;
    }
        console.log( plainDromeTest("anastas mum satsana") );
        console.log( plainDromeTest("Cybertek") );




/*
2. write a function that can remove the duplicated values from string of text
*/

function RemoveDuplicates(str){
        var nonDuplicates = "";
        if(typeof str == "string"){
            for (var i=0; i < str.length; i++){
                    if (! nonDuplicates.includes(str.charAt(i))){
                            nonDuplicates = nonDuplicates.concat(str.charAt(i));
                    }
            }    
        }
        console.log(nonDuplicates);

}

RemoveDuplicates("AAABBBCCCDDD");

function RemoveDuplFromWaris(){
        var result ="";
    var arr= str.split("");
    var set= new Set(arr);
    for( var each of set){
        result += each
    }
    console.log(result);
}