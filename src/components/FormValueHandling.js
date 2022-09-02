
import React, { Component } from 'react'

class FormValueHandling extends Component {
    constructor() {
      super()
      this.firstNameRef = React.createRef()

    }
    componentDidMount(){
        this.firstNameRef.current.focus()
    }
    render() {
        this.submit = event => {
    event.preventDefault();
    let elements = event.target.elements
    let {firstName,lastName,email} = elements
    alert(` My name is ${firstName.value} - ${lastName.value} and my email is ${email.value}`)
    let value = this.firstNameRef.current.value
    console.log(value)
        }
        return (
            <div>
                <form onSubmit={this.submit}>
                    <input type="text" name='firstName' placeholder='Firstname' ref={this.firstNameRef} />
                    <input type="text" name='lastName' placeholder='Lastname'  />
                    <input type="email" name='email' placeholder='email' />
                    <button type='submit'> submit</button>
                </form>
            </div>
        )
    }
}

export default FormValueHandling