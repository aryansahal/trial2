import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./OurVision.css";

const OurVision = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onUnderTheHoodClick = useCallback(() => {
    navigate("/under-the-hood");
  }, [navigate]);

  const onWhatInspiresUsClick = useCallback(() => {
    navigate("/under-the-hood");
  }, [navigate]);

  return (
    <div className="our-vision3">
      <div className="our-vision-child" />
      <img className="layer-1-icon3" alt="" src="/layer-1.svg" />
      <div className="our-vision-item" />
      <div className="unlock-new-paradigms-container">
        <p className="unlock-new">Unlock new</p>
        <p className="unlock-new">paradigms for</p>
        <p className="unlock-new">Artificial</p>
        <p className="unlock-new">Intelligence</p>
      </div>
      <div className="train-10x-bigger">
        Train 10x bigger models, 10x faster 
      </div>
      <div className="chatgpt-has-taken-container">
        <p className="unlock-new">
          <span className="chatgpt-has-taken">{`ChatGPT has taken the world by storm & for good measure. But Language models (LLMs in tech-speak) will soon be optimized to oblivion. However, beyond Transformers (the T in GPT), hundreds of ML models are yet to see their true potential. We want to help you unlock that potential & bring your vision to fruition. Hence, we have named our platform `}</span>
          <i className="the-hindi-word">Sitafal</i>
          <span className="the-hindi-word">
            {" "}
            (the hindi word for Custard Apple)
          </span>
        </p>
        <p className="p">.</p>
        <p className="p">{`Say goodbye to the data limits on Google Collab, & waiting for days to train your AI models. Use our platform to train 10x bigger models, at 10x faster speeds as you watch the future you build, unravel before your eyes.`}</p>
      </div>
      <img className="our-vision-inner" alt="" src="/vector-10.svg" />
      <div className="group-div" onClick={onGroupContainerClick}>
        <div className="sitafal4">
          <span className="s3">s</span>
          <span className="i3">i</span>
          <span className="tafal3">tafal</span>
        </div>
        <img className="subtract-icon3" alt="" src="/subtract1.svg" />
      </div>
      <div className="our-vision4">Our Vision</div>
      <div className="under-the-hood4" onClick={onUnderTheHoodClick}>
        Under The Hood
      </div>
      <div className="what-inspires-us3" onClick={onWhatInspiresUsClick}>
        What Inspires Us
      </div>
    </div>
  );
};

export default OurVision;
