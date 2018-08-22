import React from 'react';

// addOption component
export default class AddOption extends React.Component {   
    
    // commented constructor once we installed the class properties in babel
    // constructor(props){
    //     super(props);
    //     this.onFormSubmit = this.onFormSubmit.bind(this);
    // }

    onFormSubmit= (e)=>{
        this.props.onFormSubmit(e, "data from child");
    }

    //JSX
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
