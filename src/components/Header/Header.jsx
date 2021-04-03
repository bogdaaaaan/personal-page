import h from './Header.module.css';

const Header = () => {
    return (
        <div className={h.header}>
            <div className={h.navbar}>
                <a className={h['navbar-link']} href="/">
                    Home
                </a>
                <a className={h['navbar-link']} href="/">
                    About
                </a>
                <a className={h['navbar-link']} href="/">
                    Contact
                </a>
                <a className={h['navbar-link']} href="/">
                    My Works
                </a>
            </div>
            <div className={h['sidebar-button']}></div>

            <div className={h.sidebar}></div>
        </div>
    );
};
export default Header;
