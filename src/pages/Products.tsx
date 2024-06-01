import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../CssComponents/Products.css'

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError('Failed to fetch products');
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await fetch(`http://localhost:3000/api/products/${id}`, {
        method: 'DELETE',
      });
      setProducts(products.filter(product => product._id !== id));
    } catch (error) {
      setError('Failed to delete product');
    }
  };

  return (
    <div className="products-container">
      <h2>Our Products</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {products.map(product => (
          <li key={product._id}>
            <Link to={`/products/${product._id}`}>{product.name}</Link>
            {isAuthenticated && <button onClick={() => handleDelete(product._id)}>Delete</button>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
