import React from 'react';
import Card from './Card/Card';
import './main.css';

export default function Main({ meals, isLoading, error }) {
  const renderContent = () => {
    if (isLoading) {
      return <p className="status-message">Loading meals...</p>;
    }

    if (error) {
      return <p className="status-message error">Error: {error}</p>;
    }

    if (meals.length === 0) {
      return <p className="status-message">No meals found.</p>;
    }

    return meals.map(meal => <Card key={meal.id} meal={meal} />);
  };

  return (
    <main className="main-content">
      <h2 className="main-title">Featured Meals</h2>
      
      <div className="card-container">
        {renderContent()}
      </div>

      {!isLoading && !error && meals.length > 0 && (
        <button className="load-more-btn">Load more</button>
      )}
    </main>
  );
}