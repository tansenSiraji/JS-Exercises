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
 
 
 // Objects Example

 var company = {
    name: 'Google', 
    age: 19, 
    ceo: {
    first_name: 'Sundar', 
    last_name: 'Pichai'
    }
    
};

console.log(company)

company.updateAge = function(newAge){ 
    this.age = newAge }

company.updateAge(23);

console.log(company)


//Task 4: Access object property at a scpecial index of array

var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];
    
    function getProp(index, prop){
        return library[index][prop]
    }

    console.log(getProp(1, 'author'))

    function getReadingstatus(index){
        return library[index].readingStatus;
    }

    console.log(getReadingstatus(1))