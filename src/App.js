import "./App.css";
import React from "react";
import { useState } from "react";
import "./AnimatedBackground.css";
import { useMediaQuery } from "react-responsive";

function App() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [phoneNumber, setPhoneNumber] = useState("");
  const isButtonDisabled = false;
  const [isTickMark, setIsTickMark] = useState(true);
  const handleInputChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setPhoneNumber(value);
  };

  const tickMarkHandleChange = (e) => {
    const value = e.target.checked;
    setIsTickMark(value);
  };

  return (
    <div>
      {!isMobile ? (
        <div className="water-container">
          <div className="water">
            <div
              className="App"
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "20px",
                paddingLeft: "50px",
                paddingRight: "50px",
              }}
            >
              <svg
                className="Logo_logo_white__zowGB"
                viewBox="0 0 85 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ paddingLeft: "50px", cursor: "pointer" }}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M54.894 39.5039H48.6641V19.77H54.894V39.5039ZM30.4021 25.9999V39.504H24.1723V22.3647C24.1723 21.6765 24.4457 21.0165 24.9322 20.5301C25.4188 20.0435 26.0787 19.77 26.7669 19.77H42.3312C43.0195 19.77 43.6793 20.0435 44.1657 20.5301C44.6523 21.0165 44.9257 21.6765 44.9257 22.3647V39.504H38.696V25.9999H30.4021ZM14.2345 33.2742V19.7702H20.4644V36.9095C20.4644 37.5977 20.1909 38.2576 19.7044 38.744C19.2179 39.2307 18.5579 39.5041 17.87 39.5041H2.30544C1.61752 39.5041 0.957379 39.2307 0.470894 38.744C-0.0157201 38.2576 -0.289062 37.5977 -0.289062 36.9095V19.7702H5.9407V33.2742H14.2345Z"
                  fill="black"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M65.289 19.7708C65.289 21.8685 63.5858 23.5717 61.4882 23.5717C59.3905 23.5717 57.6875 21.8685 57.6875 19.7708C57.6875 17.6732 59.3905 15.9702 61.4882 15.9702C63.5858 15.9702 65.289 17.6732 65.289 19.7708Z"
                  fill="black"
                ></path>
              </svg>
              <div style={{ paddingTop: "20px" }}>
                <a
                  href="https://paychek.uni.club/"
                  className="apply_btn hover-apply_btn"
                >
                  Uni Paychek
                </a>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ paddingTop: "60px" }}>
                <h1
                  style={{
                    maxWidth: "700px",
                    paddingLeft: "80px",
                    fontSize: "60px",
                    fontWeight: "normal",
                    margin: "20px",
                  }}
                >
                  <span>
                    <strong>NX Wave.</strong>
                  </span>
                  The next-gen credit card for those who love rewards.
                </h1>
                <h1
                  style={{
                    paddingLeft: "100px",
                    fontSize: "17px",
                    paddingTop: "10px",
                  }}
                >
                  1%Cashback &nbsp; + &nbsp; 5x Rewards &nbsp; + &nbsp; Zero
                  Forex Markup
                </h1>
                <div
                  style={{
                    marginLeft: "100px",
                    backgroundColor: "black",
                    width: "315px",
                    marginTop: "20px",
                    height: "50px",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <input
                    style={{
                      backgroundColor: "black",
                      paddingLeft: "10px",
                      borderRadius: "20px",
                      borderColor: "black",
                      color: "white",
                      "::placeholder": {
                        color: "#7E8587",
                      },
                      outline: "none",
                      fontSize: "16px",
                      border: "none",
                      fontWeight: "400",
                      height: "40px",
                    }}
                    placeholder="Enter Phone Number"
                    onChange={handleInputChange}
                    value={phoneNumber}
                  ></input>
                  {phoneNumber ? (
                    <button
                      type="button"
                      style={{
                        backgroundColor: "black",
                        outline: "none",
                        border: "none",
                      }}
                      onClick={() => {
                        setPhoneNumber("");
                      }}
                    >
                      <svg
                        width="14"
                        height="15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.498.498.356 1.72l5.41 5.786L.41 13.233l1.17 1.25 5.355-5.728 5.41 5.786 1.142-1.22-5.41-5.787 5.492-5.873-1.17-1.25-5.491 5.873L1.498.498Z"
                          fill="#fff"
                        ></path>
                      </svg>
                    </button>
                  ) : (
                    <div
                      style={{
                        width: "14px",
                        height: "15px",
                        marginRight: "8px",
                        paddingRight: "4px",
                      }}
                    ></div>
                  )}
                  <button
                    type="submit"
                    style={{
                      borderRadius: "10px",
                      marginTop: "0px",
                      backgroundColor: "yellow",
                      height: "40px",
                      justifyContent: "center",
                      width: "90px",
                      marginLeft: "10px",
                      marginRight: "0px",
                      cursor: isButtonDisabled ? "not-allowed" : "pointer",
                    }}
                    disabled={phoneNumber || !isTickMark}
                  >
                    <span>Apply Now</span>
                  </button>
                </div>
                <div
                  style={{
                    paddingTop: "10px",
                    fontSize: "10px",
                    paddingLeft: "80px",
                    maxWidth: "325px",
                    marginLeft: "20px",
                    marginTop: "15px",
                    lineHeight: "1.4",
                  }}
                >
                  <label
                    htmlFor="consent-msg"
                    className="consent text-white md:text-black text-[10px] leading-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      id="consent-msg"
                      style={{ display: "none" }}
                      checked={isTickMark}
                      onChange={tickMarkHandleChange}
                    />
                    <span className="checkmark"></span>
                    You agree to be contacted by Uni Cards over Call, SMS, Email
                    or WhatsApp to guide you through your application.
                  </label>
                </div>
              </div>
              <div>
                <img
                  src="	https://www.uni.cards/images/nx-wave/nx_wave_hero.png"
                  alt="card_asset"
                  width="400px"
                  height="400px"
                  style={{ paddingRight: "100px", marginTop: "80px" }}
                ></img>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="water-container">
          <div className="water">
            <div
              className="App"
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "20px",
                paddingLeft: "10px",
                paddingRight: "20px",
              }}
            >
              <svg
                className="Logo_logo_white__zowGB"
                viewBox="0 0 85 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ paddingLeft: "10px", cursor: "pointer" }}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M54.894 39.5039H48.6641V19.77H54.894V39.5039ZM30.4021 25.9999V39.504H24.1723V22.3647C24.1723 21.6765 24.4457 21.0165 24.9322 20.5301C25.4188 20.0435 26.0787 19.77 26.7669 19.77H42.3312C43.0195 19.77 43.6793 20.0435 44.1657 20.5301C44.6523 21.0165 44.9257 21.6765 44.9257 22.3647V39.504H38.696V25.9999H30.4021ZM14.2345 33.2742V19.7702H20.4644V36.9095C20.4644 37.5977 20.1909 38.2576 19.7044 38.744C19.2179 39.2307 18.5579 39.5041 17.87 39.5041H2.30544C1.61752 39.5041 0.957379 39.2307 0.470894 38.744C-0.0157201 38.2576 -0.289062 37.5977 -0.289062 36.9095V19.7702H5.9407V33.2742H14.2345Z"
                  fill="black"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M65.289 19.7708C65.289 21.8685 63.5858 23.5717 61.4882 23.5717C59.3905 23.5717 57.6875 21.8685 57.6875 19.7708C57.6875 17.6732 59.3905 15.9702 61.4882 15.9702C63.5858 15.9702 65.289 17.6732 65.289 19.7708Z"
                  fill="black"
                ></path>
              </svg>
              <div style={{ paddingTop: "15px" }}>
                <a
                  href="https://paychek.uni.club/"
                  className="apply_btn hover-apply_btn"
                >
                  Uni Paychek
                </a>
              </div>
            </div>
            <div>
              <img
                src="	https://www.uni.cards/images/nx-wave/nx_wave_hero.png"
                alt="card_asset"
                width="225px"
                height="225px"
                style={{ paddingLeft: "40px", marginTop: "140px" }}
              ></img>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ paddingTop: "10px" }}>
                <h1
                  style={{
                    maxWidth: "300px",
                    paddingLeft: "10px",
                    fontSize: "30px",
                    fontWeight: "normal",
                    margin: "20px",
                  }}
                >
                  <span>
                    <strong>NX Wave.</strong>
                  </span>
                  The next-gen credit card for those who love rewards.
                </h1>
                <h1
                  style={{
                    paddingLeft: "30px",
                    fontSize: "13px",
                    paddingTop: "0px",
                  }}
                >
                  1%Cashback &nbsp; + &nbsp; 5x Rewards &nbsp; + &nbsp; Zero
                  Forex Markup
                </h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
