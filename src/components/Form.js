
import React, { Component } from 'react'
import styles from './style.module.css'
export class Form extends Component {
    constructor() {
        super()
        this.state = {
            value: " "
        }

        this.change = event => {
            this.setState({
                value: event.target.value
            })
        }

        this.submit = event => {
            event.preventDefault()

            if (this.state.value.trim() === "") {
                console.log("cannot be empty")
                return
            }
            if (this.state.value.length <= 5) {
                console.log("not more than 3")
                return

            } else (
                console.log("complete")
                
            )
            

        }
    }
    render() {
        return (
            <form className={styles.form} onSubmit={this.submit}>
                <label >Username</label>
                <input type="text" value={this.state.value} onChange={this.change} />
                <br />
                <button type='submit'> submit</button>

            </form>
        )
    }
}

export default Form