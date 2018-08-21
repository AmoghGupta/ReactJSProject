import React from 'react';

// addOption component
export default class AddOption extends React.Component {   

    constructor(props){
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(e){
        this.props.onFormSubmit(e);
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
