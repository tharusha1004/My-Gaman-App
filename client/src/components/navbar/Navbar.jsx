import React from 'react'

// import Navbar.css
import '../navbar/Navbar.css';

const Navbar = () => {
    return (
        <div className='navBar'>
            <div className="navContainer">
                <span className='logo'>MyGaman</span>
                <div className='navItems'>
                    <button className='navButton'>Register</button>
                    <button className='navButton'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar