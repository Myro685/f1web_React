import { Link } from 'react-router-dom';
import './styles/Navbar.css';
import logo from './logo.png';

function Navbar() {
    return(
        <div className='navbar' id='navbar'>
            <img src={logo} alt='LOGO' className='logo'/>
            <nav className='links'>                   
                <Link to="/">Home</Link>
                <Link to="/teams">Teams</Link>
                <Link to="/galery">Galery</Link>
                <Link to="/me">Me</Link>
                <div className='burber' onClick={NavbarResponsive}>
                    <div id='burOne'></div>
                    <div id='burTwo'></div>
                    <div id='burThree'></div>
                </div>  
            </nav>
        </div>
    );
}
export default Navbar;

function NavbarResponsive() {
    const navbar = document.getElementById("navbar");
    if (navbar.className === "navbar") {
        navbar.className += " responsive";
    } else {
        navbar.className = "navbar";
    }
}