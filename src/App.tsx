import React from 'react';
import Header from './components/Header';
import AppRouter from './AppRouter';
import './App.css';
import Footer from './components/Footer';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <AppRouter />
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
