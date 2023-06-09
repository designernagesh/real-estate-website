import logoImage from '../images/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav>
            <Link to="intro" className="logo">
                <img src={logoImage} alt="logo" />	
            </Link>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
                <span className="nav-icon"></span>
            </label>

            <ul className="menu">
                <li><Link to="intro">Home</Link></li>
                <li><Link to="about">About</Link></li>
                <li><Link to="agents">Agents</Link></li>
                <li><Link to="property">Property</Link></li>
                <li><Link to="contact">Contact</Link></li>
            </ul>

            <a href="#" className="property">Properties</a>
        </nav>
    )
}

export default Navbar;
