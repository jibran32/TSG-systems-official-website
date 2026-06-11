export default function Footer() {
  return (
    <footer>
      <div className="foot-watermark">TSG Systems</div>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <a href="#top" className="logo" aria-label="TSG Systems — home">
              <img className="logo-img logo-on-light" src="/logo-light.png" width="1920" height="1000" alt="TSG Systems" />
              <img className="logo-img logo-on-dark" src="/logo-dark.png" width="1902" height="990" alt="TSG Systems" />
            </a>
            <p className="foot-about">
              A software studio building custom applications, automations, and Odoo solutions
              for growing businesses.
            </p>
          </div>
          <div>
            <h4>Services</h4>
            <a href="#services">Software Development</a>
            <a href="#services">Mobile App Development</a>
            <a href="#services">AI Agents</a>
            <a href="#services">Automations</a>
            <a href="#services">Odoo Development</a>
          </div>
          <div>
            <h4>Company</h4>
            <a href="#products">Products</a>
            <a href="#process">Process</a>
            <a href="#about">About</a>
          </div>
          <div>
            <h4>Contact</h4>
            <a href="mailto:hello@tsgsystems.com">hello@tsgsystems.com</a>
            <a href="#">Islamabad, PK</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 TSG Systems. All rights reserved.</span>
          <span>Built with care</span>
        </div>
      </div>
    </footer>
  );
}
