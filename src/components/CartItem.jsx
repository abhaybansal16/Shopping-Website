import styles from './CartItem.module.css';

function CartItem({ item, onRemove, onQuantityChange }) {
  return (
    <div className={styles.item}>
      <img src={item.image} alt={item.title} className={styles.image} />
      <div className={styles.details}>
        <h4 className={styles.title}>{item.title}</h4>
        <p className={styles.price}>${item.price} × {item.quantity}</p>
      </div>
      <input
        type="number"
        min="1"
        value={item.quantity}
        onChange={(e) => onQuantityChange(item.id, parseInt(e.target.value))}
        className={styles.quantityInput}
      />
      <button onClick={() => onRemove(item.id)} className={styles.removeButton}>
        Remove
      </button>
    </div>
  );
}

export default CartItem;
