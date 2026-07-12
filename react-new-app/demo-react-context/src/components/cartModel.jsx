import React from "react";
import styles from "../styles/CartModal.module.css";
import { useValue } from "../context";

function CartModal({toggle}) {
  const {total,cart} = useValue();

  return (
    <div className={styles.cartModal}>
      <div className={styles.closeButton} onClick={toggle} >
        Close
      </div>
      <div className={styles.clearButton} /*onClick={clear}*/>
        Clear
      </div>
      <div className={styles.itemContainer}>
      {cart.map((items) => {return(
          <div className={styles.cartCard} key={items.id}>
            <h1>{items.name}</h1>
            <h3>x{items.qty}</h3>
            <h3>x{items.qty * items.price}</h3>
          </div>

        )})}
      </div>
      <div className={styles.total}>
        <div className={styles.totalText}>Total</div>
        <div className={styles.totalPrice}>{total}</div>
      </div>
    </div>
  );
}

export default CartModal;
