import React from 'react';

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

// stateless way
const Option = (props)=>{
    return (
        <div>
            <li>{props.option} <button className="button" id={props.option} onClick={props.removeIndividual}>Remove</button></li> 
        </div>
    );
} 

export default Option;
                