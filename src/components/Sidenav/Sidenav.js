import "./Sidenav.css";
import React, { useEffect } from "react";

function Sidenav({ currentState, setCurrentState, isExpanded, setIsExpanded }) {
  // useEffect hook to run code after the component renders
  useEffect(() => {
    const burgerButton = document.querySelector(".burger-button");
    const tooltip = document.querySelector(".collapse-tooltip");

    // Check if burgerButton exists before adding listeners
    if (burgerButton) {
      burgerButton.addEventListener("mouseover", () => {
        tooltip.classList.add("visible");
      });

      burgerButton.addEventListener("mouseout", () => {
        tooltip.classList.remove("visible");
      });
    }
  }, []); // Empty dependency array: runs only once after initial render

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleItemClick = (index) => {
    setCurrentState(index);
  };

  return (
    <div className="big">
      <div className={`side-container ${isExpanded ? "expanded" : ""}`}>
        <button className="collapser burger-button" onClick={handleClick}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {isExpanded && (
          <div className="expanded-item">
            <span
              className={`but ${currentState === 0 ? "active" : ""}`}
              onClick={() => handleItemClick(0)} // Add onClick handler
            >
              Introduction
            </span>
            <span
              className={`but ${currentState === 1 ? "active" : ""}`}
              onClick={() => handleItemClick(1)} // Add onClick handler
            >
              Image2Text
            </span>
            <span
              className={`but ${currentState === 2 ? "active" : ""}`}
              onClick={() => handleItemClick(2)} // Add onClick handler
            >
              Github Rest API
            </span>
            <span
              className={`but ${currentState === 3 ? "active" : ""}`}
              onClick={() => handleItemClick(3)} // Add onClick handler
            >
              Image Generation
            </span>
            <span
              className={`but ${currentState === 4 ? "active" : ""}`}
              onClick={() => handleItemClick(4)} // Add onClick handler
            >
              LangChain LLM
            </span>
          </div>
        )}
      </div>
      <div className="collapse-tooltip">
        {isExpanded ? "Collapse Menu" : "Expand Menu"}
      </div>
    </div>
  );
}

export default Sidenav;
