import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  let navigate = useNavigate();
  const logoutHandler = () => {
    fetch("api/v1/users/logout")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/login");
      })
      .catch((err) => console.log("Error in Logout", err));
  };

  return (
    <button className="bg-rose-600 text-red-500" onClick={logoutHandler}>
      Logout
    </button>
  );
};

export default Logout;
