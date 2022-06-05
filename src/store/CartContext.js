import { createContext } from 'react';
import { useContext, useState } from 'react';


const CartContext = createContext();
const useCartContext = () => useContext(CartContext);

const { Provider } = CartContext;

// REALIZAR LAS SIGUIENTES FUNCIONALIDADES:
// cantInCart
// calcPriceCart

//* Guardar en el estado los items que agreguemos al cart
//* 0_ necesitamos un ESTADO para guardar los items
//* 1_ agregar items al carrito
//* 2_ eliminar items del estado del carrito
//! 3_ limpiar TODO el carrito
//! 4_ comprobar si X item esta en el carrito
//! 5_ devolver la cantidad de items en el carrito
//! 6_ devolver el precio final de la compra

export function CartContextProvider({ children }){
  const [cart, setCart] = useState([]);

  const addToCart = (item, cant) => {
    if (isInCart(item.id)){
      const newCart = cart.map(cartItem => {
        if (cartItem.id === item.id){
          const copyItem = {...cartItem};
          copyItem.cant += cant;
          return copyItem;
        }else{
          return cartItem;
        }
      })
      setCart(newCart);
    }else{
      const newItem = {...item, cant};
      setCart([...cart, newItem]);
    }
  }

  const removeFromCart = (id) => {
    const newCart = [...cart];
    const cartFilter = newCart.filter( item => {
      return item.id !== id;
    });
    setCart(cartFilter)
  }

  const cleanCart = () => {
    setCart([]);
  }

  const isInCart = (id) => {
    return cart.some( itemCart => itemCart.id === id )
  }

  const getItemFromCart = (id) => {
    return cart.find( itemCart => itemCart.id === id )
  }

  const contextFunction = () => console.log("contexto listo!");

  const cantInCart = () => {
    let total = 0;
  /* forEach del cart y ir sumando al "total" la cantidad de este item*/
   cart.forEach(itemCart => {
    total += itemCart.cant
  }) 
    return total;
  }

  const calcPriceCart = () => {
    let total = 0;
    cart.forEach(itemCart => {
    total += itemCart.cant * itemCart.precio
  }) 
    return total;
  }
  
  return (
    <Provider value = { { contextFunction, cantInCart, calcPriceCart, cleanCart, getItemFromCart, cart, addToCart, removeFromCart } }>
      {children}
    </Provider>
  )
}

export default useCartContext;