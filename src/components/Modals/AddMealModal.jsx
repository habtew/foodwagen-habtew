import React, { useState } from 'react';
import './addmealmodal.css';

const API_URL = 'https://6852821e0594059b23cdd834.mockapi.io/Food';

export default function AddMealModal({ closeModal, onMealAdded }) {
  const [formData, setFormData] = useState({
    name: '',
    rating: '',
    avatar: '',
    logo: '',
    open: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const newMeal = {
      ...formData,
      rating: parseFloat(formData.rating),
      createdAt: new Date().toISOString(),
    };

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMeal),
      });

      if (!response.ok) {
        throw new Error('Failed to add meal. Please try again.');
      }

      const addedMeal = await response.json();
      onMealAdded(addedMeal); 
      closeModal();
    } catch (e) {
      setError(e.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>Add a meal</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Food name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Food name is required" required />
          </div>
          <div className="form-group">
            <label htmlFor="rating">Food rating</label>
            <input type="number" id="rating" name="rating" value={formData.rating} onChange={handleChange} placeholder="Food rating" step="0.1" min="0" max="5" required />
          </div>
          <div className="form-group">
            <label htmlFor="avatar">Food image (URL)</label>
            <input type="url" id="avatar" name="avatar" value={formData.avatar} onChange={handleChange} placeholder="https://..." required />
          </div>
          <div className="form-group">
            <label htmlFor="logo">Restaurant logo (URL)</label>
            <input type="url" id="logo" name="logo" value={formData.logo} onChange={handleChange} placeholder="https://..." required />
          </div>
          <div className="form-group-checkbox">
            <input type="checkbox" id="open" name="open" checked={formData.open} onChange={handleChange} />
            <label htmlFor="open">Restaurant status (checked = open)</label>
          </div>
          
          {error && <p className="form-error">{error}</p>}

          <div className="form-actions">
            <button type="submit" className="btn-add" disabled={isSubmitting}>
              {isSubmitting ? 'Adding...' : 'Add'}
            </button>
            <button type="button" className="btn-cancel" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}