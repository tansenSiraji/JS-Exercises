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
console.log(sum([1, 2, 3, 4, 5]))


//Task 3

function valEmail(email){

    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.exec(email);
 }
 
 var check = valEmail('1510505@iub.edu.bd');
 
 console.log(check);

 var c = valEmail('tansenananda@gmail.com');

 console.log(c);
 
 console.log(valEmail('kmllnm.com'));
 