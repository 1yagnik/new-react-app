import { useState } from 'react'
import './App.css'

import Items from './components/Items';
import Navbar from './components/Navbar';
//import ParentComponent from './Components/parent.component'
import CustomContext ,{ ItemContext } from "./context";
import CartModal from './components/cartModel';



function App() {
//  const [total, setTotal] = useState(0);
 // const [item, setItem] = useState(0);
  return (
   <CustomContext>
        <div className='App'>
          <h2>Shopping Cart</h2>
            <Navbar />
            <Items />
        </div>
    </CustomContext>
    
       
  );
}
export default App;


/*function App() {
  

  return (
    <>
     <h1>hello</h1>
     <ParentComponent/>
    </>
  )
}

export default App*/
