import React from "react";
import logo from '../../assets/logo.png'
import './header.css'

export default function Header({ onAddMealClick }) {
    return (
        <header className="header">
            <p>
                <div className="logo">
                    <img src={logo} />
                </div>
                <span className="food">Food</span><span className="wagen">Wagen</span>
            </p>
            <button className="addmeal-btn" onClick={onAddMealClick}>Add Meal</button>
        </header>
    )
}