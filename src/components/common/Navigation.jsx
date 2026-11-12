const links = [
  { id: "service", label: "SERVICE" },
  { id: "about", label: "ABOUT" },
  { id: "partners", label: "PARTNERS" },
];

export default function Navigation({ currentPage, onNavigate }) {
  return (
    <nav className="navigation" aria-label="メインナビゲーション">
      {links.map((link) => (
        <a
          aria-current={currentPage === link.id ? "page" : undefined}
          className={currentPage === link.id ? "is-active" : ""}
          href={`#/${link.id}`}
          key={link.id}
          onClick={onNavigate}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
