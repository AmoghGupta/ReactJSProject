import React from 'react';

// WhatShouldIdo component
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


export default WhatShouldIdo;