import React from 'react';
import '../CssComponents/Footer.css'
const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© {new Date().getFullYear()} EcoLife Market - Todos los derechos reservados.</p>
                <ul className="footer-links">
                    <li><a href="#!">Política de privacidad</a></li>
                    <li><a href="#!">Términos de servicio</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
