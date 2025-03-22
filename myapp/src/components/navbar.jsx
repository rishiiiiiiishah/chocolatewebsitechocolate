import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './CartContent'; // Import the useCart hook
import '../navbar.css';
import axios from 'axios';

function Navbar() {
    const [active, setActive] = useState("nav__menu");
    const [toggleIcon, setToggleIcon] = useState("nav__toggler");
    const { getCartCount, resetCart } = useCart(); // Get the cart count safely
    const navigate = useNavigate();
    const [authToken, setAuthToken] = useState(localStorage.getItem('token'));

    useEffect(() => {
        // Check localStorage on mount to ensure the auth state is updated
        setAuthToken(localStorage.getItem('token'));
    }, []);

    const navToggle = () => {
        setActive(prevState => (prevState === 'nav__menu' ? 'nav__menu nav__active' : 'nav__menu'));
        setToggleIcon(prevState => (prevState === 'nav__toggler' ? 'nav__toggler toggle' : 'nav__toggler'));
    };

    const handleLogout = async () => {
        try {
            await axios.get('http://localhost:4000/logout', {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            });

            console.log("User logged out");
            localStorage.removeItem('token'); // Remove token from storage
            setAuthToken(null);
            
            // Update state to trigger re-render
            
            navigate('/login'); // Redirect to login
        } catch (error) {
            console.error('Logout Error:', error);
        }
    };

    return (
        <nav className='nav'>
            <Link to="/" className='nav__brand'>
                Chocolicious
            </Link>

            <ul className={active}>
                <li className='nav__item'>
                    <Link to="/" className='nav__link'>Home</Link>
                </li>
                <li className='nav__item'>
                    <Link to="/about" className='nav__link'>AboutUs</Link>
                </li>
                <li className='nav__item'>
                    <Link to="/ourproducts" className='nav__link'>Products</Link>
                </li>
                <li className='nav__item'>
                    <Link to="/contact" className='nav__link'>ContactUs</Link>
                </li>

                <li className='nav__item'>
                    <Link to="/CakeDecor" className='nav__link'>AI</Link>
                </li>
            </ul>

            <div className='nav__search'>
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Search" />
            </div>

            <div className='nav__actions'>
                {authToken ? (
                    <button onClick={handleLogout} className='nav__logout'>
                        Logout
                    </button>
                ) : (
                    <Link to="/login" className='nav__login'>
                        Login
                    </Link>
                )}
                <Link to="/cart" className='nav__cart'>
                    <i className="fas fa-shopping-cart"></i>
                    <span className="cart-count">{getCartCount ? getCartCount() : 0}</span> {/* Prevent errors */}
                </Link>
            </div>

            <div onClick={navToggle} className={toggleIcon}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
        </nav>
    );
}

export default Navbar;
