import React from 'react';

import AddOptions from './AddOptions';
import  Options  from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component{
    state= {
        options : [],
        selectedOption : undefined
    };
      
    handleDeleteAll = () => {
        this.setState(() => ({ options : [] }) )
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState( (prevState) => ({
            options: prevState.options.filter( (option) => {
                return optionToRemove !== option;
            })
        }))
    };

    handlePick = () => {
        const pickedIndex = Math.floor(Math.random() * this.state.options.length) ;
        const option = this.state.options[pickedIndex];
        this.setState( ()=>({
            selectedOption : option
        })
        );
        // alert(this.state.selectedOption) ;
    };

    handleDeleteSelectedOption = () => {
        this.setState( () => ({
            selectedOption : undefined
        }))
    };

    handleAddOption = (option) => {
        if(!option){
            return "Enter valid option";
        }else if( this.state.options.indexOf(option) > -1){
            return "Option already exists"
        }
        // console.log(option)
        this.setState((prevState) => ({ options : prevState.options.concat(option) }) )
    };

    componentDidMount(){
        try{
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
            // console.log("component mounted");
            if(options){
                this.setState (() => ({options}) );
            }
        }catch(e){
            //do nothing
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length){
           const json = JSON.stringify(this.state.options);
            localStorage.setItem("options" , json);
        }
    }

    render(){
        //const title= "Indecision";
        const subtitle = "Put your life in the hands of a computer";
        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className="container">
                
                <Action 
                    hasOptions= {this.state.options.length > 0} 
                    hasPicked={this.handlePick}/>

                <div className="widget">    
                <Options 
                    options={this.state.options} 
                    hasDeleteOption = {this.handleDeleteOption}
                    hasDeleteAll={this.handleDeleteAll}/>
                <AddOptions hasAddedOption={this.handleAddOption}/>
                </div>
                </div>

                <OptionModal selectedOption={this.state.selectedOption}
                hasDeleteSelectedOption={this.handleDeleteSelectedOption}/>
                </div>
        )
    }
}

