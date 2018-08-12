
let count =0;
const myId = 'my-id';
const addOne = ()=>{
    count+=1;
    console.log("addone", count);
     //JSX doesn't have any data binding so we are rendering again manually
    renderCounterApp();
}




var appRoot = document.getElementById("app");


const renderCounterApp = ()=>{
    //JSX doesn't have any data binding
    const template = (
        <div>
            <h1>Count: {count}</h1>
            {/* clas is className in JSX */}
            <button id={myId} className="button" onClick={addOne}>+1</button> 
        </div>
    );
    console.log(template);

    // takes 2 params the JSX template and the element where we want to render
    ReactDOM.render(template, appRoot);
};


renderCounterApp();

// React works on virtual DOM concept i.e when any thing changes it re renders only that part rather than 
// whole page or component again
// React renders everyhting in a Virtual DOM so whenever a change is made, react finds the difference
// in DOMs i.e the previous and the new state of Virtual DOM then it only modifies the only changed
// part in actual DOM 