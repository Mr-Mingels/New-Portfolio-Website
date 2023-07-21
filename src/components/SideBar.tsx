import React from 'react'
import '../styles/SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFile, faHouse, faUser, faBriefcase, faToolbox } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from 'react-router-dom'

const SideBar = () => {
    const location = useLocation()
  return (
    <div className='sideBarWrapper'>
        <div className='sideBarContent'>
            <ul className='sideBarListWrapper'>
                <Link to='/' className='sideBarListItemLink'><FontAwesomeIcon 
                className={`sideBarListItem ${location.pathname === '/' ? 'inRoute' : ''}`} icon={faHouse} /></Link>
                <Link to='/aboutme' className='sideBarListItemLink'><FontAwesomeIcon 
                className={`sideBarListItem ${location.pathname === '/aboutme' ? 'inRoute' : ''}`} icon={faUser} /></Link>
                <Link to='/projects' className='sideBarListItemLink'><FontAwesomeIcon 
                className={`sideBarListItem ${location.pathname === '/projects' ? 'inRoute' : ''}`} icon={faBriefcase} /></Link>
                <Link to='/skills' className='sideBarListItemLink'><FontAwesomeIcon 
                className={`sideBarListItem ${location.pathname === '/skills' ? 'inRoute' : ''}`} icon={faToolbox} /></Link>
                <Link to='/contact' className='sideBarListItemLink'><FontAwesomeIcon 
                className={`sideBarListItem ${location.pathname === '/contact' ? 'inRoute' : ''}`} icon={faEnvelope} /></Link>
            </ul>
        </div>
    </div>
  )
}

export default SideBar
