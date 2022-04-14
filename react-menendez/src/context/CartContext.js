import { createContext, useState } from "react";

const Context = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (product, quantity) => {
      if (!isInCart(product.id)) {
        const objItemCart = {
          ...product,
          quantity
        }
        setCart([...cart, objItemCart ])
      }
    }

    const clearCart = () => {
        setCart([])
    }

    const getQuantity = () => {
        let count = 0
        cart.forEach(prod => {
            count = count + prod.quantity
        })

        return count
    }

    const isInCart = (id) => {
      return cart.find(prod => prod.id === id )
    }

    return (
        <Context.Provider value={{
            cart,
            addItem,
            clearCart,
            getQuantity
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context
