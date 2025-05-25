import React from "react";
import { LOGO_URL } from "../utils/contents";
import { Link, NavLink } from "react-router";
export {LOGO_URL} from "../utils/contents";

const Header = () => {
    return (
        <header>
            <div className="cmp-logo-container">
                <Link to='/'><img src={LOGO_URL} className="cmp-logo" alt="logo"/></Link>
            </div>
            <nav className="cmp-nav-conatiner">
                <ul className="cmp-nav-items">
                    <li className="cmp-nav-item"><NavLink to='/about'>About</NavLink></li>
                    <li className="cmp-nav-item"><Link to='/contact'>Contact</Link></li>
                </ul>
            </nav>
            <button>Cart</button>
        </header>
    )
}

export default Header;
