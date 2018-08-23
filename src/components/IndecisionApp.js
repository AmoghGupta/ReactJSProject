import React from 'react';
import Header from './Header'
import Options from './Options'
import WhatShouldIdo from'./WhatShouldIdo'
import AddOption from './AddOption'

// IndecisionApp Root component
// 1. class based components
class IndecisionApp extends React.Component {
    //lifecycle methods are only for class based components
    // when the component first gets mounted to DOM
    componentDidMount(){
        console.log("COmponent did mount");
        try{
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
            if(options){
                this.setState(()=>({options: options}))
            }
        }catch(e){
            console.log(e);
        }
    }
    // when the component updates
    componentDidUpdate(prevProps, prevState){
        console.log("COmponent did update");

        if(prevState.options.length != this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
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

    onFormSubmit(option, dataReceivedFromChild){
        alert(dataReceivedFromChild);
        if(!option){
            return "enter valid value to add item";
        }else if(this.state.options.indexOf(option) > -1){
            return "value already exists";
        }
        else{
            this.setState((prevState)=>{
                return {
                    // we cannot directly modify the options array 
                    // because if we do so it will break the other components using options as props
                    // so we use concat which returns a new array
                    options:prevState.options.concat([option])
                }
            });
        }
    }

    //JSX
    render(){
        const title = "Indecision";
        const subTitle = "Put your life in the hands of a computer";
        return (
            <div>
                <Header  subTitle= {subTitle}/>
                <WhatShouldIdo hasOptions= {this.state.options.length>0?true:false} 
                generateRandomNumber ={this.generateRandomNumber}/>
                <Options options={this.state.options} 
                handleDeleteOptions={this.handleDeleteOptions}
                handleIndividualDeleteOption={this.handleIndividualDeleteOption}/>
                <AddOption onFormSubmit= {this.onFormSubmit} />
            </div>
        );
    }
}
IndecisionApp.defaultProps = {
    options : []
};
export default IndecisionApp;