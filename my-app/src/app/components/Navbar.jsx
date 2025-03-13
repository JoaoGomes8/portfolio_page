export default function Navbar() {
  return (
    <nav className="nav-main flex py-12 gap-12 flex-wrap">
      {/* Portfolio text with fade-in-up animation */}
      <div className="nav-start flex-1 navbar-fade-in-up navbar-delay-1">
        <p className="pl-48 text-5xl">Portfolio</p>
      </div>

      {/* Navbar links slide from right to left */}
      <div className="nav-last flex-1 flex gap-10 items-center justify-end pr-24 text-2.5xl">
        <a className="navbar-slide-right navbar-delay-1" href="#about">About</a>
        <a className="navbar-slide-right navbar-delay-2" href="#experience">Experience</a>
        <a className="navbar-slide-right navbar-delay-3" href="#projects">Projects</a>
        <a className="navbar-slide-right navbar-delay-4" href="#contact">Contact</a>
      </div>
    </nav>
  );
}
