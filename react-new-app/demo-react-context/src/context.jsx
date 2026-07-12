import { createContext } from "react";
import { useState, useContext } from "react";
import CartModal from "./components/cartModel.jsx"

//export const ColorContext = createContext();
const ItemContext = createContext();

function useValue() {
    const value = useContext(ItemContext)
    return value;

}


function CustomContext({ children }) {
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);
    const [show,setShow] = useState(false);
    const [cart,setCart] = useState([]);



    const handleAdd = (prod) => {
        const index = cart.findIndex((item) => item.id === prod.id)
        if(index === -1){
            setCart([...cart,{...prod,qty:1}])
            setTotal(total+prod.price)
        }else{
            cart[index].qty++
            setCart(cart)
            console.log(cart);
            setTotal(total+cart[index].price)
        }
        setItem(item+1);
        
        

        
        //setTotal(total + price)
        //setItem(item + 1)
    };

    const handleRemove = (id) => {
        const index = cart.findIndex((item) => item.id === id);

        if(index !== -1){
            cart[index].qty--
            setItem(item-1);
        }
        setCart(cart)
    }

    const handlerefresh = () => {
          if (total > 0) {
            setTotal(0)
            setItem(0)
        }
    }

    const showcartbutton =() =>{
        setShow(!show)
    }



    return (
        <ItemContext.Provider value={{ total, item, showcartbutton, cart ,handleAdd, handleRemove ,handlerefresh}}>
            {children}
            {show && <CartModal toggle ={showcartbutton}/>}


        </ItemContext.Provider>
    )

}

export { ItemContext, useValue }
export default CustomContext