import React, { Component } from "react";

class Changer extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    clickChange = () => {
        this.setState({
            count: this.state.count + 1
        }, () => { console.log("num", this.state.count) }
        )
    }
    clickMinus = () => {
        this.setState({
            count: this.state.count - 1
        }, () => { console.log("num", this.state.count) }
        )
    }
    render() {
        return (
            <div>
                <h1> count : {this.state.count}</h1>
                <button onClick={this.clickChange}> Add</button>
                <button onClick={this.clickMinus}> Minus</button>
            </div>

        );
    }
}

export default Changer