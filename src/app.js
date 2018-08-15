// IndecisionApp Root component
// 1. class based components
class IndecisionApp extends React.Component {

    //lifecycle methods are only for class based components

    // when the component first gets mounted to DOM
    componentDidMount(){
        console.log("COmponent did mount");
    }

    // when the component updates
    componentDidUpdate(prevProps, prevState){
        console.log("COmponent did update");
    }

    // when a component goes away
    componentWillUnmount(prevProps, prevState){
        console.log("COmponent will unmount");
    }

    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleIndividualDeleteOption = this.handleIndividualDeleteOption.bind(this);
        this.generateRandomNumber = this.generateRandomNumber.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        // creating state object in component
        this.state = {
            // this will pick up defaultProps if props are not being passed
            options: props.options
        }
       
    }

    // handleDeleteOptions(){
    //     this.setState(()=>{
    //         return {
    //             options: []
    //         }
    //     });
    // }

    handleDeleteOptions(){
        this.setState(()=>({options: []}))
    }

    handleIndividualDeleteOption(e){
        let buttonTobeDeleted = e.currentTarget.id;
        if(buttonTobeDeleted){
            this.setState((prevState)=>{
                return {
                    options:  prevState.options.filter(e => e !== buttonTobeDeleted)
                }
            });
        }
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
                    // we cannot directly modify the options array 
                    // because if we do so it will break the other components using options as props
                    // so we use concat which returns a new array
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
                <Header  subTitle= {subTitle}/>
                <WhatShouldIdo hasOptions= {this.state.options.length>0?true:false} 
                generateRandomNumber ={this.generateRandomNumber}/>
                {/* below two using props  */}
                {/* <Options options={options}/>
                <AddOption options={options}/> */}
                {/* below two using state  */}
                <Options options={this.state.options} 
                handleDeleteOptions={this.handleDeleteOptions}
                handleIndividualDeleteOption={this.handleIndividualDeleteOption}/>
                <AddOption options={this.state.options} onFormSubmit= {this.onFormSubmit} />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options : []
};

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
// class Header extends React.Component {
//     //JSX
//     render(){
//         // to access props
//         // console.log(this.props);
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subTitle}</h2>
//             </div>
//         );
//     }
// }
                
                // !!
                // !!
                // !!
                // \/ 

const Header =  (props)=>{
    return (
            <div>
                <h1>{props.title}</h1>
                <h2>{props.subTitle}</h2>
            </div>
    );
}

Header.defaultProps = {
    title: 'Default Prop'
};
                


// Action component
// class WhatShouldIdo extends React.Component {
//     constructor(props){
//         super(props);
//         // this.generateRandomNumber = this.generateRandomNumber.bind(this);
//     }
//     // generateRandomNumber(){
//     //     console.log(this.props);
//     // }
//     //JSX
//     render(){
//         return (
//             <div>
//                 <button disabled={!this.props.hasOptions} onClick={this.props.generateRandomNumber}>What should I do?</button>
//             </div>
//         );
//     }
// }         
      
                // !!
                // !!
                // !!
                // \/ 

// Converting WhatShouldIdo class component to stateless functional component
const WhatShouldIdo = (props)=>{
    return (
        <div>
        <button disabled={!props.hasOptions} 
        onClick={props.generateRandomNumber}>What should I do?</button>
    </div>
    );
}


// Options component
// class Options extends React.Component {
//     constructor(props){
//         super(props);
//     }
//     //JSX
//     render(){
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove all</button>
//                 <ul>
//                     {
//                         this.props.options.map((option)=>{
//                         return <Option key={option} option={option}/>
//                         })
//                     }
//                 </ul>
//             </div>
//         );
//     }
// }
                // !!
                // !!
                // !!
                // \/ 


const Options = (props)=>{
    return (
        <div>
        <button onClick={props.handleDeleteOptions}>Remove all</button>
        <ul>
            {
                props.options.map((option)=>{
                return <Option key={option} option={option} 
                removeIndividual={props.handleIndividualDeleteOption}/>
                })
            }
        </ul>
    </div>
    );
}

// Option component
// class Option extends React.Component {
//     //JSX
//     render(){
//         return (
//             <li>{this.props.option}</li>
//         );
//     }
// }

                // !!
                // !!
                // !!
                // \/ 


const Option = (props)=>{
    return (
        <div>
            <li>{props.option} <button id={props.option} onClick={props.removeIndividual}>Remove</button></li> 
        </div>
    );
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
// ReactDOM.render( <User name="Amogh" age="23"/>,document.getElementById('app'));
ReactDOM.render( <IndecisionApp options={["hello","world","welcome"]}/>,document.getElementById('app'));