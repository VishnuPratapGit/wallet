import { useState } from "react";
import authServices from "../auth";

function Signup({ title }) {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const submitForm = async (e) => {
    e.preventDefault();
    authServices.signup();
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
      className="border flex flex-col p-2 gap-1 w-max min-w-80"
      onSubmit={submitForm}
    >
      <div className="text-2xl">{title}</div>
      <input
        name="name"
        onChange={handleChange}
        value={inputData.name}
        type="text"
        placeholder="name"
      />
      <input
        name="email"
        onChange={handleChange}
        value={inputData.email}
        type="email"
        placeholder="email"
      />
      <input
        name="password"
        onChange={handleChange}
        value={inputData.password}
        type="text"
        placeholder="password"
      />
      <button className="mt-1" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Signup;
