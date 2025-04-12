// Header.jsx
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header({ onLogout }) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/home" className={styles.link}>Home</Link>
        <Link to="/cart" className={styles.link}>Cart</Link>
        <button onClick={onLogout} className={styles.button}>Logout</button>
      </nav>
    </header>
  );
}
