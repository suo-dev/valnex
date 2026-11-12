import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import ScrollExperience from "../components/common/ScrollExperience";

export default function MainLayout({ children, currentPage }) {
  return (
    <div className="app-shell">
      <ScrollExperience />
      <Header currentPage={currentPage} />
      <main key={currentPage} className="page-enter">
        {children}
      </main>
      <Footer />
    </div>
  );
}
