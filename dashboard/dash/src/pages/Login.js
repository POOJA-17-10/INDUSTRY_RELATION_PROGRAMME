// // // src/pages/Login.js
// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import '../styles/Login.css'; // Ensure this CSS file exists

// // const Login = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const navigate = useNavigate();

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     const storedUser = JSON.parse(localStorage.getItem('user'));

// //     // Check if the email and password match the stored user credentials
// //     if (storedUser && storedUser.email === email && storedUser.password === password) {
// //       navigate('/');
// //     } else {
// //       alert('Invalid email or password');
// //     }
// //   };

// //   return (
// //     <div className="login-container">
// //       <h2>Login</h2>
// //       <form onSubmit={handleSubmit}>
// //         <label>
// //           Email:
// //           <input
// //             type="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             required
// //           />
// //         </label>
// //         <label>
// //           Password:
// //           <input
// //             type="password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             required
// //           />
// //         </label>
// //         <button type="submit">Login</button>
// //       </form>
// //       <p>Don't have an account? <a href="/signup">Sign up</a></p>
// //     </div>
// //   );
// // };

// // export default Login;

// src/pages/Login.js
// // src/pages/Login.js
// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Login.css'; // Ensure this path is correct

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const loginData = { email, password };

    try {
        const response = await axios.post('http://localhost:8080/api/auth/login', loginData);
        alert(`Welcome back, ${response.data.email}`); // Utilize the response
        navigate('/');
    } catch (error) {
        // Check if there's a response from the backend
        if (error.response && error.response.data && typeof error.response.data === 'object') {
            // Extract a specific error message if available
            const message = error.response.data.message || 'Invalid email or password';
            setErrorMessage(message);
        } else {
            setErrorMessage('No response from server');
        }
        console.error('Error during login:', error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/signup">Sign Up</a></p>
    </div>
  );
};

export default Login;
