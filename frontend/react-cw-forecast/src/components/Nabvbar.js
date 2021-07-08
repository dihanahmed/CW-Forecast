import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        CW <i className="fab fa-typo3"/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? "nav-menu-active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/weather" className="nav-links" onClick={closeMobileMenu}>
                                WeatherAPI
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/climate-simulator" className="nav-links" onClick={closeMobileMenu}>
                                Climate Simulator
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
                                Blogs
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/donate" className="nav-links" onClick={closeMobileMenu}>
                                Donate
                            </Link>
                        </li>
                    </ul>
                </div>

            </nav>

        </>
    )
}

export default Navbar;