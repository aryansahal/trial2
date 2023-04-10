import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import PortalPopup from "../components/PortalPopup";
import RequestWhitePaperContainer from "../components/RequestWhitePaperContainer";
import "./WhatExcitesUs-mobile.css";

const WhatExcitesUsMobile = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const onVector2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onUnlockingNewPotentialClick = useCallback(() => {
    navigate("/our-vision-mobile");
  }, [navigate]);

  const onUnderTheHoodClick = useCallback(() => {
    navigate("/under-the-hood-mobile");
  }, [navigate]);

  const onWhatExcitesUsClick = useCallback(() => {
    navigate("/what-excites-us-mobile");
  }, [navigate]);

  const onVector1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const openMenu = useCallback(() => {
    setMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <>
      <div className="what-excites-us-mobile">
        <div className="what-excites-us-mobile-child" />
        <div className="forecasting-that-feels">
          Forecasting that feels like a Prophecy
        </div>
        <img className="vector-icon2" alt="" src="/vector.svg" />
        <div className="sowing-the-seeds-container1">
          <p className="the-seeds-for">Sowing</p>
          <p className="the-seeds-for">the seeds for AGI</p>
        </div>
        <div className="use-our-in-house">{`Use our in-house next-gen AI weather forecasting models & never forget to bring an umbrella on a sunny day`}</div>
        <div className="a-pressing-issue-container">
          <p className="the-seeds-for">
            A pressing issue of our day is the ever-present anxiety about
            climate change. Weather forecasting is a vital component of trying
            to tackle this larger issue of climate change. A 10% improvement in
            weather forecasting can be the difference between detecting a
            hurricane early, which could go on to save hundreds of lives. 
          </p>
          <p className="the-seeds-for">&nbsp;</p>
          <p className="the-seeds-for">
            We use novel in-house AI models, built using logic programming to
            improve upon the current forecasts; a problem that has been
            notoriously difficult to solve.
          </p>
        </div>
        <div className="navbar-container">
          <div className="navbar1">
            <img
              className="vector-icon3"
              alt=""
              src="/vector1.svg"
              onClick={onVector1Click}
            />
            <img
              className="hamburger-icon2"
              alt=""
              src="/hamburger1.svg"
              onClick={openMenu}
            />
          </div>
        </div>
        <RequestWhitePaperContainer
          productIds="/facebookfill.svg"
          propBottom="0px"
          propLeft="calc(50% - 196.5px)"
          onVector2Click={onVector2Click}
          onUnlockingNewPotentialClick={onUnlockingNewPotentialClick}
          onUnderTheHoodClick={onUnderTheHoodClick}
          onWhatExcitesUsClick={onWhatExcitesUsClick}
        />
      </div>
      {isMenuOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMenu}
        >
          <Menu onClose={closeMenu} />
        </PortalPopup>
      )}
    </>
  );
};

export default WhatExcitesUsMobile;
