import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./WhatInspiresUs.css";

const WhatInspiresUs = () => {
  const navigate = useNavigate();

  const onOurVisionTextClick = useCallback(() => {
    navigate("/our-vision");
  }, [navigate]);

  const onUnderTheHoodClick = useCallback(() => {
    navigate("/under-the-hood");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="what-inspires-us">
      <div className="what-inspires-us-child" />
      <img className="layer-1-icon1" alt="" src="/layer-1.svg" />
      <div className="what-inspires-us-item" />
      <div className="forecasting-that-feels">
        Forecasting that feels like a Prophecy
      </div>
      <div className="use-our-in-house">{`Use our in-house next-gen AI weather forecasting models & never forget to bring an umbrella on a rainy day`}</div>
      <div className="a-pressing-issue-container">
        <p className="a-pressing-issue">
          A pressing issue of our day is the ever-present anxiety about climate
          change. Weather forecasting is a vital component of trying to tackle
          this larger issue of climate change. A 10% improvement in weather
          forecasting can be the difference between detecting a hurricane early,
          which could go on to save hundreds of lives. 
        </p>
        <p className="a-pressing-issue">&nbsp;</p>
        <p className="a-pressing-issue">
          We use novel in-house AI models, built using logic programming to
          improve upon the current forecasts; a problem that has been
          notoriously difficult to solve.
        </p>
      </div>
      <img className="what-inspires-us-inner" alt="" src="/vector-10.svg" />
      <div className="our-vision1" onClick={onOurVisionTextClick}>
        Our Vision
      </div>
      <div className="under-the-hood1" onClick={onUnderTheHoodClick}>
        Under The Hood
      </div>
      <div className="what-inspires-us1">What Inspires Us</div>
      <div className="sitafal-group" onClick={onGroupContainerClick}>
        <div className="sitafal1">
          <span className="s1">s</span>
          <span className="i1">i</span>
          <span className="tafal1">tafal</span>
        </div>
        <img className="subtract-icon1" alt="" src="/subtract1.svg" />
      </div>
    </div>
  );
};

export default WhatInspiresUs;
