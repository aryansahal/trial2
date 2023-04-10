import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import PortalPopup from "../components/PortalPopup";
import RequestWhitePaperContainer from "../components/RequestWhitePaperContainer";
import "./UnderTheHood-mobile.css";

const UnderTheHoodMobile = () => {
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
      <div className="under-the-hood-mobile">
        <div className="under-the-hood-mobile-child" />
        <div className="help-push-science">Help push science forward</div>
        <img className="vector-icon4" alt="" src="/vector.svg" />
        <div className="sowing-the-seeds-container2">
          <p className="sowing2">Sowing</p>
          <p className="sowing2">the seeds for AGI</p>
        </div>
        <div className="publish-to-earn-publish">
          Publish-to-earn -  Publish novel research data that contributes to the
          growth of the entire community
        </div>
        <div className="any-machine-learning-container">
          <p className="any-machine-learning">
            Any Machine Learning model is worthless without high-quality data to
            help train the models. However, there are very few incentives for
            anyone to generate this data at source, due to a lack of verifiable
            ownership of the data.
          </p>
          <p className="any-machine-learning">&nbsp;</p>
          <p className="any-machine-learning">{`We use a transformative way of storing data, using a public protocol called IPFS that solves this bottleneck. IPFS not only keeps your data completely encrypted, & secure with a >99.9% availability guarantee, it also gives you the opportunity to own your data. `}</p>
          <p className="any-machine-learning">
            The verifiable ownership of data helps ensure that the researcher is
            compensated fairly when his data is used to train other models. 
          </p>
          <p className="any-machine-learning">&nbsp;</p>
          <p className="any-machine-learning">{`* IPFS manages to achieve these wonderful benefits by distributing data at scale. It moves away from the traditional location-addressable systems, to content-addressable systems. `}</p>
          <p className="the-native-way">&nbsp;</p>
          <p className="the-native-way">{`The native way of decentralizing data is the secret sauce of how we manage to achieve 10x more storage, & 10x faster computation`}</p>
        </div>
        <div className="navbar-frame">
          <div className="navbar2">
            <img
              className="vector-icon5"
              alt=""
              src="/vector1.svg"
              onClick={onVector1Click}
            />
            <img
              className="hamburger-icon3"
              alt=""
              src="/hamburger1.svg"
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

export default UnderTheHoodMobile;
