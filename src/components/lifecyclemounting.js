
import { Component } from 'react'

class lifecyclemounting extends Component {
    constructor(props){
        super(props)
        this.state  = {
            name: "KING"
        }
        console.log("constructor life cycle")
    }

    static getDerivedStateFromProps(props,state){
        console.log("lifecycle static")
        return null
    }
    componentDidMount(){
        console.log("lifecycle did mount")
    }
  render() {
    return (
       console.log("lifecycle render")
    
    )
  }
}

export default lifecyclemounting