import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><img src="./images/iyagi-logo.png" alt="Logo" /></li>
                <li>About</li>
                <li>Top Stories</li>
                <li>Media</li>
                <li>Blog</li>
                <li>Events</li>
                <li>Contact Us</li>

            </ul>
            <div className='options'>
                <img className='user-icon' src="./images/user-icon.png" alt="user-icon" height="55px" width="60px" />
                <img src="./images/world-icon.png" alt="user-icon" height="30px" width="30px" />
                <div className='lang-options'>
                    EN
                    <img src="./images/Polygon.png" alt="arrow" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar