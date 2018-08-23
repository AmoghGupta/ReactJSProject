import React from 'react';

// addOption component
export default class AddOption extends React.Component {   
    
    // commented constructor once we installed the class properties in babel
    // constructor(props){
    //     super(props);
    //     this.onFormSubmit = this.onFormSubmit.bind(this);
    // }

    // this is after we installed the class properties in babel otherwise this would have been
    // inside a constructor
    state = {
        error: undefined
    };
    
    onFormSubmit= (e)=>{
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.onFormSubmit(option, "data from child");
       
        this.setState(()=>{
            return {
                error: error
            }
        })
        e.target.elements.option.value = '';
    }

    //JSX
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
               <form onSubmit={this.onFormSubmit} >
                    <input type="text" name="option"/>
                    <button>Add Option</button>
               </form>
            </div>
        );
    }
}
