import  { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cartItem, setCartItem] = useState([]) 

    const addToCart =(product)=>{
        setCartItem([...cartItem, product])
    }
  return (
    <div>
        <CartContext.Provider value={{cartItem,setCartItem, addToCart}}>{children}</CartContext.Provider>
    </div>
  )
}