import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout as logoutAction } from "../redux/authSlice.js";
import authServices from "../services/auth.js";

const Logout = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const logoutHandler = () => {
    authServices.logout().then(() => {
      dispatch(logoutAction());
      navigate("/login");
    });
  };

  return (
    <button className="bg-rose-600 text-red-500" onClick={logoutHandler}>
      Logout
    </button>
  );
};

export default Logout;
