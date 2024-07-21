import "./Arrows.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Arrows({ currentState, setCurrentState }) {
  const MAX_STATE = 4; // Maximum value for currentState

  const handleGoBack = () => {
    setCurrentState((prev) => Math.max(0, prev - 1));
  };

  const handleGoForward = () => {
    setCurrentState((prev) => Math.min(MAX_STATE, prev + 1));
  };

  return (
    <div className="nav-buttons">
      <FontAwesomeIcon
        className="arrow"
        icon={faArrowLeft}
        onClick={handleGoBack}
      />
      <span className="page-num">
        {currentState + 1}/{MAX_STATE + 1}
      </span>
      <FontAwesomeIcon
        className="arrow"
        icon={faArrowRight}
        onClick={handleGoForward}
      />
    </div>
  );
}

export default Arrows;
