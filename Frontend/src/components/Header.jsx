import React from "react";
import { Link } from "react-router";
import Logout from "./Logout";

const Header = () => {
  return (
    <div className="border flex justify-between p-4 items-center">
      <div>Logo</div>
      <ul className="flex gap-10 items-center">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Logout />
        </li>
      </ul>
    </div>
  );
};

export default Header;
