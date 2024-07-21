import "./Main.css";
import Sidenav from "../Sidenav/Sidenav";
import { useState } from "react";
import FirstPage from "../FirstPage/FirstPage";
import Arrows from "../Arrows/Arrows";

function Main() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [currentState, setCurrentState] = useState(0);

  return (
    <div className="Main">
      <div
        className={`container ${isSidebarExpanded ? "" : "sidebar-collapsed"}`}
      >
        <div className={`sidebar ${isSidebarExpanded ? "" : "collapsed"}`}>
          <Sidenav
            currentState={currentState}
            setCurrentState={setCurrentState}
            isExpanded={isSidebarExpanded}
            setIsExpanded={setIsSidebarExpanded}
          />
        </div>
        <div class="title">
          <div class="logo">
            <b>
              Jord<span>o</span>n's Portfo<span>l</span>io
            </b>
          </div>
        </div>
        <div class="page">
          <FirstPage
            currentState={currentState}
            setCurrentState={setCurrentState}
          />
        </div>
        <div class="arrows">
          <Arrows
            currentState={currentState}
            setCurrentState={setCurrentState}
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
