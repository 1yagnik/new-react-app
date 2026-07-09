import GrandChildComponent from "./grandChild"
import { useContext } from "react"

import { ColorContext } from "../context"


const ChildComponent = (porps) =>{

    const value = useContext(ColorContext)
    
    
    
    
    return(

    <div style ={
        {
            border: `10px solid`,
            marginLeft: `50px`,
            padding: `10px`,
            fontSize: `30px`,
            width: `300px`,
            color: value,
        }
    }>

        <GrandChildComponent color = {porps.color}/>

    </div>
   
)}

export default ChildComponent