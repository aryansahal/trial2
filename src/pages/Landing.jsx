import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../components/SendSection.css";
import Menu from "../components/Menu";
import PortalPopup from "../components/PortalPopup";
import RequestWhitePaperContainer from "../components/RequestWhitePaperContainer";
import "./Landing.css";
import React from "react";
import "./Landing-mobile.css";

const MobileApp = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Message: ", message);
  };
  const onVector4Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onUnlockingNewPotential1Click = useCallback(() => {
    navigate("/our-vision");
  }, [navigate]);

  const onUnderTheHood1Click = useCallback(() => {
    navigate("/under-the-hood");
  }, [navigate]);

  const onWhatExcitesUs1Click = useCallback(() => {
    navigate("/what-excites-us");
  }, [navigate]);

  const onImage1Click = useCallback(() => {
    window.open("https://www.mystudia.com/");
  }, []);

  const onFrame20DefaultContainerClick = useCallback(() => {
    navigate("/our-vision");
  }, [navigate]);

  const onFrame21DefaultContainerClick = useCallback(() => {
    navigate("/under-the-hood");
  }, [navigate]);

  const onFrame22DefaultContainerClick = useCallback(() => {
    navigate("/what-excites-us");
  }, [navigate]);

  const onVector3Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const openMenu = useCallback(() => {
    setMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <>
      <div className="landing-mobile">
        <div className="landing-mobile-child" />
        <div className="sowing-the-seeds-for-agi-wrapper-mobile">
          <div className="sowing-the-seeds-container-mobile">
            <p className="sowing-mobile">Sowing</p>
            <p className="sowing-mobile">
              <span>{`the seeds for `}</span>
              <span className="agi-mobile">AGI</span>
            </p>
          </div>
        </div>
        <div className="chatgpt-has-taken-container-mobile">
          <p className="sowing-mobile">
            <span className="chatgpt-has-taken-mobile">{`ChatGPT has taken the world by storm & for good measure. But Language models (LLMs in tech-speak) will soon be optimized to oblivion. However, beyond Transformers (the T in GPT), hundreds of ML models are yet to see their true potential. We want to help you unlock that potential & bring your vision to fruition. Hence, we have named our platform `}</span>
            <i className="sitafal-mobile">Sitafal</i>
            <span className="sitafal-mobile">
              {" "}
              (the hindi word for Custard Apple)
            </span>
          </p>
        </div>
        <img className="landing-mobile-item" alt="" src="/group-13.svg" />
        <div className="rectangle-parent-mobile">
          <div className="group-child-mobile" />
          <div className="our-clients-mobile">Our clients</div>
          <img
            className="image-1-icon-mobile"
            alt=""
            src="/image-1@2x.png"
            onClick={onImage1Click}
          />
        </div>
        <div className="landing-mobile-inner-mobile" />
        <div className="component-7-parent">
          <div className="component-7">
            <div className="component-7-child" />
            <button
              type="submit"
              className="component-7-child"
              onClick={handleSubmit}
            >
              Send
            </button>
          </div>
          <div className="component-8">
            <input type="checkbox" className="component-8-child" />
          </div>
          <div className="subscribe-for-updates">Subscribe for updates</div>
        </div>
        <div className="chat-to-us-mobile">Chat to us</div>
        <div className="organic-hashtag-fam-container-mobile">
          <p className="vapecuppingwoke-mobile">connect@sitafal.ai</p>
        </div>
        <img className="vector-icon6-mobile" alt="" src="/vector3.svg" />
        <img className="landing-mobile-child1" alt="" src="/vector-15.svg" />
        <div className="call-us-mobile">Call us</div>
        <div className="organic-hashtag-fam-container1-mobile">
          <p className="vapecuppingwoke-mobile">+91 9119225083</p>
        </div>
        <img className="vector-icon-mobile" alt="" src="/vector3.svg" />
        <img
          className="landing-mobile-child1-mobile"
          alt=""
          src="/vector-15.svg"
        />

        <div className="semiotics-shabby-chic-mobile">{`We would love to hear from you!`}</div>
        <img
          className="landing-mobile-child2-mobile"
          alt=""
          src="/vector-13.svg"
        />
        <div className="your-name-mobile">
          <input
            type="text"
            id="name"
            value={name}
            placeholder="Your name"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="your-email-mobile">
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Your email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="your-message-mobile">
          <textarea
            id="message"
            value={message}
            placeholder="Your message"
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>
        </div>
        <div className="frame-20default-parent-mobile">
          <div
            className="frame-20default-mobile"
            onClick={onFrame20DefaultContainerClick}
          >
            <div className="unlocking-new-potential-mobile">
              Unlocking New Potential
            </div>
            <img
              className="frame-20default-child-mobile"
              alt=""
              src="/vector-7.svg"
            />
          </div>
          <div
            className="frame-21default-mobile"
            onClick={onFrame21DefaultContainerClick}
          >
            <div className="unlocking-new-potential-mobile">Under The Hood</div>
            <img
              className="frame-20default-child-mobile"
              alt=""
              src="/vector-7.svg"
            />
          </div>
          <div
            className="frame-22default-mobile"
            onClick={onFrame22DefaultContainerClick}
          >
            <div className="unlocking-new-potential-mobile">
              What Excites Us
            </div>
            <img
              className="frame-20default-child-mobile"
              alt=""
              src="/vector-71.svg"
            />
          </div>
        </div>
        <div className="navbar-wrapper-mobile" data-scroll-to="frameContainer">
          <div className="navbar-mobile">
            <img
              className="vector-icon1-mobile"
              alt=""
              src="/vector1.svg"
              onClick={onVector3Click}
            />
            <img
              className="hamburger-icon-mobile"
              alt=""
              src="/hamburger1.svg"
              onClick={openMenu}
            />
          </div>
        </div>
        <div className="rectangle-div-mobile" />
        <RequestWhitePaperContainer
          productIds="/facebookfill1.svg"
          propBottom="unset"
          propLeft="0px"
          propTop="2635px"
          onVector2Click={onVector4Click}
          onUnlockingNewPotentialClick={onUnlockingNewPotential1Click}
          onUnderTheHoodClick={onUnderTheHood1Click}
          onWhatExcitesUsClick={onWhatExcitesUs1Click}
        />
      </div>
      {isMenuOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMenu}
        >
          <Menu onClose={closeMenu} />
        </PortalPopup>
      )}
    </>
  );
};

const DesktopApp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Message: ", message);
  };

  const onVector4Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onUnlockingNewPotentialClick = useCallback(() => {
    navigate("/our-vision");
  }, [navigate]);

  const onUnderTheHoodClick = useCallback(() => {
    navigate("/under-the-hood");
  }, [navigate]);

  const onWhatExcitesUsClick = useCallback(() => {
    navigate("/what-excites-us");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onUnlockingNewPotential1Click = useCallback(() => {
    navigate("/our-vision");
  }, [navigate]);

  const onUnderTheHood1Click = useCallback(() => {
    navigate("/under-the-hood");
  }, [navigate]);

  const onWhatExcitesUs1Click = useCallback(() => {
    navigate("/what-excites-us");
  }, [navigate]);

  const onImage1Click = useCallback(() => {
    window.open("https://www.mystudia.com/");
  }, []);
  const onFrame20DefaultContainerClick = useCallback(() => {
    navigate("/our-vision");
  }, [navigate]);

  const onFrame21DefaultContainerClick = useCallback(() => {
    navigate("/under-the-hood");
  }, [navigate]);

  const onFrame22DefaultContainerClick = useCallback(() => {
    navigate("/what-excites-us");
  }, [navigate]);

  const onVector3Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const openMenu = useCallback(() => {
    setMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);
  return (
    <div className="landing">
      <div className="landing-child" />
      <img className="landing-item" alt="" src="/vector-11.svg" />

      <div className="slide1">
        <div className="frame-parent">
          <div className="frame-group">
            <div className="state-wrapper">
              <div
                className="component-1-wrapper"
                onClick={onUnlockingNewPotential1Click}
              >
                <div className="state">
                  <div className="state-child">
                    <div className="unlocking-new-potential-container">
                      <p className="unlocking">{`Unlocking `}</p>
                      <p className="unlocking">New Potential</p>
                    </div>
                    <img className="state-item" alt="" src="/vector-7.svg" />
                  </div>
                </div>
              </div>

              <div
                className="component-2-wrapper"
                onClick={onUnderTheHood1Click}
              >
                <div className="state">
                  <div className="state-child">
                    <div className="unlocking-new-potential-container">
                      <p className="unlocking">Under</p>
                      <p className="unlocking">The Hood</p>
                    </div>
                    <img
                      className="component-2-item"
                      alt=""
                      src="/vector-7.svg"
                    />
                  </div>
                </div>
              </div>
              <div
                className="component-3-wrapper"
                onClick={onWhatExcitesUs1Click}
              >
                <div className="state">
                  <div className="state-child">
                    <div className="unlocking-new-potential-container">
                      <p className="unlocking">What</p>
                      <p className="unlocking">Excites Us</p>
                    </div>
                    <img
                      className="component-3-item"
                      alt=""
                      src="/vector-7.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sowing-the-seeds-for-agi-wrapper">
            <div className="sowing-the-seeds-container">
              <p className="unlocking">
                <span className="sowing-the1">
                  <span>Sowing the</span>
                </span>
              </p>
              <p className="unlocking">
                <span className="sowing-the1">
                  <span>{`seeds for `}</span>
                  <span className="agi">AGI</span>
                </span>
              </p>
            </div>
          </div>
          <img className="frame-item" alt="" src="/frame-46.svg" />
        </div>
      </div>
      <div className="slide2">
        <div className="rectangle-parent">
          <img className="frame-inner" alt="" src="/rectangle-12@2x.png" />
          <div className="chatgpt-has-taken-container">
            <p className="unlocking">
              <span className="chatgpt-has-taken">{`ChatGPT has taken the world by storm & for good measure. But Language models (LLMs in tech-speak) will soon be optimized to oblivion. However, beyond Transformers (the T in GPT), hundreds of ML models are yet to see their true potential. We want to help you unlock that potential & bring your vision to fruition. Hence, we have named our platform `}</span>
              <i className="the-hindi-word">Sitafal</i>
              <span className="the-hindi-word">
                {" "}
                (the hindi word for Custard Apple)
              </span>
            </p>
          </div>
          <img className="group-icon" alt="" src="/group-5.svg" />
        </div>
      </div>

      <div className="frame-container" id="Contactus-clients">
        <div className="our-clients-parent">
          <div className="sowing-the-seeds-container">Our clients</div>
          <img
            className="image-1-icon"
            alt=""
            src="/image-1@2x.png"
            onClick={onImage1Click}
          />
        </div>
        <div className="contact-card">
          <div className="contact-card-inner">
            <img className="vector-icon" alt="" src="/vector-12.svg" />
          </div>
          <div className="chat-to-us-parent">
            <div className="sowing-the-seeds-container">Chat to us</div>
            <div className="organic-hashtag-fam-container">
              <span className="vapecuppingwoke"> connect@sitafal.ai</span>
            </div>
          </div>
          <div className="call-us-parent">
            <div className="sowing-the-seeds-container">Call us</div>
            <div className="organic-hashtag-fam-container">
              <p className="p"> +91 91192 25083</p>
            </div>
          </div>
          <div className="vector-parent">
            <img className="rectangle-icon" alt="" src="/rectangle-13.svg" />
            <div className="vector-wrapper"></div>
            <div className="frame-div">
              <div className="lets-team-up-parent">
                <div className="semiotics-shabby-chic">
                  We would love to hear from you!
                </div>
              </div>
            </div>
            <div className="your-name-wrapper">
              <input
                className="sowing-the-seeds-container"
                type="text"
                id="name"
                value={name}
                placeholder="Your name"
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="your-email-wrapper">
              <input
                className="sowing-the-seeds-container"
                type="email"
                id="email"
                value={email}
                placeholder="Your email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="frame-wrapper1">
              <div className="your-message-wrapper">
                <textarea
                  className="sowing-the-seeds-container"
                  id="message"
                  value={message}
                  placeholder="Your message"
                  onChange={(event) => setMessage(event.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="component-4-wrapper">
              <div className="component-4">
                <div className="component-4-child" />
                <button
                  type="submit"
                  className="component-4-child"
                  onClick={handleSubmit}
                >
                  Send
                </button>
              </div>
            </div>
            <div className="frame-child2" />
          </div>
          <div className="contact-card-child" />
          <div className="contact-card-item" />
        </div>
      </div>
      <div className="footer-common">
        <div className="instance-parent" onClick={onGroupContainerClick}>
          <div className="sitafal-parent">
            <div className="sitafal">
              <span className="s">s</span>
              <span className="i">i</span>
              <span className="tafal">tafal</span>
            </div>
            <img className="subtract-icon" alt="" src="/subtract.svg" />
          </div>
          <div className="unlocking-new-potential-group">
            <div
              className="unlocking-new-potential"
              onClick={onUnlockingNewPotential1Click}
            >
              Unlocking New Potential
            </div>
            <div
              className="unlocking-new-potential"
              onClick={onUnderTheHood1Click}
            >
              Under The Hood
            </div>
            <div
              className="unlocking-new-potential"
              onClick={onWhatExcitesUs1Click}
            >
              What Excites Us
            </div>
          </div>
          <div className="Social-links">
            <img className="frame-child" alt="" src="/frame-41.svg" />
          </div>
        </div>
      </div>
      <div className="Navbar-common">
        <div className="component-5-parent">
          <img className="landing-inner" alt="" src="/vector-10.svg" />
          <div className="component-5">
            <div className="component-5-child" />
            <div className="try-now">Try Now</div>
          </div>
          <div className="frame-wrapper">
            <div className="unlocking-new-potential-parent">
              <div
                className="unlocking-new-potential"
                onClick={onUnlockingNewPotential1Click}
              >
                Unlocking New Potential
              </div>
              <div
                className="unlocking-new-potential"
                onClick={onUnderTheHoodClick}
              >
                Under The Hood
              </div>
              <div
                className="unlocking-new-potential"
                onClick={onWhatExcitesUsClick}
              >
                What Excites Us
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Landing = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <div>{width < 768 ? <MobileApp /> : <DesktopApp />}</div>;
};

export default Landing;
