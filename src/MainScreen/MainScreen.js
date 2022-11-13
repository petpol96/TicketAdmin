import React, { useState } from "react";
import { imageUrl } from "../services/utility";
import "./MainScreen.css";
import MainScreenHeader from "./MainScreenHeader";
import MainScreenTicketHolder from "./MainScreenTicketHolder";
function MainScreen(props) {
  const [isGrid, setisGrid] = useState(false)
  return (
    <>
      <MainScreenHeader name={props.user.Firstname} />
      <div className="imageHolder">
        <img align='right' onClick={()=>setisGrid(!isGrid)} src={imageUrl(isGrid)}/>
      </div>
      
      <MainScreenTicketHolder token={props.user.Token} isGrid={isGrid}/>
    </>
  );
}

export default MainScreen;
