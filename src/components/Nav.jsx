import React from 'react'
import { Link } from "react-router-dom"

function Nav() {
  return (
    <header className="header">
        <nav className='menu'>
            <ul className='menu__list'>
                <li className='menu__item'>
                    <Link to="/" className='menu__link' href="">Home</Link>
                </li>
                <li className='menu__item'>
                    <Link to="/about" className='menu__link' href="">About Us</Link>
                </li>
                <li className='menu__item'>
                    <Link to="/portfolio" className='menu__link' href="">Portfolio</Link>
                </li>
                <li className='menu__item'>
                    <Link to="/contact" className='menu__link' href="">Contact</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}


export default Nav