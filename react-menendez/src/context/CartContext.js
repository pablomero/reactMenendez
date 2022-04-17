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

    const getTotal = () => {
      let total = 0
      cart.forEach(prod => {
          const subtotal = prod.price * prod.quantity
          total += subtotal
      })

      return total
    }

    const removeItem = (id) => {
       const newProducts = cart.filter(prod => prod.id !== id)
       setCart(newProducts)
    }
    return (
        <Context.Provider value={{
            cart,
            addItem,
            clearCart,
            getQuantity,
            getTotal,
            removeItem
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context
