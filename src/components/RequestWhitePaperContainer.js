import { useMemo } from "react";
import styles from "./RequestWhitePaperContainer.module.css";

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
    <div className={styles.footer} style={footerStyle}>
      <div className={styles.instagramOriginalParent}>
        <img
          className={styles.instagramOriginalIcon}
          alt=""
          src="/instagramoriginal.svg"
        />
        <img className={styles.instagramOriginalIcon} alt="" src="/frame.svg" />
        <img className={styles.frameIcon1} alt="" src="/frame1.svg" />
        <img className={styles.instagramOriginalIcon} alt="" src={productIds} />
      </div>
      <div className={styles.vectorParent}>
        <img
          className={styles.vectorIcon}
          alt=""
          src="/vector2.svg"
          onClick={onVector2Click}
        />
        <div
          className={styles.unlockingNewPotentialContainer}
          onClick={onUnlockingNewPotentialClick}
        >
          <p className={styles.unlockingNew}>Unlocking New</p>
          <p className={styles.unlockingNew}>Potential</p>
        </div>
        <div className={styles.underTheHood} onClick={onUnderTheHoodClick}>
          Under The Hood
        </div>
        <div className={styles.underTheHood} onClick={onWhatExcitesUsClick}>
          What Excites Us
        </div>
      </div>
      <img className={styles.footerChild} alt="" src="/vector-16.svg" />
      <img className={styles.footerItem} alt="" src="/vector-16.svg" />
      <div className={styles.requestWhitePaperWrapper}>
        <div className={styles.requestWhitePaper}>Request White Paper</div>
      </div>
    </div>
  );
};

export default RequestWhitePaperContainer;
