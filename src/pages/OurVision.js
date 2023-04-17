import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./OurVision.css";
import React from "react";
import Menu from "../components/Menu";
import PortalPopup from "../components/PortalPopup";
import RequestWhitePaperContainer from "../components/RequestWhitePaperContainer";
import "./OurVision-mobile.css";

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
    navigate("/what-excites-us");
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
      <div className="our-vision-mobile">
        <div className="our-vision-mobile-child" />
        <div className="unlock-new-paradigms-container-mobile">
          <p className="unlock-new-mobile">Unlock new</p>
          <p className="unlock-new-mobile">paradigms for</p>
          <p className="unlock-new-mobile">Artificial</p>
          <p className="unlock-new-mobile">Intelligence</p>
        </div>
        <img className="vector-icon4-mobile" alt="" src="/vector.svg" />
        <div className="sowing-the-seeds-container2-mobile">
          <p className="unlock-new-mobile">Sowing</p>
          <p className="unlock-new-mobile">the seeds for AGI</p>
        </div>
        <div className="train-10x-bigger-container-mobile">
          <p className="unlock-new-mobile">Train 10x bigger models,</p>
          <p className="unlock-new-mobile">10x faster </p>
        </div>
        <div className="chatgpt-has-taken-container-mobile">
          <p className="unlock-new-mobile">
            <span className="chatgpt-has-taken-mobile">{`ChatGPT has taken the world by storm & for good measure. But Language models (LLMs in tech-speak) will soon be optimized to oblivion. However, beyond Transformers (the T in GPT), hundreds of ML models are yet to see their true potential. We want to help you unlock that potential & bring your vision to fruition. Hence, we have named our platform `}</span>
            <i className="sitafal-mobile">Sitafal</i>
            <span className="sitafal-mobile">
              {" "}
              (the hindi word for Custard Apple)
            </span>
          </p>
          <p className="p-mobile">.</p>
          <p className="p-mobile">{`Say goodbye to the data limits on Google Collab, & waiting for days to train your AI models. Use our platform to train 10x bigger models, at 10x faster speeds as you watch the future you build, unravel before your eyes.`}</p>
        </div>
        <div className="navbar-frame-mobile">
          <div className="navbar2-mobile">
            <img
              className="vector-icon5-mobile"
              alt=""
              src="/vector1.svg"
              onClick={onVector1Click}
            />
            <img
              className="hamburger-icon3-mobile"
              alt=""
              src="/hamburger1.svg"
              onClick={openMenu}
            />
          </div>
        </div>
        <RequestWhitePaperContainer
          productIds="/facebookfill1.svg"
          propBottom="6px"
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
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    const target = document.querySelector(".our-vision-item");
    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, []);

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onUnlockingNewPotentialClick = useCallback(() => {
    navigate("/our-vision");
  }, [navigate]);

  const onUnderTheHoodClick = useCallback(() => {
    navigate("/under-the-hood");
  }, [navigate]);

  const onWhatExcitesUsClick = useCallback(() => {
    navigate("/what-excites-us");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

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
    navigate("/");
  }, [navigate]);

  return (
    <div className="our-vision">
      <div className="our-vision-child" />
      <div className="component-55">
        <div className="component-5-child2" />
        <div className="try-now5">Try Now</div>
      </div>
      <img className="layer-1-icon2" alt="" src="/layer-1.svg" />
      <div className="our-vision-item" />
      <div className="unlock-new-paradigms-container">
        <p className="unlock-new">Unlock new</p>
        <p className="unlock-new">paradigms for</p>
        <p className="unlock-new">Artificial</p>
        <p className="unlock-new">Intelligence</p>
      </div>
      <div className="train-10x-bigger">
        Train 10x bigger models, 10x faster 
      </div>
      <div className="chatgpt-has-taken-container1">
        <p className="unlock-new">
          <span className="chatgpt-has-taken1">{`ChatGPT has taken the world by storm & for good measure. But Language models (LLMs in tech-speak) will soon be optimized to oblivion. However, beyond Transformers (the T in GPT), hundreds of ML models are yet to see their true potential. We want to help you unlock that potential & bring your vision to fruition. Hence, we have named our platform `}</span>
          <i className="sitafal8">Sitafal</i>
          <span className="sitafal8"> (the hindi word for Custard Apple)</span>
        </p>
        <p className="say-goodbye-to">.</p>
        <p className="say-goodbye-to">{`Say goodbye to the data limits on Google Collab, & waiting for days to train your AI models. Use our platform to train 10x bigger models, at 10x faster speeds as you watch the future you build, unravel before your eyes.`}</p>
      </div>
      <div className="footer-common">
        <div className="sitafal-parent4" onClick={onGroupContainerClick}>
          <div className="sitafal9">
            <span className="s7">s</span>
            <span className="i7">i</span>
            <span className="tafal7">tafal</span>
          </div>
          <img className="subtract-icon7" alt="" src="/subtract.svg" />
        </div>
        <img className="our-vision-inner" alt="" src="/vector-112.svg" />
        <div className="unlocking-new-potential-parent4">
          <div
            className="unlocking-new-potential8"
            onClick={onUnlockingNewPotential1Click}
          >
            Unlocking New Potential
          </div>
          <div className="under-the-hood9" onClick={onUnderTheHood1Click}>
            Under The Hood
          </div>
          <div className="under-the-hood9" onClick={onWhatExcitesUs1Click}>
            What Excites Us
          </div>
        </div>
      </div>
      <div className="Navbar-common">
        <div className="unlocking-new-potential-parent5">
          <img className="our-vision-child1" alt="" src="/vector-10.svg" />
          <div
            className="unlocking-new-potential7"
            onClick={onUnlockingNewPotential2Click}
          >
            Unlocking New Potential
          </div>
          <div className="under-the-hood8" onClick={onUnderTheHood2Click}>
            Under The Hood
          </div>
          <div className="what-excites-us8" onClick={onWhatExcitesUs2Click}>
            What Excites Us
          </div>
          <div className="component-56">
            <div className="component-5-child2" />
            <div className="try-now5">Try Now</div>
          </div>
          <div className="sitafal-parent6" onClick={onGroupContainer2Click}>
            <div className="sitafal9">
              <span className="s7">s</span>
              <span className="i7">i</span>
              <span className="tafal7">tafal</span>
            </div>
            <img className="subtract-icon7" alt="" src="/subtract.svg" />
          </div>
        </div>
      </div>

      <img className="our-vision-child2" alt="" src="/group-4.svg" />
    </div>
  );
};

const OurVision = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <div>{width < 768 ? <MobileApp /> : <DesktopApp />}</div>;
};

export default OurVision;
