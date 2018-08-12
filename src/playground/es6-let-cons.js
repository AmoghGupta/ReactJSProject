var nameVar = 'Andrew';
var nameVar = 'Mike';
//cons1: with var we can redefine the same variable again while you can still re-initialize
console.log('nameVar', nameVar);

let nameLet = 'Jen';
// let nameLet = 'Jen2';
// duplicate declaration not allowed with let i.e redefining not allowed while you can still re-initialize
console.log('nameLet', nameLet);

const nameConst = "Frank";
// const nameConst = "Frank2";
// with const both redefine and reinitialize not possible
// nameConst = "franks2";
console.log('nameConst', nameConst);

// let const var are all function scoped
// let const are also block scoped while var is not
function getPetName(){
    var petName = "catty";
    return petName;
}
getPetName();
// not allowed to access outside
// console.log(petName);

//block scoping
var fullName= "Amogh Gupta";

if(fullName){
    var firstName = fullName.split(' ')[0];
    // let and const are block level scoped
    // let firstName = fullName.split(' ')[0];
    // const firstName = fullName.split(' ')[0];
    console.log(firstName);
}
// let and const wont be accessible outside block scope
console.log(firstName);
