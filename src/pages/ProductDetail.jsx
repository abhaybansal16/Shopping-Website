import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProductDetail.module.css';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className={styles.container}>
      <img src={product.image} alt={product.title} className={styles.image} />
      <h2 className={styles.title}>{product.title}</h2>
      <p className={styles.description}>{product.description}</p>
      <p className={styles.price}>${product.price}</p>
      <button onClick={handleAddToCart} className={styles.button}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetail;
