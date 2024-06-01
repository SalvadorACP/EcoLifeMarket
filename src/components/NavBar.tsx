import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  const { isAuthenticated, isAdmin, logout } = useAuth();

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {!isAuthenticated && (
          <>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </>
        )}
        {isAuthenticated && (
          <>
            {isAdmin && (
              <>
                <li><Link to="/add-product">Add Product</Link></li>              </>
            )}
            <li><button onClick={logout}>Logout</button></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
