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
                <li><Link to="intro" spy={true} smooth={true} duration={500}>Home</Link></li>
                <li><Link to="about" spy={true} smooth={true} duration={500}>About</Link></li>
                <li><Link to="agents" spy={true} smooth={true} duration={500}>Agents</Link></li>
                <li><Link to="property" spy={true} smooth={true} duration={500}>Property</Link></li>
                <li><Link to="contact" spy={true} smooth={true} duration={500}>Contact</Link></li>
            </ul>

            <a href="#" className="property">Properties</a>
        </nav>
    )
}

export default Navbar;
