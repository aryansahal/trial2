import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./UnderTheHood.css";

const UnderTheHood = () => {
  const navigate = useNavigate();

  const onOurVisionTextClick = useCallback(() => {
    navigate("/our-vision");
  }, [navigate]);

  const onWhatInspiresUsClick = useCallback(() => {
    navigate("/what-inspires-us");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="under-the-hood2">
      <div className="under-the-hood-child" />
      <img className="layer-1-icon2" alt="" src="/layer-1.svg" />
      <div className="under-the-hood-item" />
      <div className="help-push-science">Help push science forward</div>
      <div className="publish-to-earn-publish">
        Publish-to-earn -  Publish novel research data that contributes to the
        growth of the entire community
      </div>
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
      <img className="under-the-hood-inner" alt="" src="/vector-10.svg" />
      <div className="our-vision2" onClick={onOurVisionTextClick}>
        Our Vision
      </div>
      <div className="under-the-hood3">Under The Hood</div>
      <div className="what-inspires-us2" onClick={onWhatInspiresUsClick}>
        What Inspires Us
      </div>
      <div className="sitafal-container" onClick={onGroupContainerClick}>
        <div className="sitafal2">
          <span className="s2">s</span>
          <span className="i2">i</span>
          <span className="tafal2">tafal</span>
        </div>
        <img className="subtract-icon2" alt="" src="/subtract1.svg" />
      </div>
    </div>
  );
};

export default UnderTheHood;
