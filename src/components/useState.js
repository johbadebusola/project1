
import React,{useState, useEffect} from 'react'

let Car = () => {
    let [count,setCount] = useState(0)
   let  change = () => {
setCount(
    count+1)
    }
    useEffect(() => {
        console.log(`you have clicke it ${count} times`)
    })
return(
    
    <div>
        <h1>
           count: {count}
        </h1>
        <button onClick={change}> Increment</button>
    </div>
)
}

export default Car