import React from 'react';
import priceIcon from '../../../assets/icon.png'
import './card.css';

export default function Card({ meal }) {
  const statusClass = meal.status === 'Open' ? 'status-open' : 'status-closed';
  return (
    <div className="meal-card">
        <div className="card-image-container">
          <img 
            src={meal.image} 
            alt={meal.name} 
            className="card-image"
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x200/cccccc/ffffff/png?text=Image+Not+Found" }}
          />
          <span className="price-tag"><img src={priceIcon}/>${34}</span>
        </div>

        <div className="card-details">
          <div className="card-row">
            <div className="restaurant-info">
              <img src={meal.logo} alt="restaurant logo" className="restaurant-logo" />
              <h4 className="meal-name">{meal.name}</h4>
            </div>
            <span className="more-icon">⋮</span>
          </div>
          
          <div className="card-row">
            <span className="rating">⭐ {meal.rating ? meal.rating.toFixed(1) : 'N/A'}</span>
          </div>

          <div className="card-row">
            <span className={`status ${statusClass}`}>{meal.status}</span>
          </div>
        </div>
      </div>
    );
}