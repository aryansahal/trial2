import "./Menu.css";
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
    <div className="menu">
      <div className="menu-button" onClick={onUnlockingNewPotential1Click}>
        <div className="menu-button1">Unlocking New Potential</div>
      </div>
      <div className="menu-button2" onClick={onUnderTheHood1Click}>
        <div className="menu-button1">Under The Hood</div>
      </div>
      <div className="menu-button4">
        <div className="menu-button1" onClick={onWhatExcitesUs1Click}>
          What Excites Us
        </div>
      </div>
      <img className="hamburger-icon1" alt="" src="/hamburger.svg" />
    </div>
  );
};

export default Menu;
