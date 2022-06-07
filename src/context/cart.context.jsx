import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    // find if cartItems contains productToAdd
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    // if find, increment quantity
    if(existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? 
        {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
        );
    }

    // return new array with modified cartItems/ new cart item
    return [...cartItems, {...productToAdd, quantity: 1}];
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemCart: () => {},
    cartCount: 0,
})


export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    
    useEffect(() => {
        async function fetchData() {
            const newCartCount = cartItems.reduce((total, cartItem) => {
                return total + cartItem.quantity
            }, 0);
            setCartCount(newCartCount);
        }
        fetchData();
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }
    
    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
}