import React from 'react';
import '../styles/NavBar.css'

const NavBar = () => {
    return (
        <div className='navBarWrapper'>
            <div className='navBarContent'>
                <h3 className='navBarTitle'>Mr.Mingels</h3>
                <ul className='navBarItemsWrapper'>
                    <li className='navBarItem'>About</li>
                    <li className='navBarItem'>Skills</li>
                    <li className='navBarItem'>Projects</li>
                    <li className='navBarItem'>Contact</li>
                </ul>
            </div>
        </div>  
    )
}

export default NavBar