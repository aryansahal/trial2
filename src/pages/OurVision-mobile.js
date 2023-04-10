import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import PortalPopup from "../components/PortalPopup";
import RequestWhitePaperContainer from "../components/RequestWhitePaperContainer";
import "./OurVision-mobile.css";

const OurVisionMobile = () => {
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
      <div className="our-vision-mobile">
        <div className="our-vision-mobile-child" />
        <div className="unlock-new-paradigms-container">
          <p className="unlock-new">Unlock new</p>
          <p className="unlock-new">paradigms for</p>
          <p className="unlock-new">Artificial</p>
          <p className="unlock-new">Intelligence</p>
        </div>
        <img className="vector-icon6" alt="" src="/vector.svg" />
        <div className="sowing-the-seeds-container3">
          <p className="unlock-new">Sowing</p>
          <p className="unlock-new">the seeds for AGI</p>
        </div>
        <div className="train-10x-bigger-container">
          <p className="unlock-new">Train 10x bigger models,</p>
          <p className="unlock-new">10x faster </p>
        </div>
        <div className="chatgpt-has-taken-container1">
          <p className="unlock-new">
            <span className="chatgpt-has-taken1">{`ChatGPT has taken the world by storm & for good measure. But Language models (LLMs in tech-speak) will soon be optimized to oblivion. However, beyond Transformers (the T in GPT), hundreds of ML models are yet to see their true potential. We want to help you unlock that potential & bring your vision to fruition. Hence, we have named our platform `}</span>
            <i className="sitafal1">Sitafal</i>
            <span className="sitafal1">
              {" "}
              (the hindi word for Custard Apple)
            </span>
          </p>
          <p className="say-goodbye-to">.</p>
          <p className="say-goodbye-to">{`Say goodbye to the data limits on Google Collab, & waiting for days to train your AI models. Use our platform to train 10x bigger models, at 10x faster speeds as you watch the future you build, unravel before your eyes.`}</p>
        </div>
        <div className="frame-div">
          <div className="navbar3">
            <img
              className="vector-icon7"
              alt=""
              src="/vector1.svg"
              onClick={onVector1Click}
            />
            <img
              className="hamburger-icon4"
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

export default OurVisionMobile;
