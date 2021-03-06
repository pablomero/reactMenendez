import { useState } from 'react'

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCounter] = useState(1);

  const increment = () => {
    if (count < stock) {
      setCounter(count => count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCounter(count => count - 1);
    }
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount
