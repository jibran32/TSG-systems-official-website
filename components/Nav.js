function SunIcon() {
  return (
    <svg className="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Nav() {
  return (
    <header id="hdr">
      <div className="wrap nav">
        <a href="#top" className="logo" aria-label="TSG Systems — home">
          <img className="logo-img logo-on-light" src="/logo-light.png" width="1920" height="1000" alt="TSG Systems" />
          <img className="logo-img logo-on-dark" src="/logo-dark.png" width="1902" height="990" alt="TSG Systems" />
        </a>
        <nav className="nav-links" id="navlinks">
          <div className="nav-menu">
            <a href="#services">Services</a>
            <a href="#products">Products</a>
            <a href="#process">Process</a>
            <a href="#about">About</a>
          </div>
          <a href="#contact" className="btn btn-primary" data-magnetic>
            Start a project
          </a>
        </nav>
        <button className="theme-toggle" id="themeBtn" type="button" aria-label="Toggle light / dark theme">
          <SunIcon />
          <MoonIcon />
        </button>
        <button className="menu-toggle" id="menuBtn" aria-label="Menu" aria-expanded="false">
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
