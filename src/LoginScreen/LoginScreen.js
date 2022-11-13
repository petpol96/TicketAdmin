import React, { useState } from "react";
import { loginValidation } from "../services/apiCalls";
import "./LoginScreen.css";
function LoginScreen(props) {
  const [userInfo, setUserInfo] = useState({ Username: "", Password: "" });
  return (
    <div className="loginWrapper">
      <div className="loginInfo">
        <h1>Log in</h1>
        <p>Username</p>
        <div className="loginInputsWrapper">
          <input
            className="loginInputs"
            value={userInfo.Username}
            onChange={(event) =>
              setUserInfo({ ...userInfo, Username: event.target.value })
            }
          />
        </div>
        <p>Password</p>
        <div className="loginInputsWrapper">
          <input
            type={"password"}
            className="loginInputs"
            value={userInfo.Password}
            onChange={(event) =>
              setUserInfo({ ...userInfo, Password: event.target.value })
            }
          />
        </div>
        <div className="loginBtnWrapper">
          <button 
          className="btn"
          type="submit"
          onClick={()=>loginValidation(userInfo,props.setUser)}
          >Log In</button>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
