import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='header'>
            <div className='navbar'>
                <Link to="/" className='navbar-link'>
                    Home
                </Link>
                <Link to="/about" className='navbar-link'>
                    About
                </Link>
                <Link to="/contact" className='navbar-link'>
                    Contact
                </Link>
                <Link to="/works" className='navbar-link'>
                    My Works
                </Link>
            </div>
        </div>
    );
};
export default Navbar;
