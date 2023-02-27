import Language from "../../components/language";
import Logo from "../../components/logo";
import Navigation from "../../components/navigation";

import "./style.css"

const Header = () => {
    return(
        <header className="header">
            <Logo />
            <div className="menu">
                <Navigation />
                <Language />
            </div>
        </header>
    )
}

export default Header;