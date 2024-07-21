import "./FirstPage.css";
import IntroContent from "../IntroContent/IntroContent";
import GitStuff from "../GitStuff/GitStuff";
import CharacterScreen from "../CharacterScreen/CharacterScreen";
import Streamlit from "../Streamlit/Streamlit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import VertexAI from "../VertexAI/VertexAI";

function FirstPage({ currentState, setCurrentState }) {
  return (
    <div className="page-container">
      <div className="content">
        {currentState === 0 && <IntroContent />}
        {currentState === 1 && <VertexAI />}
        {currentState === 2 && <GitStuff userName="jDaowy" />}
        {currentState === 3 && <CharacterScreen />}
        {currentState === 4 && <Streamlit />}
      </div>
    </div>
  );
}

export default FirstPage;
