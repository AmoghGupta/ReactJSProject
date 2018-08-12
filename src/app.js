// IndecisionApp Root component
class IndecisionApp extends React.Component {
    render(){
        const title = "Indecision";
        const subTitle = "Put your life in the hands of a computer";
        const options = [];
        return (
            <div>
                {/* Passing prop..here we are passing a single prop to header called Title */}
                <Header title={title} subTitle= {subTitle}/>
                <Action/>
                <Options options={options}/>
                <AddOption options={options}/>
            </div>
        );
    }
}


// What is a (component) state?
// Consider state as an object with key value pairs so when 
// the state object changes the components re render themselves

// What is a prop?
// props allow components to interact with one another
// Props are like input data (like html attributes) that is passed to components 
// when props change the component doesn't re render

// Header component
class Header extends React.Component {
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
class Action extends React.Component {
    handlePick(){
        alert('asdsad');
    }

    render(){
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

// Options component
class Options extends React.Component {

    constructor(props){
        super(props);
        this.removeAll = this.removeAll.bind(this);
    }

    removeAll(){
        this.props.options = [];
    }

    render(){
        return (
            <div>
                <button onClick={this.removeAll}>Remove all</button>
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
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(e){
        e.preventDefault();
        const option = e.target.elements.option.value;
        if(option){
            debugger;
            this.props.options.push(option);
            e.target.elements.option.value = '';
        }
    }

    render(){
        return (
            <div>
               <form onSubmit={this.onFormSubmit} >
                    <input type="text" name="option"/>
                    <button>Add Option</button>
               </form>
            </div>
        );
    }
}


// render app
ReactDOM.render( <IndecisionApp/>,document.getElementById('app'));