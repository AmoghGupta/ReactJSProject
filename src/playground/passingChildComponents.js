import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'


//Passing children to component sample example
const Layout = (props)=>{
    return(
        <div>
            <p>header</p>
            {/* 1st manual way using props <p>{props.template}</p> */}
            {props.children}
            <p>footer</p>
        </div>
    );
}

const template = (
    <div>
        <h1>Page Title</h1>
        <p>this is my page</p>
    </div>
);
//1st way i.e this is manual way
// ReactDOM.render( <Layout template={template}/>,document.getElementById('app'));
// 2nd way provided by react
ReactDOM.render( <Layout><p>This is inside layout</p></Layout>,document.getElementById('app'));



// ReactDOM.render( <IndecisionApp/>,document.getElementById('app'));