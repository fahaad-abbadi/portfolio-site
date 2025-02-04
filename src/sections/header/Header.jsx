import React from 'react'
import HeaderImage from '../../assets/header.jpg'
import data from './data'
import './Header.css'

const Header = () => {
    return (
        <header id="header">
            <div className="container header__container">
                <div className="header__profile">
                    <img src={HeaderImage} alt="Header Portrait"/>
                </div>

                <h3>Fahaad Abbadi</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae numquam eius quasi? Accusantium in officia deserunt, voluptatibus odit porro quas, architecto dolorem fugit eius dicta nisi non culpa odio perferendis.
                </p>

                <div className="header__cta">
                    <a href="#contact" className='btn primary'>Let's Talk</a>
                    <a href="#portfolio" id="portfolio" className='btn light'>My Work</a>
                </div>

                <div className="header__socials">
                    {
                        data.map((item) => (
                            <a key = {item.id} href={item.link} rel="noopener noreferrer">{item.icon}</a>
                        ))
                    }
                </div>
            </div>
        </header>
    )
}

export default Header