import React from 'react';

// addOption component
export default class AddOption extends React.Component {   

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
