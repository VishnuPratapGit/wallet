import React from "react";
import { Link } from "react-router";
import Logout from "./Logout";
import { useSelector } from "react-redux";

const Header = () => {
  const userStatus = useSelector((state) => state.auth.status);

  const navLinks = [
    {
      name: "🏠Home",
      url: "/",
      active: userStatus,
    },
    {
      name: "Login",
      url: "/login",
      active: !userStatus,
    },
    {
      name: "Signup",
      url: "/signup",
      active: !userStatus,
    },
    {
      name: "💵History",
      url: "/transaction-history",
      active: userStatus,
    },
  ];

  return (
    <div className="border border-neutral-600 rounded-lg flex justify-between items-center px-3 pl-5 py-2">
      <div>
        <img src="/vite.svg" alt="LOGO" />
      </div>
      <div className="flex items-center gap-10">
        <ul className="flex gap-3 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.active && <Link to={link.url}>{link.name}</Link>}
            </li>
          ))}
        </ul>
        {userStatus && <Logout />}
      </div>
    </div>
  );
};

export default Header;
