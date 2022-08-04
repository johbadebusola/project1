import React, { Component } from "react";

class Changer extends Component {
    constructor(){
        super()
        this.state={
           count:0
        }
    }
    clickChange(){
        this.setState({
           count : 1
        })
    }
    render() {
        return( 
            <div>
         <h1> count : {this.state.count}</h1> 
         <button onClick ={() => this.clickChange()}> change</button>
            </div>
      
        );
    }
    }
    
    export default Changer