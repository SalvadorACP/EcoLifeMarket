import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './context/AuthContext';

describe('App Component', () => {
  it('renders App component with header and routes', () => {
    render(
      
        <AuthProvider>
          <App />
        </AuthProvider>
      
    );

    // Verificar que el encabezado se renderiza
    expect(screen.getByText('EcoLife Market')).toBeInTheDocument();

    // Verificar que las rutas principales están presentes
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
});
