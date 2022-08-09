import { useRef, useEffect } from 'react';
import './Navbar.css';


const Navbar = () => {
    const ref = useRef(null);

    useEffect(() => {
        const nav_element = ref.current;
        let pos = window.pageYOffset;
        window.onscroll = function() {
            let cur_pos = window.pageYOffset;
            nav_element.style.top = pos > cur_pos ? "0px" : "-150px";
            pos = cur_pos;
        };

    }, []);

    return (
        <header id='navbar' ref={ref} className='navbar'>
            <nav className='navbar-list'>
                <a href='#home' className='navbar-link'>
                    Home
                </a>
                <a href='#about' className='navbar-link'>
                    About
                </a>
                <a href='#works' className='navbar-link'>
                    My Works
                </a>
                <a href='#contact' className='navbar-link'>
                    Contact
                </a>
            </nav>
        </header>
    );
};
export default Navbar;
