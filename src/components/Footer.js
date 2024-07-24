import "./FooterStyles.css";

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="top">
            <div>
                <h1>Trippy</h1>
                <p>Choose your favourite destination.</p>
            </div>
            <dev>
                <a href="https://www.facebook.com/profile.php?id=100072068383582&mibextid=ZbWKwL">
                    <i className="fa-brands fa-facebook-square"></i>
                </a>
                <a href="https://instagram.com/raza_ur_rehman007?igshid=MzNlNGNkZWQ4Mg==">
                    <i className="fa-brands fa-instagram-square"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-behance-square"></i>
                </a>
                <a href="https://x.com/RazaUrR71887730?t=9sXN8DiPl1Zop8s7KTRoTQ&s=09">
                    <i className="fa-brands fa-twitter-square"></i>
                </a>
            </dev>
        </div>
        <div className="bottom">
            <div>
                <h4>Project</h4>
                <a href="/">Changelog</a>
                <a href="/">Status</a>
                <a href="/">License</a>
                <a href="/">All versions</a>
            </div>
            <div>
                <h4>Community</h4>
                <a href="/">GitHub</a>
                <a href="/">Issues</a>
                <a href="/">Project</a>
                <a href="/">Twitter</a>
            </div>
            <div>
                <h4>Help</h4>
                <a href="/">Support</a>
                <a href="/">Troubleshooting</a>
                <a href="/">Contact Us</a>
                
            </div>
            <div>
                <h4>Others</h4>
                <a href="/">Terms Of Service</a>
                <a href="/">Privacy Policy</a>
                <a href="/">License</a>
                
            </div>
        </div>
    </div>
  )
}

export default Footer