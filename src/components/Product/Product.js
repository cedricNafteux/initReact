import React, { useReducer} from 'react';
import './Product.css';

const currencyOptions = {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
}

function getTotal(totalCart) {
  return totalCart.toLocaleString(undefined, currencyOptions)
}
const products = [
  {
    emoji: '🍦',
    name: 'ice cream',
    price: 5
  },
  {
    emoji: '🍩',
    name: 'donuts',
    price: 2.5,
  },
  {
    emoji: '🍉',
    name: 'watermelon',
    price: 4
  }
];

function cartReducer(state, product) {
  return [...state, product]
}

function totalReducer(state, price) {
  return state + price;
}

export default function Product()
{
  const [cart, setCart] = useReducer(cartReducer, []);
  const [total, setTotal] = useReducer(totalReducer, 0);

  function add(product) {
    setCart(product.name);
    setTotal(product.price);
  }
  
  return(
    <div className="wrapper">
      <div>
        Panier: {cart.length} articles.
      </div>
      <div>Total: {getTotal(total)}</div>
      <div>
        {products.map(product => (
          <div key={product.name}>
            <div className="product">
              <span role="img" aria-label={product.name}>{product.emoji}</span>
            </div>
            <button onClick={() => add(product)}>Ajouter</button>
            <button
              onClick={() => {
                setCart([]);
                setTotal(0);
              }
            }
              >Enlever</button>
          </div>
        ))}
        </div>
    </div>
  )
}