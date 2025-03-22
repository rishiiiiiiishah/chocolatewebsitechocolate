// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import './signup.css';

// function Signup() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     useEffect(() => {
//         document.body.classList.add('login-body');
//         return () => {
//             document.body.classList.remove('login-body');
//         };
//     }, []);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Add your signup logic here
//         console.log(email, password);
//     };

//     return (
//         <div className="login-page">
//             <div className="login-container">
//                 <div className="login-form">
//                     <h2>Login</h2>
//                     <form onSubmit={handleSubmit}>
//                         <div className="form-group">
//                             <label htmlFor="email">Email Address</label>
//                             <input
//                                 type="email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 id="email"
//                                 placeholder="Enter your email"
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="password">Password</label>
//                             <input
//                                 type="password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 id="password"
//                                 placeholder="Enter your password"
//                             />
//                         </div>
//                         <button type="submit" className="login-button">Continue</button>
//                         <p className="signup-link">
//                             New user? <Link to="/login">Click here</Link>
//                         </p>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Signup;
