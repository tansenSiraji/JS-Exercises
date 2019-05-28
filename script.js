/* JavaScript code here */
console.log("External Javascript")


//Task 2:

function sum(a){

    var sum = 0;

    a.forEach(function(i, index){

        sum = sum + i;

    });

    return sum;

}