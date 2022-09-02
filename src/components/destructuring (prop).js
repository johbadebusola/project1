import React from "react";
// Destructuring function component
let Destructure = ({data}) => {
    let {brand,color,year} = data
return(
    <p> I am {brand} and i am {color} years of {year}</p>
)
}

export default Destructure
