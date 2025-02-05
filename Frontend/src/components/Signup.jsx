import { useState } from "react";
import authServices from "../services/auth.js";
import { useNavigate } from "react-router-dom";

function Signup({ title }) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    const userSignedup = await authServices.signup(inputData);
    if (!userSignedup) alert("User registration failed!");

    setLoading(false);
    navigate("/login");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  return (
    <form
      className="border border-neutral-500 flex flex-col p-5 gap-3 w-max min-w-80"
      onSubmit={submitForm}
    >
      <div className="text-2xl text-center">{title}</div>
      {loading && <h2 className="self-center">Loading...</h2>}
      <input
        name="name"
        onChange={handleChange}
        value={inputData.name}
        type="text"
        className="mt-1 block w-full px-3 py-2 border border-neutral-600 rounded-md"
        placeholder="name"
      />
      <input
        name="email"
        onChange={handleChange}
        value={inputData.email}
        type="email"
        className="mt-1 block w-full px-3 py-2 border border-neutral-600 rounded-md"
        placeholder="email"
      />
      <input
        name="password"
        onChange={handleChange}
        value={inputData.password}
        type="text"
        className="mt-1 block w-full px-3 py-2 border border-neutral-600 rounded-md"
        placeholder="password"
      />
      <button className="mt-1" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Signup;
