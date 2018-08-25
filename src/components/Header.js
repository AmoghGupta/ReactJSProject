import React from 'react';

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
            <div className='header'>
            <div className="container">
                <h1>{props.title}</h1>
                <h2>{props.subTitle}</h2>
            </div>
               
            </div>
    );
}

Header.defaultProps = {
    title: 'Default Prop'
};

export default Header;