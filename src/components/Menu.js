import styles from "./Menu.module.css";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Menu = ({ onClose }) => {
  const navigate = useNavigate();
  const onUnlockingNewPotential1Click = useCallback(() => {
    navigate("/our-vision");
  }, [navigate]);

  const onUnderTheHood1Click = useCallback(() => {
    navigate("/under-the-hood");
  }, [navigate]);

  const onWhatExcitesUs1Click = useCallback(() => {
    navigate("/what-excites-us");
  }, [navigate]);
  return (
    <div className={styles.menu}>
      <div
        className={styles.menuButton}
        onClick={onUnlockingNewPotential1Click}
      >
        <div className={styles.menuButton1}>Unlocking New Potential</div>
      </div>
      <div className={styles.menuButton2} onClick={onUnderTheHood1Click}>
        <div className={styles.menuButton1}>Under The Hood</div>
      </div>
      <div className={styles.menuButton4} onClick={onWhatExcitesUs1Click}>
        <div className={styles.menuButton1}>What Excites Us</div>
      </div>
      <img className={styles.hamburgerIcon} alt="" src="/hamburger.svg" />
    </div>
  );
};

export default Menu;
