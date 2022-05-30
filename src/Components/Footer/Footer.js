import React from 'react'
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <span className="name">
                Inshorts clone made by -{" "}
                <a href="#" target="_blank">Mannu Bharti</a>
            </span>
            <hr style={{width:"90%"}}/>
            <div className="iconContainer">
                <a href="#" target="_blank">
                    <i className="fa-brands fa-instagram-square"></i>
                </a>
                <a href="#" target="_blank">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="#" target="_blank">
                    <i className="fa-brands fa-github-square"></i>
                </a>
            </div>
        </div>
    )
}

export default Footer
