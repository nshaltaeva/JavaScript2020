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