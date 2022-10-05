import React, { useContext } from "react";
import GlobalContex from "../context/GlobalContex";
// import oval from "../../public/oval.svg";

const Loader = () => {
  const { loader } = useContext(GlobalContex);

  return (
    <>
      {loader === true && (
        <div className="Loader">
          <svg
            width="80"
            height="80"
            viewBox="0 0 38 38"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#fff"
          >
            <g fill="none" fill-rule="evenodd">
              <g transform="translate(1 1)" strokeWidth="2">
                <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
                <path d="M36 18c0-9.94-8.06-18-18-18">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="1s"
                    repeatCount="indefinite"
                  />
                </path>
              </g>
            </g>
          </svg>
        </div>
      )}
    </>
  );
};

export default Loader;