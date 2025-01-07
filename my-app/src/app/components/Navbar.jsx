import "../styles/navbar.scss";


export default function Navbar() {
    return(
        <nav className="nav-main">
            <div className="nav-start">
                <p>Portfolio</p>
            </div>
            <div className="nav-last">
                <p>About</p>
                <p>Experience</p>
                <p>Projects</p>
                <p>Contact</p>
            </div>
        </nav>
    )
}