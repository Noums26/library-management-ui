import React from 'react'
import '../styles/Footer.css'


export const Footer = () => {

    return (
        <footer>
            <div className='container'>
            <div className='footer__container'>
                <div className='footer__option'>
                    <h5>SIEGE</h5>
                    <span>Antaninarenina Antananarivo</span>
                    <span>Madagascar, route 35</span>
                </div>
                <div className='footer__option'>
                    <h5>ADRESSE</h5>
                    <span>Information nécéssaire</span>
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
                <span className='indication__option'>accueil</span>
                <span className='indication__option'>ce que nous offrons</span>
                <span className='indication__option'>actualité</span>
                <span className='indication__option'>contact</span>
            </div>
            </div>
        </footer>
    )
}

export default Footer
