import { useState } from "react";
import Navigation from "./Navigation";

export default function Header({ currentPage }) {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  return (
    <header className="site-header">
      <div className="scroll-meter" />
      <div className="container header-inner">
        <a
          className="brand"
          href="#/home"
          onClick={close}
          aria-label="VALNEX ホーム"
        >
          <img
            className="brand-icon"
            src="/valnex/assets/logo/valnex_icon.png"
            alt=""
          />
          <img
            className="brand-wordmark"
            src="/valnex/assets/logo/valnex_text.png"
            alt="VALNEX"
          />
        </a>
        <button
          aria-controls="main-navigation"
          aria-expanded={isOpen}
          className="menu-button"
          onClick={() => setIsOpen((open) => !open)}
          type="button"
        >
          <span className="sr-only">メニューを開く</span>
          <i />
          <i />
        </button>
        <div
          className={`nav-wrapper ${isOpen ? "is-open" : ""}`}
          id="main-navigation"
        >
          <Navigation currentPage={currentPage} onNavigate={close} />
          <a className="header-contact" href="#/contact" onClick={close}>
            お問い合わせ <span>→</span>
          </a>
        </div>
      </div>
    </header>
  );
}
