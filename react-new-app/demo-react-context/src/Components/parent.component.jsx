import { Component , useState} from "react";
import { ColorContext } from "../context";
import ChildComponent from "./child.component";

const ParentComponent = () => { 

    const [color , setColor] = useState("#00000")

    
        return(

            <>
            
            <h1>Pick a Color</h1>
            <input type="color" name="" id="" onChange={((e) => setColor(e.target.value))} value={color}/>
           <ColorContext.Provider value = {color}>
            <ChildComponent/>
           </ColorContext.Provider>
            
            </>

        )
    
} 

export default ParentComponent