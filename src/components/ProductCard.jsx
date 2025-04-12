import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <Link to={`/product/${product.id}`} className={styles.link}>
        <img src={product.image} alt={product.title} className={styles.image} />
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.price}>${product.price}</p>
      </Link>
    </div>
  );
}

export default ProductCard;
