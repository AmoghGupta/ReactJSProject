// JSX - JavaScript XML
// JSX expressions will have single root i.e the wrapper div
let template = (
    <div>
        <h1>Hello world</h1>
        <p>This is JSX from app.js in React</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
    </div>);

let userName = "Amogh Gupta";
const userData = {
    name: 'AMOGH',
    age: 26,
    location: 'Hyderabad'
}

const getLocation = (location)=>{
    if(location){
        return <p>Location: {location} </p>
    }else{
        return undefined
    }
}


const templateTwo = (
    <div>
        {/* {ternary condition} */}
        <h1>{userData.name?userData.name:'Anonymous'}</h1>
        {/* {logical operators inside JSX} */}
        {userData.age>=18 && <p>Age: {userData.age}</p>}
        {/* <p>Location: {userData.location}</p> */}
        {/* undefined booleans and null are ignored by JSX */}
        {undefined}
        {true}
        {false}
        {null}
         {/* {if expression resolves to undefined it wont be rendered in JSX} */}
        {getLocation(userData.location)}
    </div>);



var appRoot = document.getElementById("app");
// takes 2 params the JSX template and the element where we want to render
ReactDOM.render(templateTwo, appRoot);