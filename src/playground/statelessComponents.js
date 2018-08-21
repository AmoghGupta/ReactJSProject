// type 2. stateless functional components
// they donot allow states but allow props
// they do not have access to this
// they are faster than class based
const User = (props)=>{
    return(
        <div>
            <p>Name:{props.name} </p>
            <p>Age: {props.age} </p>
        </div>
    );
};


// render app
ReactDOM.render( <User name="Amogh" age="23"/>,document.getElementById('app'));
ReactDOM.render( <IndecisionApp options={["hello","world","welcome"]}/>,document.getElementById('app'));