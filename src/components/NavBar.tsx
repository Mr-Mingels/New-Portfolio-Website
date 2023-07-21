import React from 'react';
import '../styles/NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    return (
        <div className='navBarWrapper'>
            <div className='navBarContent'>
                <h3 className='navBarTitle'>Mr.Mingels</h3>
                <ul className='navBarItemsWrapper' onMouseDown={(e) => e.preventDefault()}>
                    <a href="https://github.com/Mr-Mingels" target="_blank" rel="noopener noreferrer" 
                    className='navBarItem'><FontAwesomeIcon className='navBarItem' icon={faGithub} /></a>
                    <a href="mailto:Pierre.Mingels@protonmail.com" target="_blank" rel="noopener noreferrer" 
                    className='navBarItem'><FontAwesomeIcon className='navBarItem' icon={faEnvelope} /></a>
                    <a className='navBarItem'><FontAwesomeIcon className='navBarItem' icon={faFile} /></a>
                </ul>
            </div>
        </div>  
    )
}

export default NavBar