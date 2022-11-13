import React from "react";
import "./MainScreen.css";
function MainScreenHeader(props) {
  return (
    <div className="mainScreenHeader">
      <h2 className="mainScreenHeaderTitle">Hello {props.name}</h2>
    </div>
  );
}

export default MainScreenHeader;
