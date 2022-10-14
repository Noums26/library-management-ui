import { Link } from 'react-router-dom'
import './Header.css'

export const Header = () => {
    return (
        <>
            <header className="header">
                <Link to="/" className="logo">Library</Link>
                <ul className="menu">
                    <li><Link to="/booklist">Book list</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </header>
        </>
    )
}