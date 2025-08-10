import React from "react";
import herofood from '../../assets/herofood.png';

import deliveryIcon from '../../assets/delivery.png';
import pickupIcon from '../../assets/pickup.png';  
import searchIcon from '../../assets/searchicon.png';
import './hero.css';

export default function Hero({ searchQuery, setSearchQuery }) {
    return (
        <div className="hero">
            <div className="hero-detail">
                <h2>Are you starving?</h2>
                <p>Within a few clicks, find meals that are accessible near you</p>
                
                <div className="hero-filter-card">
                    <div className="hero-filter-tabs">
                        <button className="filter-btn active">
                            <img src={deliveryIcon} alt="Delivery" className="btn-icon" /> Delivery
                        </button>
                        <button className="filter-btn">
                            <img src={pickupIcon} alt="Pickup" className="btn-icon" /> Pickup
                        </button>
                    </div>

                    <div className="hero-search">
                        <div className="hero-search-bar">

                            <img src={searchIcon} alt="Search" className="search-icon" />
                            <input 
                                type="text" 
                                placeholder="What do you like to eat today?"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <button className="find-meal-btn">Find Meal</button>
                    </div>
                </div>

            </div>
            <div className="hero-img">
                <img src={herofood} alt="Bowl of ramen noodles"/>
            </div>
        </div>
    )
}