import React from "react";
import { Link } from "react-router-dom";
import { Undo2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-5">
      <h1>Route not found</h1>

      <button
        onClick={() => navigate(-1)}
        className="flex justify-center items-center gap-2 w-max"
      >
        <Undo2 size={20} /> {"Back To Home"}
      </button>
    </div>
  );
};

export default NotFound;
