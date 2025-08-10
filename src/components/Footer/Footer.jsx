import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import './footer.css';

export default function Footer() {
    return(
        <footer className="footer-container">
            <div className="footer-main">
                <div className="footer-links">
                    <div className="footer-column">
                        <h4>Company</h4>
                        <a href="#">About us</a>
                        <a href="#">Team</a>
                        <a href="#">Careers</a>
                        <a href="#">Blog</a>
                    </div>
                    <div className="footer-column">
                        <h4>Contact</h4>
                        <a href="#">Help & Support</a>
                        <a href="#">Partner with us</a>
                        <a href="#">Ride with us</a>
                    </div>
                    <div className="footer-column">
                        <h4>Legal</h4>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Refund & Cancellation</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Cookie Policy</a>
                    </div>
                </div>
                <div className="footer-subscribe">
                    <h5>FOLLOW US</h5>
                    <div className="social-icons">
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaTwitter /></a>
                    </div>
                    <h5>Receive exclusive offers in your mailbox</h5>
                    <div className="newsletter">
                        <div className='newsletter-form'>
                            <MdOutlineEmail className="email-icon" />
                            <input type="email" placeholder="Enter Your email" />

                        </div>
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>All rights Reserved &copy; Your Company, 2021</p>
                <p>Made with <span className="heart">♥</span> by Themewagon</p>
            </div>
        </footer>
    );
}