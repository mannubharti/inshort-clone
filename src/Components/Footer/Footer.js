import React from 'react'
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <span className="name">
                Inshorts clone made by - Mannu Bharti
            </span>
            <hr style={{width:"90%"}}/>
            <div className="iconContainer">
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-instagram-square"></i>
                </a>
                <a href="https://www.linkedin.com/in/mannu-bharti-98317823/" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://github.com/mannubharti/inshort-clone" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-github-square"></i>
                </a>
            </div>
        </div>
    )
}

export default Footer
