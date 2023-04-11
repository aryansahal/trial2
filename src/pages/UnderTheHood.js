import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import PortalPopup from "../components/PortalPopup";
import RequestWhitePaperContainer from "../components/RequestWhitePaperContainer";
import "./UnderTheHood-mobile.css";
import "./UnderTheHood.css";
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
      <div className="under-the-hood-mobile">
        <div className="under-the-hood-mobile-child" />
        <div className="help-push-science-mobile">
          Help push science forward
        </div>
        <img className="vector-icon4-mobile" alt="" src="/vector.svg" />
        <div className="sowing-the-seeds-container2-mobile">
          <p className="sowing2-mobile">Sowing</p>
          <p className="sowing2-mobile">the seeds for AGI</p>
        </div>
        <div className="publish-to-earn-publish-mobile">
          Publish-to-earn -  Publish novel research data that contributes to the
          growth of the entire community
        </div>
        <div className="any-machine-learning-container-mobile">
          <p className="any-machine-learning-mobile">
            Any Machine Learning model is worthless without high-quality data to
            help train the models. However, there are very few incentives for
            anyone to generate this data at source, due to a lack of verifiable
            ownership of the data.
          </p>
          <p className="any-machine-learning-mobile">&nbsp;</p>
          <p className="any-machine-learning-mobile">{`We use a transformative way of storing data, using a public protocol called IPFS that solves this bottleneck. IPFS not only keeps your data completely encrypted, & secure with a >99.9% availability guarantee, it also gives you the opportunity to own your data. `}</p>
          <p className="any-machine-learning-mobile">
            The verifiable ownership of data helps ensure that the researcher is
            compensated fairly when his data is used to train other models. 
          </p>
          <p className="any-machine-learning-mobile">&nbsp;</p>
          <p className="any-machine-learning-mobile">{`* IPFS manages to achieve these wonderful benefits by distributing data at scale. It moves away from the traditional location-addressable systems, to content-addressable systems. `}</p>
          <p className="the-native-way-mobile">&nbsp;</p>
          <p className="the-native-way-mobile">{`The native way of decentralizing data is the secret sauce of how we manage to achieve 10x more storage, & 10x faster computation`}</p>
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
              src="/hamburger1.svg-mobile"
              onClick={openMenu}
            />
          </div>
        </div>
        <RequestWhitePaperContainer
          productIds="/facebookfill1.svg"
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

  const onWhatExcitesUsClick = useCallback(() => {
    navigate("/what-excites-us");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
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

  const onGroupContainer2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="under-the-hood5">
      <div className="under-the-hood-child" />
      <img className="layer-1-icon1" alt="" src="/layer-1.svg" />
      <div className="under-the-hood-item" />
      <div
        className="unlocking-new-potential5"
        onClick={onUnlockingNewPotentialClick}
      >
        Unlocking New Potential
      </div>
      <div className="under-the-hood6">Under The Hood</div>
      <div className="what-excites-us6" onClick={onWhatExcitesUsClick}>
        What Excites Us
      </div>
      <div className="sitafal-parent1" onClick={onGroupContainerClick}>
        <div className="sitafal5">
          <span className="s4">s</span>
          <span className="i4">i</span>
          <span className="tafal4">tafal</span>
        </div>
        <img className="subtract-icon4" alt="" src="/subtract.svg" />
      </div>
      <img className="under-the-hood-inner" alt="" src="/vector-111.svg" />
      <div className="component-53">
        <div className="rectangle-div" />
        <div className="try-now3">Try Now</div>
      </div>
      <div className="component-5-group">
        <img className="under-the-hood-child1" alt="" src="/vector-10.svg" />
        <div className="component-54">
          <div className="rectangle-div" />
          <div className="try-now3">Try Now</div>
        </div>
        <div className="sitafal-parent2" onClick={onGroupContainer1Click}>
          <div className="sitafal5">
            <span className="s4">s</span>
            <span className="i4">i</span>
            <span className="tafal4">tafal</span>
          </div>
          <img className="subtract-icon4" alt="" src="/subtract.svg" />
        </div>
        <div className="frame-wrapper2">
          <div className="unlocking-new-potential-parent3">
            <div
              className="unlocking-new-potential6"
              onClick={onUnlockingNewPotential1Click}
            >
              Unlocking New Potential
            </div>
            <div className="under-the-hood7" onClick={onUnderTheHood1Click}>
              Under The Hood
            </div>
            <div
              className="unlocking-new-potential6"
              onClick={onWhatExcitesUs1Click}
            >
              What Excites Us
            </div>
          </div>
        </div>
        <div className="frame-child3" />
      </div>

      <div className="instance-group">
        <div className="sitafal-parent3" onClick={onGroupContainer2Click}>
          <div className="sitafal5">
            <span className="s4">s</span>
            <span className="i4">i</span>
            <span className="tafal4">tafal</span>
          </div>
          <img className="subtract-icon4" alt="" src="/subtract.svg" />
        </div>
      </div>
      <div className="help-push-science-forward-parent">
        <div className="help-push-science">Help push science forward</div>
        <div className="publish-to-earn-publish">
          Publish-to-earn -  Publish novel research data that contributes to the
          growth of the entire community
        </div>
      </div>
      <div className="any-machine-learning-model-is-wrapper">
        <div className="any-machine-learning-container">
          <p className="any-machine-learning">
            Any Machine Learning model is worthless without high-quality data to
            help train the models. However, there are very few incentives for
            anyone to generate this data at source, due to a lack of verifiable
            ownership of the data.We use a transformative way of storing data,
            using a public protocol called IPFS that solves this bottleneck.
          </p>
          <p className="any-machine-learning">{`IPFS not only keeps your data completely encrypted, & secure with a >99.9% availability guarantee, it also gives you the opportunity to own your data. `}</p>
          <p className="any-machine-learning">
            The verifiable ownership of data helps ensure that the researcher is
            compensated fairly when his data his used to train other models. 
          </p>
          <p className="any-machine-learning">{`* IPFS manages to achieve these wonderful benefits by distributing data at scale. It moves away from the traditional location-addressable systems, to content-addressable systems. The native way of decentralizing data is the secret sauce of how we manage to achieve 10x more storage, & 10x faster computation`}</p>
        </div>
      </div>
    </div>
  );
};

const UnderTheHood = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <div>{width < 768 ? <MobileApp /> : <DesktopApp />}</div>;
};

export default UnderTheHood;
