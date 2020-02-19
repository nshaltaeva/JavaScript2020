/*


*/

function addTwoNums (num1, num2){
    console.log(num1 + num2);
}

addTwoNums(10,20);

function StrReverse(name) {

    var reverse="";    
    for(var i=name.length-1; i >= 0; i--)    
    reverse += name.charAt(i);
     return  reverse;    
    }

var reversed = StrReverse("Nurzat");
    console.log(reversed);

    //Muhtar's version

    function reverseSTR(str){
        if(typeof str == "string"){
        
    var result ="";
    for(var i =str.length-1; i>=0; i--) {
        result = result.concat("" + str.charAt(i));
    }
        console.log(result);
    } else{
        console.log("No string is given");
    }
    }
    reverseSTR("Muhtar");


    //typeof: returns the data type name
var Str ="Cybertek";
console.log(typeof Str);
var num1 = 100;
console.log(typeof num1);
var bool2 = true;
console.log(typeof bool2);
console.log("========================");
function MultiplyTwoNum(num1, num2){
var result = num1*num2;
return result;
}
var total = MultiplyTwoNum(10, 20);
console.log(total);