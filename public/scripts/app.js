"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// IndecisionApp Root component
var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.generateRandomNumber = _this.generateRandomNumber.bind(_this);
        _this.onFormSubmit = _this.onFormSubmit.bind(_this);
        // creating state object in component
        _this.state = {
            options: [1, 2, 3]
        };

        return _this;
    }

    _createClass(IndecisionApp, [{
        key: "handleDeleteOptions",
        value: function handleDeleteOptions() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: "generateRandomNumber",
        value: function generateRandomNumber() {
            var getRandomChoice = Math.floor(Math.random() * this.state.options.length);
            var randomOption = this.state.options[getRandomChoice];
            alert(randomOption);
        }
    }, {
        key: "onFormSubmit",
        value: function onFormSubmit(e) {
            e.preventDefault();
            var option = e.target.elements.option.value;
            if (option) {
                this.setState(function (prevState) {
                    return {
                        options: prevState.options.concat([option])
                    };
                });
                e.target.elements.option.value = '';
            }
        }

        //JSX

    }, {
        key: "render",
        value: function render() {
            var title = "Indecision";
            var subTitle = "Put your life in the hands of a computer";
            // const options = [];
            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: title, subTitle: subTitle }),
                React.createElement(WhatShouldIdo, { hasOptions: this.state.options.length > 0 ? true : false,
                    generateRandomNumber: this.generateRandomNumber }),
                React.createElement(Options, { options: this.state.options, handleDeleteOptions: this.handleDeleteOptions }),
                React.createElement(AddOption, { options: this.state.options, onFormSubmit: this.onFormSubmit })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

// What is a prop?
// Its an object, can be used for rendering
// changes from above(parents) cause re rendering (when fresh prop is passed down to child)
// components have access to props when rendering 
// works from top to bottom (comes from above i.e one way)
// props cannot be changed by component itself


// What is a (component) state?
// Its an object, can be used for rendering
// changes cause re rendering
// components have access to state when rendering
// defined in component itself
// can be changed by component itself


// Header component


var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",

        //JSX
        value: function render() {
            // to access props
            // console.log(this.props);
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    this.props.title
                ),
                React.createElement(
                    "h2",
                    null,
                    this.props.subTitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

// Action component


var WhatShouldIdo = function (_React$Component3) {
    _inherits(WhatShouldIdo, _React$Component3);

    function WhatShouldIdo(props) {
        _classCallCheck(this, WhatShouldIdo);

        return _possibleConstructorReturn(this, (WhatShouldIdo.__proto__ || Object.getPrototypeOf(WhatShouldIdo)).call(this, props));
        // this.generateRandomNumber = this.generateRandomNumber.bind(this);
    }
    // generateRandomNumber(){
    //     console.log(this.props);
    // }
    //JSX


    _createClass(WhatShouldIdo, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { disabled: !this.props.hasOptions, onClick: this.props.generateRandomNumber },
                    "What should I do?"
                )
            );
        }
    }]);

    return WhatShouldIdo;
}(React.Component);

// Options component


var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options(props) {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));
    }
    //JSX


    _createClass(Options, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { onClick: this.props.handleDeleteOptions },
                    "Remove all"
                ),
                React.createElement(
                    "ul",
                    null,
                    this.props.options.map(function (option) {
                        return React.createElement(Option, { key: option, option: option });
                    })
                )
            );
        }
    }]);

    return Options;
}(React.Component);

// Option component


var Option = function (_React$Component5) {
    _inherits(Option, _React$Component5);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: "render",

        //JSX
        value: function render() {
            return React.createElement(
                "li",
                null,
                this.props.option
            );
        }
    }]);

    return Option;
}(React.Component);

// addOption component


var AddOption = function (_React$Component6) {
    _inherits(AddOption, _React$Component6);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));
    }

    //JSX


    _createClass(AddOption, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "form",
                    { onSubmit: this.props.onFormSubmit },
                    React.createElement("input", { type: "text", name: "option" }),
                    React.createElement(
                        "button",
                        null,
                        "Add Option"
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

// render app


ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
