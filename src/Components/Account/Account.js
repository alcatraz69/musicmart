import React from "react";
import "./Account.css";
import usericon from "../../Assets/icons/usericon.png";
import { useAuth } from "../../store/AuthContext";
import { useContext } from "react";
import { ProductContext } from "../../store/ProductContext";
import { useHistory } from "react-router-dom";

export const Account = () => {
  const { dispatch } = useContext(ProductContext);
  const { authState, authDispatch } = useAuth();
  const history = useHistory();
  function logOutHandler() {
    dispatch({ type: "LOG_OUT_HANDLER" });
    authDispatch({ type: "LOG_OUT_HANDLER" });
    history.push("/");
  }
  return (
    <div className="account">
      <h1 className="account_title">My Account</h1>

      <img className="usericon" src={usericon} alt="icon" />

      <p className="account_name">{authState.name}</p>
      <p className="account_email">{authState.email}</p>
      <button onClick={logOutHandler} className="logout_btn">
        LOG OUT
      </button>
    </div>
  );
};
