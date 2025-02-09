import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Route not found</h1>
      <Link to="/" className="mt-2">
        <button>Go T0 Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
