import Logo from "./logo.js";
import Menu from "./menu.js";

import './Header.css';
function Header(){
    return(
        <div className="nav-bar">
        <Logo />
        <Menu />

        
        </div>
    );
}
export default Header;
