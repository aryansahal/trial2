import { useMemo, useCallback } from "react";

import { useNavigate } from "react-router-dom";
import "./RequestWhitePaperContainer.css";

const RequestWhitePaperContainer = ({
  productIds,
  propBottom,
  propLeft,
  propTop,
}) => {
  const navigate = useNavigate();
  const onUnlockingNewPotential1Click = useCallback(() => {
    navigate("/our-vision");
  }, [navigate]);
  const onLandingClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
  const onUnderTheHood1Click = useCallback(() => {
    navigate("/under-the-hood");
  }, [navigate]);

  const onWhatExcitesUs1Click = useCallback(() => {
    navigate("/what-excites-us");
  }, [navigate]);
  const footerStyle = useMemo(() => {
    return {
      bottom: propBottom,
      left: propLeft,
      top: propTop,
    };
  }, [propBottom, propLeft, propTop]);

  return (
    <div className="footer-moblie" style={footerStyle}>
      <div className="instagram-original-parent-moblie">
        <img
          className="instagram-original-icon-moblie"
          alt=""
          src="/instagramoriginal.svg"
        />
        <img
          className="instagram-original-icon-moblie"
          alt=""
          src="/frame.svg"
        />
        <a href="https://twitter.com/SitafalAi">
          <img className="frame-icon1-moblie" alt="" src="/frame1.svg" />
        </a>
        <img
          className="instagram-original-icon-moblie"
          alt=""
          src={productIds}
        />
      </div>
      <div className="vector-parent-moblie">
        <div onClick={onLandingClick}>
          <img className="vector-icon8-moblie" alt="" src="/vector2.svg" />
        </div>
        <div
          className="unlocking-new-potential-container-moblie"
          onClick={onUnlockingNewPotential1Click}
        >
          <p className="unlocking-new-moblie">Unlocking New</p>
          <p className="unlocking-new-moblie">Potential</p>
        </div>
        <div className="under-the-hood1-moblie" onClick={onUnderTheHood1Click}>
          Under The Hood
        </div>
        <div className="under-the-hood1-moblie" onClick={onWhatExcitesUs1Click}>
          What Excites Us
        </div>
      </div>
      <img className="footer-child-moblie" alt="" src="/vector-16.svg" />
      <img className="footer-item-moblie" alt="" src="/vector-16.svg" />
      <div className="request-white-paper-wrapper-moblie">
        <div className="request-white-paper-moblie">Request White Paper</div>
      </div>
    </div>
  );
};

export default RequestWhitePaperContainer;
