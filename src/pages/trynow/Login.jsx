import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const LoginPage = () => {
  const [accessKeyId, setAccessKeyId] = useState("");
  const [secretAccessKey, setSecretAccessKey] = useState("");
  const [region, setRegion] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Pass user input data as props to MyOtherComponent
    navigate("/store", {
      state: {
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey,
        region: region,
      },
    });
  };

  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onStoreClick = useCallback(() => {
    navigate("/store");
  }, [navigate]);

  const onRetrieveClick = useCallback(() => {
    navigate("/retrieve");
  }, [navigate]);

  return (
    <div className="our-vision3">
      <div className="our-vision-child" />
      <img className="layer-1-icon3" alt="" src="/layer-1.svg" />
      <div className="unlock-new-paradigms-container">
        <p className="unlock-new">Login AWS</p>
      </div>
      <div className="chatgpt-has-taken-container">
        <div className="login-container">
          <h1>AWS Login</h1>
          <form className="login-form" onSubmit={handleSubmit}>
            <label className="login-label">
              Access Key ID:
              <input
                className="login-input"
                type="text"
                value={accessKeyId}
                onChange={(e) => setAccessKeyId(e.target.value)}
              />
            </label>
            <label className="login-label">
              Secret Access Key:
              <input
                className="login-input"
                type="password"
                value={secretAccessKey}
                onChange={(e) => setSecretAccessKey(e.target.value)}
              />
            </label>
            <label className="login-label">
              Region:
              <input
                className="login-input"
                type="text"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
              />
            </label>
            <button className="login-button" type="submit">
              Login
            </button>
          </form>
        </div>
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
      <div className="our-vision4">Login</div>
      <div className="under-the-hood4" onClick={onStoreClick}>
        Store
      </div>
      <div className="what-inspires-us3" onClick={onRetrieveClick}>
        Retrieve
      </div>
    </div>
  );
};

export default LoginPage;
