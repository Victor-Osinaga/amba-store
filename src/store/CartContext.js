import { createContext } from 'react';
import { useContext, useState } from 'react';


const CartContext = createContext();
const useCartContext = () => useContext(CartContext);

const { Provider } = CartContext;

//* Guardar en el estado los items que agreguemos al cart
//* 0_ necesitamos un ESTADO para guardar los items
// 1_ agregar items al carrito
// 2_ eliminar items del estado del carrito
// 3_ limpiar TODO el carrito
// 4_ comprobar si X item esta en el carrito

export function CartContextProvider({ children }){
  const [cart, setCart] = useState([]);

  const addToCart = (item, cant) => {
    if (isInCart()){
      const newCart = cart.map(cartItem => {
        if (cartItem.id === item.id){
          const copyItem = {...cartItem};
          copyItem.cant += cant;
          return copyItem;
          // return cartItem.cant += cant;
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

  const isInCart = () => {
    return true;
  }

  const contextFunction = () => console.log("contexto listo!");
  
  return (
    <Provider value = { { contextFunction, cart, addToCart } }>
      {children}
    </Provider>
  )
}

export default useCartContext;