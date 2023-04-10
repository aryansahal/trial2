import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import PortalPopup from "../components/PortalPopup";
import RequestWhitePaperContainer from "../components/RequestWhitePaperContainer";
import "./WhatExcitesUs-mobile.css";
import "./WhatExcitesUs.css";
import React from "react";

const MobileApp = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const onVector2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onUnlockingNewPotentialClick = useCallback(() => {
    navigate("/our-vision");
  }, [navigate]);

  const onUnderTheHoodClick = useCallback(() => {
    navigate("/under-the-hood");
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
        <div className="forecasting-that-feels-mobile">
          Forecasting that feels like a Prophecy
        </div>
        <img className="vector-icon2-mobile" alt="" src="/vector.svg" />
        <div className="sowing-the-seeds-container1-mobile">
          <p className="the-seeds-for-mobile">Sowing</p>
          <p className="the-seeds-for-mobile">the seeds for AGI</p>
        </div>
        <div className="use-our-in-house-mobile">{`Use our in-house next-gen AI weather forecasting models & never forget to bring an umbrella on a sunny day`}</div>
        <div className="a-pressing-issue-container-mobile">
          <p className="the-seeds-for-mobile">
            A pressing issue of our day is the ever-present anxiety about
            climate change. Weather forecasting is a vital component of trying
            to tackle this larger issue of climate change. A 10% improvement in
            weather forecasting can be the difference between detecting a
            hurricane early, which could go on to save hundreds of lives. 
          </p>
          <p className="the-seeds-for-mobile">&nbsp;</p>
          <p className="the-seeds-for-mobile">
            We use novel in-house AI models, built using logic programming to
            improve upon the current forecasts; a problem that has been
            notoriously difficult to solve.
          </p>
        </div>
        <div className="navbar-container-mobile">
          <div className="navbar1-mobile">
            <img
              className="vector-icon3-mobile"
              alt=""
              src="/vector1.svg"
              onClick={onVector1Click}
            />
            <img
              className="hamburger-icon2-mobile"
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

const DesktopApp = () => {
  const navigate = useNavigate();

  const onUnlockingNewPotentialClick = useCallback(() => {
    navigate("/our-vision");
  }, [navigate]);

  const onUnderTheHoodClick = useCallback(() => {
    navigate("/under-the-hood");
  }, [navigate]);

  const onWhatExcitesUsClick = useCallback(() => {
    navigate("/what-excites-us");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    // Please sync "Landing" to the project
  }, []);

  const onGroupContainer1Click = useCallback(() => {
    // Please sync "Landing" to the project
  }, []);

  const onUnlockingNewPotential1Click = useCallback(() => {
    navigate("/our-vision");
  }, [navigate]);

  const onUnderTheHood1Click = useCallback(() => {
    navigate("/under-the-hood");
  }, [navigate]);

  const onWhatExcitesUs1Click = useCallback(() => {
    navigate("/what-excites-us");
  }, [navigate]);

  const onUnlockingNewPotential2Click = useCallback(() => {
    navigate("/our-vision");
  }, [navigate]);

  const onUnderTheHood2Click = useCallback(() => {
    navigate("/under-the-hood");
  }, [navigate]);

  const onWhatExcitesUs2Click = useCallback(() => {
    navigate("/what-excites-us");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    // Please sync "Landing" to the project
  }, []);

  return (
    <div className="what-excites-us2">
      <div className="what-excites-us-child" />
      <img className="layer-1-icon" alt="" src="/layer-1.svg" />
      <div className="what-excites-us-item" />
      <div className="forecasting-that-feels">
        Forecasting that feels like a Prophecy
      </div>
      <div className="use-our-in-house">{`Use our in-house next-gen AI weather forecasting models & never forget to bring an umbrella on a sunny day`}</div>
      <div className="a-pressing-issue-container">
        <p className="a-pressing-issue">
          A pressing issue of our day is the ever-present anxiety about climate
          change. Weather forecasting is a vital component of trying to tackle
          this larger issue of climate change. A 10% improvement in weather
          forecasting can be the difference between detecting a hurricane early,
          which could go on to save hundreds of lives. 
        </p>
        <p className="a-pressing-issue">&nbsp;</p>
        <p className="a-pressing-issue">
          We use novel in-house AI models, built using logic programming to
          improve upon the current forecasts; a problem that has been
          notoriously difficult to solve.
        </p>
      </div>
      <img className="what-excites-us-inner" alt="" src="/vector-111.svg" />
      <div
        className="unlocking-new-potential2"
        onClick={onUnlockingNewPotentialClick}
      >
        Unlocking New Potential
      </div>
      <div className="under-the-hood2" onClick={onUnderTheHoodClick}>
        Under The Hood
      </div>
      <div className="what-excites-us3" onClick={onWhatExcitesUsClick}>
        What Excites Us
      </div>
      <div className="sitafal-group" onClick={onGroupContainerClick}>
        <div className="sitafal2">
          <span className="s1">s</span>
          <span className="i1">i</span>
          <span className="tafal1">tafal</span>
        </div>
        <img className="subtract-icon1" alt="" src="/subtract.svg" />
      </div>
      <div className="component-51">
        <div className="component-5-item" />
        <div className="try-now1">Try Now</div>
      </div>
      <div className="sitafal-container" onClick={onGroupContainer1Click}>
        <div className="sitafal2">
          <span className="s1">s</span>
          <span className="i1">i</span>
          <span className="tafal1">tafal</span>
        </div>
        <img className="subtract-icon1" alt="" src="/subtract.svg" />
      </div>
      <img className="what-excites-us-child1" alt="" src="/group-4.svg" />
      <div className="unlocking-new-potential-parent1">
        <div
          className="unlocking-new-potential3"
          onClick={onUnlockingNewPotential1Click}
        >
          Unlocking New Potential
        </div>
        <div
          className="unlocking-new-potential3"
          onClick={onUnderTheHood1Click}
        >
          Under The Hood
        </div>
        <div className="what-excites-us4" onClick={onWhatExcitesUs1Click}>
          What Excites Us
        </div>
      </div>
      <div className="unlocking-new-potential-parent2">
        <div
          className="unlocking-new-potential2"
          onClick={onUnlockingNewPotential2Click}
        >
          Unlocking New Potential
        </div>
        <div className="under-the-hood2" onClick={onUnderTheHood2Click}>
          Under The Hood
        </div>
        <div className="what-excites-us3" onClick={onWhatExcitesUs2Click}>
          What Excites Us
        </div>
        <div className="component-51">
          <div className="component-5-item" />
          <div className="try-now1">Try Now</div>
        </div>
        <div className="group-div" onClick={onGroupContainer2Click}>
          <div className="sitafal2">
            <span className="s1">s</span>
            <span className="i1">i</span>
            <span className="tafal1">tafal</span>
          </div>
          <img className="subtract-icon1" alt="" src="/subtract.svg" />
        </div>
      </div>
      <img className="what-excites-us-child2" alt="" src="/vector-10.svg" />
    </div>
  );
};

const WhatExcitesUs = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <div>{width < 768 ? <MobileApp /> : <DesktopApp />}</div>;
};

export default WhatExcitesUs;
