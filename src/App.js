import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Landing from "./pages/Landing";
import WhatExcitesUs from "./pages/WhatExcitesUs";
import UnderTheHood from "./pages/UnderTheHood";
import OurVision from "./pages/OurVision";
import { useEffect } from "react";

import React from "react";

const App = () => {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/what-excites-us":
        title = "";
        metaDescription = "";
        break;
      case "/under-the-hood":
        title = "";
        metaDescription = "";
        break;
      case "/our-vision":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/what-excites-us" element={<WhatExcitesUs />} />
      <Route path="/under-the-hood" element={<UnderTheHood />} />
      <Route path="/our-vision" element={<OurVision />} />
    </Routes>
  );
};

export default App;
