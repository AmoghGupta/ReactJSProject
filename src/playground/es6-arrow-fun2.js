// arguments object is no longer bound with arrow function 

const add = function(x,y){
    console.log(arguments);
    return x+y;
}

console.log(add(55,1,1000));

const addition = (x,y)=>{
    // arguments object does not work here
    // console.log(arguments);
    return x+y;
}

console.log(addition(55,1,1000));


// this keyword is no longer bound with arrow functions
// when we create normal es5 function as property in an object then 'this' value is bound with that object
// with arrow functions the function do not bind their own 'this' value, 
// they just use the 'this' value in the context they were created in

const user = {
    name: 'amogh',
    cities: ["hyd", "del", "cnb"],
    printPlaces: function(){
        // console.log(this.cities);
        // const self = this;

        this.cities.forEach(function(city){
            // this is not accessible here in anonymous function
            // console.log(this.name+ 'has lived in'+ city);
        });
        // map method returns a new array after modifications
        const cityMsgs = this.cities.map((city)=>{
            return city+'!';
        });

        return cityMsgs;
        
        // this.cities.forEach(element => {
        //     console.log(this.name+ 'has lived in'+ element);
        // });


    },
    printPlaces2: ()=>{
        // here the arrow function doesn't bind its own 'this' value
        // this is undefined here.. it doesn't bind to the objet scope and tries to search for this in parent scope 
        this.cities.forEach(element => {
            console.log(this.name+ 'has lived in'+ element);
        });
    }
};
console.log(user.printPlaces());
// user.printPlaces2();