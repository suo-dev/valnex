import { useLayoutEffect, useState } from "react";
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
  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const updateRoute = () => {
      setRoute(routeFromHash());
    };
    window.addEventListener("hashchange", updateRoute);
    return () => window.removeEventListener("hashchange", updateRoute);
  }, []);

  useLayoutEffect(() => {
    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;

    // Override the site-wide smooth scrolling for page changes only.
    root.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    root.scrollTop = 0;
    document.body.scrollTop = 0;
    root.style.scrollBehavior = previousScrollBehavior;
  }, [route]);

  const Page = pages[route];
  return (
    <MainLayout currentPage={route}>
      <Page />
    </MainLayout>
  );
}
