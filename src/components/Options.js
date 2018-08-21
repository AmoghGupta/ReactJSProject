import React from 'react';
import Option from './Option'

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
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
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

export default Options; 