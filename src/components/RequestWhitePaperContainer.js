import { useMemo } from "react";
import "./RequestWhitePaperContainer.css";

const RequestWhitePaperContainer = ({
  productIds,
  propBottom,
  propLeft,
  propTop,
  onVector2Click,
  onUnlockingNewPotentialClick,
  onUnderTheHoodClick,
  onWhatExcitesUsClick,
}) => {
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
        <img
          className="vector-icon8-moblie"
          alt=""
          src="/vector2.svg"
          onClick={onVector2Click}
        />
        <div
          className="unlocking-new-potential-container-moblie"
          onClick={onUnlockingNewPotentialClick}
        >
          <p className="unlocking-new-moblie">Unlocking New</p>
          <p className="unlocking-new-moblie">Potential</p>
        </div>
        <div className="under-the-hood1-moblie" onClick={onUnderTheHoodClick}>
          Under The Hood
        </div>
        <div className="under-the-hood1-moblie" onClick={onWhatExcitesUsClick}>
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
