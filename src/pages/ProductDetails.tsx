import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../CssComponents/ProductDetails.css';

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError('Failed to fetch product details');
      }
    };

    fetchProduct();
  }, [id]);

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="product-details-container">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} className="product-image" />
      <p className="product-description">{product.description}</p>
      <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductDetails;
