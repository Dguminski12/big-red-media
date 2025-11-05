import { Link } from "react-router-dom";

export default function header ({logoSrc}) {
    return (
        <header className="site-header">
            <Link to="/Portfolio" className="menu-btn">Portfolio</Link>
            <Link to="/Testimonials" className="menu-btn">Testimonials</Link>
            <Link to="/">
                <img className="logo" src={logoSrc} alt="Big Red Media Logo" />
            </Link>
            <Link to="/Pricing" className="menu-btn">Pricing</Link>
            <Link to="/Contact" className="menu-btn">Contact</Link>
        </header>
    )
}
