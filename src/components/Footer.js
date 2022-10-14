import React from 'react'
import '../styles/Footer.css'


export const Footer = () => {

    return (
        <footer>
            <div className='container'>
            <div className='footer__container'>
                <div className='footer__option'>
                    <h5>HEAD OFFICE</h5>
                    <span>Antananarivo</span>
                    <span>Madagascar</span>
                </div>
                <div className='footer__option'>
                    <h5>ADDRESS</h5>
                    <span>Lot iet 51 fvmb</span>
                    <span>(+71) 123456789</span>
                    <span>fmb@gmail.com</span>
                </div>
                <div className='footer__option'>
                    <h5>NEWSLETTER</h5>
                    <input type='text'/>
                </div>
            </div>
            <div className='footer__indication'>
                <a className='indication__option' href='#booklist'>book list</a>
                <a className='indication__option' href='#about'>about</a>
                <a className='indication__option' href='#contact'>contact</a>
            </div>
            </div>
        </footer>
    )
}

export default Footer
