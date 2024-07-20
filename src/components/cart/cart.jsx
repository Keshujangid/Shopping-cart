import { useOutletContext } from "react-router-dom";
import style from "./cart.module.css";

export default function Cart() {
  const [items, setItems, itemCounter, setItemCounter] = useOutletContext();

  const handleRemoveFromCart = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
    setItemCounter((prev) => prev - 1);
  };

  const handleQuantityChange = (id, quantity) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, count: quantity } : item))
    );
  };

  const calculateTotal = (price, quantity) => {
    return price * quantity;
  };

  return (
    <>
      <h1>Cart</h1>
      <div className={style.table}>
        {items.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Item</th>
                {/* <th>Image</th> */}
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td className={style.itemInfo}>
                    <img src={item.image} alt={item.title} />
                    <div className={style.item}>
                      <strong>{item.title}</strong>
                      <button
                        className={style.remove}
                        onClick={() => handleRemoveFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </td>
                  {/* <td>
                    
                  </td> */}

                  <td>${item.price}</td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      step={1}
                      value={item.count}
                      onChange={(e) =>
                        handleQuantityChange(item.id, Number(e.target.value))
                      }
                    />
                  </td>
                  <td>${calculateTotal(item.price, item.count)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Your cart is empty.</p>
        )}
        <div className={style.total}>
          <strong>Total:</strong>
          <span>
            $
            {items.reduce(
              (acc, item) => acc + calculateTotal(item.price, item.count),
              0
            )}
          </span>
        </div>
      </div>
    </>
  );
}
