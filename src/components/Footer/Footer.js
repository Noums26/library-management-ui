import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export const Footer = () => {

    return (
        <footer>
            <div className='container'>
            <div className='footer__container'>
                <div className='footer__option'>
                    <h5>HEAD OFFICE</h5>
                    <p>Antananarivo</p>
                    <p>Madagascar</p>
                </div>
                <div className='footer__option'>
                    <h5>ADDRESS</h5>
                    <p>(+261) 3X 12 345 67</p>
                    <p>library@library.com</p>
                </div>
                <div className='footer__option'>
                    <h5>NEWSLETTER</h5>
                    <input type='email' placeholder='email@email.com'/>
                </div>
            </div>
            <div className='footer__indication'>
                <Link className='indication__option' to="/">home</Link>
                <Link className='indication__option' to="/booklist">book list</Link>
                <Link className='indication__option' to='/about'>about</Link>
                <Link className='indication__option' to='/contact'>contact</Link>
            </div>
            </div>
        </footer>
    )
}

export default Footer
