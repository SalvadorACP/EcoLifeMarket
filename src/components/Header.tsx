import React from 'react';
import NavBar from './NavBar';

interface HeaderProps {
  // Puedes añadir más props según sea necesario
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
    <div className="logo">
        <h1>EcoLife Market</h1>
    </div>
    <NavBar />
    </header>
  );
};

export default Header;