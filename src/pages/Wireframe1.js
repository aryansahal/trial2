import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Wireframe1.css";

const Wireframe1 = () => {
  const navigate = useNavigate();

  const onComponent1ContainerClick = useCallback(() => {
    navigate("/our-vision");
  }, [navigate]);

  const onComponent2ContainerClick = useCallback(() => {
    navigate("/under-the-hood");
  }, [navigate]);

  const onComponent3ContainerClick = useCallback(() => {
    navigate("/what-inspires-us");
  }, [navigate]);

  return (
    <div className="wireframe-1">
      <img className="layer-1-icon" alt="" src="/layer-1.svg" />
      <div className="wireframe-1-child" />
      <div className="sitafal-parent">
        <div className="sitafal">
          <span className="s">s</span>
          <span className="i">i</span>
          <span className="tafal">tafal</span>
        </div>
        <img className="subtract-icon" alt="" src="/subtract.svg" />
      </div>
      <div className="sowing-the-seeds-container">
        <p className="sowing-the">{`Sowing the `}</p>
        <p className="sowing-the">seeds for AGI</p>
      </div>
      <img className="wireframe-1-item" alt="" src="/vector-6.svg" />
      <div className="component-1" onClick={onComponent1ContainerClick}>
        <div className="component-1-child" />
        <div className="our-vision">Our Vision</div>
        <img className="component-1-item" alt="" src="/vector-7.svg" />
      </div>
      <div className="component-2" onClick={onComponent2ContainerClick}>
        <div className="component-2-child" />
        <div className="our-vision">Under The Hood</div>
        <img className="component-2-item" alt="" src="/vector-7.svg" />
      </div>
      <div className="component-3" onClick={onComponent3ContainerClick}>
        <div className="component-2-child" />
        <div className="our-vision">What Excites Us</div>
        <img className="component-3-item" alt="" src="/vector-7.svg" />
      </div>
    </div>
  );
};

export default Wireframe1;
