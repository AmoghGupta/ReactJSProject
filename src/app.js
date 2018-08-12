// IndecisionApp Root component
class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.generateRandomNumber = this.generateRandomNumber.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        // creating state object in component
        this.state = {
            options: [1,2,3]
        }
       
    }

    handleDeleteOptions(){
        this.setState(()=>{
            return {
                options: []
            }
        });
    }

    generateRandomNumber(){
        let getRandomChoice = Math.floor(Math.random()*this.state.options.length);
        let randomOption = this.state.options[getRandomChoice];
        alert(randomOption);
    }

    onFormSubmit(e){
        e.preventDefault();
        const option = e.target.elements.option.value;
        if(option){
            this.setState((prevState)=>{
                return {
                    options:prevState.options.concat([option])
                }
            });
            e.target.elements.option.value = '';
        }
    }

    //JSX
    render(){
        const title = "Indecision";
        const subTitle = "Put your life in the hands of a computer";
        // const options = [];
        return (
            <div>
                {/* Passing prop..here we are passing a single prop to header called Title */}
                <Header title={title} subTitle= {subTitle}/>
                <WhatShouldIdo hasOptions= {this.state.options.length>0?true:false} 
                generateRandomNumber ={this.generateRandomNumber}/>
                {/* below two using props  */}
                {/* <Options options={options}/>
                <AddOption options={options}/> */}
                {/* below two using state  */}
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}/>
                <AddOption options={this.state.options} onFormSubmit= {this.onFormSubmit} />
            </div>
        );
    }
}

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
class Header extends React.Component {
    //JSX
    render(){
        // to access props
        // console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        );
    }
}

// Action component
class WhatShouldIdo extends React.Component {
    constructor(props){
        super(props);
        // this.generateRandomNumber = this.generateRandomNumber.bind(this);
    }
    // generateRandomNumber(){
    //     console.log(this.props);
    // }
    //JSX
    render(){
        return (
            <div>
                <button disabled={!this.props.hasOptions} onClick={this.props.generateRandomNumber}>What should I do?</button>
            </div>
        );
    }
}

// Options component
class Options extends React.Component {
    constructor(props){
        super(props);
    }
    //JSX
    render(){
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove all</button>
                <ul>
                    {
                        this.props.options.map((option)=>{
                        return <Option key={option} option={option}/>
                        })
                    }
                </ul>
            </div>
        );
    }
}

// Option component
class Option extends React.Component {
    //JSX
    render(){
        return (
            <li>{this.props.option}</li>
        );
    }
}

// addOption component
class AddOption extends React.Component {   

    constructor(props){
        super(props);
    }

    //JSX
    render(){
        return (
            <div>
               <form onSubmit={this.props.onFormSubmit} >
                    <input type="text" name="option"/>
                    <button>Add Option</button>
               </form>
            </div>
        );
    }
}


// render app
ReactDOM.render( <IndecisionApp/>,document.getElementById('app'));