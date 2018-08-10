'use strict';

// JSX - JavaScript XML
// JSX expressions will have single root i.e the wrapper div
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Hello world'
    ),
    React.createElement(
        'p',
        null,
        'This is JSX from app.js in React'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item 1'
        ),
        React.createElement(
            'li',
            null,
            'Item 2'
        )
    )
);

var userName = "Amogh Gupta";
var userData = {
    name: 'AMOGH',
    age: 26,
    location: 'Hyderabad'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location,
            ' '
        );
    } else {
        return undefined;
    }
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        userData.name ? userData.name : 'Anonymous'
    ),
    userData.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        userData.age
    ),
    undefined,
    true,
    false,
    null,
    getLocation(userData.location)
);

var appRoot = document.getElementById("app");
// takes 2 params the JSX template and the element where we want to render
ReactDOM.render(templateTwo, appRoot);
