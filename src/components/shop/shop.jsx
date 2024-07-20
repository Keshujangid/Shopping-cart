import styles from "./shop.module.css";
import useFetchData from "../data/data";
import cartLogo from "./cart-shopping-solid.svg";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";

export default function Shop() {
  const { data, loading } = useFetchData();
  const [items, setItems, itemCounter, setItemCounter] = useOutletContext();

  const handleAddToCart = (e, item) => {
    e.preventDefault();
    if (!items.some(cartItem => cartItem.id === item.id)) {
      setItems(prev => [...prev, { ...item, count: 1 }]);
      setItemCounter(prev => prev + 1);
    }
  };
  return (
    <div className={styles.productList}>
      {data ? (
        data.map((item) => (
          <div className={styles.card} key={item.id}>
            <div className={styles.cardImg}>
              <img src={item.image} alt={item.title} />
            </div>
            <div className={styles.cardInfo}>
              <p className={styles.textTitle}>{item.title}</p>
              {/* <p className={styles.textBody}>{item.description}</p> */}
            </div>
            <div className={styles.cardFooter}>
              <span className={styles.textTitle}>${item.price}</span>
              <div
                className={styles.cardButton}
                onClick={(e) => {
                  handleAddToCart(e, item);
                }}
              >
                <img src={cartLogo} alt="" className={styles.svgIcon} />
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
