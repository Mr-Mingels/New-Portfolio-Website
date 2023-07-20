import React from 'react'
import '../styles/SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFile, faHouse, faUser, faBriefcase, faToolbox } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from 'react-router-dom'

const SideBar = () => {
    const router = useLocation()
    const pathname = router.pathname
  return (
    <div className='sideBarWrapper'>
        <div className='sideBarContent'>
            <ul className='sideBarListWrapper'>
                <Link to='/' className='sideBarListItemLink'><FontAwesomeIcon className='sideBarListItem' icon={faHouse} /></Link>
                <Link to='/aboutme' className='sideBarListItemLink'><FontAwesomeIcon className='sideBarListItem' icon={faUser} /></Link>
                <Link to='/projects' className='sideBarListItemLink'><FontAwesomeIcon className='sideBarListItem' icon={faBriefcase} /></Link>
                <Link to='/skills' className='sideBarListItemLink'><FontAwesomeIcon className='sideBarListItem' icon={faToolbox} /></Link>
                <Link to='/contact' className='sideBarListItemLink'><FontAwesomeIcon className='sideBarListItem' icon={faEnvelope} /></Link>
            </ul>
        </div>
    </div>
  )
}

export default SideBar
