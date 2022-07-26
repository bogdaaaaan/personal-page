import { Link } from 'react-router-dom';
import h from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={h.header}>
            <div className={h.navbar}>
                <Link to="/" className={h['navbar-link']}>
                    Home
                </Link>
                <Link to="/about" className={h['navbar-link']}>
                    About
                </Link>
                <Link to="/contact" className={h['navbar-link']}>
                    Contact
                </Link>
                <Link to="/works" className={h['navbar-link']}>
                    My Works
                </Link>
            </div>
        </div>
    );
};
export default Navbar;
