var set = new Set(); //no index, no duplicates
/*

add(Values): add the value to the set
    delete(Value): deletes
    clear(): removes everything
    has(Value): contains
    values():

*/

set.add(10);
set.add(10);
set.add(10);
set.add("Yusuf");
set.add("Arzu");
set.add('$');
set.add(true);

console.log(set);

set.delete(10);
console.log(set);

set.delete("Yusuf");
console.log(set);

set.clear();
console.log(set);

var bool1 = set.has(10);
console.log(bool1);

console.log("========================================");

/*
for of loop:

for(var varName of set.values())

*/

var set2 = new Set();

set2.add(10);
set2.add(10);
set2.add(10);
set2.add("Yusuf");
set2.add("Arzu");
set2.add('$');
set2.add(true);

for( var each of set2.values() ){
    console.log(each);
}

console.log("========================================");
var students = ["Nurullah", "Shirin", "Sukran", "Nurzat", "Sumeye"];

for (var eachStudent of students.values()){
    //console.log(eachStudent);
    process.stdout.write(eachStudent);
}



