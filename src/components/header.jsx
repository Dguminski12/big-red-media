import App from "../App.jsx"

export default function header ({logoSrc}) {
    return (
        <header className="site-header">
            <a className="menu-btn">Portfolio</a>
            <a href="/">
                <img className="logo" src={logoSrc} alt="Big Red Media Logo" />
            </a>
            <a className="menu-btn">Contact</a>
        </header>
    )
}