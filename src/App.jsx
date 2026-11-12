import { useEffect, useState } from "react";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Partners from "./pages/Partners";
import Service from "./pages/Service";

const pages = {
  home: Home,
  service: Service,
  about: About,
  partners: Partners,
  contact: Contact,
};

function routeFromHash() {
  const route = window.location.hash.replace("#/", "").split("/")[0];
  return pages[route] ? route : "home";
}

export default function App() {
  const [route, setRoute] = useState(routeFromHash);
  useEffect(() => {
    const updateRoute = () => {
      setRoute(routeFromHash());
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };
    window.addEventListener("hashchange", updateRoute);
    return () => window.removeEventListener("hashchange", updateRoute);
  }, []);
  const Page = pages[route];
  return (
    <MainLayout currentPage={route}>
      <Page />
    </MainLayout>
  );
}
