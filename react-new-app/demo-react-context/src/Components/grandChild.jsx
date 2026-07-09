import { useContext } from "react"

import { ColorContext } from "../context"


const GrandChildComponent =(props) =>{

    const value = useContext(ColorContext)

    return(<>
     <p style ={{color: value}}>Color: {value}</p>
    
    </>
       

    )



    
}

export default GrandChildComponent