import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
  });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validación simple
    if (!formData.name || !formData.price || !formData.description || !formData.image) {
      setError('All fields are required.');
      return;
    }

    if (isNaN(Number(formData.price)) || Number(formData.price) <= 0) {
      setError('Price must be a positive number.');
      return;
    }

    // Enviar los datos al backend
    fetch('http://localhost:3000/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        price: parseFloat(formData.price),
        description: formData.description,
        image: formData.image,
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to create product');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        navigate('/products'); // Redirige a la página de productos
      })
      .catch(error => setError(error.message));
  };

  return (
    <div>
      <h2>Add Product</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProductForm;
