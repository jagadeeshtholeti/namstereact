import React from "react";
import { LOGO_URL } from "../utils/contents";
export {LOGO_URL} from "../utils/contents";

const Header = () => {
    return (
        <header>
            <div className="cmp-logo-container">
                <img src={LOGO_URL} className="cmp-logo" alt="logo"/>
            </div>
            <nav className="cmp-nav-conatiner">
                <ul className="cmp-nav-items">
                    <li className="cmp-nav-item">home</li>
                    <li className="cmp-nav-item">About</li>
                    <li className="cmp-nav-item">Contact</li>
                </ul>
            </nav>
            <button>Cart</button>
        </header>
    )
}

export default Header;
