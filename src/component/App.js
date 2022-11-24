import React from "react";
import Display from "./Display";
import "./App.css"
export default class App extends React.Component {
    state = {
        next:null,
        total:null,
        operation:null,

    };
    handleClick =(buttonName)=>{
        this.setState(calculate(this.state,buttonName));
    }
    render(){
       
        return (
            <div className="component-app">
                <Display value={this.state.next || this.state.total || "0"} />
            </div>
        )
    }
}

const calculate= ()=>{
    return;
}

