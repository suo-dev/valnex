export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div>
          <a className="brand-light brand" href="#/home">
            <img
              className="brand-icon"
              src="/valnex/assets/logo/valnex_icon_inv.png"
              alt=""
            />
            <img
              className="brand-wordmark"
              src="/valnex/assets/logo/valnex_text_inv.png"
              alt="VALNEX"
            />
          </a>
          <p>学生の努力を、新しい価値に変える。</p>
        </div>
        <div className="footer-navigation">
          <a href="#/service">SERVICE</a>
          <a href="#/about">ABOUT</a>
          <a href="#/partners">PARTNERS</a>
          <a href="#/contact">CONTACT</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} VALNEX Inc.</span>
        <span>学ぶよろこびをキャンパスに。</span>
      </div>
    </footer>
  );
}
