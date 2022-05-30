import React from 'react';
import './NavInshorts.css';
import HumbergerDrawer from '../HumbergerDrawer'

const NavInshorts = ({ setCategory }) => {
    return (
        <div className="nav">
            <div className="icon">
                <HumbergerDrawer setCategory={setCategory}/>
            </div>
            <img style={{cursor:'pointer', height:'80%'}} src="/logo_inshorts.png" alt="logo" />
        </div>

    )
}

export default NavInshorts
