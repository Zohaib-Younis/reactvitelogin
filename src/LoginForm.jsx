import React from 'react';
import styles from './LoginForm.module.css'; // Import the CSS module

const LoginForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <form>
          <input 
            type="text" 
            id="username" 
            name="username" 
            placeholder="Username" 
            required 
          />
          <input 
            type="password" 
            id="password" 
            name="password" 
            placeholder="Password" 
            required 
          />
          <button type="submit">Login</button>
          <p className={styles.signupMessage}>
            Not registered? <a href="#">Create an account</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm; // Ensure default export
