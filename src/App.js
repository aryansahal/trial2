import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Wireframe1 from "./pages/Wireframe1";
import WhatInspiresUs from "./pages/WhatInspiresUs";
import UnderTheHood from "./pages/UnderTheHood";
import OurVision from "./pages/OurVision";
import { useEffect, useState } from "react";
import LoginPage from "./pages/trynow/Login";
import StorePage from "./pages/trynow/Store";
import RetrievePage from "./pages/trynow/Retrieve";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  const [credentials, setCredentials] = useState(null);

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
      case "/arrowright":
        title = "";
        metaDescription = "";
        break;
      case "/wireframe-1":
        title = "";
        metaDescription = "";
        break;
      case "/what-inspires-us":
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
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/store":
        title = "";
        metaDescription = "";
        break;
      case "/retrieve":
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

  const [awsCredentials, setAwsCredentials] = useState({});

  const handleLogin = (event) => {
    event.preventDefault();
    setAwsCredentials({
      accessKeyId,
      secretAccessKey,
      region,
    });
    navigate("/upload");
    // TODO: Implement login functionality using AWS SDK
  };

  return (
    <Routes>
      <Route path="/" element={<Wireframe1 />} />
      <Route path="/what-inspires-us" element={<WhatInspiresUs />} />
      <Route path="/under-the-hood" element={<UnderTheHood />} />
      <Route path="/our-vision" element={<OurVision />} />
      <Route
        path="/login"
        element={<LoginPage setAwsCredentials={setAwsCredentials} />}
      />

      <Route path="/store" element={<StorePage />} />
      <Route path="/retrieve" element={<RetrievePage />} />
    </Routes>
  );
}
export default App;
