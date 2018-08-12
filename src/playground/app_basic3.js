const app ={
    title: 'Indecision app',
    subtitle: 'React app',
    options: []
}


const onFormSubmit = (e)=>{
    e.preventDefault();

    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        apprender();
    }
}

const removeAll = ()=>{
     app.options = [];
     apprender();
}

const onMakeDecision = ()=>{
    debugger;
    let getRandomChoice = Math.floor(Math.random()*app.options.length);
    let randomOption = app.options[getRandomChoice];
    alert(randomOption);
}

var appRoot = document.getElementById("app");

let apprender = ()=>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {app.options.length>0 ? "Here are your options":"No options"}
            {/* <p>{app.options.length}</p> */}
            <button disabled={app.options.length===0} onClick={onMakeDecision} >What should I do?</button>
            <button onClick={removeAll}>Remove all</button>
            {/* {
                // [99, 98, 97, 'amogh', null, undefined, true, false]
                [<p key="1">a</p>, <p key="2">b</p>, <p key="3">c</p>]
            } */}
           
            <ol>
                {
                    app.options.map((option)=>{
                        return <li key={option}>Item: {option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit} >
                <input type="text" name="option"/>
                <button>Add options</button>
            </form>
        </div>
    );
    
    
    
    
    ReactDOM.render(template, appRoot);
}

apprender();

