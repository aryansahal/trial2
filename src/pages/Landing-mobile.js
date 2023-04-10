import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SendSection from "../components/SendSection";
import Menu from "../components/Menu";
import PortalPopup from "../components/PortalPopup";
import RequestWhitePaperContainer from "../components/RequestWhitePaperContainer";
import "./Landing-mobile.css";

const LandingMobile = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const onVector4Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onUnlockingNewPotential1Click = useCallback(() => {
    navigate("/our-vision-mobile");
  }, [navigate]);

  const onUnderTheHood1Click = useCallback(() => {
    navigate("/under-the-hood-mobile");
  }, [navigate]);

  const onWhatExcitesUs1Click = useCallback(() => {
    navigate("/what-excites-us-mobile");
  }, [navigate]);

  const onImage1Click = useCallback(() => {
    window.open("https://www.mystudia.com/");
  }, []);

  const onFrame20DefaultContainerClick = useCallback(() => {
    navigate("/our-vision-mobile");
  }, [navigate]);

  const onFrame21DefaultContainerClick = useCallback(() => {
    navigate("/under-the-hood-mobile");
  }, [navigate]);

  const onFrame22DefaultContainerClick = useCallback(() => {
    navigate("/what-excites-us-mobile");
  }, [navigate]);

  const onVector3Click = useCallback(() => {
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
      <div className="landing-mobile">
        <div className="landing-mobile-child" />
        <div className="sowing-the-seeds-for-agi-wrapper">
          <div className="sowing-the-seeds-container">
            <p className="sowing">Sowing</p>
            <p className="sowing">
              <span>{`the seeds for `}</span>
              <span className="agi">AGI</span>
            </p>
          </div>
        </div>
        <div className="chatgpt-has-taken-container">
          <p className="sowing">
            <span className="chatgpt-has-taken">{`ChatGPT has taken the world by storm & for good measure. But Language models (LLMs in tech-speak) will soon be optimized to oblivion. However, beyond Transformers (the T in GPT), hundreds of ML models are yet to see their true potential. We want to help you unlock that potential & bring your vision to fruition. Hence, we have named our platform `}</span>
            <i className="sitafal">Sitafal</i>
            <span className="sitafal"> (the hindi word for Custard Apple)</span>
          </p>
        </div>
        <img className="landing-mobile-item" alt="" src="/group-13.svg" />
        <div className="rectangle-parent">
          <div className="group-child" />
          <div className="our-clients">Our clients</div>
          <img
            className="image-1-icon"
            alt=""
            src="/image-1@2x.png"
            onClick={onImage1Click}
          />
        </div>
        <div className="landing-mobile-inner" />
        <SendSection />
        <div className="chat-to-us">Chat to us</div>
        <div className="organic-hashtag-fam-container">
          <p className="sowing">{`Organic hashtag fam `}</p>
          <p className="vapecuppingwoke">vape@cupping.woke</p>
        </div>
        <img className="vector-icon" alt="" src="/vector3.svg" />
        <img className="landing-mobile-child1" alt="" src="/vector-15.svg" />
        <div className="call-us">Call us</div>
        <div className="organic-hashtag-fam-container1">
          <p className="sowing">{`Organic hashtag fam `}</p>
          <p className="vapecuppingwoke">+91 8982112508</p>
        </div>
        <div className="lets-team-up">Let’s team up</div>
        <div className="semiotics-shabby-chic">{`Semiotics shabby chic lomo tote bag `}</div>
        <img className="landing-mobile-child2" alt="" src="/vector-13.svg" />
        <div className="your-name">Your name</div>
        <div className="your-email">Your email</div>
        <div className="your-message">Your message</div>
        <div className="frame-20default-parent">
          <div
            className="frame-20default"
            onClick={onFrame20DefaultContainerClick}
          >
            <div className="unlocking-new-potential">
              Unlocking New Potential
            </div>
            <img className="frame-20default-child" alt="" src="/vector-7.svg" />
          </div>
          <div
            className="frame-21default"
            onClick={onFrame21DefaultContainerClick}
          >
            <div className="unlocking-new-potential">Under The Hood</div>
            <img className="frame-20default-child" alt="" src="/vector-7.svg" />
          </div>
          <div
            className="frame-22default"
            onClick={onFrame22DefaultContainerClick}
          >
            <div className="unlocking-new-potential">What Excites Us</div>
            <img
              className="frame-20default-child"
              alt=""
              src="/vector-71.svg"
            />
          </div>
        </div>
        <div className="navbar-wrapper" data-scroll-to="frameContainer">
          <div className="navbar">
            <img
              className="vector-icon1"
              alt=""
              src="/vector1.svg"
              onClick={onVector3Click}
            />
            <img
              className="hamburger-icon"
              alt=""
              src="/hamburger1.svg"
              onClick={openMenu}
            />
          </div>
        </div>
        <div className="rectangle-div" />
        <RequestWhitePaperContainer
          productIds="/facebookfill1.svg"
          propBottom="unset"
          propLeft="0px"
          propTop="2635px"
          onVector2Click={onVector4Click}
          onUnlockingNewPotentialClick={onUnlockingNewPotential1Click}
          onUnderTheHoodClick={onUnderTheHood1Click}
          onWhatExcitesUsClick={onWhatExcitesUs1Click}
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

export default LandingMobile;
