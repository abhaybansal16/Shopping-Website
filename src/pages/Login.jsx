import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

function Login({ onLogin }) {
  const [username, setUsername] = useState('mor_2314');
  const [password, setPassword] = useState('83r5^_');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const text = await res.text();
      console.log('Raw login response:', text);

      const data = JSON.parse(text);
      if (res.ok && data.token) {
        localStorage.setItem('token', data.token);
        onLogin();
        navigate('/home');
      } else {
        alert('Login failed: ' + (data.message || 'Invalid credentials'));
      }
    } catch (err) {
      console.error('Login error:', err);
      alert('Login request failed.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <h1 className={styles.title}>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className={styles.input}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Login
      </button>
    </form>
  );
}

export default Login;
