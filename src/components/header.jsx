import App from "../App.jsx"
import { Link } from "react-router-dom";

export default function header ({logoSrc}) {
    return (
        <header className="site-header">
            <Link to="/Portfolio" className="menu-btn">Portfolio</Link>
            <Link to="/Home">
                <img className="logo" src={logoSrc} alt="Big Red Media Logo" />
            </Link>
            <Link to="/Contact" className="menu-btn">Contact</Link>
        </header>
    )
}