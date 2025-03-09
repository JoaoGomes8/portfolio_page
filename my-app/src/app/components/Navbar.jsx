


export default function Navbar() {
    return(
        <nav className="nav-main flex py-12 gap-12 flex-wrap">
            <div className="nav-start flex-1">
                <p className="pl-48 text-5xl">Portfolio</p>
            </div>
            <div className="nav-last flex-1 flex gap-10 items-center justify-end pr-24 text-2.5xl">
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    )
}